import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function JapaneseMinimalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const hairline = `${p.ink}24`;
  const fs = {
    rail: large ? 10 : 7,
    kicker: large ? 10 : 6.5,
    heroKanji: large ? 44 : 24,
    heroLine: large ? 27 : 15,
    body: large ? 12.5 : 7.5,
    btn: large ? 10 : 6.5,
    footer: large ? 9 : 6,
  };
  return (
    <Frame meta={meta} large={large}>
      <div
        className="relative flex h-full overflow-hidden"
        style={{ background: p.bg, color: p.ink, fontFamily: p.body }}
      >
        {/* §14 washi grain at ~4% + soft vignette, tokens only */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            opacity: 0.05,
            backgroundImage: `radial-gradient(${p.ink} 0.5px, transparent 0.6px)`,
            backgroundSize: large ? "7px 7px" : "5px 5px",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: `radial-gradient(120% 90% at 50% 10%, transparent 55%, ${p.ink}14 100%)` }}
        />

        {/* Vertical Japanese nav rail */}
        <div
          className="relative flex w-[17%] shrink-0 flex-col items-center justify-between py-[5%]"
          style={{ borderRight: `1px solid ${hairline}` }}
        >
          <span
            className="flex items-center justify-center font-medium"
            style={{
              background: p.accent,
              color: p.surface,
              width: large ? 24 : 16,
              height: large ? 24 : 16,
              fontSize: large ? 12 : 8,
              borderRadius: 2,
              fontFamily: p.display,
              boxShadow: `0 1px 3px rgba(43,43,40,0.05)`,
            }}
          >
            印
          </span>
          <span
            style={{
              writingMode: "vertical-rl",
              fontSize: fs.rail,
              letterSpacing: "0.42em",
              color: p.muted,
              fontFamily: p.body,
            }}
          >
            余白の美しさ
          </span>
          <span className="flex flex-col items-center gap-1" style={{ color: p.muted, fontSize: fs.rail }}>
            <span style={{ width: 1, height: large ? 28 : 18, background: hairline }} />
            <span style={{ letterSpacing: "0.2em" }}>三</span>
          </span>
        </div>

        {/* Ma hero, placed low + off-center */}
        <div className="relative flex min-w-0 flex-1 flex-col justify-end p-[7%] pb-[5%]">
          <div className="flex items-center gap-2" style={{ marginBottom: large ? 14 : 8 }}>
            <span style={{ width: large ? 22 : 12, height: 1, background: p.accent }} />
            <span
              style={{
                fontSize: fs.kicker,
                letterSpacing: "0.24em",
                color: p.muted,
                fontFamily: p.body,
                whiteSpace: "nowrap",
              }}
            >
              MA · NO.04 — STILLNESS
            </span>
          </div>
          <div className="flex items-start gap-[0.35em]" style={{ lineHeight: 1.12 }}>
            <span style={{ fontFamily: p.display, fontWeight: 500, fontSize: fs.heroKanji, lineHeight: 1 }}>
              間
            </span>
            <span
              style={{
                fontFamily: p.display,
                fontWeight: 400,
                fontSize: fs.heroLine,
                lineHeight: 1.2,
                letterSpacing: "-0.01em",
              }}
            >
              the space
              <br />
              between things.
            </span>
          </div>
          <p
            style={{
              fontSize: fs.body,
              lineHeight: 2.0,
              color: p.ink,
              opacity: 0.82,
              marginTop: large ? 10 : 6,
              maxWidth: large ? 300 : 170,
            }}
          >
            A quiet room for work. Nothing extra, nothing missing.
          </p>

          {/* §§9–10 buttons: quiet rects, ink primary, 2–4px radius */}
          <div className="flex items-center" style={{ gap: large ? 10 : 6, marginTop: large ? 14 : 8 }}>
            <span
              style={{
                background: p.ink,
                color: p.surface,
                border: `1px solid ${p.ink}`,
                borderRadius: 3,
                fontSize: fs.btn,
                letterSpacing: "0.18em",
                padding: large ? "9px 16px" : "5px 9px",
                cursor: "pointer",
                boxShadow: `0 1px 3px rgba(43,43,40,0.05)`,
                whiteSpace: "nowrap",
              }}
            >
              BEGIN QUIETLY
            </span>
            <span
              style={{
                background: p.surface,
                color: p.ink,
                border: `1px solid ${hairline}`,
                borderRadius: 3,
                fontSize: fs.btn,
                letterSpacing: "0.18em",
                padding: large ? "9px 16px" : "5px 9px",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              TEA ROOMS
            </span>
          </div>

          {/* Footer meta */}
          <div
            className="flex items-center justify-between"
            style={{
              marginTop: large ? 16 : 9,
              paddingTop: large ? 10 : 6,
              borderTop: `1px solid ${hairline}`,
              fontSize: fs.footer,
              letterSpacing: "0.2em",
              color: p.muted,
            }}
          >
            <span style={{ whiteSpace: "nowrap" }}>WASHI · STONE · MOSS</span>
            <span className="flex items-center gap-1" style={{ whiteSpace: "nowrap" }}>
              <span style={{ width: 5, height: 5, background: p.accent2, borderRadius: 1 }} />
              余白 2026
            </span>
          </div>
        </div>

        {/* Tatami / enso accent */}
        <div className="relative w-[27%] shrink-0 overflow-hidden" style={{ borderLeft: `1px solid ${hairline}` }}>
          <div
            className="absolute inset-0"
            style={{
              background: p.surface,
              backgroundImage: `repeating-linear-gradient(180deg, transparent 0px, transparent 9px, ${p.ink}12 10px)`,
            }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ gap: large ? 12 : 7 }}>
            {/* Enso: open circle, brush weight */}
            <div className="relative" style={{ width: large ? 92 : 52, height: large ? 92 : 52 }}>
              <div
                className="absolute inset-0"
                style={{
                  borderRadius: "50%",
                  border: `${large ? 5 : 3}px solid ${p.ink}`,
                  borderTopColor: "transparent",
                  borderRightColor: `${p.ink}30`,
                  transform: "rotate(-24deg)",
                  opacity: 0.88,
                }}
              />
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ fontFamily: p.display, fontSize: large ? 26 : 15, color: p.ink }}
              >
                静
              </div>
            </div>
            <div
              style={{
                background: p.bg,
                border: `1px solid ${hairline}`,
                borderRadius: 3,
                padding: large ? "10px 12px" : "6px 7px",
                fontSize: fs.footer,
                letterSpacing: "0.18em",
                color: p.muted,
                boxShadow: `0 1px 3px rgba(43,43,40,0.05)`,
                whiteSpace: "nowrap",
              }}
            >
              WABI-SABI ·侘寂
            </div>
            <div className="flex items-center gap-1">
              <span style={{ width: large ? 18 : 10, height: 3, background: p.accent, borderRadius: 1 }} />
              <span style={{ width: large ? 18 : 10, height: 3, background: p.accent2, borderRadius: 1, opacity: 0.7 }} />
            </div>
          </div>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
