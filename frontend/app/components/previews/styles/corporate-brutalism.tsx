import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function CorporateBrutalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
        {/* Imposing Institutional Header */}
        <div>
          <div className="flex items-center justify-between">
            <div
              style={{
                fontFamily: p.display,
                fontSize: 10 * s,
                fontWeight: 900,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: p.ink,
              }}
            >
              Consolidated Holdings Ltd.
            </div>
            <span
              style={{
                fontSize: 6 * s,
                fontWeight: 700,
                color: p.muted,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              Audited Q3 Statement
            </span>
          </div>
          <div
            style={{
              height: 3 * s,
              background: p.ink,
              margin: `${6 * s}px 0`,
            }}
          />
        </div>

        {/* Audited Financial Balance Table */}
        <div
          className="my-auto overflow-hidden"
          style={{
            background: p.surface,
            border: `2px solid ${p.ink}`,
          }}
        >
          <div
            style={{
              background: p.ink,
              color: p.bg,
              padding: `${3 * s}px ${8 * s}px`,
              fontSize: 6.5 * s,
              fontWeight: 800,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>Fiscal Performance Summary</span>
            <span>SEC File 001-3829</span>
          </div>

          <table
            className="w-full text-left"
            style={{
              borderCollapse: "collapse",
              fontSize: 6.5 * s,
            }}
          >
            <thead>
              <tr
                style={{
                  borderBottom: `2px solid ${p.ink}`,
                  background: `${p.ink}08`,
                  fontWeight: 700,
                  fontSize: 6 * s,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                <th style={{ padding: `${4 * s}px ${8 * s}px` }}>Division</th>
                <th style={{ padding: `${4 * s}px ${8 * s}px` }}>Capital Assets</th>
                <th style={{ padding: `${4 * s}px ${8 * s}px` }}>Operating Yield</th>
                <th style={{ padding: `${4 * s}px ${8 * s}px` }}>Audit Status</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: `1px solid ${p.ink}33` }}>
                <td style={{ padding: `${4 * s}px ${8 * s}px`, fontWeight: 700 }}>Heavy Industrial</td>
                <td style={{ padding: `${4 * s}px ${8 * s}px`, fontFamily: "monospace" }}>$428,500,000</td>
                <td style={{ padding: `${4 * s}px ${8 * s}px`, fontFamily: "monospace" }}>+14.8%</td>
                <td style={{ padding: `${4 * s}px ${8 * s}px`, fontWeight: 700, color: p.accent }}>VERIFIED</td>
              </tr>
              <tr>
                <td style={{ padding: `${4 * s}px ${8 * s}px`, fontWeight: 700 }}>Logistics &amp; Rail</td>
                <td style={{ padding: `${4 * s}px ${8 * s}px`, fontFamily: "monospace" }}>$219,800,000</td>
                <td style={{ padding: `${4 * s}px ${8 * s}px`, fontFamily: "monospace" }}>+9.2%</td>
                <td style={{ padding: `${4 * s}px ${8 * s}px`, fontWeight: 700, color: p.accent }}>VERIFIED</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Institutional Blue Action Bar */}
        <div
          className="flex items-center justify-between"
          style={{
            borderTop: `2px solid ${p.ink}`,
            paddingTop: 5 * s,
            fontSize: 6 * s,
          }}
        >
          <span style={{ color: p.muted, textTransform: "uppercase", letterSpacing: "0.05em" }}>
            Certified by Board of Directors
          </span>
          <span
            style={{
              color: p.accent,
              fontWeight: 800,
              textDecoration: "underline",
              textUnderlineOffset: 2 * s,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              cursor: "pointer",
            }}
          >
            Download Full Form 10-K (PDF) →
          </span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
