import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function GothicVictorianPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const s = large ? 1.6 : 1;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col items-center text-center" style={{ background: `radial-gradient(circle at 50% 0%, ${p.accent}44, transparent 55%), ${p.bg}`, color: p.ink, fontFamily: p.body, padding: `${9 * s}px ${12 * s}px` }}>
        <div style={{ fontSize: 6 * s, letterSpacing: "0.35em", color: p.muted }}>BLACKWOOD MANOR · ❦</div>
        <div style={{ border: `1px solid ${p.accent2}88`, borderRadius: "50% 50% 0 0", padding: `${12 * s}px ${18 * s}px ${10 * s}px`, marginTop: 8 * s }}>
          <div style={{ fontSize: 7 * s, letterSpacing: "0.35em", color: p.accent2 }}>❦ EST · 1888 ❦</div>
          <div style={{ fontFamily: p.display, fontSize: large ? 32 : 18, lineHeight: 1.15, marginTop: 4 * s }}>Haunted<br />elegance.</div>
        </div>
        <div style={{ color: p.muted, fontStyle: "italic", fontFamily: "Georgia, serif", fontSize: 7 * s, marginTop: 8 * s }}>burgundy wax · iron lace · candle smoke</div>
        <div className="flex" style={{ gap: 6 * s, marginTop: 9 * s }}>
          <span style={{ border: `1px solid ${p.accent2}`, color: p.accent2, fontSize: 6.5 * s, letterSpacing: "0.25em", padding: `${5 * s}px ${14 * s}px` }}>RING THE BELL</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
