import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function HackerAestheticPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const fs = large ? 11 : 7;
  return (
    <Frame meta={meta} large={large}>
      <div
        className="relative flex h-full flex-col overflow-hidden"
        style={{ background: p.bg, color: p.ink, fontFamily: p.body, fontSize: fs, lineHeight: 1.5 }}
      >
        {/* data-rain + scanline texture */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, ${p.accent}24 0 1px, transparent 1px 9px), repeating-linear-gradient(90deg, ${p.muted}2E 0 1px, transparent 1px 28px)`,
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent 0 2px, ${p.bg}8C 2px 3px)`,
          }}
        />

        {/* matrix status bar */}
        <div
          className="relative"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 8,
            borderBottom: `1px solid ${p.accent}`,
            padding: large ? "7px 12px" : "5px 8px",
            fontSize: large ? 10 : 6.5,
            letterSpacing: "0.08em",
            whiteSpace: "nowrap",
          }}
        >
          <span style={{ fontWeight: 700 }}>&#9672; NULLTRACE v2.4</span>
          <span
            style={{
              border: `1px solid ${p.accent2}`,
              color: p.accent2,
              padding: "0 6px",
              boxShadow: `0 0 12px ${p.accent2}59`,
            }}
          >
            THREAT: ELEVATED
          </span>
          <span style={{ color: p.muted }}>UP 99.98% &#9679; ENC</span>
        </div>

        {/* green-on-black exploit hero */}
        <div
          className="relative"
          style={{
            margin: large ? "10px 12px 0" : "8px 8px 0",
            background: p.surface,
            border: `1px solid ${p.accent}`,
            boxShadow: `0 0 12px ${p.accent}40`,
            padding: large ? "10px 12px" : "7px 8px",
          }}
        >
          <div style={{ color: p.muted, fontSize: large ? 9 : 6 }}>
            root@blackice:~$ ./exploit --target 10.0.0.42
          </div>
          <div
            style={{
              fontFamily: p.display,
              fontWeight: 700,
              fontSize: large ? 30 : 17,
              lineHeight: 0.95,
              letterSpacing: "0.02em",
              marginTop: 4,
            }}
          >
            ACCESS
            <br />
            GRANTED<span style={{ marginLeft: 2 }}>&#9608;</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: large ? 10 : 7 }}>
            <span
              style={{
                border: `1px solid ${p.accent}`,
                padding: large ? "5px 10px" : "3px 7px",
                fontSize: large ? 10 : 6.5,
                fontWeight: 700,
                letterSpacing: "0.08em",
                background: p.accent,
                color: p.bg,
              }}
            >
              [ INITIATE ]
            </span>
            <span
              style={{
                border: `1px dashed ${p.muted}`,
                color: p.ink,
                padding: "0 6px",
                fontSize: large ? 9 : 6,
              }}
            >
              [ clearance: ROOT ]
            </span>
            <span style={{ marginLeft: "auto", color: p.muted, fontSize: large ? 8 : 5.5 }}>
              4a:ff:09:c1
            </span>
          </div>
          <span style={{ position: "absolute", top: -7, left: 6, color: p.accent }}>[</span>
          <span style={{ position: "absolute", top: -7, right: 6, color: p.accent }}>]</span>
        </div>

        {/* log footer */}
        <div
          className="relative mt-auto"
          style={{
            borderTop: `1px dashed ${p.muted}`,
            margin: large ? "10px 12px 10px" : "8px 8px 8px",
            paddingTop: 6,
            color: p.muted,
            fontSize: large ? 9 : 6,
          }}
        >
          <div>
            <span style={{ color: p.ink }}>&gt; handshake ok</span> .... 0.42ms &#10003;
          </div>
          <div>
            <span style={{ color: p.ink }}>&gt; payload injected</span> .. trace blocked &#10003;
          </div>
          <div>
            <span style={{ color: p.accent2 }}>[!] 2 nodes hostile</span>
            <span style={{ color: p.ink }}> — countermeasure armed_</span>
          </div>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
