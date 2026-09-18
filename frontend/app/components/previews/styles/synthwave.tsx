import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function SynthwavePreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Outrun Wireframe Horizon Grid Floor */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0"
          style={{
            height: "45%",
            backgroundImage: `linear-gradient(${p.accent}44 1px, transparent 1px), linear-gradient(90deg, ${p.accent}44 1px, transparent 1px)`,
            backgroundSize: `${26 * s}px ${14 * s}px`,
            transform: "perspective(180px) rotateX(60deg)",
            transformOrigin: "bottom",
          }}
        />

        {/* Laser Status HUD Header */}
        <div className="flex items-center justify-between" style={{ position: "relative", zIndex: 1 }}>
          <div className="flex items-center" style={{ gap: 5 * s }}>
            <span
              style={{
                fontFamily: p.display,
                fontSize: 10 * s,
                fontWeight: 900,
                color: p.accent,
                textShadow: `0 0 ${10 * s}px ${p.accent}`,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              SYNTH★WAVE
            </span>
            <span
              style={{
                background: `${p.accent2}22`,
                color: p.accent2,
                border: `1px solid ${p.accent2}`,
                borderRadius: 999,
                fontSize: 6 * s,
                fontWeight: 800,
                padding: `${1 * s}px ${8 * s}px`,
                boxShadow: `0 0 ${8 * s}px ${p.accent2}66`,
              }}
            >
              OUTRUN SPEEDWAY
            </span>
          </div>
          <span
            style={{
              fontSize: 7 * s,
              fontFamily: p.display,
              fontWeight: 900,
              color: p.accent2,
              textShadow: `0 0 ${8 * s}px ${p.accent2}`,
            }}
          >
            140 KM/H ⚡
          </span>
        </div>

        {/* Central Vector Drive Deck with Pulsing Sun Halo */}
        <div
          className="my-auto flex flex-col justify-between"
          style={{
            background: `${p.surface}E6`,
            borderRadius: 14 * s,
            border: `1.5px solid ${p.accent}`,
            boxShadow: `0 0 ${26 * s}px ${p.accent}44, 0 0 ${50 * s}px ${p.bg}`,
            padding: `${12 * s}px ${14 * s}px`,
            position: "relative",
            zIndex: 1,
          }}
        >
          <div className="flex items-start justify-between">
            <div>
              <div
                style={{
                  fontSize: 6 * s,
                  fontWeight: 800,
                  color: p.accent2,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                }}
              >
                Night-Drive Vector Horizon
              </div>
              <h3
                style={{
                  fontFamily: p.display,
                  fontSize: 14 * s,
                  fontWeight: 900,
                  color: p.ink,
                  textShadow: `0 0 ${12 * s}px ${p.accent}`,
                  lineHeight: 1.15,
                  margin: `${3 * s}px 0 0 0`,
                }}
              >
                Analog Synth Glow &amp; Chrome Suns
              </h3>
            </div>

            {/* Glowing Neon Sun Disc */}
            <div
              style={{
                width: 30 * s,
                height: 30 * s,
                borderRadius: "50%",
                background: `linear-gradient(180deg, ${p.accent2}, ${p.accent})`,
                boxShadow: `0 0 ${20 * s}px ${p.accent}, 0 0 ${40 * s}px ${p.accent2}`,
              }}
            />
          </div>

          <p
            style={{
              fontSize: 6.5 * s,
              color: p.muted,
              lineHeight: 1.45,
              margin: `${8 * s}px 0`,
            }}
          >
            High-voltage outrun wireframe perspective, pulsing solar halos, and retro-futuristic driving synth urgency.
          </p>

          <div
            className="flex items-center justify-between"
            style={{
              borderTop: `1px solid ${p.accent}33`,
              paddingTop: 6 * s,
            }}
          >
            <span style={{ fontSize: 6 * s, color: p.muted, fontFamily: "monospace" }}>
              BPM: 128 · ANALOG ARP: ON
            </span>
            <button
              type="button"
              style={{
                background: p.accent,
                color: p.ink,
                border: "none",
                borderRadius: 999,
                fontFamily: p.display,
                fontSize: 6.5 * s,
                fontWeight: 900,
                padding: `${3 * s}px ${14 * s}px`,
                cursor: "pointer",
                boxShadow: `0 0 ${12 * s}px ${p.accent}`,
              }}
            >
              TURBO DRIVE ⏵
            </button>
          </div>
        </div>

        {/* Footer Night-Drive Strip */}
        <div
          className="flex items-center justify-between"
          style={{
            borderTop: `1px solid ${p.accent}44`,
            paddingTop: 4 * s,
            fontSize: 5.5 * s,
            fontWeight: 800,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: p.muted,
            position: "relative",
            zIndex: 1,
          }}
        >
          <span>✦ PERSPECTIVE WIREFRAME</span>
          <span>✦ CHROME SUN HALO</span>
          <span style={{ color: p.accent2 }}>✦ OUTRUN SPEED</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
