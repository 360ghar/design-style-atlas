import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function AntiDesignPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
        {/* Deliberately Hostile / Clashing Header */}
        <div
          className="flex items-center justify-between"
          style={{
            borderBottom: `2px dashed ${p.accent2}`,
            paddingBottom: 4 * s,
          }}
        >
          <div
            style={{
              fontFamily: p.display,
              fontSize: 10 * s,
              color: p.accent2,
              fontWeight: 700,
              letterSpacing: "-0.05em",
              transform: "rotate(-2deg)",
            }}
          >
            ⚠️ WARNING: HOSTILE UI
          </div>
          <span
            style={{
              fontSize: 6 * s,
              color: p.accent,
              textDecoration: "underline",
              fontFamily: "monospace",
            }}
          >
            [UNSUBSCRIBE_NOW.EXE]
          </span>
        </div>

        {/* Broken-Grid Content Block with Deliberate Misalignment */}
        <div
          className="my-auto"
          style={{
            background: p.surface,
            border: `3px double ${p.ink}`,
            padding: `${10 * s}px ${12 * s}px`,
            position: "relative",
          }}
        >
          {/* Obnoxious Tilted Badge */}
          <div
            style={{
              position: "absolute",
              top: -8 * s,
              right: 10 * s,
              background: p.accent2,
              color: p.surface,
              fontSize: 6 * s,
              fontWeight: 900,
              padding: `${2 * s}px ${8 * s}px`,
              transform: "rotate(5deg)",
              border: `1px solid ${p.ink}`,
            }}
          >
            DO NOT READ THIS
          </div>

          <h3
            style={{
              fontFamily: p.display,
              fontSize: 13 * s,
              color: p.ink,
              fontWeight: 700,
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            Deliberate Wrongness &amp; Broken Grids
          </h3>

          <p
            style={{
              fontSize: 6.5 * s,
              color: p.muted,
              lineHeight: 1.4,
              margin: `${6 * s}px 0`,
              fontFamily: p.body,
            }}
          >
            Times body text colliding with raw unstyled fieldsets, misaligned borders, and default link blue.
          </p>

          <fieldset
            style={{
              border: `2px groove ${p.muted}`,
              padding: `${6 * s}px ${8 * s}px`,
              marginTop: 6 * s,
            }}
          >
            <legend style={{ fontSize: 6 * s, color: p.ink, fontWeight: 700 }}>
              &lt;form method=&quot;post&quot;&gt;
            </legend>
            <div className="flex items-center justify-between">
              <span
                style={{
                  fontSize: 6 * s,
                  color: p.accent,
                  textDecoration: "underline",
                }}
              >
                click_here_to_break_page.html
              </span>
              <button
                type="button"
                style={{
                  background: p.bg,
                  color: p.ink,
                  border: `2px outset ${p.surface}`,
                  borderRadius: 0,
                  fontSize: 6 * s,
                  fontWeight: 700,
                  padding: `${2 * s}px ${8 * s}px`,
                  cursor: "pointer",
                }}
              >
                SUBMIT
              </button>
            </div>
          </fieldset>
        </div>

        {/* Clashing Footer Text */}
        <div
          className="flex items-center justify-between"
          style={{
            borderTop: `1px solid ${p.ink}`,
            paddingTop: 4 * s,
            fontSize: 5.5 * s,
          }}
        >
          <span style={{ color: p.muted }}>NO WHITESPACE · NO HARMONY</span>
          <span style={{ color: p.accent, textDecoration: "underline" }}>
            VIEW RAW SOURCE CODE
          </span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
