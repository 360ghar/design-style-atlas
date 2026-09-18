import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function WebcorePreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
          padding: `${8 * s}px ${10 * s}px`,
        }}
      >
        {/* Windows-Era Chrome Window Header */}
        <div
          style={{
            border: `2px outset ${p.bg}`,
            background: p.bg,
            padding: `${2 * s}px`,
          }}
        >
          {/* Teal Titlebar */}
          <div
            className="flex items-center justify-between"
            style={{
              background: p.accent2,
              color: p.surface,
              padding: `${2 * s}px ${6 * s}px`,
              fontWeight: 700,
              fontSize: 6.5 * s,
            }}
          >
            <span>🌐 Webcore Explorer — [index_of_vault.html]</span>
            <div className="flex items-center" style={{ gap: 2 * s }}>
              <span
                style={{
                  background: p.bg,
                  color: p.ink,
                  border: `1px outset ${p.bg}`,
                  padding: `0 ${3 * s}px`,
                  fontSize: 5.5 * s,
                  lineHeight: 1.2,
                }}
              >
                _
              </span>
              <span
                style={{
                  background: p.bg,
                  color: p.ink,
                  border: `1px outset ${p.bg}`,
                  padding: `0 ${3 * s}px`,
                  fontSize: 5.5 * s,
                  lineHeight: 1.2,
                }}
              >
                □
              </span>
              <span
                style={{
                  background: p.bg,
                  color: p.ink,
                  border: `1px outset ${p.bg}`,
                  padding: `0 ${3 * s}px`,
                  fontSize: 5.5 * s,
                  lineHeight: 1.2,
                }}
              >
                ✕
              </span>
            </div>
          </div>

          {/* Browser Address Bar */}
          <div
            className="flex items-center"
            style={{
              gap: 4 * s,
              padding: `${3 * s}px ${4 * s}px`,
              fontSize: 6 * s,
            }}
          >
            <span style={{ color: p.muted }}>Address:</span>
            <div
              className="flex-1"
              style={{
                background: p.surface,
                border: `2px inset ${p.bg}`,
                padding: `${1 * s}px ${5 * s}px`,
                fontFamily: "monospace",
                color: p.ink,
              }}
            >
              http://www.geocities.ws/cyber_archive/vault.html
            </div>
            <button
              type="button"
              style={{
                background: p.bg,
                border: `2px outset ${p.bg}`,
                padding: `${1 * s}px ${6 * s}px`,
                fontSize: 6 * s,
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Go
            </button>
          </div>
        </div>

        {/* Directory Listing File Table Content Area */}
        <div
          className="my-auto overflow-hidden"
          style={{
            background: p.surface,
            border: `2px inset ${p.bg}`,
            padding: `${8 * s}px ${10 * s}px`,
          }}
        >
          <div
            style={{
              fontFamily: p.display,
              fontSize: 11 * s,
              fontWeight: 700,
              color: p.ink,
              marginBottom: 4 * s,
            }}
          >
            Index of /cyber_archive/
          </div>

          <table
            className="w-full text-left"
            style={{
              borderCollapse: "collapse",
              fontSize: 6.5 * s,
            }}
          >
            <thead>
              <tr style={{ borderBottom: `1px solid ${p.muted}44`, color: p.muted }}>
                <th style={{ paddingBottom: 2 * s }}>Name</th>
                <th style={{ paddingBottom: 2 * s }}>Last Modified</th>
                <th style={{ paddingBottom: 2 * s }}>Size</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: `${2 * s}px 0` }}>
                  <span style={{ color: p.accent, textDecoration: "underline", cursor: "pointer" }}>
                    📁 ../ Parent Directory
                  </span>
                </td>
                <td style={{ color: p.muted }}>—</td>
                <td style={{ color: p.muted }}>—</td>
              </tr>
              <tr>
                <td style={{ padding: `${2 * s}px 0` }}>
                  <span style={{ color: p.accent, textDecoration: "underline", cursor: "pointer" }}>
                    📄 personal_diary.html
                  </span>
                </td>
                <td style={{ color: p.muted }}>14-Oct-1998</td>
                <td style={{ color: p.muted }}>12.4 KB</td>
              </tr>
              <tr>
                <td style={{ padding: `${2 * s}px 0` }}>
                  <span style={{ color: p.accent, textDecoration: "underline", cursor: "pointer" }}>
                    🎵 ambient_loop.mid
                  </span>
                </td>
                <td style={{ color: p.muted }}>02-Sep-1999</td>
                <td style={{ color: p.muted }}>84.1 KB</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Browser Status Bar */}
        <div
          className="flex items-center justify-between"
          style={{
            border: `1px inset ${p.bg}`,
            background: p.bg,
            padding: `${2 * s}px ${6 * s}px`,
            fontSize: 5.5 * s,
            color: p.muted,
          }}
        >
          <span>Applet started · View Source pride</span>
          <span>Done (3 items)</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
