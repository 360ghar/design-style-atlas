import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function GeistMinimalPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const s = large ? 1.6 : 1;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col" style={{ background: p.bg, color: p.ink, fontFamily: p.body, padding: `${10 * s}px ${12 * s}px` }}>
        <div className="flex items-center justify-between" style={{ fontFamily: "monospace", fontSize: 6.5 * s, color: p.muted }}>
          <span>▲ vercel/geist</span>
          <span className="flex items-center" style={{ gap: 6 * s }}>
            <span>Docs</span>
            <span style={{ border: `1px solid ${p.ink}22`, borderRadius: 999, padding: "2px 8px" }}>● Ready</span>
          </span>
        </div>
        <div className="flex flex-1 flex-col items-start justify-center">
          <div style={{ fontWeight: 600, fontSize: large ? 36 : 20, letterSpacing: "-0.04em" }}>Ship<span style={{ color: p.accent }}>.</span></div>
          <div style={{ color: p.muted, fontSize: 7.5 * s, marginTop: 4 * s }}>Razor-thin · mono precision · zero chrome</div>
          <div className="flex" style={{ gap: 6 * s, marginTop: 9 * s, fontSize: 7 * s }}>
            <span style={{ background: p.ink, color: "#fff", borderRadius: 6, padding: `${4 * s}px ${12 * s}px`, fontWeight: 600 }}>Deploy →</span>
            <span style={{ border: `1px solid ${p.ink}22`, borderRadius: 6, padding: `${4 * s}px ${12 * s}px`, color: p.muted }}>git push</span>
          </div>
        </div>
        <div style={{ borderTop: `1px solid ${p.ink}14`, paddingTop: 8 * s, fontFamily: "monospace", fontSize: 6 * s, color: p.muted }}>$ deploy —prod · 38s · 100/100</div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
