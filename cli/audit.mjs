#!/usr/bin/env node
/**
 * design-styles audit — check a codebase against a style's machine token contract.
 *
 * Zero deps, Node 18+. Static analysis only: flags colors, font stacks, radii,
 * shadows, and border widths that violate the contract emitted by
 * frontend/scripts/build-api.mjs (public/api/<slug>.contract.json).
 *
 * Covers raw CSS/JS declarations plus Tailwind utilities (rounded, shadow,
 * border, bg and text color scales, @apply) found in class attributes.
 *
 * Usage:
 *   node cli/audit.mjs [path] [--style <slug>] [--contract <file|url>]
 *                      [--format text|json] [--ci]
 *
 * Style resolution order: --style flag → <path>/DESIGN.lock → <path>/.well-known/design-style.json
 * Exit codes: 0 clean (or violations without --ci) · 1 violations with --ci · 2 usage/contract errors
 */
import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join, resolve, extname, relative, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const SITE = process.env.DESIGN_STYLES_SITE_URL ?? "https://design-styles.dev";
const here = dirname(fileURLToPath(import.meta.url));
const localContractDir = join(here, "..", "frontend", "public", "api");

const SCAN_EXTS = new Set([
  ".css", ".scss", ".less", ".html", ".htm", ".js", ".jsx", ".mjs", ".cjs",
  ".ts", ".tsx", ".vue", ".svelte", ".astro",
]);
const SKIP_DIRS = new Set([
  "node_modules", ".git", ".next", "dist", "out", "build", "coverage",
  ".venv", "venv", ".turbo", ".cache", ".svelte-kit",
]);
const GENERIC_FAMILIES = new Set([
  "serif", "sans-serif", "monospace", "system-ui", "cursive", "fantasy",
  "ui-serif", "ui-sans-serif", "ui-monospace", "ui-rounded", "math", "emoji",
  "fangsong", "inherit", "initial", "unset", "-apple-system", "blinkmacsystemfont",
]);

const HELP = `design-styles audit — enforce a style's token contract on a codebase

Usage:
  node cli/audit.mjs [path] [options]

Options:
  --style <slug>      Style to audit against (skips DESIGN.lock discovery)
  --contract <f|url>  Contract file or URL (default: local build, then ${SITE}/api/<slug>.contract.json)
  --format <text|json>  Output format (default: text)
  --ci                Exit 1 when violations are found (default: report only)
  -h, --help          Show this help

Style resolution: --style → <path>/DESIGN.lock → <path>/.well-known/design-style.json
`;

function fail(msg) {
  console.error(`[design-styles] ${msg}`);
  process.exit(2);
}

function parseArgs(argv) {
  const args = { path: ".", style: null, contract: null, format: "text", ci: false, help: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--style") args.style = argv[++i] ?? fail("--style requires a slug");
    else if (a === "--contract") args.contract = argv[++i] ?? fail("--contract requires a file or URL");
    else if (a === "--format") args.format = argv[++i] ?? "text";
    else if (a === "--ci") args.ci = true;
    else if (a === "-h" || a === "--help") args.help = true;
    else if (a.startsWith("-")) fail(`Unknown argument: ${a}\n\n${HELP}`);
    else if (args.path === ".") args.path = a;
    else fail(`Unexpected extra argument: ${a}\n\n${HELP}`);
  }
  if (!["text", "json"].includes(args.format)) fail(`--format must be "text" or "json"`);
  return args;
}

function readJson(path) {
  try {
    return JSON.parse(readFileSync(path, "utf8"));
  } catch (err) {
    throw new Error(`${path}: ${(err && err.message) || err}`);
  }
}

function discoverStyle(target, flagSlug) {
  if (flagSlug) return { slug: flagSlug, source: "--style flag" };
  const lock = join(target, "DESIGN.lock");
  if (existsSync(lock)) {
    const j = readJson(lock); // throws with a clear message on bad JSON
    if (!j.style) throw new Error(`${lock}: missing "style" field`);
    return { slug: String(j.style), version: j.version, source: "DESIGN.lock" };
  }
  const wellKnown = join(target, ".well-known", "design-style.json");
  if (existsSync(wellKnown)) {
    const j = readJson(wellKnown);
    if (!j.style) throw new Error(`${wellKnown}: missing "style" field`);
    return { slug: String(j.style), version: j.version, source: ".well-known/design-style.json" };
  }
  throw new Error(
    `No style declared. Add a DESIGN.lock to the repo root:\n  {"style":"neo-brutalism","version":"1.0.0"}\n` +
      `or pass --style <slug>.`
  );
}

async function loadContract(slug, override) {
  if (override) {
    if (/^https?:\/\//i.test(override)) {
      const res = await fetch(override, { signal: AbortSignal.timeout(5000) });
      if (!res.ok) throw new Error(`Failed to fetch contract ${override}: HTTP ${res.status}`);
      return res.json();
    }
    return readJson(override);
  }
  const local = join(localContractDir, `${slug}.contract.json`);
  if (existsSync(local)) return readJson(local);
  try {
    const res = await fetch(`${SITE}/api/${slug}.contract.json`, { signal: AbortSignal.timeout(5000) });
    if (res.ok) return res.json();
  } catch {
    /* offline — fall through to the error below */
  }
  throw new Error(
    `No contract for "${slug}". Run frontend/scripts/build-api.mjs in the atlas repo, ` +
      `or pass --contract <file|url>.`
  );
}

function walkFiles(dir, acc = []) {
  let entries;
  try {
    entries = readdirSync(dir, { withFileTypes: true });
  } catch {
    return acc;
  }
  for (const e of entries) {
    const p = join(dir, e.name);
    if (e.isDirectory()) {
      if (SKIP_DIRS.has(e.name) || e.name.startsWith(".")) continue;
      walkFiles(p, acc);
    } else if (e.isFile() && SCAN_EXTS.has(extname(e.name).toLowerCase())) {
      acc.push(p);
    }
  }
  return acc;
}

function lineOf(source, index) {
  let line = 1;
  for (let i = 0; i < index && i < source.length; i++) if (source[i] === "\n") line++;
  return line;
}

/** Value of `prop: value` / `prop: value` object-style declarations. */
function declarations(source, props) {
  const out = [];
  for (const prop of props) {
    const re = new RegExp(`(?:^|[\\s;{(])${prop}\\s*:\\s*([^;}\\n]+)`, "gi");
    let m;
    while ((m = re.exec(source))) out.push({ value: m[1].trim(), index: m.index });
  }
  return out;
}

function toPx(token) {
  const m = String(token).trim().match(/^([+-]?\d+(?:\.\d+)?)(px|rem|em)?$/i);
  if (!m) return null;
  const n = parseFloat(m[1]);
  const unit = (m[2] ?? "px").toLowerCase();
  return unit === "px" ? n : unit === "rem" || unit === "em" ? n * 16 : null;
}

function hexTo6(hex) {
  let h = hex.replace(/^#/, "").toLowerCase();
  if (h.length === 3 || h.length === 4) h = h.slice(0, 3).split("").map((c) => c + c).join("");
  if (h.length === 8) h = h.slice(0, 6);
  return `#${h}`;
}

function rgbToHex(r, g, b) {
  const c = (v) => Math.max(0, Math.min(255, parseInt(v, 10))).toString(16).padStart(2, "0");
  return `#${c(r)}${c(g)}${c(b)}`;
}

/** Split "a, b, c" on top-level commas only (commas inside rgba(...) stay). */
function splitTopLevel(value) {
  const parts = [];
  let depth = 0;
  let cur = "";
  for (const ch of value) {
    if (ch === "(") depth++;
    if (ch === ")") depth--;
    if (ch === "," && depth === 0) {
      parts.push(cur);
      cur = "";
    } else cur += ch;
  }
  if (cur.trim()) parts.push(cur);
  return parts;
}

// ---------------------------------------------------------------------------
// Checks. Each returns { violations: [{ line, found, expected, hint }] }.
// ---------------------------------------------------------------------------

function maskNonCssColors(source) {
  // Replace HTML comments <!-- ... --> with spaces (preserving line breaks)
  let s = source.replace(/<!--[\s\S]*?-->/g, (m) => m.replace(/[^\n]/g, " "));
  // Replace CSS/JS block comments /* ... */ with spaces
  s = s.replace(/\/\*[\s\S]*?\*\//g, (m) => m.replace(/[^\n]/g, " "));
  // Replace JS line comments // ... with spaces
  s = s.replace(/(^|[^\\])\/\/[^\n]*/g, (m) => m.replace(/[^\n]/g, " "));
  // Replace href="#..." and id="..." anchor targets and IDs so they aren't parsed as hex colors
  s = s.replace(/\b(?:href|id)\s*=\s*(["'])#[^"'\s>]+\1/gi, (m) => m.replace(/[^\n]/g, " "));
  return s;
}

// ---------------------------------------------------------------------------
// Tailwind utility support. Named utilities never appear as CSS declarations,
// so each check also scans class="..."/className="..."/@apply tokens.
// ---------------------------------------------------------------------------

const TAILWIND_SHADES = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "950"];
const TAILWIND_HUES = {
  slate: ["#f8fafc", "#f1f5f9", "#e2e8f0", "#cbd5e1", "#94a3b8", "#64748b", "#475569", "#334155", "#1e293b", "#0f172a", "#020617"],
  gray: ["#f9fafb", "#f3f4f6", "#e5e7eb", "#d1d5db", "#9ca3af", "#6b7280", "#4b5563", "#374151", "#1f2937", "#111827", "#030712"],
  zinc: ["#fafafa", "#f4f4f5", "#e4e4e7", "#d4d4d8", "#a1a1aa", "#71717a", "#52525b", "#3f3f46", "#27272a", "#18181b", "#09090b"],
  neutral: ["#fafafa", "#f5f5f5", "#e5e5e5", "#d4d4d4", "#a3a3a3", "#737373", "#525252", "#404040", "#262626", "#171717", "#0a0a0a"],
  stone: ["#fafaf9", "#f5f5f4", "#e7e5e4", "#d6d3d1", "#a8a29e", "#78716c", "#57534e", "#44403c", "#292524", "#1c1917", "#0c0a09"],
  red: ["#fef2f2", "#fee2e2", "#fecaca", "#fca5a5", "#f87171", "#ef4444", "#dc2626", "#b91c1c", "#991b1b", "#7f1d1d", "#450a0a"],
  orange: ["#fff7ed", "#ffedd5", "#fed7aa", "#fdba74", "#fb923c", "#f97316", "#ea580c", "#c2410c", "#9a3412", "#7c2d12", "#431407"],
  amber: ["#fffbeb", "#fef3c7", "#fde68a", "#fcd34d", "#fbbf24", "#f59e0b", "#d97706", "#b45309", "#92400e", "#78350f", "#451a03"],
  yellow: ["#fefce8", "#fef9c3", "#fef08a", "#fde047", "#facc15", "#eab308", "#ca8a04", "#a16207", "#854d0e", "#713f12", "#422006"],
  lime: ["#f7fee7", "#ecfccb", "#d9f99d", "#bef264", "#a3e635", "#84cc16", "#65a30d", "#4d7c0f", "#3f6212", "#365314", "#1a2e05"],
  green: ["#f0fdf4", "#dcfce7", "#bbf7d0", "#86efac", "#4ade80", "#22c55e", "#16a34a", "#15803d", "#166534", "#14532d", "#052e16"],
  emerald: ["#ecfdf5", "#d1fae5", "#a7f3d0", "#6ee7b7", "#34d399", "#10b981", "#059669", "#047857", "#065f46", "#064e3b", "#022c22"],
  teal: ["#f0fdfa", "#ccfbf1", "#99f6e4", "#5eead4", "#2dd4bf", "#14b8a6", "#0d9488", "#0f766e", "#115e59", "#134e4a", "#042f2e"],
  cyan: ["#ecfeff", "#cffafe", "#a5f3fc", "#67e8f9", "#22d3ee", "#06b6d4", "#0891b2", "#0e7490", "#155e75", "#164e63", "#083344"],
  sky: ["#f0f9ff", "#e0f2fe", "#bae6fd", "#7dd3fc", "#38bdf8", "#0ea5e9", "#0284c7", "#0369a1", "#075985", "#0c4a6e", "#082f49"],
  blue: ["#eff6ff", "#dbeafe", "#bfdbfe", "#93c5fd", "#60a5fa", "#3b82f6", "#2563eb", "#1d4ed8", "#1e40af", "#1e3a8a", "#172554"],
  indigo: ["#eef2ff", "#e0e7ff", "#c7d2fe", "#a5b4fc", "#818cf8", "#6366f1", "#4f46e5", "#4338ca", "#3730a3", "#312e81", "#1e1b4b"],
  violet: ["#f5f3ff", "#ede9fe", "#ddd6fe", "#c4b5fd", "#a78bfa", "#8b5cf6", "#7c3aed", "#6d28d9", "#5b21b6", "#4c1d95", "#2e1065"],
  purple: ["#faf5ff", "#f3e8ff", "#e9d5ff", "#d8b4fe", "#c084fc", "#a855f7", "#9333ea", "#7e22ce", "#6b21a8", "#581c87", "#3b0764"],
  fuchsia: ["#fdf4ff", "#fae8ff", "#f5d0fe", "#f0abfc", "#e879f9", "#d946ef", "#c026d3", "#a21caf", "#86198f", "#701a75", "#4a044e"],
  pink: ["#fdf2f8", "#fce7f3", "#fbcfe8", "#f9a8d4", "#f472b6", "#ec4899", "#db2777", "#be185d", "#9d174d", "#831843", "#500724"],
  rose: ["#fff1f2", "#ffe4e6", "#fecdd3", "#fda4af", "#fb7185", "#f43f5e", "#e11d48", "#be123c", "#9f1239", "#881337", "#4c0519"],
};
const TAILWIND_MONO = { black: "#000000", white: "#ffffff" };
const ROUNDED_PX = { none: 0, sm: 2, md: 6, lg: 8, xl: 12, "2xl": 16, "3xl": 24, full: 9999 };

function tailwindHex(hue, shade) {
  const arr = TAILWIND_HUES[String(hue).toLowerCase()];
  if (!arr) return null;
  const i = TAILWIND_SHADES.indexOf(String(shade));
  return i < 0 ? null : arr[i];
}

/** Class-attribute tokens only (class/className/@apply) so CSS declarations are not double-counted. */
function tailwindTokens(source) {
  const out = [];
  const collect = (m, groupIdx) => {
    const chunk = m[groupIdx];
    if (!chunk) return;
    const chunkStart = m.index + m[0].indexOf(chunk);
    let pos = 0;
    for (const tok of chunk.split(/\s+/)) {
      if (!tok) continue;
      const at = chunk.indexOf(tok, pos);
      if (at < 0) continue;
      out.push({ token: tok, index: chunkStart + at });
      pos = at + tok.length;
    }
  };
  let m;
  const attrRe = /class(?:Name)?\s*=\s*(["'`])([\s\S]*?)\1/g;
  attrRe.lastIndex = 0;
  while ((m = attrRe.exec(source))) collect(m, 2);
  const applyRe = /@apply\s+([^;]+);/g;
  applyRe.lastIndex = 0;
  while ((m = applyRe.exec(source))) collect(m, 1);
  return out;
}

/** Strip variant prefixes (hover:/md:/dark:), important (!) and opacity (/50). */
function baseToken(token) {
  let t = token;
  const colon = t.lastIndexOf(":");
  if (colon >= 0) t = t.slice(colon + 1);
  if (t.startsWith("!")) t = t.slice(1);
  const slash = t.indexOf("/");
  if (slash >= 0) t = t.slice(0, slash);
  return t;
}

function roundedTokenToPx(t) {
  const arb = t.match(/^rounded(?:-[trblxyse]+)?-\[(.+)\]$/);
  if (arb) return toPx(arb[1]);
  if (t === "rounded" || /^rounded(?:-[trblxyse]+)?$/.test(t)) return 4;
  const m = t.match(/^rounded(?:-[trblxyse]+)?-(none|sm|md|lg|xl|2xl|3xl|full)$/);
  if (m) return ROUNDED_PX[m[1]];
  return null;
}

function shadowTokenIsBlurred(t) {
  if (t === "shadow-none") return false;
  if (/^shadow(?:-[trblxyse]+)?-\[(.+)\]$/.test(t)) return true;
  if (t === "shadow" || t === "shadow-inner") return true;
  return /^shadow-(sm|md|lg|xl|2xl)$/.test(t);
}

function borderWidthTokenToPx(t) {
  const arb = t.match(/^border(?:-[xytrbl])?-\[(.+)\]$/);
  if (arb) {
    const v = arb[1];
    if (/^(#|current|transparent|inherit)/.test(v)) return null;
    return toPx(v);
  }
  const m = t.match(/^border(?:-[xytrbl])?-(0|2|4|8)$/);
  if (m) return parseInt(m[1], 10);
  if (/^border(?:-[xytrbl])?$/.test(t)) return 1;
  return null;
}

function colorTokenToHex(t) {
  const m = t.match(/^(bg|text|border|ring|ring-offset|from|via|to|accent|decoration|fill|stroke|outline|placeholder|caret|divide)-([a-z]+)-(\d{2,3})$/i);
  if (m) {
    const hex = tailwindHex(m[2], m[3]);
    return hex ? hex.toLowerCase() : null;
  }
  const m2 = t.match(/^(bg|text|border|ring|from|via|to|accent|decoration|fill|stroke|outline)-(black|white)$/i);
  if (m2) return TAILWIND_MONO[m2[2].toLowerCase()];
  return null;
}

function checkPalette(contract, allowedExtra = new Set()) {
  return (source) => {
    const violations = [];
    const allowed = new Set([
      ...Object.values(contract.palette ?? {}).map((v) => String(v).toLowerCase()),
      "transparent", "currentcolor", "inherit", "none", ...allowedExtra,
    ]);
    const scannable = maskNonCssColors(source);
    const scan = (raw, normalize) => {
      let m;
      const re = normalize.re;
      re.lastIndex = 0;
      while ((m = re.exec(scannable))) {
        const hex = normalize.fn(m);
        if (allowed.has(hex)) continue;
        violations.push({
          line: lineOf(source, m.index),
          found: m[0],
          expected: `one of the ${contract.slug} palette (${Object.values(contract.palette).join(", ")})`,
          hint: "Swap to a palette token, or silence intentional exceptions in your CI invocation.",
        });
      }
    };
    scan(scannable, {
      re: /#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})(?![0-9a-fA-F])/g,
      fn: (m) => hexTo6(m[0]),
    });
    scan(scannable, {
      re: /\brgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})/g,
      fn: (m) => rgbToHex(m[1], m[2], m[3]),
    });
    for (const { token, index } of tailwindTokens(scannable)) {
      const hex = colorTokenToHex(baseToken(token));
      if (!hex || allowed.has(hex)) continue;
      violations.push({
        line: lineOf(source, index),
        found: token,
        expected: `one of the ${contract.slug} palette (${Object.values(contract.palette).join(", ")})`,
        hint: "Swap the Tailwind color utility to a palette token (e.g. bg-[#...] with a contract hex).",
      });
    }
    return violations;
  };
}

function firstFamily(value) {
  return String(value)
    .split(",")[0]
    .trim()
    .replace(/^["']|["']$/g, "")
    .toLowerCase();
}

function checkFonts(contract) {
  const allowed = new Set([
    ...(contract.fonts?.displayStack ?? []),
    ...(contract.fonts?.bodyStack ?? []),
    ...GENERIC_FAMILIES,
  ]);
  return (source) => {
    const violations = [];
    for (const d of declarations(source, ["font-family", "fontFamily"])) {
      if (/var\(|\btheme\b/.test(d.value)) continue;
      const fam = firstFamily(d.value);
      if (!fam || allowed.has(fam)) continue;
      violations.push({
        line: lineOf(source, d.index),
        found: `font-family: ${d.value}`,
        expected: `primary family from ${contract.fonts?.display ?? "?"} / ${contract.fonts?.body ?? "?"}`,
        hint: "Load the style's display/body stacks before custom families.",
      });
    }
    return violations;
  };
}

function lengthTokens(decl) {
  return decl
    .split(/\s+/)
    .map((t) => t.replace(/[;,"'`].*$/, ""))
    .map(toPx)
    .filter((n) => n !== null);
}

function checkRadius(contract) {
  const { max, pill } = contract.radius ?? {};
  return (source) => {
    const violations = [];
    for (const d of declarations(source, ["border-radius", "borderRadius"])) {
      const pxs = lengthTokens(d.value.split("/")[0]);
      for (const px of pxs) {
        if (pill && px >= 100) continue;
        if (max !== undefined && px > max) {
          violations.push({
            line: lineOf(source, d.index),
            found: `border-radius: ${d.value}`,
            expected: `≤ ${max}px${pill ? " (999px pill allowed)" : ""}`,
            hint: `Soften to the style's radius range or use a pill (${pill ?? "none"}).`,
          });
          break;
        }
      }
    }
    for (const { token, index } of tailwindTokens(source)) {
      const px = roundedTokenToPx(baseToken(token));
      if (px === null) continue;
      if (pill && px >= 100) continue;
      if (max !== undefined && px > max) {
        violations.push({
          line: lineOf(source, index),
          found: token,
          expected: `≤ ${max}px${pill ? " (999px pill allowed)" : ""}`,
          hint: `Swap to a smaller radius utility (e.g. rounded-md) or arbitrary rounded-[${max}px].`,
        });
      }
    }
    return violations;
  };
}

function checkShadowHard(contract) {
  return (source) => {
    const violations = [];
    for (const d of declarations(source, ["box-shadow", "boxShadow"])) {
      if (/var\(/.test(d.value)) continue;
      for (const chunk of splitTopLevel(d.value)) {
        const stripped = chunk.replace(/\([^)]*\)/g, " ");
        const lengths = stripped.match(/(?:^|\s)[+-]?\d*\.?\d+(?:px|rem|em)?(?=\s|$)/g) ?? [];
        const nums = lengths.map((t) => toPx(t.trim())).filter((n) => n !== null);
        const blur = nums[2];
        if (blur !== undefined && blur > 0) {
          violations.push({
            line: lineOf(source, d.index),
            found: `box-shadow: ${d.value}`,
            expected: "blur 0 — hard offset shadows only",
            hint: `Use solid offset shadows (e.g. ${contract.shadow?.offset?.[0] ?? 4}px ${contract.shadow?.offset?.[1] ?? 4}px 0 ${contract.shadow?.color ?? "#111111"}).`,
          });
          break;
        }
      }
    }
    for (const { token, index } of tailwindTokens(source)) {
      if (!shadowTokenIsBlurred(baseToken(token))) continue;
      violations.push({
        line: lineOf(source, index),
        found: token,
        expected: "blur 0 — hard offset shadows only",
        hint: `Drop the blurred shadow utility and use a hard offset (e.g. shadow-[${contract.shadow?.offset?.[0] ?? 4}px_${contract.shadow?.offset?.[1] ?? 4}px_0_${contract.shadow?.color ?? "#111111"}]).`,
      });
    }
    return violations;
  };
}

function checkBorderWidth(contract) {
  const [min] = contract.border?.width ?? [];
  return (source) => {
    const violations = [];
    const patterns = [
      /(?:^|[\s;{(])border\s*:\s*([+-]?\d*\.?\d+(?:px|rem|em))\b/gi,
      /(?:^|[\s;{(])border-(?:width|top|right|bottom|left)\s*:\s*([+-]?\d*\.?\d+(?:px|rem|em)?)\b/gi,
      /(?:^|[\s{(])border(?:Top|Right|Bottom|Left)?Width\s*:\s*["'`]?([+-]?\d*\.?\d+(?:px|rem|em)?)/g,
    ];
    for (const re of patterns) {
      let m;
      while ((m = re.exec(source))) {
        const px = toPx(m[1]);
        if (px === null || px === 0 || px >= min) continue;
        violations.push({
          line: lineOf(source, m.index),
          found: m[0].trim(),
          expected: `≥ ${min}px borders`,
          hint: "Thicken borders to the style's range — hairlines are off-style.",
        });
      }
    }
    if (min !== undefined) {
      for (const { token, index } of tailwindTokens(source)) {
        const px = borderWidthTokenToPx(baseToken(token));
        if (px === null || px === 0 || px >= min) continue;
        violations.push({
          line: lineOf(source, index),
          found: token,
          expected: `≥ ${min}px borders`,
          hint: "Thicken the border utility (e.g. border-2) — hairlines are off-style.",
        });
      }
    }
    return violations;
  };
}

// ---------------------------------------------------------------------------

function collectViolations(contract, files) {
  const impl = {
    palette: checkPalette(contract),
    fonts: contract.fonts ? checkFonts(contract) : null,
    radius: contract.radius ? checkRadius(contract) : null,
    "shadow-hard": contract.shadow?.style === "hard" ? checkShadowHard(contract) : null,
    "border-width": contract.border?.width ? checkBorderWidth(contract) : null,
  };
  const active = (contract.checks ?? []).filter((c) => impl[c]);
  const skipped = (contract.checks ?? []).filter((c) => !impl[c]);
  const violations = [];
  for (const file of files) {
    let source;
    try {
      source = readFileSync(file, "utf8");
    } catch {
      continue;
    }
    for (const check of active) {
      for (const v of impl[check](source)) {
        violations.push({ file: relative(process.cwd(), file), check, ...v });
      }
    }
  }
  return { violations, active, skipped };
}

function renderText(label, contract, result, targetLabel) {
  const lines = [];
  lines.push(`design-styles audit — ${label}`);
  lines.push(`style: ${contract.slug} (contract v${contract.version}) · target: ${targetLabel}`);
  lines.push("");
  if (result.violations.length === 0) {
    lines.push(`No violations. ${result.active.length} check(s) run: ${result.active.join(", ")}.`);
    if (result.skipped.length) lines.push(`Not statically checkable, skipped: ${result.skipped.join(", ")}.`);
    return lines.join("\n");
  }
  for (const v of result.violations) {
    lines.push(`${v.file}:${v.line} · ${v.check}`);
    lines.push(`  found:    ${v.found}`);
    lines.push(`  expected: ${v.expected}`);
    lines.push(`  fix:      ${v.hint}`);
  }
  lines.push("");
  lines.push(
    `${result.violations.length} violation(s) across ${new Set(result.violations.map((v) => v.file)).size} file(s) · ` +
      `checks run: ${result.active.join(", ")}` +
      (result.skipped.length ? ` · skipped: ${result.skipped.join(", ")}` : "")
  );
  return lines.join("\n");
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    console.log(HELP);
    process.exit(0);
  }
  const target = resolve(args.path);
  let targetStat;
  try {
    targetStat = statSync(target);
  } catch {
    fail(`Target path not found: ${target}`);
  }
  const files = targetStat.isFile()
    ? (SCAN_EXTS.has(extname(target).toLowerCase()) ? [target] : [])
    : walkFiles(target);

  let styleInfo;
  let contract;
  try {
    styleInfo = discoverStyle(targetStat.isDirectory() ? target : dirname(target), args.style);
    contract = await loadContract(styleInfo.slug, args.contract);
  } catch (err) {
    fail((err && err.message) || err);
  }
  const label = styleInfo.source === "--style flag" ? contract.slug : `${contract.slug} (via ${styleInfo.source})`;

  const result = collectViolations(contract, files);

  if (args.format === "json") {
    console.log(
      JSON.stringify(
        {
          style: contract.slug,
          contractVersion: contract.version,
          source: styleInfo.source,
          filesScanned: files.length,
          checksRun: result.active,
          checksSkipped: result.skipped,
          violations: result.violations,
          summary: { count: result.violations.length, files: new Set(result.violations.map((v) => v.file)).size },
        },
        null,
        2
      )
    );
  } else {
    console.log(renderText(label, contract, result, relative(process.cwd(), target) || "."));
  }
  process.exit(args.ci && result.violations.length > 0 ? 1 : 0);
}

main().catch((err) => fail((err && err.stack) || err));
