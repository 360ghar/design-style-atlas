import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function ComicPopArtPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const s = large ? 1.6 : 1;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col" style={{ background: "#F5F0E6", color: "#141414", backgroundImage: "radial-gradient(#141414 1.2px, transparent 1.2px)", backgroundSize: "10px 10px" }}>
        <div className="flex items-center justify-between" style={{ background: "#141414", color: "#fff", padding: `${6 * s}px ${10 * s}px`, fontSize: 7 * s, fontWeight: 800 }}>
          <span>KAPOW! COMICS</span><span>ISSUE #1 · 10¢</span>
        </div>
        <div className="grid flex-1 grid-cols-2" style={{ gap: 8 * s, padding: `${8 * s}px ${10 * s}px` }}>
          <div style={{ background: "#fff", border: "3px solid #141414", padding: `${7 * s}px`, boxShadow: "4px 4px 0 #141414" }}>
            <div style={{ background: "#FFD802", border: "2px solid #141414", fontSize: 5.5 * s, fontWeight: 800, padding: "2px 6px", width: "fit-content" }}>MEANWHILE…</div>
            <div style={{ fontFamily: "Bangers, cursive", fontSize: large ? 22 : 13, marginTop: 4 * s }}>ORIGIN STORY!</div>
          </div>
          <div style={{ background: "#E30613", border: "3px solid #141414", padding: `${7 * s}px`, color: "#fff", boxShadow: "4px 4px 0 #141414" }}>
            <div style={{ fontFamily: "Bangers, cursive", fontSize: large ? 22 : 13 }}>KRAKOOM!</div>
            <div style={{ fontSize: 6 * s, marginTop: 3 * s }}>Zero to hero in one scroll. →</div>
          </div>
        </div>
        <div className="flex items-center justify-between" style={{ background: "#FFD802", borderTop: "3px solid #141414", padding: `${5 * s}px ${10 * s}px`, fontSize: 6 * s, fontWeight: 800 }}>
          <span>POW! · BAM! · ZOOM!</span><span>NEXT →</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
