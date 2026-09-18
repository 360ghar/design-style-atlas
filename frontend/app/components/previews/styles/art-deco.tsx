import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function ArtDecoPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const s = large ? 1.6 : 1;

  return (
    <Frame meta={meta} large={large}>
      <div
        className="flex h-full flex-col items-center justify-between text-center"
        style={{
          background: p.bg,
          color: p.ink,
          fontFamily: p.body,
          borderTop: `3px solid ${p.accent}`,
          borderBottom: `3px solid ${p.accent}`,
          padding: `${8 * s}px ${12 * s}px`,
        }}
      >
        {/* Symmetrical deco header */}
        <div
          className="flex w-full items-center justify-between"
          style={{
            fontSize: 6 * s,
            letterSpacing: "0.25em",
            color: p.muted,
            borderBottom: `1px solid ${p.accent}44`,
            paddingBottom: 4 * s,
          }}
        >
          <span>❖ 1925 ❖</span>
          <span style={{ color: p.accent, fontWeight: 700 }}>LE CHRYSLER SALON</span>
          <span>❖ PARIS ❖</span>
        </div>

        {/* Stepped ziggurat fan ornament + masthead */}
        <div className="flex flex-1 flex-col items-center justify-center" style={{ padding: `${6 * s}px 0` }}>
          <svg viewBox="0 0 140 32" style={{ width: large ? 200 : 120 }}>
            <g fill="none" stroke={p.accent} strokeWidth="1.5">
              {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                <line key={i} x1={10 + i * 8} y1="30" x2="70" y2="4" />
              ))}
              {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                <line key={`b${i}`} x1={130 - i * 8} y1="30" x2="70" y2="4" />
              ))}
            </g>
            <polygon points="70,2 66,8 74,8" fill={p.accent2} />
          </svg>
          <div
            style={{
              fontFamily: p.display,
              fontSize: large ? 28 : 16,
              letterSpacing: "0.18em",
              fontWeight: 900,
              textTransform: "uppercase",
              marginTop: 4 * s,
              color: p.ink,
            }}
          >
            L&apos;ÉTOILE NOIRE
          </div>
          <div
            style={{
              fontSize: 5.5 * s,
              letterSpacing: "0.35em",
              color: p.accent,
              marginTop: 2 * s,
              textTransform: "uppercase",
            }}
          >
            Dynastic Symmetry · Gold Lacquer
          </div>
          <div style={{ display: "flex", gap: 6 * s, marginTop: 8 * s }}>
            <span
              style={{
                border: `1.5px solid ${p.accent}`,
                color: p.accent,
                background: p.surface,
                fontSize: 5.5 * s,
                letterSpacing: "0.25em",
                padding: `${4 * s}px ${14 * s}px`,
                fontWeight: 700,
              }}
            >
              RESERVE SUITE
            </span>
          </div>
        </div>

        {/* Stepped border footer */}
        <div
          className="flex w-full items-center justify-between"
          style={{
            borderTop: `1px solid ${p.accent}44`,
            paddingTop: 4 * s,
            fontSize: 5.5 * s,
            letterSpacing: "0.2em",
            color: p.muted,
          }}
        >
          <span>ZIGGURAT ARCH</span>
          <span style={{ color: p.accent2 }}>◆ GEOMETRIC GLAMOUR ◆</span>
          <span>FIFTH AVE</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
