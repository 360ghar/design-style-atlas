import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function DatavizTerminalPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const s = large ? 1.6 : 1;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col font-mono" style={{ background: p.bg, color: p.ink, padding: `${9 * s}px ${10 * s}px` }}>
        <div className="flex items-center justify-between" style={{ fontSize: 6.5 * s, color: p.muted }}>
          <span className="flex" style={{ gap: 8 * s }}><span style={{ color: p.ink, fontWeight: 700 }}>$ mkt —live</span><span>FX</span><span>FUT</span></span>
          <span style={{ color: p.accent2 }}>● streaming</span>
        </div>
        {[["NDX", "+1.24%", 82, p.accent2], ["SPX", "−0.31%", 44, "#FF453A"], ["BTC", "+4.02%", 92, p.accent]].map((r) => (
          <div key={r[0] as string} className="flex items-center" style={{ gap: 8 * s, marginTop: 7 * s, fontSize: 7 * s }}>
            <span style={{ width: 30 * s }}>{r[0]}</span>
            <div style={{ flex: 1, height: 6 * s, background: `${p.ink}14`, borderRadius: 3 }}>
              <div style={{ width: `${r[2]}%`, height: "100%", background: r[3] as string, borderRadius: 3 }} />
            </div>
            <span style={{ color: r[3] as string }}>{r[1]}</span>
          </div>
        ))}
        <div className="flex" style={{ gap: 6 * s, marginTop: 9 * s, fontSize: 6 * s }}>
          <span style={{ background: p.accent, color: "#0A0E14", borderRadius: 4, padding: `${3 * s}px ${9 * s}px`, fontWeight: 700 }}>BUY</span>
          <span style={{ border: `1px solid ${p.ink}44`, borderRadius: 4, padding: `${3 * s}px ${9 * s}px` }}>SELL</span>
          <span style={{ color: p.muted, alignSelf: "center" }}>09:41:07.112</span>
        </div>
        <div style={{ marginTop: "auto", color: p.muted, fontSize: 6 * s, borderTop: `1px solid ${p.ink}22`, paddingTop: 6 * s }}>blotter · 28px rows · 12px mono</div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
