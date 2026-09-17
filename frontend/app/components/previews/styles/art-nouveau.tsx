import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function ArtNouveauPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const s = large ? 1.6 : 1;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col" style={{ background: p.bg, color: p.ink, fontFamily: p.body }}>
        <div className="flex items-center justify-between" style={{ padding: `${7 * s}px ${12 * s}px`, fontSize: 6.5 * s, letterSpacing: "0.28em", color: p.accent }}>
          <span>❧</span><span>MAISON FLEURETTE</span><span>❧</span>
        </div>
        <div className="flex flex-1 items-center justify-center" style={{ padding: `0 ${12 * s}px` }}>
          <div style={{ border: `2px solid ${p.accent}`, borderRadius: "50% 50% 8px 8px", padding: `${12 * s}px ${20 * s}px`, textAlign: "center", position: "relative", width: "82%", background: p.surface }}>
            <svg viewBox="0 0 100 20" style={{ position: "absolute", top: -9, left: "10%", width: "80%" }}><path d="M0 15 Q 25 0, 50 12 T 100 8" fill="none" stroke={p.accent2} strokeWidth="2" /></svg>
            <div style={{ fontFamily: p.display, fontStyle: "italic", fontSize: large ? 26 : 15 }}>Maison Fleurette</div>
            <div style={{ fontSize: 5.5 * s, letterSpacing: "0.3em", color: p.accent, marginTop: 3 * s }}>PARFUM · 1898</div>
            <div style={{ fontSize: 6.5 * s, color: p.muted, fontStyle: "italic", marginTop: 5 * s }}>lily · iris · stained glass</div>
          </div>
        </div>
        <div className="flex items-center justify-between" style={{ padding: `${6 * s}px ${12 * s}px`, borderTop: `1px solid ${p.accent}55`, fontSize: 6 * s, color: p.muted }}>
          <span>atelier · rue des fleurs</span><span>❦ enter →</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
