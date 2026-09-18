import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function JapaneseMinimalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
          padding: `${14 * s}px ${16 * s}px`,
        }}
      >
        {/* Top Serene Header with Vermilion Hanko Seal */}
        <div className="flex items-center justify-between">
          <div className="flex items-center" style={{ gap: 6 * s }}>
            <span
              style={{
                fontFamily: p.display,
                fontSize: 10 * s,
                fontWeight: 600,
                color: p.ink,
                letterSpacing: "0.05em",
              }}
            >
              茶室 · 閑寂
            </span>
            <span style={{ fontSize: 6 * s, color: p.muted }}>Kyoto Atelier</span>
          </div>

          {/* Vermilion Square Seal Stamp (Hanko) */}
          <div
            style={{
              width: 16 * s,
              height: 16 * s,
              border: `1.5px solid ${p.accent}`,
              borderRadius: 2 * s,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: p.accent,
              fontSize: 8 * s,
              fontFamily: p.display,
              fontWeight: 700,
              lineHeight: 1,
            }}
          >
            無
          </div>
        </div>

        {/* Central Asymmetric Scene with Quiet Vertical Rule */}
        <div
          className="my-auto flex items-center justify-between"
          style={{
            background: p.surface,
            border: `1px solid ${p.ink}0F`,
            borderRadius: 3 * s,
            padding: `${14 * s}px ${16 * s}px`,
            boxShadow: `0 1px 3px ${p.ink}08`,
          }}
        >
          <div className="flex-1 pr-4">
            <div
              style={{
                fontSize: 6 * s,
                color: p.accent2,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: 3 * s,
              }}
            >
              Ceramic Journal · 08
            </div>
            <h3
              style={{
                fontFamily: p.display,
                fontSize: 13 * s,
                fontWeight: 500,
                color: p.ink,
                lineHeight: 1.3,
                margin: 0,
              }}
            >
              黒楽茶碗 — The Kuro-Raku Vessel
            </h3>
            <p
              style={{
                fontSize: 7 * s,
                color: p.muted,
                lineHeight: 1.6,
                margin: `${5 * s}px 0 0 0`,
              }}
            >
              Form molded solely by the palm, glazed in iron stone, pulled glowing from pine fire.
            </p>
          </div>

          {/* Subtle Vertical Calligraphic Column */}
          <div
            className="flex flex-col items-center justify-center border-l pl-3"
            style={{
              borderColor: `${p.ink}15`,
              fontFamily: p.display,
              fontSize: 8 * s,
              color: p.muted,
              lineHeight: 1.5,
              writingMode: "vertical-rl",
              letterSpacing: "0.2em",
            }}
          >
            余白の美
          </div>
        </div>

        {/* Footer understated folio */}
        <div
          className="flex items-center justify-between"
          style={{
            fontSize: 6 * s,
            color: p.muted,
            letterSpacing: "0.08em",
          }}
        >
          <span>間 — Negative space creates form</span>
          <span>巻之四</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
