import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function EditorialMaximalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
        {/* Triple Print Masthead Rule */}
        <div>
          <div
            className="flex items-center justify-between"
            style={{
              fontSize: 6 * s,
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: p.muted,
              paddingBottom: 4 * s,
            }}
          >
            <span>PARIS · MILAN · NEW YORK</span>
            <span>VOL. 99 · SPECIAL ISSUE</span>
            <span>SEPTEMBER MCMXXIV</span>
          </div>

          <div
            style={{
              borderTop: `3px solid ${p.ink}`,
              borderBottom: `1px solid ${p.ink}`,
              padding: `${2 * s}px 0`,
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontFamily: p.display,
                fontSize: 16 * s,
                fontWeight: 900,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: p.ink,
                lineHeight: 1,
              }}
            >
              Haute Collage
            </div>
          </div>
        </div>

        {/* Central Asymmetric Collage Feature Block */}
        <div className="my-auto grid grid-cols-1 @sm:grid-cols-5" style={{ gap: 8 * s, alignItems: "center" }}>
          {/* Main Story Column */}
          <div className="col-span-1 @sm:col-span-3">
            <span
              style={{
                background: p.accent,
                color: p.surface,
                fontFamily: p.display,
                fontSize: 6 * s,
                fontWeight: 700,
                padding: `${1 * s}px ${6 * s}px`,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              COUTURE FEATURE
            </span>
            <h3
              style={{
                fontFamily: p.display,
                fontSize: 12 * s,
                fontWeight: 700,
                color: p.ink,
                lineHeight: 1.15,
                margin: `${4 * s}px 0 0 0`,
              }}
            >
              Layered Print &amp; Baroque Density
            </h3>
            <p
              style={{
                fontSize: 6.5 * s,
                color: p.muted,
                lineHeight: 1.45,
                margin: `${5 * s}px 0 0 0`,
              }}
            >
              Torn paper edges, dense multi-column captions, and high-fashion typographic collisions.
            </p>
          </div>

          {/* Hard-Offset Pullquote Block */}
          <div
            className="col-span-1 @sm:col-span-2"
            style={{
              background: p.surface,
              border: `2px solid ${p.ink}`,
              boxShadow: `${4 * s}px ${4 * s}px 0 ${p.ink}`,
              padding: `${8 * s}px ${10 * s}px`,
            }}
          >
            <div
              style={{
                fontFamily: p.display,
                fontSize: 8 * s,
                fontStyle: "italic",
                color: p.accent,
                lineHeight: 1.3,
              }}
            >
              “Every margin is a canvas for another headline.”
            </div>
            <div
              style={{
                fontSize: 5.5 * s,
                fontWeight: 700,
                color: p.muted,
                marginTop: 4 * s,
                textTransform: "uppercase",
              }}
            >
              — Folio No. 82
            </div>
          </div>
        </div>

        {/* Editorial Footer Grid Rules */}
        <div
          className="flex flex-wrap items-center justify-between gap-2"
          style={{
            borderTop: `2px solid ${p.ink}`,
            paddingTop: 4 * s,
            fontSize: 5.5 * s,
            fontWeight: 700,
            textTransform: "uppercase",
            color: p.muted,
          }}
        >
          <span>PULL-QUOTE WITH 8PX SHADOW</span>
          <span style={{ color: p.accent }}>CONTINUED ON PAGE 104 →</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
