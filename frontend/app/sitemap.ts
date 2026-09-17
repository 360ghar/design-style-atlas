import type { MetadataRoute } from "next";
import { statSync } from "node:fs";
import { join } from "node:path";
import { getAllStyles, getCategories } from "./lib/styles";
import { SITE_URL } from "./lib/site";
import { AGENT_GUIDES, categorySlug, getComparePairs } from "./lib/seo";

export const dynamic = "force-static";

// Deterministic lastModified: use each style's DESIGN.md mtime so rebuilds
// without content changes produce identical sitemaps. Falls back to a fixed
// date (never `new Date()`) when the stat fails.
const FALLBACK_DATE = new Date("2026-01-01T00:00:00.000Z");

function designsRoot(): string {
  return join(process.cwd(), "..", "designs");
}

function designMtime(slug: string): Date {
  try {
    const st = statSync(join(designsRoot(), slug, "DESIGN.md"));
    return st.mtime;
  } catch {
    return FALLBACK_DATE;
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const styles = getAllStyles();
  // Home page tracks the newest style mtime (deterministic across rebuilds).
  let homeModified = FALLBACK_DATE;
  const entries = styles.map((s) => {
    const lastModified = designMtime(s.slug);
    if (lastModified > homeModified) homeModified = lastModified;
    return {
      url: `${SITE_URL}/styles/${s.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    };
  });
  return [
    {
      url: SITE_URL,
      lastModified: homeModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...entries,
    // Category hubs: one indexable landing page per DESIGN.md category.
    ...getCategories(styles).map((c) => ({
      url: `${SITE_URL}/categories/${categorySlug(c.name)}`,
      lastModified: homeModified,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    // Agent setup guides: capture "DESIGN.md for <agent>" intent.
    ...AGENT_GUIDES.map((g) => ({
      url: `${SITE_URL}/guides/${g.slug}`,
      lastModified: FALLBACK_DATE,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    {
      url: `${SITE_URL}/what-is-design-md`,
      lastModified: FALLBACK_DATE,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // Pre-rendered compare pairs for "X vs Y" searches.
    ...getComparePairs(styles).map(([a, b]) => ({
      url: `${SITE_URL}/compare/${a}-vs-${b}`,
      lastModified: homeModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
