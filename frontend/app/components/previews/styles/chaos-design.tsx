import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function ChaosDesignPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
        {/* Controlled Demolition Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center" style={{ gap: 5 * s }}>
            <span
              style={{
                fontFamily: p.display,
                fontSize: 10 * s,
                fontWeight: 900,
                color: p.surface,
                background: p.accent,
                padding: `${2 * s}px ${8 * s}px`,
                transform: "rotate(-2deg)",
                border: `2px solid ${p.ink}`,
                boxShadow: `${2 * s}px ${2 * s}px 0 ${p.ink}`,
              }}
            >
              CHAOS★CORP
            </span>
            <span
              style={{
                background: p.accent2,
                color: p.surface,
                fontSize: 6 * s,
                fontWeight: 900,
                padding: `${1 * s}px ${6 * s}px`,
                transform: "rotate(2.5deg)",
                border: `1.5px solid ${p.ink}`,
              }}
            >
              WARNING: COLLISION
            </span>
          </div>
          <span
            style={{
              fontSize: 6.5 * s,
              fontWeight: 800,
              color: p.ink,
              textDecoration: "line-through",
            }}
          >
            ORDER IS DEAD
          </span>
        </div>

        {/* Overlapping Colliding Chaos Card */}
        <div
          className="my-auto"
          style={{
            background: p.surface,
            border: `3px solid ${p.ink}`,
            boxShadow: `${5 * s}px ${5 * s}px 0 ${p.ink}`,
            padding: `${12 * s}px ${14 * s}px`,
            position: "relative",
          }}
        >
          {/* Taped Edge Decal */}
          <div
            style={{
              position: "absolute",
              top: -6 * s,
              left: 20 * s,
              background: `${p.accent}33`,
              color: p.ink,
              fontSize: 5.5 * s,
              fontWeight: 800,
              padding: `${1 * s}px ${12 * s}px`,
              borderLeft: `2px dashed ${p.ink}`,
              borderRight: `2px dashed ${p.ink}`,
              transform: "rotate(-1deg)",
            }}
          >
            {"// ART DIRECTED DEMOLITION"}
          </div>

          <h3
            style={{
              fontFamily: p.display,
              fontSize: 14 * s,
              fontWeight: 900,
              color: p.ink,
              lineHeight: 1.15,
              margin: `${4 * s}px 0 0 0`,
              transform: "rotate(0.5deg)",
            }}
          >
            Colliding Elements That Still Convert
          </h3>

          <p
            style={{
              fontSize: 6.5 * s,
              fontWeight: 600,
              color: p.muted,
              lineHeight: 1.45,
              margin: `${6 * s}px 0`,
            }}
          >
            Controlled anarchy: intentional rotations, overlapping washi-tape overlays, and deliberate tension across every coordinate.
          </p>

          <div className="flex items-center justify-between">
            <span
              style={{
                fontSize: 6 * s,
                fontWeight: 900,
                color: p.accent,
                background: `${p.accent}15`,
                padding: `${2 * s}px ${6 * s}px`,
              }}
            >
              ±3° MAX ROTATION
            </span>
            <button
              type="button"
              style={{
                background: p.accent,
                color: p.surface,
                border: `2px solid ${p.ink}`,
                boxShadow: `${3 * s}px ${3 * s}px 0 ${p.ink}`,
                fontFamily: p.display,
                fontWeight: 900,
                fontSize: 7 * s,
                padding: `${4 * s}px ${12 * s}px`,
                cursor: "pointer",
                transform: "rotate(-1.5deg)",
              }}
            >
              TRIGGER IMPACT →
            </button>
          </div>
        </div>

        {/* Footer Controlled Chaos Strip */}
        <div
          className="flex items-center justify-between"
          style={{
            borderTop: `2px solid ${p.ink}`,
            paddingTop: 4 * s,
            fontSize: 5.5 * s,
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
          }}
        >
          <span>✦ TAPED EDGES</span>
          <span>✦ COLLIDING WEIGHTS</span>
          <span style={{ color: p.accent }}>✦ ZERO ACCIDENTAL BUGS</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
