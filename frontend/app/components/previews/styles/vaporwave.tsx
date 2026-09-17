import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function VaporwavePreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const s = large ? 1.6 : 1;
  return (
    <Frame meta={meta} large={large}>
      <div className="relative flex h-full flex-col overflow-hidden text-center" style={{ background: `linear-gradient(180deg,${p.bg} 20%,#5B2EE5 60%,#FF71CE 90%)`, color: "#F5EDFF" }}>
        <div className="flex items-center justify-between" style={{ padding: `${7 * s}px ${12 * s}px`, fontSize: 6.5 * s, letterSpacing: "0.25em", zIndex: 2, color: "#F5EDFF" }}>
          <span>フロリダ MALL</span><span>FOOD COURT · ARCADE</span><span>1991</span>
        </div>
        <div className="relative flex flex-1 flex-col items-center justify-center" style={{ zIndex: 2 }}>
          <div style={{ position: "absolute", top: "4%", fontSize: large ? 30 : 18 }}>🗿</div>
          <div style={{ fontFamily: p.display, fontSize: large ? 40 : 24, textShadow: `3px 3px 0 ${p.accent2}` }}>ＡＥＳＴＨＥＴＩＣ</div>
          <div style={{ fontSize: 6 * s, letterSpacing: "0.3em", marginTop: 4 * s }}>フロリダ · 1991 · mallwave</div>
          <div style={{ display: "flex", gap: 6 * s, marginTop: 8 * s }}>
            <span style={{ border: "1px solid #F5EDFF", padding: `${4 * s}px ${12 * s}px`, fontSize: 6.5 * s, letterSpacing: "0.2em" }}>▶ DELETE MEMORIES</span>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0" style={{ height: "34%", backgroundImage: `linear-gradient(${p.accent2}66 1px, transparent 1px), linear-gradient(90deg,${p.accent2}66 1px, transparent 1px)`, backgroundSize: "24px 12px", transform: "perspective(200px) rotateX(62deg)", transformOrigin: "bottom" }} />
        <div className="flex items-center justify-between" style={{ padding: `${6 * s}px ${12 * s}px`, fontSize: 6 * s, zIndex: 2, color: "#F5EDFF", borderTop: "1px solid #F5EDFF44" }}>
          <span>VHS · SP</span><span>ESC to exit the mall</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
