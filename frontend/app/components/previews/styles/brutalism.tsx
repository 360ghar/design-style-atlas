import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function BrutalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
          padding: `${10 * s}px ${12 * s}px`,
        }}
      >
        {/* Unadorned Web 1.0 Path Navigation */}
        <div
          className="flex items-center justify-between"
          style={{
            borderBottom: `2px solid ${p.ink}`,
            paddingBottom: 4 * s,
            fontSize: 6.5 * s,
          }}
        >
          <span style={{ fontWeight: 700, fontFamily: p.body }}>
            index.html
          </span>
          <span>
            <span style={{ color: p.accent, textDecoration: "underline" }}>home</span>
            <span style={{ color: p.muted }}> / </span>
            <span style={{ color: p.accent, textDecoration: "underline" }}>archive</span>
            <span style={{ color: p.muted }}> / </span>
            <span style={{ color: p.accent, textDecoration: "underline" }}>raw</span>
          </span>
        </div>

        {/* Raw Béton Brut Content Block */}
        <div
          className="my-auto"
          style={{
            background: p.surface,
            border: `2px solid ${p.ink}`,
            padding: `${10 * s}px ${12 * s}px`,
          }}
        >
          <div
            style={{
              fontFamily: p.display,
              fontSize: 14 * s,
              fontWeight: 700,
              lineHeight: 1.1,
              color: p.ink,
            }}
          >
            Welcome to the directory.
          </div>
          <p
            style={{
              fontSize: 7 * s,
              lineHeight: 1.5,
              margin: `${4 * s}px 0 ${8 * s}px 0`,
              color: p.ink,
            }}
          >
            Hand-crafted in a plain text editor. 0px radius. No drop shadows. No webfonts.
          </p>

          <div className="flex items-center" style={{ gap: 8 * s }}>
            <button
              type="button"
              style={{
                background: p.bg,
                color: p.ink,
                border: `2px outset ${p.surface}`,
                borderRadius: 0,
                fontSize: 6.5 * s,
                fontWeight: 700,
                padding: `${3 * s}px ${8 * s}px`,
                cursor: "pointer",
              }}
            >
              Submit query
            </button>
            <span
              style={{
                fontSize: 6 * s,
                color: p.accent2,
                fontWeight: 700,
                letterSpacing: "0.05em",
              }}
            >
              [ UNDER CONSTRUCTION ]
            </span>
          </div>
        </div>

        {/* Exposed Raw Table & Visitor Counter */}
        <div style={{ borderTop: `2px solid ${p.ink}`, paddingTop: 4 * s }}>
          <table
            className="w-full text-left"
            style={{
              borderCollapse: "collapse",
              fontSize: 6 * s,
            }}
          >
            <tbody>
              <tr>
                <td style={{ border: `1px solid ${p.ink}`, padding: `${2 * s}px ${6 * s}px` }}>
                  est. 1997
                </td>
                <td style={{ border: `1px solid ${p.ink}`, padding: `${2 * s}px ${6 * s}px` }}>
                  visitors: <strong style={{ color: p.accent2 }}>004821</strong>
                </td>
                <td style={{ border: `1px solid ${p.ink}`, padding: `${2 * s}px ${6 * s}px`, color: p.muted }}>
                  best viewed at 800x600
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
