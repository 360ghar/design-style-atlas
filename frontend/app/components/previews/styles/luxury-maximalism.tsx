import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function LuxuryMaximalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
          padding: `${14 * s}px ${16 * s}px`,
        }}
      >
        {/* Baroque Gold Filigree Header */}
        <div>
          <div className="flex items-center justify-between">
            <span
              style={{
                fontFamily: p.display,
                fontSize: 9 * s,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: p.accent,
              }}
            >
              Maison Impériale · Paris
            </span>
            <span
              style={{
                fontSize: 6 * s,
                letterSpacing: "0.15em",
                color: p.muted,
                textTransform: "uppercase",
              }}
            >
              Salon d’Or · MMXXIV
            </span>
          </div>

          <div
            style={{
              borderTop: `1px solid ${p.accent}`,
              borderBottom: `1px solid ${p.accent}`,
              height: 4 * s,
              margin: `${4 * s}px 0`,
            }}
          />
        </div>

        {/* Central Velvet Jewel-Box Salon Card with Gold Inner Glow */}
        <div
          className="my-auto flex flex-col justify-between"
          style={{
            background: p.surface,
            border: `1.5px solid ${p.accent}`,
            borderRadius: `${18 * s}px ${18 * s}px 4 * s 4 * s`,
            boxShadow: `0 ${10 * s}px ${30 * s}px ${p.bg}, inset 0 0 ${16 * s}px ${p.accent}22`,
            padding: `${14 * s}px ${16 * s}px`,
            position: "relative",
          }}
        >
          {/* Inner Filigree Border */}
          <div
            className="pointer-events-none absolute inset-1.5"
            style={{
              border: `1px solid ${p.accent}44`,
              borderRadius: `${14 * s}px ${14 * s}px 2 * s 2 * s`,
            }}
          />

          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: 6 * s,
                color: p.accent,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                marginBottom: 3 * s,
              }}
            >
              Haute Joaillerie &amp; Orfèvrerie
            </div>
            <h3
              style={{
                fontFamily: p.display,
                fontSize: 14 * s,
                fontWeight: 600,
                color: p.ink,
                letterSpacing: "0.04em",
                lineHeight: 1.2,
                margin: 0,
              }}
            >
              Baroque Opulence &amp; Gold Leaf
            </h3>
            <p
              style={{
                fontSize: 7 * s,
                color: p.muted,
                fontStyle: "italic",
                lineHeight: 1.5,
                margin: `${6 * s}px auto 0 auto`,
                maxWidth: "90%",
              }}
            >
              Deep velvet grounds, intricate double rules, and jewel-box density bathed in warm candlelight depth.
            </p>
          </div>

          <div
            className="flex items-center justify-between"
            style={{
              marginTop: 10 * s,
              paddingTop: 8 * s,
              borderTop: `1px solid ${p.accent}33`,
            }}
          >
            <span
              style={{
                fontSize: 6 * s,
                color: p.muted,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              Édition d’Exception · 1/1
            </span>
            <button
              type="button"
              style={{
                background: `linear-gradient(180deg, ${p.accent}, ${p.accent}CC)`,
                color: p.bg,
                border: `1px solid ${p.accent}`,
                borderRadius: 999,
                fontSize: 5.5 * s,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                padding: `${4 * s}px ${12 * s}px`,
                cursor: "pointer",
                fontWeight: 700,
                boxShadow: `0 0 ${12 * s}px ${p.accent}44`,
              }}
            >
              Accéder au Salon
            </button>
          </div>
        </div>

        {/* Footer Gold Cadence */}
        <div
          className="flex items-center justify-between"
          style={{
            borderTop: `1px solid ${p.accent}44`,
            paddingTop: 4 * s,
            fontSize: 5.5 * s,
            color: p.muted,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          <span>✦ DOUBLE GOLD RULES</span>
          <span>✦ CANDLELIGHT DEPTH</span>
          <span>✦ BAROQUE OPULENCE</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
