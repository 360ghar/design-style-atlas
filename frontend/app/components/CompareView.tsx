"use client";

import { useState } from "react";
import Link from "next/link";
import { getStyleDefinition } from "../lib/style-definitions";
import { BespokePreview, StyleLandingPage, hasBespoke } from "./previews";
import type { PreviewVariant } from "./previews";

export function CompareView({ a, b }: { a: string; b: string }) {
  const [variant, setVariant] = useState<PreviewVariant>("bespoke");
  let defA = null;
  let defB = null;
  try { defA = getStyleDefinition(a); } catch { defA = null; }
  try { defB = getStyleDefinition(b); } catch { defB = null; }

  if (!defA || !defB) {
    return (
      <div className="border border-dashed border-[#111110]/30 dark:border-white/30 p-10 text-center">
        <p className="font-serif text-2xl italic">One of those styles does not exist.</p>
        <p className="mt-2 text-sm text-[#111110]/60 dark:text-white/60">
          Check the slugs in <code className="font-mono text-[12px]">?compare=a,b</code> — e.g.{" "}
          <code className="font-mono text-[12px]">?compare=neo-brutalism,swiss-design</code>.
        </p>
        <Link href="/#catalog" className="mt-4 inline-block border border-[#111110] bg-[#111110] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.12em] text-white dark:border-white dark:bg-white dark:text-[#0c0c0e]">
          Back to catalog
        </Link>
      </div>
    );
  }

  const cols = [
    { def: defA, slug: a },
    { def: defB, slug: b },
  ];

  const variantBtn = (v: PreviewVariant, label: string) => (
    <button
      key={v}
      type="button"
      onClick={() => setVariant(v)}
      aria-pressed={variant === v}
      className={`px-3 py-1.5 rounded cursor-pointer transition-colors font-mono text-[11px] ${
        variant === v
          ? "bg-[#111110] text-white dark:bg-white dark:text-[#0c0c0e] font-bold"
          : "text-[#111110]/60 dark:text-white/60 hover:text-[#111110] dark:hover:text-white"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div
          className="flex items-center rounded border border-[#111110]/20 dark:border-white/20 bg-white dark:bg-[#141416] p-0.5"
          role="group"
          aria-label="Preview variant"
        >
          {variantBtn("bespoke", "◈ Bespoke")}
          {variantBtn("generic", "🖥️ Generic")}
        </div>
        <p className="font-mono text-[11px] text-[#111110]/50 dark:text-white/50">
          {variant === "bespoke"
            ? "Hand-crafted specimen per style"
            : "Same layout, different tokens"}
        </p>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        {cols.map(({ def, slug }) => (
          <div key={slug} className="border border-[#111110]/20 dark:border-white/15 bg-white dark:bg-[#141416]">
            <div className="flex items-baseline justify-between gap-2 border-b border-[#111110]/15 dark:border-white/15 px-4 py-3">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#111110]/50 dark:text-white/50">
                  {def.category}
                </p>
                <h2 className="text-xl font-extrabold tracking-tight">{def.name}</h2>
              </div>
              <Link
                href={`/styles/${slug}`}
                className="shrink-0 font-mono text-[11px] uppercase tracking-[0.12em] underline underline-offset-4"
              >
                Open →
              </Link>
            </div>
            <div className="max-h-[560px] overflow-hidden">
              {variant === "bespoke" && hasBespoke(slug) ? (
                <BespokePreview
                  meta={{
                    slug: def.slug,
                    name: def.name,
                    description: def.description,
                    category: def.category,
                    tags: def.tags,
                    related: [],
                    preview: def.preview,
                  }}
                  large
                />
              ) : (
                <StyleLandingPage def={def} large />
              )}
            </div>
            <div className="grid grid-cols-3 gap-px border-t border-[#111110]/15 dark:border-white/15 bg-[#111110]/15 dark:bg-white/10">
              {(
                [
                  ["BG", def.preview.bg],
                  ["Ink", def.preview.ink],
                  ["Accent", def.preview.accent],
                ] as [string, string][]
              ).map(([label, value]) => (
                <div key={label} className="bg-white dark:bg-[#141416] px-3 py-2">
                  <div className="flex items-center gap-2">
                    <span className="inline-block h-3.5 w-3.5 border border-black/20 dark:border-white/20" style={{ background: value }} />
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#111110]/55 dark:text-white/55">{label}</span>
                  </div>
                  <p className="mt-0.5 font-mono text-[11px]">{value}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 border-t border-[#111110]/15 dark:border-white/15 px-4 py-3">
              <a
                href={`/designs/${slug}/DESIGN.md`}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#111110]/30 px-3 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.1em] hover:border-[#111110] dark:border-white/20 dark:hover:border-white"
              >
                Raw ↗
              </a>
              <a
                href={`/api/${slug}.json`}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#111110]/30 px-3 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.1em] hover:border-[#111110] dark:border-white/20 dark:hover:border-white"
              >
                JSON ↗
              </a>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-3 font-mono text-[11px] text-[#111110]/50 dark:text-white/50">
        Share this comparison: <code className="bg-black/5 dark:bg-white/10 px-1 py-0.5 rounded">?compare={a},{b}</code>
      </p>
    </div>
  );
}
