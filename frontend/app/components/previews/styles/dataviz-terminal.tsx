import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function DatavizTerminalPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
        {/* Bloomberg-Style Market Terminal Header */}
        <div
          className="flex items-center justify-between"
          style={{
            borderBottom: `1px solid ${p.ink}18`,
            paddingBottom: 4 * s,
            fontSize: 6 * s,
            fontFamily: p.display,
          }}
        >
          <div className="flex items-center" style={{ gap: 6 * s }}>
            <span style={{ color: p.accent, fontWeight: 700 }}>
              MARKET TERMINAL · BLOM
            </span>
            <span style={{ color: p.muted }}>FEED: REALTIME L2</span>
          </div>
          <span style={{ color: p.accent2 }}>NY CLOSE: 16:00:02 EDT</span>
        </div>

        {/* Dense Financial Market Ticker Data Table */}
        <div
          className="my-auto overflow-hidden"
          style={{
            background: p.surface,
            border: `1px solid ${p.ink}15`,
            borderRadius: 4 * s,
          }}
        >
          <table
            className="w-full text-left"
            style={{
              borderCollapse: "collapse",
              fontSize: 6 * s,
              fontFamily: p.display,
            }}
          >
            <thead>
              <tr
                style={{
                  background: `${p.ink}08`,
                  borderBottom: `1px solid ${p.ink}15`,
                  color: p.muted,
                }}
              >
                <th style={{ padding: `${3 * s}px ${8 * s}px` }}>TICKER</th>
                <th style={{ padding: `${3 * s}px ${8 * s}px` }}>LAST</th>
                <th style={{ padding: `${3 * s}px ${8 * s}px` }}>CHG</th>
                <th style={{ padding: `${3 * s}px ${8 * s}px` }}>VOLUME</th>
                <th style={{ padding: `${3 * s}px ${8 * s}px` }}>TREND</th>
              </tr>
            </thead>
            <tbody>
              {/* Amber Selected Row Highlight */}
              <tr
                style={{
                  background: `${p.accent}15`,
                  borderBottom: `1px solid ${p.accent}44`,
                }}
              >
                <td style={{ padding: `${4 * s}px ${8 * s}px`, color: p.accent, fontWeight: 700 }}>
                  SPX:IND
                </td>
                <td style={{ padding: `${4 * s}px ${8 * s}px`, color: p.ink }}>5,624.80</td>
                <td style={{ padding: `${4 * s}px ${8 * s}px`, color: p.accent2, fontWeight: 700 }}>
                  ▲ +28.40 (+0.51%)
                </td>
                <td style={{ padding: `${4 * s}px ${8 * s}px`, color: p.muted }}>3.84B</td>
                <td style={{ padding: `${4 * s}px ${8 * s}px`, color: p.accent2 }}>
                  ▅▆▇█
                </td>
              </tr>
              <tr style={{ borderBottom: `1px solid ${p.ink}0C` }}>
                <td style={{ padding: `${4 * s}px ${8 * s}px`, color: p.ink, fontWeight: 700 }}>
                  NDX:IND
                </td>
                <td style={{ padding: `${4 * s}px ${8 * s}px`, color: p.ink }}>19,842.10</td>
                <td style={{ padding: `${4 * s}px ${8 * s}px`, color: p.accent2, fontWeight: 700 }}>
                  ▲ +142.60 (+0.72%)
                </td>
                <td style={{ padding: `${4 * s}px ${8 * s}px`, color: p.muted }}>5.12B</td>
                <td style={{ padding: `${4 * s}px ${8 * s}px`, color: p.accent2 }}>
                  ▃▄▅▇
                </td>
              </tr>
              <tr>
                <td style={{ padding: `${4 * s}px ${8 * s}px`, color: p.ink, fontWeight: 700 }}>
                  US10Y:GOV
                </td>
                <td style={{ padding: `${4 * s}px ${8 * s}px`, color: p.ink }}>3.724%</td>
                <td style={{ padding: `${4 * s}px ${8 * s}px`, color: p.accent }}>
                  ▼ -0.042 (-1.11%)
                </td>
                <td style={{ padding: `${4 * s}px ${8 * s}px`, color: p.muted }}>$28.1B</td>
                <td style={{ padding: `${4 * s}px ${8 * s}px`, color: p.accent }}>
                  ▇▆▄▃
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Dataviz Terminal Status Strip */}
        <div
          className="flex items-center justify-between"
          style={{
            borderTop: `1px solid ${p.ink}15`,
            paddingTop: 4 * s,
            fontSize: 5.5 * s,
            fontFamily: p.display,
            color: p.muted,
          }}
        >
          <span>LATENCY: 0.8MS · TICK FILTER: OFF</span>
          <span style={{ color: p.accent }}>AMBER ROW SELECTION 15%</span>
          <span>BLOOMBERG MATRIX MODE</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
