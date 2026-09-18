import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function Windows95Preview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
        {/* Windows 95 Desktop Ground with Window */}
        <div
          className="flex-1 flex flex-col justify-between"
          style={{
            background: p.surface,
            border: `2px outset ${p.surface}`,
            boxShadow: `${4 * s}px ${4 * s}px 0 ${p.ink}`,
            padding: `${2 * s}px`,
            margin: `${6 * s}px`,
          }}
        >
          {/* Active Gradient Navy Titlebar */}
          <div
            className="flex items-center justify-between"
            style={{
              background: `linear-gradient(90deg, ${p.accent}, ${p.accent}AA)`,
              color: p.surface,
              padding: `${2 * s}px ${6 * s}px`,
              fontWeight: 700,
              fontSize: 6.5 * s,
            }}
          >
            <div className="flex items-center" style={{ gap: 4 * s }}>
              <span>🖥️</span>
              <span>My Computer</span>
            </div>
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
              borderBottom: `1px solid ${p.muted}33`,
              fontSize: 6 * s,
            }}
          >
            <span><u>F</u>ile</span>
            <span><u>E</u>dit</span>
            <span><u>V</u>iew</span>
            <span><u>H</u>elp</span>
          </div>

          {/* Inset Content Box */}
          <div
            className="flex-1"
            style={{
              background: p.surface,
              border: `2px inset ${p.surface}`,
              padding: `${8 * s}px ${10 * s}px`,
              margin: `${4 * s}px 0`,
            }}
          >
            <div className="grid grid-cols-3" style={{ gap: 8 * s, textAlign: "center", fontSize: 6 * s }}>
              <div>
                <div style={{ fontSize: 14 * s }}>💾</div>
                <div style={{ marginTop: 2 * s }}>3½ Floppy (A:)</div>
              </div>
              <div style={{ background: p.accent, color: p.surface, padding: `${2 * s}px 0` }}>
                <div style={{ fontSize: 14 * s }}>💽</div>
                <div style={{ marginTop: 2 * s }}>Hard Disk (C:)</div>
              </div>
              <div>
                <div style={{ fontSize: 14 * s }}>💿</div>
                <div style={{ marginTop: 2 * s }}>CD-ROM (D:)</div>
              </div>
            </div>
          </div>

          {/* Status Bar */}
          <div
            style={{
              border: `1px inset ${p.surface}`,
              padding: `${2 * s}px ${6 * s}px`,
              fontSize: 5.5 * s,
              color: p.muted,
            }}
          >
            1 object(s) selected (Free Space: 1.24 GB)
          </div>
        </div>

        {/* Taskbar with Start Button */}
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
                fontSize: 6.5 * s,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 3 * s,
              }}
            >
              <span>❖</span>
              <span>Start</span>
            </button>
            <div
              style={{
                border: `2px inset ${p.surface}`,
                background: p.surface,
                padding: `${1 * s}px ${6 * s}px`,
                fontWeight: 700,
                fontSize: 6 * s,
              }}
            >
              My Computer
            </div>
          </div>

          <div
            style={{
              border: `2px inset ${p.surface}`,
              padding: `${1 * s}px ${8 * s}px`,
              fontSize: 5.5 * s,
            }}
          >
            4:32 PM
          </div>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
