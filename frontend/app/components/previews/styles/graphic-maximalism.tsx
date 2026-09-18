import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function GraphicMaximalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
          padding: `${10 * s}px ${12 * s}px`,
        }}
      >
        {/* Poster Exhibition Masthead */}
        <div className="flex items-center justify-between">
          <div className="flex items-center" style={{ gap: 6 * s }}>
            <span
              style={{
                fontFamily: p.display,
                fontSize: 10 * s,
                fontWeight: 900,
                color: p.surface,
                background: p.accent,
                border: `2px solid ${p.ink}`,
                boxShadow: `${2 * s}px ${2 * s}px 0 ${p.ink}`,
                padding: `${1 * s}px ${8 * s}px`,
                textTransform: "uppercase",
              }}
            >
              GRAPHISME★78
            </span>
            <span
              style={{
                background: p.accent2,
                color: p.surface,
                border: `2px solid ${p.ink}`,
                fontSize: 6 * s,
                fontWeight: 900,
                padding: `${1 * s}px ${6 * s}px`,
              }}
            >
              BOLOGNA BIENNALE
            </span>
          </div>
          <span style={{ fontSize: 6.5 * s, fontWeight: 900, color: p.ink }}>
            POSTER WALL ✺
          </span>
        </div>

        {/* Central Asymmetric Duotone Poster Frame with 6px Hard Offset */}
        <div
          className="my-auto flex flex-col justify-between"
          style={{
            background: p.surface,
            border: `3px solid ${p.ink}`,
            boxShadow: `${6 * s}px ${6 * s}px 0 ${p.ink}`,
            padding: `${12 * s}px ${14 * s}px`,
          }}
        >
          <div className="flex items-start justify-between">
            <div>
              <div
                style={{
                  fontSize: 6 * s,
                  fontWeight: 900,
                  color: p.accent,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                Duotone Geometry · Series IV
              </div>
              <h3
                style={{
                  fontFamily: p.display,
                  fontSize: 15 * s,
                  fontWeight: 900,
                  color: p.ink,
                  lineHeight: 1.1,
                  margin: `${3 * s}px 0 0 0`,
                  letterSpacing: "-0.02em",
                }}
              >
                Edge-to-Edge Visual Intensity
              </h3>
            </div>
            <div
              style={{
                width: 24 * s,
                height: 24 * s,
                background: p.accent,
                border: `2px solid ${p.ink}`,
                boxShadow: `${2 * s}px ${2 * s}px 0 ${p.ink}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: p.surface,
                fontFamily: p.display,
                fontWeight: 900,
                fontSize: 12 * s,
              }}
            >
              ▲
            </div>
          </div>

          <p
            style={{
              fontSize: 7 * s,
              fontWeight: 600,
              color: p.muted,
              lineHeight: 1.45,
              margin: `${8 * s}px 0`,
            }}
          >
            Screenprint misregistration, bold duotone shape fields, and oversized punchy display type spanning the entire canvas.
          </p>

          <div
            className="flex items-center justify-between"
            style={{
              borderTop: `2px solid ${p.ink}`,
              paddingTop: 6 * s,
            }}
          >
            <span style={{ fontSize: 6 * s, fontWeight: 900, color: p.accent2 }}>
              Spot Colors: 032 Red + Reflex Blue
            </span>
            <button
              type="button"
              style={{
                background: p.ink,
                color: p.surface,
                border: `2px solid ${p.ink}`,
                boxShadow: `${3 * s}px ${3 * s}px 0 ${p.accent}`,
                fontFamily: p.display,
                fontWeight: 900,
                fontSize: 7 * s,
                padding: `${4 * s}px ${12 * s}px`,
                cursor: "pointer",
              }}
            >
              VIEW SERIGRAPH →
            </button>
          </div>
        </div>

        {/* Footer Poster Strip */}
        <div
          className="flex items-center justify-between"
          style={{
            borderTop: `2.5px solid ${p.ink}`,
            paddingTop: 4 * s,
            fontSize: 5.5 * s,
            fontWeight: 900,
            textTransform: "uppercase",
            color: p.ink,
          }}
        >
          <span>✦ DUOTONE SHAPE WALL</span>
          <span>✦ 6PX HARD OFFSET</span>
          <span style={{ color: p.accent }}>✦ ZERO DELICATE HAIRLINES</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
