import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function ArtDecoPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const s = large ? 1.6 : 1;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col items-center text-center" style={{ background: p.bg, color: p.ink, borderTop: `3px solid ${p.accent}`, borderBottom: `3px solid ${p.accent}` }}>
        <div className="flex w-full items-center justify-between" style={{ padding: `${7 * s}px ${12 * s}px`, fontSize: 6.5 * s, letterSpacing: "0.3em", color: p.muted }}>
          <span>❖</span><span>GRAND HOTEL · 1925</span><span>❖</span>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center" style={{ padding: `0 ${12 * s}px` }}>
          <svg viewBox="0 0 120 26" style={{ width: large ? 190 : 115 }}><g fill="none" stroke={p.accent} strokeWidth="1.6">{[0, 1, 2, 3, 4, 5, 6].map((i) => <line key={i} x1={10 + i * 8} y1="24" x2="60" y2="4" />)}{[0, 1, 2, 3, 4, 5, 6].map((i) => <line key={`b${i}`} x1={110 - i * 8} y1="24" x2="60" y2="4" />)}</g><circle cx="60" cy="4" r="2.5" fill={p.accent} /></svg>
          <div style={{ fontFamily: p.display, fontSize: large ? 32 : 18, letterSpacing: "0.12em", marginTop: 6 * s }}>GATSBY</div>
          <div style={{ fontSize: 5.5 * s, letterSpacing: "0.45em", color: p.accent }}>❖ JAZZ · 1925 ❖</div>
          <div style={{ display: "flex", gap: 6 * s, marginTop: 10 * s }}>
            <span style={{ border: `1px solid ${p.accent}`, color: p.accent, fontSize: 5.5 * s, letterSpacing: "0.3em", padding: `${5 * s}px ${14 * s}px` }}>RESERVE A TABLE</span>
          </div>
        </div>
        <div className="flex w-full items-center justify-between" style={{ padding: `${6 * s}px ${12 * s}px`, borderTop: `1px solid ${p.accent}55`, fontSize: 6 * s, letterSpacing: "0.25em", color: p.muted }}>
          <span>SPEAKEASY ↓</span><span style={{ color: p.accent2 }}>◆ FIFTH AVE</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
