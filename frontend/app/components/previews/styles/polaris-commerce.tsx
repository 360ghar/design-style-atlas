import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function PolarisCommercePreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
        {/* Shopify Polaris Top Bar */}
        <div className="flex items-center justify-between" style={{ borderBottom: `1px solid ${p.ink}15`, paddingBottom: 4 * s }}>
          <div className="flex items-center" style={{ gap: 6 * s }}>
            <span style={{ width: 10 * s, height: 10 * s, borderRadius: 3 * s, background: p.accent, display: "inline-flex", alignItems: "center", justifyContent: "center", color: p.bg, fontSize: 6 * s, fontWeight: 900 }}>
              S
            </span>
            <span style={{ fontFamily: p.display, fontSize: 8 * s, fontWeight: 700 }}>
              Merchant Admin
            </span>
          </div>
          <span style={{ fontSize: 5.5 * s, color: p.muted }}>
            Store: Studio Goods
          </span>
        </div>

        {/* High-Converting Product Card */}
        <div
          className="my-auto"
          style={{
            background: p.surface,
            borderRadius: 8 * s,
            border: `1px solid ${p.ink}15`,
            boxShadow: `0 ${2 * s}px ${8 * s}px ${p.ink}08`,
            padding: `${12 * s}px ${14 * s}px`,
          }}
        >
          <div className="flex items-start justify-between">
            <div>
              <div style={{ fontSize: 5.5 * s, color: p.accent, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" as const }}>
                IN STOCK · READY TO SHIP
              </div>
              <h3
                style={{
                  fontFamily: p.display,
                  fontSize: 13 * s,
                  fontWeight: 700,
                  lineHeight: 1.2,
                  margin: `${3 * s}px 0 ${4 * s}px 0`,
                }}
              >
                Heavyweight Wool Chore Jacket
              </h3>
            </div>
            <div style={{ fontSize: 13 * s, fontWeight: 800, color: p.ink, fontFamily: p.display }}>
              $240
            </div>
          </div>

          <p style={{ fontSize: 6.5 * s, color: p.muted, lineHeight: 1.45, margin: `${4 * s}px 0` }}>
            Polaris design system: honest pricing typography, high-converting white space, and zero friction.
          </p>

          <div className="flex items-center" style={{ gap: 6 * s, marginTop: 8 * s }}>
            <span
              style={{
                background: p.accent,
                color: p.bg,
                fontSize: 6 * s,
                fontWeight: 700,
                padding: `${4 * s}px ${14 * s}px`,
                borderRadius: 5 * s,
              }}
            >
              Add to Cart →
            </span>
            <span style={{ fontSize: 5.5 * s, color: p.muted }}>
              Free express shipping over $150
            </span>
          </div>
        </div>

        {/* Footer */}
        <div
          className="flex items-center justify-between"
          style={{
            fontSize: 5.5 * s,
            color: p.muted,
            borderTop: `1px solid ${p.ink}12`,
            paddingTop: 4 * s,
          }}
        >
          <span>SHOPIFY POLARIS DS</span>
          <span style={{ color: p.accent }}>GREEN MEANS GO &amp; REVENUE</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
