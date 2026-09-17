import type { Metadata } from "next";
import Link from "next/link";
import { getAllStyles, getCategories } from "./lib/styles";
import { SearchCatalog } from "./components/SearchCatalog";
import { GITHUB_URL, SITE_URL } from "./lib/site";
import { AGENT_GUIDES, categorySlug, faqJsonLd, itemListJsonLd } from "./lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const count = getAllStyles().length;
  return {
    title: `${count} DESIGN.md Files for AI Coding Agents`,
    description: `${count} ready-to-use DESIGN.md files for AI coding agents. Browse a visual style, preview it, copy its complete instructions into Codex, Claude Code, Cursor, Windsurf, v0, or Lovable.`,
    alternates: { canonical: SITE_URL },
  };
}

export default function Home() {
  const styles = getAllStyles();
  const categories = getCategories(styles);
  const itemList = itemListJsonLd(styles);
  const faq = faqJsonLd([
    {
      q: "What is a DESIGN.md file?",
      a: "A DESIGN.md is a Markdown design-system spec your AI coding agent reads before generating UI: colors, typography, spacing, components, motion, and what to avoid. Copy one into your repo and point your agent at it.",
    },
    {
      q: "How do I use a style with Claude Code, Cursor, or Codex?",
      a: "Copy the style's DESIGN.md into your project, then tell your agent to follow it: Claude Code via @DESIGN.md in CLAUDE.md, Cursor via .cursor/rules, Codex via AGENTS.md. Per-agent steps live under Guides below.",
    },
    {
      q: "Are these styles free to use?",
      a: "Yes. Every style is MIT licensed. Use them in anything, attribute if you're kind.",
    },
  ]);
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Design Styles",
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/?q={query}`,
      "query-input": "required name=query",
    },
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      {/* ---------- Hero ---------- */}
      <section className="border-b border-[#111110] dark:border-white/15 transition-colors">
        <div className="mx-auto max-w-6xl px-4 pb-10 pt-14 sm:px-6 sm:pt-20">
          <p className="inline-block border border-[#111110] dark:border-white/30 px-2 py-1 font-mono text-[10.5px] uppercase tracking-[0.18em]">
            An open-source design archive
          </p>
          <h1 className="mt-5 max-w-3xl text-[42px] font-extrabold leading-[1.02] tracking-[-0.02em] sm:text-[64px]">
            {styles.length} DESIGN.md files for AI coding agents
          </h1>
          <p className="mt-5 max-w-2xl font-serif text-[19px] italic leading-relaxed text-[#111110]/75 dark:text-white/75 sm:text-[21px]">
            Stop shipping generic AI-generated UI. Give Codex, Claude Code,
            Cursor, Windsurf, v0, or Lovable a reusable visual direction
            covering typography, colors, spacing, layout, components, effects,
            motion, and design principles — then copy its DESIGN.md and build.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#catalog"
              className="border border-[#111110] bg-[#111110] px-6 py-3 font-mono text-[12px] font-semibold uppercase tracking-[0.12em] text-white hover:bg-transparent hover:text-[#111110] dark:border-white dark:bg-white dark:text-[#0c0c0e] dark:hover:bg-transparent dark:hover:text-white transition-colors"
            >
              Browse styles ↓
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#111110] bg-transparent px-6 py-3 font-mono text-[12px] font-semibold uppercase tracking-[0.12em] hover:bg-[#111110] hover:text-white dark:border-white/30 dark:text-white dark:hover:bg-white dark:hover:text-[#0c0c0e] transition-colors"
            >
              View on GitHub ↗
            </a>
          </div>
          <dl className="mt-9 grid grid-cols-1 gap-px border border-[#111110]/20 dark:border-white/15 bg-[#111110]/20 dark:bg-white/10 sm:grid-cols-3">
            {[
              [String(styles.length), "production-ready styles"],
              ["Codex · Claude Code · Cursor", "works with your agent"],
              ["MIT", "open source, forever"],
            ].map(([k, v]) => (
              <div key={k} className="bg-[#fafaf8] dark:bg-[#141416] px-5 py-4 transition-colors">
                <dt className="font-mono text-[15px] font-semibold">{k}</dt>
                <dd className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.12em] text-[#111110]/55 dark:text-white/55">
                  {v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ---------- Catalog ---------- */}
      <section id="catalog" className="scroll-mt-14">
        <SearchCatalog styles={styles} categories={categories} />
      </section>

      {/* ---------- Browse hubs (server-rendered for crawlers) ---------- */}
      <section
        aria-label="Browse by category and agent"
        className="border-t border-[#111110]/15 dark:border-white/15"
      >
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-2">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#111110]/50 dark:text-white/50">
              Browse by category
            </p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight">
              Every category has its own index page.
            </h2>
            <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {categories.map((c) => (
                <li key={c.name}>
                  <Link
                    href={`/categories/${categorySlug(c.name)}`}
                    className="flex items-baseline justify-between gap-2 border border-[#111110]/15 dark:border-white/15 px-3 py-2 text-sm hover:underline hover:underline-offset-4"
                  >
                    <span className="font-semibold">{c.name}</span>
                    <span className="font-mono text-[11px] text-[#111110]/55 dark:text-white/55">
                      {c.count}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#111110]/50 dark:text-white/50">
              Setup guides
            </p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight">
              Use DESIGN.md with your agent.
            </h2>
            <ul className="mt-5 space-y-2">
              {AGENT_GUIDES.map((g) => (
                <li key={g.slug}>
                  <Link
                    href={`/guides/${g.slug}`}
                    className="block border border-[#111110]/15 dark:border-white/15 px-3 py-2 text-sm hover:underline hover:underline-offset-4"
                  >
                    <span className="font-semibold">
                      How to use DESIGN.md with {g.name}
                    </span>{" "}
                    <span className="text-[#111110]/60 dark:text-white/60">
                      · {g.configFile}
                    </span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/what-is-design-md"
                  className="block border border-[#111110] dark:border-white/30 bg-[#111110] dark:bg-white px-3 py-2 text-sm font-semibold text-white dark:text-[#0c0c0e] hover:underline hover:underline-offset-4"
                >
                  What is DESIGN.md? →
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- Crawlable A–Z index (all styles link without JS) ---------- */}
      <section
        aria-label="All styles A to Z"
        className="border-t border-[#111110]/15 dark:border-white/15"
      >
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-extrabold tracking-tight">
            All styles A to Z
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#111110]/65 dark:text-white/65">
            Every style below links to its full DESIGN.md spec page. Use this
            index when search or filters hide what you need.
          </p>
          <ul className="mt-6 columns-2 gap-6 sm:columns-3 lg:columns-4">
            {[...styles]
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((s) => (
                <li key={s.slug} className="break-inside-avoid py-1">
                  <Link
                    href={`/styles/${s.slug}`}
                    className="text-sm underline underline-offset-4 hover:opacity-80"
                  >
                    {s.name} DESIGN.md
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </section>

      {/* ---------- Usage ---------- */}
      <section id="usage" className="scroll-mt-14 border-t border-[#111110] dark:border-white/15 transition-colors">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-2">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#111110]/50 dark:text-white/50">
              02 — Usage
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight">
              Hand a style to your agent in 30 seconds.
            </h2>
            <ol className="mt-6 space-y-4">
              {[
                ["Pick a style", "Browse the catalog and open the style that fits the site — Neo-Brutalism, Swiss, Y2K, Bauhaus, anything."],
                ["Copy its DESIGN.md", "Hit “Copy DESIGN.md” or download the file into your repo."],
                ["Point your agent at it", "Tell Codex, Claude Code, Cursor, or Windsurf: “Follow @DESIGN.md for all UI work.”"],
              ].map(([t, d], i) => (
                <li key={t} className="flex gap-4 border-t border-[#111110]/15 dark:border-white/15 pt-4">
                  <span className="font-mono text-[13px] font-semibold">0{i + 1}</span>
                  <div>
                    <p className="font-semibold">{t}</p>
                    <p className="mt-1 text-sm leading-relaxed text-[#111110]/65 dark:text-white/65">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="flex flex-col gap-4">
            <div className="border border-[#111110]/20 dark:border-white/15 bg-[#111110] dark:bg-[#141416] p-5">
              <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-white/50">
                Terminal
              </p>
              <pre className="mt-3 overflow-x-auto font-mono text-[12.5px] leading-relaxed text-[#ece9e0]">
{`# copy a style into your project
cp designs/neo-brutalism/DESIGN.md ./DESIGN.md

# then tell your agent:
"Follow @DESIGN.md for all UI work."`}
              </pre>
            </div>
            <div className="border border-[#111110]/20 dark:border-white/15 bg-white dark:bg-[#141416] p-5 transition-colors">
              <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-[#111110]/50 dark:text-white/50">
                What each file covers
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#111110]/70 dark:text-white/70">
                Overall aesthetic · typography · colors · spacing · layout/grid ·
                borders · shadows · radius · buttons · cards · navigation ·
                imagery · icons · textures · motion · interactions · responsive
                behavior · accessibility · what to avoid · quick-start snippet.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
