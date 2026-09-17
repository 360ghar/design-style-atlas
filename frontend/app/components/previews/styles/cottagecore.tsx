import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function CottagecorePreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const s = large ? 1.6 : 1;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col" style={{ background: p.bg, color: p.ink, fontFamily: p.body, backgroundImage: `repeating-linear-gradient(0deg, ${p.accent}14 0 10px, transparent 10px 20px), repeating-linear-gradient(90deg, ${p.accent}14 0 10px, transparent 10px 20px)` }}>
        <div className="flex items-center justify-between" style={{ padding: `${7 * s}px ${12 * s}px`, fontSize: 7 * s }}>
          <span style={{ fontFamily: p.display, fontStyle: "italic" }}>❀ Bramble &amp; Thyme</span>
          <span style={{ color: p.muted }}>Pantry · Garden · Letters</span>
          <span style={{ border: `1px solid ${p.ink}55`, borderRadius: 999, padding: `${2 * s}px ${8 * s}px` }}>Basket (2)</span>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center text-center" style={{ padding: `0 ${12 * s}px` }}>
          <div style={{ fontSize: large ? 13 : 8 }}>🌿 🍓 🌼</div>
          <div style={{ fontFamily: p.display, fontStyle: "italic", fontSize: large ? 30 : 18, lineHeight: 1.1, marginTop: 6 * s }}>slow living,<br />wildflowers</div>
          <div style={{ border: `1px solid ${p.ink}55`, background: p.surface, borderRadius: 999, padding: `${4 * s}px ${11 * s}px`, fontSize: 7 * s, marginTop: 10 * s }}>bake · mend · gather →</div>
        </div>
        <div className="flex items-center justify-between" style={{ padding: `${6 * s}px ${12 * s}px`, borderTop: `1px solid ${p.ink}33`, fontSize: 6 * s, color: p.muted }}>
          <span>market saturdays · 9–1</span><span>preserves № 12</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
