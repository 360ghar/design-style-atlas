import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function AppleLiquidGlassPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const s = large ? 1.6 : 1;

  return (
    <Frame meta={meta} large={large}>
      <div
        className="relative flex h-full flex-col justify-between overflow-hidden"
        style={{
          background: p.bg,
          color: p.ink,
          fontFamily: p.body,
          padding: `${14 * s}px ${16 * s}px`,
        }}
      >
        {/* ambient blurred gradient orbs for refraction */}
        <div style={{ position: "absolute", top: "-15%", left: "-10%", width: 140 * s, height: 140 * s, borderRadius: "50%", background: p.accent2, opacity: 0.18, filter: `blur(${35 * s}px)` }} />
        <div style={{ position: "absolute", bottom: "-10%", right: "-5%", width: 120 * s, height: 120 * s, borderRadius: "50%", background: p.accent, opacity: 0.12, filter: `blur(${40 * s}px)` }} />

        {/* Liquid Glass Pill Nav */}
        <div
          className="relative mx-auto flex items-center"
          style={{
            gap: 10 * s,
            background: `color-mix(in srgb, ${p.surface} 65%, transparent)`,
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: `1px solid color-mix(in srgb, ${p.ink} 16%, transparent)`,
            boxShadow: `0 ${4 * s}px ${16 * s}px ${p.ink}0d, inset 0 1px 0 color-mix(in srgb, ${p.surface} 90%, transparent)`,
            borderRadius: 999,
            padding: `${4 * s}px ${14 * s}px`,
            fontSize: 6 * s,
            fontWeight: 600,
          }}
        >
          <span style={{ color: p.accent, fontWeight: 700 }}>Studio</span>
          <span style={{ color: p.muted }}>Displays</span>
          <span style={{ color: p.muted }}>Optics</span>
        </div>

        {/* Central Refractive Specular Card */}
        <div
          className="relative my-auto"
          style={{
            background: `color-mix(in srgb, ${p.surface} 75%, transparent)`,
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderRadius: 22 * s,
            border: `1px solid color-mix(in srgb, ${p.ink} 14%, transparent)`,
            boxShadow: `0 ${12 * s}px ${36 * s}px ${p.ink}0f, inset 0 1px 1px color-mix(in srgb, ${p.surface} 95%, transparent)`,
            padding: `${16 * s}px ${18 * s}px`,
          }}
        >
          <div style={{ fontSize: 6 * s, color: p.accent, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" as const }}>
            VisionOS Optics
          </div>
          <h3
            style={{
              fontFamily: p.display,
              fontSize: 14 * s,
              fontWeight: 700,
              lineHeight: 1.15,
              margin: `${3 * s}px 0 ${5 * s}px 0`,
              letterSpacing: "-0.02em",
            }}
          >
            Spatial Canvas 4K
          </h3>
          <p style={{ fontSize: 6.5 * s, color: p.muted, lineHeight: 1.5 }}>
            Specular highlights trace rounded edges. Translucent liquid materials refract ambient scenes in real time.
          </p>
          <div className="flex items-center" style={{ gap: 8 * s, marginTop: 10 * s }}>
            <span
              style={{
                background: p.accent,
                color: p.bg,
                fontSize: 6 * s,
                fontWeight: 700,
                padding: `${5 * s}px ${14 * s}px`,
                borderRadius: 999,
                boxShadow: `0 ${4 * s}px ${12 * s}px ${p.accent}33`,
              }}
            >
              Immerse
            </span>
            <span style={{ fontSize: 6 * s, color: p.accent2, fontWeight: 600 }}>
              Refraction index: 1.52
            </span>
          </div>
        </div>

        {/* Specular Edge Footer */}
        <div
          className="relative flex items-center justify-between"
          style={{
            fontSize: 5.5 * s,
            color: p.muted,
            borderTop: `1px solid color-mix(in srgb, ${p.ink} 10%, transparent)`,
            paddingTop: 4 * s,
          }}
        >
          <span>◈ TRANSLUCENT DEPTH</span>
          <span>◈ SPECULAR HIGHLIGHTS</span>
          <span style={{ color: p.accent }}>CALM LUXURY</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
