import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function HackerAestheticPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
        {/* Hacker HUD Header with Phosphor Green Glow */}
        <div className="flex items-center justify-between">
          <div className="flex items-center" style={{ gap: 5 * s }}>
            <span
              style={{
                fontFamily: p.display,
                fontSize: 8 * s,
                fontWeight: 900,
                color: p.ink,
                textShadow: `0 0 ${8 * s}px ${p.ink}`,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              ROOT@DEFCON-NODE
            </span>
            <span
              style={{
                border: `1px solid ${p.ink}`,
                fontSize: 5.5 * s,
                padding: `${1 * s}px ${5 * s}px`,
                color: p.ink,
              }}
            >
              CIPHER: AES-512
            </span>
          </div>
          <span style={{ fontSize: 6 * s, color: p.muted }}>
            BYPASS ACTIVE ☠
          </span>
        </div>

        {/* Central Red Alert Security Perimeter Card */}
        <div
          className="my-auto flex flex-col justify-between"
          style={{
            background: p.surface,
            border: `1.5px solid ${p.accent2}`,
            boxShadow: `0 0 ${16 * s}px ${p.accent2}44`,
            padding: `${10 * s}px ${12 * s}px`,
            position: "relative",
          }}
        >
          <div className="flex items-start justify-between">
            <div>
              <div
                style={{
                  fontSize: 6 * s,
                  fontWeight: 800,
                  color: p.accent2,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                }}
              >
                [!] SECURITY ALERT // PERIMETER BREACH
              </div>
              <h3
                style={{
                  fontFamily: p.display,
                  fontSize: 12 * s,
                  fontWeight: 900,
                  color: p.ink,
                  textShadow: `0 0 ${8 * s}px ${p.ink}`,
                  lineHeight: 1.2,
                  margin: `${3 * s}px 0 0 0`,
                }}
              >
                Intrusion Detected: Kernel Ring-0
              </h3>
            </div>
            <div
              style={{
                background: p.accent2,
                color: p.bg,
                fontFamily: p.display,
                fontWeight: 900,
                fontSize: 6.5 * s,
                padding: `${2 * s}px ${6 * s}px`,
              }}
            >
              CRITICAL
            </div>
          </div>

          {/* Hex Payload Dump */}
          <div
            style={{
              background: `${p.bg}CC`,
              border: `1px dashed ${p.ink}44`,
              padding: `${4 * s}px ${6 * s}px`,
              margin: `${6 * s}px 0`,
              fontSize: 5.5 * s,
              color: p.muted,
              lineHeight: 1.4,
              fontFamily: "monospace",
            }}
          >
            <div>0x7FFE9A: 48 89 E5 48 83 EC 20 E8 B3 FF FF [EXPLOIT_PAYLOAD]</div>
            <div>0x7FFEAA: 48 8B 05 35 12 00 00 48 85 C0 74 [INJECT_OVERFLOW]</div>
          </div>

          <div className="flex items-center justify-between">
            <span style={{ fontSize: 6 * s, color: p.ink }}>
              Override Clearance: Level 5
            </span>
            <button
              type="button"
              style={{
                background: "transparent",
                color: p.ink,
                border: `1px solid ${p.ink}`,
                fontSize: 6 * s,
                fontWeight: 800,
                padding: `${3 * s}px ${10 * s}px`,
                cursor: "pointer",
                boxShadow: `0 0 ${8 * s}px ${p.ink}44`,
              }}
            >
              KILL THREAD ✕
            </button>
          </div>
        </div>

        {/* Phosphor Footer Terminal Strip */}
        <div
          className="flex items-center justify-between"
          style={{
            borderTop: `1px solid ${p.muted}33`,
            paddingTop: 4 * s,
            fontSize: 5.5 * s,
            color: p.muted,
          }}
        >
          <span>✦ MATRIX GREEN PHOSPHOR BLOOM</span>
          <span>✦ RED ALERT PERIMETER</span>
          <span style={{ color: p.ink }}>CLEARANCE: GRANTED</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
