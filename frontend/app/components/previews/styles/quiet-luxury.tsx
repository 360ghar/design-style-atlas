import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function QuietLuxuryPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const s = large ? 1.6 : 1;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col" style={{ background: p.bg, color: p.ink, fontFamily: p.body }}>
        <div className="flex items-center justify-between" style={{ padding: `${8 * s}px ${14 * s}px`, fontSize: 7 * s, color: p.muted }}>
          <span style={{ letterSpacing: "0.3em" }}>LORO</span>
          <span>Collection · Atelier · Journal</span>
          <span>Appointments</span>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center text-center" style={{ padding: `0 ${14 * s}px` }}>
          <div style={{ fontSize: 6 * s, letterSpacing: "0.4em", color: p.accent2 }}>AUTUMN — WINTER</div>
          <div style={{ fontFamily: p.display, fontSize: large ? 32 : 18, marginTop: 6 * s }}>Cashmere, cut close.</div>
          <div style={{ fontSize: 6.5 * s, color: p.muted, marginTop: 6 * s, maxWidth: large ? 380 : 220 }}>If you know, you know. Private appointments only.</div>
          <div style={{ background: "#2B2926", color: "#F7F5F0", fontSize: 6 * s, letterSpacing: "0.25em", padding: `${7 * s}px ${20 * s}px`, marginTop: 12 * s }}>ENQUIRE</div>
        </div>
        <div className="flex items-center justify-between" style={{ padding: `${6 * s}px ${14 * s}px`, borderTop: `1px solid ${p.ink}22`, fontSize: 6 * s, color: p.muted }}>
          <span>Milano · Paris · New York</span><span>№ 04</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
