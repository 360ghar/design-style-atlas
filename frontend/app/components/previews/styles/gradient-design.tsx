import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function GradientDesignPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const s = large ? 1.6 : 1;
  const font = p.body;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col" style={{ background: p.bg, color: p.ink, fontFamily: font }}>
        {/* gradient nav pill */}
        <div style={{ padding: large ? "12px 16px 0" : "8px 10px 0" }}>
          <div
            className="mx-auto flex items-center justify-between"
            style={{
              maxWidth: 520,
              background: "color-mix(in srgb, ${p.ink} 8%, transparent)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid color-mix(in srgb, ${p.ink} 35%, transparent)",
              borderRadius: 999,
              padding: large ? "7px 8px 7px 14px" : "5px 6px 5px 10px",
            }}
          >
            <span style={{ fontWeight: 800, fontSize: large ? 13 : 8.5, letterSpacing: "-0.01em", background: "linear-gradient(90deg,${p.accent},${p.accent2})", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
              aurora
            </span>
            <span className="flex items-center" style={{ gap: large ? 12 : 7, color: p.muted, fontSize: large ? 10.5 : 6.5, fontWeight: 600 }}>
              <span>Fields</span>
              <span>Glow</span>
              <span>Drift</span>
            </span>
            <span
              style={{
                background: "linear-gradient(90deg,${p.accent},${p.accent2})",
                color: p.ink,
                borderRadius: 999,
                fontWeight: 700,
                fontSize: large ? 10.5 : 6.5,
                padding: large ? "6px 14px" : "4px 9px",
                boxShadow: "0 8px 28px color-mix(in srgb, ${p.accent} 45%, transparent), 0 4px 16px color-mix(in srgb, ${p.accent2} 25%, transparent)",
                cursor: "pointer",
              }}
            >
              Launch
            </span>
          </div>
        </div>

        {/* mesh-gradient hero + glass card */}
        <div className="relative flex-1 overflow-hidden" style={{ margin: large ? "12px 16px 0" : "8px 10px 0", borderRadius: large ? 24 : 16, border: "1px solid color-mix(in srgb, ${p.ink} 35%, transparent)", background: "radial-gradient(65% 85% at 18% 18%, color-mix(in srgb, ${p.accent} 85%, transparent), transparent 62%), radial-gradient(55% 75% at 82% 28%, color-mix(in srgb, ${p.accent2} 60%, transparent), transparent 60%), radial-gradient(75% 95% at 50% 108%, ${p.surface} 0%, transparent 70%), ${p.bg}" }}>
          <div className="gd-orb" style={{ position: "absolute", width: large ? 190 : 110, height: large ? 190 : 110, left: "-8%", top: "-14%", borderRadius: "50%", background: "color-mix(in srgb, ${p.accent} 55%, transparent)", filter: "blur(44px)", animation: "pv-drift 9s ease-in-out infinite" }} />
          <div className="gd-orb" style={{ position: "absolute", width: large ? 150 : 90, height: large ? 150 : 90, right: "-6%", top: "8%", borderRadius: "50%", background: "color-mix(in srgb, ${p.accent2} 42%, transparent)", filter: "blur(44px)", animation: "pv-drift 9s ease-in-out infinite reverse" }} />
          {/* light-leak streak */}
          <div style={{ position: "absolute", left: "8%", right: "8%", top: "12%", height: 1, background: "linear-gradient(90deg,transparent,color-mix(in srgb, ${p.ink} 70%, transparent),transparent)" }} />
          {/* grain 4% */}
          <svg aria-hidden="true" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.04 }}>
            <filter id="gd-grain"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" /></filter>
            <rect width="100%" height="100%" filter="url(#gd-grain)" />
          </svg>
          <div className="relative flex h-full flex-col items-center justify-center text-center" style={{ padding: large ? 18 : 10 }}>
            <p style={{ color: p.muted, fontSize: large ? 9.5 : 6, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" }}>Mesh · Aurora · Glow</p>
            <h3 style={{ margin: large ? "6px 0 8px" : "4px 0 6px", fontWeight: 800, lineHeight: 1.02, letterSpacing: "-0.02em", fontSize: large ? 34 : 19, textShadow: "0 0 26px color-mix(in srgb, ${p.accent} 55%, transparent), 0 0 44px color-mix(in srgb, ${p.accent2} 30%, transparent)" }}>
              Color in transition
            </h3>
            <div
              style={{
                background: "rgba(42,27,94,0.55)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid color-mix(in srgb, ${p.ink} 35%, transparent)",
                borderRadius: 24,
                padding: large ? "10px 18px" : "7px 12px",
                boxShadow: "0 20px 80px color-mix(in srgb, ${p.accent} 30%, transparent), 0 12px 40px color-mix(in srgb, ${p.accent2} 20%, transparent)",
              }}
            >
              <p style={{ fontSize: large ? 11.5 : 7, color: p.ink, fontWeight: 500 }}>Glass over mesh · drift 20s · one gradient story</p>
              <p style={{ marginTop: 3, fontSize: large ? 10 : 6, color: p.muted }}>Outfit 40–64px · glow-led hierarchy</p>
            </div>
          </div>
        </div>

        {/* swatch CTA footer */}
        <div className="flex items-center justify-between" style={{ padding: large ? "10px 18px 12px" : "7px 12px 8px" }}>
          <div className="flex items-center" style={{ gap: large ? 6 : 4 }}>
            {[p.bg, p.surface, p.ink, p.muted, p.accent, p.accent2].map((c) => (
              <span key={c} title={c} style={{ width: large ? 16 : 10, height: large ? 16 : 10, borderRadius: 999, background: c, border: "1px solid color-mix(in srgb, ${p.ink} 35%, transparent)", boxShadow: c === p.accent || c === p.accent2 ? `0 0 12px ${c}88` : "none" }} />
            ))}
          </div>
          <div className="flex items-center" style={{ gap: large ? 10 : 6 }}>
            <span style={{ color: p.muted, fontSize: large ? 10 : 6, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>Feel the drift</span>
            <span
              style={{
                background: "linear-gradient(90deg,${p.accent},${p.accent2})",
                color: p.ink,
                borderRadius: 999,
                fontWeight: 700,
                fontSize: large ? 11 : 6.5,
                padding: large ? "8px 18px" : "5px 11px",
                boxShadow: "0 8px 28px color-mix(in srgb, ${p.accent} 45%, transparent), 0 4px 16px color-mix(in srgb, ${p.accent2} 25%, transparent)",
                cursor: "pointer",
                minHeight: 28,
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              Start glowing →
            </span>
          </div>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
