import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function SeventiesRetroPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
        {/* Groovy Record Shop Strip */}
        <div className="flex items-center justify-between">
          <div className="flex items-center" style={{ gap: 5 * s }}>
            <span
              style={{
                fontFamily: p.display,
                fontSize: 10 * s,
                fontWeight: 700,
                color: p.accent,
                letterSpacing: "0.05em",
              }}
            >
              ✿ Fern &amp; Funk
            </span>
            <span
              style={{
                background: `${p.accent2}25`,
                color: p.accent2,
                border: `1.5px solid ${p.accent2}`,
                borderRadius: 999,
                fontSize: 6 * s,
                fontWeight: 700,
                padding: `${1 * s}px ${6 * s}px`,
              }}
            >
              VINYL LOUNGE
            </span>
          </div>
          <span style={{ fontSize: 6.5 * s, fontWeight: 700, color: p.muted }}>
            Records · Sofas · Lamps
          </span>
        </div>

        {/* 70s Rainbow Stripe Arc Band */}
        <div
          style={{
            height: 6 * s,
            margin: `${4 * s}px 0`,
            borderRadius: 999,
            background: `linear-gradient(90deg, ${p.accent}, ${p.accent2}, ${p.accent}, ${p.accent2})`,
          }}
        />

        {/* Central Mushroom Curve Showcase Card */}
        <div
          className="my-auto flex flex-col justify-between"
          style={{
            background: p.surface,
            borderRadius: 22 * s,
            border: `2px solid ${p.accent}44`,
            boxShadow: `0 ${8 * s}px ${24 * s}px ${p.ink}15`,
            padding: `${14 * s}px ${16 * s}px`,
          }}
        >
          <div className="flex items-start justify-between">
            <div>
              <div
                style={{
                  fontSize: 6 * s,
                  fontWeight: 700,
                  color: p.accent,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                }}
              >
                Analog Warmth &amp; Shag
              </div>
              <h3
                style={{
                  fontFamily: p.display,
                  fontSize: 14 * s,
                  fontWeight: 700,
                  color: p.ink,
                  lineHeight: 1.15,
                  margin: `${3 * s}px 0 0 0`,
                }}
              >
                Groovy Avocado &amp; Harvest Gold
              </h3>
            </div>
            <div
              style={{
                width: 24 * s,
                height: 24 * s,
                borderRadius: "50%",
                background: p.accent2,
                color: p.surface,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 12 * s,
              }}
            >
              ♪
            </div>
          </div>

          <p
            style={{
              fontSize: 7 * s,
              color: p.muted,
              lineHeight: 1.45,
              margin: `${8 * s}px 0`,
            }}
          >
            Curvy Cooper Black letterforms, thick earthy concentric rainbow arcs, and vintage analog turntable charm.
          </p>

          <div
            className="flex items-center justify-between"
            style={{
              borderTop: `1px solid ${p.ink}15`,
              paddingTop: 8 * s,
            }}
          >
            <span style={{ fontSize: 6.5 * s, fontWeight: 700, color: p.accent2 }}>
              Now Spinning: Side B · 33 RPM
            </span>
            <button
              type="button"
              style={{
                background: p.accent,
                color: p.surface,
                border: "none",
                borderRadius: 999,
                fontFamily: p.display,
                fontSize: 6.5 * s,
                fontWeight: 700,
                padding: `${4 * s}px ${14 * s}px`,
                cursor: "pointer",
                boxShadow: `0 ${3 * s}px ${10 * s}px ${p.accent}44`,
              }}
            >
              Dig In ✿
            </button>
          </div>
        </div>

        {/* Footer Good Vibes Only */}
        <div
          className="flex items-center justify-between"
          style={{
            borderTop: `1px solid ${p.ink}22`,
            paddingTop: 4 * s,
            fontSize: 5.5 * s,
            fontWeight: 700,
            color: p.muted,
            letterSpacing: "0.08em",
          }}
        >
          <span>BURNT ORANGE · AVOCADO</span>
          <span>SHAG CARPET COZINESS</span>
          <span style={{ color: p.accent }}>GOOD VIBES ONLY</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
