import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function AfrofuturismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const s = large ? 1.6 : 1;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col" style={{ background: `radial-gradient(circle at 80% 10%, ${p.accent2}33, transparent 45%), radial-gradient(circle at 15% 85%, ${p.accent}2e, transparent 50%), ${p.bg}`, color: p.ink }}>
        <div style={{ height: 5 * s, background: `repeating-linear-gradient(90deg, ${p.accent} 0 14px, ${p.accent2} 14px 20px, ${p.ink} 20px 26px)` }} />
        <div className="flex items-center justify-between" style={{ padding: `${7 * s}px ${12 * s}px`, fontSize: 7 * s }}>
          <span style={{ fontFamily: p.display, color: p.accent, letterSpacing: "0.14em" }}>✦ SOLSTICE</span>
          <span className="flex" style={{ gap: 9 * s, color: p.muted }}><span>Lore</span><span>Starships</span><span>Tour</span></span>
          <span style={{ background: p.accent, color: "#120D1E", borderRadius: 999, padding: `${3 * s}px ${10 * s}px`, fontWeight: 700 }}>Board →</span>
        </div>
        <div className="flex flex-1 flex-col justify-center" style={{ padding: `0 ${12 * s}px` }}>
          <div style={{ fontSize: 7 * s, letterSpacing: "0.3em", color: p.accent2 }}>✦ SOL · ANCESTOR · STARSHIP</div>
          <div style={{ fontFamily: p.display, color: p.accent, fontSize: large ? 36 : 20, lineHeight: 1.02, marginTop: 6 * s }}>GOLD IS<br />SACRED.</div>
          <div style={{ color: p.muted, fontSize: 7.5 * s, marginTop: 6 * s }}>Kente geometry · mudcloth rhythm · percussion layout</div>
          <div className="flex" style={{ gap: 6 * s, marginTop: 9 * s }}>
            <span style={{ border: `1px solid ${p.accent}`, color: p.accent, borderRadius: 999, padding: `${4 * s}px ${12 * s}px`, fontSize: 6.5 * s, fontWeight: 700 }}>LISTEN →</span>
            <span style={{ fontSize: 6.5 * s, color: p.muted, alignSelf: "center" }}>12 tracks · 48 min</span>
          </div>
        </div>
        <div className="flex items-center justify-between" style={{ padding: `${6 * s}px ${12 * s}px`, borderTop: `1px solid ${p.accent}44`, fontSize: 6 * s, color: p.muted }}>
          <span>Lagos · Bahia · Atlanta</span><span>◍ tour MMXXVI</span>
        </div>
        <Meta meta={meta} large={large} />
      </div>
    </Frame>
  );
}
