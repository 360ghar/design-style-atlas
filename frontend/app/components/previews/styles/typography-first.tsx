import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function TypographyFirstPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const pad = large ? 32 : 14;
  const label = {
    fontSize: large ? 10 : 6,
    letterSpacing: "0.14em",
    textTransform: "uppercase" as const,
    fontWeight: 600,
  };
  return (
    <Frame meta={meta} large={large}>
      <div
        className="flex h-full flex-col"
        style={{ background: p.bg, color: p.ink, fontFamily: p.body }}
      >
        {/* Quiet progress hairline */}
        <div style={{ borderBottom: `1px solid ${p.ink}33` }}>
          <div style={{ width: "32%", height: 2, background: p.ink }} />
        </div>

        {/* §11 chapter nav: numeral + TOC with current-section highlight */}
        <div
          className="flex items-center justify-between"
          style={{ padding: `${large ? 12 : 7}px ${pad}px 0`, gap: 8, whiteSpace: "nowrap" }}
        >
          <span style={{ ...label, color: p.ink }}>§ 3 — Measure</span>
          <span className="flex items-center" style={{ gap: large ? 14 : 8, ...label }}>
            <span style={{ color: p.ink, borderBottom: `1px solid ${p.ink}` }}>Chapters</span>
            <span style={{ color: p.muted }}>Notes</span>
            <span style={{ color: p.muted }}>Colophon</span>
          </span>
          <span style={{ ...label, color: p.muted }}>Aa · Reading mode</span>
        </div>
        <div style={{ borderTop: `1px solid ${p.ink}`, margin: `${large ? 10 : 6}px ${pad}px 0` }} />

        {/* Reading column + sidenote rail */}
        <div className="grid grid-cols-12" style={{ flex: 1, minHeight: 0 }}>
          <div
            className="col-span-8 flex flex-col justify-center"
            style={{ padding: `${large ? 18 : 8}px 0 ${large ? 18 : 8}px ${pad}px`, minWidth: 0 }}
          >
            <div style={{ ...label, color: p.muted }}>Chapter three — Scale &amp; hierarchy</div>
            <div
              style={{
                fontFamily: p.display,
                fontWeight: 600,
                fontSize: large ? 54 : 25,
                lineHeight: 1.05,
                letterSpacing: "-0.01em",
                marginTop: large ? 10 : 5,
              }}
            >
              Good typography
              <br />
              is <em style={{ fontStyle: "italic" }}>invisible.</em>
            </div>
            <p
              style={{
                margin: 0,
                marginTop: large ? 14 : 7,
                fontFamily: p.body,
                fontWeight: 400,
                fontSize: large ? 17 : 8,
                lineHeight: 1.7,
                maxWidth: large ? 460 : 220,
              }}
            >
              You notice it only when the measure is wrong, the leading pinches, or the emphasis
              arrives a beat late.
              <sup style={{ color: p.accent2, fontSize: "0.75em" }}> 1</sup>{" "}
              <a style={{ color: p.accent2, textDecoration: "underline" }}>Read the rule →</a>
            </p>
            <div className="flex items-center" style={{ gap: large ? 14 : 8, marginTop: large ? 16 : 8 }}>
              <span
                style={{
                  background: p.accent,
                  color: p.bg,
                  borderRadius: 2,
                  fontSize: large ? 11 : 6.5,
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  padding: large ? "10px 16px" : "5px 9px",
                  lineHeight: 1,
                  whiteSpace: "nowrap",
                }}
              >
                Subscribe
              </span>
              <span
                style={{
                  fontSize: large ? 11 : 6.5,
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: p.ink,
                  borderBottom: `1px solid ${p.ink}`,
                  lineHeight: 1.4,
                  whiteSpace: "nowrap",
                }}
              >
                Continue reading →
              </span>
            </div>
          </div>

          {/* Sidenote rail: footnote block + pull-quote with rules */}
          <div
            className="col-span-4 flex-col justify-center"
            style={{
              display: "flex",
              borderLeft: `1px solid ${p.ink}44`,
              margin: `${large ? 18 : 8}px ${pad}px ${large ? 18 : 8}px ${large ? 20 : 10}px`,
              paddingLeft: large ? 16 : 8,
              minWidth: 0,
              gap: large ? 12 : 6,
            }}
          >
            <div
              style={{
                borderTop: `1px solid ${p.ink}`,
                paddingTop: large ? 8 : 4,
                fontSize: large ? 12.5 : 7,
                lineHeight: 1.6,
                color: p.ink,
              }}
            >
              <sup style={{ color: p.accent2 }}>1&nbsp;</sup>
              Bringhurst, <em>Elements of Typographic Style</em>, §2.1
            </div>
            <blockquote
              style={{
                margin: 0,
                borderLeft: `2px solid ${p.ink}`,
                paddingLeft: large ? 10 : 6,
                fontFamily: p.display,
                fontStyle: "italic",
                fontWeight: 500,
                fontSize: large ? 15 : 8,
                lineHeight: 1.5,
              }}
            >
              “Measure first. The page rewards slowness.”
            </blockquote>
            <div style={{ ...label, color: p.muted, fontSize: large ? 9 : 5.5 }}>
              ¶ sidenote · † dagger
            </div>
          </div>
        </div>

        {/* Scale / measure footer over footnote divider */}
        <div style={{ padding: `0 ${pad}px ${large ? 28 : 20}px` }}>
          <div style={{ borderTop: `1px solid ${p.ink}55`, paddingTop: large ? 10 : 5 }} className="flex items-center justify-between">
            <span style={{ ...label, color: p.muted }}>66ch · 1.7 leading · 1.25 scale</span>
            <span style={{ ...label, color: p.muted }}>
              Set in Newsreader · 12 min · § 4 →
            </span>
          </div>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
