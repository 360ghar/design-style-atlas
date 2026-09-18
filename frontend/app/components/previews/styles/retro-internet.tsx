import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function RetroInternetPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
        {/* 1997 Shrine Banner */}
        <div
          style={{
            border: `2px outset ${p.surface}`,
            background: p.surface,
            padding: `${3 * s}px ${8 * s}px`,
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontFamily: p.display,
              fontSize: 11 * s,
              fontWeight: 700,
              color: p.accent2,
            }}
          >
            ★ ❦ ★ &nbsp;WELCOME TO ALEX’S CYBER-HOMEPAGE&nbsp; ★ ❦ ★
          </div>
          <div style={{ fontSize: 6 * s, color: p.muted, marginTop: 1 * s }}>
            Best viewed in Netscape Navigator 3.0 at 800x600 · No frames!
          </div>
        </div>

        {/* Central Personal Home Page Card with Inset Well */}
        <div
          className="my-auto"
          style={{
            border: `2px inset ${p.bg}`,
            background: p.surface,
            padding: `${10 * s}px ${12 * s}px`,
          }}
        >
          <div className="flex items-start justify-between">
            <div>
              <h3
                style={{
                  fontFamily: p.display,
                  fontSize: 13 * s,
                  fontWeight: 700,
                  color: p.ink,
                  margin: 0,
                }}
              >
                Poems, MIDI Jukebox &amp; My Cat
              </h3>
              <p
                style={{
                  fontSize: 6.5 * s,
                  color: p.ink,
                  lineHeight: 1.45,
                  margin: `${4 * s}px 0 0 0`,
                }}
              >
                Thank you for visiting my corner of cyberspace. Please leave a kind note in my guestbook before you surf away!
              </p>
            </div>
            <div
              style={{
                border: `2px outset ${p.surface}`,
                background: p.bg,
                padding: `${2 * s}px ${6 * s}px`,
                fontSize: 6 * s,
                fontWeight: 700,
                color: p.accent2,
                whiteSpace: "nowrap",
              }}
            >
              [ UNDER CONSTRUCTION ]
            </div>
          </div>

          <div
            className="flex items-center justify-between"
            style={{
              marginTop: 8 * s,
              paddingTop: 6 * s,
              borderTop: `1px dashed ${p.muted}`,
            }}
          >
            <div className="flex items-center" style={{ gap: 6 * s }}>
              <span
                style={{
                  color: p.accent,
                  textDecoration: "underline",
                  fontSize: 6.5 * s,
                  cursor: "pointer",
                }}
              >
                download_midi.mid ♫
              </span>
              <span style={{ fontSize: 6 * s, color: p.muted }}>
                hit counter: <strong>007412</strong>
              </span>
            </div>
            <button
              type="button"
              style={{
                background: p.surface,
                color: p.accent2,
                border: `2px outset ${p.surface}`,
                fontSize: 6.5 * s,
                fontWeight: 700,
                padding: `${2 * s}px ${10 * s}px`,
                cursor: "pointer",
              }}
            >
              ✍ Sign Guestbook
            </button>
          </div>
        </div>

        {/* Webring Navigation Bar */}
        <div
          className="flex items-center justify-between"
          style={{
            border: `2px outset ${p.surface}`,
            background: p.surface,
            padding: `${2 * s}px ${6 * s}px`,
            fontSize: 6 * s,
          }}
        >
          <span style={{ color: p.accent, textDecoration: "underline", cursor: "pointer" }}>
            ← Previous
          </span>
          <span style={{ color: p.muted, fontWeight: 700 }}>
            ❦ Cyber-Friendship Webring [Site 42] ❦
          </span>
          <span style={{ color: p.accent, textDecoration: "underline", cursor: "pointer" }}>
            Random
          </span>
          <span style={{ color: p.accent, textDecoration: "underline", cursor: "pointer" }}>
            Next →
          </span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
