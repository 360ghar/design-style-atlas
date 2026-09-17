import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function PsychedelicMaximalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const pad = large ? 28 : 14;
  return (
    <Frame meta={meta} large={large}>
      <style>{`
        @keyframes pm-swirl { to { transform: rotate(360deg) scale(1.15); } }
        @keyframes pm-drift { 0%,100% { transform: translateY(-4px) rotate(-2deg); } 50% { transform: translateY(5px) rotate(2deg); } }
        @keyframes pm-marquee { to { transform: translateX(-50%); } }
        @media (prefers-reduced-motion: reduce) {
          .pm-swirl, .pm-drift, .pm-marquee-inner { animation: none !important; }
        }
      `}</style>
      <div className="flex h-full flex-col" style={{ background: p.bg, color: p.ink, fontFamily: p.body }}>
        {/* trippy nav */}
        <div className="flex items-center justify-between" style={{ padding: `${large ? 16 : 9}px ${pad}px` }}>
          <span style={{ fontFamily: p.display, fontSize: large ? 20 : 12, color: p.accent, transform: "rotate(-3deg)", textShadow: `0 0 18px ${p.accent}` }}>
            ✿ voyagé
          </span>
          <div className="flex items-center" style={{ gap: large ? 10 : 6 }}>
            {["Trip", "Lineup"].map((l) => (
              <span
                key={l}
                style={{
                  fontSize: large ? 11 : 7,
                  fontWeight: 800,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: p.ink,
                  border: `1.5px solid ${p.accent2}`,
                  borderRadius: 999,
                  padding: large ? "5px 12px" : "3px 8px",
                  boxShadow: `0 0 14px ${p.accent2}66`,
                }}
              >
                {l}
              </span>
            ))}
            <span
              style={{
                fontSize: large ? 11 : 7,
                fontWeight: 800,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: p.bg,
                background: `linear-gradient(90deg, ${p.accent}, ${p.accent2})`,
                borderRadius: 999,
                padding: large ? "6px 14px" : "4px 9px",
                boxShadow: `0 0 24px ${p.accent}88`,
              }}
            >
              Get tickets
            </span>
          </div>
        </div>

        {/* swirling hero with concentric gradients */}
        <div className="relative flex flex-1 items-center justify-center overflow-hidden text-center" style={{ padding: `0 ${pad}px` }}>
          <div
            className="pm-swirl absolute left-1/2 top-1/2"
            aria-hidden="true"
            style={{
              width: large ? 560 : 320,
              height: large ? 560 : 320,
              transform: "translate(-50%, -50%)",
              background: `repeating-radial-gradient(circle, ${p.accent}55 0 22px, ${p.accent2}44 22px 44px, ${p.surface} 44px 66px)`,
              borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
              filter: "blur(1px) saturate(1.3)",
              animation: "pm-swirl 14s cubic-bezier(0.37,0,0.63,1) infinite alternate",
              opacity: 0.85,
            }}
          />
          <div className="absolute inset-0" aria-hidden="true" style={{ background: `radial-gradient(ellipse at 50% 60%, transparent 30%, ${p.bg} 78%)` }} />
          <div className="relative">
            <div style={{ fontSize: large ? 11 : 7, fontWeight: 800, letterSpacing: "0.35em", color: p.accent2 }}>✿ 1967 → ∞ ✿</div>
            <div
              className="pm-drift"
              style={{
                fontFamily: p.display,
                fontSize: large ? 56 : 30,
                lineHeight: 0.95,
                color: p.ink,
                transform: "rotate(-3deg)",
                textShadow: `0 0 24px ${p.accent}, 3px 3px 0 ${p.accent2}`,
                animation: "pm-drift 8s cubic-bezier(0.37,0,0.63,1) infinite",
                margin: "6px 0",
              }}
            >
              cosmic
              <br />
              voyage
            </div>
            <div
              className="mx-auto"
              style={{
                maxWidth: large ? 340 : 210,
                background: `${p.surface}E6`,
                border: `2px solid ${p.accent}`,
                borderRadius: 24,
                padding: large ? "12px 18px" : "8px 12px",
                boxShadow: `0 0 24px ${p.accent}80, 0 8px 48px ${p.accent}33`,
              }}
            >
              <div style={{ fontSize: large ? 14 : 9, fontWeight: 700 }}>Liquid lights · 3 stages · all night</div>
              <div style={{ fontSize: large ? 12 : 8, color: p.muted, marginTop: 2 }}>A kaleidoscope poster you can walk inside.</div>
            </div>
          </div>
        </div>

        {/* marquee footer */}
        <div className="overflow-hidden" style={{ borderTop: `2px solid ${p.accent}`, background: p.surface, padding: large ? "10px 0" : "6px 0" }}>
          <div className="pm-marquee-inner flex whitespace-nowrap" style={{ animation: "pm-marquee 12s linear infinite", width: "max-content" }}>
            {[0, 1].map((n) => (
              <span key={n} style={{ fontFamily: p.display, fontSize: large ? 14 : 9, color: p.accent2, paddingRight: 24 }}>
                ✿ MELT INTO THE MUSIC ✿ LIQUID LIGHTS ✿ COSMIC VOYAGE ✿ MELT INTO THE MUSIC ✿ LIQUID LIGHTS ✿&nbsp;
              </span>
            ))}
          </div>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
