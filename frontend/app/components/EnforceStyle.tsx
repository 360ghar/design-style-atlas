"use client";

import { useRef, useState, useEffect } from "react";
import { copyText } from "../lib/clipboard";
import { SITE_URL } from "../lib/site";

type RuleKind = "cursorrules" | "claudemd" | "agentsmd";

const RULE_META: Record<RuleKind, { file: string; label: string }> = {
  cursorrules: { file: ".cursorrules", label: ".cursorrules" },
  claudemd: { file: "CLAUDE.md", label: "CLAUDE.md" },
  agentsmd: { file: "AGENTS.md", label: "AGENTS.md" },
};

function ruleFile(kind: RuleKind, slug: string, name: string): string {
  const header =
    kind === "cursorrules"
      ? `# Design direction: ${name}`
      : `## Design direction: ${name}`;
  return [
    header,
    ``,
    `Follow ${SITE_URL}/designs/${slug}/DESIGN.md for ALL UI work: colors, typography, spacing, borders, shadows, radius, motion.`,
    ``,
    `Before finishing any UI task, self-check against the token contract:`,
    `${SITE_URL}/api/${slug}.contract.json`,
    ``,
    `If the design-style-atlas repo is available locally, audit with:`,
    `node <path-to-design-style-atlas>/cli/audit.mjs . --style ${slug} --ci`,
    ``,
    `Never declare UI work done with contract violations outstanding.`,
  ].join("\n");
}

const lockSnippet = (slug: string) =>
  JSON.stringify({ style: slug, version: "1.0.0" }, null, 2);

export function EnforceStyle({ slug, name }: { slug: string; name: string }) {
  const [copied, setCopied] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  function mark(id: string) {
    setCopied(id);
    setError(null);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(null), 2200);
  }

  async function copy(id: string, text: string) {
    try {
      await copyText(text);
      mark(id);
    } catch {
      setError("Copy failed — select the snippet manually.");
    }
  }

  const btn =
    "inline-flex items-center gap-1.5 border px-3 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors cursor-pointer disabled:opacity-60";
  const btnPrimary = `${btn} border-[#111110] bg-[#111110] text-white hover:bg-transparent hover:text-[#111110] dark:border-white dark:bg-white dark:text-[#0c0c0e] dark:hover:bg-transparent dark:hover:text-white`;
  const btnGhost = `${btn} border-[#111110]/30 bg-transparent text-[#111110] hover:border-[#111110] dark:border-white/20 dark:text-white dark:hover:border-white`;

  return (
    <div className="mt-5 border-t border-[#111110]/15 pt-4 dark:border-white/15">
      <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-[#111110]/50 dark:text-white/50">
        Enforce this style — beyond copy-paste
      </p>

      <div className="mt-3 grid gap-4 sm:grid-cols-2">
        {/* 1. Declare */}
        <div>
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em]">
            1. Declare it in your repo
          </p>
          <pre className="mt-2 overflow-x-auto border border-[#111110]/15 bg-black/[0.03] p-2.5 font-mono text-[11px] leading-relaxed dark:border-white/15 dark:bg-white/[0.04]">
            {lockSnippet(slug)}
          </pre>
          <p className="mt-1 font-mono text-[10.5px] leading-relaxed text-[#111110]/50 dark:text-white/50">
            Save as <code>DESIGN.lock</code> at the repo root — agents and the audit CLI auto-discover it.
          </p>
          <button type="button" onClick={() => copy("lock", lockSnippet(slug))} className={`${btnGhost} mt-2`}>
            {copied === "lock" ? "✓ Copied!" : "⧉ Copy DESIGN.lock"}
          </button>
        </div>

        {/* 2. Audit */}
        <div>
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em]">
            2. Audit the codebase
          </p>
          <pre className="mt-2 overflow-x-auto border border-[#111110]/15 bg-black/[0.03] p-2.5 font-mono text-[11px] leading-relaxed dark:border-white/15 dark:bg-white/[0.04]">
{`node <path-to-design-style-atlas>/cli/audit.mjs . --ci`}
          </pre>
          <p className="mt-1 font-mono text-[10.5px] leading-relaxed text-[#111110]/50 dark:text-white/50">
            Flags off-palette colors, foreign fonts, bad radii, blurred shadows, hairline borders. CI-ready exit codes.
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() =>
                copy("audit", `node <path-to-design-style-atlas>/cli/audit.mjs . --style ${slug} --ci`)
              }
              className={btnGhost}
            >
              {copied === "audit" ? "✓ Copied!" : "⧉ Copy audit command"}
            </button>
            <a
              href={`/api/${slug}.contract.json`}
              target="_blank"
              rel="noopener noreferrer"
              className={btnGhost}
            >
              Contract JSON ↗
            </a>
          </div>
        </div>
      </div>

      {/* 3. Agent rules */}
      <div className="mt-4">
        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em]">
          3. Install the rule for your agent
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          {(Object.keys(RULE_META) as RuleKind[]).map((kind) => (
            <button
              key={kind}
              type="button"
              onClick={() => copy(kind, ruleFile(kind, slug, name))}
              title={`Pointer block for ${RULE_META[kind].file} — fetches the full spec on demand`}
              className={btnPrimary}
            >
              {copied === kind ? "✓ Copied!" : `{ } ${RULE_META[kind].label}`}
            </button>
          ))}
        </div>
        <p className="mt-1 font-mono text-[10.5px] leading-relaxed text-[#111110]/50 dark:text-white/50">
          Slim pointer files — the agent fetches the full spec on demand instead of storing it in context.
        </p>
      </div>

      {error && (
        <p role="alert" className="mt-2 font-mono text-[11px] text-red-600 dark:text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}
