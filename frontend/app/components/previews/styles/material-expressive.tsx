import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function MaterialExpressivePreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const s = large ? 1.6 : 1;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col" style={{ background: p.bg, color: p.ink, fontFamily: p.body }}>
        <div className="flex items-center justify-between" style={{ padding: `${8 * s}px ${12 * s}px`, fontSize: 7 * s, fontWeight: 700 }}>
          <span style={{ color: p.accent }}>◍ M3 Expressive</span>
          <span style={{ color: p.muted }}>Play · Tonal · Motion</span>
          <span>☰</span>
        </div>
        <div className="flex flex-1 flex-col justify-center" style={{ gap: 8 * s, padding: `0 ${12 * s}px` }}>
          <div className="flex" style={{ gap: 8 * s }}>
            <span style={{ background: p.accent, color: "#fff", borderRadius: "16px 16px 16px 4px", padding: `${6 * s}px ${12 * s}px`, fontWeight: 700, fontSize: 8 * s }}>Expressive</span>
            <span style={{ background: p.accent2, borderRadius: "16px 16px 4px 16px", padding: `${6 * s}px ${12 * s}px`, fontWeight: 700, fontSize: 8 * s }}>Springy ♪</span>
          </div>
          <div style={{ background: p.surface, borderRadius: 20, padding: `${8 * s}px`, fontSize: 7 * s, color: p.muted }}>Tonal color · big shapes · playful motion · FAB +</div>
          <div className="flex items-center justify-between">
            <span style={{ fontSize: 6.5 * s, color: p.muted }}>spring · 400ms · bouncy</span>
            <span style={{ width: 30 * s, height: 30 * s, borderRadius: 16, background: p.accent, color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 13 * s }}>＋</span>
          </div>
        </div>
        <div style={{ margin: `0 ${12 * s}px ${8 * s}px`, background: p.surface, borderRadius: 999, height: 8 * s, overflow: "hidden" }}>
          <div style={{ width: "62%", height: "100%", background: p.accent, borderRadius: 999 }} />
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
