import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function MaximalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
        {/* Ornate Layered Masthead */}
        <div className="flex items-center justify-between">
          <div className="flex items-center" style={{ gap: 6 * s }}>
            <span
              style={{
                fontFamily: p.display,
                fontSize: 10 * s,
                fontWeight: 700,
                color: p.accent2,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Cabinet des Curiosités
            </span>
            <span
              style={{
                background: p.accent,
                color: p.ink,
                fontSize: 5.5 * s,
                fontWeight: 800,
                padding: `${1 * s}px ${6 * s}px`,
                borderRadius: 999,
                boxShadow: `0 0 ${8 * s}px ${p.accent}66`,
              }}
            >
              SALON PRIVÉ
            </span>
          </div>
          <span style={{ fontSize: 6.5 * s, color: p.muted, fontStyle: "italic" }}>
            More is More ✿
          </span>
        </div>

        {/* Lush Layered Velvet Salon Card */}
        <div
          className="my-auto flex flex-col justify-between"
          style={{
            background: p.surface,
            borderRadius: 16 * s,
            border: `2px solid ${p.accent2}44`,
            boxShadow: `0 ${10 * s}px ${30 * s}px ${p.bg}, 0 0 ${16 * s}px ${p.accent2}22`,
            padding: `${14 * s}px ${16 * s}px`,
            position: "relative",
          }}
        >
          {/* Ornate Inner Trim */}
          <div
            className="pointer-events-none absolute inset-1.5"
            style={{
              border: `1px dashed ${p.accent}55`,
              borderRadius: 12 * s,
            }}
          />

          <div className="flex items-start justify-between">
            <div>
              <div
                style={{
                  fontSize: 6 * s,
                  color: p.accent,
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                }}
              >
                Tapestry &amp; Opulence · Plate IX
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
                Joyful Pattern Overload
              </h3>
            </div>
            <div
              className="pv-spin-slow"
              style={{
                width: 24 * s,
                height: 24 * s,
                borderRadius: "50%",
                background: p.accent2,
                color: p.bg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 11 * s,
                fontWeight: 900,
              }}
            >
              ✺
            </div>
          </div>

          <p
            style={{
              fontSize: 7 * s,
              color: p.muted,
              lineHeight: 1.5,
              margin: `${8 * s}px 0`,
            }}
          >
            Vibrant damasks, scalloped trims, and layered jewel tones. Whitespace replaced with deliberate decorative intent.
          </p>

          <div
            className="flex items-center justify-between"
            style={{
              borderTop: `1px solid ${p.accent2}33`,
              paddingTop: 8 * s,
            }}
          >
            <span style={{ fontSize: 6.5 * s, color: p.accent2, fontWeight: 600 }}>
              Collection No. 44 · Paris
            </span>
            <button
              type="button"
              style={{
                background: p.accent,
                color: p.ink,
                border: "none",
                borderRadius: 999,
                fontSize: 6.5 * s,
                fontWeight: 700,
                padding: `${4 * s}px ${14 * s}px`,
                cursor: "pointer",
                boxShadow: `0 0 ${12 * s}px ${p.accent}55`,
              }}
            >
              Enter Chamber ✦
            </button>
          </div>
        </div>

        {/* Footer Ornate Ribbon */}
        <div
          className="flex items-center justify-between"
          style={{
            borderTop: `1px solid ${p.muted}33`,
            paddingTop: 4 * s,
            fontSize: 5.5 * s,
            color: p.muted,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          <span>✦ RICH VELVET GROUND</span>
          <span>✦ DOUBLE GOLD RULES</span>
          <span>✦ JOYFUL DENSITY</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
