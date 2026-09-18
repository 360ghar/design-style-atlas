import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function Pixel8BitPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
        {/* Arcade 8-Bit Top HUD */}
        <div className="flex items-center justify-between">
          <div className="flex items-center" style={{ gap: 6 * s }}>
            <span
              style={{
                fontFamily: p.display,
                fontSize: 8 * s,
                color: p.accent2,
                letterSpacing: "0.1em",
              }}
            >
              LEVEL 03
            </span>
            <span
              style={{
                fontFamily: p.display,
                fontSize: 7 * s,
                color: p.accent,
              }}
            >
              SCORE: 048200
            </span>
          </div>
          <span
            className="pv-blink"
            style={{
              fontFamily: p.display,
              fontSize: 7 * s,
              color: p.accent2,
            }}
          >
            INSERT COIN
          </span>
        </div>

        {/* Stepped Pixel Battle Encounter Card */}
        <div
          className="my-auto flex flex-col justify-between"
          style={{
            background: p.surface,
            border: `3px solid ${p.ink}`,
            boxShadow: `${4 * s}px ${4 * s}px 0 ${p.bg}`,
            padding: `${12 * s}px ${14 * s}px`,
          }}
        >
          <div className="flex items-start justify-between">
            <div>
              <div
                style={{
                  fontFamily: p.display,
                  fontSize: 7 * s,
                  color: p.accent2,
                  marginBottom: 2 * s,
                }}
              >
                DUNGEON ENCOUNTER
              </div>
              <h3
                style={{
                  fontFamily: p.display,
                  fontSize: 11 * s,
                  color: p.ink,
                  lineHeight: 1.25,
                  margin: 0,
                }}
              >
                A WILD PIXEL GOLEM APPEARS!
              </h3>
            </div>
            <div
              style={{
                fontFamily: p.display,
                fontSize: 8 * s,
                color: p.accent,
                border: `2px solid ${p.accent}`,
                padding: `${2 * s}px ${6 * s}px`,
              }}
            >
              HP 99/99
            </div>
          </div>

          {/* Stepped Health & Mana Bar */}
          <div style={{ margin: `${8 * s}px 0` }}>
            <div className="flex items-center" style={{ gap: 4 * s, marginBottom: 3 * s }}>
              <span style={{ fontFamily: p.display, fontSize: 6 * s, color: p.muted }}>MP:</span>
              <div className="flex-1" style={{ height: 6 * s, background: `${p.accent}33` }}>
                <div style={{ width: "75%", height: "100%", background: p.accent }} />
              </div>
            </div>
          </div>

          <div
            className="grid grid-cols-2"
            style={{
              gap: 6 * s,
              borderTop: `2px solid ${p.ink}33`,
              paddingTop: 6 * s,
            }}
          >
            <button
              type="button"
              style={{
                background: p.accent2,
                color: p.bg,
                border: `2px solid ${p.ink}`,
                fontFamily: p.display,
                fontSize: 7 * s,
                padding: `${3 * s}px 0`,
                cursor: "pointer",
                textAlign: "center",
              }}
            >
              ⚔ ATTACK
            </button>
            <button
              type="button"
              style={{
                background: p.surface,
                color: p.ink,
                border: `2px solid ${p.ink}`,
                fontFamily: p.display,
                fontSize: 7 * s,
                padding: `${3 * s}px 0`,
                cursor: "pointer",
                textAlign: "center",
              }}
            >
              🛡 SPELL
            </button>
          </div>
        </div>

        {/* Pixel Footer Strip */}
        <div
          className="flex items-center justify-between"
          style={{
            fontFamily: p.display,
            fontSize: 5.5 * s,
            color: p.muted,
          }}
        >
          <span>CHUNKY STEPPED CORNERS</span>
          <span style={{ color: p.accent }}>NO BLURRY AA</span>
          <span>© 1989 ARCADE</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
