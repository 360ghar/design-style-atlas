import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function ColorfulBrutalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const panels = [
    { bg: p.surface, month: "AUG", sub: "Day 01", tilt: "-1.5deg" },
    { bg: p.accent, month: "SEP", sub: "Day 02", tilt: "1.2deg" },
    { bg: p.accent2, month: "OCT", sub: "Day 03", tilt: "-1deg" },
  ];
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col" style={{ background: p.bg }}>
        <div
          style={{
            background: p.surface,
            borderBottom: `4px solid ${p.ink}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: large ? "10px 14px" : "6px 8px",
            gap: large ? 10 : 6,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: large ? 8 : 5 }}>
            <span
              style={{
                background: p.ink,
                color: p.surface,
                fontFamily: p.display,
                fontSize: large ? 13 : 8,
                padding: large ? "5px 10px" : "3px 7px",
                border: `3px solid ${p.ink}`,
                borderRadius: 10,
              }}
            >
              CB★
            </span>
            <span
              style={{
                background: p.accent,
                color: p.ink,
                fontFamily: p.body,
                fontWeight: 800,
                fontSize: large ? 10 : 6.5,
                letterSpacing: "0.06em",
                padding: large ? "5px 12px" : "3px 8px",
                border: `3px solid ${p.ink}`,
                borderRadius: 999,
                boxShadow: `4px 4px 0 ${p.ink}`,
              }}
            >
              LINEUP
            </span>
            <span
              style={{
                background: p.accent2,
                color: p.ink,
                fontFamily: p.body,
                fontWeight: 800,
                fontSize: large ? 10 : 6.5,
                letterSpacing: "0.06em",
                padding: large ? "5px 12px" : "3px 8px",
                border: `3px solid ${p.ink}`,
                borderRadius: 999,
                boxShadow: `4px 4px 0 ${p.ink}`,
              }}
            >
              DATES
            </span>
          </div>
          <span
            style={{
              background: p.accent,
              color: p.ink,
              fontFamily: p.body,
              fontWeight: 800,
              fontSize: large ? 10 : 6.5,
              letterSpacing: "0.06em",
              padding: large ? "6px 14px" : "4px 9px",
              border: `3px solid ${p.ink}`,
              borderRadius: 10,
              boxShadow: `4px 4px 0 ${p.ink}`,
            }}
          >
            JOIN →
          </span>
        </div>
        <div style={{ flex: 1, padding: large ? "16px 14px 14px" : "8px 8px 7px" }}>
          <div
            style={{
              display: "inline-block",
              background: p.accent,
              color: p.ink,
              border: `3px solid ${p.ink}`,
              borderRadius: 12,
              boxShadow: `6px 6px 0 ${p.ink}`,
              padding: large ? "8px 16px" : "5px 10px",
              transform: "rotate(-1.5deg)",
              fontFamily: p.display,
              fontSize: large ? 26 : 13,
              lineHeight: 1,
            }}
          >
            FESTIVAL!
          </div>
          <div style={{ display: "flex", gap: large ? 12 : 7, marginTop: large ? 14 : 8 }}>
            {panels.map((panel) => (
              <div
                key={panel.month}
                style={{
                  flex: 1,
                  background: panel.bg,
                  color: p.ink,
                  border: `3px solid ${p.ink}`,
                  borderRadius: 12,
                  boxShadow: `6px 6px 0 ${p.ink}`,
                  transform: `rotate(${panel.tilt})`,
                  padding: large ? "12px 12px 10px" : "6px 7px 5px",
                }}
              >
                <div
                  style={{
                    fontFamily: p.body,
                    fontWeight: 800,
                    fontSize: large ? 10 : 6.5,
                    letterSpacing: "0.08em",
                  }}
                >
                  {panel.sub}
                </div>
                <div style={{ fontFamily: p.display, fontSize: large ? 22 : 12, lineHeight: 1.1 }}>
                  {panel.month}
                </div>
                <div
                  style={{
                    fontFamily: p.body,
                    fontSize: large ? 10 : 6.5,
                    fontWeight: 600,
                    color: panel.bg === p.surface ? p.muted : p.ink,
                    marginTop: large ? 4 : 2,
                  }}
                >
                  12 acts live
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            background: p.accent,
            color: p.ink,
            borderTop: `4px solid ${p.ink}`,
            borderBottom: `4px solid ${p.ink}`,
            padding: large ? "8px 12px" : "4px 8px",
            overflow: "hidden",
            whiteSpace: "nowrap",
            fontFamily: p.body,
            fontWeight: 800,
            fontSize: large ? 11 : 7,
            letterSpacing: "0.06em",
          }}
        >
          ★ MUSIC ★ ART ★ FOOD ★ DANCE ★ MUSIC ★ ART
        </div>
        <div
          style={{
            background: p.ink,
            color: p.surface,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: large ? "9px 14px 18px" : "5px 8px 12px",
            fontFamily: p.body,
            fontWeight: 700,
            fontSize: large ? 10 : 6.5,
            letterSpacing: "0.06em",
          }}
        >
          <span>2026 FEST</span>
          <span style={{ color: p.accent }}>GET TICKETS →</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
