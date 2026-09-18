import type { Metadata } from "next";
import Link from "next/link";
import { abs, breadcrumbJsonLd, faqJsonLd } from "../lib/seo";

export const dynamic = "force-static";

const URL = "/what-is-design-md";

export async function generateMetadata(): Promise<Metadata> {
  const url = abs(URL);
  const title = "What Is DESIGN.md? The AI Agent Design File, Explained";
  return {
    title,
    description: "DESIGN.md is a Markdown design-system spec AI coding agents read before generating UI: tokens, typography, spacing, components. Browse free examples.",
    keywords: [
      "what is DESIGN.md",
      "DESIGN.md file",
      "DESIGN.md for AI agents",
      "design system prompt",
    ],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: `${title} — Design Styles`,
      description:
        "One Markdown file with your colors, type, spacing, and component rules. Your agent reads it before every UI generation.",
      url,
      images: [{ url: "/og.png", width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: "DESIGN.md: the design file your AI coding agent actually reads.",
      images: ["/og.png"],
    },
  };
}

export default function WhatIsDesignMd() {
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Index", path: "/" },
      { name: "What is DESIGN.md?", path: URL },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "What is DESIGN.md?",
      description:
        "DESIGN.md is a Markdown design-system spec AI coding agents read before generating UI.",
      mainEntityOfPage: abs(URL),
    },
    faqJsonLd([
      {
        q: "What is DESIGN.md?",
        a: "A Markdown file in your repo that gives AI coding agents a structured visual spec: color tokens, typography, spacing, components, motion, and what to avoid.",
      },
      {
        q: "How is DESIGN.md different from AGENTS.md?",
        a: "AGENTS.md tells the agent how to work (commands, workflow). DESIGN.md tells it how things should look. Use both: AGENTS.md points at DESIGN.md for all UI work.",
      },
      {
        q: "Where do I get a DESIGN.md?",
        a: "Pick any of the free styles in this archive, copy its DESIGN.md, and paste it into your project. Each ships the same 20-section spec.",
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
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
          <nav
            aria-label="Breadcrumb"
            className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#111110]/50 dark:text-white/50"
          >
            <Link href="/" className="hover:underline">
              Index
            </Link>
            <span aria-hidden="true"> / </span>
            <span className="font-semibold text-[var(--ink)]">
              What is DESIGN.md?
            </span>
          </nav>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
            What is DESIGN.md?
          </h1>
          <p className="mt-4 font-serif text-[19px] italic leading-relaxed text-[#111110]/75 dark:text-white/75">
            One Markdown file with your colors, type, spacing, and component
            rules. Your AI coding agent reads it before generating any UI — so
            every screen looks designed instead of default.
          </p>
          <div className="mt-8 space-y-6 text-[15.5px] leading-relaxed">
            <section>
              <h2 className="text-xl font-extrabold tracking-tight">
                The 30-second version
              </h2>
              <p className="mt-2 text-[#111110]/75 dark:text-white/75">
                AI agents forget your taste between prompts. A DESIGN.md fixes
                that: it lives in your repo, lists concrete values (hex, px,
                durations — never vibes), and gets referenced by your agent
                config. Three steps: copy a style below, wire your agent, ask
                for one screen at a time.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-extrabold tracking-tight">
                What goes inside
              </h2>
              <ul className="mt-2 list-disc space-y-1 pl-6 text-[#111110]/75 dark:text-white/75">
                <li>Frontmatter contract: slug, category, tags, related, preview palette</li>
                <li>Look: aesthetic, typography, colors, spacing, layout, borders, shadows, radius</li>
                <li>Pieces: buttons, cards, navigation, imagery, icons, textures</li>
                <li>Behavior: motion, interactions, responsive, accessibility, what to avoid</li>
                <li>Quick-start CSS snippet your agent can paste</li>
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-extrabold tracking-tight">
                DESIGN.md vs AGENTS.md vs rules files
              </h2>
              <p className="mt-2 text-[#111110]/75 dark:text-white/75">
                AGENTS.md (Codex), CLAUDE.md (Claude Code), and{" "}
                <code className="font-mono text-[13px]">.cursor/rules</code>{" "}
                describe workflow. DESIGN.md describes visuals. Point the first
                at the second with one line —{" "}
                <code className="font-mono text-[13px]">
                  Follow @DESIGN.md for all UI work
                </code>{" "}
                — and the agent loads taste automatically.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-extrabold tracking-tight">
                Get one free
              </h2>
              <p className="mt-2 text-[#111110]/75 dark:text-white/75">
                This archive ships MIT-licensed specs. Start here:
              </p>
              <ul className="mt-3 space-y-2">
                <li>
                  <Link href="/#catalog" className="underline underline-offset-4 font-semibold">
                    Browse the catalog →
                  </Link>
                </li>
                <li>
                  <Link href="/guides/claude-code" className="underline underline-offset-4 font-semibold">
                    Setup guides for Claude Code, Cursor, Codex, Windsurf, v0, Lovable →
                  </Link>
                </li>
                <li>
                  <Link href="/api/styles.json" className="underline underline-offset-4 font-semibold">
                    Machine index: /api/styles.json →
                  </Link>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
