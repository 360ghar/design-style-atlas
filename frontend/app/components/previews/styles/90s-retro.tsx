import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function NinetiesRetroPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const s = large ? 1.6 : 1;
  return (
    <Frame meta={meta} large={large}>
      <div className="relative flex h-full flex-col overflow-hidden" style={{ background: p.bg, color: p.ink, fontFamily: p.body }}>
        <div className="flex items-center justify-between" style={{ background: p.ink, color: "#fff", padding: `${6 * s}px ${12 * s}px`, fontSize: 7 * s, zIndex: 2 }}>
          <span style={{ fontWeight: 800 }}>◉ KIDTV</span>
          <span>Cartoons · Games · Snacks</span>
          <span style={{ background: p.accent2, color: "#fff", borderRadius: 4, padding: `${2 * s}px ${8 * s}px` }}>▶</span>
        </div>
        <div className="relative flex flex-1 flex-col items-center justify-center overflow-hidden">
          <div style={{ position: "absolute", inset: 0, opacity: 0.5, backgroundImage: `conic-gradient(${p.accent} 25%, transparent 25% 50%, ${p.accent2} 50% 75%, transparent 75%)`, backgroundSize: "26px 26px" }} />
          <div style={{ position: "relative", background: "#fff", border: "3px solid #222", boxShadow: "5px 5px 0 #222", padding: `${9 * s}px ${20 * s}px`, transform: "rotate(-2deg)", textAlign: "center" }}>
            <div style={{ fontFamily: p.display, fontSize: large ? 28 : 16 }}>AS IF!</div>
            <svg viewBox="0 0 120 10" style={{ width: "100%", marginTop: 2 }}><path d="M2 6 L14 3 L26 7 L38 3 L50 7 L62 3 L74 7 L86 3 L98 7 L110 3 L118 6" fill="none" stroke={p.accent2} strokeWidth="3" /></svg>
            <div style={{ display: "flex", gap: 5 * s, marginTop: 7 * s, justifyContent: "center" }}>
              <span style={{ background: p.accent, color: "#fff", border: "2px solid #222", borderRadius: 6, padding: `${3 * s}px ${10 * s}px`, fontSize: 6.5 * s, fontWeight: 800 }}>BOOMBOX</span>
              <span style={{ background: p.accent2, color: "#fff", border: "2px solid #222", borderRadius: 6, padding: `${3 * s}px ${10 * s}px`, fontSize: 6.5 * s, fontWeight: 800 }}>SLIME</span>
            </div>
          </div>
        </div>
        <div style={{ background: `repeating-linear-gradient(90deg, ${p.accent} 0 12px, ${p.accent2} 12px 24px)`, height: 5 * s, zIndex: 2 }} />
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
