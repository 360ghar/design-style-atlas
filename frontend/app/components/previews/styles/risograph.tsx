import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function RisographPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
        {/* Riso Studio Header with Registration Marks */}
        <div className="flex items-center justify-between">
          <div className="flex items-center" style={{ gap: 6 * s }}>
            <span
              style={{
                fontFamily: p.display,
                fontSize: 10 * s,
                fontWeight: 900,
                color: p.accent,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              RISO★STUDIO
            </span>
            <span
              style={{
                fontSize: 6 * s,
                fontWeight: 700,
                color: p.accent2,
                border: `1px solid ${p.accent2}`,
                padding: `${1 * s}px ${6 * s}px`,
                borderRadius: 3 * s,
              }}
            >
              2-DRUM SPOT PRINT
            </span>
          </div>
          {/* Registration Crosshair Motif */}
          <div
            style={{
              fontFamily: "monospace",
              fontSize: 8 * s,
              color: p.muted,
              fontWeight: 700,
            }}
          >
            ⌖ REG: 0.8MM
          </div>
        </div>

        {/* Central Misregistered Soy-Ink Print Specimen Card */}
        <div
          className="my-auto flex flex-col justify-between"
          style={{
            background: p.surface,
            border: `2px solid ${p.ink}`,
            borderRadius: 6 * s,
            padding: `${12 * s}px ${14 * s}px`,
            position: "relative",
          }}
        >
          {/* Simulated 3px Riso Misregistration Shadow Layer */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              border: `2px solid ${p.accent2}`,
              borderRadius: 6 * s,
              transform: `translate(${3 * s}px, ${3 * s}px)`,
              zIndex: 0,
              opacity: 0.6,
            }}
          />

          <div style={{ position: "relative", zIndex: 1 }}>
            <div
              style={{
                fontSize: 6 * s,
                fontWeight: 800,
                color: p.accent,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Fluorescent Orange + Federal Blue
            </div>
            <h3
              style={{
                fontFamily: p.display,
                fontSize: 14 * s,
                fontWeight: 900,
                color: p.ink,
                lineHeight: 1.15,
                margin: `${3 * s}px 0 0 0`,
                textShadow: `${2 * s}px ${1 * s}px 0 ${p.accent}55`,
              }}
            >
              Soy-Ink Halftone &amp; Layer Shifts
            </h3>
            <p
              style={{
                fontSize: 6.5 * s,
                color: p.muted,
                lineHeight: 1.45,
                margin: `${6 * s}px 0 0 0`,
              }}
            >
              Tactile warm paper grain, deliberate mechanical layer misregistration, and limited drum spot color alchemy.
            </p>
          </div>

          <div
            className="flex items-center justify-between"
            style={{
              marginTop: 10 * s,
              paddingTop: 6 * s,
              borderTop: `1px solid ${p.ink}18`,
              position: "relative",
              zIndex: 1,
            }}
          >
            <span style={{ fontSize: 6 * s, fontWeight: 700, color: p.muted }}>
              Edition of 150 · Hand-Numbered
            </span>
            <button
              type="button"
              style={{
                background: p.accent,
                color: p.surface,
                border: `1.5px solid ${p.ink}`,
                borderRadius: 4 * s,
                boxShadow: `${2 * s}px ${2 * s}px 0 ${p.accent2}`,
                fontFamily: p.display,
                fontWeight: 900,
                fontSize: 6.5 * s,
                padding: `${3 * s}px ${10 * s}px`,
                cursor: "pointer",
              }}
            >
              PULL PROOF →
            </button>
          </div>
        </div>

        {/* Footer Press Sheet Specs */}
        <div
          className="flex items-center justify-between"
          style={{
            borderTop: `1px solid ${p.ink}22`,
            paddingTop: 4 * s,
            fontSize: 5.5 * s,
            fontWeight: 700,
            textTransform: "uppercase",
            color: p.muted,
          }}
        >
          <span>✦ RISOGRAPH GR3770</span>
          <span>✦ SOY-BASED EMULSION</span>
          <span style={{ color: p.accent }}>✦ FLUO ORANGE / FED BLUE</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
