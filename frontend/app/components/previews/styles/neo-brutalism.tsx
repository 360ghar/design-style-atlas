import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function NeoBrutalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
        {/* Punchy Neo-Brutalist Top Bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center" style={{ gap: 6 * s }}>
            <span
              style={{
                fontFamily: p.display,
                fontSize: 10 * s,
                fontWeight: 900,
                color: p.ink,
                background: p.accent,
                border: `2px solid ${p.ink}`,
                boxShadow: `${2 * s}px ${2 * s}px 0 ${p.ink}`,
                padding: `${1 * s}px ${6 * s}px`,
              }}
            >
              NEO★LAB
            </span>
            <span
              style={{
                fontSize: 6 * s,
                fontWeight: 700,
                color: p.ink,
                background: p.surface,
                border: `1.5px solid ${p.ink}`,
                borderRadius: 999,
                padding: `${1 * s}px ${6 * s}px`,
              }}
            >
              ⚡ V2.4 DROP
            </span>
          </div>
          <span
            style={{
              fontSize: 6.5 * s,
              fontWeight: 700,
              color: p.ink,
              textDecoration: "underline",
            }}
          >
            CATALOG →
          </span>
        </div>

        {/* Central High-Contrast Hard-Shadow Card */}
        <div
          className="my-auto flex flex-col justify-between"
          style={{
            background: p.surface,
            border: `2.5px solid ${p.ink}`,
            boxShadow: `${4 * s}px ${4 * s}px 0 ${p.ink}`,
            padding: `${12 * s}px ${14 * s}px`,
          }}
        >
          <div className="flex items-start justify-between">
            <div>
              <span
                style={{
                  fontSize: 5.5 * s,
                  fontFamily: p.display,
                  fontWeight: 800,
                  color: p.surface,
                  background: p.accent2,
                  border: `1.5px solid ${p.ink}`,
                  padding: `${1 * s}px ${5 * s}px`,
                  boxShadow: `${1.5 * s}px ${1.5 * s}px 0 ${p.ink}`,
                }}
              >
                PRO ASSET KIT
              </span>
              <h3
                style={{
                  fontFamily: p.display,
                  fontSize: 13 * s,
                  fontWeight: 900,
                  color: p.ink,
                  lineHeight: 1.15,
                  margin: `${4 * s}px 0 0 0`,
                }}
              >
                Zero Blur. 100% Contrast.
              </h3>
            </div>
            <div
              style={{
                background: p.accent,
                border: `2px solid ${p.ink}`,
                boxShadow: `${2 * s}px ${2 * s}px 0 ${p.ink}`,
                fontFamily: p.display,
                fontWeight: 900,
                fontSize: 10 * s,
                color: p.ink,
                padding: `${2 * s}px ${6 * s}px`,
                transform: "rotate(-3deg)",
              }}
            >
              $49
            </div>
          </div>

          <p
            style={{
              fontSize: 7 * s,
              fontWeight: 500,
              color: p.ink,
              margin: `${8 * s}px 0`,
              lineHeight: 1.4,
            }}
          >
            Hard offset shadows, 2.5px solid black borders, and saturated citrus fills.
          </p>

          <div className="flex items-center justify-between">
            <span style={{ fontSize: 6 * s, fontWeight: 700, color: p.muted }}>
              Includes vector asset kit
            </span>
            <button
              type="button"
              style={{
                background: p.accent,
                color: p.ink,
                border: `2px solid ${p.ink}`,
                boxShadow: `${3 * s}px ${3 * s}px 0 ${p.ink}`,
                fontFamily: p.display,
                fontWeight: 800,
                fontSize: 7 * s,
                padding: `${4 * s}px ${12 * s}px`,
                cursor: "pointer",
              }}
            >
              CLAIM PACK →
            </button>
          </div>
        </div>

        {/* Footer Marquee Strip Style */}
        <div
          className="flex items-center justify-between"
          style={{
            borderTop: `2px solid ${p.ink}`,
            paddingTop: 4 * s,
            fontSize: 5.5 * s,
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
          }}
        >
          <span>✦ NO SOFT SHADOWS</span>
          <span>✦ HARD CORNERS</span>
          <span>✦ GUMROAD VIBES</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
