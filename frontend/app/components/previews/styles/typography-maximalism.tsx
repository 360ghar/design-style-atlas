import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function TypographyMaximalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
        {/* Typographic Baseline Folio */}
        <div
          className="flex items-center justify-between"
          style={{
            borderBottom: `2px solid ${p.ink}`,
            paddingBottom: 4 * s,
            fontSize: 6 * s,
            fontWeight: 800,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          <span style={{ color: p.accent }}>TYPO·MAX // MANIFESTO</span>
          <span>BASELINE GRID: 8PT</span>
          <span style={{ color: p.muted }}>NO CHROME</span>
        </div>

        {/* Wall-to-Wall Colossal Letterform Stack */}
        <div className="my-auto overflow-hidden">
          <div
            style={{
              fontFamily: p.display,
              fontSize: 22 * s,
              fontWeight: 900,
              lineHeight: 0.86,
              letterSpacing: "-0.05em",
              textTransform: "uppercase",
              color: p.ink,
            }}
          >
            TYPE IS
          </div>

          <div
            className="pv-outline-text"
            style={{
              fontFamily: p.display,
              fontSize: 22 * s,
              fontWeight: 900,
              lineHeight: 0.86,
              letterSpacing: "-0.05em",
              textTransform: "uppercase",
              color: p.accent,
            }}
          >
            THE IMAGE
          </div>

          <div
            style={{
              fontFamily: p.display,
              fontSize: 18 * s,
              fontWeight: 900,
              lineHeight: 0.88,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              color: p.accent,
              textShadow: `${3 * s}px ${3 * s}px 0 ${p.surface}`,
            }}
          >
            NOT THE CHROME
          </div>
        </div>

        {/* Micro-Typography Technical Legend */}
        <div
          style={{
            borderTop: `2px solid ${p.ink}`,
            paddingTop: 4 * s,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 5.5 * s,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: p.muted,
          }}
        >
          <span>ANTON / ARCHIVO BLACK 900</span>
          <span>HARD OFFSET DUPLICATES</span>
          <span style={{ color: p.accent }}>SCALE OVER ORNAMENT</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
