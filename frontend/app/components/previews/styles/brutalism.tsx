import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function BrutalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col" style={{ textAlign: "left", background: p.bg }}>
        <div
          style={{
            borderBottom: `3px solid ${p.ink}`,
            padding: large ? "8px 14px" : "5px 8px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: large ? 10 : 7,
            fontFamily: p.body,
            color: p.ink,
          }}
        >
          <strong style={{ fontFamily: p.body, fontWeight: 700 }}>index.html</strong>
          <span>
            <a style={{ color: p.accent, textDecoration: "underline" }}>home</a>
            <span style={{ color: p.muted }}> / </span>
            <a style={{ color: p.accent, textDecoration: "underline" }}>section</a>
            <span style={{ color: p.muted }}> / </span>
            <a style={{ color: p.accent, textDecoration: "underline" }}>page</a>
          </span>
        </div>
        <div style={{ padding: large ? "12px 14px" : "7px 8px", background: p.surface, borderBottom: `2px solid ${p.ink}` }}>
          <p
            style={{
              fontFamily: p.display,
              fontSize: large ? 30 : 17,
              margin: 0,
              fontWeight: 700,
              color: p.ink,
              lineHeight: 1.1,
            }}
          >
            Welcome to my homepage
          </p>
          <p style={{ fontFamily: p.body, fontSize: large ? 11 : 7, margin: large ? "6px 0 8px" : "4px 0 6px", color: p.ink }}>
            Made with a text editor. Best viewed at 800x600. <a style={{ color: p.accent, textDecoration: "underline" }}>about this site</a>
          </p>
          <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
            <button
              type="button"
              style={{
                fontFamily: p.body,
                fontSize: large ? 11 : 7.5,
                background: p.bg,
                color: p.ink,
                border: `2px outset ${p.surface}`,
                borderRadius: 0,
                padding: large ? "5px 16px" : "3px 10px",
                cursor: "pointer",
              }}
            >
              Submit query
            </button>
            <span style={{ fontFamily: p.body, fontSize: large ? 10 : 7, color: p.accent2, fontWeight: 700 }}>[ under construction ]</span>
          </div>
        </div>
        <div style={{ padding: large ? "8px 14px" : "5px 8px", marginTop: "auto" }}>
          <table style={{ borderCollapse: "collapse", fontSize: large ? 10 : 7, fontFamily: p.body, color: p.ink }}>
            <tbody>
              <tr>
                <td style={{ border: `2px solid ${p.ink}`, padding: "3px 8px" }}>est. 1997</td>
                <td style={{ border: `2px solid ${p.ink}`, padding: "3px 8px" }}>
                  visitors: <span style={{ color: p.accent2, fontWeight: 700 }}>004821</span>
                </td>
                <td style={{ border: `2px solid ${p.ink}`, padding: "3px 8px", color: p.muted }}>Home / Section / Page</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
