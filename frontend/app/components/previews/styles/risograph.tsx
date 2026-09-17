import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

const BG = "#F4F1EA";
const SURFACE = "#FFFFFF";
const INK = "#232323";
const MUTED = "#7A766E";
const ACCENT = "#FF6655";
const ACCENT2 = "#0078BF";
const DISPLAY = "Archivo Black, Space Grotesk, sans-serif";
const BODY = "Space Grotesk, Inter, sans-serif";

// §14 soy grain: fractalNoise at 12% opacity (spec: 10–15%), multiply over paper.
const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)'/%3E%3C/svg%3E\")";

const DOTS = [ACCENT, ACCENT2, INK];

export function RisographPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const pad = large ? 28 : 12;
  const headline = large ? 64 : 22;
  const sub = large ? 14 : 7.5;
  const micro = large ? 9 : 6;
  const chip = large ? 9 : 5.5;

  return (
    <Frame meta={meta} large={large}>
      <div
        className="relative flex h-full flex-col"
        style={{ background: BG, color: INK, fontFamily: BODY }}
      >
        {/* roller marks in margins (§14) */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: 4,
            top: 0,
            bottom: 0,
            width: large ? 8 : 5,
            background: `repeating-linear-gradient(to bottom, ${INK} 0 2px, transparent 2px 8px)`,
            opacity: 0.16,
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            right: 4,
            top: 0,
            bottom: 0,
            width: large ? 8 : 5,
            background: `repeating-linear-gradient(to bottom, ${INK} 0 2px, transparent 2px 8px)`,
            opacity: 0.16,
          }}
        />

        {/* misregistration nav */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: large ? "14px 28px" : "8px 14px",
            borderBottom: `1.5px solid ${INK}`,
            background: BG,
            flexShrink: 0,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: large ? 10 : 6 }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: large ? 22 : 13,
                height: large ? 22 : 13,
                border: `1.5px solid ${INK}`,
                borderRadius: "50%",
                fontSize: large ? 14 : 8,
                fontWeight: 800,
                lineHeight: 1,
              }}
            >
              +
            </span>
            <span style={{ position: "relative", fontWeight: 800, fontSize: large ? 12 : 7, letterSpacing: "0.12em" }}>
              <span aria-hidden="true" style={{ position: "absolute", left: 2, top: 1.5, color: ACCENT2, opacity: 0.8 }}>
                RISO STUDIO
              </span>
              <span style={{ position: "relative", color: INK }}>RISO STUDIO</span>
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: large ? 12 : 7 }}>
            <span style={{ display: "flex", gap: large ? 5 : 3 }}>
              {DOTS.map((c) => (
                <span key={c} style={{ width: large ? 10 : 6, height: large ? 10 : 6, borderRadius: "50%", background: c, border: `1px solid ${INK}` }} />
              ))}
            </span>
            <span style={{ fontSize: micro, fontWeight: 700, letterSpacing: "0.12em", color: INK, whiteSpace: "nowrap" }}>
              EDITIONS
            </span>
            <span style={{ position: "relative", display: "inline-block", flexShrink: 0 }}>
              <span aria-hidden="true" style={{ position: "absolute", left: 2, top: 2, right: -2, bottom: -2, background: ACCENT2 }} />
              <span
                style={{
                  position: "relative",
                  display: "inline-block",
                  background: ACCENT,
                  color: SURFACE,
                  fontSize: micro,
                  fontWeight: 800,
                  letterSpacing: "0.1em",
                  padding: large ? "7px 14px" : "4px 8px",
                  border: `1.5px solid ${INK}`,
                }}
              >
                CART (2)
              </span>
            </span>
          </div>
        </div>

        {/* duotone grain hero */}
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            gap: large ? 24 : 10,
            padding: large ? `28px ${pad}px` : `12px ${pad + 4}px`,
            minHeight: 0,
          }}
        >
          <div style={{ flex: 1.2, minWidth: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: large ? 8 : 4, marginBottom: large ? 12 : 6 }}>
              <span style={{ background: ACCENT, color: SURFACE, border: `1px solid ${INK}`, fontSize: chip, fontWeight: 800, letterSpacing: "0.1em", padding: large ? "4px 10px" : "2px 6px", whiteSpace: "nowrap" }}>
                FLUO PINK
              </span>
              <span style={{ background: ACCENT2, color: SURFACE, border: `1px solid ${INK}`, fontSize: chip, fontWeight: 800, letterSpacing: "0.1em", padding: large ? "4px 10px" : "2px 6px", whiteSpace: "nowrap" }}>
                TEAL
              </span>
              <span style={{ fontSize: chip, fontWeight: 700, letterSpacing: "0.12em", color: MUTED, whiteSpace: "nowrap" }}>
                · 3 DRUMS
              </span>
            </div>
            <div style={{ position: "relative", fontFamily: DISPLAY, fontSize: headline, lineHeight: 0.95, letterSpacing: "-0.01em" }}>
              <div aria-hidden="true" style={{ position: "absolute", left: 3, top: 3, color: ACCENT2, opacity: 0.85 }}>
                SOY
                <br />
                INK
              </div>
              <div style={{ position: "relative", color: ACCENT, mixBlendMode: "multiply" }}>
                SOY
                <br />
                INK
              </div>
            </div>
            <p style={{ marginTop: large ? 12 : 6, fontSize: sub, lineHeight: 1.45, color: INK, maxWidth: large ? 340 : 150 }}>
              Posters pulled fresh off the drum. Loud spots, honest offsets.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: large ? 12 : 6, marginTop: large ? 16 : 8 }}>
              <span style={{ position: "relative", display: "inline-block", flexShrink: 0 }}>
                <span aria-hidden="true" style={{ position: "absolute", left: 2, top: 2, right: -2, bottom: -2, background: ACCENT }} />
                <span
                  style={{
                    position: "relative",
                    display: "inline-block",
                    background: INK,
                    color: SURFACE,
                    fontSize: micro,
                    fontWeight: 800,
                    letterSpacing: "0.1em",
                    padding: large ? "9px 16px" : "5px 9px",
                    whiteSpace: "nowrap",
                  }}
                >
                  SHOP THE DROP
                </span>
              </span>
              <span style={{ fontSize: micro, fontWeight: 700, letterSpacing: "0.1em", color: ACCENT2, textDecoration: "underline", textUnderlineOffset: 3, whiteSpace: "nowrap" }}>
                PROCESS →
              </span>
            </div>
          </div>

          {/* print plate card */}
          <div
            style={{
              flex: 1,
              minWidth: 0,
              maxWidth: large ? 300 : 130,
              background: SURFACE,
              border: `1.5px solid ${INK}`,
              padding: large ? 12 : 6,
              flexShrink: 0,
            }}
          >
            <div style={{ position: "relative", background: BG, border: `1.5px solid ${INK}`, overflow: "hidden", height: large ? 210 : 78 }}>
              <div style={{ position: "absolute", left: large ? 28 : 12, top: large ? 36 : 12, width: large ? 130 : 48, height: large ? 130 : 48, borderRadius: "50%", background: ACCENT, mixBlendMode: "multiply", opacity: 0.9 }} />
              <div style={{ position: "absolute", left: large ? 96 : 38, top: large ? 60 : 22, width: large ? 130 : 48, height: large ? 130 : 48, borderRadius: "50%", background: ACCENT2, mixBlendMode: "multiply", opacity: 0.9 }} />
              <div style={{ position: "absolute", inset: 0, backgroundImage: GRAIN, opacity: 0.12, mixBlendMode: "multiply" }} />
              <span
                style={{
                  position: "absolute",
                  right: large ? 10 : 5,
                  top: large ? 10 : 5,
                  background: INK,
                  color: SURFACE,
                  fontSize: chip,
                  fontWeight: 800,
                  letterSpacing: "0.1em",
                  padding: large ? "4px 8px" : "2px 5px",
                  transform: "rotate(4deg)",
                }}
              >
                № 042
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: large ? 10 : 5 }}>
              <span style={{ fontSize: micro, fontWeight: 800, letterSpacing: "0.1em" }}>GIG POSTER</span>
              <span style={{ background: ACCENT, color: SURFACE, border: `1px solid ${INK}`, fontSize: chip, fontWeight: 800, padding: large ? "3px 8px" : "2px 5px", transform: "rotate(-3deg)", whiteSpace: "nowrap" }}>
                $28
              </span>
            </div>
            <div style={{ fontSize: chip, color: MUTED, letterSpacing: "0.08em", marginTop: 2, fontWeight: 500, whiteSpace: "nowrap" }}>
              2 INKS · 18 × 24 IN
            </div>
          </div>
        </div>

        {/* print-spec footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 8,
            borderTop: `1.5px solid ${INK}`,
            background: SURFACE,
            padding: large ? "10px 28px 30px" : "6px 14px 20px",
            fontSize: micro,
            fontWeight: 700,
            letterSpacing: "0.12em",
            flexShrink: 0,
          }}
        >
          <span style={{ color: INK, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            ED. OF 100 · PINK + TEAL + BLACK
          </span>
          <span style={{ color: MUTED, whiteSpace: "nowrap" }}>80LB UNCOATED</span>
        </div>

        {/* soy grain overlay (§14, 12%) */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: GRAIN,
            opacity: 0.12,
            mixBlendMode: "multiply",
            pointerEvents: "none",
          }}
        />
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
