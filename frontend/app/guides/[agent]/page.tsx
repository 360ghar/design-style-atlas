import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllStyles } from "../../lib/styles";
import { abs, AGENT_GUIDES, breadcrumbJsonLd, faqJsonLd } from "../../lib/seo";
import { StyleCard } from "../../components/StyleCard";

export function generateStaticParams() {
  return AGENT_GUIDES.map((g) => ({ agent: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ agent: string }>;
}): Promise<Metadata> {
  const { agent } = await params;
  const guide = AGENT_GUIDES.find((g) => g.slug === agent);
  if (!guide) return {};
  const url = abs(`/guides/${agent}`);
  const title = `How to Use DESIGN.md with ${guide.name}`;
  return {
    title,
    description: `Use any DESIGN.md with ${guide.name} in 3 steps: copy the spec, wire ${guide.configFile}, generate UI. Works with every style in the archive.`,
    keywords: [
      `DESIGN.md ${guide.name}`,
      `design.md for ${guide.name.toLowerCase()}`,
      `${guide.configFile}`,
      "DESIGN.md for AI agents",
    ],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: `${title} — Design Styles`,
      description: `Copy a DESIGN.md, wire ${guide.configFile}, stop shipping generic ${guide.name} UI.`,
      url,
      images: [{ url: "/og.png", width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: `DESIGN.md + ${guide.name}: copy, wire ${guide.configFile}, build.`,
      images: ["/og.png"],
    },
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ agent: string }>;
}) {
  const { agent } = await params;
  const guide = AGENT_GUIDES.find((g) => g.slug === agent);
  if (!guide) notFound();
  const all = getAllStyles();
  const bySlug = new Map(all.map((s) => [s.slug, s]));
  const picks = guide!.styles
    .map((slug) => bySlug.get(slug))
    .filter((s) => s !== undefined);
  const path = `/guides/${agent}`;
  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How to use DESIGN.md with ${guide!.name}`,
    step: guide!.steps.map((text, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      text,
    })),
  };
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Index", path: "/" },
      { name: `DESIGN.md with ${guide!.name}`, path },
    ]),
    howTo,
    faqJsonLd([
      {
        q: `Where does the DESIGN.md file go for ${guide!.name}?`,
        a: `Save it as DESIGN.md in your repo root, then reference it from ${guide!.configFile}. The snippet below is copy-paste ready.`,
      },
      {
        q: `Which style works best with ${guide!.name}?`,
        a: `Any style works — they all ship the same 20-section spec. The recommended starters below are the most-used with ${guide!.name}.`,
      },
    ]),
  ];

  return (
    <div>
      {jsonLd.map((obj, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }}
        />
      ))}
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
            <span>Guides</span>
            <span aria-hidden="true"> / </span>
            <span className="font-semibold text-[var(--ink)]">
              {guide!.name}
            </span>
          </nav>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
            How to use DESIGN.md with {guide!.name}
          </h1>
          <p className="mt-4 max-w-2xl font-serif text-[18px] italic leading-relaxed text-[#111110]/70 dark:text-white/70">
            Copy a style, wire <code className="font-mono text-[15px] not-italic">{guide!.configFile}</code>,
            stop shipping generic {guide!.name} UI.
          </p>
          <ol className="mt-8 space-y-4">
            {guide!.steps.map((text, i) => (
              <li
                key={text}
                className="flex gap-4 border-t border-[#111110]/15 dark:border-white/15 pt-4"
              >
                <span className="font-mono text-[13px] font-semibold">
                  0{i + 1}
                </span>
                <p className="text-[15px] leading-relaxed">{text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-8 border border-[#111110]/20 dark:border-white/15 bg-[#111110] dark:bg-[#141416] p-5">
            <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-white/50">
              {guide!.configFile} — paste this
            </p>
            <pre className="mt-3 overflow-x-auto font-mono text-[12.5px] leading-relaxed text-[#ece9e0]">
              {guide!.snippet}
            </pre>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl font-extrabold tracking-tight">
            Starter styles for {guide!.name}
          </h2>
          <Link
            href="/#catalog"
            className="font-mono text-[11px] uppercase tracking-[0.12em] underline underline-offset-4"
          >
            Catalog →
          </Link>
        </div>
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {picks.map((s) => (
            <StyleCard
              key={s!.slug}
              style={s!}
              index={all.findIndex((r) => r.slug === s!.slug)}
            />
          ))}
        </div>
        <div className="mt-10 border border-[#111110]/15 dark:border-white/15 p-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em]">
            Other agents
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {AGENT_GUIDES.filter((g) => g.slug !== guide!.slug).map((g) => (
              <li key={g.slug}>
                <Link
                  href={`/guides/${g.slug}`}
                  className="inline-block border border-[#111110]/20 dark:border-white/20 px-2.5 py-1 font-mono text-[11px] hover:underline hover:underline-offset-4"
                >
                  {g.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
