import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function EditorialMinimalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
        {/* Double Typographic Hairline Masthead */}
        <div>
          <div
            className="flex items-center justify-between"
            style={{
              fontSize: 6 * s,
              color: p.muted,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              paddingBottom: 4 * s,
            }}
          >
            <span>Quarterly Review</span>
            <span>Issue No. 84 · Paris</span>
            <span>Autumn MCMXXIV</span>
          </div>

          <div
            style={{
              borderTop: `2px solid ${p.ink}`,
              borderBottom: `1px solid ${p.ink}`,
              padding: `${3 * s}px 0`,
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontFamily: p.display,
                fontSize: 14 * s,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                fontWeight: 600,
                color: p.ink,
                lineHeight: 1.1,
              }}
            >
              The Literary Dispatch
            </div>
          </div>
        </div>

        {/* Essay Opening Column with Oxblood Kicker */}
        <div className="my-auto">
          <div
            style={{
              fontSize: 6.5 * s,
              fontStyle: "italic",
              color: p.accent,
              letterSpacing: "0.05em",
              marginBottom: 3 * s,
            }}
          >
            On the Architecture of Solitude
          </div>
          <h3
            style={{
              fontFamily: p.display,
              fontSize: 12 * s,
              fontWeight: 400,
              lineHeight: 1.35,
              color: p.ink,
              margin: 0,
            }}
          >
            “A sentence, like a stone arch, holds its gravity only when every ornament is stripped away.”
          </h3>
          <p
            style={{
              fontSize: 7 * s,
              color: p.muted,
              lineHeight: 1.6,
              margin: `${6 * s}px 0 0 0`,
            }}
          >
            By Julian Vance · Translated from the Italian by M. Claire{" "}
            <sup style={{ color: p.accent, fontWeight: 600 }}>[1]</sup>
          </p>
        </div>

        {/* Footnote Rule & Metadata */}
        <div
          style={{
            borderTop: `1px solid ${p.ink}22`,
            paddingTop: 5 * s,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 6 * s,
            color: p.muted,
          }}
        >
          <span>
            <strong style={{ color: p.accent }}>[1]</strong> Folio Archive, Biblioteca Marciana, Venice
          </span>
          <span
            style={{
              color: p.accent,
              textDecoration: "underline",
              textUnderlineOffset: 2 * s,
              cursor: "pointer",
            }}
          >
            Continue reading § 2 →
          </span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
