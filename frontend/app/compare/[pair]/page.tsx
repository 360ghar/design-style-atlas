import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllStyles, getStyle } from "../../lib/styles";
import { abs, breadcrumbJsonLd, getComparePairs } from "../../lib/seo";
import { StyleCard } from "../../components/StyleCard";

function splitPair(pair: string): [string, string] | null {
  const i = pair.indexOf("-vs-");
  if (i < 0) return null;
  return [pair.slice(0, i), pair.slice(i + 4)];
}

export function generateStaticParams() {
  return getComparePairs(getAllStyles()).map(([a, b]) => ({
    pair: `${a}-vs-${b}`,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ pair: string }>;
}): Promise<Metadata> {
  const { pair } = await params;
  const split = splitPair(pair);
  if (!split) return {};
  const [aSlug, bSlug] = split;
  const [a, b] = await Promise.all([getStyle(aSlug), getStyle(bSlug)]);
  if (!a || !b) return {};
  const url = abs(`/compare/${pair}`);
  const title = `${a.name} vs ${b.name}: Which DESIGN.md Should You Pick?`;
  return {
    title,
    description: `${a.name} (${a.description}) vs ${b.name} (${b.description}) — compare tokens side by side, copy either DESIGN.md for your AI agent.`,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: `${title} — Design Styles`,
      description: `Side-by-side tokens, previews, and specs for ${a.name} and ${b.name}.`,
      url,
      images: [{ url: "/og.png", width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: `${a.name} vs ${b.name} DESIGN.md comparison.`,
      images: ["/og.png"],
    },
  };
}

export default async function ComparePairPage({
  params,
}: {
  params: Promise<{ pair: string }>;
}) {
  const { pair } = await params;
  const split = splitPair(pair);
  if (!split) notFound();
  const [aSlug, bSlug] = split;
  const all = getAllStyles();
  const [a, b] = await Promise.all([getStyle(aSlug), getStyle(bSlug)]);
  if (!a || !b) notFound();
  const path = `/compare/${pair}`;
  const breadcrumb = breadcrumbJsonLd([
    { name: "Index", path: "/" },
    { name: "Compare", path: "/compare" },
    { name: `${a!.name} vs ${b!.name}`, path },
  ]);

  const rows: [string, string, string][] = [
    ["Category", a!.category, b!.category],
    ["Background", a!.preview.bg, b!.preview.bg],
    ["Ink", a!.preview.ink, b!.preview.ink],
    ["Accent", a!.preview.accent, b!.preview.accent],
    ["Display type", a!.preview.display, b!.preview.display],
    ["Body type", a!.preview.body, b!.preview.body],
  ];

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <div className="border-b border-[#111110] dark:border-white/15">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <nav
            aria-label="Breadcrumb"
            className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#111110]/50 dark:text-white/50"
          >
            <Link href="/" className="hover:underline">
              Index
            </Link>
            <span aria-hidden="true"> / </span>
            <Link href="/compare" className="hover:underline">
              Compare
            </Link>
            <span aria-hidden="true"> / </span>
            <span className="font-semibold text-[var(--ink)]">
              {a!.name} vs {b!.name}
            </span>
          </nav>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
            {a!.name} vs {b!.name}
          </h1>
          <p className="mt-4 max-w-2xl font-serif text-[18px] italic leading-relaxed text-[#111110]/70 dark:text-white/70">
            {a!.description} Meanwhile {b!.name.toLowerCase()}:{" "}
            {b!.description.toLowerCase()} Pick the direction, copy its
            DESIGN.md, hand it to your agent.
          </p>
          <table className="mt-8 w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-[#111110] dark:border-white/20 text-left font-mono text-[11px] uppercase tracking-[0.12em]">
                <th scope="col" className="py-2 pr-4 font-medium">Token</th>
                <th scope="col" className="py-2 pr-4 font-medium">{a!.name}</th>
                <th scope="col" className="py-2 font-medium">{b!.name}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([label, av, bv]) => (
                <tr
                  key={label}
                  className="border-b border-[#111110]/10 dark:border-white/10"
                >
                  <td className="py-2 pr-4 font-mono text-[12px] text-[#111110]/60 dark:text-white/60">
                    {label}
                  </td>
                  <td className="py-2 pr-4 font-mono text-[12px] break-all">{av}</td>
                  <td className="py-2 font-mono text-[12px] break-all">{bv}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={`/styles/${a!.slug}`}
              className="border border-[#111110] bg-[#111110] px-5 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-white dark:border-white dark:bg-white dark:text-[#0c0c0e]"
            >
              {a!.name} DESIGN.md →
            </Link>
            <Link
              href={`/styles/${b!.slug}`}
              className="border border-[#111110] px-5 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] dark:border-white/30"
            >
              {b!.name} DESIGN.md →
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {[a!, b!].map((s) => (
            <StyleCard
              key={s.slug}
              style={s}
              index={all.findIndex((r) => r.slug === s.slug)}
            />
          ))}
        </div>
        <p className="mt-8 text-sm text-[#111110]/60 dark:text-white/60">
          Prefer the interactive view?{" "}
          <Link
            href={`/compare?compare=${a!.slug},${b!.slug}`}
            className="underline underline-offset-4"
          >
            Open this pair in the 2-up tool →
          </Link>
        </p>
      </div>
    </div>
  );
}
