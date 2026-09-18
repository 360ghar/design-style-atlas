import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function FashionEditorialPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
        {/* Runway Atelier Top Folio */}
        <div
          className="flex items-center justify-between"
          style={{
            fontSize: 5.5 * s,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: p.muted,
          }}
        >
          <span>Collection Automne · Hiver</span>
          <span>Look N° 04</span>
          <span>Paris · Milan</span>
        </div>

        {/* Towering Didot Fashion Headline & Silent Plaque */}
        <div
          className="my-auto flex flex-col justify-between"
          style={{
            background: p.surface,
            border: `1px solid ${p.ink}18`,
            padding: `${16 * s}px ${18 * s}px`,
            position: "relative",
          }}
        >
          <div>
            <div
              style={{
                fontSize: 6 * s,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: p.accent2,
                marginBottom: 3 * s,
              }}
            >
              Silhouette &amp; Structure
            </div>
            <h1
              style={{
                fontFamily: p.display,
                fontSize: 18 * s,
                fontWeight: 400,
                color: p.ink,
                letterSpacing: "-0.01em",
                lineHeight: 1.05,
                margin: 0,
              }}
            >
              L’Élégance Noire
            </h1>
            <div
              style={{
                fontSize: 6.5 * s,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: p.muted,
                marginTop: 4 * s,
              }}
            >
              Tailored Double-Breasted Wool Coat · Calibre 12
            </div>
          </div>

          <div
            className="flex items-center justify-between"
            style={{
              marginTop: 12 * s,
              paddingTop: 8 * s,
              borderTop: `1px solid ${p.ink}15`,
            }}
          >
            <div style={{ fontSize: 6 * s, color: p.muted, letterSpacing: "0.1em" }}>
              Maison de Couture · Atelier Vendôme
            </div>
            <button
              type="button"
              style={{
                background: "transparent",
                color: p.ink,
                border: `1px solid ${p.ink}`,
                borderRadius: 0,
                fontSize: 5.5 * s,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                padding: `${3 * s}px ${10 * s}px`,
                cursor: "pointer",
              }}
            >
              Découvrir la Silhouette
            </button>
          </div>
        </div>

        {/* Runway Footer Ticks */}
        <div
          className="flex items-center justify-between"
          style={{
            fontSize: 5.5 * s,
            color: p.muted,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          <span>Figure 04 / 32</span>
          <span>Photographie de Studio</span>
          <span>Édition Limitée</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
