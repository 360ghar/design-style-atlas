import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function MacOSPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
        {/* System 9 Platinum Top Menu Bar */}
        <div
          className="flex items-center justify-between"
          style={{
            background: p.surface,
            borderBottom: `1px solid ${p.ink}33`,
            padding: `${2 * s}px ${8 * s}px`,
            fontSize: 6 * s,
            boxShadow: `0 1px 2px ${p.ink}15`,
          }}
        >
          <div className="flex items-center" style={{ gap: 8 * s }}>
            <span style={{ fontSize: 7 * s }}></span>
            <span style={{ fontWeight: 700 }}>File</span>
            <span>Edit</span>
            <span>View</span>
            <span>Special</span>
            <span>Help</span>
          </div>
          <div className="flex items-center" style={{ gap: 6 * s }}>
            <span>Finder</span>
            <span>⏳ 10:42 AM</span>
          </div>
        </div>

        {/* Platinum Pinstripe Window */}
        <div
          className="my-auto flex flex-col justify-between"
          style={{
            background: p.surface,
            border: `1.5px solid ${p.ink}44`,
            borderRadius: 5 * s,
            boxShadow: `0 ${4 * s}px ${16 * s}px ${p.ink}22`,
            padding: `${2 * s}px`,
            margin: `${6 * s}px`,
          }}
        >
          {/* Classic Pinstripe Titlebar */}
          <div
            className="flex items-center justify-between"
            style={{
              background: `repeating-linear-gradient(180deg, ${p.surface}, ${p.surface} 1px, ${p.ink}22 1px, ${p.ink}22 2px)`,
              borderBottom: `1px solid ${p.ink}44`,
              padding: `${3 * s}px ${6 * s}px`,
            }}
          >
            {/* Square Close Box */}
            <div
              style={{
                width: 8 * s,
                height: 8 * s,
                border: `1px solid ${p.ink}66`,
                background: p.surface,
                boxShadow: `inset 1px 1px 0 ${p.surface}`,
              }}
            />

            <span
              style={{
                fontFamily: p.display,
                fontSize: 6.5 * s,
                fontWeight: 700,
                background: p.surface,
                padding: `0 ${6 * s}px`,
                color: p.ink,
              }}
            >
              Macintosh HD (System 9.2)
            </span>

            {/* Collapse Box */}
            <div
              style={{
                width: 8 * s,
                height: 8 * s,
                border: `1px solid ${p.ink}66`,
                background: p.surface,
              }}
            />
          </div>

          {/* Platinum Canvas Inset */}
          <div
            style={{
              background: p.surface,
              padding: `${10 * s}px ${12 * s}px`,
            }}
          >
            <div className="flex items-start justify-between">
              <div>
                <h3
                  style={{
                    fontFamily: p.display,
                    fontSize: 12 * s,
                    fontWeight: 700,
                    color: p.ink,
                    lineHeight: 1.2,
                    margin: 0,
                  }}
                >
                  Classic Platinum Architecture
                </h3>
                <p
                  style={{
                    fontSize: 6.5 * s,
                    color: p.muted,
                    lineHeight: 1.45,
                    margin: `${4 * s}px 0 0 0`,
                  }}
                >
                  Horizontal pinstripes, Chicago typography, and iconic tactile Aqua gel buttons.
                </p>
              </div>
              <span style={{ fontSize: 18 * s }}>💿</span>
            </div>

            {/* Aqua Pill Action Row */}
            <div
              className="flex items-center justify-between"
              style={{
                marginTop: 10 * s,
                paddingTop: 8 * s,
                borderTop: `1px solid ${p.ink}15`,
              }}
            >
              <span style={{ fontSize: 6 * s, color: p.muted }}>
                4 items · 1.4 GB available
              </span>
              <button
                type="button"
                style={{
                  background: `linear-gradient(180deg, ${p.accent}, ${p.accent}CC)`,
                  color: p.surface,
                  border: `1px solid ${p.accent}`,
                  borderRadius: 999,
                  fontSize: 6.5 * s,
                  fontWeight: 700,
                  padding: `${3 * s}px ${14 * s}px`,
                  cursor: "pointer",
                  boxShadow: `0 ${2 * s}px ${6 * s}px ${p.accent}55, inset 0 1px 0 ${p.surface}88`,
                }}
              >
                Restart in Mac OS X
              </button>
            </div>
          </div>
        </div>

        {/* Platinum Bottom Footnote */}
        <div
          className="flex items-center justify-between"
          style={{
            fontSize: 5.5 * s,
            color: p.muted,
            padding: `0 ${4 * s}px`,
          }}
        >
          <span>Apple Computer, Inc. · 1999</span>
          <span>Platinum Interface Guidelines</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
