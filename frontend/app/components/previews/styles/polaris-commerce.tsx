import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function PolarisCommercePreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const s = large ? 1.6 : 1;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col" style={{ background: p.bg, color: p.ink, fontFamily: p.body, padding: `${9 * s}px ${10 * s}px` }}>
        <div className="flex items-center justify-between" style={{ fontSize: 6.5 * s, color: p.muted }}>
          <span><span style={{ fontWeight: 800, color: p.ink }}>★ General Store</span> · Polaris</span>
          <span>Search · Cart (2)</span>
        </div>
        <div className="free-ship" style={{ marginTop: 7 * s, background: `${p.accent}14`, border: `1px solid ${p.accent}44`, borderRadius: 6, fontSize: 6 * s, padding: `${4 * s}px ${8 * s}px` }}>★ Free shipping over $50 — <b>you qualify</b></div>
        <div className="grid grid-cols-3" style={{ gap: 6 * s, marginTop: 7 * s }}>
          {[["Knit", "$48"], ["Lamp", "$129"], ["Chair", "$349"]].map((x) => (
            <div key={x[0]} style={{ border: `1px solid ${p.ink}1c`, borderRadius: 8, padding: `${5 * s}px`, background: p.surface }}>
              <div style={{ height: 24 * s, borderRadius: 6, background: `${p.accent}22` }} />
              <div style={{ fontWeight: 700, fontSize: 7 * s, marginTop: 4 * s }}>{x[0]}</div>
              <div style={{ fontSize: 6.5 * s, color: p.muted }}>{x[1]} ★★★★★</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "auto", background: p.accent, color: "#fff", textAlign: "center", borderRadius: 8, padding: `${6 * s}px`, fontWeight: 700, fontSize: 7.5 * s }}>Checkout →</div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
