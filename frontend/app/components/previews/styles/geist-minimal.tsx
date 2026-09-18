import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function GeistMinimalPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
        {/* Geist Vercel top bar */}
        <div
          className="flex items-center justify-between"
          style={{ borderBottom: `1px solid ${p.ink}15`, paddingBottom: 5 * s }}
        >
          <div className="flex items-center" style={{ gap: 6 * s }}>
            <svg width={10 * s} height={9 * s} viewBox="0 0 76 65" fill={p.ink}>
              <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
            </svg>
            <span style={{ fontFamily: p.display, fontSize: 8 * s, fontWeight: 600 }}>
              vercel/deploy
            </span>
          </div>
          <span style={{ fontSize: 5.5 * s, fontFamily: "monospace", color: p.muted }}>
            commit: 8b2718c
          </span>
        </div>

        {/* Clean Engineering Monospace Canvas */}
        <div className="my-auto" style={{ padding: `${6 * s}px 0` }}>
          <div style={{ fontSize: 5.5 * s, color: p.accent, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" as const }}>
            EDGE RUNTIME · GLOBAL V3
          </div>
          <h2
            style={{
              fontFamily: p.display,
              fontSize: 15 * s,
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              margin: `${3 * s}px 0 ${5 * s}px 0`,
            }}
          >
            Minimalism with a pulse.
          </h2>
          <p style={{ fontSize: 6.5 * s, color: p.muted, lineHeight: 1.5 }}>
            Hairline dividers, monochrome surfaces, precision monospace metrics, and rare diagonal laser-beam accents.
          </p>

          <div
            className="flex items-center"
            style={{
              gap: 8 * s,
              marginTop: 8 * s,
              background: p.surface,
              border: `1px solid ${p.ink}15`,
              borderRadius: 6 * s,
              padding: `${6 * s}px ${10 * s}px`,
            }}
          >
            <span style={{ fontFamily: "monospace", fontSize: 6 * s, color: p.accent }}>
              $ npx vercel deploy --prod
            </span>
            <span style={{ marginLeft: "auto", fontSize: 5.5 * s, color: p.muted }}>
              ● 240ms build
            </span>
          </div>
        </div>

        {/* Footer */}
        <div
          className="flex items-center justify-between"
          style={{
            borderTop: `1px solid ${p.ink}15`,
            paddingTop: 4 * s,
            fontSize: 5.5 * s,
            fontFamily: "monospace",
            color: p.muted,
          }}
        >
          <span>0PX EXTRA CHROME</span>
          <span style={{ color: p.accent }}>SPEED OF LIGHT</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
