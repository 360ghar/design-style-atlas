import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

const BG = "#0B0B12";
const SURFACE = "#14141D";
const INK = "#F2F0FF";
const MUTED = "#8E8AB0";
const ACCENT = "#7C5CFF";
const ACCENT2 = "#00E5FF";
const DISPLAY = "Space Grotesk, Sora, sans-serif";
const BODY = "Inter, Space Grotesk, sans-serif";

export function ThreeDWebDesignPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const pad = large ? 14 : 10;
  return (
    <Frame meta={meta} large={large}>
      <div style={{ position: "relative", display: "flex", flexDirection: "column", height: "100%", overflow: "hidden", background: BG, fontFamily: BODY }}>
        {/* depth glow + vignette */}
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(420px 200px at 20% 0%, #7C5CFF33, transparent 70%), radial-gradient(380px 200px at 88% 30%, #00E5FF22, transparent 70%), radial-gradient(closest-side at 50% 115%, #7C5CFF26, transparent)` }} />
        <div style={{ position: "absolute", inset: 0, boxShadow: "inset 0 0 90px rgba(0,0,0,0.6)", pointerEvents: "none" }} />

        {/* depth nav */}
        <div style={{ position: "relative", zIndex: 2, display: "flex", alignItems: "center", justifyContent: "space-between", padding: `${large ? 10 : 7}px ${pad}px`, background: "rgba(20,20,29,0.88)", borderBottom: `1px solid ${ACCENT}40` }}>
          <div style={{ display: "flex", alignItems: "center", gap: large ? 8 : 5 }}>
            <div style={{ width: large ? 14 : 10, height: large ? 14 : 10, borderRadius: 3, background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT2})`, boxShadow: `0 0 12px ${ACCENT}80`, transform: "rotate(-12deg)" }} />
            <span style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: large ? 9 : 6.5, letterSpacing: "0.12em", color: INK }}>FORM/STUDIO</span>
            <span style={{ display: "flex", gap: large ? 8 : 5, marginLeft: large ? 8 : 4, fontSize: large ? 8 : 6, fontWeight: 600, letterSpacing: "0.08em", color: MUTED }}>
              <span style={{ color: INK }}>01 REVEAL</span>
              <span>02 EXPLORE</span>
              {large ? <span>03 BUY</span> : null}
            </span>
          </div>
          <div style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: large ? 8 : 6, letterSpacing: "0.08em", color: INK, background: ACCENT, borderRadius: 999, padding: large ? "6px 12px" : "4px 9px", boxShadow: `0 0 24px ${ACCENT}80`, cursor: "pointer", whiteSpace: "nowrap" }}>
            CONFIGURE
          </div>
        </div>
        {/* progress rail */}
        <div style={{ position: "relative", zIndex: 2, height: 2, background: `${ACCENT}26` }}>
          <div style={{ width: "38%", height: "100%", background: `linear-gradient(90deg, ${ACCENT}, ${ACCENT2})` }} />
        </div>

        {/* hero scene */}
        <div style={{ position: "relative", zIndex: 1, flex: 1, overflow: "hidden", padding: `0 ${pad}px` }}>
          {/* floor grid */}
          <div style={{ position: "absolute", left: -20, right: -20, bottom: -14, height: "52%", backgroundImage: `linear-gradient(${ACCENT}33 1px, transparent 1px), linear-gradient(90deg, ${ACCENT}33 1px, transparent 1px)`, backgroundSize: "22px 22px", transform: "perspective(320px) rotateX(58deg)", transformOrigin: "bottom", opacity: 0.8 }} />
          <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: "46%", background: `linear-gradient(transparent, ${BG} 88%)` }} />

          {/* kicker + headline over scene */}
          <div style={{ position: "relative", marginTop: large ? 12 : 8, maxWidth: large ? 300 : 200 }}>
            <div style={{ display: "inline-block", fontSize: large ? 7.5 : 5.5, fontWeight: 700, letterSpacing: "0.12em", color: ACCENT2, border: `1px solid ${ACCENT}66`, borderRadius: 999, padding: "3px 9px", background: "rgba(11,11,18,0.6)" }}>
              01 — UNIBODY · SCROLL CHAPTER
            </div>
            <div style={{ marginTop: 6, fontFamily: DISPLAY, fontWeight: 800, lineHeight: 1.02, letterSpacing: "-0.02em", fontSize: large ? 26 : 16, color: INK, textShadow: "0 2px 18px rgba(0,0,0,0.7)" }}>
              Depth that<br />sells the product.
            </div>
            <div style={{ marginTop: 5, fontSize: large ? 9.5 : 7, lineHeight: 1.45, color: MUTED, background: "rgba(11,11,18,0.55)", display: "inline-block", borderRadius: 6 }}>
              Turntable render with rim light. Drag to orbit, scroll to explode.
            </div>
          </div>

          {/* isometric blocks */}
          <div style={{ position: "absolute", right: large ? 26 : 12, top: large ? 18 : 12, width: large ? 132 : 84, height: large ? 132 : 84, perspective: "500px" }}>
            <div style={{ position: "absolute", inset: 0, transform: "rotateX(54deg) rotateZ(45deg)", transformStyle: "preserve-3d" as const }}>
              <div style={{ position: "absolute", left: 8, top: 8, right: 8, bottom: 8, borderRadius: 14, background: SURFACE, border: `1px solid ${ACCENT}40`, boxShadow: "0 30px 100px rgba(0,0,0,0.6)" }} />
              <div style={{ position: "absolute", left: 16, top: 16, right: 16, bottom: 16, borderRadius: 12, background: `linear-gradient(140deg, ${ACCENT}, #3B2A8F)`, border: `1px solid ${ACCENT2}55`, boxShadow: `0 18px 50px rgba(0,0,0,0.6), 0 0 40px ${ACCENT}80`, transform: "translateZ(26px)" }} />
              <div style={{ position: "absolute", left: 30, top: 30, right: 30, bottom: 30, borderRadius: 10, background: `linear-gradient(140deg, ${ACCENT2}, ${ACCENT})`, boxShadow: `0 12px 34px rgba(0,0,0,0.6), 0 0 24px ${ACCENT2}66`, transform: "translateZ(52px)" }} />
              <div style={{ position: "absolute", left: "50%", top: -8, width: 1.5, height: 30, background: `${ACCENT2}88`, transform: "rotate(90deg)", opacity: 0.8 }} />
            </div>
            {/* floating spec plates */}
            <div style={{ position: "absolute", left: large ? -56 : -44, top: large ? 22 : 12, background: SURFACE, border: `1px solid ${ACCENT}40`, borderRadius: 8, padding: large ? "6px 8px" : "4px 6px", boxShadow: "0 30px 100px rgba(0,0,0,0.6)", whiteSpace: "nowrap" }}>
              <div style={{ fontSize: large ? 6.5 : 5, fontWeight: 700, letterSpacing: "0.1em", color: ACCENT2 }}>RIM · 40PX</div>
              <div style={{ fontSize: large ? 8 : 6, fontWeight: 700, color: INK, fontFamily: DISPLAY }}>Aerospace alloy</div>
            </div>
            {large ? (
              <div style={{ position: "absolute", right: -14, bottom: 6, background: SURFACE, border: `1px solid ${ACCENT}40`, borderRadius: 8, padding: "6px 8px", boxShadow: "0 30px 100px rgba(0,0,0,0.6)", whiteSpace: "nowrap" }}>
                <div style={{ fontSize: 6.5, fontWeight: 700, letterSpacing: "0.1em", color: MUTED }}>EXPLODE · 12 PARTS</div>
                <div style={{ fontSize: 8, fontWeight: 700, color: INK, fontFamily: DISPLAY }}>0.4 mm tolerance</div>
              </div>
            ) : null}
          </div>
        </div>

        {/* orbit CTA footer */}
        <div style={{ position: "relative", zIndex: 2, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, padding: `${large ? 9 : 6}px ${pad}px`, background: SURFACE, borderTop: `1px solid ${ACCENT}40` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            {(["◍", "◈", "▤"] as const).map((g, i) => (
              <span key={g} style={{ width: large ? 22 : 17, height: large ? 22 : 17, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: large ? 10 : 8, color: i === 0 ? INK : MUTED, background: i === 0 ? `${ACCENT}33` : "transparent", border: `1px solid ${ACCENT}${i === 0 ? "88" : "40"}`, borderRadius: 999, boxShadow: i === 0 ? `0 0 24px ${ACCENT2}66` : "none" }}>
                {g}
              </span>
            ))}
            <span style={{ marginLeft: 4, fontSize: large ? 7 : 5.5, fontWeight: 700, letterSpacing: "0.1em", color: MUTED }}>DRAG TO ORBIT · 60 FPS</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
            <span style={{ fontSize: large ? 8 : 6, color: MUTED }}>$1,299 · Poster fallback ready</span>
            <span style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: large ? 8.5 : 6.5, color: BG, background: `linear-gradient(90deg, ${ACCENT2}, ${ACCENT})`, borderRadius: 999, padding: large ? "7px 14px" : "5px 10px", boxShadow: `0 0 40px ${ACCENT}80`, whiteSpace: "nowrap", cursor: "pointer" }}>
              BUY IN 3D →
            </span>
          </div>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
