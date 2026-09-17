import type { Metadata } from "next";
import Link from "next/link";
import { getAllStyles } from "../lib/styles";
import { SITE_URL } from "../lib/site";
import { getComparePairs } from "../lib/seo";
import { CompareTool } from "./CompareTool";

export const dynamic = "force-static";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Compare DESIGN.md Styles Side by Side",
    description:
      "Compare two DESIGN.md styles side by side: tokens, previews, specs. Or open a pre-made X vs Y comparison for your AI coding agent.",
    alternates: { canonical: `${SITE_URL}/compare` },
  };
}

export default function ComparePage() {
  const all = getAllStyles();
  const bySlug = new Map(all.map((s) => [s.slug, s]));
  const pairs = getComparePairs(all);

  return (
    <div>
      <CompareTool />
      <div className="mx-auto max-w-6xl px-4 pb-14 sm:px-6">
        <div className="border border-[#111110]/15 dark:border-white/15 p-5">
          <h2 className="text-xl font-extrabold tracking-tight">
            Popular comparisons
          </h2>
          <p className="mt-1 text-sm text-[#111110]/60 dark:text-white/60">
            Pre-rendered side-by-side pages, indexed for search.
          </p>
          <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {pairs.map(([a, b]) => (
              <li key={`${a}-vs-${b}`}>
                <Link
                  href={`/compare/${a}-vs-${b}`}
                  className="block border border-[#111110]/15 dark:border-white/15 px-3 py-2 text-sm hover:underline hover:underline-offset-4"
                >
                  <span className="font-semibold">
                    {bySlug.get(a)?.name ?? a} vs {bySlug.get(b)?.name ?? b}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
