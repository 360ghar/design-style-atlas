import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function FuturismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
        {/* Speed-Worship Modernist Header */}
        <div className="flex items-start justify-between">
          <div>
            <div
              style={{
                fontFamily: p.display,
                fontSize: 15 * s,
                fontWeight: 900,
                lineHeight: 0.95,
                letterSpacing: "-0.04em",
                textTransform: "uppercase",
                color: p.ink,
              }}
            >
              Velocità &amp;
              <br />
              Dinamismo
            </div>
            <div
              style={{
                fontSize: 6 * s,
                fontWeight: 800,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: p.muted,
                marginTop: 3 * s,
              }}
            >
              Manifesto Futurista · 1909
            </div>
          </div>

          <div style={{ textAlign: "right" }}>
            <div
              style={{
                fontFamily: p.display,
                fontSize: 16 * s,
                fontWeight: 900,
                color: p.accent,
                lineHeight: 0.9,
              }}
            >
              &gt;&gt;&gt;
            </div>
            <div
              style={{
                fontSize: 6 * s,
                fontWeight: 800,
                color: p.accent2,
                textTransform: "uppercase",
              }}
            >
              MOMENTUM
            </div>
          </div>
        </div>

        {/* Diagonal Dynamic Motion Bars */}
        <div style={{ margin: `${6 * s}px 0` }}>
          <div style={{ height: 4 * s, background: p.ink, transform: "skewX(-15deg)" }} />
          <div style={{ height: 3 * s, background: p.accent, marginTop: 2 * s, transform: "skewX(-15deg)" }} />
        </div>

        {/* Machine-Age Diagonal Specimen Card */}
        <div
          className="my-auto flex flex-col justify-between"
          style={{
            background: p.surface,
            border: `2px solid ${p.ink}`,
            padding: `${12 * s}px ${14 * s}px`,
          }}
        >
          <div className="flex items-start justify-between">
            <div>
              <span
                style={{
                  fontSize: 6 * s,
                  fontWeight: 800,
                  color: p.accent,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                Macchina E Corsa
              </span>
              <h3
                style={{
                  fontFamily: p.display,
                  fontSize: 13 * s,
                  fontWeight: 900,
                  color: p.ink,
                  lineHeight: 1.15,
                  margin: `${2 * s}px 0 0 0`,
                }}
              >
                A Roaring Motor Car is More Beautiful Than the Victory of Samothrace
              </h3>
            </div>
            <span style={{ fontSize: 14 * s, color: p.accent2 }}>⚡</span>
          </div>

          <p
            style={{
              fontSize: 6.5 * s,
              color: p.muted,
              lineHeight: 1.45,
              margin: `${6 * s}px 0`,
            }}
          >
            Violent diagonal thrusts, machine speed vectoring, and aggressive rejection of antique museum stillness.
          </p>

          <div
            className="flex items-center justify-between"
            style={{
              borderTop: `1px solid ${p.ink}22`,
              paddingTop: 6 * s,
            }}
          >
            <span style={{ fontSize: 6 * s, fontWeight: 700, color: p.muted }}>
              F.T. Marinetti · Fondazione
            </span>
            <button
              type="button"
              style={{
                background: p.accent,
                color: p.surface,
                border: "none",
                fontFamily: p.display,
                fontSize: 6.5 * s,
                fontWeight: 900,
                padding: `${3 * s}px ${12 * s}px`,
                cursor: "pointer",
              }}
            >
              AVANTI! →
            </button>
          </div>
        </div>

        {/* Speed-Worship 0px Sharp Footer */}
        <div
          className="flex items-center justify-between"
          style={{
            borderTop: `2px solid ${p.ink}`,
            paddingTop: 4 * s,
            fontSize: 5.5 * s,
            fontWeight: 800,
            textTransform: "uppercase",
            color: p.muted,
          }}
        >
          <span>✦ 0PX SHARP — SPEED HAS NO CORNERS</span>
          <span>✦ SKEWED MOTION BARS</span>
          <span style={{ color: p.accent }}>✦ FORWARD VECTOR ONLY</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
