import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function FrutigerAeroPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const s = large ? 1.6 : 1;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col items-center text-center" style={{ background: `radial-gradient(circle at 50% 120%, ${p.accent2}55, transparent 60%), linear-gradient(180deg, #fff, ${p.bg})`, color: p.ink, fontFamily: p.body }}>
        <div className="flex w-full items-center justify-between" style={{ padding: `${7 * s}px ${12 * s}px`, fontSize: 7 * s, color: p.muted }}>
          <span style={{ color: p.ink, fontWeight: 700 }}>◍ aqua</span><span>Nature · Tech · Play</span><span>💧</span>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center" style={{ padding: `0 ${12 * s}px` }}>
          <div className="flex" style={{ gap: 8 * s }}>
            {["◍", "◎", "◍"].map((g, i) => (
              <span key={i} style={{ width: 26 * s, height: 26 * s, borderRadius: "50%", background: `linear-gradient(145deg, #fff, ${p.accent2}88)`, border: "1px solid #ffffff", boxShadow: "0 6px 16px rgba(0,166,126,0.35)", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#0B3B39" }}>{g}</span>
            ))}
          </div>
          <div style={{ fontWeight: 700, fontSize: large ? 26 : 15, marginTop: 8 * s }}>Dewy optimism 2004.</div>
          <div style={{ color: p.muted, fontSize: 7 * s }}>gloss · water · glass fish · hope</div>
          <div className="flex" style={{ gap: 6 * s, marginTop: 9 * s }}>
            <span style={{ background: `linear-gradient(145deg, #fff, ${p.accent2}66)`, border: "1px solid #fff", boxShadow: "0 4px 12px rgba(0,166,126,.3)", borderRadius: 999, padding: `${4 * s}px ${13 * s}px`, fontSize: 7 * s, fontWeight: 700 }}>Dive in →</span>
          </div>
        </div>
        <div style={{ fontSize: 6 * s, color: p.muted, paddingBottom: `${7 * s}px` }}>nature + technology · in harmony</div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
