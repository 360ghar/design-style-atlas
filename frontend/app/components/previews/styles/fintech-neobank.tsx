import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function FintechNeobankPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const s = large ? 1.6 : 1;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col" style={{ background: p.bg, color: p.ink, fontFamily: p.body }}>
        <div className="flex items-center justify-between" style={{ padding: `${8 * s}px ${12 * s}px`, fontSize: 7 * s }}>
          <span>◍ Good evening, Ana</span>
          <span style={{ border: `1px solid ${p.ink}33`, borderRadius: 999, padding: `${2 * s}px ${8 * s}px`, color: p.muted }}>◍ ●</span>
        </div>
        <div style={{ padding: `0 ${12 * s}px` }}>
          <div style={{ background: p.surface, border: `1px solid ${p.ink}22`, borderRadius: 16, padding: `${10 * s}px` }}>
            <div style={{ fontSize: 6.5 * s, color: p.muted, letterSpacing: "0.15em" }}>TOTAL BALANCE</div>
            <div style={{ fontSize: large ? 34 : 20, fontWeight: 700, letterSpacing: "-0.02em" }}>$24,806<span style={{ color: p.accent }}>.12</span></div>
            <div className="flex" style={{ gap: 6 * s, marginTop: 10 * s }}>
              <span style={{ background: p.accent, color: "#0B0D0E", fontWeight: 700, borderRadius: 999, padding: `${4 * s}px ${12 * s}px`, fontSize: 7 * s }}>Send →</span>
              <span style={{ border: `1px solid ${p.ink}33`, borderRadius: 999, padding: `${4 * s}px ${12 * s}px`, fontSize: 7 * s }}>Vaults</span>
            </div>
          </div>
          <div style={{ fontSize: 6 * s, color: p.muted, marginTop: 8 * s, fontFamily: "monospace" }}>◆ metal card · 4.9% APY · instant rails</div>
        </div>
        <div className="flex items-center justify-between" style={{ marginTop: "auto", padding: `${7 * s}px ${14 * s}px`, borderTop: `1px solid ${p.ink}22`, fontSize: 6.5 * s, color: p.muted }}>
          <span style={{ color: p.accent }}>Home</span><span>Cards</span><span>Vaults</span><span>You</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
