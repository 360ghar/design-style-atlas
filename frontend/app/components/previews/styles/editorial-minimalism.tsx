import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function EditorialMinimalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const pad = large ? 40 : 18;
  return (
    <Frame meta={meta} large={large}>
      <div
        className="flex h-full flex-col"
        style={{ background: p.bg, color: p.ink, fontFamily: p.body, padding: pad }}
      >
        {/* Masthead: wordmark + edition line, double rule, section nav */}
        <div className="flex items-baseline justify-between">
          <div
            style={{
              fontFamily: p.display,
              fontWeight: 500,
              fontSize: large ? 22 : 12,
              letterSpacing: "0.01em",
              textShadow: `0 1px 0 ${p.surface}`,
            }}
          >
            The Quiet Review
          </div>
          <div
            style={{
              fontSize: large ? 10 : 6.5,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontWeight: 600,
              color: p.muted,
            }}
          >
            No. 42 — Autumn
          </div>
        </div>
        <div style={{ borderTop: `3px double ${p.ink}`, marginTop: large ? 10 : 6, paddingTop: large ? 8 : 5 }} className="flex items-center justify-between">
          <div
            style={{
              fontSize: large ? 10 : 6.5,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontWeight: 600,
              color: p.ink,
            }}
          >
            Essays&nbsp;&nbsp;·&nbsp;&nbsp;Marginalia&nbsp;&nbsp;·&nbsp;&nbsp;Colophon
          </div>
          <div
            style={{
              fontSize: large ? 10 : 6.5,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontWeight: 600,
              color: p.accent,
            }}
          >
            Vol. IV
          </div>
        </div>

        {/* Pull-quote hero */}
        <div className="flex flex-1 flex-col justify-center" style={{ paddingTop: large ? 20 : 8, paddingBottom: large ? 20 : 8 }}>
          <div
            style={{
              fontSize: large ? 11 : 6.5,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontWeight: 600,
              color: p.accent,
            }}
          >
            Essay — Vol. IV
          </div>
          <div
            style={{
              fontFamily: p.display,
              fontStyle: "italic",
              fontWeight: 500,
              fontSize: large ? 40 : 17,
              lineHeight: 1.25,
              marginTop: large ? 12 : 6,
              maxWidth: large ? 560 : 260,
            }}
          >
            “On the quiet discipline of the well-set paragraph.”
          </div>
          <div style={{ width: large ? 40 : 24, borderTop: `1px solid ${p.accent}`, marginTop: large ? 14 : 7 }} />
          <div
            style={{
              fontFamily: p.body,
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: large ? 14 : 8.5,
              lineHeight: 1.6,
              color: p.muted,
              marginTop: large ? 10 : 5,
              maxWidth: large ? 480 : 230,
            }}
          >
            Attention is a discipline. The page rewards what the feed never does — slowness.
          </div>
          <div className="flex items-center" style={{ gap: large ? 16 : 10, marginTop: large ? 16 : 8 }}>
            <span
              style={{
                fontSize: large ? 11 : 7,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                fontWeight: 600,
                color: p.accent,
              }}
            >
              Continue reading →
            </span>
            <span
              style={{
                fontSize: large ? 11 : 7,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                fontWeight: 600,
                color: p.ink,
                background: p.surface,
                border: `1px solid ${p.ink}`,
                borderRadius: 2,
                padding: large ? "8px 14px" : "4px 8px",
              }}
            >
              Subscribe
            </span>
          </div>
        </div>

        {/* Byline rule + reading meta footer */}
        <div style={{ borderTop: `1px solid ${p.ink}`, paddingTop: large ? 10 : 6 }} className="flex items-center justify-between">
          <span style={{ fontFamily: p.body, fontWeight: 400, fontSize: large ? 12 : 7 }}>By E. Marlowe</span>
          <span
            style={{
              fontSize: large ? 10 : 6.5,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              fontWeight: 600,
              color: p.muted,
            }}
          >
            12 min read · § 4
          </span>
        </div>
        <div
          style={{
            fontFamily: p.body,
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: large ? 11 : 6.5,
            color: p.muted,
            marginTop: large ? 6 : 3,
          }}
        >
          ❦ Set in Georgia · 680px measure · Fig. 1
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
