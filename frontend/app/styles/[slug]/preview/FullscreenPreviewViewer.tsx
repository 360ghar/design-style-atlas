"use client";

import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import type { StyleMeta } from "../../../lib/styles";
import type { StyleDefinition } from "../../../lib/style-definitions";
import type { PreviewThemeMode } from "../../../lib/preview-theme";
import { resolvePreviewTheme } from "../../../lib/preview-theme";
import { StyleLandingPage } from "../../../components/previews/StyleLandingPage";
import { BespokePreview, hasBespoke } from "../../../components/previews";
import type { PreviewVariant } from "../../../components/previews";

export function FullscreenPreviewViewer({
  style,
  baseDef,
  initialVariant,
}: {
  style: StyleMeta;
  baseDef: StyleDefinition;
  initialVariant?: PreviewVariant;
}) {
  const searchParams = useSearchParams();
  const [themeMode, setThemeMode] = useState<PreviewThemeMode>("default");
  const [variant, setVariant] = useState<PreviewVariant>(() => {
    if (initialVariant) return initialVariant;
    const param = searchParams?.get("variant");
    if (param === "generic" || param === "bespoke") return param;
    return hasBespoke(style.slug) ? "bespoke" : "generic";
  });
  const def = resolvePreviewTheme(baseDef, themeMode);

  const variantBtn = (v: PreviewVariant, label: string) => (
    <button
      key={v}
      type="button"
      onClick={() => setVariant(v)}
      aria-pressed={variant === v}
      className={`px-2.5 py-1 rounded cursor-pointer transition-colors flex items-center gap-1 ${
        variant === v ? "font-bold shadow-sm" : "opacity-60 hover:opacity-100"
      }`}
      style={{
        background: variant === v ? def.preview.ink : "transparent",
        color: variant === v ? def.preview.surface : def.preview.ink,
      }}
    >
      <span>{label}</span>
    </button>
  );

  return (
    <div
      className="relative min-h-screen w-full flex flex-col transition-colors duration-200"
      style={{ background: def.preview.bg }}
    >
      {/* ---------- FLOATING TOP CONTROLS BAR ---------- */}
      <nav
        aria-label="Preview navigation"
        className="sticky top-0 z-50 flex flex-wrap items-center justify-between gap-3 border-b px-4 py-3 backdrop-blur-md transition-colors"
        style={{
          background: `${def.preview.surface}ee`,
          borderColor: `${def.preview.ink}20`,
          color: def.preview.ink,
        }}
      >
        <div className="flex items-center gap-3">
          <Link
            href={`/styles/${style.slug}`}
            className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider transition-opacity hover:opacity-75"
          >
            <span aria-hidden="true">←</span>
            <span>Back to {style.name}</span>
          </Link>
          <span className="opacity-30 hidden sm:inline">|</span>
          <span className="font-mono text-[11px] opacity-70 hidden sm:inline">
            Live Preview Specimen · {style.category}
          </span>
        </div>

        <div className="flex items-center gap-3">
          {/* Preview Variant Toggle */}
          {hasBespoke(style.slug) && (
            <div
              className="flex items-center rounded border p-0.5 font-mono text-[11px]"
              style={{
                borderColor: `${def.preview.ink}30`,
                background: def.preview.bg,
              }}
              role="group"
              aria-label="Preview variant"
            >
              {variantBtn("bespoke", "◈ Bespoke")}
              {variantBtn("generic", "🖥️ Generic")}
            </div>
          )}

          {/* Theme Mode Toggle */}
          <div
            className="flex items-center rounded border p-0.5 font-mono text-[11px]"
            style={{
              borderColor: `${def.preview.ink}30`,
              background: def.preview.bg,
            }}
            role="group"
            aria-label="Preview theme mode"
          >
            <button
              type="button"
              onClick={() => setThemeMode("default")}
              className={`px-2.5 py-1 rounded cursor-pointer transition-colors flex items-center gap-1 ${
                themeMode === "default"
                  ? "font-bold shadow-sm"
                  : "opacity-60 hover:opacity-100"
              }`}
              style={{
                background: themeMode === "default" ? def.preview.ink : "transparent",
                color: themeMode === "default" ? def.preview.surface : def.preview.ink,
              }}
            >
              <span>✦</span>
              <span>Original</span>
            </button>
            <button
              type="button"
              onClick={() => setThemeMode("light")}
              className={`px-2.5 py-1 rounded cursor-pointer transition-colors flex items-center gap-1 ${
                themeMode === "light"
                  ? "font-bold shadow-sm"
                  : "opacity-60 hover:opacity-100"
              }`}
              style={{
                background: themeMode === "light" ? def.preview.ink : "transparent",
                color: themeMode === "light" ? def.preview.surface : def.preview.ink,
              }}
            >
              <span>☀️</span>
              <span>Light</span>
            </button>
            <button
              type="button"
              onClick={() => setThemeMode("dark")}
              className={`px-2.5 py-1 rounded cursor-pointer transition-colors flex items-center gap-1 ${
                themeMode === "dark"
                  ? "font-bold shadow-sm"
                  : "opacity-60 hover:opacity-100"
              }`}
              style={{
                background: themeMode === "dark" ? def.preview.ink : "transparent",
                color: themeMode === "dark" ? def.preview.surface : def.preview.ink,
              }}
            >
              <span>🌙</span>
              <span>Dark</span>
            </button>
          </div>

          <Link
            href={`/styles/${style.slug}`}
            className="px-3 py-1.5 font-mono text-xs font-medium rounded border transition-colors hover:opacity-80"
            style={{
              borderColor: `${def.preview.ink}30`,
              color: def.preview.ink,
            }}
          >
            View DESIGN.md
          </Link>
        </div>
      </nav>

      {/* ---------- FULL-WIDTH LANDING PAGE SPECIMEN ---------- */}
      <main className="flex-1 w-full max-w-7xl mx-auto py-6 sm:py-12 px-3 sm:px-8">
        <div
          className="w-full overflow-hidden shadow-2xl border transition-all duration-200"
          style={{
            background: def.preview.bg,
            border: def.cardBorder,
            borderRadius: def.cardRadius,
            boxShadow: def.cardShadow !== "none" ? def.cardShadow : "0 20px 50px rgba(0,0,0,0.15)",
          }}
        >
          {variant === "bespoke" && hasBespoke(style.slug) ? (
            <BespokePreview meta={style} large previewTheme={themeMode} />
          ) : (
            <StyleLandingPage def={def} large previewTheme={themeMode} />
          )}
        </div>
      </main>
    </div>
  );
}
