import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function Web3CryptoPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
        {/* Web3 Exchange Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center" style={{ gap: 5 * s }}>
            <span style={{ fontFamily: p.display, fontSize: 8.5 * s, fontWeight: 900 }}>
              NEXUS//DEX
            </span>
            <span
              style={{
                background: `${p.accent}20`,
                color: p.accent,
                fontSize: 5 * s,
                fontWeight: 800,
                padding: `${1 * s}px ${6 * s}px`,
                borderRadius: 999,
                border: `1px solid ${p.accent}55`,
              }}
            >
              MAINNET
            </span>
          </div>
          <span
            style={{
              background: p.accent2,
              color: p.bg,
              fontSize: 5.5 * s,
              fontWeight: 800,
              padding: `${2 * s}px ${8 * s}px`,
              borderRadius: 6 * s,
            }}
          >
            0x4f...88a2
          </span>
        </div>

        {/* Real-time Crypto Candlestick Portfolio Card */}
        <div
          className="my-auto"
          style={{
            background: p.surface,
            border: `1px solid ${p.ink}18`,
            borderRadius: 12 * s,
            padding: `${14 * s}px ${16 * s}px`,
            boxShadow: `0 ${10 * s}px ${32 * s}px ${p.bg}, 0 0 ${24 * s}px ${p.accent}12`,
          }}
        >
          <div className="flex items-start justify-between">
            <div>
              <div style={{ fontSize: 5.5 * s, color: p.muted, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const }}>
                NET PORTFOLIO VALUE
              </div>
              <div
                style={{
                  fontFamily: p.display,
                  fontSize: 18 * s,
                  fontWeight: 900,
                  letterSpacing: "-0.03em",
                  marginTop: 2 * s,
                }}
              >
                $128,450<span style={{ color: p.accent, fontSize: 13 * s }}>.80</span>
              </div>
            </div>
            <div
              style={{
                background: `${p.accent}25`,
                color: p.accent,
                fontFamily: "monospace",
                fontWeight: 800,
                fontSize: 7 * s,
                padding: `${2 * s}px ${8 * s}px`,
                borderRadius: 4 * s,
              }}
            >
              ▲ +24.8%
            </div>
          </div>

          {/* Mini Candlestick Graphic */}
          <div className="flex items-end justify-between" style={{ height: 28 * s, margin: `${8 * s}px 0` }}>
            {[
              { h: 14, green: true }, { h: 18, green: true }, { h: 12, green: false },
              { h: 22, green: true }, { h: 20, green: false }, { h: 26, green: true },
              { h: 28, green: true },
            ].map((c, i) => (
              <div key={i} className="flex flex-col items-center" style={{ flex: 1 }}>
                <div style={{ width: 1, height: 4 * s, background: c.green ? p.accent : p.accent2 }} />
                <div style={{ width: 6 * s, height: c.h * s * 0.7, background: c.green ? p.accent : p.accent2, borderRadius: 1 }} />
                <div style={{ width: 1, height: 4 * s, background: c.green ? p.accent : p.accent2 }} />
              </div>
            ))}
          </div>

          <div
            className="flex items-center justify-between"
            style={{
              borderTop: `1px solid ${p.ink}15`,
              paddingTop: 6 * s,
            }}
          >
            <span style={{ fontSize: 5.5 * s, color: p.muted, fontFamily: "monospace" }}>
              24H VOL: $4.2M · AUDITED CONTRACT
            </span>
            <span
              style={{
                background: p.accent,
                color: p.bg,
                fontSize: 6 * s,
                fontWeight: 900,
                padding: `${3 * s}px ${12 * s}px`,
                borderRadius: 6 * s,
              }}
            >
              SWAP ⏵
            </span>
          </div>
        </div>

        {/* Footer */}
        <div
          className="flex items-center justify-between"
          style={{
            fontSize: 5.5 * s,
            color: p.muted,
            borderTop: `1px solid ${p.ink}15`,
            paddingTop: 4 * s,
          }}
        >
          <span>DEEP SPACE OBSIDIAN</span>
          <span>REAL-TIME AUDITED TELEMETRY</span>
          <span style={{ color: p.accent }}>SMART CONTRACT READY</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
