import { SITE_URL } from "./site";
import type { StyleMeta } from "./styles";

/** Slugify a DESIGN.md category for /categories/<slug> URLs. */
export function categorySlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function abs(path: string): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

// ---------- Agent guides ----------
// One static page per agent at /guides/<slug>. Snippets are the real config
// surface each tool reads; keep them copy-paste correct.
export interface AgentGuide {
  slug: string;
  name: string;
  configFile: string;
  snippet: string;
  steps: string[];
  styles: string[];
}

export const AGENT_GUIDES: AgentGuide[] = [
  {
    slug: "claude-code",
    name: "Claude Code",
    configFile: "CLAUDE.md",
    snippet: `# Design direction (auto-loaded)\n@DESIGN.md\n\nFollow @DESIGN.md for all UI work: tokens, typography, spacing, components, motion.`,
    steps: [
      "Pick a style and copy its DESIGN.md into your repo root.",
      "Reference it from CLAUDE.md with `@DESIGN.md` so it loads every session.",
      "Ask Claude Code for one screen at a time, naming the style.",
    ],
    styles: ["minimalism", "linear-inspired", "swiss-design", "corporate-saas", "notion-inspired"],
  },
  {
    slug: "cursor",
    name: "Cursor",
    configFile: ".cursor/rules/design.mdc",
    snippet: `---\ndescription: Visual direction for all UI work\nGlobs: ["**/*.tsx", "**/*.css"]\nalwaysApply: true\n---\n\nFollow @DESIGN.md for all UI work: tokens, typography, spacing, components, motion.`,
    steps: [
      "Pick a style and save it as DESIGN.md in your repo root.",
      "Add `.cursor/rules/design.mdc` with `alwaysApply: true` pointing at it.",
      "Generate UI in Composer; Cursor injects the style every generation.",
    ],
    styles: ["stripe-inspired", "bento-grid", "material-expressive", "minimalism", "product-minimalism"],
  },
  {
    slug: "codex",
    name: "Codex",
    configFile: "AGENTS.md",
    snippet: `# AGENTS.md\n\nVisual direction: follow @DESIGN.md for all UI work.\nTokens, typography, spacing, components, motion per that file.`,
    steps: [
      "Pick a style and copy its DESIGN.md next to AGENTS.md.",
      "Add one line to AGENTS.md: `follow @DESIGN.md for all UI work`.",
      "Prompt Codex with the screen you need; it reads both files.",
    ],
    styles: ["neo-brutalism", "brutalism", "swiss-design", "corporate-saas", "terminal"],
  },
  {
    slug: "windsurf",
    name: "Windsurf",
    configFile: ".windsurfrules",
    snippet: `# .windsurfrules\n\nFollow @DESIGN.md for all UI work: tokens, typography, spacing, components, motion.`,
    steps: [
      "Pick a style and save it as DESIGN.md in your repo root.",
      "Point `.windsurfrules` at it with one follow line.",
      "Build with Cascade; the style applies to every UI edit.",
    ],
    styles: ["glassmorphism", "aurora-glow", "fluent-design", "card-based-ui", "gradient-design"],
  },
  {
    slug: "v0",
    name: "v0",
    configFile: "v0 system prompt",
    snippet: `Use this DESIGN.md as the visual direction for every generation.\nPaste the "slim" prompt from the style JSON into v0's system prompt,\nthen describe the screen. Full spec: <style-url>/DESIGN.md`,
    steps: [
      "Open a style page and copy its slim prompt (fits tight context windows).",
      "Paste it into v0 as a system/project instruction.",
      "Prompt one component per generation for consistent output.",
    ],
    styles: ["y2k", "claymorphism", "bento-grid", "memphis", "synthwave"],
  },
  {
    slug: "lovable",
    name: "Lovable",
    configFile: "Lovable project prompt",
    snippet: `Design system: follow this DESIGN.md for all screens.\n<paste slim prompt>\nKeep colors, fonts, spacing, radius, and motion per the spec.`,
    steps: [
      "Open a style page and copy its slim prompt.",
      "Paste it as the first message in your Lovable project.",
      "Ask for one page at a time; re-paste when starting a new feature.",
    ],
    styles: ["corporate-saas", "scandinavian", "minimalism", "stripe-inspired", "futurism"],
  },
];

// ---------- Compare pairs ----------
// 20 static /compare/<a>-vs-<b>/ pages from popularity + explicit related
// links. Deterministic so sitemap and generateStaticParams agree. The cap is
// intentional: all 9,730 pairs would explode build output for near-zero search
// value, so only the most-linked pairs are pre-rendered.
export function getComparePairs(all: StyleMeta[], count = 20): [string, string][] {
  const slugs = new Set(all.map((s) => s.slug));
  const seen = new Set<string>();
  const out: [string, string][] = [];
  const push = (a: string, b: string) => {
    if (a === b || !slugs.has(a) || !slugs.has(b)) return;
    const key = [a, b].sort().join("~");
    if (seen.has(key)) return;
    seen.add(key);
    out.push([a, b]);
  };
  for (const s of all) {
    for (const r of s.related.slice(0, 2)) {
      push(s.slug, r);
      if (out.length >= count) return out;
    }
  }
  for (let i = 0; i < all.length && out.length < count; i++) {
    for (let j = i + 1; j < all.length && out.length < count; j++) {
      if (all[i]!.category === all[j]!.category) push(all[i]!.slug, all[j]!.slug);
    }
  }
  return out;
}

export function comparePairSlug(a: string, b: string): string {
  return `${a}-vs-${b}`;
}

// ---------- JSON-LD ----------
// Small plain-object builders; pages serialize with JSON.stringify.
export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  };
}

export function softwareAppJsonLd(style: StyleMeta) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `${style.name} DESIGN.md`,
    description: style.description,
    applicationCategory: "DesignApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    url: abs(`/styles/${style.slug}`),
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function itemListJsonLd(styles: StyleMeta[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    numberOfItems: styles.length,
    itemListElement: styles.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `${s.name} DESIGN.md`,
      url: abs(`/styles/${s.slug}`),
    })),
  };
}
