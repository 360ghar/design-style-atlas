import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function FintechNeobankPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
        {/* Neobank header bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center" style={{ gap: 6 * s }}>
            <span
              style={{
                fontFamily: p.display,
                fontSize: 9 * s,
                fontWeight: 900,
                color: p.ink,
                letterSpacing: "0.08em",
              }}
            >
              VOLT//VAULT
            </span>
            <span
              style={{
                background: `${p.accent}22`,
                color: p.accent,
                fontSize: 5 * s,
                fontWeight: 800,
                padding: `${1 * s}px ${6 * s}px`,
                borderRadius: 999,
                border: `1px solid ${p.accent}66`,
              }}
            >
              TIER: TITANIUM
            </span>
          </div>
          <span style={{ fontSize: 6 * s, color: p.muted, fontFamily: "monospace" }}>
            APY 5.40%
          </span>
        </div>

        {/* Floating Dark Obsidian Metal Card */}
        <div
          className="my-auto flex flex-col justify-between"
          style={{
            background: p.surface,
            borderRadius: 16 * s,
            border: `1px solid ${p.accent}33`,
            boxShadow: `0 ${10 * s}px ${32 * s}px ${p.bg}, 0 0 ${20 * s}px ${p.accent}15`,
            padding: `${14 * s}px ${16 * s}px`,
          }}
        >
          <div className="flex items-start justify-between">
            <div>
              <div style={{ fontSize: 5.5 * s, color: p.muted, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const }}>
                TOTAL LIQUID ASSETS
              </div>
              <div
                style={{
                  fontFamily: p.display,
                  fontSize: 18 * s,
                  fontWeight: 900,
                  color: p.ink,
                  letterSpacing: "-0.03em",
                  marginTop: 2 * s,
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                $842,910<span style={{ color: p.accent, fontSize: 13 * s }}>.45</span>
              </div>
            </div>
            <div
              style={{
                background: p.accent,
                color: p.bg,
                fontFamily: p.display,
                fontWeight: 900,
                fontSize: 7 * s,
                padding: `${2 * s}px ${8 * s}px`,
                borderRadius: 999,
              }}
            >
              +14.2%
            </div>
          </div>

          <p style={{ fontSize: 6.5 * s, color: p.muted, lineHeight: 1.45, margin: `${8 * s}px 0` }}>
            Obsidian dark grounds, electric lime yields, tabular micro-cents, and screenshot-ready metal cards.
          </p>

          <div
            className="flex items-center justify-between"
            style={{
              borderTop: `1px solid ${p.ink}15`,
              paddingTop: 6 * s,
            }}
          >
            <span style={{ fontSize: 6 * s, color: p.muted, fontFamily: "monospace" }}>
              CARD: **** 4812 · VIRTUAL
            </span>
            <span
              style={{
                background: p.accent,
                color: p.bg,
                fontSize: 6 * s,
                fontWeight: 800,
                padding: `${3 * s}px ${12 * s}px`,
                borderRadius: 999,
              }}
            >
              TRANSFER ↗
            </span>
          </div>
        </div>

        {/* Footer status */}
        <div
          className="flex items-center justify-between"
          style={{
            fontSize: 5.5 * s,
            color: p.muted,
            borderTop: `1px solid ${p.ink}15`,
            paddingTop: 4 * s,
          }}
        >
          <span>ELECTRIC LIME MOMENTUM</span>
          <span>TABULAR NUMERALS</span>
          <span style={{ color: p.accent }}>FDIC INSURED</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
