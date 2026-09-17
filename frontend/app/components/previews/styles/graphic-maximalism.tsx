import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function GraphicMaximalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const barLink: React.CSSProperties = {
    fontSize: large ? 10 : 6,
    fontWeight: 800,
    letterSpacing: "0.14em",
  };
  return (
    <Frame meta={meta} large={large}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          background: p.bg,
          color: p.ink,
          fontFamily: p.body,
          overflow: "hidden",
        }}
      >
        {/* Showbill poster bar */}
        <div style={{ display: "flex", alignItems: "stretch", background: p.ink, color: p.surface }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: large ? 14 : 7,
              padding: large ? "10px 16px" : "6px 10px",
              flex: 1,
              minWidth: 0,
            }}
          >
            <span style={{ ...barLink, background: p.surface, color: p.ink, padding: large ? "3px 8px" : "2px 5px" }}>
              NOISE★FEST
            </span>
            <span style={{ ...barLink, opacity: 0.85 }}>LINEUP</span>
            {large && <span style={{ ...barLink, opacity: 0.85 }}>VENUES</span>}
            <span style={{ ...barLink, opacity: 0.85 }}>TIX</span>
          </div>
          <div
            style={{
              background: p.accent,
              color: p.surface,
              display: "flex",
              alignItems: "center",
              gap: large ? 8 : 4,
              padding: large ? "10px 18px" : "6px 10px",
              fontSize: large ? 10 : 6,
              fontWeight: 900,
              letterSpacing: "0.14em",
              whiteSpace: "nowrap",
            }}
          >
            AUG 24 <span aria-hidden="true">●</span> GET TIX →
          </div>
        </div>

        {/* Ticker seam */}
        <div
          style={{
            background: p.accent2,
            color: p.surface,
            fontSize: large ? 9 : 5.5,
            fontWeight: 800,
            letterSpacing: "0.18em",
            padding: large ? "5px 12px" : "3px 8px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            borderTop: `3px solid ${p.ink}`,
            borderBottom: `3px solid ${p.ink}`,
          }}
        >
          40 BANDS ● 3 STAGES ● DUOTONE ALL NIGHT ● 40 BANDS ● 3 STAGES ● NO REFUNDS
        </div>

        {/* Hero: bold graphic collision */}
        <div style={{ position: "relative", flex: 1, minHeight: 0, padding: large ? "20px 22px 14px" : "10px 12px 8px" }}>
          {/* color-block keylines behind type */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: large ? 26 : 12,
              left: large ? 150 : 78,
              width: large ? 300 : 150,
              height: large ? 130 : 66,
              background: p.accent2,
              border: `3px solid ${p.ink}`,
              transform: "rotate(-3deg)",
            }}
          />
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: large ? 44 : 22,
              left: large ? 132 : 68,
              width: large ? 300 : 150,
              height: large ? 130 : 66,
              background: p.surface,
              border: `3px solid ${p.ink}`,
              boxShadow: `6px 6px 0 ${p.ink}`,
              transform: "rotate(1.5deg)",
            }}
          />
          {/* halftone dots */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              right: large ? 150 : 74,
              bottom: large ? 18 : 8,
              width: large ? 220 : 110,
              height: large ? 60 : 30,
              backgroundImage: `radial-gradient(${p.ink} 1.2px, transparent 1.3px)`,
              backgroundSize: large ? "10px 10px" : "7px 7px",
              opacity: 0.25,
            }}
          />
          {/* duotone disc */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              right: large ? 26 : 12,
              top: large ? 18 : 8,
              width: large ? 120 : 58,
              height: large ? 120 : 58,
              borderRadius: "50%",
              background: p.accent,
              border: `3px solid ${p.ink}`,
              boxShadow: `6px 6px 0 ${p.ink}`,
            }}
          />
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              right: large ? 52 : 25,
              top: large ? 44 : 21,
              fontSize: large ? 54 : 26,
              fontWeight: 900,
              color: p.surface,
              lineHeight: 1,
            }}
          >
            ⚡
          </div>
          {/* starburst badge */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              right: large ? 120 : 58,
              top: large ? 96 : 48,
              width: large ? 92 : 46,
              height: large ? 92 : 46,
              borderRadius: "50%",
              background: `conic-gradient(${p.ink} 0 9%, transparent 9% 18%, ${p.ink} 18% 27%, transparent 27% 36%, ${p.ink} 36% 45%, transparent 45% 54%, ${p.ink} 54% 63%, transparent 63% 72%, ${p.ink} 72% 81%, transparent 81% 90%, ${p.ink} 90% 100%)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: large ? 62 : 31,
                height: large ? 62 : 31,
                borderRadius: "50%",
                background: p.surface,
                border: `3px solid ${p.ink}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                fontSize: large ? 10 : 5,
                fontWeight: 900,
                lineHeight: 1.1,
                transform: "rotate(-10deg)",
              }}
            >
              3 DAYS
              <br />
              40 BANDS
            </div>
          </div>

          {/* poster stack headline */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                display: "inline-block",
                background: p.ink,
                color: p.surface,
                fontSize: large ? 10 : 6,
                fontWeight: 900,
                letterSpacing: "0.2em",
                padding: large ? "5px 12px" : "3px 7px",
                transform: "rotate(-2deg)",
              }}
            >
              ★ RIVERSIDE PARK ★ LIVE
            </div>
            <div
              style={{
                fontFamily: p.display,
                fontSize: large ? 76 : 34,
                lineHeight: 0.88,
                letterSpacing: "-0.01em",
                marginTop: large ? 10 : 5,
                textShadow: `3px 3px 0 ${p.accent}`,
              }}
            >
              NOISE
              <br />
              <span style={{ color: "transparent", WebkitTextStroke: `2.5px ${p.ink}` }}>FEST ’26</span>
            </div>
            <p style={{ fontSize: large ? 14 : 8, fontWeight: 500, color: p.muted, marginTop: large ? 10 : 5, maxWidth: large ? 340 : 170 }}>
              Three nights of blown-out guitars and screen-printed posters.
            </p>
          </div>
        </div>

        {/* Icon strip: poster devices */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            borderTop: `3px solid ${p.ink}`,
            background: p.surface,
          }}
        >
          {[
            ["★", "HEADLINERS"],
            ["⚡", "3 STAGES"],
            ["✂", "TICKET STUB"],
            ["→", "AFTERPARTY"],
          ].map(([glyph, label]) => (
            <div
              key={label}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: large ? 8 : 4,
                padding: large ? "10px 6px" : "5px 3px",
                borderRight: `3px solid ${p.ink}`,
                fontSize: large ? 11 : 6,
                fontWeight: 900,
                letterSpacing: "0.1em",
              }}
            >
              <span aria-hidden="true" style={{ fontSize: large ? 18 : 10, color: p.accent }}>
                {glyph}
              </span>
              {label}
            </div>
          ))}
        </div>

        {/* Poster-bar CTA */}
        <div style={{ display: "flex", borderTop: `3px solid ${p.ink}`, background: p.surface }}>
          <div
            style={{
              flex: 1,
              background: p.accent,
              color: p.surface,
              textAlign: "center",
              fontSize: large ? 13 : 7.5,
              fontWeight: 900,
              letterSpacing: "0.18em",
              padding: large ? "13px 10px" : "7px 6px",
            }}
          >
            GET TICKETS — FROM $49
          </div>
          <div
            style={{
              background: p.ink,
              color: p.surface,
              display: "flex",
              alignItems: "center",
              padding: large ? "13px 22px" : "7px 12px",
              fontSize: large ? 13 : 7.5,
              fontWeight: 900,
              letterSpacing: "0.18em",
              whiteSpace: "nowrap",
            }}
          >
            LINEUP →
          </div>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
