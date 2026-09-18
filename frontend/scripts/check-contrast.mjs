#!/usr/bin/env node
/**
 * Contrast gate for designs/<slug>/DESIGN.md.
 *
 * Every spec claims its tokens are accessible, but nothing verified the claim:
 * `validate.mjs` only warned on ink/bg and muted/bg. This gate enforces the
 * pairings the specs actually assert, so a token edit that breaks one of them
 * fails the build instead of shipping prose that is no longer true.
 *
 * Enforced per style:
 *   1. ink and muted reach 4.5:1 on BOTH the declared Background and Surface
 *   2. at least one of white / black / ink is a readable label (4.5:1) on the
 *      accent and accent2 fills — a fill with no readable label cannot carry text
 *   3. the Responsive section never permits a tap target below 44px
 *   4. the "verified against both Background and Surface" claim is only allowed
 *      when checks 1 and 2 hold (implied: the gate fails the style if they do not)
 *
 * Usage: node frontend/scripts/check-contrast.mjs
 * Exit codes: 0 clean · 1 failures
 */
import { readdirSync, readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import matter from "gray-matter";

const here = dirname(fileURLToPath(import.meta.url));
const defaultRoot = join(here, "..", "..", "designs");

const BODY_MIN = 4.5;
const CLAIM = "verified against both Background and Surface";

/** Relative luminance of a HEX or rgb() color (WCAG 2.x). */
export function getLuminance(color) {
  let hex = String(color).trim();
  if (hex.startsWith("#")) {
    hex = hex.slice(1);
    if (hex.length === 3) hex = hex.split("").map((c) => c + c).join("");
    else if (hex.length === 8) hex = hex.slice(0, 6);
    const r = parseInt(hex.slice(0, 2), 16) / 255;
    const g = parseInt(hex.slice(2, 4), 16) / 255;
    const b = parseInt(hex.slice(4, 6), 16) / 255;
    if ([r, g, b].some((v) => Number.isNaN(v))) return 0.5;
    const f = (v) => (v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4));
    return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
  }
  const m = hex.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/i);
  if (!m) return 0.5;
  const [r, g, b] = [m[1], m[2], m[3]].map((v) => parseInt(v, 10) / 255);
  const f = (v) => (v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4));
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
}

/** WCAG contrast ratio between two colors. */
export function contrastRatio(a, b) {
  const x = getLuminance(a);
  const y = getLuminance(b);
  return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05);
}

const round2 = (n) => Math.round(n * 100) / 100;

/** Text of a numbered "## <n>. Section" block. */
function section(content, n) {
  for (const part of content.split(/^## /m)) {
    if (part.startsWith(`${n}.`)) return part;
  }
  return "";
}

/** Split prose into sentences so a rule can be scoped to the sentence it lives in. */
function sentences(text) {
  return text
    .split(/\n/)
    .flatMap((line) => line.split(/(?<=\.)\s+/))
    .map((s) => s.trim())
    .filter(Boolean);
}

/**
 * A responsive rule may only permit tap targets at 44px or larger. Only lengths
 * bound to the words tap/target/hit-area count, so a legitimate "16–20px page
 * margins" beside a "44px+ tap targets" clause is not misread as target advice.
 */
function checkTapTargets(responsive) {
  const failures = [];
  const patterns = [
    /(\d+(?:\.\d+)?)\s*px\s*\+?\s*(?:tap\s+targets?|touch\s+targets?|hit[-\s]?areas?|targets?)/gi,
    /(?:tap\s+targets?|touch\s+targets?|hit[-\s]?areas?|targets?)\s*(?:of|at|≥|>=|:)?\s*(\d+(?:\.\d+)?)\s*px/gi,
  ];
  for (const s of sentences(responsive)) {
    for (const re of patterns) {
      for (const m of s.matchAll(re)) {
        const px = parseFloat(m[1]);
        if (px < 44) failures.push(`Responsive permits a ${m[1]}px tap target: "${s}"`);
      }
    }
  }
  if (!/\b44px\b/.test(responsive)) {
    failures.push("Responsive section never states the 44px tap-target minimum");
  }
  return failures;
}

/** Every pairing one style declares, with the ones that fail. */
export function checkStyle(slug, raw) {
  const { data, content } = matter(raw);
  const p = data.preview ?? {};
  const failures = [];
  const missing = ["bg", "surface", "ink", "muted", "accent", "accent2"].filter(
    (k) => typeof p[k] !== "string" || p[k].length === 0
  );
  if (missing.length) {
    // validate.mjs owns frontmatter completeness; do not double-report.
    return failures;
  }

  for (const token of ["ink", "muted"]) {
    for (const ground of ["bg", "surface"]) {
      const r = contrastRatio(p[token], p[ground]);
      if (r < BODY_MIN) {
        failures.push(
          `${token} ${p[token]} on ${ground} ${p[ground]} is ${round2(r)}:1 — needs ${BODY_MIN}:1`
        );
      }
    }
  }

  for (const fillToken of ["accent", "accent2"]) {
    const fill = p[fillToken];
    const best = [
      ["white", "#FFFFFF"],
      ["black", "#000000"],
      ["ink", p.ink],
    ]
      .map(([name, color]) => ({ name, r: contrastRatio(color, fill) }))
      .sort((a, b) => b.r - a.r)[0];
    if (best.r < BODY_MIN) {
      failures.push(
        `${fillToken} ${fill} has no readable label — best is ${best.name} at ${round2(best.r)}:1`
      );
    }
  }

  // Only token pairings decide whether the accessibility claim is true; a
  // responsive-rule problem is a separate failure.
  if (content.includes(CLAIM) && failures.length > 0) {
    failures.push(`spec claims "${CLAIM}" but the declared pairings do not hold`);
  }

  failures.push(...checkTapTargets(section(content, 17)));

  return failures;
}

export function checkDesigns(root = defaultRoot) {
  const slugs = readdirSync(root, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => e.name)
    .sort();
  const failures = [];
  for (const slug of slugs) {
    let raw;
    try {
      raw = readFileSync(join(root, slug, "DESIGN.md"), "utf8");
    } catch (err) {
      failures.push({ slug, problems: [`unreadable DESIGN.md: ${(err && err.message) || err}`] });
      continue;
    }
    const problems = checkStyle(slug, raw);
    if (problems.length) failures.push({ slug, problems });
  }
  return { slugs, failures };
}

function main() {
  const { slugs, failures } = checkDesigns();
  for (const { slug, problems } of failures) {
    for (const problem of problems) console.error(`${slug}: ${problem}`);
  }
  if (failures.length > 0) {
    console.error(
      `\nContrast gate failed: ${failures.length} style(s) with ${failures.reduce((n, f) => n + f.problems.length, 0)} problem(s).`
    );
    process.exit(1);
  }
  console.log(
    `Contrast gate passed: ${slugs.length} styles (ink/muted on Background + Surface, readable accent labels, 44px tap targets).`
  );
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main();
}
