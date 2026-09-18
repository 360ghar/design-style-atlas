import { readdirSync, readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";
import { checkDesigns } from "./check-contrast.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..", "..", "designs");
const apiDir = join(here, "..", "public", "api");
const requiredSections = ["Overall aesthetic", "Typography", "Colors", "Spacing", "Layout", "Borders", "Shadows", "Radius", "Buttons", "Cards", "Navigation", "Imagery", "Icons", "Textures", "Motion", "Interactions", "Responsive", "Accessibility", "What to avoid", "Quick-start"];
const requiredPreview = ["bg", "surface", "ink", "muted", "accent", "accent2", "display", "body"];

function lum(hex) {
  try {
    let h = String(hex).trim();
    if (h.startsWith("#")) h = h.slice(1);
    if (h.length === 3) h = h.split("").map((c) => c + c).join("");
    h = h.slice(0, 6);
    const r = parseInt(h.slice(0, 2), 16) / 255;
    const g = parseInt(h.slice(2, 4), 16) / 255;
    const b = parseInt(h.slice(4, 6), 16) / 255;
    const f = (v) => (v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4));
    return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
  } catch {
    return 0.5;
  }
}

function contrast(a, b) {
  const x = lum(a);
  const y = lum(b);
  const hi = Math.max(x, y);
  const lo = Math.min(x, y);
  return (hi + 0.05) / (lo + 0.05);
}

const slugs = readdirSync(root);
let failures = 0;
const warnings = [];
if (slugs.length === 0) {
  console.error(`Expected at least 1 style, found 0`);
  failures++;
}
for (const slug of slugs) {
  const file = join(root, slug, "DESIGN.md");
  let text;
  try {
    text = readFileSync(file, "utf8");
  } catch {
    console.error(`${slug}: missing DESIGN.md`);
    failures++;
    continue;
  }
  const { data } = matter(text);
  for (const key of ["slug", "name", "description", "category", "tags", "related", "preview"]) {
    if (data[key] == null || (Array.isArray(data[key]) && data[key].length === 0)) {
      console.error(`${slug}: frontmatter missing "${key}"`);
      failures++;
    }
  }
  if (data.slug !== slug) {
    console.error(`${slug}: slug mismatch (frontmatter: ${data.slug})`);
    failures++;
  }
  for (const key of requiredPreview) {
    const v = data.preview?.[key];
    // Must match app/lib/styles.ts: a truthy non-string (e.g. a number or an
    // object) passes a plain truthiness check but fails the frontend build.
    if (typeof v !== "string" || v.length === 0) {
      console.error(`${slug}: preview missing "${key}"`);
      failures++;
    }
  }
  for (const section of requiredSections) {
    if (!text.includes(section)) {
      console.error(`${slug}: missing section "${section}"`);
      failures++;
    }
  }
  for (const rel of data.related ?? []) {
    if (!slugs.includes(rel)) {
      console.error(`${slug}: related slug "${rel}" does not exist`);
      failures++;
    }
  }
  // Contrast: warn-only (5 known ink<4.5 in the archive) so new styles
  // get a nudge without failing the existing 100.
  if (data.preview?.ink && data.preview?.bg) {
    const r = contrast(data.preview.ink, data.preview.bg);
    if (r < 4.5) warnings.push(`${slug}: ink/bg contrast ${r.toFixed(2)}:1 < 4.5:1`);
  }
  if (data.preview?.muted && data.preview?.bg) {
    const r = contrast(data.preview.muted, data.preview.bg);
    if (r < 3.0) warnings.push(`${slug}: muted/bg contrast ${r.toFixed(2)}:1 < 3:1`);
  }
}

// ---------- contrast gate ----------
// The warning above only covered ink/bg and muted/bg. Every spec also claims
// "verified against both Background and Surface" and assigns accent fills text,
// so those pairings are enforced as failures (see scripts/check-contrast.mjs).
{
  const gate = checkDesigns(root);
  for (const { slug, problems } of gate.failures) {
    for (const problem of problems) {
      console.error(`${slug}: ${problem}`);
      failures++;
    }
  }
}

// ---------- popularity ranking checks ----------
// popularity.json is the single source of truth for default catalog order.
// Every designs/ slug needs exactly one rank; no stale or duplicate entries.
const popularityPath = join(here, "..", "app", "lib", "popularity.json");
if (!existsSync(popularityPath)) {
  console.error(`popularity: missing ${popularityPath}`);
  failures++;
} else {
  try {
    const { order } = JSON.parse(readFileSync(popularityPath, "utf8"));
    if (!Array.isArray(order)) {
      console.error(`popularity: "order" is not an array in ${popularityPath}`);
      failures++;
    } else {
      const seen = new Set();
      for (const slug of order) {
        if (seen.has(slug)) {
          console.error(`popularity: duplicate rank for "${slug}"`);
          failures++;
        }
        seen.add(slug);
        if (!slugs.includes(slug)) {
          console.error(`popularity: ranked slug "${slug}" has no designs/ directory`);
          failures++;
        }
      }
      for (const slug of slugs) {
        if (!seen.has(slug)) {
          console.error(`popularity: designs/ slug "${slug}" is missing a rank`);
          failures++;
        }
      }
    }
  } catch (err) {
    console.error(`popularity: failed to parse ${popularityPath}: ${err.message}`);
    failures++;
  }
}

// ---------- static agent API checks ----------
const stylesJson = join(apiDir, "styles.json");
if (!existsSync(stylesJson)) {
  console.error(`api: missing ${stylesJson} — run node scripts/build-api.mjs first`);
  failures++;
} else {
  try {
    const j = JSON.parse(readFileSync(stylesJson, "utf8"));
    if (j.count !== slugs.length || !Array.isArray(j.styles) || j.styles.length !== slugs.length) {
      console.error(`api: styles.json count mismatch (got ${j.count}, expected ${slugs.length})`);
      failures++;
    }
    // Default order must follow popularity.json (most popular first).
    try {
      const { order } = JSON.parse(readFileSync(popularityPath, "utf8"));
      if (Array.isArray(order) && order.length >= slugs.length) {
        const rank = new Map(order.map((slug, i) => [slug, i]));
        const want = slugs
          .slice()
          .sort(
            (a, b) =>
              (rank.get(a) ?? Number.MAX_SAFE_INTEGER) -
                (rank.get(b) ?? Number.MAX_SAFE_INTEGER) ||
              String(a).localeCompare(String(b))
          );
        const got = (j.styles ?? []).map((s) => s.slug);
        if (got.join() !== want.join()) {
          console.error(`api: styles.json order does not follow popularity.json — rebuild via node scripts/build-api.mjs`);
          failures++;
        }
      }
    } catch {
      // Popularity file problems are reported by the popularity checks above.
    }
    for (const s of j.styles ?? []) {
      if (!s.slug || !s.name || !s.preview || !s.vibes || !s.urls) {
        console.error(`api: styles.json entry "${s.slug}" missing slug/name/preview/vibes/urls`);
        failures++;
      }
    }
  } catch (err) {
    console.error(`api: failed to parse styles.json: ${err.message}`);
    failures++;
  }
}

let slimChecked = 0;
for (const slug of slugs) {
  const p = join(apiDir, `${slug}.json`);
  if (!existsSync(p)) {
    console.error(`api: missing ${slug}.json — run node scripts/build-api.mjs first`);
    failures++;
    continue;
  }
  try {
    const j = JSON.parse(readFileSync(p, "utf8"));
    slimChecked++;
    for (const key of ["slim", "full", "tokens", "vibes", "urls"]) {
      if (j[key] == null) {
        console.error(`api: ${slug}.json missing "${key}"`);
        failures++;
      }
    }
    if (typeof j.slim === "string" && j.slim.length > 6000) {
      console.error(`api: ${slug}.json slim prompt too long (${j.slim.length} chars, budget 6000 ≈ 1500 tokens)`);
      failures++;
    }
    if (!j.tokens?.cssVars || !j.tokens?.tailwind) {
      console.error(`api: ${slug}.json tokens missing cssVars/tailwind`);
      failures++;
    }
  } catch (err) {
    console.error(`api: failed to parse ${slug}.json: ${err.message}`);
    failures++;
  }
}

// ---------- llms.txt check ----------
const llmsPath = join(here, "..", "public", "llms.txt");
if (!existsSync(llmsPath)) {
  console.error(`api: missing public/llms.txt — run node scripts/build-api.mjs first`);
  failures++;
}
const llmsFullPath = join(here, "..", "public", "llms-full.txt");
if (!existsSync(llmsFullPath)) {
  console.error(`api: missing public/llms-full.txt — run node scripts/build-api.mjs first`);
  failures++;
}

// ---------- hardcoded-count regression sweep ----------
// Counts are computed (getStyleCount / slugs.length), never typed.
// Flags literals like "120 design styles" or "Browse all 120" in live code/docs.
{
  const targets = [join(here, "..", "app"), join(here, "..", "..", "README.md"), join(here, "..", "..", "mcp", "README.md")];
  const walkFiles = [];
  const walk = (p) => {
    let entries;
    try {
      entries = readdirSync(p, { withFileTypes: true });
    } catch {
      if (/\.(tsx|ts|md)$/.test(p)) walkFiles.push(p);
      return;
    }
    for (const e of entries) walk(join(p, e.name));
  };
  for (const t of targets) {
    if (existsSync(t)) walk(t);
  }
  const banned = [/\b\d{2,4}\s+design styles\b/i, /browse all \d+/i, /all \d+\s*→/i];
  for (const f of walkFiles) {
    let text;
    try {
      text = readFileSync(f, "utf8");
    } catch {
      continue;
    }
    for (const re of banned) {
      if (re.test(text)) {
        console.error(`sweep: ${f} contains hardcoded count matching ${re} — compute it instead`);
        failures++;
        break;
      }
    }
  }
}

for (const w of warnings) console.warn(`warning: ${w}`);

if (failures > 0) {
  console.error(`\nValidation failed with ${failures} problem(s).`);
  process.exit(1);
}
console.log(`Validation passed: ${slugs.length} styles (sections + frontmatter + related), ${slimChecked} api JSON + llms.txt OK.${warnings.length ? ` ${warnings.length} contrast warning(s).` : ""}`);
