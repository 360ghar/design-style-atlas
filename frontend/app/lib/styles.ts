import { cache } from "react";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";
import { readdirSync, readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { sortByPopularity } from "./popularity";

export interface StylePreviewTokens {
  bg: string;
  surface: string;
  ink: string;
  muted: string;
  accent: string;
  accent2: string;
  display: string;
  body: string;
}

export interface StyleMeta {
  slug: string;
  name: string;
  description: string;
  category: string;
  tags: string[];
  related: string[];
  preview: StylePreviewTokens;
}

export interface StyleEntry extends StyleMeta {
  raw: string;
  html: string;
}

const PREVIEW_KEYS = [
  "bg",
  "surface",
  "ink",
  "muted",
  "accent",
  "accent2",
  "display",
  "body",
] as const;

const designsDir = join(process.cwd(), "..", "designs");
const fallbackDir = join(process.cwd(), "designs");
const publicDesignsDir = join(process.cwd(), "public", "designs");

const SENTINEL = join("neo-brutalism", "DESIGN.md");

let cachedRoot: string | null = null;

function rootDir(): string {
  if (cachedRoot) return cachedRoot;
  if (existsSync(join(designsDir, SENTINEL))) {
    cachedRoot = designsDir;
    return cachedRoot;
  }
  if (existsSync(join(publicDesignsDir, SENTINEL))) {
    cachedRoot = publicDesignsDir;
    return cachedRoot;
  }
  if (existsSync(join(fallbackDir, SENTINEL))) {
    cachedRoot = fallbackDir;
    return cachedRoot;
  }
  throw new Error(
    `[styles] designs root not found: neither "${join(
      designsDir,
      SENTINEL
    )}" nor "${join(publicDesignsDir, SENTINEL)}" nor "${join(fallbackDir, SENTINEL)}" exists. ` +
      `Expected a designs directory containing neo-brutalism/DESIGN.md.`
  );
}

function coerceStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.map((v) => String(v));
}

/** Defense-in-depth for `dangerouslySetInnerHTML` in app/styles/[slug]/page.tsx.
 *  DESIGN.md files are trusted local content, but the HTML pipeline should
 *  never emit executable markup. Strips script blocks, inline event handlers,
 *  and javascript: URLs. */
function sanitizeHtml(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script\s*>/gi, "")
    .replace(/\s+on[a-z]+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, "")
    .replace(/(href|src)\s*=\s*"(javascript:[^"]*)"/gi, '$1="#"')
    .replace(/(href|src)\s*=\s*'(javascript:[^']*)'/gi, "$1='#'");
}

function parseFile(slug: string): StyleEntry | null {
  let file: string;
  try {
    file = readFileSync(join(rootDir(), slug, "DESIGN.md"), "utf8");
  } catch {
    return null;
  }
  const { data, content } = matter(file);
  const tags = coerceStringArray(data.tags);
  const related = coerceStringArray(data.related);
  const previewRaw = data.preview as Partial<
    Record<(typeof PREVIEW_KEYS)[number], unknown>
  > | null;
  for (const key of PREVIEW_KEYS) {
    const v = previewRaw?.[key];
    if (typeof v !== "string" || v.length === 0) {
      throw new Error(
        `[styles:${slug}] frontmatter preview missing or invalid "${key}" ` +
          `(expected non-empty string, got ${JSON.stringify(v) ?? "undefined"})`
      );
    }
  }
  const preview = previewRaw as StylePreviewTokens;
  return {
    slug,
    name: String(data.name ?? slug),
    description: String(data.description ?? ""),
    category: String(data.category ?? "Uncategorized"),
    tags,
    related,
    preview,
    raw: content.trim() + "\n",
    html: "",
  };
}

let metaCache: StyleMeta[] | null = null;

export function getAllStyles(): StyleMeta[] {
  if (metaCache) return metaCache;
  const metas: StyleMeta[] = [];
  let slugs: string[];
  try {
    slugs = readdirSync(rootDir(), { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name)
      .sort();
  } catch (err) {
    throw new Error(
      `[styles] failed to read designs directory "${rootDir()}": ${(err as Error).message}`
    );
  }
  for (const slug of slugs) {
    const entry = parseFile(slug);
    if (!entry) continue;
    const { raw: _r, html: _h, ...meta } = entry;
    void _r;
    void _h;
    metas.push(meta);
  }
  // Default order: real-world popularity (popularity.json), slug as tiebreak.
  // Search, category, and vibe filters preserve this order downstream.
  const ordered = sortByPopularity(metas);
  if (ordered.length === 0) {
    throw new Error(
      `[styles] no valid styles found in "${rootDir()}" — refusing to build an empty site. ` +
        `Expected directories each containing a DESIGN.md with valid frontmatter.`
    );
  }
  metaCache = ordered;
  return ordered;
}

export function getStyleSlugs(): string[] {
  return getAllStyles().map((s) => s.slug);
}

/** Single source of truth for "how many styles": the designs/ directory. */
export function getStyleCount(): number {
  return getAllStyles().length;
}

async function getStyleInner(slug: string): Promise<StyleEntry | null> {
  const entry = parseFile(slug);
  if (!entry) return null;
  const processed = await remark()
    .use(remarkGfm)
    .use(remarkHtml)
    .process(entry.raw);
  entry.html = sanitizeHtml(String(processed));
  return entry;
}

export const getStyle = cache(getStyleInner);

export function getRelated(style: StyleMeta, all: StyleMeta[], count = 3): StyleMeta[] {
  const bySlug = new Map(all.map((s) => [s.slug, s]));
  const out: StyleMeta[] = [];
  const seen = (s: StyleMeta) =>
    s.slug === style.slug || out.some((o) => o.slug === s.slug);
  // Pass 1: explicit frontmatter links.
  for (const slug of style.related) {
    const s = bySlug.get(slug);
    if (s && !seen(s)) out.push(s);
    if (out.length >= count) return out;
  }
  // Pass 2: same category or shared tag.
  for (const s of all) {
    if (seen(s)) continue;
    if (s.category === style.category || s.tags.some((t) => style.tags.includes(t))) {
      out.push(s);
      if (out.length >= count) return out;
    }
  }
  // Pass 3: arbitrary fill so callers always get `count` items when possible.
  for (const s of all) {
    if (out.length >= count) break;
    if (seen(s)) continue;
    out.push(s);
  }
  return out;
}

export function getCategories(all: StyleMeta[]): { name: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const s of all) counts.set(s.category, (counts.get(s.category) ?? 0) + 1);
  return [...counts.entries()]
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}
