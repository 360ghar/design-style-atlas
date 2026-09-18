"use client";

import { useMemo, useState, type ReactNode } from "react";
import Link from "next/link";
import type { StyleMeta } from "../lib/styles";
import { getStyleDefinition } from "../lib/style-definitions";
import type { PreviewThemeMode } from "../lib/preview-theme";
import { StyleLandingPage } from "./previews/StyleLandingPage";
import { BespokePreview, hasBespoke } from "./previews";
import { StyleComponentKit } from "./previews/StyleComponentKit";
import {
  TokenPlayground,
  MixControls,
  RemixExport,
  applyOverrides,
  mixDefs,
  type TokenOverrides,
} from "./TokenPlayground";

type Tab = "bespoke" | "generic" | "kit" | "tokens" | "mix" | "export" | "spec";
export type PreviewVariant = "bespoke" | "generic";

export function StylePreviewStudio({
  style,
  renderedMarkdown,
}: {
  style: StyleMeta;
  renderedMarkdown?: ReactNode;
}) {
  const bespokeAvailable = hasBespoke(style.slug);
  const [activeTab, setActiveTab] = useState<Tab>(bespokeAvailable ? "bespoke" : "generic");
  const [viewport, setViewport] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [previewTheme, setPreviewTheme] = useState<PreviewThemeMode>("default");
  const [overrides, setOverrides] = useState<TokenOverrides>({});
  const [mixSlug, setMixSlug] = useState<string | null>(null);
  const [mixT, setMixT] = useState(50);

  const baseDef = getStyleDefinition(style.slug);

  const effectiveDef = useMemo(() => {
    let def = baseDef;
    if (mixSlug) {
      try {
        const other = getStyleDefinition(mixSlug);
        def = mixDefs(baseDef, other, mixT / 100);
      } catch {
        def = baseDef;
      }
    }
    if (Object.keys(overrides).length > 0) def = applyOverrides(def, overrides);
    return def;
  }, [baseDef, mixSlug, mixT, overrides]);

  const isRemixed = mixSlug !== null || Object.keys(overrides).length > 0;
  const sources = mixSlug ? [style.slug, mixSlug] : [style.slug];

  const tabBtn = (tab: Tab, icon: string, label: string) => (
    <button
      key={tab}
      type="button"
      onClick={() => setActiveTab(tab)}
      className={`flex items-center gap-1.5 px-3 py-1.5 rounded transition-colors cursor-pointer ${
        activeTab === tab
          ? "bg-[#111110] text-white dark:bg-white dark:text-[#111110] font-semibold shadow-sm"
          : "text-[#111110]/70 dark:text-white/70 hover:text-[#111110] dark:hover:text-white"
      }`}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </button>
  );

  return (
    <div className="w-full flex flex-col border border-[#111110] dark:border-white/20 bg-[#fafaf8] dark:bg-[#141416] transition-colors">
      {/* ---------- STUDIO CONTROL BAR ---------- */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#111110] dark:border-white/15 bg-white dark:bg-[#18181b] px-3 sm:px-4 py-2.5">
        {/* Left: View Mode Tabs */}
        <div className="flex flex-wrap items-center gap-2 max-w-full">
          <div className="flex items-center overflow-x-auto no-scrollbar rounded border border-[#111110]/20 dark:border-white/20 bg-[#fafaf8] dark:bg-[#141416] p-0.5 text-[12px] font-mono max-w-full">
            {bespokeAvailable && tabBtn("bespoke", "◈", "Bespoke")}
            {tabBtn("generic", "🖥️", "Generic")}
            {tabBtn("kit", "🧩", "Kit")}
            {tabBtn("tokens", "🎨", "Tokens")}
            {tabBtn("mix", "🌀", "Mix")}
            {tabBtn("export", "⤓", "Export")}
            {renderedMarkdown && tabBtn("spec", "📄", "Spec")}
          </div>

          {/* Viewport Width Controls (Active in bespoke, generic, and kit modes) */}
          {(activeTab === "bespoke" || activeTab === "generic" || activeTab === "kit") && (
            <div className="hidden sm:flex items-center rounded border border-[#111110]/20 dark:border-white/20 bg-[#fafaf8] dark:bg-[#141416] p-0.5 text-[11px] font-mono">
              <button
                type="button"
                onClick={() => setViewport("desktop")}
                className={`px-2.5 py-1 rounded cursor-pointer transition-colors ${
                  viewport === "desktop"
                    ? "bg-[#111110] text-white dark:bg-white dark:text-[#111110] font-bold"
                    : "text-[#111110]/60 dark:text-white/60 hover:text-[#111110] dark:hover:text-white"
                }`}
              >
                Desktop
              </button>
              <button
                type="button"
                onClick={() => setViewport("tablet")}
                className={`px-2.5 py-1 rounded cursor-pointer transition-colors ${
                  viewport === "tablet"
                    ? "bg-[#111110] text-white dark:bg-white dark:text-[#111110] font-bold"
                    : "text-[#111110]/60 dark:text-white/60 hover:text-[#111110] dark:hover:text-white"
                }`}
              >
                Tablet (768px)
              </button>
              <button
                type="button"
                onClick={() => setViewport("mobile")}
                className={`px-2.5 py-1 rounded cursor-pointer transition-colors ${
                  viewport === "mobile"
                    ? "bg-[#111110] text-white dark:bg-white dark:text-[#111110] font-bold"
                    : "text-[#111110]/60 dark:text-white/60 hover:text-[#111110] dark:hover:text-white"
                }`}
              >
                Mobile (375px)
              </button>
            </div>
          )}
          {!bespokeAvailable && (
            <span className="border border-dashed border-[#111110]/40 dark:border-white/40 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-[#111110]/60 dark:text-white/60">
              Generic only
            </span>
          )}
          {isRemixed && (
            <span className="border border-[#111110] dark:border-white/40 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.12em]">
              ✦ Remix active
            </span>
          )}
        </div>

        {/* Right: Preview Theme Controls + Fullscreen */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
          {/* Preview Theme Selector */}
          <div
            className="flex items-center rounded border border-[#111110]/20 dark:border-white/20 bg-[#fafaf8] dark:bg-[#141416] p-0.5 text-[11px] font-mono"
            role="group"
            aria-label="Preview theme mode"
          >
            <span className="px-2 text-[10px] uppercase tracking-wider text-[#111110]/50 dark:text-white/50 hidden lg:inline">
              Preview Theme:
            </span>
            <button
              type="button"
              onClick={() => setPreviewTheme("default")}
              title="Style's original designed palette"
              className={`px-2.5 py-1 rounded cursor-pointer transition-colors flex items-center gap-1 ${
                previewTheme === "default"
                  ? "bg-[#111110] text-white dark:bg-white dark:text-[#111110] font-bold shadow-sm"
                  : "text-[#111110]/70 dark:text-white/70 hover:text-[#111110] dark:hover:text-white"
              }`}
            >
              <span>✦</span>
              <span>Original</span>
            </button>
            <button
              type="button"
              onClick={() => setPreviewTheme("light")}
              title="Force Light preview theme"
              className={`px-2.5 py-1 rounded cursor-pointer transition-colors flex items-center gap-1 ${
                previewTheme === "light"
                  ? "bg-[#111110] text-white dark:bg-white dark:text-[#111110] font-bold shadow-sm"
                  : "text-[#111110]/70 dark:text-white/70 hover:text-[#111110] dark:hover:text-white"
              }`}
            >
              <span>☀️</span>
              <span>Light</span>
            </button>
            <button
              type="button"
              onClick={() => setPreviewTheme("dark")}
              title="Force Dark preview theme"
              className={`px-2.5 py-1 rounded cursor-pointer transition-colors flex items-center gap-1 ${
                previewTheme === "dark"
                  ? "bg-[#111110] text-white dark:bg-white dark:text-[#111110] font-bold shadow-sm"
                  : "text-[#111110]/70 dark:text-white/70 hover:text-[#111110] dark:hover:text-white"
              }`}
            >
              <span>🌙</span>
              <span>Dark</span>
            </button>
          </div>

          {/* Fullscreen Link */}
          <Link
            href={`/styles/${style.slug}/preview`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded border border-[#111110] dark:border-white/30 bg-white dark:bg-[#18181b] px-2.5 sm:px-3 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-[#111110] dark:text-white transition-colors hover:bg-[#111110] hover:text-white dark:hover:bg-white dark:hover:text-[#111110]"
          >
            <span>Open Fullscreen</span>
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>

      {/* ---------- PREVIEW STAGE ---------- */}
      <div className="relative w-full overflow-x-auto bg-[#EBEAE6] dark:bg-[#09090b] p-3 sm:p-6 flex justify-center items-start min-h-[640px] transition-colors">
        {activeTab === "bespoke" && bespokeAvailable && (
          <div
            className="transition-all duration-200 shadow-xl border border-black/15 dark:border-white/15 overflow-hidden w-full"
            style={{
              maxWidth:
                viewport === "desktop"
                  ? "100%"
                  : viewport === "tablet"
                  ? "768px"
                  : "375px",
            }}
          >
            <BespokePreview meta={style} large previewTheme={previewTheme} viewport={viewport} />
          </div>
        )}

        {activeTab === "generic" && (
          <div
            className="transition-all duration-200 shadow-xl border border-black/15 dark:border-white/15 overflow-hidden w-full"
            style={{
              maxWidth:
                viewport === "desktop"
                  ? "100%"
                  : viewport === "tablet"
                  ? "768px"
                  : "375px",
            }}
          >
            <StyleLandingPage def={effectiveDef} large previewTheme={previewTheme} viewport={viewport} />
          </div>
        )}

        {activeTab === "kit" && (
          <div
            className="transition-all duration-200 shadow-xl border border-black/15 dark:border-white/15 overflow-hidden w-full"
            style={{
              maxWidth:
                viewport === "desktop"
                  ? "100%"
                  : viewport === "tablet"
                  ? "768px"
                  : "375px",
            }}
          >
            <StyleComponentKit def={effectiveDef} previewTheme={previewTheme} viewport={viewport} />
          </div>
        )}

        {activeTab === "tokens" && (
          <div className="w-full max-w-5xl bg-white dark:bg-[#141416] border border-black/15 dark:border-white/15 shadow-xl">
            <TokenPlayground
              base={mixSlug ? effectiveDef : baseDef}
              overrides={overrides}
              onChange={setOverrides}
              onReset={() => setOverrides({})}
            />
          </div>
        )}

        {activeTab === "mix" && (
          <div className="w-full max-w-5xl bg-white dark:bg-[#141416] border border-black/15 dark:border-white/15 shadow-xl">
            <MixControls
              baseSlug={style.slug}
              mixSlug={mixSlug}
              mixT={mixT}
              onMixSlug={setMixSlug}
              onMixT={setMixT}
            />
          </div>
        )}

        {activeTab === "export" && (
          <div className="w-full max-w-5xl bg-white dark:bg-[#141416] border border-black/15 dark:border-white/15 shadow-xl">
            <RemixExport def={effectiveDef} sources={sources} />
          </div>
        )}

        {activeTab === "spec" && renderedMarkdown && (
          <div className="w-full max-w-4xl bg-white dark:bg-[#141416] p-6 sm:p-10 border border-black/15 dark:border-white/15 shadow-xl">
            {renderedMarkdown}
          </div>
        )}
      </div>
    </div>
  );
}
