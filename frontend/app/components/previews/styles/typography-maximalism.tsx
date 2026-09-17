import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function TypographyMaximalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const mono = `ui-monospace, SFMono-Regular, Menlo, monospace`;
  return (
    <Frame meta={meta} large={large}>
      <div
        className="flex h-full flex-col"
        style={{ background: p.bg, color: p.ink, fontFamily: p.body }}
      >
        {/* type-specimen nav */}
        <div
          className="flex items-center justify-between"
          style={{
            padding: large ? "14px 28px" : "8px 14px",
            borderBottom: `2px solid ${p.ink}`,
          }}
        >
          <div className="flex items-baseline" style={{ gap: large ? 12 : 8 }}>
            <span
              style={{
                fontFamily: p.display,
                fontWeight: 900,
                fontSize: large ? 20 : 12,
                letterSpacing: "-0.02em",
                lineHeight: 1,
              }}
            >
              GROTESK*
            </span>
            <span
              style={{
                fontFamily: mono,
                fontWeight: 700,
                fontSize: large ? 12 : 7,
                letterSpacing: "0.12em",
                color: p.muted,
              }}
            >
              №001 — SPECIMEN
            </span>
          </div>
          <div className="flex items-center" style={{ gap: large ? 14 : 8 }}>
            <span
              className="hidden sm:inline"
              style={{
                fontFamily: mono,
                fontWeight: 600,
                fontSize: large ? 12 : 7,
                letterSpacing: "0.12em",
                color: p.muted,
              }}
            >
              INDEX / TICKETS ↗
            </span>
            <span
              style={{
                background: p.accent,
                color: p.bg,
                fontFamily: p.display,
                fontWeight: 900,
                fontSize: large ? 13 : 8,
                letterSpacing: "0.04em",
                padding: large ? "8px 14px" : "5px 9px",
                lineHeight: 1,
              }}
            >
              GET TYPE →
            </span>
          </div>
        </div>

        {/* gigantic stacked type hero */}
        <div
          className="flex-1"
          style={{
            padding: large ? "26px 28px 18px" : "12px 14px 8px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              fontFamily: mono,
              fontWeight: 700,
              fontSize: large ? 12 : 7,
              letterSpacing: "0.14em",
              color: p.accent,
            }}
          >
            WALL-TO-WALL · 12–20VW · CONDENSED BLACK
          </div>
          <h2
            style={{
              fontFamily: p.display,
              fontWeight: 900,
              fontSize: large ? 104 : 46,
              lineHeight: 0.86,
              letterSpacing: "-0.03em",
              margin: large ? "10px 0 0" : "6px 0 0",
              textShadow: `4px 4px 0 ${p.accent}`,
            }}
          >
            TYPE IS
          </h2>
          <h2
            aria-hidden="true"
            style={{
              fontFamily: p.display,
              fontWeight: 900,
              fontSize: large ? 104 : 46,
              lineHeight: 0.86,
              letterSpacing: "-0.03em",
              margin: 0,
              color: "transparent",
              WebkitTextStroke: large ? `2.5px ${p.ink}` : `1.5px ${p.ink}`,
            }}
          >
            THE IMAGE
          </h2>
          <div
            style={{
              fontFamily: p.display,
              fontWeight: 900,
              fontStyle: "italic",
              fontSize: large ? 30 : 15,
              letterSpacing: "-0.02em",
              lineHeight: 1,
              marginTop: large ? 10 : 6,
              color: p.ink,
            }}
          >
            SET SOLID <span style={{ color: p.accent }}>→</span>{" "}
            <span style={{ fontFamily: mono, fontWeight: 700, fontSize: large ? 12 : 7, letterSpacing: "0.12em", color: p.muted, fontStyle: "normal" }}>
              KERN · TRACK · LEAD *
            </span>
          </div>
        </div>

        {/* ticker divider */}
        <div
          className="overflow-hidden whitespace-nowrap"
          style={{
            borderTop: `2px solid ${p.ink}`,
            borderBottom: `2px solid ${p.ink}`,
            height: large ? 36 : 24,
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            className="pv-marquee-fast"
            style={{
              display: "inline-block",
              whiteSpace: "nowrap",
              color: p.accent,
              fontFamily: p.display,
              fontWeight: 900,
              fontSize: large ? 16 : 9,
              letterSpacing: "0.02em",
            }}
          >
            ANTON 900 · ARCHIVO BLACK · OUTLINE / FILL · ANTON 900 · ARCHIVO BLACK · OUTLINE / FILL ·&nbsp;
          </div>
        </div>

        {/* baseline grid footer */}
        <div
          style={{
            backgroundImage: `repeating-linear-gradient(to bottom, ${p.ink}14 0 1px, transparent 1px 8px)`,
            backgroundColor: p.surface,
            borderTop: `1px solid ${p.ink}38`,
            padding: large ? "12px 28px 26px" : "7px 14px 18px",
            display: "flex",
            justifyContent: "space-between",
            gap: 12,
          }}
        >
          <span style={{ fontFamily: mono, fontWeight: 600, fontSize: large ? 12 : 7, letterSpacing: "0.1em", color: p.muted }}>
            ANTON / —0.03EM / 0.86 LEAD
          </span>
          <span style={{ fontFamily: mono, fontWeight: 600, fontSize: large ? 12 : 7, letterSpacing: "0.1em", color: p.muted }}>
            {large ? "COLOPHON — SET IN ANTON + INTER · PRINTED ON #0F0F0F" : "COLOPHON — ANTON + INTER"}
          </span>
          <span style={{ fontFamily: mono, fontWeight: 700, fontSize: large ? 12 : 7, letterSpacing: "0.1em", color: p.ink }}>
            P.01 ↗
          </span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
