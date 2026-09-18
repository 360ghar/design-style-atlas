import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function ColorMaximalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
        {/* Saturated Dopamine Top Bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center" style={{ gap: 5 * s }}>
            <span
              style={{
                fontFamily: p.display,
                fontSize: 10 * s,
                fontWeight: 900,
                color: p.surface,
                background: p.accent,
                border: `2.5px solid ${p.ink}`,
                boxShadow: `${2 * s}px ${2 * s}px 0 ${p.ink}`,
                padding: `${1 * s}px ${8 * s}px`,
                textTransform: "uppercase",
              }}
            >
              DOPAMINE★2000
            </span>
            <span
              style={{
                background: p.accent2,
                color: p.surface,
                border: `2px solid ${p.ink}`,
                borderRadius: 999,
                fontSize: 6 * s,
                fontWeight: 900,
                padding: `${1 * s}px ${6 * s}px`,
              }}
            >
              SATURATION 100%
            </span>
          </div>
          <span
            style={{
              fontSize: 7 * s,
              fontWeight: 900,
              color: p.ink,
            }}
          >
            NO PASTELS ALLOWED ⚡
          </span>
        </div>

        {/* Central High-Intensity White Card with 6px Hard Black Shadow */}
        <div
          className="my-auto flex flex-col justify-between"
          style={{
            background: p.surface,
            border: `3px solid ${p.ink}`,
            borderRadius: 16 * s,
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
                Unapologetic Spectrum
              </div>
              <h3
                style={{
                  fontFamily: p.display,
                  fontSize: 13 * s,
                  fontWeight: 900,
                  color: p.ink,
                  lineHeight: 1.15,
                  margin: `${3 * s}px 0 0 0`,
                }}
              >
                Full-Spectrum Color Fields
              </h3>
            </div>
            <div
              style={{
                background: p.accent2,
                color: p.surface,
                border: `2px solid ${p.ink}`,
                boxShadow: `${2 * s}px ${2 * s}px 0 ${p.ink}`,
                fontFamily: p.display,
                fontWeight: 900,
                fontSize: 9 * s,
                padding: `${2 * s}px ${6 * s}px`,
                borderRadius: 6 * s,
                transform: "rotate(3deg)",
              }}
            >
              HOT!
            </div>
          </div>

          <p
            style={{
              fontSize: 7 * s,
              fontWeight: 600,
              color: p.muted,
              lineHeight: 1.4,
              margin: `${8 * s}px 0`,
            }}
          >
            Vivid yellow ground colliding with electric magenta actions, cobalt headers, and thick cartoon ink boundaries.
          </p>

          <div className="flex items-center justify-between">
            <span style={{ fontSize: 6.5 * s, fontWeight: 900, color: p.ink }}>
              High-Energy Stimulation
            </span>
            <button
              type="button"
              style={{
                background: p.accent,
                color: p.surface,
                border: `2.5px solid ${p.ink}`,
                borderRadius: 8 * s,
                boxShadow: `${3 * s}px ${3 * s}px 0 ${p.ink}`,
                fontFamily: p.display,
                fontWeight: 900,
                fontSize: 7 * s,
                padding: `${4 * s}px ${14 * s}px`,
                cursor: "pointer",
              }}
            >
              PUMP COLOR ⚡
            </button>
          </div>
        </div>

        {/* Footer Rainbow Strip */}
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
          <span>✦ SOLAR YELLOW GROUND</span>
          <span>✦ NEON PINK ACCENT</span>
          <span>✦ ELECTRIC COBALT</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
