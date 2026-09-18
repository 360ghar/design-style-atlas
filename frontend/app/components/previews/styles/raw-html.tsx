import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function RawHtmlPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const s = large ? 1.6 : 1;

  return (
    <Frame meta={meta} large={large}>
      <div
        className="relative flex h-full flex-col justify-between overflow-hidden"
        style={{
          background: "#FFFFFF",
          color: "#000000",
          fontFamily: p.display,
          padding: `${12 * s}px`,
        }}
      >
        {/* Document Content Flow (1993 Web Honesty) */}
        <div className="flex flex-col" style={{ maxWidth: 440 * s }}>
          {/* Default Browser Document Title */}
          <h1
            style={{
              fontSize: 18 * s,
              fontWeight: 700,
              borderBottom: "1px solid #000000",
              paddingBottom: 2 * s,
              marginBottom: 6 * s,
              lineHeight: 1.2,
            }}
          >
            Index of /pub/web_design/honesty.html
          </h1>

          {/* Hyperlink Navigation Bar */}
          <div style={{ fontSize: 7 * s, marginBottom: 8 * s }}>
            <span style={{ color: "#0000EE", textDecoration: "underline", marginRight: 6 * s }}>[Home]</span>
            <span style={{ color: "#551A8B", textDecoration: "underline", marginRight: 6 * s }}>[Manifesto]</span>
            <span style={{ color: "#0000EE", textDecoration: "underline", marginRight: 6 * s }}>[Standards]</span>
            <span style={{ color: "#0000EE", textDecoration: "underline" }}>[Contact]</span>
          </div>

          <h2 style={{ fontSize: 13 * s, fontWeight: 700, marginBottom: 4 * s }}>
            This website has nothing to hide.
          </h2>

          <p style={{ fontSize: 7.5 * s, lineHeight: 1.45, marginBottom: 6 * s }}>
            Zero megabyte JavaScript frameworks. Times New Roman as Tim Berners-Lee intended.
            Hyperlinks are <span style={{ color: "#0000EE", textDecoration: "underline" }}>royal blue</span>, visited links are <span style={{ color: "#551A8B", textDecoration: "underline" }}>purple</span>, and tables have 1px borders.
          </p>

          {/* 1px Border HTML Table */}
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              border: "1px solid #808080",
              fontSize: 6.5 * s,
              marginBottom: 8 * s,
            }}
          >
            <thead>
              <tr style={{ background: "#E0E0E0" }}>
                <th style={{ border: "1px solid #808080", padding: `${2 * s}px ${6 * s}px`, textAlign: "left" }}>Feature</th>
                <th style={{ border: "1px solid #808080", padding: `${2 * s}px ${6 * s}px`, textAlign: "left" }}>Status</th>
                <th style={{ border: "1px solid #808080", padding: `${2 * s}px ${6 * s}px`, textAlign: "left" }}>Payload</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: "1px solid #808080", padding: `${2 * s}px ${6 * s}px` }}>Semantic HTML5</td>
                <td style={{ border: "1px solid #808080", padding: `${2 * s}px ${6 * s}px`, color: "#008000", fontWeight: 700 }}>VALID</td>
                <td style={{ border: "1px solid #808080", padding: `${2 * s}px ${6 * s}px` }}>1.4 KB</td>
              </tr>
              <tr style={{ background: "#F9F9F9" }}>
                <td style={{ border: "1px solid #808080", padding: `${2 * s}px ${6 * s}px` }}>Client JavaScript</td>
                <td style={{ border: "1px solid #808080", padding: `${2 * s}px ${6 * s}px`, color: "#555" }}>NONE</td>
                <td style={{ border: "1px solid #808080", padding: `${2 * s}px ${6 * s}px` }}>0.0 KB</td>
              </tr>
            </tbody>
          </table>

          {/* Beveled System Form Buttons */}
          <div className="flex items-center" style={{ gap: 6 * s }}>
            <button
              type="button"
              style={{
                background: "#E0E0E0",
                color: "#000000",
                border: "2px outset #FFFFFF",
                padding: `${3 * s}px ${10 * s}px`,
                fontSize: 7 * s,
                fontFamily: p.display,
              }}
            >
              Submit Query
            </button>
            <button
              type="button"
              style={{
                background: "#E0E0E0",
                color: "#000000",
                border: "2px outset #FFFFFF",
                padding: `${3 * s}px ${8 * s}px`,
                fontSize: 7 * s,
                fontFamily: p.display,
              }}
            >
              Reset
            </button>
          </div>
        </div>

        <Meta meta={meta} large={large} />
      </div>
    </Frame>
  );
}
