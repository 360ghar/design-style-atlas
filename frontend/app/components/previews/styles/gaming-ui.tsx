import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function GamingUIPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const s = large ? 1.6 : 1;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col" style={{ fontFamily: p.display, background: p.bg, color: p.ink, padding: `${7 * s}px ${10 * s}px` }}>
        <div className="flex items-center justify-between" style={{ fontSize: 6.5 * s, color: p.muted }}>
          <span style={{ fontWeight: 800, color: p.ink, letterSpacing: "0.12em" }}>◆ GUILD</span>
          <span>Party (4) · Map · Shop</span>
          <span style={{ background: p.accent, color: "#06090F", borderRadius: 4, padding: `${2 * s}px ${8 * s}px`, fontWeight: 800 }}>QUEUE</span>
        </div>
        <div className="flex items-center" style={{ gap: 8 * s, marginTop: 8 * s }}>
          <span style={{ width: 22 * s, height: 22 * s, borderRadius: "50%", border: `3px solid ${p.accent2}`, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 6.5 * s, fontWeight: 800, flexShrink: 0 }}>42</span>
          <div style={{ flex: 1 }}>
            <div className="flex justify-between" style={{ fontSize: 5.5 * s, color: p.muted }}><span>XP — LVL 42</span><span>8,210 / 10,000</span></div>
            <div style={{ background: "#222", height: 6 * s, clipPath: "polygon(0 0,100% 0,98% 100%,0 100%)", marginTop: 3 * s }}><div style={{ width: "82%", height: "100%", background: `linear-gradient(90deg, ${p.accent}, ${p.accent2})` }} /></div>
          </div>
          <span style={{ fontSize: 6 * s, color: p.accent2, fontWeight: 800 }}>◆ 1,240</span>
        </div>
        <div className="grid grid-cols-3" style={{ gap: 6 * s, marginTop: 8 * s }}>
          {[["DAILY", "common", "#8A8F98"], ["STREAK ×7", "rare", p.accent], ["BOSS DOWN", "LEGENDARY", p.accent2]].map((q) => (
            <div key={q[0]} style={{ border: `2px solid ${q[2]}`, padding: `${5 * s}px`, background: p.surface, clipPath: "polygon(8px 0,100% 0,100% calc(100% - 8px),calc(100% - 8px) 100%,0 100%,0 8px)" }}>
              <div style={{ fontSize: 4.5 * s, color: q[2], letterSpacing: "0.15em" }}>{q[1]}</div>
              <div style={{ fontWeight: 800, fontSize: 6.5 * s }}>{q[0]}</div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between" style={{ marginTop: "auto", paddingTop: 7 * s, fontSize: 6 * s, color: p.muted }}>
          <span>◉ LFG · whisper</span><span style={{ color: p.accent }}>READY ✓</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
