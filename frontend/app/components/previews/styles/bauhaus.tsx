import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function BauhausPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
        {/* Staatliches Bauhaus Weimar Folio */}
        <div className="flex items-center justify-between">
          <div className="flex items-center" style={{ gap: 6 * s }}>
            <span
              style={{
                fontFamily: p.display,
                fontSize: 10 * s,
                fontWeight: 900,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: p.ink,
              }}
            >
              BAUHAUS
            </span>
            <span
              style={{
                fontSize: 6 * s,
                fontWeight: 700,
                color: p.muted,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              WEIMAR · DESSAU
            </span>
          </div>
          <span style={{ fontSize: 6.5 * s, fontWeight: 700, color: p.ink }}>
            1919–1933
          </span>
        </div>

        {/* Primary Color Modernist Planes and Shapes */}
        <div
          className="my-auto flex items-center justify-between"
          style={{
            background: p.surface,
            border: `2px solid ${p.ink}`,
            padding: `${12 * s}px ${14 * s}px`,
          }}
        >
          {/* Asymmetric Typography Column */}
          <div className="flex-1 pr-3">
            <div
              style={{
                fontSize: 6 * s,
                fontWeight: 800,
                color: p.accent,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                marginBottom: 2 * s,
              }}
            >
              KUNST UND TECHNIK
            </div>
            <h3
              style={{
                fontFamily: p.display,
                fontSize: 13 * s,
                fontWeight: 800,
                lineHeight: 1.15,
                color: p.ink,
                letterSpacing: "-0.01em",
                margin: 0,
              }}
            >
              Eine Neue Einheit: Form Follows Function
            </h3>
            <p
              style={{
                fontSize: 6.5 * s,
                color: p.muted,
                lineHeight: 1.45,
                margin: `${5 * s}px 0 0 0`,
              }}
            >
              Geometric reduction to primary circle, square, and triangle across industrial materials.
            </p>
          </div>

          {/* Iconic Bauhaus Primary Geometry Lockup */}
          <div className="flex items-center" style={{ gap: 4 * s }}>
            {/* Red Circle */}
            <div
              style={{
                width: 22 * s,
                height: 22 * s,
                borderRadius: "50%",
                background: p.accent,
              }}
            />
            {/* Blue Square */}
            <div
              style={{
                width: 20 * s,
                height: 20 * s,
                background: p.accent2,
              }}
            />
            {/* Black Bar */}
            <div
              style={{
                width: 5 * s,
                height: 24 * s,
                background: p.ink,
              }}
            />
          </div>
        </div>

        {/* Strict Modernist Footer Rules */}
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
          <span>AUSSTELLUNG 1923</span>
          <span>WALTER GROPIUS · LEITUNG</span>
          <span style={{ color: p.accent }}>KATALOG NR. 01</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
