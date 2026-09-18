import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function QuietLuxuryPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
        {/* Stealth Luxury Header */}
        <div className="flex items-center justify-between" style={{ borderBottom: `1px solid ${p.ink}10`, paddingBottom: 5 * s }}>
          <span
            style={{
              fontFamily: p.display,
              fontSize: 8 * s,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              fontWeight: 400,
            }}
          >
            VALMONT &amp; CIE
          </span>
          <span style={{ fontSize: 5.5 * s, letterSpacing: "0.2em", color: p.muted }}>
            EST. 1892 · GENEVA
          </span>
        </div>

        {/* Restrained Cashmere Canvas */}
        <div className="my-auto flex flex-col items-center text-center" style={{ padding: `${8 * s}px 0` }}>
          <div
            style={{
              fontSize: 5.5 * s,
              letterSpacing: "0.3em",
              color: p.muted,
              textTransform: "uppercase",
              marginBottom: 4 * s,
            }}
          >
            PRIVATE WEALTH ADVISORY
          </div>
          <h2
            style={{
              fontFamily: p.display,
              fontSize: 18 * s,
              fontWeight: 400,
              fontStyle: "italic",
              lineHeight: 1.15,
              color: p.ink,
              maxWidth: "88%",
            }}
          >
            Quality legible only to those who know.
          </h2>
          <p style={{ fontSize: 6.5 * s, color: p.muted, lineHeight: 1.5, maxWidth: "75%", margin: `${6 * s}px 0 ${10 * s}px 0` }}>
            Exquisite serif headlines, warm cashmere-beige ground, tiny tracked labels, and zero loud logos.
          </p>

          <span
            style={{
              border: `1px solid ${p.ink}33`,
              color: p.ink,
              fontSize: 5.5 * s,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              padding: `${5 * s}px ${16 * s}px`,
            }}
          >
            By Invitation Only
          </span>
        </div>

        {/* Footer */}
        <div
          className="flex items-center justify-between"
          style={{
            borderTop: `1px solid ${p.ink}10`,
            paddingTop: 4 * s,
            fontSize: 5.5 * s,
            letterSpacing: "0.15em",
            color: p.muted,
            textTransform: "uppercase",
          }}
        >
          <span>STEALTH WEALTH</span>
          <span>CASHMERE NEUTRALS</span>
          <span>DISCRETION FIRST</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
