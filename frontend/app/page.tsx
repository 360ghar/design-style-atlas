import type { Metadata } from "next";
import { getAllStyles, getCategories } from "./lib/styles";
import { SearchCatalog } from "./components/SearchCatalog";
import { GITHUB_URL } from "./lib/site";

export const metadata: Metadata = {
  title: "Design Styles — 100 design styles for AI coding agents",
  description:
    "100 ready-to-use DESIGN.md files for AI coding agents. Browse a visual style, preview it, copy its complete instructions into Codex, Claude Code, Cursor, or Windsurf.",
};

export default function Home() {
  const styles = getAllStyles();
  const categories = getCategories(styles);

  return (
    <div>
      {/* ---------- Hero ---------- */}
      <section className="border-b border-[#111110] dark:border-white/15 transition-colors">
        <div className="mx-auto max-w-6xl px-4 pb-10 pt-14 sm:px-6 sm:pt-20">
          <p className="inline-block border border-[#111110] dark:border-white/30 px-2 py-1 font-mono text-[10.5px] uppercase tracking-[0.18em]">
            An open-source design archive
          </p>
          <h1 className="mt-5 max-w-3xl text-[42px] font-extrabold leading-[1.02] tracking-[-0.02em] sm:text-[64px]">
            100 design styles for AI coding agents
          </h1>
          <p className="mt-5 max-w-2xl font-serif text-[19px] italic leading-relaxed text-[#111110]/75 dark:text-white/75 sm:text-[21px]">
            Give your coding agent a reusable visual direction covering
            typography, colors, spacing, layout, components, effects, motion,
            and design principles.
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
              ["100", "production-ready styles"],
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
