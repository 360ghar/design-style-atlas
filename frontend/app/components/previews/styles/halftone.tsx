import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

const BURST =
  "polygon(50% 0%,61% 12%,76% 6%,79% 21%,95% 21%,90% 35%,100% 45%,90% 55%,95% 69%,79% 69%,76% 84%,61% 78%,50% 90%,39% 78%,24% 84%,21% 69%,5% 69%,10% 55%,0% 45%,10% 35%,5% 21%,21% 21%,24% 6%,39% 12%)";

export function HalftonePreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div style={{ background: p.bg, height: "100%", display: "flex", flexDirection: "column" }}>
        {/* dot trim */}
        <div
          style={{
            height: large ? 8 : 5,
            backgroundImage: `radial-gradient(${p.ink} 1px, transparent 1.2px)`,
            backgroundSize: large ? "7px 7px" : "5px 5px",
            backgroundPosition: "center",
            borderBottom: `2px solid ${p.ink}`,
          }}
        />
        {/* dot nav */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: large ? "8px 16px" : "6px 10px",
            background: p.surface,
            borderBottom: `2px solid ${p.ink}`,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: large ? 8 : 5 }}>
            <span
              style={{
                width: large ? 30 : 20,
                height: large ? 30 : 20,
                background: p.accent,
                color: p.surface,
                clipPath: BURST,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: p.display,
                fontSize: large ? 8 : 5.5,
              }}
            >
              H!
            </span>
            <span style={{ fontFamily: p.display, fontSize: large ? 12 : 8, color: p.ink, letterSpacing: "0.04em" }}>
              HALFTONE
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: large ? 12 : 7 }}>
            <span style={{ fontFamily: p.body, fontWeight: 700, fontSize: large ? 9 : 6, letterSpacing: "0.1em", color: p.ink }}>
              ISSUES
            </span>
            <span style={{ fontFamily: p.body, fontWeight: 700, fontSize: large ? 9 : 6, letterSpacing: "0.1em", color: p.muted }}>
              ARTISTS
            </span>
            <span
              style={{
                fontFamily: p.body,
                fontWeight: 800,
                fontSize: large ? 9 : 6,
                letterSpacing: "0.08em",
                color: p.surface,
                background: p.accent,
                border: `2px solid ${p.ink}`,
                padding: large ? "5px 10px" : "3px 7px",
                boxShadow: `3px 3px 0 ${p.ink}`,
              }}
            >
              SUBSCRIBE
            </span>
          </div>
        </div>
        {/* hero with portrait block */}
        <div
          style={{
            position: "relative",
            flex: 1,
            display: "flex",
            alignItems: "center",
            gap: large ? 16 : 10,
            padding: large ? "16px 18px" : "10px 12px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `radial-gradient(${p.ink} 1.2px, transparent 1.3px)`,
              backgroundSize: large ? "10px 10px" : "8px 8px",
              opacity: 0.14,
            }}
          />
          <div style={{ position: "relative", flex: 1, minWidth: 0 }}>
            <div
              style={{
                display: "inline-block",
                fontFamily: p.body,
                fontWeight: 800,
                fontSize: large ? 9 : 6,
                letterSpacing: "0.14em",
                color: p.ink,
                background: p.surface,
                border: `2px solid ${p.ink}`,
                padding: large ? "3px 8px" : "2px 6px",
                boxShadow: `3px 3px 0 ${p.ink}`,
              }}
            >
              BEN-DAY №.5 — WEEKLY
            </div>
            <div
              style={{
                fontFamily: p.display,
                fontSize: large ? 40 : 19,
                lineHeight: 0.95,
                color: p.ink,
                marginTop: large ? 10 : 6,
              }}
            >
              PRINT
              <br />
              <span
                style={{
                  background: p.accent2,
                  color: p.surface,
                  padding: "0 8px",
                  border: `2px solid ${p.ink}`,
                  display: "inline-block",
                  marginTop: 2,
                }}
              >
                LOUD!
              </span>
            </div>
            <div style={{ fontFamily: p.body, fontSize: large ? 12 : 7.5, color: p.muted, marginTop: large ? 8 : 5, lineHeight: 1.4 }}>
              Duotone pops, dot shading, ink frames.
            </div>
            <div style={{ display: "flex", gap: large ? 8 : 5, marginTop: large ? 10 : 6 }}>
              <span
                style={{
                  fontFamily: p.body,
                  fontWeight: 800,
                  fontSize: large ? 10 : 6.5,
                  color: p.surface,
                  background: p.accent,
                  border: `2px solid ${p.ink}`,
                  padding: large ? "7px 14px" : "4px 9px",
                  boxShadow: `4px 4px 0 ${p.ink}`,
                }}
              >
                POW! BUY
              </span>
              <span
                style={{
                  fontFamily: p.body,
                  fontWeight: 800,
                  fontSize: large ? 10 : 6.5,
                  color: p.ink,
                  background: p.surface,
                  border: `2px solid ${p.ink}`,
                  padding: large ? "7px 14px" : "4px 9px",
                }}
              >
                PREVIEW
              </span>
            </div>
          </div>
          {/* halftone hero portrait block */}
          <div style={{ position: "relative", flexShrink: 0, transform: "rotate(-1deg)" }}>
            <div
              style={{
                width: large ? 168 : 92,
                border: `3px solid ${p.ink}`,
                background: p.surface,
                boxShadow: `5px 5px 0 ${p.ink}`,
              }}
            >
              <div style={{ position: "relative", height: large ? 118 : 62, background: p.accent2, overflow: "hidden", borderBottom: `3px solid ${p.ink}` }}>
                {/* duotone portrait abstraction */}
                <div style={{ position: "absolute", left: large ? 52 : 26, top: large ? 18 : 10, width: large ? 62 : 34, height: large ? 62 : 34, borderRadius: 999, background: p.surface, border: `3px solid ${p.ink}` }} />
                <div style={{ position: "absolute", left: large ? 38 : 18, bottom: -8, width: large ? 92 : 52, height: large ? 56 : 30, borderRadius: "50% 50% 0 0", background: p.accent, border: `3px solid ${p.ink}` }} />
                <div style={{ position: "absolute", left: large ? 66 : 34, top: large ? 38 : 21, width: large ? 34 : 18, height: large ? 10 : 6, background: p.ink }} />
                {/* dot overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `radial-gradient(${p.surface} 1.2px, transparent 1.3px)`,
                    backgroundSize: large ? "8px 8px" : "6px 6px",
                    opacity: 0.5,
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `radial-gradient(${p.ink} 1px, transparent 1.2px)`,
                    backgroundSize: "9px 9px",
                    opacity: 0.22,
                  }}
                />
              </div>
              <div style={{ padding: large ? "8px 10px" : "5px 7px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 6 }}>
                <div>
                  <div style={{ fontFamily: p.display, fontSize: large ? 11 : 7, color: p.ink, lineHeight: 1 }}>ZAP! #42</div>
                  <div style={{ fontFamily: p.body, fontSize: large ? 9 : 6, color: p.muted, marginTop: 2 }}>32 pgs · dots</div>
                </div>
                <span style={{ fontFamily: p.body, fontWeight: 800, fontSize: large ? 9 : 6, color: p.surface, background: p.accent, border: `2px solid ${p.ink}`, padding: "2px 6px" }}>
                  50% OFF
                </span>
              </div>
            </div>
            <span
              style={{
                position: "absolute",
                right: large ? -16 : -10,
                top: large ? -20 : -12,
                width: large ? 56 : 36,
                height: large ? 56 : 36,
                background: p.accent,
                color: p.surface,
                clipPath: BURST,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: p.display,
                fontSize: large ? 10 : 6.5,
                border: "none",
              }}
            >
              POW!
            </span>
          </div>
        </div>
        {/* screen-tone footer */}
        <div
          style={{
            height: large ? 10 : 7,
            backgroundImage: `radial-gradient(${p.ink} 1px, transparent 1.2px)`,
            backgroundSize: "6px 6px",
            borderTop: `2px solid ${p.ink}`,
            opacity: 0.85,
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: p.ink,
            padding: large ? "8px 16px" : "6px 10px",
          }}
        >
          <span style={{ fontFamily: p.body, fontWeight: 700, fontSize: large ? 9 : 6, letterSpacing: "0.12em", color: p.surface }}>
            SCREEN-TONE · 20% DOTS
          </span>
          <span style={{ fontFamily: p.display, fontSize: large ? 10 : 6.5, letterSpacing: "0.06em", color: p.bg }}>
            NEXT ISSUE →
          </span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
