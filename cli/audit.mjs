#!/usr/bin/env node
/**
 * design-styles audit — check a codebase against a style's machine token contract.
 *
 * Zero deps, Node 18+. Static analysis only: flags colors, font stacks, radii,
 * shadows, and border widths that violate the contract emitted by
 * frontend/scripts/build-api.mjs (public/api/<slug>.contract.json).
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
      const res = await fetch(override);
      if (!res.ok) throw new Error(`Failed to fetch contract ${override}: HTTP ${res.status}`);
      return res.json();
    }
    return readJson(override);
  }
  const local = join(localContractDir, `${slug}.contract.json`);
  if (existsSync(local)) return readJson(local);
  try {
    const res = await fetch(`${SITE}/api/${slug}.contract.json`);
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

function checkPalette(contract, allowedExtra = new Set()) {
  return (source) => {
    const violations = [];
    const allowed = new Set([
      ...Object.values(contract.palette ?? {}).map((v) => String(v).toLowerCase()),
      "transparent", "currentcolor", "inherit", "none", ...allowedExtra,
    ]);
    const scan = (raw, normalize) => {
      let m;
      const re = normalize.re;
      re.lastIndex = 0;
      while ((m = re.exec(source))) {
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
    scan(source, {
      re: /#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})(?![0-9a-fA-F])/g,
      fn: (m) => hexTo6(m[0]),
    });
    scan(source, {
      re: /\brgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})/g,
      fn: (m) => rgbToHex(m[1], m[2], m[3]),
    });
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
