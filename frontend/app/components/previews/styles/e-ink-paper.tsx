import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function EInkPaperPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const s = large ? 1.6 : 1;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col" style={{ background: p.bg, color: p.ink, fontFamily: p.body }}>
        <div className="flex items-center justify-between" style={{ padding: `${7 * s}px ${14 * s}px`, fontSize: 6.5 * s, color: p.muted, borderBottom: `1px solid ${p.ink}18` }}>
          <span>❦ Library</span><span>68% read</span>
        </div>
        <div style={{ height: 2, background: `${p.ink}18` }}><div style={{ width: "68%", height: "100%", background: p.accent }} /></div>
        <div className="flex flex-1 flex-col justify-center" style={{ padding: `0 ${14 * s}px` }}>
          <div style={{ fontSize: 6.5 * s, letterSpacing: "0.25em", color: p.accent }}>CHAPTER THREE</div>
          <div style={{ fontFamily: p.display, fontSize: large ? 28 : 16, lineHeight: 1.25, marginTop: 6 * s }}>The quiet page<br />holds attention.</div>
          <div style={{ color: p.muted, fontFamily: "Georgia, serif", fontSize: 7.5 * s, marginTop: 8 * s, lineHeight: 1.6 }}>No glow, no noise — just warm paper and one serif voice. ¹</div>
          <div style={{ marginTop: 8 * s, fontSize: 6 * s, color: p.muted }}>¹ distraction-free by design</div>
        </div>
        <div className="flex items-center justify-between" style={{ padding: `${6 * s}px ${14 * s}px`, borderTop: `1px solid ${p.ink}18`, fontSize: 6 * s, color: p.muted }}>
          <span>← p. 112</span><span>serif · 18px · warm</span><span>p. 114 →</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
