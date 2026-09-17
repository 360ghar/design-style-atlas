import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function EcoSustainablePreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const s = large ? 1.6 : 1;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col" style={{ background: p.bg, color: p.ink, fontFamily: p.body }}>
        <div className="flex items-center justify-between" style={{ padding: `${7 * s}px ${12 * s}px`, borderBottom: `1.5px dashed ${p.accent}`, fontSize: 7 * s }}>
          <span style={{ fontFamily: p.display, fontWeight: 700 }}>❦ Rooted</span>
          <span className="flex" style={{ gap: 8 * s, color: p.muted }}>
            <span>Shop</span><span>Impact</span><span>Journal</span>
          </span>
          <span style={{ background: p.accent, color: "#fff", borderRadius: 999, padding: `${3 * s}px ${9 * s}px`, fontWeight: 700 }}>Offset →</span>
        </div>
        <div className="flex flex-1 flex-col justify-center" style={{ padding: `0 ${12 * s}px` }}>
          <div className="flex" style={{ gap: 5 * s }}>
            {[["🌳", "1.2M trees"], ["◍", "−48% CO₂"], ["✓", "B-Corp"]].map((b) => (
              <span key={b[1]} style={{ border: `1.5px dashed ${p.accent}`, borderRadius: 10, padding: `${4 * s}px ${7 * s}px`, fontSize: 6 * s, fontWeight: 700, background: p.surface }}>{b[0]} {b[1]}</span>
            ))}
          </div>
          <div style={{ fontFamily: p.display, fontSize: (large ? 28 : 16), lineHeight: 1.05, marginTop: 8 * s }}>Receipts,<br />not promises.</div>
          <div style={{ fontSize: 6.5 * s, color: p.muted, marginTop: 4 * s }}>Every order plants one. Track yours ↓</div>
          <div style={{ height: 6 * s, background: "#DDE5D5", borderRadius: 999, marginTop: 8 * s, overflow: "hidden" }}>
            <div style={{ width: "72%", height: "100%", background: `linear-gradient(90deg, ${p.accent}, ${p.accent2})`, borderRadius: 999 }} />
          </div>
        </div>
        <div className="flex items-center justify-between" style={{ padding: `${6 * s}px ${12 * s}px`, background: p.surface, borderTop: `1px solid ${p.accent}44`, fontSize: 6 * s, color: p.muted }}>
          <span>♻ post-consumer kraft · soy inks</span><span>72% of goal</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
