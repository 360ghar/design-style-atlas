import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function HolographicPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const s = large ? 1.6 : 1;
  const bg = p.bg;
  const surface = p.surface;
  const ink = p.ink;
  const muted = p.muted;
  const accent = p.accent;
  const accent2 = p.accent2;
  const display = "Unbounded, Outfit, sans-serif";
  const body = "Outfit, Inter, sans-serif";
  const foil = `conic-gradient(from 210deg, ${accent2}, ${ink}, ${accent}, ${muted}, ${accent2})`;
  const sheen = `linear-gradient(105deg, transparent 30%, ${ink}55 46%, ${accent}66 50%, transparent 62%)`;

  return (
    <Frame meta={meta} large={large}>
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: `radial-gradient(circle at 50% 0%, ${surface}, ${bg} 72%)`,
          color: ink,
          fontFamily: body,
          overflow: "hidden",
        }}
      >
        {/* iridescent nav */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: large ? "10px 14px" : "6px 8px",
            borderBottom: `1px solid ${muted}44`,
            background: `${bg}CC`,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: large ? 7 : 5 }}>
            <span
              style={{
                width: large ? 16 : 11,
                height: large ? 16 : 11,
                borderRadius: 5,
                background: foil,
                padding: 1.5,
                display: "inline-block",
              }}
            >
              <span style={{ display: "block", width: "100%", height: "100%", borderRadius: 4, background: bg }} />
            </span>
            <span style={{ fontFamily: display, fontWeight: 800, fontSize: large ? 10 : 7, letterSpacing: "0.12em" }}>
              PRISM
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: large ? 6 : 4 }}>
            <span
              style={{
                fontSize: large ? 7 : 5,
                fontWeight: 700,
                letterSpacing: "0.12em",
                color: accent,
                border: `1px solid ${accent}66`,
                borderRadius: 999,
                padding: large ? "3px 8px" : "2px 6px",
              }}
            >
              DROP 001 · LIVE
            </span>
            <span
              style={{
                fontSize: large ? 7 : 5,
                fontWeight: 800,
                color: bg,
                background: `linear-gradient(90deg, ${accent}, ${ink}, ${accent2})`,
                borderRadius: 999,
                padding: large ? "4px 9px" : "3px 6px",
              }}
            >
              MINT
            </span>
          </div>
        </div>

        {/* prism hero card */}
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: large ? 14 : 8,
          }}
        >
          <div
            style={{
              width: large ? "58%" : "56%",
              aspectRatio: "8/5",
              borderRadius: large ? 20 : 14,
              background: foil,
              padding: 1.5,
              boxShadow: `0 12px 48px ${accent}40`,
              transform: "rotate(-4deg)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                background: `${bg}F2`,
                borderRadius: large ? 19 : 13,
                height: "100%",
                padding: large ? 12 : 8,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: sheen,
                  pointerEvents: "none",
                }}
              />
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: large ? 7 : 5, color: muted, letterSpacing: "0.14em", fontWeight: 700 }}>
                <span>HOLO · 001/100</span>
                <span style={{ color: accent }}>❖ SEALED</span>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: display,
                    fontWeight: 800,
                    fontSize: large ? 26 : 15,
                    lineHeight: 1,
                    background: `linear-gradient(100deg, ${accent} 5%, ${ink} 38%, ${accent2} 68%, ${accent} 95%)`,
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  CHROMA
                </div>
                <div style={{ fontSize: large ? 8 : 5.5, color: muted, marginTop: large ? 5 : 3 }}>
                  Foil shifts with light. Tilt to reveal.
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontFamily: "monospace", fontSize: large ? 7.5 : 5, color: accent, letterSpacing: "0.18em" }}>
                  ◍ ◍ ◍ ◍
                </span>
                <span style={{ fontSize: large ? 7 : 5, fontWeight: 700, color: ink, letterSpacing: "0.1em" }}>
                  CHROME · <span style={{ color: accent2 }}>FOIL</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* foil CTA footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 8,
            padding: large ? "10px 14px" : "6px 8px",
            borderTop: `1px solid ${muted}44`,
            background: surface,
          }}
        >
          <span style={{ fontSize: large ? 7.5 : 5.5, color: muted, letterSpacing: "0.08em" }}>
            1 FOIL MOMENT / VIEW
          </span>
          <span
            style={{
              fontSize: large ? 8 : 5.5,
              fontWeight: 800,
              letterSpacing: "0.06em",
              color: bg,
              background: `linear-gradient(90deg, ${accent}, ${ink} 50%, ${accent2})`,
              borderRadius: 999,
              padding: large ? "6px 14px" : "4px 9px",
            }}
          >
            CLAIM FOIL →
          </span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
