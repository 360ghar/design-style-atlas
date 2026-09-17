import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function EightiesRetroPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const s = large ? 1.6 : 1;
  return (
    <Frame meta={meta} large={large}>
      <div className="relative flex h-full flex-col overflow-hidden" style={{ background: "linear-gradient(180deg,#0D0221 30%,#3B0A5E 65%,#FF2E88 130%)", color: "#F5EDFF" }}>
        <div className="flex items-center justify-between" style={{ padding: `${7 * s}px ${12 * s}px`, fontSize: 7 * s, color: "#9A86C7", zIndex: 2 }}>
          <span style={{ fontFamily: "Monoton, cursive", color: "#fff" }}>PALMS</span>
          <span>Tapes · Arcade · Mall</span>
          <span style={{ border: "1px solid #00E5FF", color: "#00E5FF", borderRadius: 4, padding: `${2 * s}px ${8 * s}px` }}>⏵ PLAY</span>
        </div>
        <div className="relative flex flex-1 flex-col items-center justify-center">
          <div style={{ width: 80 * s, height: 80 * s, borderRadius: "50%", background: "linear-gradient(180deg,#FFD319,#FF2E88 70%)", position: "relative", overflow: "hidden", boxShadow: "0 0 40px #FF2E88" }}>
            {[0, 1, 2].map((i) => <div key={i} style={{ position: "absolute", left: 0, right: 0, bottom: 6 + i * 10, height: 3 + i, background: "#0D0221" }} />)}
          </div>
          <div className="absolute inset-x-0 bottom-0" style={{ height: "32%", backgroundImage: "linear-gradient(#00E5FF55 1px, transparent 1px), linear-gradient(90deg, #00E5FF55 1px, transparent 1px)", backgroundSize: "26px 14px", transform: "perspective(220px) rotateX(60deg)", transformOrigin: "bottom" }} />
          <div style={{ fontFamily: "Monoton, cursive", fontSize: large ? 24 : 14, color: "#fff", textShadow: "0 0 18px #00E5FF", marginTop: 6 * s, zIndex: 2 }}>midnight drive</div>
        </div>
        <div className="flex items-center justify-between" style={{ padding: `${6 * s}px ${12 * s}px`, fontSize: 6 * s, color: "#9A86C7", zIndex: 2, borderTop: "1px solid #00E5FF44" }}>
          <span>VHS · SP 0:42:17</span><span style={{ color: "#00E5FF" }}>● REC</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
