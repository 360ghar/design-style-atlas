import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function ProductMinimalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
        {/* Command Bar Header */}
        <div
          className="flex items-center justify-between"
          style={{
            background: p.surface,
            border: `1px solid ${p.ink}15`,
            borderRadius: 6 * s,
            padding: `${4 * s}px ${10 * s}px`,
            fontSize: 6.5 * s,
            boxShadow: `0 1px 2px ${p.ink}05`,
          }}
        >
          <div className="flex items-center" style={{ gap: 6 * s }}>
            <span style={{ color: p.accent, fontWeight: 700 }}>◆</span>
            <span style={{ fontWeight: 600, color: p.ink }}>Linear Command</span>
            <span style={{ color: p.muted }}>/ eng-core</span>
          </div>
          <div className="flex items-center" style={{ gap: 4 * s }}>
            <span
              style={{
                background: `${p.ink}0A`,
                border: `1px solid ${p.ink}15`,
                borderRadius: 4 * s,
                padding: `${1 * s}px ${5 * s}px`,
                fontSize: 5.5 * s,
                fontFamily: "monospace",
                color: p.muted,
              }}
            >
              ⌘K
            </span>
          </div>
        </div>

        {/* Central Keyboard-First Issue Task Card */}
        <div
          className="my-auto flex flex-col justify-between"
          style={{
            background: p.surface,
            border: `1px solid ${p.ink}15`,
            borderRadius: 8 * s,
            padding: `${12 * s}px ${14 * s}px`,
            boxShadow: `0 1px 3px ${p.ink}0A`,
          }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center" style={{ gap: 5 * s }}>
              <span
                style={{
                  fontSize: 6 * s,
                  fontFamily: "monospace",
                  fontWeight: 600,
                  color: p.muted,
                }}
              >
                ENG-104
              </span>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 3 * s,
                  fontSize: 6 * s,
                  fontWeight: 500,
                  color: p.accent,
                  background: `${p.accent}12`,
                  padding: `${2 * s}px ${6 * s}px`,
                  borderRadius: 999,
                }}
              >
                <span
                  style={{
                    width: 4 * s,
                    height: 4 * s,
                    borderRadius: "50%",
                    background: p.accent,
                  }}
                />
                In Progress
              </span>
            </div>
            <span
              style={{
                fontSize: 6 * s,
                color: p.muted,
                fontWeight: 500,
              }}
            >
              P1 Urgent
            </span>
          </div>

          <h3
            style={{
              fontFamily: p.display,
              fontSize: 11 * s,
              fontWeight: 600,
              color: p.ink,
              lineHeight: 1.3,
              margin: `${6 * s}px 0 0 0`,
            }}
          >
            Implement zero-copy memory ring buffer for WebSocket engine
          </h3>

          <div
            className="flex items-center justify-between"
            style={{
              marginTop: 10 * s,
              paddingTop: 8 * s,
              borderTop: `1px solid ${p.ink}0C`,
            }}
          >
            <div className="flex items-center" style={{ gap: 4 * s }}>
              <span
                style={{
                  width: 14 * s,
                  height: 14 * s,
                  borderRadius: "50%",
                  background: p.accent2,
                  color: p.surface,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 6 * s,
                  fontWeight: 600,
                }}
              >
                SM
              </span>
              <span style={{ fontSize: 6.5 * s, color: p.muted }}>Saksham M.</span>
            </div>
            <div className="flex items-center" style={{ gap: 4 * s }}>
              <span
                style={{
                  fontSize: 5.5 * s,
                  fontFamily: "monospace",
                  color: p.muted,
                  border: `1px solid ${p.ink}15`,
                  padding: `${1 * s}px ${4 * s}px`,
                  borderRadius: 3 * s,
                }}
              >
                C
              </span>
              <span style={{ fontSize: 6 * s, color: p.muted }}>Assign</span>
            </div>
          </div>
        </div>

        {/* Status bar with keyboard shortcut hint */}
        <div
          className="flex items-center justify-between"
          style={{
            fontSize: 5.5 * s,
            color: p.muted,
          }}
        >
          <span>Synced 2m ago</span>
          <span>
            Press <strong style={{ color: p.ink }}>G then I</strong> for active sprint
          </span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
