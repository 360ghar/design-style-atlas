import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function McBlingPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const s = large ? 1.6 : 1;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col items-center text-center" style={{ background: `radial-gradient(circle at 50% -10%, #ffffff, transparent 60%), linear-gradient(180deg, #fff, ${p.bg})`, color: p.ink, fontFamily: p.body }}>
        <div className="flex w-full items-center justify-between" style={{ padding: `${7 * s}px ${12 * s}px`, fontSize: 6.5 * s, letterSpacing: "0.25em", color: p.muted }}>
          <span>VELVET ROPE</span><span>VIP LIST</span>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center" style={{ padding: `0 ${12 * s}px` }}>
          <div style={{ fontSize: 7 * s, letterSpacing: "0.3em", color: p.accent }}>✦ ✦ JUICY ✦ ✦</div>
          <div style={{ fontFamily: p.display, fontStyle: "italic", fontSize: large ? 38 : 21, lineHeight: 1, marginTop: 4 * s }}>Glamour<br /><span style={{ color: p.accent }}>heist.</span></div>
          <div style={{ border: `1.5px solid ${p.accent2}`, borderRadius: 999, padding: `${4 * s}px ${13 * s}px`, fontSize: 7 * s, fontWeight: 700, marginTop: 10 * s, boxShadow: `0 0 18px ${p.accent2}88`, background: "#ffffffaa" }}>RHINESTONES →</div>
        </div>
        <div style={{ fontSize: 6 * s, color: p.muted, paddingBottom: `${8 * s}px`, letterSpacing: "0.2em" }}>✦ rhinestones · gloss · paparazzi ✦</div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
