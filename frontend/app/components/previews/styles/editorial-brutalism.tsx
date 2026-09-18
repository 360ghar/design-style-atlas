import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function EditorialBrutalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
        {/* Newsroom Urgent Masthead */}
        <div>
          <div className="flex items-center justify-between">
            <span
              style={{
                fontFamily: p.display,
                fontSize: 8 * s,
                fontWeight: 900,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                background: p.ink,
                color: p.bg,
                padding: `${1 * s}px ${6 * s}px`,
              }}
            >
              FRONT DISPATCH
            </span>
            <span
              style={{
                fontSize: 6.5 * s,
                fontWeight: 900,
                color: p.accent,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              ● BREAKING NEWS · ED. 42
            </span>
            <span style={{ fontSize: 6 * s, fontWeight: 700, color: p.muted }}>
              PRICE: 50 CENTS
            </span>
          </div>

          <div
            style={{
              height: 4 * s,
              background: p.ink,
              margin: `${5 * s}px 0`,
            }}
          />
        </div>

        {/* Colossal Poster-Scale Protest Headline */}
        <div className="my-auto">
          <div
            style={{
              background: p.accent,
              color: p.bg,
              display: "inline-block",
              fontFamily: p.display,
              fontSize: 6.5 * s,
              fontWeight: 900,
              padding: `${1 * s}px ${6 * s}px`,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: 4 * s,
            }}
          >
            METROPOLITAN STRIKE
          </div>

          <h2
            style={{
              fontFamily: p.display,
              fontSize: 19 * s,
              fontWeight: 900,
              lineHeight: 0.92,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              color: p.ink,
              margin: 0,
            }}
          >
            THE CITY
            <br />
            STOPS TODAY.
          </h2>

          <div
            style={{
              borderTop: `2px solid ${p.ink}`,
              borderBottom: `1px solid ${p.ink}`,
              padding: `${4 * s}px 0`,
              margin: `${6 * s}px 0`,
              fontSize: 7 * s,
              fontWeight: 700,
              lineHeight: 1.35,
              color: p.ink,
            }}
          >
            Transit workers refuse contract terms; three million commuters stranded as rails freeze.
          </div>
        </div>

        {/* Raw Two-Column Story Teasers */}
        <div
          className="grid grid-cols-2"
          style={{
            gap: 8 * s,
            borderTop: `3px solid ${p.ink}`,
            paddingTop: 4 * s,
            fontSize: 6 * s,
          }}
        >
          <div>
            <strong style={{ textTransform: "uppercase", color: p.accent }}>PAGE 02:</strong>{" "}
            Union demands emergency cost-of-living adjustments.
          </div>
          <div>
            <strong style={{ textTransform: "uppercase", color: p.ink }}>PAGE 04:</strong>{" "}
            Mayor summons emergency municipal council.
          </div>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
