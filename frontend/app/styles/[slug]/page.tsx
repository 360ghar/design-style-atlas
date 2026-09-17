import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getStyle, getAllStyles, getRelated, getStyleSlugs } from "../../lib/styles";
import { SITE_URL } from "../../lib/site";
import { StylePreview } from "../../components/previews";
import { StyleActions } from "../../components/StyleActions";
import { StyleCard } from "../../components/StyleCard";

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
  return {
    title: `${style.name}`,
    description: `${style.description} Copy the complete ${style.name} DESIGN.md for Codex, Claude Code, Cursor & Windsurf.`,
    alternates: { canonical: `${SITE_URL}/styles/${slug}` },
    openGraph: {
      title: `${style.name} — Design Styles`,
      description: style.description,
      url: `${SITE_URL}/styles/${slug}`,
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

  return (
    <div>
      {/* ---------- breadcrumb + header ---------- */}
      <div className="border-b border-[#111110]/15">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <nav aria-label="Breadcrumb" className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#111110]/50">
            <Link href="/" className="hover:underline">Index</Link>
            <span aria-hidden="true"> / </span>
            <Link href="/#catalog" className="hover:underline">{style.category}</Link>
            <span aria-hidden="true"> / </span>
            <span className="text-[#111110]">{style.name}</span>
          </nav>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#111110]/50">
                Nº {String(index + 1).padStart(3, "0")} — {style.category}
              </p>
              <h1 className="mt-1 text-4xl font-extrabold tracking-tight sm:text-5xl">
                {style.name}
              </h1>
              <p className="mt-3 max-w-2xl font-serif text-[18px] italic leading-relaxed text-[#111110]/75">
                {style.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {style.tags.map((t) => (
                  <span key={t} className="border border-[#111110]/20 px-2 py-0.5 font-mono text-[10.5px] text-[#111110]/65">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-6 border border-[#111110]/20 bg-white p-4 sm:p-5">
            <StyleActions slug={style.slug} />
          </div>
        </div>
      </div>

      {/* ---------- large preview ---------- */}
      <div className="border-b border-[#111110]/15 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#111110]/50">
            Specimen — hover states live in the CSS
          </p>
          <div className="mt-3 border border-[#111110]">
            <StylePreview meta={style} large />
          </div>
          {/* token strip */}
          <div className="mt-3 grid grid-cols-3 gap-px border border-[#111110]/20 bg-[#111110]/20 sm:grid-cols-6">
            {([
              ["BG", p.bg],
              ["Surface", p.surface],
              ["Ink", p.ink],
              ["Muted", p.muted],
              ["Accent", p.accent],
              ["Accent 2", p.accent2],
            ] as [string, string][]).map(([label, value]) => (
              <div key={label} className="bg-white px-3 py-2.5">
                <div className="flex items-center gap-2">
                  <span className="inline-block h-4 w-4 border border-black/20" style={{ background: value }} />
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#111110]/55">{label}</span>
                </div>
                <p className="mt-1 font-mono text-[11px]">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ---------- rendered DESIGN.md ---------- */}
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
          <aside className="hidden lg:block">
            <div className="sticky top-24 border border-[#111110]/15 bg-white p-4">
              <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-[#111110]/50">
                Covers 20 sections
              </p>
              <ul className="mt-2 space-y-1 font-mono text-[11px] leading-relaxed text-[#111110]/70">
                {["Aesthetic", "Typography", "Colors", "Spacing", "Layout", "Borders", "Shadows", "Radius", "Buttons", "Cards", "Navigation", "Imagery", "Icons", "Textures", "Motion", "Interactions", "Responsive", "Accessibility", "Avoid", "Snippet"].map((s) => (
                  <li key={s}>§ {s}</li>
                ))}
              </ul>
              <div className="mt-4 border-t border-[#111110]/15 pt-3 font-mono text-[10.5px] leading-relaxed text-[#111110]/55">
                Display — {p.display.split(",")[0]}
                <br />
                Body — {p.body.split(",")[0]}
              </div>
            </div>
          </aside>
          <article>
            <div className="mb-5 flex items-center justify-between border-b border-[#111110] pb-3">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em]">
                DESIGN.md — complete instructions
              </p>
              <a
                href={`/designs/${style.slug}/DESIGN.md`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] uppercase tracking-[0.12em] underline underline-offset-4"
              >
                Raw ↗
              </a>
            </div>
            <div className="md-prose" dangerouslySetInnerHTML={{ __html: style.html }} />
            <div className="mt-10 border border-[#111110]/20 bg-white p-4 sm:p-5">
              <StyleActions slug={style.slug} />
            </div>
          </article>
        </div>
      </div>

      {/* ---------- related ---------- */}
      {related.length > 0 && (
        <div className="border-t border-[#111110]/15">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
            <div className="flex items-baseline justify-between">
              <h2 className="text-2xl font-extrabold tracking-tight">Related styles</h2>
              <Link href="/#catalog" className="font-mono text-[11px] uppercase tracking-[0.12em] underline underline-offset-4">
                All 100 →
              </Link>
            </div>
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((s) => (
                <StyleCard key={s.slug} style={s} index={all.findIndex((r) => r.slug === s.slug)} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
