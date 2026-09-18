import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function EightiesRetroPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
        {/* Outrun Perspective Floor Lines */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0"
          style={{
            height: "40%",
            backgroundImage: `linear-gradient(${p.accent2}33 1px, transparent 1px), linear-gradient(90deg, ${p.accent2}33 1px, transparent 1px)`,
            backgroundSize: `${24 * s}px ${14 * s}px`,
            transform: "perspective(200px) rotateX(60deg)",
            transformOrigin: "bottom",
            opacity: 0.6,
          }}
        />

        {/* VHS Top Status Banner */}
        <div className="flex items-center justify-between" style={{ position: "relative", zIndex: 1 }}>
          <div className="flex items-center" style={{ gap: 5 * s }}>
            <span
              style={{
                fontFamily: p.display,
                fontSize: 10 * s,
                fontWeight: 900,
                color: p.accent,
                textShadow: `0 0 ${10 * s}px ${p.accent}`,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              PALMS★84
            </span>
            <span
              style={{
                background: `${p.accent2}18`,
                color: p.accent2,
                border: `1px solid ${p.accent2}`,
                borderRadius: 4 * s,
                fontSize: 6 * s,
                fontWeight: 800,
                padding: `${1 * s}px ${6 * s}px`,
              }}
            >
              ⏵ PLAY [SP]
            </span>
          </div>
          <span style={{ fontSize: 6.5 * s, color: p.accent, fontFamily: "monospace", fontWeight: 700 }}>
            ● REC 0:42:17
          </span>
        </div>

        {/* Central Outrun Sunset Sun & Chrome Card */}
        <div
          className="my-auto flex flex-col justify-between"
          style={{
            background: `${p.surface}DD`,
            borderRadius: 12 * s,
            border: `1.5px solid ${p.accent}`,
            boxShadow: `0 0 ${24 * s}px ${p.accent}55, 0 0 ${40 * s}px ${p.bg}`,
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
                Miami Midnight Drive
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
                Neon Keylines &amp; Grid Horizons
              </h3>
            </div>

            {/* Blinds-Cut Neon Sun */}
            <div
              style={{
                width: 32 * s,
                height: 32 * s,
                borderRadius: "50%",
                background: `linear-gradient(180deg, ${p.accent2}, ${p.accent})`,
                boxShadow: `0 0 ${16 * s}px ${p.accent}`,
                position: "relative",
                overflow: "hidden",
              }}
            >
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: `${4 + i * 5}px`,
                    height: `${2 + i}px`,
                    background: p.bg,
                  }}
                />
              ))}
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
            Hot pink specular glows, perspective grid lines plunging into the dark horizon, and analog synthesizer power.
          </p>

          <div
            className="flex items-center justify-between"
            style={{
              borderTop: `1px solid ${p.accent}33`,
              paddingTop: 6 * s,
            }}
          >
            <span style={{ fontSize: 6 * s, color: p.muted, fontFamily: "monospace" }}>
              SYNTH-TRACK: NIGHTCALL.MID
            </span>
            <button
              type="button"
              style={{
                background: p.accent,
                color: p.bg,
                border: "none",
                borderRadius: 999,
                fontSize: 6.5 * s,
                fontWeight: 900,
                padding: `${3 * s}px ${12 * s}px`,
                cursor: "pointer",
                boxShadow: `0 0 ${12 * s}px ${p.accent}`,
              }}
            >
              IGNITE DRIVE →
            </button>
          </div>
        </div>

        {/* Footer VHS Scanline Strip */}
        <div
          className="flex items-center justify-between"
          style={{
            borderTop: `1px solid ${p.accent2}44`,
            paddingTop: 4 * s,
            fontSize: 5.5 * s,
            fontWeight: 800,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: p.muted,
            position: "relative",
            zIndex: 1,
          }}
        >
          <span>✦ VHS HI-FI STEREO</span>
          <span>✦ 3D PERSPECTIVE GRID</span>
          <span style={{ color: p.accent2 }}>✦ OUTRUN GLOW</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
