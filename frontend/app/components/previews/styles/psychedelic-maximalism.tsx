import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function PsychedelicMaximalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
        {/* Neon Trip Top Banner */}
        <div className="flex items-center justify-between">
          <div className="flex items-center" style={{ gap: 5 * s }}>
            <span
              style={{
                fontFamily: p.display,
                fontSize: 10 * s,
                fontWeight: 900,
                color: p.accent,
                textShadow: `0 0 ${10 * s}px ${p.accent}`,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              ASTRAL★PLANE
            </span>
            <span
              style={{
                background: `${p.accent2}22`,
                color: p.accent2,
                border: `1px solid ${p.accent2}`,
                borderRadius: 999,
                fontSize: 6 * s,
                fontWeight: 800,
                padding: `${1 * s}px ${6 * s}px`,
                boxShadow: `0 0 ${8 * s}px ${p.accent2}66`,
              }}
            >
              LIQUID LIGHT
            </span>
          </div>
          <span
            style={{
              fontSize: 6.5 * s,
              color: p.accent2,
              fontFamily: p.display,
              textShadow: `0 0 ${6 * s}px ${p.accent2}`,
            }}
          >
            TRIP 09 ✺
          </span>
        </div>

        {/* Central Fluid Melting Blob Card */}
        <div
          className="my-auto flex flex-col justify-between"
          style={{
            background: p.surface,
            borderRadius: `${24 * s}px ${12 * s}px ${28 * s}px ${14 * s}px`,
            border: `2px solid ${p.accent}`,
            boxShadow: `0 0 ${20 * s}px ${p.accent}55, 0 0 ${40 * s}px ${p.accent2}33`,
            padding: `${14 * s}px ${16 * s}px`,
            position: "relative",
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
                Kaleidoscopic Vision · 1967
              </div>
              <h3
                style={{
                  fontFamily: p.display,
                  fontSize: 15 * s,
                  fontWeight: 900,
                  color: p.ink,
                  textShadow: `0 0 ${12 * s}px ${p.accent}`,
                  lineHeight: 1.1,
                  margin: `${3 * s}px 0 0 0`,
                }}
              >
                Melting Type &amp; Liquid Light
              </h3>
            </div>
            <div
              className="pv-spin-slow"
              style={{
                fontSize: 16 * s,
                color: p.accent2,
                textShadow: `0 0 ${12 * s}px ${p.accent2}`,
              }}
            >
              🌀
            </div>
          </div>

          <p
            style={{
              fontSize: 7 * s,
              color: p.muted,
              lineHeight: 1.5,
              margin: `${8 * s}px 0`,
            }}
          >
            Organic fluid curves, hallucinogenic neon blooms, and molten letterforms in continuous psychedelic drift.
          </p>

          <div
            className="flex items-center justify-between"
            style={{
              borderTop: `1px solid ${p.accent}44`,
              paddingTop: 8 * s,
            }}
          >
            <span style={{ fontSize: 6.5 * s, color: p.accent2, fontWeight: 700 }}>
              Cosmic Frequency: 432Hz
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
                padding: `${4 * s}px ${14 * s}px`,
                cursor: "pointer",
                boxShadow: `0 0 ${14 * s}px ${p.accent}`,
              }}
            >
              Enter The Void ✦
            </button>
          </div>
        </div>

        {/* Footer Neon Strip */}
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
          }}
        >
          <span>✦ NEON MAGENTA BLOOM</span>
          <span>✦ ORGANIC BLOB EDGES</span>
          <span style={{ color: p.accent2 }}>✦ ZERO BLACK SHADOWS</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
