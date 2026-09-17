import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function EditorialMagazinePreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const kicker = large ? 8 : 5.5;
  return (
    <Frame meta={meta} large={large}>
      <div
        style={{
          background: p.bg,
          color: p.ink,
          fontFamily: p.body,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: large ? "12px 16px 10px" : "8px 10px 7px",
          overflow: "hidden",
        }}
      >
        {/* Masthead: date + issue / price */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: kicker,
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: p.muted,
          }}
        >
          <span>June 2026 · Issue 142</span>
          <span>$12.99</span>
        </div>
        <div
          style={{
            fontFamily: p.display,
            fontWeight: 800,
            textAlign: "center",
            lineHeight: 1,
            letterSpacing: "0.01em",
            fontSize: large ? 30 : 18,
            marginTop: large ? 5 : 3,
          }}
        >
          The Meridian
        </div>
        {/* Double masthead rule + departments */}
        <div style={{ borderTop: `3px double ${p.ink}`, marginTop: large ? 6 : 4 }} />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: large ? 12 : 7,
            fontSize: large ? 7 : 4.8,
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: p.ink,
            paddingTop: large ? 4 : 3,
            paddingBottom: large ? 4 : 3,
            borderBottom: `1px solid ${p.accent2}`,
          }}
        >
          <span>Fashion</span>
          <span style={{ color: p.muted }}>·</span>
          <span>Culture</span>
          <span style={{ color: p.muted }}>·</span>
          <span>Essays</span>
        </div>

        {/* Drop-cap feature hero */}
        <div style={{ marginTop: large ? 8 : 5 }}>
          <div
            style={{
              fontSize: kicker,
              fontWeight: 800,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: p.accent,
            }}
          >
            The Cover Story
          </div>
          <div
            style={{
              fontFamily: p.display,
              fontWeight: 700,
              lineHeight: 1.04,
              fontSize: large ? 27 : 16,
              marginTop: 3,
            }}
          >
            Dress Like the <i style={{ fontWeight: 600 }}>Future</i> Remembers
          </div>
          <div
            style={{
              fontSize: large ? 7.5 : 5,
              color: p.muted,
              fontStyle: "italic",
              marginTop: 2,
            }}
          >
            By June Okafor · Photography by R. Alvarez
          </div>
        </div>

        {/* 2-col excerpt */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: large ? 12 : 8,
            marginTop: large ? 7 : 5,
            paddingTop: large ? 7 : 5,
            borderTop: `1px solid ${p.accent2}`,
            background: p.surface,
            marginLeft: large ? -16 : -10,
            marginRight: large ? -16 : -10,
            paddingLeft: large ? 16 : 10,
            paddingRight: large ? 16 : 10,
            paddingBottom: large ? 7 : 5,
          }}
        >
          <p style={{ fontSize: large ? 8 : 5.4, lineHeight: 1.6, margin: 0 }}>
            <span
              style={{
                fontFamily: p.display,
                fontWeight: 800,
                float: "left",
                fontSize: large ? 26 : 16,
                lineHeight: 0.85,
                paddingRight: 4,
                paddingTop: 1,
                color: p.ink,
              }}
            >
              W
            </span>
            e followed three ateliers through the final forty-eight hours before the show.
          </p>
          <p style={{ fontSize: large ? 8 : 5.4, lineHeight: 1.6, margin: 0, color: p.ink }}>
            Hemlines argued with history. “Elegance is editing,” the cutter said, chalk in hand — full story, page 42.
          </p>
        </div>

        {/* Folio footer */}
        <div
          style={{
            marginTop: "auto",
            paddingTop: large ? 5 : 4,
            borderTop: `1px solid ${p.ink}`,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: large ? 7 : 4.8,
            fontWeight: 700,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: p.muted,
          }}
        >
          <span>p. 42</span>
          <span style={{ color: p.accent2, letterSpacing: 0 }}>❦</span>
          <span>Meridian · June</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
