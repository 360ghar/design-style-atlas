import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function ChaosDesignPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const ink3 = `3px solid ${p.ink}`;
  const ink2 = `2.5px solid ${p.ink}`;
  const fs = {
    logo: large ? 13 : 8,
    link: large ? 10 : 6.5,
    cta: large ? 10 : 6.5,
    h1: large ? 30 : 17,
    sub: large ? 11 : 7,
    badge: large ? 10 : 6.5,
    foot: large ? 9 : 6,
  };
  return (
    <Frame meta={meta} large={large}>
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          overflow: "hidden",
          background: p.bg,
          fontFamily: p.body,
          color: p.ink,
        }}
      >
        {/* colliding nav — taped bar, rotated -0.5deg, bleeds edges */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 8,
            background: p.surface,
            borderBottom: ink2,
            padding: large ? "8px 14px" : "5px 9px",
            transform: "rotate(-0.5deg)",
            width: "104%",
            marginLeft: "-2%",
            marginTop: "-1px",
            flexShrink: 0,
            zIndex: 5,
          }}
        >
          <span
            style={{
              fontFamily: p.display,
              fontSize: fs.logo,
              background: p.accent,
              color: p.surface,
              border: ink2,
              boxShadow: `3px 3px 0 ${p.ink}`,
              padding: large ? "3px 9px" : "2px 6px",
              transform: "rotate(-3deg)",
              whiteSpace: "nowrap",
            }}
          >
            MESS&amp;CO
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: large ? 10 : 6 }}>
            <span
              style={{
                fontSize: fs.link,
                fontWeight: 800,
                boxShadow: `inset 0 -0.65em ${p.accent}55`,
                padding: "0 2px",
                whiteSpace: "nowrap",
              }}
            >
              Drops
            </span>
            <span style={{ fontSize: fs.link, fontWeight: 700, color: p.muted, whiteSpace: "nowrap" }}>
              Lookbook
            </span>
            <span
              style={{
                fontSize: fs.cta,
                fontWeight: 900,
                background: p.accent2,
                color: p.surface,
                border: ink2,
                boxShadow: `3px 3px 0 ${p.ink}`,
                padding: large ? "5px 11px" : "3px 7px",
                transform: "rotate(2deg)",
                whiteSpace: "nowrap",
              }}
            >
              SHOP →
            </span>
          </span>
        </div>

        {/* overlapping hero panels */}
        <div style={{ position: "relative", flex: 1, overflow: "hidden", padding: large ? 16 : 10 }}>
          {/* tape strip on main panel */}
          <div
            style={{
              position: "absolute",
              left: "16%",
              top: large ? 8 : 4,
              width: large ? 88 : 56,
              height: large ? 16 : 10,
              background: p.surface,
              opacity: 0.75,
              border: `1px solid ${p.muted}`,
              transform: "rotate(-6deg)",
              zIndex: 4,
            }}
          />
          {/* main headline panel */}
          <div
            style={{
              position: "relative",
              width: "80%",
              background: p.surface,
              border: ink3,
              boxShadow: `5px 5px 0 ${p.ink}`,
              padding: large ? "12px 14px 13px" : "7px 9px 8px",
              transform: "rotate(-2deg)",
              zIndex: 3,
            }}
          >
            <div style={{ fontSize: fs.sub, fontWeight: 900, letterSpacing: "0.08em", color: p.muted }}>
              DROP 07 — FESTIVAL PACK
            </div>
            <div style={{ fontFamily: p.display, fontSize: fs.h1, lineHeight: 0.95, marginTop: 4 }}>
              BEAUTI
              <span style={{ boxShadow: `inset 0 -0.38em ${p.accent}` }}>FUL</span>
              <br />
              ACCIDENT
            </div>
            <div style={{ fontSize: fs.sub, fontWeight: 600, marginTop: large ? 8 : 5, maxWidth: "92%" }}>
              24 pieces. Rotated, taped, colliding — still checks out.
            </div>
          </div>

          {/* colliding dark panel, overlaps main by ~28px */}
          <div
            style={{
              position: "absolute",
              right: large ? 12 : 8,
              top: large ? 64 : 40,
              width: "52%",
              background: p.ink,
              color: p.surface,
              border: ink2,
              boxShadow: `4px 4px 0 ${p.accent}`,
              padding: large ? "10px 11px" : "6px 7px",
              transform: "rotate(3deg)",
              zIndex: 4,
            }}
          >
            <div style={{ fontFamily: p.display, fontSize: fs.badge }}>50% OFF</div>
            <div style={{ fontSize: fs.sub, fontWeight: 600, marginTop: 2, opacity: 0.85 }}>
              ends midnight. no restocks.
            </div>
            <div
              style={{
                marginTop: large ? 8 : 5,
                background: p.surface,
                color: p.ink,
                fontSize: fs.cta,
                fontWeight: 900,
                textAlign: "center",
                padding: large ? "6px 0" : "4px 0",
                border: `2px solid ${p.surface}`,
                boxShadow: `2px 2px 0 ${p.accent2}`,
              }}
            >
              GRAB IT →
            </div>
          </div>

          {/* sticker badge breaking the edge */}
          <div
            style={{
              position: "absolute",
              left: "62%",
              top: large ? 46 : 28,
              fontFamily: p.display,
              fontSize: fs.badge,
              background: p.accent2,
              color: p.surface,
              border: ink2,
              borderRadius: 999,
              padding: large ? "6px 12px" : "4px 8px",
              transform: "rotate(-8deg)",
              boxShadow: `2px 2px 0 ${p.ink}`,
              zIndex: 5,
              whiteSpace: "nowrap",
            }}
          >
            ★ NEW!
          </div>
        </div>

        {/* sticker footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 8,
            background: p.ink,
            color: p.surface,
            padding: large ? "7px 14px 9px" : "5px 9px 6px",
            transform: "rotate(0.5deg)",
            width: "104%",
            marginLeft: "-2%",
            marginBottom: "-2px",
            flexShrink: 0,
            zIndex: 5,
          }}
        >
          <span style={{ fontSize: fs.foot, fontWeight: 800, letterSpacing: "0.06em" }}>
            ★ NO RESTOCKS ★ WORLDWIDE
          </span>
          <span
            style={{
              fontSize: fs.foot,
              fontWeight: 900,
              background: p.accent,
              color: p.surface,
              borderRadius: 999,
              padding: large ? "3px 10px" : "2px 7px",
              transform: "rotate(-3deg)",
              whiteSpace: "nowrap",
            }}
          >
            SALE ENDS?!
          </span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
