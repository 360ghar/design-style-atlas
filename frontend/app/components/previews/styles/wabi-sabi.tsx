import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function WabiSabiPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const s = large ? 1.6 : 1;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full" style={{ background: p.bg, color: p.ink, fontFamily: p.body }}>
        <div className="flex w-[18%] flex-col items-center justify-between" style={{ padding: `${10 * s}px 0`, borderRight: `1px solid ${p.ink}22`, fontSize: 7 * s, color: p.muted }}>
          <span style={{ writingMode: "vertical-rl", letterSpacing: "0.35em" }}>侘寂</span>
          <span>◍</span>
        </div>
        <div className="flex flex-1 flex-col">
          <div className="flex items-center justify-between" style={{ padding: `${7 * s}px ${10 * s}px`, fontSize: 6.5 * s, color: p.muted }}>
            <span>KILN № 9</span><span>EST. 1974</span>
          </div>
          <div className="flex flex-1 items-center" style={{ padding: `0 ${10 * s}px`, gap: 10 * s }}>
            <div style={{ width: 66 * s, height: 44 * s, flexShrink: 0, background: "#D8CFC0", borderRadius: "46% 54% 52% 48%  / 58% 60% 40% 42%", position: "relative", boxShadow: "0 8px 20px rgba(58,53,44,.15)" }}>
              <svg viewBox="0 0 100 60" style={{ position: "absolute", inset: 0 }}><path d="M30 5 L45 30 L38 55" fill="none" stroke={p.accent} strokeWidth="3" /></svg>
            </div>
            <div>
              <div style={{ fontFamily: p.display, fontStyle: "italic", fontSize: large ? 20 : 12, lineHeight: 1.15 }}>mended<br />with gold.</div>
              <div style={{ fontSize: 6 * s, color: p.muted, marginTop: 5 * s }}>nothing lasts · nothing is finished</div>
              <span style={{ display: "inline-block", border: `1px solid ${p.ink}55`, borderRadius: 999, padding: `${3 * s}px ${9 * s}px`, fontSize: 6 * s, marginTop: 7 * s }}>The repair shelf →</span>
            </div>
          </div>
          <div style={{ padding: `${6 * s}px ${10 * s}px`, borderTop: `1px solid ${p.ink}22`, fontSize: 6 * s, color: p.muted }}>kintsugi · ash glaze · one firing</div>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
