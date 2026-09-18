import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function MinimalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
        {/* Atelier Top Folio */}
        <div
          className="flex items-center justify-between"
          style={{
            fontSize: 7 * s,
            color: p.muted,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            borderBottom: `1px solid ${p.ink}12`,
            paddingBottom: 6 * s,
          }}
        >
          <span style={{ fontFamily: p.display, fontWeight: 600, color: p.ink }}>
            Studio Rams · 04
          </span>
          <span>Index / Archive</span>
        </div>

        {/* Content Card with generous negative space */}
        <div
          className="my-auto flex flex-col justify-between"
          style={{
            background: p.surface,
            border: `1px solid ${p.ink}12`,
            borderRadius: 8 * s,
            padding: `${12 * s}px ${14 * s}px`,
            boxShadow: `0 ${2 * s}px ${6 * s}px ${p.ink}08`,
          }}
        >
          <div>
            <div
              style={{
                fontSize: 6.5 * s,
                color: p.muted,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 4 * s,
              }}
            >
              Architectural Monograph
            </div>
            <h3
              style={{
                fontFamily: p.display,
                fontSize: 14 * s,
                fontWeight: 600,
                color: p.ink,
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                margin: 0,
              }}
            >
              Vals Pavilion &amp; Silence
            </h3>
            <p
              style={{
                fontSize: 7.5 * s,
                color: p.muted,
                lineHeight: 1.5,
                margin: `${5 * s}px 0 0 0`,
              }}
            >
              Form reduced to daylight, local quartzite, and pure volumetric proportion.
            </p>
          </div>

          <div
            className="flex items-center justify-between"
            style={{
              marginTop: 10 * s,
              paddingTop: 8 * s,
              borderTop: `1px solid ${p.ink}0A`,
            }}
          >
            <div className="flex items-center" style={{ gap: 4 * s }}>
              <span
                style={{
                  fontSize: 6 * s,
                  background: `${p.ink}08`,
                  color: p.ink,
                  padding: `${2 * s}px ${6 * s}px`,
                  borderRadius: 999,
                  fontWeight: 500,
                }}
              >
                Quartzite
              </span>
              <span
                style={{
                  fontSize: 6 * s,
                  background: `${p.ink}08`,
                  color: p.muted,
                  padding: `${2 * s}px ${6 * s}px`,
                  borderRadius: 999,
                }}
              >
                1996
              </span>
            </div>
            <button
              type="button"
              style={{
                background: p.ink,
                color: p.bg,
                border: "none",
                borderRadius: 6 * s,
                fontSize: 6.5 * s,
                fontWeight: 500,
                padding: `${4 * s}px ${10 * s}px`,
                cursor: "pointer",
              }}
            >
              View Specimen
            </button>
          </div>
        </div>

        {/* Footer quiet footnote */}
        <div
          className="flex items-center justify-between"
          style={{
            fontSize: 6 * s,
            color: p.muted,
            letterSpacing: "0.04em",
          }}
        >
          <span>Less, but better.</span>
          <span>Plate 04 / 12</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
