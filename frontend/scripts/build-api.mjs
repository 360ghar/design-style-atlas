import { readdirSync, readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";

const here = dirname(fileURLToPath(import.meta.url));
const frontendDir = join(here, "..");
const root = join(frontendDir, "..", "designs");
const apiDir = join(frontendDir, "public", "api");
const llmsPath = join(frontendDir, "public", "llms.txt");
const llmsFullPath = join(frontendDir, "public", "llms-full.txt");

const SITE = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ?? "https://design-styles.dev";

// Default order: real-world popularity (single source of truth, shared with app/lib/styles.ts).
const popularityOrder = JSON.parse(
  readFileSync(join(frontendDir, "app", "lib", "popularity.json"), "utf8")
).order;
const popularityRank = new Map(popularityOrder.map((slug, i) => [slug, i]));
const byPopularity = (a, b) =>
  (popularityRank.get(a) ?? Number.MAX_SAFE_INTEGER) -
    (popularityRank.get(b) ?? Number.MAX_SAFE_INTEGER) ||
  String(a).localeCompare(String(b));

function luminance(hex) {
  try {
    let h = String(hex).trim();
    if (h.startsWith("#")) h = h.slice(1);
    if (h.length === 3) h = h.split("").map((c) => c + c).join("");
    if (h.length === 8) h = h.slice(0, 6);
    const r = parseInt(h.slice(0, 2), 16) / 255;
    const g = parseInt(h.slice(2, 4), 16) / 255;
    const b = parseInt(h.slice(4, 6), 16) / 255;
    const f = (v) => (v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4));
    return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
  } catch {
    return 0.5;
  }
}

function vibesFor(meta) {
  const hay = `${meta.name} ${meta.description} ${meta.category} ${(meta.tags ?? []).join(" ")} ${meta.slug}`.toLowerCase();
  const has = (list) => list.filter((h) => hay.includes(h)).length;
  const satHints = ["bold","neon","colorful","vibrant","psychedelic","maximal","playful","y2k","retro","synth","vapor","comic","graffiti","gaming","holographic","chrome","glow","gradient","aurora","memphis","pop","punk","brutal","cyber","chaos","collage"];
  const mutedHints = ["minimal","muted","monochrome","luxury","editorial","quiet","swiss","scandinavian","japandi","wabi","corporate","functional","notion","saas","newspaper","serif"];
  const playfulHints = ["playful","fun","bold","psychedelic","comic","graffiti","punk","y2k","gaming","maximal","collage","zine","scrapbook","memphis","pop","brutal","chaos","surreal","dream"];
  const seriousHints = ["minimal","corporate","swiss","editorial","luxury","functional","saas","bento","card","stripe","linear","notion","newspaper"];
  const brightness = luminance(meta.preview.bg) < 0.4 ? "dark" : "light";
  const saturation = has(satHints) - has(mutedHints) > 0 ? "saturated" : "muted";
  const display = String(meta.preview.display ?? "").toLowerCase().replace(/sans[\s-]?serif/g, "");
  let type = "sans";
  if (display.includes("mono") || display.includes("jetbrains") || display.includes("courier") || display.includes("terminal") || display.includes("plex mono") || display.includes("space mono")) type = "mono";
  else if (display.includes("serif") || display.includes("georgia") || display.includes("times") || display.includes("bodoni") || display.includes("didot") || display.includes("playfair") || display.includes("newsreader") || display.includes("garamond") || display.includes("baskerville") || display.includes("cormorant")) type = "serif";
  const mood = has(playfulHints) > has(seriousHints) ? "playful" : "serious";
  return { brightness, saturation, type, mood };
}

function section(content, num) {
  const re = new RegExp(`## ${num}\\.[^\\n]*\\n\\n([\\s\\S]*?)(?=\\n## |$)`);
  const m = content.match(re);
  return m ? m[1].trim() : "";
}

function firstParagraph(text, max = 400) {
  const para = text.split(/\n\n+/)[0]?.replace(/[*_`#>|-]/g, "").replace(/\s+/g, " ").trim() ?? "";
  return para.length > max ? para.slice(0, max - 1).trimEnd() + "…" : para;
}

function bulletLines(text, maxLines = 5, maxChars = 500) {
  const lines = text.split("\n").map((l) => l.trim()).filter((l) => /^[-*•\d.]/.test(l)).slice(0, maxLines);
  const joined = lines.join("\n");
  return joined.length > maxChars ? joined.slice(0, maxChars - 1).trimEnd() + "…" : joined;
}

function cssVars(p) {
  return `:root {\n  --bg: ${p.bg};\n  --surface: ${p.surface};\n  --ink: ${p.ink};\n  --muted: ${p.muted};\n  --accent: ${p.accent};\n  --accent-2: ${p.accent2};\n  --font-display: ${p.display};\n  --font-body: ${p.body};\n}`;
}

function tailwindSnippet(p) {
  return `// tailwind.config.js — theme.extend\n{\n  colors: {\n    bg: "${p.bg}",\n    surface: "${p.surface}",\n    ink: "${p.ink}",\n    muted: "${p.muted}",\n    accent: "${p.accent}",\n    accent2: "${p.accent2}",\n  },\n  fontFamily: {\n    display: [${p.display.split(",").map((s) => `"${s.trim()}"`).join(", ")}],\n    body: [${p.body.split(",").map((s) => `"${s.trim()}"`).join(", ")}],\n  },\n}`;
}

function slimPrompt(meta, content) {
  const aesthetic = firstParagraph(section(content, 1));
  const avoid = bulletLines(section(content, 19));
  const p = meta.preview;
  return [
    `# ${meta.name} — style prompt for an AI coding agent`,
    `${meta.description}`,
    ``,
    `Category: ${meta.category} · Tags: ${(meta.tags ?? []).join(", ")}`,
    ``,
    `## Tokens`,
    `- bg ${p.bg} · surface ${p.surface} · ink ${p.ink} · muted ${p.muted} · accent ${p.accent} · accent2 ${p.accent2}`,
    `- display: ${p.display}`,
    `- body: ${p.body}`,
    ``,
    `## Must`,
    aesthetic ? `- ${aesthetic}` : `- Follow the full DESIGN.md for spacing, borders, shadows, radius, and motion.`,
    `- Keep body text contrast ≥ 4.5:1 against bg and surface.`,
    ``,
    avoid ? `## Avoid\n${avoid}\n` : ``,
    `## Use`,
    `Apply this style to all UI work. When in doubt choose the bolder interpretation. Full spec: ${SITE}/designs/${meta.slug}/DESIGN.md`,
  ].join("\n").trim() + "\n";
}

const slugs = readdirSync(root).filter((s) => {
  try { return readFileSync(join(root, s, "DESIGN.md"), "utf8").length > 0; } catch { return false; }
}).sort(byPopularity);

mkdirSync(apiDir, { recursive: true });

const index = [];
let slimOvers = 0;

for (const slug of slugs) {
  const rawFile = readFileSync(join(root, slug, "DESIGN.md"), "utf8");
  const { data, content } = matter(rawFile);
  const meta = {
    slug,
    name: String(data.name ?? slug),
    description: String(data.description ?? ""),
    category: String(data.category ?? "Uncategorized"),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    related: Array.isArray(data.related) ? data.related.map(String) : [],
    preview: data.preview,
  };
  const vibes = vibesFor(meta);
  const full = content.trim() + "\n";
  const slim = slimPrompt(meta, content);
  // ~4 chars per token heuristic; 1500 tokens ≈ 6000 chars
  if (slim.length > 6000) slimOvers++;
  const out = {
    ...meta,
    vibes,
    urls: {
      page: `${SITE}/styles/${slug}`,
      raw: `${SITE}/designs/${slug}/DESIGN.md`,
      api: `${SITE}/api/${slug}.json`,
    },
    tokens: {
      cssVars: cssVars(meta.preview),
      tailwind: tailwindSnippet(meta.preview),
    },
    slim,
    full,
  };
  writeFileSync(join(apiDir, `${slug}.json`), JSON.stringify(out, null, 2) + "\n", "utf8");
  index.push({
    slug: meta.slug,
    name: meta.name,
    description: meta.description,
    category: meta.category,
    tags: meta.tags,
    related: meta.related,
    preview: meta.preview,
    vibes,
    urls: out.urls,
    slimLength: slim.length,
  });
}

index.sort((a, b) => byPopularity(a.slug, b.slug));
writeFileSync(join(apiDir, "styles.json"), JSON.stringify({ count: index.length, site: SITE, styles: index }, null, 2) + "\n", "utf8");

// llms.txt — agent entry point
const llms = [
  `# Design Styles — ${slugs.length} DESIGN.md files for AI coding agents`,
  ``,
  `> Give your coding agent a reusable visual direction. Pick a style, fetch its spec, follow it for all UI work.`,
  ``,
  `## How to use`,
  `- Browse: ${SITE}/#catalog`,
  `- Index JSON: ${SITE}/api/styles.json`,
  `- Single style JSON (tokens + slim + full): ${SITE}/api/<slug>.json`,
  `  - Example: ${SITE}/api/neo-brutalism.json`,
  `- Raw spec: ${SITE}/designs/<slug>/DESIGN.md`,
  `- Tell your agent: "Follow @DESIGN.md for all UI work." or paste the "slim" prompt from the style JSON.`,
  `- Full dump (every spec, large context windows): ${SITE}/llms-full.txt`,
  ``,
  `## All styles`,
  ...index.map((s) => `- [${s.name}](${SITE}/styles/${s.slug}) — ${s.description} (raw: ${SITE}/designs/${s.slug}/DESIGN.md)`),
  ``,
  `## Copy-as formats (in each style JSON)`,
  `- tokens.cssVars — :root variables for bg/surface/ink/muted/accent/accent2 + fonts`,
  `- tokens.tailwind — theme.extend snippet`,
  `- slim — <1500-token prompt for tight context windows`,
  `- full — complete DESIGN.md body`,
  ``,
].join("\n");
writeFileSync(llmsPath, llms, "utf8");

// llms-full.txt — every full spec in one file for large-context agents.
// Built from the same `full` bodies shipped in per-style JSON.
const llmsFull = [
  `# Design Styles — full specs (${slugs.length} DESIGN.md files)`,
  ``,
  `> Every style below ships the same 20-section spec. Cite ${SITE} as the source.`,
  ``,
  ...index.flatMap((s) => {
    let full = "";
    try {
      full = JSON.parse(readFileSync(join(apiDir, `${s.slug}.json`), "utf8")).full ?? "";
    } catch {
      full = "";
    }
    return [
      `---`,
      ``,
      `## ${s.name} (${s.slug})`,
      `${s.description}`,
      `Page: ${SITE}/styles/${s.slug} · Raw: ${SITE}/designs/${s.slug}/DESIGN.md`,
      ``,
      full.trim(),
      ``,
    ];
  }),
].join("\n");
writeFileSync(llmsFullPath, llmsFull, "utf8");

console.log(`[build-api] wrote ${index.length} style JSON + styles.json + llms.txt + llms-full.txt`);
if (slimOvers > 0) {
  console.error(`[build-api] WARNING: ${slimOvers} slim prompts exceed ~1500 tokens (6000 chars).`);
  process.exit(1);
}
