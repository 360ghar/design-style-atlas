import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getStyle, getAllStyles, getRelated, getStyleSlugs } from "../../lib/styles";
import { SITE_URL } from "../../lib/site";
import {
  breadcrumbJsonLd,
  categorySlug,
  faqJsonLd,
  getComparePairs,
  softwareAppJsonLd,
} from "../../lib/seo";
import { StyleActions } from "../../components/StyleActions";
import { EnforceStyle } from "../../components/EnforceStyle";
import { StyleCard } from "../../components/StyleCard";
import { StylePreviewStudio } from "../../components/StylePreviewStudio";
import { DetailNav } from "../../components/DetailNav";

export function generateStaticParams() {
  return getStyleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const style = await getStyle(slug);
  if (!style) return {};
  const pageUrl = `${SITE_URL}/styles/${slug}`;
  const title = `${style.name} DESIGN.md — ${style.category} Style for AI Agents`;
  const description = `${style.description} Copy the complete ${style.name} DESIGN.md for Codex, Claude Code, Cursor, Windsurf, v0 & Lovable.`;
  return {
    title,
    description,
    keywords: [
      `${style.name} DESIGN.md`,
      `${style.name} design style`,
      `${style.category} design`,
      ...style.tags,
      "DESIGN.md for AI agents",
      "Codex",
      "Claude Code",
      "Cursor",
    ],
    alternates: { canonical: pageUrl },
    openGraph: {
      type: "article",
      title,
      description,
      url: pageUrl,
      siteName: "Design Styles",
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: `${style.name} DESIGN.md style preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og.png"],
    },
  };
}

export default async function StylePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const style = await getStyle(slug);
  if (!style) notFound();
  const all = getAllStyles();
  const related = getRelated(style, all, 4);
  const index = all.findIndex((s) => s.slug === slug);
  const p = style.preview;
  const prev = index > 0 ? all[index - 1] : null;
  const next = index < all.length - 1 ? all[index + 1] : null;
  const categoryPath = `/categories/${categorySlug(style.category)}`;
  const comparePairs = getComparePairs(all).filter(
    ([x, y]) => x === slug || y === slug
  );
  const jsonLd = [
    softwareAppJsonLd(style),
    breadcrumbJsonLd([
      { name: "Index", path: "/" },
      { name: style.category, path: categoryPath },
      { name: `${style.name} DESIGN.md`, path: `/styles/${slug}` },
    ]),
    faqJsonLd([
      {
        q: `How do I use the ${style.name} DESIGN.md with my AI agent?`,
        a: `Copy the ${style.name} DESIGN.md into your repo and tell Codex, Claude Code, Cursor, or Windsurf to follow it for all UI work. The full spec covers tokens, typography, spacing, components, and motion.`,
      },
      {
        q: `What does the ${style.name} style include?`,
        a: `${style.description} Tags: ${style.tags.join(", ") || style.category}. Each spec ships 20 sections with concrete values, no guessing.`,
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
      {/* ---------- breadcrumb + header (morphs into the style's own chrome) ---------- */}
      <div
        className="border-b transition-colors"
        style={{ background: p.bg, color: p.ink, borderColor: `${p.ink}26` }}
      >
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <nav
            aria-label="Breadcrumb"
            className="font-mono text-[11px] uppercase tracking-[0.14em]"
            style={{ color: p.muted }}
          >
            <Link href="/" className="hover:underline">Index</Link>
            <span aria-hidden="true"> / </span>
            <Link href={categoryPath} className="hover:underline">{style.category}</Link>
            <span aria-hidden="true"> / </span>
            <span className="font-semibold" style={{ color: p.ink }}>{style.name}</span>
          </nav>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p
                className="inline-block font-mono text-[11px] uppercase tracking-[0.18em]"
                style={{ background: p.accent, color: "#fff", padding: "3px 8px" }}
              >
                Nº {String(index + 1).padStart(3, "0")} — {style.category}
              </p>
              <h1
                className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl"
                style={{ fontFamily: p.display, color: p.ink }}
              >
                {style.name}
              </h1>
              <p
                className="mt-3 max-w-2xl font-serif text-[18px] italic leading-relaxed"
                style={{ color: p.muted, fontFamily: p.body }}
              >
                {style.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {style.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 font-mono text-[10.5px]"
                    style={{ border: `1px solid ${p.ink}44`, color: p.ink }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <DetailNav
            prev={prev ? { slug: prev.slug, name: prev.name } : null}
            next={next ? { slug: next.slug, name: next.name } : null}
          />
          <div
            className="mt-6 border border-[#111110]/20 dark:border-white/15 bg-white dark:bg-[#141416] p-4 sm:p-5 transition-colors"
          >
            <StyleActions slug={style.slug} />
            <EnforceStyle slug={style.slug} name={style.name} />
          </div>
        </div>
      </div>

      {/* ---------- large preview ---------- */}
      <div className="border-b border-[#111110]/15 dark:border-white/15 bg-white dark:bg-[#101012] transition-colors">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <div className="mt-4">
            <StylePreviewStudio style={style} />
          </div>
          {/* token strip */}
          <div className="mt-3 grid grid-cols-3 gap-px border border-[#111110]/20 dark:border-white/15 bg-[#111110]/20 dark:bg-white/10 sm:grid-cols-6 transition-colors">
            {([
              ["BG", p.bg],
              ["Surface", p.surface],
              ["Ink", p.ink],
              ["Muted", p.muted],
              ["Accent", p.accent],
              ["Accent 2", p.accent2],
            ] as [string, string][]).map(([label, value]) => (
              <div key={label} className="bg-white dark:bg-[#141416] px-3 py-2.5 transition-colors">
                <div className="flex items-center gap-2">
                  <span className="inline-block h-4 w-4 border border-black/20 dark:border-white/20" style={{ background: value }} />
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#111110]/55 dark:text-white/55">{label}</span>
                </div>
                <p className="mt-1 font-mono text-[11px] text-[var(--ink)]">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ---------- rendered DESIGN.md ---------- */}
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
          <aside className="hidden lg:block">
            <div className="sticky top-24 border border-[#111110]/15 dark:border-white/15 bg-white dark:bg-[#141416] p-4 transition-colors">
              <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-[#111110]/50 dark:text-white/50">
                Covers 20 sections
              </p>
              <ul className="mt-2 space-y-1 font-mono text-[11px] leading-relaxed text-[#111110]/70 dark:text-white/70">
                {["Aesthetic", "Typography", "Colors", "Spacing", "Layout", "Borders", "Shadows", "Radius", "Buttons", "Cards", "Navigation", "Imagery", "Icons", "Textures", "Motion", "Interactions", "Responsive", "Accessibility", "Avoid", "Snippet"].map((s) => (
                  <li key={s}>§ {s}</li>
                ))}
              </ul>
              <div className="mt-4 border-t border-[#111110]/15 dark:border-white/15 pt-3 font-mono text-[10.5px] leading-relaxed text-[#111110]/55 dark:text-white/55">
                Display — {p.display.split(",")[0]}
                <br />
                Body — {p.body.split(",")[0]}
              </div>
            </div>
          </aside>
          <article>
            <div className="mb-5 flex items-center justify-between border-b border-[#111110] dark:border-white/20 pb-3 transition-colors">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em]">
                DESIGN.md — complete instructions
              </p>
              <a
                href={`/designs/${style.slug}/DESIGN.md`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] uppercase tracking-[0.12em] underline underline-offset-4 hover:opacity-80"
              >
                Raw ↗
              </a>
            </div>
            <div className="md-prose" dangerouslySetInnerHTML={{ __html: style.html }} />
            <div className="mt-10 border border-[#111110]/20 dark:border-white/15 bg-white dark:bg-[#141416] p-4 sm:p-5 transition-colors">
              <StyleActions slug={style.slug} />
            </div>
          </article>
        </div>
      </div>

      {/* ---------- related ---------- */}
      {related.length > 0 && (
        <div className="border-t border-[#111110]/15 dark:border-white/15 transition-colors">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
            <div className="flex items-baseline justify-between">
              <h2 className="text-2xl font-extrabold tracking-tight">Related styles</h2>
              <Link href="/#catalog" className="font-mono text-[11px] uppercase tracking-[0.12em] underline underline-offset-4 hover:opacity-80">
                Catalog →
              </Link>
            </div>
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((s) => (
                <StyleCard key={s.slug} style={s} index={all.findIndex((r) => r.slug === s.slug)} />
              ))}
            </div>
            {comparePairs.length > 0 && (
              <ul className="mt-6 flex flex-wrap gap-2">
                {comparePairs.map(([x, y]) => {
                  const other = all.find((s) => s.slug === (x === slug ? y : x));
                  return (
                    <li key={`${x}-vs-${y}`}>
                      <Link
                        href={`/compare/${x}-vs-${y}`}
                        className="inline-block border border-[#111110]/20 dark:border-white/20 px-2.5 py-1 font-mono text-[11px] hover:underline hover:underline-offset-4"
                      >
                        {style.name} vs {other?.name ?? "style"} →
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
