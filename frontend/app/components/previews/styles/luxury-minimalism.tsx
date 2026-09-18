import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function LuxuryMinimalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
          padding: `${16 * s}px ${18 * s}px`,
        }}
      >
        {/* Top Whispered Folio */}
        <div
          className="flex items-center justify-between"
          style={{
            fontSize: 5.5 * s,
            color: p.muted,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
          }}
        >
          <span>Maison de Haute Horlogerie</span>
          <span>Genève · N° 08</span>
        </div>

        {/* Central Gold Hairline Frame Plaque */}
        <div
          className="my-auto flex flex-col justify-between"
          style={{
            background: p.surface,
            border: `1px solid ${p.accent}55`,
            borderRadius: 0,
            padding: `${14 * s}px ${16 * s}px`,
            position: "relative",
          }}
        >
          {/* Inner Hairline Inset */}
          <div
            className="pointer-events-none absolute inset-1"
            style={{ border: `1px solid ${p.accent}22` }}
          />

          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: 6 * s,
                color: p.accent,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                marginBottom: 4 * s,
              }}
            >
              Pièce Unique · MMXXIV
            </div>
            <h3
              style={{
                fontFamily: p.display,
                fontSize: 13 * s,
                fontWeight: 400,
                color: p.ink,
                letterSpacing: "0.06em",
                lineHeight: 1.2,
                margin: 0,
              }}
            >
              Chronomètre Souverain
            </h3>
            <div
              style={{
                fontSize: 6.5 * s,
                color: p.muted,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginTop: 4 * s,
              }}
            >
              Tourbillon Volant · Calibre 1401
            </div>
          </div>

          <div
            className="flex items-center justify-between"
            style={{
              marginTop: 10 * s,
              paddingTop: 8 * s,
              borderTop: `1px solid ${p.accent}2A`,
            }}
          >
            <span
              style={{
                fontSize: 6 * s,
                color: p.muted,
                letterSpacing: "0.1em",
              }}
            >
              Platinum 950 · Guilloché Main
            </span>
            <button
              type="button"
              style={{
                background: "transparent",
                color: p.accent,
                border: `1px solid ${p.accent}`,
                borderRadius: 0,
                fontSize: 5.5 * s,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                padding: `${3 * s}px ${10 * s}px`,
                cursor: "pointer",
              }}
            >
              Acquérir
            </button>
          </div>
        </div>

        {/* Footer Museum Cadence */}
        <div
          className="flex items-center justify-between"
          style={{
            fontSize: 5.5 * s,
            color: p.muted,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          <span>Sur Invitation Seulement</span>
          <span>Édition Limitée · 1/1</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
