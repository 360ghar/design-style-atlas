import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function OversizedTypographyPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const displaySize = large ? 76 : 42;
  const bleedSize = large ? 88 : 50;
  const metaSize = large ? 10 : 6.5;
  return (
    <Frame meta={meta} large={large}>
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          background: p.bg,
          color: p.ink,
          fontFamily: p.body,
        }}
      >
        {/* minimal nav: mark + menu + ticket CTA */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 8,
            padding: large ? "12px 18px" : "7px 10px",
            borderBottom: `1px solid ${p.muted}44`,
          }}
        >
          <span
            style={{
              fontFamily: p.display,
              fontSize: large ? 15 : 10,
              letterSpacing: "0.02em",
              color: p.ink,
            }}
          >
            O—T<span style={{ color: p.accent }}>®</span>
          </span>
          <span
            style={{
              fontSize: metaSize,
              fontWeight: 700,
              letterSpacing: "0.2em",
              color: p.muted,
            }}
          >
            VOL.01 / MENU
          </span>
          <span
            style={{
              fontSize: metaSize,
              fontWeight: 700,
              letterSpacing: "0.14em",
              background: p.accent,
              color: p.bg,
              padding: large ? "7px 11px" : "4px 7px",
              borderRadius: 3,
              whiteSpace: "nowrap",
            }}
          >
            TICKETS ↗
          </span>
        </div>

        {/* bleeding-edge giant hero, clipped gracefully */}
        <div
          style={{
            flex: 1,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: large ? "12px 18px" : "8px 10px",
            gap: 0,
          }}
        >
          <div
            style={{
              fontFamily: p.display,
              fontWeight: 900,
              fontSize: displaySize,
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              color: p.ink,
              textShadow: large ? `6px 6px 0 ${p.accent}` : `3px 3px 0 ${p.accent}`,
              whiteSpace: "nowrap",
            }}
          >
            Scale is
          </div>
          <div
            style={{
              fontFamily: p.display,
              fontWeight: 900,
              fontSize: bleedSize,
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              color: "transparent",
              WebkitTextStroke: large ? `2.5px ${p.ink}` : `1.5px ${p.ink}`,
              whiteSpace: "nowrap",
              marginRight: large ? -60 : -40,
              borderTop: `1px solid ${p.muted}44`,
              borderBottom: `1px solid ${p.muted}44`,
              padding: large ? "6px 0" : "4px 0",
              overflow: "hidden",
            }}
          >
            Spectacle—
          </div>
          <div
            style={{
              fontFamily: p.display,
              fontWeight: 900,
              fontStyle: "italic",
              fontSize: displaySize,
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              color: p.accent,
              whiteSpace: "nowrap",
            }}
          >
            the room →
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: large ? 8 : 5,
              marginTop: large ? 12 : 7,
            }}
          >
            <span
              style={{
                fontSize: metaSize,
                fontWeight: 700,
                letterSpacing: "0.18em",
                color: p.ink,
                background: p.surface,
                border: `1px solid ${p.muted}55`,
                borderRadius: 999,
                padding: large ? "5px 10px" : "3px 7px",
                whiteSpace: "nowrap",
              }}
            >
              ● LIVE — MAIN STAGE
            </span>
            <span
              style={{
                fontSize: metaSize,
                fontWeight: 700,
                letterSpacing: "0.18em",
                color: p.muted,
                whiteSpace: "nowrap",
              }}
            >
              3 LINES / 7 WORDS MAX
            </span>
          </div>
        </div>

        {/* caption footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 8,
            padding: large ? "10px 18px" : "6px 10px",
            borderTop: `1px solid ${p.muted}44`,
            fontSize: metaSize,
            fontWeight: 700,
            letterSpacing: "0.16em",
          }}
        >
          <span style={{ color: p.muted, whiteSpace: "nowrap" }}>Nº 001 — SCALE AS SPECTACLE</span>
          <span style={{ color: p.ink, whiteSpace: "nowrap" }}>
            01 / 03 <span style={{ color: p.accent }}>→</span>
          </span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
