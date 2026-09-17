import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function ClaymorphismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const clayCard = `inset 2px 2px 4px rgba(255,255,255,.8), inset -3px -3px 8px ${p.accent}33, 8px 8px 16px ${p.accent}40`;
  const clayPill = `inset 2px 2px 4px rgba(255,255,255,.8), inset -2px -2px 6px ${p.accent}2e, 5px 5px 12px ${p.accent}40`;
  const clayBtn = `inset 2px 2px 4px rgba(255,255,255,.55), inset -3px -3px 8px rgba(0,0,0,.12), 6px 6px 12px ${p.accent}66`;
  const clayDot = `inset 1px 1px 2px rgba(255,255,255,.8), inset -2px -2px 4px rgba(0,0,0,.12), 3px 3px 8px ${p.accent}55`;

  return (
    <Frame meta={meta} large={large}>
      <div className="relative h-full overflow-hidden" style={{ background: p.bg, fontFamily: p.body }}>
        {/* pastel blob ground */}
        <div style={{ position: "absolute", left: "-10%", bottom: "-22%", width: large ? 280 : 150, height: large ? 280 : 150, borderRadius: "50%", background: p.accent, opacity: 0.16 }} />
        <div style={{ position: "absolute", right: "-8%", top: "-16%", width: large ? 240 : 130, height: large ? 240 : 130, borderRadius: "50%", background: p.accent2, opacity: 0.16 }} />

        {/* puffy nav blobs */}
        <div
          style={{
            position: "absolute",
            top: large ? 16 : 9,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            alignItems: "center",
            gap: large ? 10 : 6,
            background: p.surface,
            border: "none",
            borderRadius: 999,
            boxShadow: clayPill,
            padding: large ? "8px 18px 8px 10px" : "5px 12px 5px 6px",
            whiteSpace: "nowrap",
          }}
        >
          <span style={{ display: "inline-flex", alignItems: "center", gap: large ? 7 : 4 }}>
            <span style={{ width: large ? 20 : 12, height: large ? 20 : 12, borderRadius: "50%", background: p.accent, boxShadow: clayDot }} />
            <span style={{ fontFamily: p.display, fontWeight: 800, fontSize: large ? 12 : 7.5, color: p.ink }}>Squish</span>
          </span>
          <span style={{ background: p.accent, color: p.surface, borderRadius: 999, fontSize: large ? 10 : 6, fontWeight: 800, padding: large ? "5px 13px" : "3px 9px", boxShadow: clayDot }}>Save</span>
          <span style={{ fontSize: large ? 10 : 6, fontWeight: 700, color: p.muted }}>Play</span>
          <span style={{ fontSize: large ? 10 : 6, fontWeight: 700, color: p.muted }}>Grow</span>
        </div>

        {/* chunky clay hero card */}
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", padding: large ? 30 : 14, paddingTop: large ? 52 : 30 }}>
          <div
            style={{
              width: large ? "66%" : "72%",
              background: p.surface,
              border: "none",
              borderRadius: large ? 28 : 20,
              boxShadow: clayCard,
              padding: large ? "22px 24px" : "12px 14px",
              color: p.ink,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: large ? 8 : 5 }}>
              <span style={{ width: large ? 22 : 13, height: large ? 22 : 13, borderRadius: "50%", background: p.accent2, boxShadow: clayDot }} />
              <span style={{ fontSize: large ? 9 : 6, fontWeight: 800, letterSpacing: "0.08em", color: p.muted }}>CLAY BANK</span>
            </div>
            <div style={{ fontFamily: p.display, fontWeight: 800, fontSize: large ? 30 : 16, lineHeight: 1.05, marginTop: large ? 10 : 6 }}>
              Soft money, squishy savings
            </div>
            <div style={{ fontSize: large ? 11 : 6.5, marginTop: large ? 6 : 4, color: p.muted, fontWeight: 600 }}>
              Puffy balances that bounce back when you squeeze them.
            </div>
            {/* squishy CTA row */}
            <div style={{ display: "flex", gap: large ? 10 : 6, marginTop: large ? 14 : 9 }}>
              <span
                style={{
                  background: p.accent,
                  color: p.surface,
                  border: "none",
                  borderRadius: 999,
                  fontFamily: p.display,
                  fontSize: large ? 11 : 6.5,
                  fontWeight: 800,
                  padding: large ? "9px 20px" : "5px 13px",
                  boxShadow: clayBtn,
                  cursor: "pointer",
                }}
              >
                Start saving
              </span>
              <span
                style={{
                  background: p.bg,
                  color: p.ink,
                  border: "none",
                  borderRadius: 999,
                  fontSize: large ? 11 : 6.5,
                  fontWeight: 800,
                  padding: large ? "9px 18px" : "5px 12px",
                  boxShadow: clayPill,
                  cursor: "pointer",
                }}
              >
                Play demo
              </span>
            </div>
          </div>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
