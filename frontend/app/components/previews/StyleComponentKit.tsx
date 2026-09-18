"use client";

import { useState } from "react";
import type { StyleDefinition } from "../../lib/style-definitions";
import type { PreviewThemeMode } from "../../lib/preview-theme";
import { resolvePreviewTheme } from "../../lib/preview-theme";

export function StyleComponentKit({
  def: baseDef,
  previewTheme = "default",
  viewport,
}: {
  def: StyleDefinition;
  previewTheme?: PreviewThemeMode;
  viewport?: "desktop" | "tablet" | "mobile";
}) {
  const def = resolvePreviewTheme(baseDef, previewTheme);
  const p = def.preview;

  // Interactive specimen states
  const [switchState, setSwitchState] = useState(true);
  const [checkboxA, setCheckboxA] = useState(true);
  const [checkboxB, setCheckboxB] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState("opt1");
  const [sliderVal, setSliderVal] = useState(72);
  const [activeTab, setActiveTab] = useState("tab1");
  const [activeSegment, setActiveSegment] = useState("Option A");

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
      className="@container w-full space-y-8 @sm:space-y-12 p-3.5 @sm:p-6 @lg:p-10 text-left overflow-x-hidden"
      style={{
        background: p.bg,
        color: p.ink,
        fontFamily: p.body,
      }}
    >
      {/* ---------- HEADER TITLE ---------- */}
      <div className="border-b pb-4" style={{ borderColor: `${p.ink}18` }}>
        <div className="flex items-center gap-2 mb-1">
          <span className="w-2 h-2 rounded-full" style={{ background: p.accent }} />
          <span className="font-mono text-xs uppercase tracking-widest font-bold" style={{ color: p.muted }}>
            Component Specimen Kit
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight" style={{ fontFamily: p.display }}>
          {def.name} Design System
        </h2>
        <p className="text-sm mt-1" style={{ color: p.muted }}>
          Atomic component tokens and interactive building blocks ready for AI coding agents.
        </p>
      </div>

      {/* ---------- 01. COLOR TOKENS ---------- */}
      <section>
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full" style={{ background: p.accent }} />
          <h3 className="font-mono text-xs uppercase tracking-widest font-bold" style={{ color: p.muted }}>
            01 — Color Tokens
          </h3>
        </div>
        <div className="grid grid-cols-2 @sm:grid-cols-3 @lg:grid-cols-6 gap-2.5 @sm:gap-3">
          {[
            ["Background", p.bg, "Ground canvas"],
            ["Surface", p.surface, "Cards & panels"],
            ["Ink", p.ink, "Headlines & body"],
            ["Muted", p.muted, "Captions & subtext"],
            ["Accent", p.accent, "Primary interactive"],
            ["Accent 2", p.accent2, "Highlights & badges"],
          ].map(([name, hex, usage]) => (
            <div
              key={name}
              className="p-3 rounded-lg border flex flex-col justify-between"
              style={{
                background: p.surface,
                borderColor: `${p.ink}20`,
                borderRadius: def.cardRadius,
                boxShadow: def.cardShadow !== "none" ? def.cardShadow : "none",
              }}
            >
              <div
                className="w-full h-12 rounded mb-2 border"
                style={{ background: hex, borderColor: `${p.ink}25` }}
              />
              <div>
                <div className="font-bold text-xs">{name}</div>
                <div className="font-mono text-[11px] opacity-75">{hex}</div>
                <div className="text-[10px] mt-1" style={{ color: p.muted }}>{usage}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- 02. TYPOGRAPHY SCALE ---------- */}
      <section className="pt-8 border-t" style={{ borderColor: `${p.ink}18` }}>
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full" style={{ background: p.accent }} />
          <h3 className="font-mono text-xs uppercase tracking-widest font-bold" style={{ color: p.muted }}>
            02 — Typographic Hierarchy
          </h3>
        </div>
        <div className="space-y-4">
          <div
            className="p-5 border"
            style={{
              background: p.surface,
              borderColor: `${p.ink}15`,
              borderRadius: def.cardRadius,
            }}
          >
            <div className="font-mono text-[10px] uppercase tracking-wider mb-1" style={{ color: p.muted }}>
              Display Headline — {p.display}
            </div>
            <div
              className="font-bold leading-tight"
              style={{ fontFamily: p.display, fontSize: "clamp(24px, 4vw, 38px)" }}
            >
              {def.headline}
            </div>
          </div>

          <div className="grid grid-cols-1 @md:grid-cols-2 gap-3.5 @sm:gap-4">
            <div
              className="p-4 border"
              style={{
                background: p.surface,
                borderColor: `${p.ink}15`,
                borderRadius: def.cardRadius,
              }}
            >
              <div className="font-mono text-[10px] uppercase tracking-wider mb-1" style={{ color: p.muted }}>
                Heading 2 & 3 Scale
              </div>
              <h2 className="text-xl font-bold mb-1" style={{ fontFamily: p.display }}>
                Section Title Specimen
              </h2>
              <h3 className="text-sm font-semibold" style={{ color: p.muted }}>
                Subsection header with proportional lead
              </h3>
            </div>

            <div
              className="p-4 border"
              style={{
                background: p.surface,
                borderColor: `${p.ink}15`,
                borderRadius: def.cardRadius,
              }}
            >
              <div className="font-mono text-[10px] uppercase tracking-wider mb-1" style={{ color: p.muted }}>
                Body & Code Telemetry — {p.body}
              </div>
              <p className="text-xs leading-relaxed mb-2">
                Body text calibrated for reading comfort, high contrast against the canvas plane, and crisp rendering.
              </p>
              <div className="font-mono text-[11px]" style={{ color: p.muted }}>
                Caption text // Mono telemetry: 100% compliant
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 03. BUTTON SYSTEM ---------- */}
      <section className="pt-8 border-t" style={{ borderColor: `${p.ink}18` }}>
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full" style={{ background: p.accent }} />
          <h3 className="font-mono text-xs uppercase tracking-widest font-bold" style={{ color: p.muted }}>
            03 — Button System
          </h3>
        </div>
        <div
          className="flex flex-wrap items-center gap-3 p-5 border"
          style={{
            background: p.surface,
            borderColor: `${p.ink}15`,
            borderRadius: def.cardRadius,
          }}
        >
          {/* Primary Button */}
          <button
            type="button"
            className="font-semibold text-xs px-4 py-2 cursor-pointer transition-transform hover:-translate-y-0.5"
            style={{
              background: p.ink,
              color: p.surface,
              borderRadius: def.btnRadius,
              border: def.cardBorder !== "none" ? def.cardBorder : `1px solid ${p.ink}`,
              boxShadow: def.cardShadow !== "none" ? def.cardShadow : "none",
            }}
          >
            Primary Action
          </button>

          {/* Accent Button */}
          <button
            type="button"
            className="font-semibold text-xs px-4 py-2 cursor-pointer transition-transform hover:-translate-y-0.5"
            style={{
              background: p.accent,
              color: btnAccentColor,
              borderRadius: def.btnRadius,
              border: def.cardBorder !== "none" ? def.cardBorder : "none",
              boxShadow: def.cardShadow !== "none" ? def.cardShadow : "none",
            }}
          >
            Accent Action
          </button>

          {/* Outlined / Secondary Button */}
          <button
            type="button"
            className="font-medium text-xs px-4 py-2 cursor-pointer transition-colors"
            style={{
              background: "transparent",
              color: p.ink,
              borderRadius: def.btnRadius,
              border: def.cardBorder !== "none" ? def.cardBorder : `1px solid ${p.ink}44`,
            }}
          >
            Outlined Secondary
          </button>

          {/* Subtle Ghost Button */}
          <button
            type="button"
            className="font-medium text-xs px-3.5 py-2 cursor-pointer transition-colors"
            style={{
              background: `${p.ink}10`,
              color: p.ink,
              borderRadius: def.btnRadius,
            }}
          >
            Ghost Button
          </button>

          {/* Pill Badge Button */}
          <span
            className="font-mono text-[11px] px-3 py-1.5 font-bold uppercase tracking-wider inline-flex items-center gap-1"
            style={{
              background: `${p.accent}20`,
              color: p.accent,
              borderRadius: def.badgeRadius,
              border: `1px solid ${p.accent}40`,
            }}
          >
            <span>✦</span>
            <span>Status Pill</span>
          </span>

          {/* Disabled Button */}
          <button
            type="button"
            disabled
            className="font-medium text-xs px-3.5 py-2 cursor-not-allowed opacity-40"
            style={{
              background: `${p.ink}15`,
              color: p.ink,
              borderRadius: def.btnRadius,
              border: `1px solid ${p.ink}20`,
            }}
          >
            Disabled State
          </button>
        </div>
      </section>

      {/* ---------- 04. FORM & INPUT CONTROLS ---------- */}
      <section className="pt-8 border-t" style={{ borderColor: `${p.ink}18` }}>
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full" style={{ background: p.accent }} />
          <h3 className="font-mono text-xs uppercase tracking-widest font-bold" style={{ color: p.muted }}>
            04 — Form & Input Controls
          </h3>
        </div>
        <div
          className="grid grid-cols-1 @md:grid-cols-2 gap-3.5 @sm:gap-4 p-3.5 @sm:p-5 border"
          style={{
            background: p.surface,
            borderColor: `${p.ink}15`,
            borderRadius: def.cardRadius,
          }}
        >
          <div>
            <label className="block text-[11px] font-semibold mb-1.5 uppercase font-mono tracking-wider" style={{ color: p.muted }}>
              Text Input Field
            </label>
            <input
              type="text"
              readOnly
              value="agent://core-system@2.5"
              className="w-full px-3 py-2 text-xs focus:outline-none"
              style={{
                background: p.bg,
                color: p.ink,
                border: def.cardBorder !== "none" ? def.cardBorder : `1px solid ${p.ink}30`,
                borderRadius: def.btnRadius,
              }}
            />
          </div>

          <div>
            <label className="block text-[11px] font-semibold mb-1.5 uppercase font-mono tracking-wider" style={{ color: p.muted }}>
              Interactive Segmented Pill
            </label>
            <div
              className="flex p-1"
              style={{
                background: p.bg,
                borderRadius: def.badgeRadius,
                border: `1px solid ${p.ink}20`,
              }}
            >
              {["Option A", "Option B", "Option C"].map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setActiveSegment(opt)}
                  className="flex-1 text-center text-xs font-semibold py-1.5 cursor-pointer transition-all"
                  style={{
                    background: activeSegment === opt ? p.surface : "transparent",
                    color: activeSegment === opt ? p.ink : p.muted,
                    borderRadius: def.badgeRadius,
                    boxShadow: activeSegment === opt ? "0 1px 3px rgba(0,0,0,0.1)" : "none",
                  }}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 05. INTERACTIVE TOGGLES, SWITCHES & SLIDERS (NEW) ---------- */}
      <section className="pt-8 border-t" style={{ borderColor: `${p.ink}18` }}>
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full" style={{ background: p.accent }} />
          <h3 className="font-mono text-xs uppercase tracking-widest font-bold" style={{ color: p.muted }}>
            05 — Interactive Toggles & Sliders
          </h3>
        </div>
        <div
          className="grid grid-cols-1 @md:grid-cols-2 @xl:grid-cols-3 gap-3.5 @sm:gap-4 p-3.5 @sm:p-5 border"
          style={{
            background: p.surface,
            borderColor: `${p.ink}15`,
            borderRadius: def.cardRadius,
          }}
        >
          {/* Switch Toggles */}
          <div className="space-y-3">
            <div className="text-[11px] font-mono uppercase tracking-wider font-bold" style={{ color: p.muted }}>
              Toggle Switches
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs" style={{ color: p.ink }}>Hardware Acceleration</span>
              <button
                type="button"
                onClick={() => setSwitchState(!switchState)}
                className="relative inline-flex items-center h-5 w-9 rounded-full cursor-pointer transition-colors p-0.5"
                style={{
                  background: switchState ? p.accent : `${p.ink}25`,
                }}
              >
                <span
                  className="inline-block w-4 h-4 rounded-full transition-transform"
                  style={{
                    background: p.surface,
                    transform: switchState ? "translateX(16px)" : "translateX(0px)",
                  }}
                />
              </button>
            </div>
            <div className="flex items-center justify-between opacity-50">
              <span className="text-xs" style={{ color: p.ink }}>Autonomous Debugger</span>
              <span
                className="inline-flex items-center h-5 w-9 rounded-full p-0.5 cursor-not-allowed"
                style={{ background: `${p.ink}20` }}
              >
                <span className="inline-block w-4 h-4 rounded-full" style={{ background: p.surface }} />
              </span>
            </div>
          </div>

          {/* Checkbox & Radios */}
          <div className="space-y-2">
            <div className="text-[11px] font-mono uppercase tracking-wider font-bold" style={{ color: p.muted }}>
              Checkboxes & Radios
            </div>
            <label className="flex items-center gap-2 text-xs cursor-pointer">
              <input
                type="checkbox"
                checked={checkboxA}
                onChange={() => setCheckboxA(!checkboxA)}
                style={{ accentColor: p.accent }}
              />
              <span style={{ color: p.ink }}>Enforce Token Purity</span>
            </label>
            <label className="flex items-center gap-2 text-xs cursor-pointer">
              <input
                type="checkbox"
                checked={checkboxB}
                onChange={() => setCheckboxB(!checkboxB)}
                style={{ accentColor: p.accent }}
              />
              <span style={{ color: p.muted }}>Strict CSS Grid</span>
            </label>
            <div className="flex items-center gap-3 pt-1">
              <label className="flex items-center gap-1.5 text-xs cursor-pointer">
                <input
                  type="radio"
                  name="spec-radio"
                  checked={selectedRadio === "opt1"}
                  onChange={() => setSelectedRadio("opt1")}
                  style={{ accentColor: p.accent }}
                />
                <span style={{ color: p.ink }}>Light</span>
              </label>
              <label className="flex items-center gap-1.5 text-xs cursor-pointer">
                <input
                  type="radio"
                  name="spec-radio"
                  checked={selectedRadio === "opt2"}
                  onChange={() => setSelectedRadio("opt2")}
                  style={{ accentColor: p.accent }}
                />
                <span style={{ color: p.ink }}>Dark</span>
              </label>
            </div>
          </div>

          {/* Slider */}
          <div>
            <div className="text-[11px] font-mono uppercase tracking-wider font-bold mb-2" style={{ color: p.muted }}>
              Range Slider
            </div>
            <div className="flex justify-between text-xs font-mono mb-1">
              <span style={{ color: p.muted }}>Velocity</span>
              <span className="font-bold" style={{ color: p.accent }}>{sliderVal}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={sliderVal}
              onChange={(e) => setSliderVal(Number(e.target.value))}
              className="w-full h-1.5 rounded appearance-none cursor-pointer"
              style={{ accentColor: p.accent, background: `${p.ink}18` }}
            />
            <div className="flex justify-between text-[10px] font-mono mt-2" style={{ color: p.muted }}>
              <span>0ms</span>
              <span>100ms</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 06. BADGES, PILLS & STATUS TAGS (NEW) ---------- */}
      <section className="pt-8 border-t" style={{ borderColor: `${p.ink}18` }}>
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full" style={{ background: p.accent }} />
          <h3 className="font-mono text-xs uppercase tracking-widest font-bold" style={{ color: p.muted }}>
            06 — Badges, Pills & Status Indicators
          </h3>
        </div>
        <div
          className="flex flex-wrap items-center gap-2.5 p-5 border"
          style={{
            background: p.surface,
            borderColor: `${p.ink}15`,
            borderRadius: def.cardRadius,
          }}
        >
          {/* Solid Accent Badge */}
          <span
            className="px-2.5 py-1 text-xs font-bold font-mono uppercase tracking-wider"
            style={{
              background: p.accent,
              color: btnAccentColor,
              borderRadius: def.badgeRadius,
            }}
          >
            Solid Accent
          </span>

          {/* Secondary Tint Badge */}
          <span
            className="px-2.5 py-1 text-xs font-semibold font-mono"
            style={{
              background: `${p.accent}22`,
              color: p.accent,
              borderRadius: def.badgeRadius,
              border: `1px solid ${p.accent}44`,
            }}
          >
            Subtle Tint
          </span>

          {/* Outlined Badge */}
          <span
            className="px-2.5 py-1 text-xs font-mono uppercase tracking-wider"
            style={{
              background: "transparent",
              color: p.ink,
              border: `1px solid ${p.ink}35`,
              borderRadius: def.badgeRadius,
            }}
          >
            Outline Badge
          </span>

          {/* Pulse Live Dot Status */}
          <span
            className="px-2.5 py-1 text-xs font-medium inline-flex items-center gap-1.5"
            style={{
              background: p.bg,
              color: p.ink,
              border: `1px solid ${p.ink}18`,
              borderRadius: def.badgeRadius,
            }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: p.accent }} />
            <span>Agent Live</span>
          </span>

          {/* Counter Badge */}
          <span
            className="px-2 py-0.5 text-[11px] font-bold font-mono inline-flex items-center gap-1"
            style={{
              background: p.ink,
              color: p.surface,
              borderRadius: def.badgeRadius,
            }}
          >
            <span>v2.5</span>
            <span className="px-1 rounded-full text-[9px]" style={{ background: p.accent, color: btnAccentColor }}>
              99+
            </span>
          </span>
        </div>
      </section>

      {/* ---------- 07. CARDS & SURFACES ---------- */}
      <section className="pt-8 border-t" style={{ borderColor: `${p.ink}18` }}>
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full" style={{ background: p.accent }} />
          <h3 className="font-mono text-xs uppercase tracking-widest font-bold" style={{ color: p.muted }}>
            07 — Card & Surface Variants
          </h3>
        </div>
        <div className="grid grid-cols-1 @md:grid-cols-2 @xl:grid-cols-3 gap-3.5 @sm:gap-4">
          <div
            className="p-4"
            style={{
              background: p.surface,
              border: def.cardBorder,
              borderRadius: def.cardRadius,
              boxShadow: def.cardShadow,
            }}
          >
            <div className="font-bold text-sm mb-1">Standard Surface</div>
            <p className="text-xs" style={{ color: p.muted }}>Default container for structured content tiles and panels.</p>
          </div>

          <div
            className="p-4"
            style={{
              background: p.surface,
              border: `2px solid ${p.accent}`,
              borderRadius: def.cardRadius,
              boxShadow: def.cardShadow !== "none" ? def.cardShadow : `0 4px 16px ${p.accent}25`,
            }}
          >
            <div className="font-bold text-sm mb-1 flex items-center justify-between">
              <span>Featured Surface</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 font-bold" style={{ background: p.accent, color: btnAccentColor, borderRadius: def.badgeRadius }}>PRO</span>
            </div>
            <p className="text-xs" style={{ color: p.muted }}>Elevated surface for primary calls-to-action and active tiers.</p>
          </div>

          <div
            className="p-4"
            style={{
              background: p.ink,
              color: p.surface,
              border: def.cardBorder !== "none" ? def.cardBorder : `1px solid ${p.ink}`,
              borderRadius: def.cardRadius,
            }}
          >
            <div className="font-bold text-sm mb-1">Inverted Surface</div>
            <p className="text-xs opacity-80">High-contrast accent container for dramatic visual anchors.</p>
          </div>
        </div>
      </section>

      {/* ---------- 08. FEEDBACK ALERTS & CALLOUTS (NEW) ---------- */}
      <section className="pt-8 border-t" style={{ borderColor: `${p.ink}18` }}>
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full" style={{ background: p.accent }} />
          <h3 className="font-mono text-xs uppercase tracking-widest font-bold" style={{ color: p.muted }}>
            08 — Feedback Alerts & Callouts
          </h3>
        </div>
        <div className="space-y-3">
          {/* Informational Callout */}
          <div
            className="p-3.5 flex items-start justify-between gap-3 border"
            style={{
              background: p.surface,
              borderLeft: `4px solid ${p.accent}`,
              borderColor: `${p.ink}18`,
              borderRadius: def.cardRadius,
            }}
          >
            <div className="flex items-start gap-2.5">
              <span className="font-bold text-base" style={{ color: p.accent }}>✦</span>
              <div>
                <div className="text-xs font-bold">System Notice: Specification Synchronized</div>
                <div className="text-[11px] mt-0.5" style={{ color: p.muted }}>
                  All 20 DESIGN.md tokens have been compiled into zero-runtime stylesheet variables.
                </div>
              </div>
            </div>
            <button
              type="button"
              className="text-[11px] font-semibold cursor-pointer shrink-0 underline"
              style={{ color: p.accent }}
            >
              Details
            </button>
          </div>

          {/* Success Banner */}
          <div
            className="p-3 flex items-center justify-between gap-2 border text-xs"
            style={{
              background: `${p.accent}15`,
              borderColor: `${p.accent}40`,
              borderRadius: def.cardRadius,
              color: p.ink,
            }}
          >
            <div className="flex items-center gap-2">
              <span className="font-bold" style={{ color: p.accent }}>✓</span>
              <span>Tokens validated against style contract schema. 0 lint warnings.</span>
            </div>
            <span className="font-mono text-[10px] uppercase opacity-70">100% OK</span>
          </div>
        </div>
      </section>

      {/* ---------- 09. NAVIGATION, TABS & BREADCRUMBS (NEW) ---------- */}
      <section className="pt-8 border-t" style={{ borderColor: `${p.ink}18` }}>
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full" style={{ background: p.accent }} />
          <h3 className="font-mono text-xs uppercase tracking-widest font-bold" style={{ color: p.muted }}>
            09 — Navigation, Tabs & Breadcrumbs
          </h3>
        </div>
        <div
          className="p-5 border space-y-4"
          style={{
            background: p.surface,
            borderColor: `${p.ink}15`,
            borderRadius: def.cardRadius,
          }}
        >
          {/* Breadcrumb Trail */}
          <nav aria-label="Breadcrumb specimen" className="flex items-center gap-2 text-xs font-mono" style={{ color: p.muted }}>
            <span className="hover:underline cursor-pointer">Index</span>
            <span>/</span>
            <span className="hover:underline cursor-pointer">{def.category}</span>
            <span>/</span>
            <span className="font-bold" style={{ color: p.ink }}>{def.name}</span>
          </nav>

          {/* Tab Strip */}
          <div className="flex items-center gap-2 border-b pb-1" style={{ borderColor: `${p.ink}15` }}>
            {[
              ["tab1", "Overview"],
              ["tab2", "Token Specs"],
              ["tab3", "Export Code"],
            ].map(([id, label]) => (
              <button
                key={id}
                type="button"
                onClick={() => setActiveTab(id)}
                className="px-3 py-1 text-xs font-medium cursor-pointer transition-colors relative"
                style={{
                  color: activeTab === id ? p.ink : p.muted,
                  fontWeight: activeTab === id ? 600 : 400,
                }}
              >
                {label}
                {activeTab === id && (
                  <span
                    className="absolute bottom-[-5px] left-0 right-0 h-0.5"
                    style={{ background: p.accent }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex items-center justify-between text-xs pt-1">
            <span className="font-mono text-[11px]" style={{ color: p.muted }}>Showing 1–10</span>
            <div className="flex items-center gap-1 font-mono text-[11px]">
              <button type="button" className="px-2 py-1 border rounded" style={{ borderColor: `${p.ink}20` }}>←</button>
              <button type="button" className="px-2.5 py-1 font-bold rounded" style={{ background: p.ink, color: p.surface }}>1</button>
              <button type="button" className="px-2.5 py-1 border rounded" style={{ borderColor: `${p.ink}20` }}>2</button>
              <button type="button" className="px-2.5 py-1 border rounded" style={{ borderColor: `${p.ink}20` }}>3</button>
              <button type="button" className="px-2 py-1 border rounded" style={{ borderColor: `${p.ink}20` }}>→</button>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 10. AVATARS & USER PRESENCE (NEW) ---------- */}
      <section className="pt-8 border-t" style={{ borderColor: `${p.ink}18` }}>
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full" style={{ background: p.accent }} />
          <h3 className="font-mono text-xs uppercase tracking-widest font-bold" style={{ color: p.muted }}>
            10 — Avatars & User Presence
          </h3>
        </div>
        <div
          className="grid grid-cols-1 @md:grid-cols-2 gap-3.5 @sm:gap-4 p-3.5 @sm:p-5 border"
          style={{
            background: p.surface,
            borderColor: `${p.ink}15`,
            borderRadius: def.cardRadius,
          }}
        >
          {/* Overlapping Avatar Stack */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {[
                ["AI", p.accent],
                ["CX", p.accent2],
                ["CL", p.ink],
                ["WD", p.muted],
              ].map(([txt, bgCol], i) => (
                <span
                  key={i}
                  className="w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold text-[10px]"
                  style={{
                    background: bgCol,
                    color: p.surface,
                    borderColor: p.surface,
                  }}
                >
                  {txt}
                </span>
              ))}
            </div>
            <div>
              <div className="text-xs font-bold">12 Collaborators</div>
              <div className="text-[10px] font-mono" style={{ color: p.muted }}>Active on this style spec</div>
            </div>
          </div>

          {/* User Presence Card */}
          <div
            className="flex items-center justify-between p-2.5 border"
            style={{
              borderColor: `${p.ink}15`,
              borderRadius: def.cardRadius,
              background: p.bg,
            }}
          >
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <span
                  className="w-7 h-7 rounded-full font-bold text-[10px] flex items-center justify-center"
                  style={{ background: p.accent, color: btnAccentColor }}
                >
                  SL
                </span>
                <span
                  className="absolute bottom-0 right-0 w-2 h-2 rounded-full border"
                  style={{ background: "#22C55E", borderColor: p.surface }}
                />
              </div>
              <div>
                <div className="text-xs font-bold">{def.name} Lead</div>
                <div className="text-[10px]" style={{ color: p.muted }}>Online · Synthesizing UI</div>
              </div>
            </div>
            <span
              className="text-[9px] font-mono font-bold px-2 py-0.5 rounded uppercase"
              style={{ background: `${p.accent}20`, color: p.accent }}
            >
              ADMIN
            </span>
          </div>
        </div>
      </section>

      {/* ---------- 11. DATA MATRIX & KEY-VALUE LIST (NEW) ---------- */}
      <section className="pt-8 border-t" style={{ borderColor: `${p.ink}18` }}>
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full" style={{ background: p.accent }} />
          <h3 className="font-mono text-xs uppercase tracking-widest font-bold" style={{ color: p.muted }}>
            11 — Data Matrix & Property Lists
          </h3>
        </div>
        <div
          className="border overflow-hidden"
          style={{
            background: p.surface,
            borderColor: `${p.ink}15`,
            borderRadius: def.cardRadius,
          }}
        >
          <div className="divide-y" style={{ borderColor: `${p.ink}12` }}>
            {[
              ["Aesthetic Family", def.category, "Category schema taxon"],
              ["Card Border Spec", def.cardBorder, "Concrete CSS border token"],
              ["Shadow Elevation", def.cardShadow, "Elevation and ambient shadow"],
              ["Corner Radius", `${def.cardRadius} (Card) / ${def.btnRadius} (Button)`, "Normalized radius metric"],
              ["Display Face", p.display.split(",")[0], "Primary brand typography"],
            ].map(([prop, val, desc], i) => (
              <div key={i} className="flex flex-col @sm:flex-row @sm:items-center justify-between p-2.5 @sm:p-3 text-xs gap-1 @sm:gap-2">
                <div className="w-full @sm:w-1/3 font-semibold font-mono text-[11px]" style={{ color: p.ink }}>
                  {prop}
                </div>
                <div className="w-full @sm:w-1/3 font-mono text-[11px] truncate" style={{ color: p.accent }}>
                  {val}
                </div>
                <div className="w-full @sm:w-1/3 @sm:text-right text-[10px] @sm:text-[10.5px]" style={{ color: p.muted }}>
                  {desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 12. DIALOG & TOOLTIP OVERLAYS (NEW) ---------- */}
      <section className="pt-8 border-t" style={{ borderColor: `${p.ink}18` }}>
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full" style={{ background: p.accent }} />
          <h3 className="font-mono text-xs uppercase tracking-widest font-bold" style={{ color: p.muted }}>
            12 — Dialog & Tooltip Overlays
          </h3>
        </div>
        <div className="grid grid-cols-1 @md:grid-cols-2 gap-3.5 @sm:gap-4">
          {/* Modal Dialog Card */}
          <div
            className="p-4 border flex flex-col justify-between"
            style={{
              background: p.surface,
              border: def.cardBorder,
              borderRadius: def.cardRadius,
              boxShadow: def.cardShadow !== "none" ? def.cardShadow : "0 8px 30px rgba(0,0,0,0.12)",
            }}
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono uppercase font-bold" style={{ color: p.muted }}>
                  Modal Dialog Component
                </span>
                <span className="text-xs cursor-pointer opacity-50 hover:opacity-100">✕</span>
              </div>
              <h4 className="font-bold text-sm mb-1" style={{ fontFamily: p.display }}>
                Save Token Configuration
              </h4>
              <p className="text-xs leading-relaxed" style={{ color: p.muted }}>
                Synchronize 20 style tokens with your local IDE and coding agent workspace.
              </p>
            </div>
            <div className="flex items-center gap-2 mt-4 pt-3 border-t" style={{ borderColor: `${p.ink}15` }}>
              <button
                type="button"
                className="flex-1 py-1.5 text-xs font-semibold cursor-pointer"
                style={{
                  background: p.ink,
                  color: p.surface,
                  borderRadius: def.btnRadius,
                }}
              >
                Save Changes
              </button>
              <button
                type="button"
                className="flex-1 py-1.5 text-xs font-medium cursor-pointer border"
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

          {/* Tooltip & Popover Card */}
          <div
            className="p-4 border flex flex-col justify-between"
            style={{
              background: p.surface,
              borderColor: `${p.ink}15`,
              borderRadius: def.cardRadius,
            }}
          >
            <div>
              <div className="text-[10px] font-mono uppercase font-bold mb-2" style={{ color: p.muted }}>
                Tooltip & Popover Specimen
              </div>
              <div className="relative inline-block my-2">
                {/* Simulated Floating Tooltip */}
                <div
                  className="px-3 py-1.5 text-xs font-mono font-medium shadow-lg border"
                  style={{
                    background: p.ink,
                    color: p.surface,
                    borderColor: p.accent,
                    borderRadius: def.badgeRadius,
                  }}
                >
                  <span>✦ Token contract: 100% pure</span>
                </div>
              </div>
              <p className="text-xs mt-2" style={{ color: p.muted }}>
                Floating popovers preserve high z-index contrast and inherit strict border curvature.
              </p>
            </div>
            <div className="text-[10px] font-mono" style={{ color: p.accent }}>
              Layer depth: Level 3 // Overlay
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
