import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function GenerativeAlgorithmicPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
        {/* Algorithmic Header */}
        <div className="flex items-center justify-between" style={{ borderBottom: `1px solid ${p.accent}44`, paddingBottom: 4 * s }}>
          <span style={{ fontFamily: p.display, fontSize: 8 * s, fontWeight: 700 }}>
            SEED #0x4F82 // ATTRACTOR
          </span>
          <span style={{ fontSize: 5.5 * s, fontFamily: "monospace", color: p.accent }}>
            ITERATION: 120,400
          </span>
        </div>

        {/* Parametric Curve Field */}
        <div className="my-auto flex flex-col items-center text-center" style={{ padding: `${4 * s}px 0` }}>
          <svg viewBox="0 0 160 50" style={{ width: large ? 240 : 150 }}>
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <path
                key={i}
                d={`M10 ${10 + i * 6} Q 80 ${40 - i * 5}, 150 ${15 + i * 5}`}
                fill="none"
                stroke={i % 2 === 0 ? p.accent : p.accent2}
                strokeWidth="1.2"
                opacity={0.6 + i * 0.08}
              />
            ))}
          </svg>
          <div
            style={{
              fontFamily: p.display,
              fontSize: 13 * s,
              fontWeight: 800,
              marginTop: 4 * s,
              lineHeight: 1.15,
            }}
          >
            The Algorithm is the Artist
          </div>
          <p style={{ fontSize: 6 * s, color: p.muted, lineHeight: 1.4, margin: `${3 * s}px 0` }}>
            Parametric flow fields, seed-based mathematical editions, and generative rulesets.
          </p>
          <div className="flex items-center" style={{ gap: 6 * s, marginTop: 4 * s }}>
            <span
              style={{
                background: p.accent,
                color: p.bg,
                fontSize: 5.5 * s,
                fontWeight: 700,
                padding: `${3 * s}px ${10 * s}px`,
                borderRadius: 4 * s,
              }}
            >
              Regenerate Seed
            </span>
          </div>
        </div>

        {/* Parametric Footer */}
        <div
          className="flex items-center justify-between"
          style={{
            borderTop: `1px solid ${p.accent}33`,
            paddingTop: 4 * s,
            fontSize: 5.5 * s,
            fontFamily: "monospace",
            color: p.muted,
          }}
        >
          <span>PARAMETRIC VECTORS</span>
          <span style={{ color: p.accent2 }}>FLOW EQUATION: SIN(x)+COS(y)</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
