import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function LuxuryMinimalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div
        className="flex h-full flex-col items-center justify-center text-center"
        style={{
          padding: large ? "0 12%" : "0 10%",
          background: `radial-gradient(ellipse 70% 55% at 50% 36%, ${p.accent}14, transparent 70%), ${p.bg}`,
        }}
      >
        <div
          style={{
            fontFamily: p.body,
            fontWeight: 500,
            fontSize: large ? 10 : 7,
            letterSpacing: "0.55em",
            paddingLeft: "0.55em",
            color: p.accent,
          }}
        >
          MAISON
        </div>
        <div
          style={{
            fontFamily: p.display,
            fontWeight: 400,
            color: p.ink,
            fontSize: large ? 46 : 26,
            lineHeight: 1.02,
            letterSpacing: "0.01em",
            marginTop: large ? 14 : 10,
          }}
        >
          Lumi&egrave;re
        </div>
        <div style={{ width: large ? 56 : 40, height: 1, backgroundColor: p.accent, opacity: 0.4, marginTop: large ? 14 : 10 }} />
        <div
          style={{
            fontFamily: p.body,
            fontStyle: "italic",
            color: p.muted,
            fontSize: large ? 12 : 8,
            marginTop: large ? 10 : 8,
            lineHeight: 1.4,
          }}
        >
          Whispered opulence, kept apart.
        </div>
        <div
          style={{
            borderTop: `1px solid ${p.accent}66`,
            borderBottom: `1px solid ${p.accent}66`,
            marginTop: large ? 14 : 10,
            padding: large ? "8px 0 8px 0.32em" : "6px 0 6px 0.32em",
            fontFamily: p.body,
            fontWeight: 500,
            fontSize: large ? 9 : 6.5,
            letterSpacing: "0.32em",
            color: p.muted,
            whiteSpace: "nowrap",
          }}
        >
          HAUTE &middot; MMXXVI &middot; PARIS
        </div>
        <span
          style={{
            display: "inline-block",
            border: `1px solid ${p.accent}`,
            borderRadius: 0,
            background: "transparent",
            color: p.accent,
            fontFamily: p.body,
            fontWeight: 500,
            fontSize: large ? 9 : 6.5,
            letterSpacing: "0.28em",
            padding: large ? "11px 26px 11px calc(26px + 0.28em)" : "7px 16px 7px calc(16px + 0.28em)",
            marginTop: large ? 16 : 10,
            lineHeight: 1,
          }}
        >
          PRIVATE VIEWING
        </span>
        <div
          style={{
            fontFamily: p.body,
            fontStyle: "italic",
            fontSize: large ? 9 : 6,
            letterSpacing: "0.18em",
            paddingLeft: "0.18em",
            color: p.accent2,
            opacity: 0.7,
            marginTop: large ? 10 : 7,
          }}
        >
          by appointment only
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
