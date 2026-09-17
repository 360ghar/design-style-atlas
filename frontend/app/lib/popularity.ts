import POPULARITY from "./popularity.json";

const rankBySlug = new Map<string, number>(
  POPULARITY.order.map((slug, i) => [slug, i] as const)
);

/** 0-based popularity rank: 0 = most used in the world today. Unknown slugs sort last. */
export function popularityRank(slug: string): number {
  return rankBySlug.get(slug) ?? Number.MAX_SAFE_INTEGER;
}

/** Default catalog order: most popular first, slug as tiebreak. */
export function sortByPopularity<T extends { slug: string }>(styles: T[]): T[] {
  return [...styles].sort(
    (a, b) =>
      popularityRank(a.slug) - popularityRank(b.slug) ||
      a.slug.localeCompare(b.slug)
  );
}

export const POPULARITY_UPDATED = POPULARITY.updated;
