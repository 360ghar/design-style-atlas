import type { StyleDefinition } from "../../lib/style-definitions";
import type { PreviewThemeMode } from "../../lib/preview-theme";
import { resolvePreviewTheme } from "../../lib/preview-theme";
import { SignatureWidget } from "./SignatureWidget";

export function StyleLandingPage({
  def: baseDef,
  large,
  previewTheme = "default",
}: {
  def: StyleDefinition;
  large?: boolean;
  previewTheme?: PreviewThemeMode;
}) {
  const def = resolvePreviewTheme(baseDef, previewTheme);
  const p = def.preview;

  return (
    <div
      className="w-full h-full flex flex-col justify-between overflow-x-hidden text-left"
      style={{
        background: p.bg,
        color: p.ink,
        fontFamily: p.body,
        padding: large ? "24px 32px" : "10px 14px",
        gap: large ? 24 : 10,
      }}
    >
      {/* ---------- 1. NAVIGATION BAR ---------- */}
      <header
        className="w-full flex items-center justify-between shrink-0"
        style={{
          borderBottom: def.cardBorder !== "none" ? def.cardBorder : `1px solid ${p.ink}18`,
          paddingBottom: large ? 12 : 6,
        }}
      >
        <div className="flex items-center gap-2">
          <span
            className="inline-flex items-center justify-center font-bold"
            style={{
              background: p.accent,
              color: p.bg === "#000000" || p.bg === "#08090A" || p.bg === "#0A0118" ? "#000" : "#FFF",
              width: large ? 22 : 16,
              height: large ? 22 : 16,
              borderRadius: def.badgeRadius,
              fontSize: large ? 11 : 8,
              border: def.cardBorder !== "none" ? def.cardBorder : "none",
            }}
          >
            ✦
          </span>
          <span
            className="font-bold tracking-tight"
            style={{
              fontFamily: p.display,
              fontSize: large ? 15 : 10,
              color: p.ink,
            }}
          >
            {def.name}
          </span>
        </div>

        {large && (
          <nav className="hidden md:flex items-center gap-4 text-[11px] font-medium" style={{ color: p.muted }}>
            <span className="cursor-pointer hover:underline">Features</span>
            <span className="cursor-pointer hover:underline">Components</span>
            <span className="cursor-pointer hover:underline">Pricing</span>
            <span className="cursor-pointer hover:underline">Docs</span>
          </nav>
        )}

        <div className="flex items-center gap-2">
          <span
            className="font-mono uppercase tracking-widest hidden sm:inline-block"
            style={{
              fontSize: large ? 9 : 7,
              background: `${p.accent}18`,
              color: p.accent,
              padding: large ? "3px 8px" : "1px 5px",
              borderRadius: def.badgeRadius,
              border: `1px solid ${p.accent}44`,
            }}
          >
            v2.4
          </span>
          <button
            type="button"
            className="font-medium cursor-pointer transition-opacity hover:opacity-90"
            style={{
              background: p.accent,
              color: p.bg === "#08090A" || p.bg === "#000000" ? "#000" : "#FFF",
              fontSize: large ? 11 : 8,
              padding: large ? "6px 14px" : "3px 8px",
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
      <section className="flex flex-col gap-1.5 py-1">
        {/* Eyebrow Badge */}
        <div className="flex items-center gap-1.5">
          <span
            className="font-mono uppercase tracking-wider font-semibold inline-block"
            style={{
              fontSize: large ? 10 : 7,
              color: p.accent,
              background: p.surface,
              border: def.cardBorder !== "none" ? def.cardBorder : `1px solid ${p.accent}33`,
              borderRadius: def.badgeRadius,
              padding: large ? "3px 9px" : "1.5px 6px",
            }}
          >
            {def.eyebrow}
          </span>
          <span
            className="font-mono text-[8px] opacity-60 uppercase tracking-widest hidden sm:inline"
            style={{ color: p.muted }}
          >
            ● PRODUCTION READY
          </span>
        </div>

        {/* Display Headline */}
        <h1
          className="font-bold leading-[1.05] tracking-tight text-pretty"
          style={{
            fontFamily: p.display,
            fontSize: large ? 32 : 16,
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
            fontSize: large ? 12 : 8,
            color: p.muted,
            maxWidth: large ? "85%" : "100%",
          }}
        >
          {def.subhead}
        </p>

        {/* Dual Button Action Group */}
        <div className="flex flex-wrap items-center gap-2 mt-1.5">
          <button
            type="button"
            className="font-semibold cursor-pointer transition-all hover:-translate-y-0.5"
            style={{
              background: p.ink,
              color: p.surface,
              fontSize: large ? 11 : 8,
              padding: large ? "7px 18px" : "4px 10px",
              borderRadius: def.btnRadius,
              border: def.cardBorder !== "none" ? def.cardBorder : `1px solid ${p.ink}`,
              boxShadow: def.cardShadow !== "none" ? def.cardShadow : "none",
            }}
          >
            {def.primaryCta} →
          </button>
          <button
            type="button"
            className="font-medium cursor-pointer transition-colors"
            style={{
              background: p.surface,
              color: p.ink,
              fontSize: large ? 11 : 8,
              padding: large ? "7px 16px" : "4px 9px",
              borderRadius: def.btnRadius,
              border: def.cardBorder !== "none" ? def.cardBorder : `1px solid ${p.ink}33`,
            }}
          >
            {def.secondaryCta}
          </button>
        </div>

        {/* Social Proof Stats */}
        {large && (
          <div
            className="flex items-center gap-4 text-[10px] font-mono mt-2 pt-2 border-t"
            style={{ borderColor: `${p.ink}15`, color: p.muted }}
          >
            <span>★ 4.9 Satisfaction Rating</span>
            <span>·</span>
            <span>12,400+ Active Builders</span>
            <span>·</span>
            <span>Zero Configuration</span>
          </div>
        )}
      </section>

      {/* ---------- 3. BENTO GRID / FEATURE CARDS ---------- */}
      <section
        className={`grid ${large ? "grid-cols-3 gap-4" : "grid-cols-2 gap-2"}`}
      >
        {/* Card 1: Core Feature Card */}
        <div
          className="flex flex-col justify-between p-2.5"
          style={{
            background: p.surface,
            border: def.cardBorder,
            borderRadius: def.cardRadius,
            boxShadow: def.cardShadow,
            color: p.ink,
          }}
        >
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[9px] font-mono uppercase tracking-wider" style={{ color: p.accent }}>
                Feature 01
              </span>
              <span className="text-[10px]">✦</span>
            </div>
            <h3
              className="font-bold leading-snug"
              style={{
                fontFamily: p.display,
                fontSize: large ? 13 : 9.5,
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
          <div className="mt-2 text-[8.5px] font-semibold" style={{ color: p.accent }}>
            Explore Spec →
          </div>
        </div>

        {/* Card 2: Interactive Form & Controls Card */}
        <div
          className="flex flex-col justify-between p-2.5"
          style={{
            background: p.surface,
            border: def.cardBorder,
            borderRadius: def.cardRadius,
            boxShadow: def.cardShadow,
            color: p.ink,
          }}
        >
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[9px] font-mono uppercase tracking-wider" style={{ color: p.muted }}>
                Input & Controls
              </span>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: p.accent }} />
            </div>
            {/* Input Field with integrated button */}
            <div
              className="flex items-center overflow-hidden my-1"
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
                className="w-full px-2 py-1 bg-transparent text-[8px] focus:outline-none truncate"
                style={{ color: p.ink }}
              />
              <span
                className="px-2 py-1 font-bold text-[7px] uppercase shrink-0"
                style={{
                  background: p.accent,
                  color: p.bg === "#000000" || p.bg === "#08090A" ? "#000" : "#fff",
                }}
              >
                Go
              </span>
            </div>
          </div>
          {/* Segmented Toggle Pills */}
          <div
            className="flex p-0.5 mt-1"
            style={{
              background: `${p.ink}0a`,
              borderRadius: def.badgeRadius,
              border: `1px solid ${p.ink}15`,
            }}
          >
            <span
              className="flex-1 text-center font-bold text-[7.5px] py-0.5"
              style={{
                background: p.surface,
                color: p.ink,
                borderRadius: def.badgeRadius,
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              }}
            >
              Active
            </span>
            <span
              className="flex-1 text-center text-[7.5px] py-0.5 opacity-60"
              style={{ color: p.muted }}
            >
              Draft
            </span>
          </div>
        </div>

        {/* Card 3: Metrics & Stat Card (shown in large or multi-column) */}
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
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-mono uppercase tracking-wider" style={{ color: p.muted }}>
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
                  fontSize: 26,
                  color: p.ink,
                }}
              >
                {def.metricValue}
              </div>
              <div className="text-[10px] mt-1 font-medium" style={{ color: p.muted }}>
                {def.metricLabel}
              </div>
            </div>
            <div className="w-full bg-black/10 rounded-full h-1 overflow-hidden">
              <div className="h-full rounded-full" style={{ background: p.accent, width: "88%" }} />
            </div>
          </div>
        )}
      </section>

      {/* ---------- 4. SIGNATURE ELEMENT ---------- */}
      <section className="shrink-0">
        <SignatureWidget def={def} large={large} />
      </section>

      {/* ---------- 5. PRICING & DATA TABLE SECTION (LARGE ONLY) ---------- */}
      {large && (
        <section className="grid grid-cols-2 gap-4">
          {/* Pricing Tier Card */}
          <div
            className="p-3 flex flex-col justify-between"
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
                    color: p.bg === "#000" || p.bg === "#08090A" ? "#000" : "#FFF",
                    borderRadius: def.badgeRadius,
                  }}
                >
                  POPULAR
                </span>
              </div>
              <div className="text-[20px] font-extrabold my-2">
                {def.planPrice} <span className="text-[10px] font-normal opacity-60">/ permanent</span>
              </div>
              <ul className="space-y-1 text-[10.5px] mb-3">
                {def.planFeatures.map((feat) => (
                  <li key={feat} className="flex items-center gap-1.5">
                    <span style={{ color: p.accent }}>✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button
              type="button"
              className="w-full py-1.5 text-[10.5px] font-semibold text-center cursor-pointer transition-opacity hover:opacity-90"
              style={{
                background: p.ink,
                color: p.surface,
                borderRadius: def.btnRadius,
                border: def.cardBorder !== "none" ? def.cardBorder : "none",
              }}
            >
              Get License
            </button>
          </div>

          {/* Activity / Data Table Card */}
          <div
            className="p-3 flex flex-col justify-between"
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
                  Active Deployments
                </span>
                <span className="font-mono text-[9px] opacity-70">3 / 3 OK</span>
              </div>
              <div className="space-y-1.5 text-[10px] font-mono">
                {[
                  ["#4821-main", "Production", "LIVE"],
                  ["#4820-stag", "Staging", "SYNC"],
                  ["#4819-prev", "Edge Node", "PASS"],
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
              Auto-updating via CI/CD
            </div>
          </div>
        </section>
      )}

      {/* ---------- 6. FOOTER BAR ---------- */}
      <footer
        className="w-full flex items-center justify-between pt-2 shrink-0 border-t font-mono text-[8px]"
        style={{
          borderColor: `${p.ink}18`,
          color: p.muted,
        }}
      >
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: p.accent }} />
          <span className="uppercase tracking-wider font-semibold" style={{ color: p.ink }}>
            {def.slug}
          </span>
        </div>
        <div className="opacity-70">DESIGN.md Ready</div>
      </footer>
    </div>
  );
}
