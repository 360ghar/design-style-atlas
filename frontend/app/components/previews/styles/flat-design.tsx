import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function FlatDesignPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
        {/* Flat Color Block Header */}
        <div
          className="flex items-center justify-between"
          style={{
            background: p.accent,
            color: p.bg,
            padding: `${6 * s}px ${10 * s}px`,
          }}
        >
          <span style={{ fontFamily: p.display, fontSize: 8 * s, fontWeight: 700 }}>
            FLAT//2013
          </span>
          <div className="flex items-center" style={{ gap: 6 * s, fontSize: 6 * s, fontWeight: 600 }}>
            <span>Home</span>
            <span>Blocks</span>
            <span>Grid</span>
          </div>
        </div>

        {/* 2D Flat Color Grid */}
        <div className="my-auto grid grid-cols-2" style={{ gap: 6 * s }}>
          <div
            style={{
              background: p.surface,
              padding: `${10 * s}px`,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div style={{ fontSize: 5.5 * s, fontWeight: 700, color: p.accent, textTransform: "uppercase" as const }}>
              2D COLOR BLOCKS
            </div>
            <div style={{ fontFamily: p.display, fontSize: 13 * s, fontWeight: 700, lineHeight: 1.15, margin: `${3 * s}px 0` }}>
              Zero Bevels, Zero Gloss
            </div>
            <p style={{ fontSize: 6 * s, color: p.muted, lineHeight: 1.4 }}>
              Honest primary colors, crisp edges, and bold typography doing all the talking.
            </p>
          </div>

          <div
            style={{
              background: p.accent2,
              color: p.bg,
              padding: `${10 * s}px`,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div style={{ fontSize: 5.5 * s, fontWeight: 700, textTransform: "uppercase" as const }}>
              LONG SHADOW READY
            </div>
            <div style={{ fontFamily: p.display, fontSize: 18 * s, fontWeight: 900 }}>
              100%
            </div>
            <span
              style={{
                background: p.bg,
                color: p.ink,
                fontSize: 6 * s,
                fontWeight: 700,
                padding: `${3 * s}px ${8 * s}px`,
                textAlign: "center",
              }}
            >
              Explore Grid →
            </span>
          </div>
        </div>

        {/* Flat Footer Strip */}
        <div
          className="flex items-center justify-between"
          style={{
            background: p.surface,
            padding: `${4 * s}px ${10 * s}px`,
            fontSize: 5.5 * s,
            fontWeight: 700,
            color: p.muted,
          }}
        >
          <span>TURQUOISE · EMERALD · SUNFLOWER</span>
          <span style={{ color: p.accent }}>NO SKEUOMORPHISM</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
