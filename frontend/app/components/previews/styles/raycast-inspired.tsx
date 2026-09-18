import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

const ACTIONS = [
  { icon: "⚡", title: "Search Commands", cat: "Navigation", kbd: "↵", glow: true },
  { icon: "✨", title: "Generate UI Component", cat: "AI Assistant", kbd: "⌘G", glow: false },
  { icon: "📂", title: "Open Recent Project", cat: "Workspace", kbd: "⌘O", glow: false },
  { icon: "🌐", title: "Deploy to Production", cat: "Cloud", kbd: "⌘D", glow: false },
];

export function RaycastInspiredPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const s = large ? 1.6 : 1;

  return (
    <Frame meta={meta} large={large}>
      <div
        className="relative flex h-full flex-col justify-between overflow-hidden"
        style={{
          background: p.bg,
          color: p.ink,
          fontFamily: p.body,
          padding: `${10 * s}px ${14 * s}px`,
        }}
      >
        {/* Ambient Ruby/Coral Radial Glow behind command bar */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 240 * s,
            height: 120 * s,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${p.accent}33 0%, transparent 70%)`,
            filter: `blur(${30 * s}px)`,
            pointerEvents: "none",
          }}
        />

        {/* Command Modal Shell */}
        <div
          className="relative mx-auto flex w-full flex-col"
          style={{
            maxWidth: 440 * s,
            background: p.surface,
            borderRadius: 12 * s,
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: `0 ${16 * s}px ${40 * s}px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.05)`,
            overflow: "hidden",
          }}
        >
          {/* Search Header Bar */}
          <div
            className="flex items-center"
            style={{
              padding: `${8 * s}px ${12 * s}px`,
              borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
              gap: 8 * s,
            }}
          >
            <span style={{ color: p.accent, fontSize: 10 * s, fontWeight: 700 }}>✦</span>
            <span style={{ fontSize: 8.5 * s, color: p.ink, fontWeight: 500, letterSpacing: "-0.01em" }}>
              Find actions, tools, snippets...
            </span>
            <div
              className="ml-auto flex items-center"
              style={{
                background: "rgba(255, 255, 255, 0.06)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: 4 * s,
                padding: `${2 * s}px ${6 * s}px`,
                fontSize: 6.5 * s,
                color: p.muted,
                fontWeight: 600,
              }}
            >
              ⌘K
            </div>
          </div>

          {/* Action List Rows */}
          <div style={{ padding: `${4 * s}px` }}>
            {ACTIONS.map((item, idx) => (
              <div
                key={item.title}
                className="flex items-center"
                style={{
                  padding: `${5 * s}px ${8 * s}px`,
                  borderRadius: 6 * s,
                  background: idx === 0 ? "rgba(255, 99, 99, 0.12)" : "transparent",
                  border: idx === 0 ? `1px solid ${p.accent}55` : "1px solid transparent",
                  gap: 8 * s,
                  marginBottom: 2 * s,
                }}
              >
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 16 * s,
                    height: 16 * s,
                    borderRadius: 4 * s,
                    background: idx === 0 ? p.accent : "rgba(255, 255, 255, 0.06)",
                    fontSize: 8 * s,
                  }}
                >
                  {item.icon}
                </span>
                <span style={{ fontSize: 7.5 * s, fontWeight: idx === 0 ? 600 : 400, color: p.ink }}>
                  {item.title}
                </span>
                <span style={{ marginLeft: "auto", fontSize: 6.5 * s, color: p.muted }}>
                  {item.cat}
                </span>
                <span
                  style={{
                    background: "rgba(255, 255, 255, 0.08)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    borderRadius: 3 * s,
                    padding: `${1 * s}px ${5 * s}px`,
                    fontSize: 6.5 * s,
                    color: idx === 0 ? p.accent : p.muted,
                    fontFamily: "monospace",
                    fontWeight: 600,
                  }}
                >
                  {item.kbd}
                </span>
              </div>
            ))}
          </div>

          {/* Status Footer Bar */}
          <div
            className="flex items-center justify-between"
            style={{
              padding: `${5 * s}px ${12 * s}px`,
              background: "rgba(0, 0, 0, 0.35)",
              borderTop: "1px solid rgba(255, 255, 255, 0.06)",
              fontSize: 6 * s,
              color: p.muted,
            }}
          >
            <div className="flex items-center" style={{ gap: 8 * s }}>
              <span>Raycast Pro Core</span>
              <span style={{ color: p.accent, fontWeight: 600 }}>● 0.4ms response</span>
            </div>
            <div className="flex items-center" style={{ gap: 6 * s }}>
              <span>Open</span>
              <span style={{ background: "rgba(255,255,255,0.1)", padding: "1px 4px", borderRadius: 2, color: p.ink }}>↵</span>
              <span>Actions</span>
              <span style={{ background: "rgba(255,255,255,0.1)", padding: "1px 4px", borderRadius: 2, color: p.ink }}>⌘K</span>
            </div>
          </div>
        </div>

        <Meta meta={meta} large={large} />
      </div>
    </Frame>
  );
}
