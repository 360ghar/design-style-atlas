import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function Web3CryptoPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const s = large ? 1.6 : 1;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col" style={{ background: p.bg, color: p.ink, fontFamily: p.body }}>
        <div className="flex items-center justify-between" style={{ padding: `${7 * s}px ${12 * s}px`, fontSize: 7 * s }}>
          <span style={{ fontWeight: 700 }}>◈ Prism</span>
          <span style={{ color: p.muted }}>Swap · Pool · Earn</span>
          <span style={{ background: `${p.accent}22`, border: `1px solid ${p.accent}55`, color: p.accent, borderRadius: 999, padding: `${2 * s}px ${8 * s}px`, fontFamily: "monospace" }}>◈ 0x7f…9a2c</span>
        </div>
        <div style={{ padding: `0 ${12 * s}px` }}>
          <div style={{ borderRadius: 16, padding: `${10 * s}px`, background: `linear-gradient(135deg, ${p.surface}, #0D1424)`, border: `1px solid ${p.accent}55`, boxShadow: `0 0 32px ${p.accent}33` }}>
            <div className="flex items-center justify-between" style={{ fontSize: 6.5 * s, color: p.muted, fontFamily: "monospace" }}><span>● mainnet</span><span>24h</span></div>
            <div style={{ fontSize: large ? 30 : 18, fontWeight: 700, marginTop: 6 * s }}>4.281 <span style={{ fontSize: large ? 14 : 9, color: p.muted }}>ETH</span></div>
            <div style={{ fontSize: 7 * s, color: p.accent }}>+$1,204.88 (24h) ↗</div>
            <div className="flex" style={{ gap: 6 * s, marginTop: 9 * s }}>
              <span style={{ flex: 1, textAlign: "center", background: p.accent, color: "#060A14", fontWeight: 700, borderRadius: 10, padding: `${5 * s}px`, fontSize: 7 * s }}>Swap</span>
              <span style={{ flex: 1, textAlign: "center", border: `1px solid ${p.ink}33`, borderRadius: 10, padding: `${5 * s}px`, fontSize: 7 * s }}>Bridge</span>
            </div>
          </div>
          <div className="flex items-center justify-between" style={{ fontSize: 6 * s, color: p.muted, fontFamily: "monospace", marginTop: 7 * s }}>
            <span>gas 12 gwei · fast</span><span>✓ audited</span>
          </div>
        </div>
        <div className="flex items-center justify-between" style={{ marginTop: "auto", padding: `${7 * s}px ${14 * s}px`, borderTop: `1px solid ${p.ink}22`, fontSize: 6.5 * s, color: p.muted }}>
          <span>Wallet</span><span>Activity</span><span style={{ color: p.accent }}>Trade</span><span>More</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
