import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function DesktopUIPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
          padding: `${6 * s}px`,
        }}
      >
        {/* Top Desktop Workspace with Classic Window */}
        <div
          className="flex-1 flex flex-col justify-between"
          style={{
            background: p.surface,
            border: `2px outset ${p.surface}`,
            boxShadow: `${4 * s}px ${4 * s}px 0 ${p.ink}44`,
            padding: `${2 * s}px`,
            margin: `${4 * s}px`,
          }}
        >
          {/* Classic Navy Titlebar */}
          <div
            className="flex items-center justify-between"
            style={{
              background: p.accent,
              color: p.surface,
              padding: `${2 * s}px ${6 * s}px`,
              fontWeight: 700,
              fontSize: 6.5 * s,
            }}
          >
            <span>📁 C:\PROJECTS\ATLAS_OS</span>
            <div className="flex items-center" style={{ gap: 2 * s }}>
              <span
                style={{
                  background: p.surface,
                  color: p.ink,
                  border: `1px outset ${p.surface}`,
                  padding: `0 ${3 * s}px`,
                  fontSize: 5.5 * s,
                }}
              >
                _
              </span>
              <span
                style={{
                  background: p.surface,
                  color: p.ink,
                  border: `1px outset ${p.surface}`,
                  padding: `0 ${3 * s}px`,
                  fontSize: 5.5 * s,
                }}
              >
                □
              </span>
              <span
                style={{
                  background: p.surface,
                  color: p.ink,
                  border: `1px outset ${p.surface}`,
                  padding: `0 ${3 * s}px`,
                  fontSize: 5.5 * s,
                }}
              >
                ✕
              </span>
            </div>
          </div>

          {/* Menu Strip */}
          <div
            className="flex items-center"
            style={{
              gap: 8 * s,
              padding: `${2 * s}px ${6 * s}px`,
              borderBottom: `1px solid ${p.ink}22`,
              fontSize: 6 * s,
            }}
          >
            <span>File</span>
            <span>Edit</span>
            <span>View</span>
            <span>Help</span>
          </div>

          {/* Inset Canvas Content Area */}
          <div
            className="flex-1 flex flex-col justify-between"
            style={{
              background: p.surface,
              border: `2px inset ${p.surface}`,
              padding: `${8 * s}px ${10 * s}px`,
              margin: `${4 * s}px 0`,
            }}
          >
            <div className="grid grid-cols-3" style={{ gap: 6 * s }}>
              <div
                className="flex flex-col items-center"
                style={{
                  padding: `${4 * s}px`,
                  fontSize: 6 * s,
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: 14 * s }}>💾</div>
                <span style={{ marginTop: 2 * s }}>Disk 3.5</span>
              </div>
              <div
                className="flex flex-col items-center"
                style={{
                  padding: `${4 * s}px`,
                  background: p.accent,
                  color: p.surface,
                  fontSize: 6 * s,
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: 14 * s }}>📁</div>
                <span style={{ marginTop: 2 * s }}>Documents</span>
              </div>
              <div
                className="flex flex-col items-center"
                style={{
                  padding: `${4 * s}px`,
                  fontSize: 6 * s,
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: 14 * s }}>⚙️</div>
                <span style={{ marginTop: 2 * s }}>Control.exe</span>
              </div>
            </div>

            <div
              className="flex items-center justify-between"
              style={{
                fontSize: 5.5 * s,
                color: p.muted,
                borderTop: `1px solid ${p.ink}18`,
                paddingTop: 4 * s,
              }}
            >
              <span>3 object(s) selected</span>
              <span>420 KB free</span>
            </div>
          </div>
        </div>

        {/* Desktop Taskbar with Start Button */}
        <div
          className="flex items-center justify-between"
          style={{
            background: p.surface,
            borderTop: `2px outset ${p.surface}`,
            padding: `${2 * s}px ${4 * s}px`,
            fontSize: 6 * s,
          }}
        >
          <div className="flex items-center" style={{ gap: 4 * s }}>
            <button
              type="button"
              style={{
                background: p.surface,
                border: `2px outset ${p.surface}`,
                padding: `${2 * s}px ${8 * s}px`,
                fontWeight: 700,
                fontSize: 6 * s,
                cursor: "pointer",
              }}
            >
              🪟 Start
            </button>
            <div
              style={{
                border: `2px inset ${p.surface}`,
                padding: `${1 * s}px ${6 * s}px`,
                fontSize: 5.5 * s,
              }}
            >
              C:\PROJECTS
            </div>
          </div>
          <div
            style={{
              border: `2px inset ${p.surface}`,
              padding: `${1 * s}px ${6 * s}px`,
              fontSize: 5.5 * s,
            }}
          >
            ⏳ 4:32 PM
          </div>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
