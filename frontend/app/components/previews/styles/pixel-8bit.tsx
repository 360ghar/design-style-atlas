import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function Pixel8BitPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const s = large ? 1.6 : 1;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col" style={{ fontFamily: "'Press Start 2P', monospace", background: p.bg, color: "#fff", backgroundImage: "repeating-linear-gradient(0deg, transparent 0 3px, #00000055 3px 4px)" }}>
        <div className="flex items-center justify-between" style={{ padding: `${7 * s}px ${12 * s}px`, fontSize: 6 * s }}>
          <span>SCORE 48210</span><span style={{ color: p.accent }}>HI 999990</span><span>♥♥♥</span>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center" style={{ padding: `0 ${12 * s}px` }}>
          <div style={{ fontSize: large ? 16 : 10 }}>READY PLAYER 1</div>
          <div style={{ fontSize: large ? 9 : 6, color: p.accent, marginTop: 8 * s }}>- PRESS START -</div>
          <div className="pv-blink" style={{ fontSize: large ? 12 : 8, color: "#FFD802", marginTop: 6 * s }}>▼ INSERT COIN ▼</div>
          <div className="flex" style={{ gap: 4 * s, marginTop: 10 * s }}>
            {["#FF003C", "#FFD802", "#7DF9FF", "#7CFF6B"].map((c) => <span key={c} style={{ width: 10 * s, height: 10 * s, background: c, boxShadow: "2px 2px 0 #000" }} />)}
          </div>
        </div>
        <div className="flex items-center justify-between" style={{ padding: `${6 * s}px ${12 * s}px`, fontSize: 5.5 * s, color: p.muted, borderTop: "2px solid #000" }}>
          <span>◀ A · B ▶</span><span>1UP · STAGE 03</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
