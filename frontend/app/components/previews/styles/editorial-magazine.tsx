import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function EditorialMagazinePreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
          padding: `${12 * s}px ${16 * s}px`,
        }}
      >
        {/* Masthead Double Rule */}
        <div>
          <div
            className="flex items-center justify-between"
            style={{
              fontSize: 6 * s,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: p.muted,
              paddingBottom: 4 * s,
            }}
          >
            <span>The Cultural Review</span>
            <span>Issue 88 · Autumn</span>
            <span>Folio No. 24</span>
          </div>

          <div
            style={{
              borderTop: `3px double ${p.ink}`,
              borderBottom: `1px solid ${p.ink}44`,
              padding: `${3 * s}px 0`,
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontFamily: p.display,
                fontSize: 15 * s,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: p.ink,
                lineHeight: 1.05,
              }}
            >
              The Atlantic Chronicle
            </div>
          </div>
        </div>

        {/* Two-Column Feature Spread with Column Hairline */}
        <div className="my-auto grid grid-cols-2" style={{ gap: 12 * s }}>
          <div>
            <span
              style={{
                fontSize: 6 * s,
                fontWeight: 700,
                color: p.accent,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              LITERATURE &amp; FORM
            </span>
            <h3
              style={{
                fontFamily: p.display,
                fontSize: 12 * s,
                fontWeight: 600,
                lineHeight: 1.25,
                color: p.ink,
                margin: `${3 * s}px 0 0 0`,
              }}
            >
              The Revival of Ink-On-Paper Serenity
            </h3>
            <p
              style={{
                fontSize: 6.5 * s,
                color: p.muted,
                lineHeight: 1.5,
                margin: `${5 * s}px 0 0 0`,
              }}
            >
              In an age of luminous screens, the physical broadsheet reclaims its quiet authority through proportion and weight.
            </p>
          </div>

          {/* Right Column / Pull Quote Block */}
          <div
            className="flex flex-col justify-between border-l pl-4"
            style={{ borderColor: `${p.ink}22` }}
          >
            <div
              style={{
                fontFamily: p.display,
                fontSize: 8.5 * s,
                fontStyle: "italic",
                color: p.accent2,
                lineHeight: 1.4,
              }}
            >
              “Type has a tempo. When the margins breathe, the intellect listens.”
            </div>
            <div
              style={{
                fontSize: 5.5 * s,
                color: p.muted,
                borderTop: `1px solid ${p.ink}18`,
                paddingTop: 4 * s,
                textTransform: "uppercase",
              }}
            >
              By Evelyn Ross · Photography by M. Vance
            </div>
          </div>
        </div>

        {/* Footer Editorial Folio */}
        <div
          className="flex items-center justify-between"
          style={{
            borderTop: `1px solid ${p.ink}33`,
            paddingTop: 4 * s,
            fontSize: 5.5 * s,
            color: p.muted,
          }}
        >
          <span>Section II: Essays &amp; Critique</span>
          <span style={{ color: p.accent, fontWeight: 600 }}>
            Read Essay § 14 →
          </span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
