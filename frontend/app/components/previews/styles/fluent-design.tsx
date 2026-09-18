import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function FluentDesignPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
        {/* Fluent Acrylic Command Bar */}
        <div
          className="flex items-center justify-between"
          style={{
            background: `color-mix(in srgb, ${p.surface} 85%, transparent)`,
            backdropFilter: "blur(16px)",
            borderRadius: 8 * s,
            border: `1px solid ${p.ink}15`,
            padding: `${5 * s}px ${10 * s}px`,
          }}
        >
          <div className="flex items-center" style={{ gap: 6 * s }}>
            <span style={{ fontFamily: p.display, fontSize: 8 * s, fontWeight: 600 }}>
              Windows Workspace
            </span>
          </div>
          <div className="flex items-center" style={{ gap: 6 * s, fontSize: 6 * s, color: p.muted }}>
            <span>Edit</span>
            <span>View</span>
            <span style={{ color: p.accent, fontWeight: 600 }}>Connected</span>
          </div>
        </div>

        {/* Acrylic Light-Reveal Card */}
        <div
          className="my-auto"
          style={{
            background: `color-mix(in srgb, ${p.surface} 90%, transparent)`,
            backdropFilter: "blur(20px)",
            borderRadius: 10 * s,
            border: `1px solid ${p.ink}18`,
            boxShadow: `0 ${8 * s}px ${24 * s}px ${p.ink}0d`,
            padding: `${14 * s}px ${16 * s}px`,
          }}
        >
          <div style={{ fontSize: 5.5 * s, color: p.accent, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" as const }}>
            MICROSOFT FLUENT 2
          </div>
          <h3
            style={{
              fontFamily: p.display,
              fontSize: 14 * s,
              fontWeight: 600,
              lineHeight: 1.2,
              margin: `${3 * s}px 0 ${5 * s}px 0`,
            }}
          >
            Calm Enterprise Depth
          </h3>
          <p style={{ fontSize: 6.5 * s, color: p.muted, lineHeight: 1.45 }}>
            Restrained acrylic surfaces, directional light accents, soft rounded corners, and effortless accessibility.
          </p>
          <div className="flex items-center" style={{ gap: 6 * s, marginTop: 8 * s }}>
            <span
              style={{
                background: p.accent,
                color: p.bg,
                fontSize: 6 * s,
                fontWeight: 600,
                padding: `${4 * s}px ${12 * s}px`,
                borderRadius: 4 * s,
              }}
            >
              Primary Action
            </span>
            <span
              style={{
                background: `${p.ink}0a`,
                color: p.ink,
                border: `1px solid ${p.ink}15`,
                fontSize: 6 * s,
                fontWeight: 500,
                padding: `${4 * s}px ${12 * s}px`,
                borderRadius: 4 * s,
              }}
            >
              Secondary
            </span>
          </div>
        </div>

        {/* Footer */}
        <div
          className="flex items-center justify-between"
          style={{
            fontSize: 5.5 * s,
            color: p.muted,
            borderTop: `1px solid ${p.ink}12`,
            paddingTop: 4 * s,
          }}
        >
          <span>ACRYLIC MATERIAL</span>
          <span>REVEAL HIGHLIGHT</span>
          <span style={{ color: p.accent }}>CALM ENTERPRISE</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
