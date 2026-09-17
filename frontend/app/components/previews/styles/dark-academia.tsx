import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function DarkAcademiaPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const s = large ? 1.6 : 1;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full" style={{ background: p.bg, color: p.ink, fontFamily: p.body }}>
        <div style={{ width: 6 * s, background: p.accent2, flexShrink: 0 }} />
        <div className="flex flex-1 flex-col">
          <div className="flex items-center justify-between" style={{ padding: `${7 * s}px ${10 * s}px`, fontSize: 6.5 * s, letterSpacing: "0.25em", color: p.muted }}>
            <span>ATHENÆUM</span><span>READING ROOM</span>
          </div>
          <div className="flex flex-1 flex-col justify-center" style={{ padding: `0 ${10 * s}px` }}>
            <div style={{ fontSize: 6.5 * s, letterSpacing: "0.3em", color: p.accent }}>VOL. IV · OXFORD · MDCCCXCII</div>
            <div style={{ fontFamily: p.display, fontSize: large ? 32 : 19, lineHeight: 1.1, marginTop: 6 * s }}>Candlelit<br />scholarship.</div>
            <div style={{ height: 1, background: p.accent, width: "30%", margin: `${8 * s}px 0 ${6 * s}px` }} />
            <div style={{ color: p.muted, fontStyle: "italic", fontFamily: "Georgia, serif", fontSize: 7.5 * s }}>oxblood leather · oak · lamp smoke</div>
            <div className="flex" style={{ gap: 6 * s, marginTop: 9 * s }}>
              <span style={{ background: p.accent2, color: "#fff", fontSize: 6.5 * s, letterSpacing: "0.2em", padding: `${5 * s}px ${13 * s}px` }}>APPLY →</span>
              <span style={{ border: `1px solid ${p.accent}`, color: p.accent, fontSize: 6.5 * s, letterSpacing: "0.2em", padding: `${5 * s}px ${13 * s}px` }}>STACKS</span>
            </div>
          </div>
          <div className="flex items-center justify-between" style={{ padding: `${6 * s}px ${10 * s}px`, borderTop: `1px solid ${p.ink}22`, fontSize: 6 * s, color: p.muted, fontStyle: "italic", fontFamily: "Georgia, serif" }}>
            <span>carrels · folio · port</span><span>micm · xxvi</span>
          </div>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
