"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import type { StyleMeta } from "../lib/styles";
import { getStyleDefinition } from "../lib/style-definitions";
import type { PreviewThemeMode } from "../lib/preview-theme";
import { StyleLandingPage } from "./previews/StyleLandingPage";
import { StyleComponentKit } from "./previews/StyleComponentKit";

export function StylePreviewStudio({
  style,
  renderedMarkdown,
}: {
  style: StyleMeta;
  renderedMarkdown?: ReactNode;
}) {
  const [activeTab, setActiveTab] = useState<"landing" | "kit" | "spec">("landing");
  const [viewport, setViewport] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [previewTheme, setPreviewTheme] = useState<PreviewThemeMode>("default");

  const def = getStyleDefinition(style.slug);

  return (
    <div className="w-full flex flex-col border border-[#111110] dark:border-white/20 bg-[#fafaf8] dark:bg-[#141416] transition-colors">
      {/* ---------- STUDIO CONTROL BAR ---------- */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#111110] dark:border-white/15 bg-white dark:bg-[#18181b] px-4 py-2.5">
        {/* Left: View Mode Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center rounded border border-[#111110]/20 dark:border-white/20 bg-[#fafaf8] dark:bg-[#141416] p-0.5 text-[12px] font-mono">
            <button
              type="button"
              onClick={() => setActiveTab("landing")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded transition-colors cursor-pointer ${
                activeTab === "landing"
                  ? "bg-[#111110] text-white dark:bg-white dark:text-[#111110] font-semibold shadow-sm"
                  : "text-[#111110]/70 dark:text-white/70 hover:text-[#111110] dark:hover:text-white"
              }`}
            >
              <span>🖥️</span>
              <span>Live Landing Page</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("kit")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded transition-colors cursor-pointer ${
                activeTab === "kit"
                  ? "bg-[#111110] text-white dark:bg-white dark:text-[#111110] font-semibold shadow-sm"
                  : "text-[#111110]/70 dark:text-white/70 hover:text-[#111110] dark:hover:text-white"
              }`}
            >
              <span>🧩</span>
              <span>UI Component Kit</span>
            </button>

            {renderedMarkdown && (
              <button
                type="button"
                onClick={() => setActiveTab("spec")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded transition-colors cursor-pointer ${
                  activeTab === "spec"
                    ? "bg-[#111110] text-white dark:bg-white dark:text-[#111110] font-semibold shadow-sm"
                    : "text-[#111110]/70 dark:text-white/70 hover:text-[#111110] dark:hover:text-white"
                }`}
              >
                <span>📄</span>
                <span>DESIGN.md Spec</span>
              </button>
            )}
          </div>

          {/* Viewport Width Controls (Active only in landing mode) */}
          {activeTab === "landing" && (
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
        </div>

        {/* Right: Preview Theme Controls + Fullscreen */}
        <div className="flex items-center gap-2.5">
          {/* Preview Theme Selector */}
          <div
            className="flex items-center rounded border border-[#111110]/20 dark:border-white/20 bg-[#fafaf8] dark:bg-[#141416] p-0.5 text-[11px] font-mono"
            role="group"
            aria-label="Preview theme mode"
          >
            <span className="px-2 text-[10px] uppercase tracking-wider text-[#111110]/50 dark:text-white/50 hidden md:inline">
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
            className="inline-flex items-center gap-1.5 rounded border border-[#111110] dark:border-white/30 bg-white dark:bg-[#18181b] px-3 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-[#111110] dark:text-white transition-colors hover:bg-[#111110] hover:text-white dark:hover:bg-white dark:hover:text-[#111110]"
          >
            <span>Open Fullscreen</span>
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>

      {/* ---------- PREVIEW STAGE ---------- */}
      <div className="relative w-full overflow-x-auto bg-[#EBEAE6] dark:bg-[#09090b] p-3 sm:p-6 flex justify-center items-start min-h-[640px] transition-colors">
        {activeTab === "landing" && (
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
            <StyleLandingPage def={def} large previewTheme={previewTheme} />
          </div>
        )}

        {activeTab === "kit" && (
          <div className="w-full max-w-5xl shadow-xl border border-black/15 dark:border-white/15 overflow-hidden">
            <StyleComponentKit def={def} previewTheme={previewTheme} />
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
