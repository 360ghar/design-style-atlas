import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";
import type { ReactNode } from "react";

function HardCard({ large, bg, children }: { large?: boolean; bg: string; children: ReactNode }) {
  return (
    <div
      style={{
        background: bg,
        border: "3px solid #111111",
        borderRadius: 4,
        boxShadow: large ? "6px 6px 0 #111111" : "4px 4px 0 #111111",
        padding: large ? "10px 14px" : "6px 10px",
      }}
    >
      {children}
    </div>
  );
}

export function NeoBrutalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col justify-center px-[7%]">
        <div className="flex items-center justify-between">
          <span
            style={{
              background: p.ink,
              color: p.surface,
              border: `3px solid ${p.ink}`,
              boxShadow: `3px 3px 0 ${p.accent}`,
              fontFamily: p.display,
              fontSize: large ? 10 : 7,
              fontWeight: 900,
              letterSpacing: "0.04em",
              padding: large ? "4px 8px" : "3px 6px",
              lineHeight: 1,
            }}
          >
            NB★
          </span>
          <span
            style={{
              background: p.accent2,
              color: p.surface,
              border: `3px solid ${p.ink}`,
              borderRadius: 999,
              boxShadow: `3px 3px 0 ${p.ink}`,
              fontFamily: p.body,
              fontSize: large ? 9 : 6.5,
              fontWeight: 900,
              letterSpacing: "0.06em",
              padding: large ? "4px 12px" : "3px 10px",
              width: "fit-content",
              transform: "rotate(2deg)",
              lineHeight: 1,
            }}
          >
            ★ NEW DROP
          </span>
        </div>
        <div
          style={{
            fontFamily: p.display,
            color: p.ink,
            fontSize: large ? 34 : 19,
            lineHeight: 0.95,
            marginTop: large ? 12 : 8,
            textTransform: "uppercase",
          }}
        >
          LOUD.
          <br />
          PROUD.
          <br />
          <span
            style={{
              display: "inline-block",
              background: p.accent,
              color: p.ink,
              padding: "0 8px",
              border: `3px solid ${p.ink}`,
              boxShadow: large ? "5px 5px 0 #111111" : "3px 3px 0 #111111",
              transform: "rotate(-1deg)",
              marginTop: 4,
            }}
          >
            SHIPPED.
          </span>
        </div>
        <div className="flex gap-2" style={{ marginTop: large ? 14 : 8 }}>
          <HardCard large={large} bg={p.accent}>
            <span
              style={{
                color: p.ink,
                fontFamily: p.body,
                fontWeight: 900,
                fontSize: large ? 10 : 7,
                letterSpacing: "0.06em",
                lineHeight: 1,
              }}
            >
              GET IT →
            </span>
          </HardCard>
          <HardCard large={large} bg={p.surface}>
            <span
              style={{
                color: p.ink,
                fontFamily: p.body,
                fontWeight: 900,
                fontSize: large ? 10 : 7,
                letterSpacing: "0.06em",
                lineHeight: 1,
              }}
            >
              DOCS
            </span>
          </HardCard>
        </div>
        <div
          style={{
            color: p.muted,
            fontFamily: p.body,
            fontSize: large ? 8 : 6,
            fontWeight: 800,
            letterSpacing: "0.08em",
            marginTop: large ? 10 : 6,
          }}
        >
          NO SUBTLETY • SHIPS LOUD
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
