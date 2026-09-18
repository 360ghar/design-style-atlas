import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function ConversationalAIPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const s = large ? 1.6 : 1;

  return (
    <Frame meta={meta} large={large}>
      <div
        className="flex h-full flex-col justify-between"
        style={{
          background: p.bg,
          color: p.ink,
          fontFamily: p.body,
          padding: `${12 * s}px ${14 * s}px`,
        }}
      >
        {/* AI Agent Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center" style={{ gap: 5 * s }}>
            <div style={{
              width: 10 * s,
              height: 10 * s,
              borderRadius: "50%",
              background: `linear-gradient(135deg, ${p.accent}, ${p.accent2})`,
            }} />
            <span style={{ fontFamily: p.display, fontSize: 8 * s, fontWeight: 700 }}>
              Atlas AI
            </span>
          </div>
          <span style={{
            fontSize: 5.5 * s,
            color: p.accent,
            fontWeight: 600,
            background: `${p.accent}15`,
            padding: `${2 * s}px ${8 * s}px`,
            borderRadius: 99,
          }}>
            ● Online
          </span>
        </div>

        {/* Chat Bubbles */}
        <div className="my-auto flex flex-col" style={{ gap: 6 * s }}>
          {/* AI response */}
          <div style={{
            background: p.surface,
            borderRadius: `${10 * s}px ${10 * s}px ${10 * s}px ${2 * s}px`,
            padding: `${8 * s}px ${10 * s}px`,
            maxWidth: "82%",
            border: `1px solid ${p.ink}10`,
          }}>
            <p style={{ fontSize: 6.5 * s, lineHeight: 1.5, margin: 0 }}>
              I can help you explore design styles. Each one has a unique personality — what mood are you after?
            </p>
            <span style={{ fontSize: 5 * s, color: p.muted, marginTop: 2 * s, display: "block" }}>
              Atlas · just now
            </span>
          </div>
          {/* User message */}
          <div style={{
            background: p.accent,
            color: p.bg,
            borderRadius: `${10 * s}px ${10 * s}px ${2 * s}px ${10 * s}px`,
            padding: `${8 * s}px ${10 * s}px`,
            maxWidth: "72%",
            alignSelf: "flex-end",
            fontSize: 6.5 * s,
            lineHeight: 1.5,
          }}>
            Something calm and intelligent
          </div>
          {/* Typing indicator */}
          <div className="flex items-center" style={{ gap: 3 * s, padding: `${4 * s}px ${6 * s}px` }}>
            <div className="pv-blink" style={{ width: 4 * s, height: 4 * s, borderRadius: "50%", background: p.accent2 }} />
            <div className="pv-blink" style={{ width: 4 * s, height: 4 * s, borderRadius: "50%", background: p.accent2, animationDelay: "0.2s" }} />
            <div className="pv-blink" style={{ width: 4 * s, height: 4 * s, borderRadius: "50%", background: p.accent2, animationDelay: "0.4s" }} />
          </div>
        </div>

        {/* Input Bar */}
        <div
          className="flex items-center"
          style={{
            background: p.surface,
            border: `1px solid ${p.ink}12`,
            borderRadius: 99,
            padding: `${5 * s}px ${6 * s}px ${5 * s}px ${12 * s}px`,
            gap: 6 * s,
          }}
        >
          <span style={{ flex: 1, fontSize: 6 * s, color: p.muted }}>Ask me anything…</span>
          <span style={{
            background: p.accent,
            color: p.bg,
            borderRadius: "50%",
            width: 18 * s,
            height: 18 * s,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 8 * s,
            fontWeight: 700,
          }}>↑</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
