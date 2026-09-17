import type { StyleDefinition } from "../../lib/style-definitions";
import type { PreviewThemeMode } from "../../lib/preview-theme";
import { resolvePreviewTheme } from "../../lib/preview-theme";

export function StyleComponentKit({
  def: baseDef,
  previewTheme = "default",
}: {
  def: StyleDefinition;
  previewTheme?: PreviewThemeMode;
}) {
  const def = resolvePreviewTheme(baseDef, previewTheme);
  const p = def.preview;

  return (
    <div
      className="w-full space-y-10 p-6 sm:p-10 text-left"
      style={{
        background: p.bg,
        color: p.ink,
        fontFamily: p.body,
      }}
    >
      {/* ---------- 1. COLOR PALETTE ---------- */}
      <section>
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full" style={{ background: p.accent }} />
          <h3 className="font-mono text-xs uppercase tracking-widest font-bold" style={{ color: p.muted }}>
            01 — Color Tokens
          </h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
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
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
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

      {/* ---------- 2. TYPOGRAPHY SCALE ---------- */}
      <section className="pt-6 border-t" style={{ borderColor: `${p.ink}20` }}>
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full" style={{ background: p.accent }} />
          <h3 className="font-mono text-xs uppercase tracking-widest font-bold" style={{ color: p.muted }}>
            02 — Typographic Hierarchy
          </h3>
        </div>
        <div className="space-y-4">
          <div className="p-4 rounded-lg border" style={{ background: p.surface, borderColor: `${p.ink}15` }}>
            <div className="font-mono text-[10px] uppercase tracking-wider mb-1" style={{ color: p.muted }}>
              Display — {p.display}
            </div>
            <div
              className="font-bold leading-tight"
              style={{ fontFamily: p.display, fontSize: "clamp(24px, 4vw, 40px)" }}
            >
              {def.headline}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg border" style={{ background: p.surface, borderColor: `${p.ink}15` }}>
              <div className="font-mono text-[10px] uppercase tracking-wider mb-1" style={{ color: p.muted }}>
                Heading 2 & 3
              </div>
              <h2 className="text-xl font-bold mb-1" style={{ fontFamily: p.display }}>
                Section Title Specimen
              </h2>
              <h3 className="text-base font-semibold" style={{ color: p.muted }}>
                Subsection header with restrained proportion
              </h3>
            </div>

            <div className="p-4 rounded-lg border" style={{ background: p.surface, borderColor: `${p.ink}15` }}>
              <div className="font-mono text-[10px] uppercase tracking-wider mb-1" style={{ color: p.muted }}>
                Body & Caption — {p.body}
              </div>
              <p className="text-sm leading-relaxed mb-2">
                Body text calibrated for reading comfort, optimal line length, and high contrast against the background plane.
              </p>
              <div className="font-mono text-xs" style={{ color: p.muted }}>
                Caption text // Mono telemetry: 100% compliant
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 3. BUTTON SYSTEM ---------- */}
      <section className="pt-6 border-t" style={{ borderColor: `${p.ink}20` }}>
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full" style={{ background: p.accent }} />
          <h3 className="font-mono text-xs uppercase tracking-widest font-bold" style={{ color: p.muted }}>
            03 — Button System
          </h3>
        </div>
        <div className="flex flex-wrap items-center gap-4 p-5 rounded-lg border" style={{ background: p.surface, borderColor: `${p.ink}15` }}>
          {/* Primary Button */}
          <button
            type="button"
            className="font-semibold text-sm px-5 py-2.5 cursor-pointer transition-transform hover:-translate-y-0.5"
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
            className="font-semibold text-sm px-5 py-2.5 cursor-pointer transition-transform hover:-translate-y-0.5"
            style={{
              background: p.accent,
              color: p.bg === "#000" || p.bg === "#08090A" ? "#000" : "#FFF",
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
            className="font-medium text-sm px-5 py-2.5 cursor-pointer transition-colors"
            style={{
              background: "transparent",
              color: p.ink,
              borderRadius: def.btnRadius,
              border: def.cardBorder !== "none" ? def.cardBorder : `1px solid ${p.ink}44`,
            }}
          >
            Outlined Secondary
          </button>

          {/* Pill Badge Button */}
          <span
            className="font-mono text-xs px-3 py-1.5 font-bold uppercase tracking-wider"
            style={{
              background: `${p.accent}20`,
              color: p.accent,
              borderRadius: def.badgeRadius,
              border: `1px solid ${p.accent}40`,
            }}
          >
            Status Pill
          </span>

          {/* Disabled Button */}
          <button
            type="button"
            disabled
            className="font-medium text-sm px-4 py-2 cursor-not-allowed opacity-40"
            style={{
              background: `${p.ink}15`,
              color: p.ink,
              borderRadius: def.btnRadius,
              border: `1px solid ${p.ink}20`,
            }}
          >
            Disabled
          </button>
        </div>
      </section>

      {/* ---------- 4. FORM ELEMENTS ---------- */}
      <section className="pt-6 border-t" style={{ borderColor: `${p.ink}20` }}>
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full" style={{ background: p.accent }} />
          <h3 className="font-mono text-xs uppercase tracking-widest font-bold" style={{ color: p.muted }}>
            04 — Form & Input Controls
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 rounded-lg border" style={{ background: p.surface, borderColor: `${p.ink}15` }}>
          <div>
            <label className="block text-xs font-semibold mb-1.5 uppercase font-mono tracking-wider" style={{ color: p.muted }}>
              Text Input Field
            </label>
            <input
              type="text"
              readOnly
              value="user@example.com"
              className="w-full px-3 py-2 text-sm focus:outline-none"
              style={{
                background: p.bg,
                color: p.ink,
                border: def.cardBorder !== "none" ? def.cardBorder : `1px solid ${p.ink}30`,
                borderRadius: def.btnRadius,
              }}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1.5 uppercase font-mono tracking-wider" style={{ color: p.muted }}>
              Segmented Option Control
            </label>
            <div
              className="flex p-1"
              style={{
                background: p.bg,
                borderRadius: def.badgeRadius,
                border: `1px solid ${p.ink}20`,
              }}
            >
              {["Option A", "Option B", "Option C"].map((opt, i) => (
                <span
                  key={opt}
                  className="flex-1 text-center text-xs font-semibold py-1.5 cursor-pointer"
                  style={{
                    background: i === 0 ? p.surface : "transparent",
                    color: i === 0 ? p.ink : p.muted,
                    borderRadius: def.badgeRadius,
                    boxShadow: i === 0 ? "0 1px 3px rgba(0,0,0,0.1)" : "none",
                  }}
                >
                  {opt}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 5. CARDS & SURFACES ---------- */}
      <section className="pt-6 border-t" style={{ borderColor: `${p.ink}20` }}>
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full" style={{ background: p.accent }} />
          <h3 className="font-mono text-xs uppercase tracking-widest font-bold" style={{ color: p.muted }}>
            05 — Card & Surface Variants
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
            <p className="text-xs" style={{ color: p.muted }}>Default container for structured content tiles.</p>
          </div>

          <div
            className="p-4 border-2"
            style={{
              background: p.surface,
              borderColor: p.accent,
              borderRadius: def.cardRadius,
              boxShadow: def.cardShadow !== "none" ? def.cardShadow : `0 4px 16px ${p.accent}25`,
            }}
          >
            <div className="font-bold text-sm mb-1 flex items-center justify-between">
              <span>Featured Surface</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded font-bold" style={{ background: p.accent, color: "#fff" }}>PRO</span>
            </div>
            <p className="text-xs" style={{ color: p.muted }}>Elevated surface for primary calls-to-action and tiers.</p>
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
            <p className="text-xs opacity-75">High-contrast accent container for dramatic focus.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
