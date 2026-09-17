import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function GraffitiStreetwearPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const s = large ? 1.6 : 1;
  return (
    <Frame meta={meta} large={large}>
      <div className="relative flex h-full flex-col overflow-hidden" style={{ background: "linear-gradient(160deg,#1A1A1A,#111 70%), repeating-linear-gradient(0deg, transparent 0 26px, #ffffff08 26px 27px)", color: "#fff" }}>
        <div className="flex items-center justify-between" style={{ padding: `${7 * s}px ${12 * s}px`, fontSize: 7 * s, zIndex: 2 }}>
          <span style={{ fontFamily: "'Permanent Marker', cursive" }}>FRESH™</span>
          <span style={{ color: p.muted, fontFamily: "monospace" }}>Lookbook · Archive · Cart (0)</span>
          <span style={{ background: "#fff", color: "#111", borderRadius: 4, padding: `${2 * s}px ${8 * s}px`, fontWeight: 800 }}>☰</span>
        </div>
        <div className="flex flex-1 flex-col justify-center" style={{ padding: `0 ${12 * s}px`, zIndex: 2 }}>
          <div style={{ fontFamily: "'Permanent Marker', cursive", fontSize: large ? 38 : 22, transform: "rotate(-3deg)", textShadow: `3px 3px 0 ${p.accent2}`, lineHeight: 1 }}>fresh<br />wall</div>
          <div className="flex" style={{ gap: 6 * s, marginTop: 9 * s }}>
            <span style={{ background: p.accent, color: "#111", fontWeight: 800, fontSize: 6.5 * s, padding: `${5 * s}px ${12 * s}px`, transform: "rotate(-1deg)" }}>SHOP DROP 07</span>
            <span style={{ border: "1px solid #ffffff55", fontSize: 6.5 * s, padding: `${5 * s}px ${9 * s}px`, fontFamily: "monospace" }}>⏱ 02:14:55</span>
          </div>
        </div>
        <div style={{ background: p.accent2, color: "#fff", fontSize: 6 * s, fontWeight: 800, letterSpacing: "0.2em", padding: `${5 * s}px ${12 * s}px`, zIndex: 2 }}>★ WORLDWIDE SHIPPING ★ NO RESTOCK ★</div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
