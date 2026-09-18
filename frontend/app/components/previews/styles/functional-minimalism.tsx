import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function FunctionalMinimalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
        {/* Utilitarian System Nav */}
        <div
          className="flex items-center justify-between"
          style={{
            borderBottom: `1px solid ${p.ink}18`,
            paddingBottom: 6 * s,
          }}
        >
          <div className="flex items-center" style={{ gap: 6 * s }}>
            <span
              style={{
                fontFamily: p.display,
                fontSize: 8.5 * s,
                fontWeight: 700,
                color: p.ink,
              }}
            >
              Gateway Node · eu-west-1
            </span>
            <span
              style={{
                fontSize: 6 * s,
                color: p.accent2,
                fontWeight: 600,
                background: `${p.accent2}15`,
                border: `1px solid ${p.accent2}33`,
                borderRadius: 4 * s,
                padding: `${1 * s}px ${5 * s}px`,
              }}
            >
              HEALTHY 99.98%
            </span>
          </div>
          <span style={{ fontSize: 6 * s, color: p.muted }}>Cluster v2.14.0</span>
        </div>

        {/* Structured Utilitarian Data Table */}
        <div
          className="my-auto overflow-hidden"
          style={{
            background: p.surface,
            border: `1px solid ${p.ink}18`,
            borderRadius: 6 * s,
          }}
        >
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
                  background: `${p.ink}06`,
                  borderBottom: `1px solid ${p.ink}15`,
                  color: p.muted,
                }}
              >
                <th style={{ padding: `${4 * s}px ${8 * s}px`, fontWeight: 600 }}>ROUTE</th>
                <th style={{ padding: `${4 * s}px ${8 * s}px`, fontWeight: 600 }}>LATENCY</th>
                <th style={{ padding: `${4 * s}px ${8 * s}px`, fontWeight: 600 }}>STATUS</th>
                <th style={{ padding: `${4 * s}px ${8 * s}px`, fontWeight: 600 }}>TLS</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: `1px solid ${p.ink}0C` }}>
                <td style={{ padding: `${5 * s}px ${8 * s}px`, fontFamily: "monospace", color: p.ink }}>
                  /api/v1/stream
                </td>
                <td style={{ padding: `${5 * s}px ${8 * s}px`, color: p.muted }}>14ms</td>
                <td style={{ padding: `${5 * s}px ${8 * s}px`, color: p.accent2, fontWeight: 600 }}>
                  Active
                </td>
                <td style={{ padding: `${5 * s}px ${8 * s}px`, color: p.muted }}>1.3 Enforced</td>
              </tr>
              <tr>
                <td style={{ padding: `${5 * s}px ${8 * s}px`, fontFamily: "monospace", color: p.ink }}>
                  /healthz
                </td>
                <td style={{ padding: `${5 * s}px ${8 * s}px`, color: p.muted }}>2ms</td>
                <td style={{ padding: `${5 * s}px ${8 * s}px`, color: p.accent2, fontWeight: 600 }}>
                  Active
                </td>
                <td style={{ padding: `${5 * s}px ${8 * s}px`, color: p.muted }}>1.3 Enforced</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Action Bottom Bar */}
        <div
          className="flex items-center justify-between"
          style={{
            borderTop: `1px solid ${p.ink}15`,
            paddingTop: 6 * s,
          }}
        >
          <span style={{ fontSize: 6 * s, color: p.muted }}>
            Last heartbeat 4s ago · Total requests 4.8M
          </span>
          <button
            type="button"
            style={{
              background: p.accent,
              color: p.surface,
              border: "none",
              borderRadius: 4 * s,
              fontSize: 6 * s,
              fontWeight: 600,
              padding: `${3 * s}px ${8 * s}px`,
              cursor: "pointer",
            }}
          >
            Configure DNS Routing
          </button>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
