import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function SynthwavePreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const s = large ? 1.6 : 1;
  return (
    <Frame meta={meta} large={large}>
      <div className="relative flex h-full flex-col overflow-hidden" style={{ background: "linear-gradient(180deg,#0A0118 40%,#4A0E2E 80%,#FF2E88 140%)", color: "#F5EDFF" }}>
        <div className="flex w-full items-center justify-between" style={{ padding: `${7 * s}px ${12 * s}px`, fontSize: 7 * s, color: "#9A86C7", zIndex: 2 }}>
          <span style={{ fontFamily: "Orbitron, monospace", color: "#fff", letterSpacing: "0.2em" }}>OUTRUN</span>
          <span>Synths · Tapes · Night</span>
          <span style={{ border: "1px solid #FFD319", color: "#FFD319", borderRadius: 4, padding: `${2 * s}px ${8 * s}px` }}>▶ MIXTAPE</span>
        </div>
        <div className="relative flex flex-1 flex-col items-center justify-center">
          <div className="pv-flicker" style={{ width: large ? 120 : 72, height: large ? 120 : 72, borderRadius: "50%", background: "linear-gradient(180deg,#FFD319 30%,#FF2E88 75%)", boxShadow: "0 0 50px #FF2E88", overflow: "hidden", position: "relative" }}>
            {[0, 1, 2, 3].map((i) => <div key={i} style={{ position: "absolute", left: 0, right: 0, bottom: 4 + i * 9, height: 2 + i * 1.4, background: "#0A0118" }} />)}
          </div>
          <div style={{ fontFamily: "Orbitron, monospace", fontSize: large ? 16 : 10, letterSpacing: "0.35em", color: "#fff", marginTop: 8, textShadow: "0 0 14px #FF2E88" }}>NIGHT DRIVE</div>
          <div className="absolute inset-x-0 bottom-0" style={{ height: "30%", backgroundImage: "linear-gradient(#FFD31944 1px, transparent 1px), linear-gradient(90deg,#FFD31944 1px, transparent 1px)", backgroundSize: "30px 12px", transform: "perspective(200px) rotateX(60deg)", transformOrigin: "bottom" }} />
        </div>
        <div className="flex w-full items-center justify-between" style={{ padding: `${6 * s}px ${12 * s}px`, fontSize: 6 * s, color: "#9A86C7", zIndex: 2, borderTop: "1px solid #FF2E8844" }}>
          <span>SIDE A · CHROME SUNSET</span><span style={{ color: "#FFD319" }}>98.7 FM →</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
