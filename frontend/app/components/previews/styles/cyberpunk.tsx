import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function CyberpunkPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const s = large ? 1.6 : 1;

  return (
    <Frame meta={meta} large={large}>
      <div
        className="flex h-full flex-col justify-between"
        style={{
          background: p.bg,
          color: p.ink,
          fontFamily: p.body,
          padding: `${12 * s}px ${14 * s}px`,
        }}
      >
        {/* Cyberpunk High-Voltage Cyberdeck Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center" style={{ gap: 5 * s }}>
            <span
              style={{
                fontFamily: p.display,
                fontSize: 11 * s,
                fontWeight: 900,
                color: p.bg,
                background: p.accent,
                padding: `${1 * s}px ${8 * s}px`,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                clipPath: "polygon(0 0, 100% 0, 88% 100%, 0 100%)",
              }}
            >
              ARASAKA★NET
            </span>
            <span
              style={{
                background: `${p.accent2}18`,
                color: p.accent2,
                border: `1px solid ${p.accent2}`,
                fontSize: 6 * s,
                fontWeight: 800,
                padding: `${1 * s}px ${6 * s}px`,
                boxShadow: `0 0 ${8 * s}px ${p.accent2}66`,
              }}
            >
              ICE: BYPASSED
            </span>
          </div>
          <span style={{ fontSize: 6.5 * s, color: p.accent, fontFamily: p.display, fontWeight: 700 }}>
            NEURAL LINK 99% ⚡
          </span>
        </div>

        {/* Central Neon-Bleed Cyber-Chamfer Card */}
        <div
          className="my-auto flex flex-col justify-between"
          style={{
            background: p.surface,
            border: `1.5px solid ${p.accent2}`,
            boxShadow: `0 0 ${20 * s}px ${p.accent2}33, 0 0 ${40 * s}px ${p.bg}`,
            padding: `${12 * s}px ${14 * s}px`,
            position: "relative",
          }}
        >
          <div className="flex items-start justify-between">
            <div>
              <div
                style={{
                  fontSize: 6 * s,
                  fontWeight: 800,
                  color: p.accent,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                }}
              >
                Night City Sub-Net · Sector 04
              </div>
              <h3
                style={{
                  fontFamily: p.display,
                  fontSize: 14 * s,
                  fontWeight: 900,
                  color: p.ink,
                  textShadow: `0 0 ${10 * s}px ${p.accent2}`,
                  lineHeight: 1.15,
                  margin: `${3 * s}px 0 0 0`,
                }}
              >
                High-Tech Low-Life Chrome
              </h3>
            </div>
            <div
              style={{
                background: p.accent,
                color: p.bg,
                fontFamily: p.display,
                fontWeight: 900,
                fontSize: 8 * s,
                padding: `${2 * s}px ${6 * s}px`,
              }}
            >
              OVERCLOCK
            </div>
          </div>

          <p
            style={{
              fontSize: 6.5 * s,
              color: p.muted,
              lineHeight: 1.45,
              margin: `${8 * s}px 0`,
            }}
          >
            Acid yellow telemetry, rain-slick cyan keylines, hazard chevrons, and neural interface data streams.
          </p>

          <div
            className="flex items-center justify-between"
            style={{
              borderTop: `1px solid ${p.accent2}33`,
              paddingTop: 6 * s,
            }}
          >
            <span style={{ fontSize: 6 * s, color: p.muted, fontFamily: "monospace" }}>
              DECK: MILITECH PARALINE // V7
            </span>
            <button
              type="button"
              style={{
                background: p.accent,
                color: p.bg,
                border: "none",
                fontFamily: p.display,
                fontSize: 6.5 * s,
                fontWeight: 900,
                padding: `${4 * s}px ${14 * s}px`,
                cursor: "pointer",
                boxShadow: `0 0 ${12 * s}px ${p.accent}`,
              }}
            >
              JACK IN ⏵
            </button>
          </div>
        </div>

        {/* Footer Dystopian Strip */}
        <div
          className="flex items-center justify-between"
          style={{
            borderTop: `1px solid ${p.accent2}44`,
            paddingTop: 4 * s,
            fontSize: 5.5 * s,
            fontWeight: 800,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: p.muted,
          }}
        >
          <span>✦ ACID YELLOW ACCENT</span>
          <span>✦ NEON BLEED GLOW</span>
          <span style={{ color: p.accent2 }}>✦ ZERO PASTEL RETREAT</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
