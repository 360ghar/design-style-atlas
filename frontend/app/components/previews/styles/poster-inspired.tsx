import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function PosterInspiredPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const t = {
    bg: "#E30613",
    surface: "#FFFFFF",
    ink: "#111111",
    muted: "#5C5A55",
    accent: "#111111",
    accent2: "#FFD802",
    display: "Anton, Archivo Black, Impact, sans-serif",
    body: "Inter, Helvetica Neue, sans-serif",
  };
  const pad = large ? 18 : 10;
  return (
    <Frame meta={meta} large={large}>
      <div
        className="flex h-full flex-col"
        style={{ background: t.bg, color: t.surface, fontFamily: t.body, border: `3px solid ${t.ink}` }}
      >
        {/* event header strip */}
        <div
          className="flex items-center justify-between"
          style={{ borderBottom: `3px solid ${t.ink}`, padding: large ? "7px 14px" : "5px 9px" }}
        >
          <span style={{ fontFamily: t.display, fontSize: large ? 11 : 7, letterSpacing: "0.12em" }}>
            FORM / FUNCTION
          </span>
          <span
            style={{
              fontSize: large ? 8.5 : 6,
              fontWeight: 800,
              letterSpacing: "0.18em",
              background: t.surface,
              color: t.ink,
              padding: large ? "3px 8px" : "2px 5px",
            }}
          >
            AUG 24 — ONE NIGHT
          </span>
          <span
            style={{
              fontSize: large ? 8.5 : 6,
              fontWeight: 800,
              letterSpacing: "0.14em",
              background: t.accent2,
              color: t.ink,
              padding: large ? "3px 8px" : "2px 5px",
            }}
          >
            TICKETS
          </span>
        </div>

        {/* huge condensed poster hero */}
        <div className="relative flex-1" style={{ padding: `0 ${pad}px`, paddingTop: large ? 12 : 7 }}>
          <p
            style={{
              fontSize: large ? 9 : 6,
              fontWeight: 800,
              letterSpacing: "0.3em",
              color: t.surface,
              opacity: 0.9,
            }}
          >
            LIVE IN CONCERT — HALL B
          </p>
          <h2
            style={{
              fontFamily: t.display,
              fontSize: large ? 64 : 34,
              lineHeight: 0.88,
              letterSpacing: "-0.01em",
              textTransform: "uppercase",
              marginTop: large ? 6 : 4,
            }}
          >
            SEE THE
            <br />
            <span style={{ color: t.accent2, WebkitTextStroke: large ? "2px #111" : "1.5px #111" }}>
              FUTURE
            </span>
            <br />
            LOUD
          </h2>
          {/* starburst badge */}
          <div
            className="absolute flex items-center justify-center text-center"
            style={{
              top: large ? 14 : 8,
              right: large ? 16 : 9,
              width: large ? 58 : 36,
              height: large ? 58 : 36,
              background: t.accent2,
              color: t.ink,
              fontFamily: t.display,
              fontSize: large ? 13 : 8,
              lineHeight: 1,
              transform: "rotate(12deg)",
              clipPath: "polygon(50% 0%,61% 12%,76% 6%,79% 21%,95% 21%,92% 36%,100% 50%,92% 64%,95% 79%,79% 79%,76% 94%,61% 88%,50% 100%,39% 88%,24% 94%,21% 79%,5% 79%,8% 64%,0% 50%,8% 36%,5% 21%,21% 21%,24% 6%,39% 12%)",
            }}
          >
            $20
          </div>
        </div>

        {/* date / venue CTA footer */}
        <div style={{ padding: `0 ${pad}px`, paddingBottom: large ? 12 : 7 }}>
          <div
            className="flex items-stretch"
            style={{ background: t.surface, color: t.ink, border: `3px solid ${t.ink}` }}
          >
            <div
              className="flex flex-col items-center justify-center"
              style={{
                background: t.ink,
                color: t.surface,
                padding: large ? "8px 12px" : "5px 8px",
                fontFamily: t.display,
                lineHeight: 1,
              }}
            >
              <span style={{ fontSize: large ? 20 : 12 }}>24</span>
              <span style={{ fontSize: large ? 8 : 5.5, letterSpacing: "0.2em" }}>AUG</span>
            </div>
            <div className="flex-1" style={{ padding: large ? "7px 10px" : "4px 7px" }}>
              <p style={{ fontSize: large ? 8 : 5.5, fontWeight: 800, letterSpacing: "0.2em" }}>
                HALL B — DOORS 8PM
              </p>
              <div
                style={{
                  borderTop: `2px dashed ${t.muted}`,
                  marginTop: large ? 5 : 3,
                  paddingTop: large ? 5 : 3,
                  fontSize: large ? 8 : 5.5,
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                }}
              >
                ADMIT ONE · NO REFUNDS
              </div>
            </div>
            <div
              className="flex items-center"
              style={{
                background: t.ink,
                color: t.surface,
                fontFamily: t.display,
                fontSize: large ? 12 : 7.5,
                letterSpacing: "0.1em",
                padding: large ? "0 14px" : "0 9px",
              }}
            >
              GO →
            </div>
          </div>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
