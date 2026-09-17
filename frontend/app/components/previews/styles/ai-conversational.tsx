import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function ConversationalAIPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const s = large ? 1.6 : 1;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col" style={{ background: p.bg, color: p.ink, fontFamily: p.body }}>
        <div className="flex items-center justify-between" style={{ padding: `${7 * s}px ${12 * s}px`, fontSize: 7 * s, borderBottom: `1px solid ${p.ink}14` }}>
          <span style={{ fontWeight: 700 }}>✳ Assistant</span>
          <span style={{ color: p.muted }}>History · Library</span>
          <span style={{ border: `1px solid ${p.ink}33`, borderRadius: 999, padding: `${2 * s}px ${8 * s}px` }}>+ New chat</span>
        </div>
        <div className="flex flex-1 flex-col justify-center" style={{ gap: 7 * s, padding: `${8 * s}px ${12 * s}px` }}>
          <div style={{ alignSelf: "flex-start", background: p.surface, border: `1px solid ${p.ink}1e`, borderRadius: "2px 14px 14px 14px", padding: `${5 * s}px ${8 * s}px`, fontSize: 7.5 * s, maxWidth: "80%", boxShadow: "0 1px 2px rgba(0,0,0,.05)" }}>Streaming answer — calm, cited, complete ▍</div>
          <div style={{ alignSelf: "flex-end", background: p.accent, color: "#fff", borderRadius: "14px 14px 2px 14px", padding: `${5 * s}px ${8 * s}px`, fontSize: 7.5 * s }}>Summarize this spec for me</div>
          <div style={{ alignSelf: "flex-start", fontSize: 6.5 * s, color: p.muted, fontFamily: "monospace" }}>✓ 3 sources · 0.8s · no hallucination</div>
        </div>
        <div className="flex items-center" style={{ margin: `0 ${12 * s}px ${8 * s}px`, gap: 6 * s, background: p.surface, border: `1px solid ${p.ink}22`, borderRadius: 999, padding: `${5 * s}px ${10 * s}px`, fontSize: 7 * s, color: p.muted }}>
          <span style={{ flex: 1 }}>Ask anything…</span>
          <span style={{ background: p.accent, color: "#fff", borderRadius: "50%", width: 16 * s, height: 16 * s, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>↑</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
