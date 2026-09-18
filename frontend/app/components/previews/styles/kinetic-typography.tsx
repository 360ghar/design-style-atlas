import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function KineticTypographyPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const mono = "ui-monospace, SFMono-Regular, Menlo, monospace";
  const fs = large
    ? { nav: 9, ticker: 10, hero: 62, sub: 11, chip: 9, foot: 9 }
    : { nav: 6.5, ticker: 7, hero: 30, sub: 7.5, chip: 6, foot: 6 };
  const line = `1px solid ${p.ink}22`;

  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col" style={{ background: p.bg, color: p.ink, paddingBottom: large ? 22 : 16 }}>
        {/* type-ticker nav: act menu + mute-motion toggle + ticker frame */}
        <div style={{ borderBottom: line }}>
          <div className="flex items-center justify-between" style={{ padding: large ? "10px 5%" : "6px 5%" }}>
            <span style={{ fontFamily: mono, fontSize: fs.nav, letterSpacing: "0.14em", color: p.muted }}>
              <span style={{ color: p.accent2 }}>●</span> KINETIC / ACT 01–04
            </span>
            <span
              className="inline-flex items-center gap-1"
              style={{
                fontFamily: mono,
                fontSize: fs.nav,
                letterSpacing: "0.12em",
                color: p.ink,
                border: `1px solid ${p.ink}33`,
                borderRadius: 999,
                padding: large ? "4px 10px" : "2px 7px",
                background: p.surface,
              }}
            >
              <span className="inline-block rounded-full" style={{ width: 6, height: 6, background: p.accent }} />
              MOTION ON
            </span>
          </div>
          <div className="overflow-hidden whitespace-nowrap" style={{ borderTop: line, background: p.surface }}>
            <div
              className="pv-marquee"
              style={{ display: "inline-block", fontFamily: mono, fontSize: fs.ticker, letterSpacing: "0.22em", color: p.muted, padding: large ? "6px 0" : "4px 0" }}
            >
              SLIDE&nbsp;&nbsp;·&nbsp;&nbsp;SCRAMBLE&nbsp;&nbsp;·&nbsp;&nbsp;KARAOKE&nbsp;&nbsp;·&nbsp;&nbsp;REPEAT&nbsp;&nbsp;·&nbsp;&nbsp;SLIDE&nbsp;&nbsp;·&nbsp;&nbsp;SCRAMBLE&nbsp;&nbsp;·&nbsp;&nbsp;KARAOKE&nbsp;&nbsp;·&nbsp;&nbsp;REPEAT&nbsp;&nbsp;·&nbsp;&nbsp;
            </div>
          </div>
        </div>

        {/* stacked hero: static final state with skewed offsets + type echo */}
        <div className="flex flex-1 flex-col justify-center" style={{ padding: large ? "20px 6%" : "10px 6%", gap: large ? 12 : 7 }}>
          <div className="flex items-center gap-2">
            <span
              style={{
                fontFamily: mono,
                fontSize: fs.chip,
                letterSpacing: "0.14em",
                color: p.ink,
                border: `1px solid ${p.ink}33`,
                borderRadius: 999,
                padding: large ? "4px 10px" : "2px 7px",
              }}
            >
              LINE_04 — HERO
            </span>
            <span style={{ fontFamily: mono, fontSize: fs.chip, letterSpacing: "0.1em", color: p.muted }}>scramble 700ms</span>
          </div>

          <div style={{ fontFamily: p.display, fontWeight: 900, lineHeight: 0.92, letterSpacing: "-0.01em", fontSize: fs.hero }}>
            <div style={{ transform: "rotate(-2deg) translateX(-4px)", textShadow: `3px 3px 0 ${p.accent2}` }}>WORDS</div>
            <div style={{ transform: "rotate(1deg) translateX(10px)" }}>
              THAT{" "}
              <span style={{ display: "inline-block", transform: "rotate(-2deg)", background: p.accent, color: p.bg, padding: "0 10px" }}>
                MOVE
              </span>
            </div>
            <div style={{ transform: "rotate(-1deg) translateX(2px)" }}>
              <span style={{ textDecoration: "underline", textDecorationColor: p.accent, textDecorationThickness: large ? 5 : 3, textUnderlineOffset: large ? 6 : 4 }}>
                LOUDER
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2" style={{ marginTop: large ? 4 : 2 }}>
            <span style={{ fontFamily: p.body, fontSize: fs.sub, fontWeight: 700, textDecoration: "underline", textDecorationColor: p.accent2, textUnderlineOffset: 3 }}>
              Watch the message perform →
            </span>
            <span
              className="inline-flex items-center"
              style={{
                fontFamily: mono,
                fontSize: fs.chip,
                letterSpacing: "0.1em",
                background: p.accent,
                color: p.bg,
                borderRadius: 4,
                padding: large ? "6px 12px" : "4px 8px",
                fontWeight: 700,
              }}
            >
              ▶ REPLAY
            </span>
          </div>
        </div>

        {/* specimen footer: face + timing + progress dots */}
        <div className="flex items-center justify-between" style={{ borderTop: line, padding: large ? "9px 5%" : "6px 5%" }}>
          <span style={{ fontFamily: mono, fontSize: fs.foot, letterSpacing: "0.1em", color: p.muted }}>Aa — ARCHIVO BLACK 900</span>
          <span className="flex items-center" style={{ gap: 5 }}>
            {[p.accent, `${p.ink}44`, `${p.ink}44`, `${p.ink}44`].map((c, i) => (
              <span key={i} className="inline-block rounded-full" style={{ width: large ? 7 : 5, height: large ? 7 : 5, background: c }} />
            ))}
          </span>
          <span style={{ fontFamily: mono, fontSize: fs.foot, letterSpacing: "0.1em", color: p.muted }}>18s LOOP / STATIC FINAL</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
