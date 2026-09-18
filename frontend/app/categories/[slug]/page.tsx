import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllStyles, getCategories } from "../../lib/styles";
import { SITE_URL } from "../../lib/site";
import {
  abs,
  breadcrumbJsonLd,
  categorySlug,
  faqJsonLd,
  itemListJsonLd,
} from "../../lib/seo";
import { StyleCard } from "../../components/StyleCard";

export function generateStaticParams() {
  return getCategories(getAllStyles()).map((c) => ({
    slug: categorySlug(c.name),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const all = getAllStyles();
  const cat = getCategories(all).find((c) => categorySlug(c.name) === slug);
  if (!cat) return {};
  const url = abs(`/categories/${slug}`);
  const title = `${cat.name} DESIGN.md Styles for AI Agents`;
  return {
    title,
    description: `${cat.name} DESIGN.md files for Codex, Claude Code, Cursor & Windsurf. Compare ${cat.name.toLowerCase()} styles, preview tokens, copy the spec.`,
    keywords: [
      `${cat.name} DESIGN.md`,
      `${cat.name} design style`,
      "DESIGN.md for AI agents",
    ],
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      title: `${title} — Design Styles`,
      description: `Browse ${cat.name} styles. Copy any DESIGN.md into your AI coding agent.`,
      url,
      images: [{ url: "/og.png", width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: `${cat.name} DESIGN.md files for AI coding agents.`,
      images: ["/og.png"],
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const all = getAllStyles();
  const cats = getCategories(all);
  const cat = cats.find((c) => categorySlug(c.name) === slug);
  if (!cat) notFound();
  const members = all.filter((s) => s.category === cat!.name);
  const path = `/categories/${slug}`;
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Index", path: "/" },
      { name: "Categories", path: "/#catalog" },
      { name: cat!.name, path },
    ]),
    itemListJsonLd(members),
    faqJsonLd([
      {
        q: `Which ${cat!.name} DESIGN.md should I pick?`,
        a: `Start with the top-ranked ${cat!.name} style below, preview its tokens, then copy its DESIGN.md. Every spec covers the same 20 sections so any choice works with your agent.`,
      },
      {
        q: `How do I use a ${cat!.name} style with my agent?`,
        a: "Copy its DESIGN.md into your repo and tell Codex, Claude Code, Cursor, or Windsurf to follow it for all UI work.",
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
            <span className="font-semibold text-[var(--ink)]">{cat!.name}</span>
          </nav>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
            {cat!.name} DESIGN.md styles for AI agents
          </h1>
          <p className="mt-4 max-w-2xl font-serif text-[18px] italic leading-relaxed text-[#111110]/70 dark:text-white/70">
            {cat!.name} styles with copy-paste
            DESIGN.md specs. Pick one, preview its colors and type, hand it to
            Codex, Claude Code, Cursor, or Windsurf.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#111110]/65 dark:text-white/65">
            Every file covers the same 20 sections — aesthetic, typography,
            colors, spacing, layout, components, motion, accessibility, what to
            avoid, quick-start snippet — so your agent gets concrete values,
            not taste words.{" "}
            <Link href="/what-is-design-md" className="underline underline-offset-4">
              What is DESIGN.md?
            </Link>
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {members.map((s) => (
            <StyleCard
              key={s.slug}
              style={s}
              index={all.findIndex((r) => r.slug === s.slug)}
            />
          ))}
        </div>
        <div className="mt-10 border border-[#111110]/15 dark:border-white/15 p-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em]">
            Other categories
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {cats
              .filter((c) => c.name !== cat!.name)
              .map((c) => (
                <li key={c.name}>
                  <Link
                    href={`/categories/${categorySlug(c.name)}`}
                    className="inline-block border border-[#111110]/20 dark:border-white/20 px-2.5 py-1 font-mono text-[11px] hover:underline hover:underline-offset-4"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
          </ul>
          <p className="mt-4 text-sm text-[#111110]/60 dark:text-white/60">
            Canonical home:{" "}
            <Link href={SITE_URL} className="underline underline-offset-4">
              {SITE_URL}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
