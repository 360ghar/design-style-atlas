import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function SeventiesRetroPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const s = large ? 1.6 : 1;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col" style={{ background: p.bg, color: p.ink, fontFamily: p.body }}>
        <div style={{ height: 5 * s, background: "linear-gradient(90deg,#B33A2B,#D96C2B,#D9A441,#7A8450,#8A4A2B)" }} />
        <div className="flex items-center justify-between" style={{ padding: `${7 * s}px ${12 * s}px`, fontSize: 7 * s, color: p.muted }}>
          <span style={{ fontFamily: p.display, color: p.ink }}>✿ Fern &amp; Funk</span>
          <span>Records · Sofas · Lamps</span>
          <span style={{ background: p.accent, color: "#fff", borderRadius: 999, padding: `${3 * s}px ${9 * s}px` }}>Dig in</span>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center overflow-hidden text-center" style={{ padding: `0 ${12 * s}px` }}>
          <svg viewBox="0 0 200 44" style={{ width: large ? 260 : 150 }}><g fill="none" strokeWidth="9">{["#B33A2B", "#D96C2B", "#D9A441", "#7A8450", "#8A4A2B"].map((c, i) => <path key={c} d={`M${10 + i * 6} 44 A ${80 - i * 6} ${80 - i * 6} 0 0 1 ${190 - i * 6} 44`} stroke={c} />)}</g></svg>
          <div style={{ fontFamily: p.display, fontSize: large ? 34 : 19, color: "#5B3A1E", marginTop: -6 * s }}>groovy, baby</div>
          <div style={{ fontSize: 6 * s, letterSpacing: "0.25em", color: p.muted, marginTop: 3 * s }}>ORANGE · GOLD · AVOCADO ✿</div>
        </div>
        <div className="flex items-center justify-between" style={{ padding: `${6 * s}px ${12 * s}px`, borderTop: `1px solid ${p.ink}33`, fontSize: 6 * s, color: p.muted }}>
          <span>♪ vinyl · shag · fondue</span><span>side B →</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
