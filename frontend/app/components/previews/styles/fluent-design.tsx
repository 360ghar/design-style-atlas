import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function FluentDesignPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const s = large ? 1.6 : 1;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col" style={{ background: `linear-gradient(140deg, ${p.accent}26, transparent 55%), ${p.bg}`, color: p.ink, fontFamily: p.body }}>
        <div className="flex items-center justify-between" style={{ padding: `${7 * s}px ${12 * s}px`, fontSize: 7 * s }}>
          <span style={{ fontWeight: 600 }}>▦ Contoso</span>
          <span style={{ color: p.muted }}>Files · Teams · Insights</span>
          <span style={{ background: "#ffffffcc", backdropFilter: "blur(12px)", border: "1px solid #fff", borderRadius: 4, padding: `${2 * s}px ${8 * s}px` }}>Sign in</span>
        </div>
        <div className="flex flex-1 items-center justify-center" style={{ padding: `0 ${12 * s}px` }}>
          <div style={{ background: "#ffffffcc", backdropFilter: "blur(18px)", border: "1px solid #ffffff", borderRadius: 4, boxShadow: "0 12px 32px rgba(0,120,212,0.18)", padding: `${12 * s}px ${14 * s}px`, maxWidth: large ? 340 : 210 }}>
            <div style={{ fontSize: 6.5 * s, letterSpacing: "0.2em", color: p.accent }}>ACRYLIC · LIGHT · DEPTH</div>
            <div style={{ fontWeight: 600, fontSize: large ? 22 : 13, marginTop: 6 * s }}>Calm enterprise clarity.</div>
            <div style={{ marginTop: 10 * s, height: 4, background: `${p.ink}12` }}><div style={{ width: "64%", height: "100%", background: p.accent }} /></div>
            <div className="flex" style={{ gap: 6 * s, marginTop: 9 * s }}>
              <span style={{ background: p.accent, color: "#fff", fontSize: 6.5 * s, padding: `${4 * s}px ${12 * s}px`, borderRadius: 2 }}>Continue →</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between" style={{ padding: `${6 * s}px ${12 * s}px`, fontSize: 6 * s, color: p.muted }}>
          <span>depth · light · motion</span><span>365 · synced</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
