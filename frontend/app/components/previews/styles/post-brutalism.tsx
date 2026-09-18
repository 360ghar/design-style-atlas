import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function PostBrutalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
        {/* Refined Modular Header */}
        <div
          className="flex items-center justify-between"
          style={{
            borderBottom: `1.5px solid ${p.ink}`,
            paddingBottom: 6 * s,
          }}
        >
          <div className="flex items-center" style={{ gap: 6 * s }}>
            <span
              style={{
                fontFamily: p.display,
                fontSize: 9 * s,
                fontWeight: 700,
                color: p.ink,
                letterSpacing: "-0.01em",
              }}
            >
              Post·Brutalist Lab
            </span>
            <span
              style={{
                fontSize: 6 * s,
                fontWeight: 600,
                background: p.surface,
                border: `1px solid ${p.ink}`,
                borderRadius: 4 * s,
                padding: `${1 * s}px ${5 * s}px`,
              }}
            >
              SYS 03
            </span>
          </div>
          <span style={{ fontSize: 6.5 * s, color: p.muted, fontWeight: 500 }}>
            Structured / Refined
          </span>
        </div>

        {/* Central Refined Structural Card */}
        <div
          className="my-auto flex flex-col justify-between"
          style={{
            background: p.surface,
            border: `1.5px solid ${p.ink}`,
            borderRadius: 4 * s,
            padding: `${12 * s}px ${14 * s}px`,
          }}
        >
          <div className="flex items-start justify-between">
            <div>
              <div
                style={{
                  fontSize: 6 * s,
                  fontWeight: 600,
                  color: p.accent2,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                Architectural Grid
              </div>
              <h3
                style={{
                  fontFamily: p.display,
                  fontSize: 13 * s,
                  fontWeight: 700,
                  color: p.ink,
                  lineHeight: 1.2,
                  margin: `${3 * s}px 0 0 0`,
                  letterSpacing: "-0.02em",
                }}
              >
                Brutalism Softened by Editorial Order
              </h3>
            </div>
            <span
              style={{
                width: 8 * s,
                height: 8 * s,
                borderRadius: "50%",
                background: p.accent,
                display: "inline-block",
              }}
            />
          </div>

          <p
            style={{
              fontSize: 7 * s,
              color: p.muted,
              lineHeight: 1.5,
              margin: `${8 * s}px 0`,
            }}
          >
            Honest structural bones preserved, but paired with measured margins, refined Neue Haas type, and electric blue restraint.
          </p>

          <div
            className="flex items-center justify-between"
            style={{
              borderTop: `1px solid ${p.ink}15`,
              paddingTop: 8 * s,
            }}
          >
            <span style={{ fontSize: 6 * s, fontWeight: 600, color: p.muted }}>
              Plate 04 · Modularity
            </span>
            <button
              type="button"
              style={{
                background: p.accent,
                color: p.surface,
                border: `1.5px solid ${p.ink}`,
                borderRadius: 4 * s,
                boxShadow: `${3 * s}px ${3 * s}px 0 ${p.ink}`,
                fontSize: 6.5 * s,
                fontWeight: 600,
                padding: `${4 * s}px ${12 * s}px`,
                cursor: "pointer",
              }}
            >
              Explore Frame →
            </button>
          </div>
        </div>

        {/* Footer Technical Grid Note */}
        <div
          className="flex items-center justify-between"
          style={{
            borderTop: `1px solid ${p.ink}22`,
            paddingTop: 4 * s,
            fontSize: 5.5 * s,
            color: p.muted,
            letterSpacing: "0.05em",
          }}
        >
          <span>4PX FUNCTIONAL RADIUS</span>
          <span>1.5PX INK STRUCTURE</span>
          <span>RATIONED ACCENT</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
