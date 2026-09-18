"use client";

import { useState } from "react";
import type { StyleDefinition } from "../../lib/style-definitions";
import type { PreviewThemeMode } from "../../lib/preview-theme";
import { resolvePreviewTheme } from "../../lib/preview-theme";
import { SignatureWidget } from "./SignatureWidget";

export function StyleLandingPage({
  def: baseDef,
  large,
  previewTheme = "default",
  viewport,
}: {
  def: StyleDefinition;
  large?: boolean;
  previewTheme?: PreviewThemeMode;
  viewport?: "desktop" | "tablet" | "mobile";
}) {
  const def = resolvePreviewTheme(baseDef, previewTheme);
  const p = def.preview;

  // Interactive component states
  const [activeTab, setActiveTab] = useState<"overview" | "tokens" | "components" | "telemetry" | "specs">("overview");
  const [bannerVisible, setBannerVisible] = useState(true);
  const [switchActive, setSwitchActive] = useState(true);
  const [checkboxActive, setCheckboxActive] = useState(true);
  const [sliderVal, setSliderVal] = useState(84);
  const [copied, setCopied] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isLightBg =
    p.bg !== "#000000" &&
    p.bg !== "#08090A" &&
    p.bg !== "#0A0118" &&
    p.bg !== "#0B0B12" &&
    p.bg !== "#05070E";

  const btnAccentColor = isLightBg ? "#FFFFFF" : "#000000";

  return (
    <div
      data-viewport={viewport || "responsive"}
      className="w-full h-full flex flex-col justify-between overflow-x-hidden text-left"
      style={{
        background: p.bg,
        color: p.ink,
        fontFamily: p.body,
        padding: large
          ? "clamp(12px, 3.5cqi, 26px) clamp(12px, 4cqi, 30px)"
          : "10px 14px",
        gap: large ? 16 : 10,
      }}
    >
      {/* ---------- 0. TOP ANNOUNCEMENT BANNER ---------- */}
      {large && bannerVisible && (
        <div
          className="w-full flex items-center justify-between px-3.5 py-2 transition-all gap-2"
          style={{
            background: p.surface,
            border: def.cardBorder !== "none" ? def.cardBorder : `1px solid ${p.accent}33`,
            borderRadius: def.cardRadius,
            boxShadow: def.cardShadow !== "none" ? def.cardShadow : "none",
          }}
        >
          <div className="flex items-center gap-2.5 text-[11px] min-w-0">
            <span
              className="font-mono text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 shrink-0"
              style={{
                background: p.accent,
                color: btnAccentColor,
                borderRadius: def.badgeRadius,
              }}
            >
              NEW v2.5
            </span>
            <span className="truncate text-[10.5px]" style={{ color: p.ink }}>
              Spec for <strong>{def.name}</strong> synchronized. Zero runtime CSS.
            </span>
            <span
              className="font-semibold text-[10px] cursor-pointer hover:underline hidden @md:inline shrink-0"
              style={{ color: p.accent }}
            >
              Tokens →
            </span>
          </div>
          <button
            type="button"
            onClick={() => setBannerVisible(false)}
            aria-label="Dismiss banner"
            className="cursor-pointer opacity-60 hover:opacity-100 font-mono text-[11px] px-1.5 shrink-0"
            style={{ color: p.muted }}
          >
            ✕
          </button>
        </div>
      )}

      {/* ---------- 1. NAVIGATION BAR ---------- */}
      <header
        className="w-full flex items-center justify-between shrink-0 gap-2"
        style={{
          borderBottom: def.cardBorder !== "none" ? def.cardBorder : `1px solid ${p.ink}18`,
          paddingBottom: large ? 10 : 6,
        }}
      >
        <div className="flex items-center gap-2 min-w-0">
          <span
            className="inline-flex items-center justify-center font-bold shrink-0"
            style={{
              background: p.accent,
              color: btnAccentColor,
              width: large ? 24 : 16,
              height: large ? 24 : 16,
              borderRadius: def.badgeRadius,
              fontSize: large ? 12 : 8,
              border: def.cardBorder !== "none" ? def.cardBorder : "none",
            }}
          >
            ✦
          </span>
          <span
            className="font-bold tracking-tight truncate text-sm @sm:text-base"
            style={{
              fontFamily: p.display,
              color: p.ink,
            }}
          >
            {def.name}
          </span>
        </div>

        {large && (
          <nav className="hidden @lg:flex items-center gap-5 text-[11.5px] font-medium shrink-0" style={{ color: p.muted }}>
            <span className="cursor-pointer hover:underline transition-colors" style={{ color: p.ink }}>Specimen</span>
            <span className="cursor-pointer hover:underline transition-colors">Components</span>
            <span className="cursor-pointer hover:underline transition-colors">Tokens</span>
            <span className="cursor-pointer hover:underline transition-colors">Integrations</span>
            <span className="cursor-pointer hover:underline transition-colors">Docs</span>
          </nav>
        )}

        <div className="flex items-center gap-1.5 @sm:gap-2 shrink-0">
          <span
            className="font-mono uppercase tracking-widest hidden @sm:inline-block"
            style={{
              fontSize: large ? 9.5 : 7,
              background: `${p.accent}18`,
              color: p.accent,
              padding: large ? "3px 8px" : "1px 5px",
              borderRadius: def.badgeRadius,
              border: `1px solid ${p.accent}44`,
            }}
          >
            v2.5
          </span>
          <button
            type="button"
            className="font-medium cursor-pointer transition-opacity hover:opacity-90 whitespace-nowrap"
            style={{
              background: p.accent,
              color: btnAccentColor,
              fontSize: large ? 10.5 : 8,
              padding: large ? "5px 12px" : "3px 8px",
              borderRadius: def.btnRadius,
              border: def.btnRadius === "0px" && def.cardBorder !== "none" ? def.cardBorder : "none",
              boxShadow: def.cardShadow !== "none" ? def.cardShadow : "none",
            }}
          >
            {def.navCta}
          </button>
        </div>
      </header>

      {/* ---------- 2. HERO SECTION ---------- */}
      <section className="flex flex-col gap-2 py-1">
        {/* Eyebrow Badge & Telemetry pill */}
        <div className="flex items-center gap-2 flex-wrap">
          <span
            className="font-mono uppercase tracking-wider font-semibold inline-block"
            style={{
              fontSize: large ? 9.5 : 7,
              color: p.accent,
              background: p.surface,
              border: def.cardBorder !== "none" ? def.cardBorder : `1px solid ${p.accent}33`,
              borderRadius: def.badgeRadius,
              padding: large ? "2.5px 8px" : "1.5px 6px",
            }}
          >
            {def.eyebrow}
          </span>
          <span
            className="font-mono text-[8.5px] opacity-75 uppercase tracking-widest hidden @sm:inline-flex items-center gap-1"
            style={{ color: p.muted }}
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: p.accent }} />
            PRODUCTION READY SPEC
          </span>
        </div>

        {/* Display Headline */}
        <h1
          className="font-bold leading-[1.08] tracking-tight text-pretty"
          style={{
            fontFamily: p.display,
            fontSize: large ? "clamp(20px, 5.5cqi, 34px)" : 16,
            color: p.ink,
            margin: large ? "4px 0 2px" : "2px 0 1px",
          }}
        >
          {def.headline}
        </h1>

        {/* Subtitle / Lead Paragraph */}
        <p
          className="line-clamp-2 leading-relaxed"
          style={{
            fontSize: large ? "clamp(11px, 2.2cqi, 12.5px)" : 8,
            color: p.muted,
            maxWidth: "100%",
          }}
        >
          {def.subhead}
        </p>

        {/* Action Button Group */}
        <div className="flex flex-wrap items-center gap-2 mt-1.5">
          <button
            type="button"
            className="font-semibold cursor-pointer transition-all hover:-translate-y-0.5 text-center"
            style={{
              background: p.ink,
              color: p.surface,
              fontSize: large ? 11 : 8,
              padding: large ? "6px 16px" : "4px 10px",
              borderRadius: def.btnRadius,
              border: def.cardBorder !== "none" ? def.cardBorder : `1px solid ${p.ink}`,
              boxShadow: def.cardShadow !== "none" ? def.cardShadow : "none",
            }}
          >
            {def.primaryCta} →
          </button>
          <button
            type="button"
            className="font-medium cursor-pointer transition-colors text-center"
            style={{
              background: p.surface,
              color: p.ink,
              fontSize: large ? 11 : 8,
              padding: large ? "6px 14px" : "4px 9px",
              borderRadius: def.btnRadius,
              border: def.cardBorder !== "none" ? def.cardBorder : `1px solid ${p.ink}33`,
            }}
          >
            {def.secondaryCta}
          </button>
        </div>

        {/* Social Proof + Avatar Cluster */}
        {large && (
          <div
            className="flex flex-col @sm:flex-row @sm:items-center justify-between gap-2.5 text-[10px] font-mono mt-2 pt-2 border-t"
            style={{ borderColor: `${p.ink}15`, color: p.muted }}
          >
            <div className="flex items-center gap-2">
              {/* Overlapping Avatar Stack */}
              <div className="flex -space-x-1.5">
                {[
                  ["AG", p.accent],
                  ["CX", p.accent2],
                  ["CD", p.ink],
                  ["WF", p.muted],
                ].map(([initials, bgClr], idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center justify-center font-bold text-[7.5px] rounded-full border"
                    style={{
                      width: 18,
                      height: 18,
                      background: bgClr,
                      color: p.surface,
                      borderColor: p.surface,
                    }}
                  >
                    {initials}
                  </span>
                ))}
              </div>
              <span style={{ color: p.ink }}>
                <strong>14,200+</strong> agents synced
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2 @sm:gap-2.5 text-[9.5px]">
              <span className="flex items-center gap-1" style={{ color: p.accent }}>
                ★ ★ ★ ★ ★ <span style={{ color: p.ink }}>4.95/5</span>
              </span>
              <span className="opacity-40">·</span>
              <span>100% Token Pure</span>
              <span className="opacity-40">·</span>
              <span>Zero Runtime CSS</span>
            </div>
          </div>
        )}
      </section>

      {/* ---------- 3. CATEGORY & VIEW FILTER TABS (NEW) ---------- */}
      {large && (
        <nav
          aria-label="Component view filters"
          className="flex items-center gap-1.5 p-1 border overflow-x-auto no-scrollbar flex-nowrap"
          style={{
            background: p.surface,
            borderColor: `${p.ink}15`,
            borderRadius: def.cardRadius,
          }}
        >
          {(
            [
              ["overview", "Overview", "✦"],
              ["tokens", "Design Tokens", "🎨"],
              ["components", "Interactive Kit", "🧩"],
              ["telemetry", "Telemetry", "📊"],
              ["specs", "FAQ & Specs", "📄"],
            ] as const
          ).map(([tabKey, label, icon]) => (
            <button
              key={tabKey}
              type="button"
              onClick={() => setActiveTab(tabKey)}
              className="flex items-center gap-1.5 px-2.5 @sm:px-3 py-1 font-mono text-[10.5px] @sm:text-[11px] cursor-pointer transition-all shrink-0 whitespace-nowrap"
              style={{
                background: activeTab === tabKey ? p.ink : "transparent",
                color: activeTab === tabKey ? p.surface : p.muted,
                borderRadius: def.btnRadius,
                fontWeight: activeTab === tabKey ? 600 : 400,
              }}
            >
              <span>{icon}</span>
              <span>{label}</span>
            </button>
          ))}
        </nav>
      )}

      {/* ---------- 4. KPI METRIC RIBBON (NEW) ---------- */}
      {large && (
        <section className="grid grid-cols-2 @lg:grid-cols-4 gap-2 @sm:gap-3">
          {[
            { label: "Token Compliance", val: "100%", delta: "▲ Verified", sub: "Strict spec adherence" },
            { label: "Runtime Overhead", val: "0ms", delta: "▲ Pure CSS", sub: "Zero dependency footprint" },
            { label: "Style Coverage", val: "100%", delta: "▲ Complete", sub: "Production tested" },
            { label: "Autonomous Sync", val: "24/7", delta: "● Active", sub: "Codex & Claude ready" },
          ].map((m, idx) => (
            <div
              key={idx}
              className="p-2.5 @sm:p-3 flex flex-col justify-between"
              style={{
                background: p.surface,
                border: def.cardBorder,
                borderRadius: def.cardRadius,
                boxShadow: def.cardShadow !== "none" ? def.cardShadow : "none",
              }}
            >
              <div className="flex items-center justify-between text-[9px] @sm:text-[9.5px] font-mono" style={{ color: p.muted }}>
                <span className="truncate">{m.label}</span>
                <span
                  className="px-1 py-0.5 rounded font-bold text-[8px] shrink-0"
                  style={{ background: `${p.accent}20`, color: p.accent }}
                >
                  {m.delta}
                </span>
              </div>
              <div
                className="text-lg @sm:text-xl font-extrabold my-0.5 @sm:my-1 tracking-tight"
                style={{ fontFamily: p.display, color: p.ink }}
              >
                {m.val}
              </div>
              <div className="text-[8.5px] @sm:text-[9px] truncate" style={{ color: p.muted }}>
                {m.sub}
              </div>
            </div>
          ))}
        </section>
      )}

      {/* ---------- 5. COMPREHENSIVE BENTO GRID & CONTROLS ---------- */}
      <section
        className={`grid ${large ? "grid-cols-1 @md:grid-cols-2 @xl:grid-cols-3 gap-3 @sm:gap-4" : "grid-cols-2 gap-2"}`}
      >
        {/* Card 1: Core Feature */}
        <div
          className="flex flex-col justify-between p-3"
          style={{
            background: p.surface,
            border: def.cardBorder,
            borderRadius: def.cardRadius,
            boxShadow: def.cardShadow,
            color: p.ink,
          }}
        >
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[9px] font-mono uppercase tracking-wider font-bold" style={{ color: p.accent }}>
                Feature 01
              </span>
              <span className="text-[10px]" style={{ color: p.accent2 }}>✦</span>
            </div>
            <h3
              className="font-bold leading-snug"
              style={{
                fontFamily: p.display,
                fontSize: large ? 14 : 9.5,
              }}
            >
              {def.featureTitle}
            </h3>
            <p
              className="line-clamp-2 mt-1 leading-normal"
              style={{
                fontSize: large ? 11 : 7.5,
                color: p.muted,
              }}
            >
              {def.featureDesc}
            </p>
          </div>
          <div className="mt-3 text-[9px] font-semibold flex items-center gap-1" style={{ color: p.accent }}>
            <span>Explore Token Schema</span>
            <span aria-hidden="true">→</span>
          </div>
        </div>

        {/* Card 2: Interactive Controls, Toggles & Slider Hub */}
        <div
          className="flex flex-col justify-between p-3"
          style={{
            background: p.surface,
            border: def.cardBorder,
            borderRadius: def.cardRadius,
            boxShadow: def.cardShadow,
            color: p.ink,
          }}
        >
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[9px] font-mono uppercase tracking-wider font-bold" style={{ color: p.muted }}>
                Interactive Controls
              </span>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: p.accent }} />
            </div>

            {/* Switch Toggle Control */}
            <div className="flex items-center justify-between my-1">
              <span className="text-[10px] font-medium" style={{ color: p.ink }}>
                Live Agent Telemetry
              </span>
              <button
                type="button"
                onClick={() => setSwitchActive(!switchActive)}
                className="relative inline-flex items-center h-4 w-8 rounded-full cursor-pointer transition-colors p-0.5"
                style={{
                  background: switchActive ? p.accent : `${p.ink}25`,
                }}
                aria-pressed={switchActive}
              >
                <span
                  className="inline-block w-3 h-3 rounded-full transition-transform"
                  style={{
                    background: p.surface,
                    transform: switchActive ? "translateX(16px)" : "translateX(0px)",
                  }}
                />
              </button>
            </div>

            {/* Checkbox Control */}
            <label className="flex items-center gap-2 my-1.5 cursor-pointer text-[9.5px]">
              <input
                type="checkbox"
                checked={checkboxActive}
                onChange={() => setCheckboxActive(!checkboxActive)}
                className="cursor-pointer"
                style={{ accentColor: p.accent }}
              />
              <span style={{ color: p.muted }}>Enforce High Contrast Mode</span>
            </label>

            {/* Interactive Range Slider */}
            {large && (
              <div className="my-1.5">
                <div className="flex justify-between text-[9px] font-mono mb-1" style={{ color: p.muted }}>
                  <span>Density Scale</span>
                  <span className="font-bold" style={{ color: p.accent }}>{sliderVal}%</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="100"
                  value={sliderVal}
                  onChange={(e) => setSliderVal(Number(e.target.value))}
                  className="w-full h-1 rounded appearance-none cursor-pointer"
                  style={{ accentColor: p.accent, background: `${p.ink}18` }}
                />
              </div>
            )}

            {/* Search Input Field with Command Palette indicator */}
            <div
              className="flex items-center overflow-hidden mt-1.5"
              style={{
                background: `${p.ink}08`,
                border: def.cardBorder !== "none" ? def.cardBorder : `1px solid ${p.ink}22`,
                borderRadius: def.btnRadius,
              }}
            >
              <input
                type="text"
                readOnly
                value="Search components..."
                className="w-full px-2 py-1 bg-transparent text-[9px] focus:outline-none truncate"
                style={{ color: p.ink }}
              />
              <span
                className="px-1.5 py-0.5 font-mono text-[7.5px] uppercase opacity-60 border-l"
                style={{ borderColor: `${p.ink}15`, color: p.muted }}
              >
                ⌘K
              </span>
              <span
                className="px-2 py-1 font-bold text-[8px] uppercase shrink-0"
                style={{
                  background: p.accent,
                  color: btnAccentColor,
                }}
              >
                Go
              </span>
            </div>
          </div>
        </div>

        {/* Card 3: Metrics & Telemetry Card */}
        <div
          className="flex flex-col justify-between p-3"
          style={{
            background: p.surface,
            border: def.cardBorder,
            borderRadius: def.cardRadius,
            boxShadow: def.cardShadow,
            color: p.ink,
          }}
        >
          <div className="flex items-center justify-between">
            <span className="text-[9px] font-mono uppercase tracking-wider font-bold" style={{ color: p.muted }}>
              Telemetry
            </span>
            <span
              className="text-[9px] font-mono font-bold px-1.5 py-0.5"
              style={{
                background: `${p.accent}20`,
                color: p.accent,
                borderRadius: def.badgeRadius,
              }}
            >
              {def.metricDelta}
            </span>
          </div>
          <div className="my-2">
            <div
              className="font-extrabold leading-none tracking-tight"
              style={{
                fontFamily: p.display,
                fontSize: large ? 28 : 18,
                color: p.ink,
              }}
            >
              {def.metricValue}
            </div>
            <div className="text-[10.5px] mt-1 font-medium" style={{ color: p.muted }}>
              {def.metricLabel}
            </div>
          </div>
          <div>
            <div className="w-full bg-black/10 dark:bg-white/10 rounded-full h-1.5 overflow-hidden">
              <div
                className="h-full rounded-full transition-all"
                style={{ background: p.accent, width: `${sliderVal}%` }}
              />
            </div>
            <div className="flex justify-between text-[8px] font-mono mt-1 opacity-70" style={{ color: p.muted }}>
              <span>Capacity</span>
              <span>{sliderVal}%</span>
            </div>
          </div>
        </div>

        {/* Card 4: CLI Terminal & Code Snippet Card (Large View) */}
        {large && (
          <div
            className="flex flex-col justify-between p-3 font-mono"
            style={{
              background: p.surface,
              border: def.cardBorder,
              borderRadius: def.cardRadius,
              boxShadow: def.cardShadow,
              color: p.ink,
            }}
          >
            <div>
              <div className="flex items-center justify-between mb-2 pb-1.5 border-b" style={{ borderColor: `${p.ink}15` }}>
                <span className="text-[9px] uppercase tracking-wider" style={{ color: p.muted }}>
                  CLI Installation
                </span>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="px-2 py-0.5 text-[8.5px] font-bold rounded transition-colors cursor-pointer"
                  style={{
                    background: copied ? `${p.accent}30` : `${p.ink}10`,
                    color: copied ? p.accent : p.ink,
                  }}
                >
                  {copied ? "✓ Copied" : "Copy"}
                </button>
              </div>
              <div className="text-[10px] space-y-1">
                <div className="flex items-center gap-1.5">
                  <span style={{ color: p.accent }}>$</span>
                  <span className="font-semibold truncate">npx design-style-atlas add {def.slug}</span>
                </div>
                <div className="text-[8.5px] opacity-70" style={{ color: p.muted }}>
                  ✔ Injected 20 design tokens into DESIGN.md
                </div>
              </div>
            </div>
            <div className="text-[8.5px] opacity-50 mt-2">
              Runs in Codex, Claude Code & Cursor
            </div>
          </div>
        )}

        {/* Card 5: Testimonial & Review Card (Large View) */}
        {large && (
          <div
            className="flex flex-col justify-between p-3"
            style={{
              background: p.surface,
              border: def.cardBorder,
              borderRadius: def.cardRadius,
              boxShadow: def.cardShadow,
              color: p.ink,
            }}
          >
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-1 text-[11px]" style={{ color: p.accent }}>
                  ★ ★ ★ ★ ★
                </div>
                <span
                  className="text-[8px] font-mono px-1.5 py-0.2 rounded uppercase font-bold"
                  style={{ background: `${p.accent}15`, color: p.accent }}
                >
                  VERIFIED
                </span>
              </div>
              <blockquote className="text-[11px] leading-relaxed italic" style={{ color: p.ink }}>
                &ldquo;The {def.name} token hierarchy transformed our design consistency across Codex and Claude agents.&rdquo;
              </blockquote>
            </div>
            <div className="flex items-center gap-2 mt-2 pt-2 border-t" style={{ borderColor: `${p.ink}12` }}>
              <span
                className="w-5 h-5 rounded-full font-mono text-[8px] font-bold flex items-center justify-center"
                style={{ background: p.accent, color: btnAccentColor }}
              >
                SL
              </span>
              <div>
                <div className="text-[10px] font-bold">{def.name} Architect</div>
                <div className="text-[8px] font-mono" style={{ color: p.muted }}>@design-system</div>
              </div>
            </div>
          </div>
        )}

        {/* Card 6: Mini Modal / Dialog Specimen (Large View) */}
        {large && (
          <div
            className="flex flex-col justify-between p-3"
            style={{
              background: p.surface,
              border: def.cardBorder,
              borderRadius: def.cardRadius,
              boxShadow: def.cardShadow,
              color: p.ink,
            }}
          >
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[9px] font-mono uppercase tracking-wider font-bold" style={{ color: p.muted }}>
                  Dialog Specimen
                </span>
                <span className="text-[8.5px] font-mono opacity-50">ESC</span>
              </div>
              <h4 className="font-bold text-[12px] leading-snug" style={{ fontFamily: p.display }}>
                Export Token Bundle?
              </h4>
              <p className="text-[9.5px] mt-0.5 leading-normal" style={{ color: p.muted }}>
                Package 20 visual tokens into tailwind.config.ts and css variables.
              </p>
            </div>
            <div className="flex items-center gap-1.5 mt-2">
              <button
                type="button"
                className="flex-1 py-1 text-[9px] font-semibold cursor-pointer text-center"
                style={{
                  background: p.ink,
                  color: p.surface,
                  borderRadius: def.btnRadius,
                }}
              >
                Confirm
              </button>
              <button
                type="button"
                className="flex-1 py-1 text-[9px] font-medium cursor-pointer text-center border"
                style={{
                  borderColor: `${p.ink}30`,
                  color: p.ink,
                  borderRadius: def.btnRadius,
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </section>

      {/* ---------- 6. SIGNATURE ELEMENT ---------- */}
      <section className="shrink-0">
        <SignatureWidget def={def} large={large} />
      </section>

      {/* ---------- 7. INTERACTIVE FAQ / ACCORDION SECTION (NEW, LARGE ONLY) ---------- */}
      {large && (
        <section className="flex flex-col gap-2.5">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold tracking-tight" style={{ fontFamily: p.display }}>
              Frequently Asked Questions
            </h3>
            <span className="font-mono text-[9px] uppercase tracking-wider" style={{ color: p.muted }}>
              3 Spec Inquiries
            </span>
          </div>

          <div className="space-y-2">
            {[
              {
                q: `How do AI agents follow the ${def.name} visual direction?`,
                a: `Copy the DESIGN.md into your workspace rules. AI coding agents (Codex, Claude Code, Cursor, Windsurf) parse tokens, spacing rules, and typography directly to maintain aesthetic fidelity.`,
              },
              {
                q: `Can tokens be overridden or remixed with other styles?`,
                a: `Yes. Use the Tokens and Mix tabs in the Style Preview Studio to interpolate between any two styles or customize border radius, shadows, and accent saturation in real-time.`,
              },
              {
                q: `Is this compatible with Tailwind CSS and Next.js?`,
                a: `Every style is 100% framework-agnostic. The tokens compile directly to Tailwind theme configurations, CSS custom properties, and React components.`,
              },
            ].map((faq, idx) => {
              const isOpen = expandedFaq === idx;
              return (
                <div
                  key={idx}
                  className="transition-all overflow-hidden"
                  style={{
                    background: p.surface,
                    border: def.cardBorder,
                    borderRadius: def.cardRadius,
                    boxShadow: def.cardShadow !== "none" ? def.cardShadow : "none",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setExpandedFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-3 text-left font-semibold text-[11.5px] cursor-pointer"
                    style={{ color: p.ink }}
                  >
                    <span>{faq.q}</span>
                    <span
                      className="font-mono text-[12px] font-bold transition-transform"
                      style={{
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                        color: p.accent,
                      }}
                    >
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <div
                      className="px-3 pb-3 text-[10.5px] leading-relaxed border-t pt-2"
                      style={{ borderColor: `${p.ink}15`, color: p.muted }}
                    >
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* ---------- 8. PRICING & DATA TABLE SECTION (LARGE ONLY) ---------- */}
      {large && (
        <section className="grid grid-cols-1 @lg:grid-cols-2 gap-3.5 @sm:gap-4">
          {/* Pricing Tier Card */}
          <div
            className="p-3.5 flex flex-col justify-between"
            style={{
              background: p.surface,
              border: def.cardBorder,
              borderRadius: def.cardRadius,
              boxShadow: def.cardShadow,
              color: p.ink,
            }}
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="font-bold text-[13px]">{def.planName}</span>
                <span
                  className="font-mono text-[9px] px-2 py-0.5 uppercase tracking-wider font-bold"
                  style={{
                    background: p.accent,
                    color: btnAccentColor,
                    borderRadius: def.badgeRadius,
                  }}
                >
                  POPULAR
                </span>
              </div>
              <div className="text-[20px] font-extrabold my-2">
                {def.planPrice} <span className="text-[10px] font-normal opacity-60">/ permanent license</span>
              </div>
              <ul className="space-y-1.5 text-[10.5px] mb-3">
                {def.planFeatures.map((feat) => (
                  <li key={feat} className="flex items-center gap-2">
                    <span style={{ color: p.accent }} className="font-bold">✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button
              type="button"
              className="w-full py-2 text-[11px] font-semibold text-center cursor-pointer transition-opacity hover:opacity-90"
              style={{
                background: p.ink,
                color: p.surface,
                borderRadius: def.btnRadius,
                border: def.cardBorder !== "none" ? def.cardBorder : "none",
              }}
            >
              Get License & Tokens
            </button>
          </div>

          {/* Activity / Data Table Card */}
          <div
            className="p-3.5 flex flex-col justify-between"
            style={{
              background: p.surface,
              border: def.cardBorder,
              borderRadius: def.cardRadius,
              boxShadow: def.cardShadow,
              color: p.ink,
            }}
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[10px] uppercase font-bold tracking-wider" style={{ color: p.muted }}>
                  Active Agent Deployments
                </span>
                <span className="font-mono text-[9px] opacity-70">3 / 3 OK</span>
              </div>
              <div className="space-y-1.5 text-[10px] font-mono">
                {[
                  ["#4821-main", "Production Node", "LIVE"],
                  ["#4820-stag", "Staging Cluster", "SYNC"],
                  ["#4819-prev", "Edge Preview", "PASS"],
                ].map(([id, env, status], i) => (
                  <div
                    key={id}
                    className="flex items-center justify-between p-1.5 border-b"
                    style={{ borderColor: `${p.ink}10` }}
                  >
                    <span className="font-semibold">{id}</span>
                    <span style={{ color: p.muted }}>{env}</span>
                    <span
                      className="px-1.5 py-0.5 rounded text-[8px] font-bold"
                      style={{
                        background: i === 0 ? `${p.accent}25` : `${p.ink}12`,
                        color: i === 0 ? p.accent : p.ink,
                      }}
                    >
                      ● {status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-[9px] font-mono text-right opacity-60 mt-2">
              Auto-updating via CI/CD pipelines
            </div>
          </div>
        </section>
      )}

      {/* ---------- 9. FOOTER BAR ---------- */}
      <footer
        className="w-full flex flex-col @sm:flex-row items-start @sm:items-center justify-between gap-2 pt-2.5 shrink-0 border-t font-mono text-[8.5px]"
        style={{
          borderColor: `${p.ink}18`,
          color: p.muted,
        }}
      >
        <div className="flex items-center gap-2 flex-wrap">
          <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: p.accent }} />
          <span className="uppercase tracking-wider font-semibold" style={{ color: p.ink }}>
            {def.slug}
          </span>
          <span className="opacity-40">|</span>
          <span className="opacity-70">{def.category}</span>
        </div>
        <div className="opacity-75 flex items-center gap-1">
          <span>●</span>
          <span>DESIGN.md v2.5 Synchronized</span>
        </div>
      </footer>
    </div>
  );
}
