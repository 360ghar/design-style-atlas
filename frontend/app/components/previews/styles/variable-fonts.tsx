import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

function AxisSlider({
  label,
  value,
  pos,
  large,
  p,
}: {
  label: string;
  value: string;
  pos: string;
  large?: boolean;
  p: StyleMeta["preview"];
}) {
  const mono = "ui-monospace, SFMono-Regular, Menlo, monospace";
  return (
    <div style={{ display: "flex", alignItems: "center", gap: large ? 7 : 5 }}>
      <span style={{ fontFamily: mono, fontSize: large ? 8 : 5.5, fontWeight: 700, color: p.ink, minWidth: large ? 30 : 22 }}>{label}</span>
      <span style={{ flex: 1, height: large ? 5 : 4, borderRadius: 99, background: `linear-gradient(90deg, ${p.ink}1e, ${p.ink})`, position: "relative" }}>
        <span
          style={{
            position: "absolute",
            left: pos,
            top: "50%",
            transform: "translate(-50%,-50%)",
            width: large ? 13 : 10,
            height: large ? 13 : 10,
            borderRadius: "50%",
            background: p.accent,
            border: `2px solid ${p.surface}`,
            boxShadow: "0 1px 4px rgba(0,0,0,.35)",
          }}
        />
      </span>
      <span style={{ fontFamily: mono, fontSize: large ? 8 : 5.5, color: p.muted }}>{value}</span>
    </div>
  );
}

export function VariableFontsPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const mono = "ui-monospace, SFMono-Regular, Menlo, monospace";

  return (
    <Frame meta={meta} large={large}>
      <div style={{ display: "flex", flexDirection: "column", height: "100%", background: p.bg, fontFamily: p.display, color: p.ink }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: large ? "8px 14px" : "6px 10px",
            borderBottom: `1.5px solid ${p.ink}`,
            background: p.surface,
          }}
        >
          <span style={{ fontWeight: 900, fontSize: large ? 10 : 7, letterSpacing: "-0.02em" }}>
            VAR<span style={{ color: p.accent }}>/</span>LAB
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: large ? 6 : 4 }}>
            <span style={{ fontFamily: mono, fontSize: large ? 7 : 5, color: p.muted, border: `1px solid ${p.ink}`, borderRadius: 99, padding: large ? "1px 7px" : "0 5px" }}>
              wght 840
            </span>
            <span style={{ display: large ? "inline-block" : "none", fontFamily: mono, fontSize: 7, color: p.muted, border: `1px solid ${p.ink}2e`, borderRadius: 99, padding: "1px 7px" }}>
              wdth 112
            </span>
            <span style={{ fontSize: large ? 7.5 : 5.5, fontWeight: 800, background: p.ink, color: p.surface, borderRadius: 99, padding: large ? "3px 10px" : "2px 7px" }}>
              Trial
            </span>
          </span>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: large ? "10px 16px 8px" : "6px 12px 5px" }}>
          <p style={{ fontFamily: mono, fontSize: large ? 7.5 : 5, letterSpacing: "0.14em", color: p.muted, fontWeight: 600 }}>INTER VARIABLE — 300→900</p>
          <div style={{ fontWeight: 900, fontSize: large ? 44 : 26, lineHeight: 0.98, letterSpacing: "-0.03em", fontStretch: "125%" }}>
            Fluid
          </div>
          <div style={{ fontWeight: 560, fontSize: large ? 44 : 26, lineHeight: 0.98, letterSpacing: "-0.02em", fontStretch: "95%", color: p.ink }}>
            weight<span style={{ color: p.accent2 }}>&amp;</span>width
          </div>
          <div style={{ fontWeight: 300, fontSize: large ? 44 : 26, lineHeight: 0.98, letterSpacing: "0.04em", fontStretch: "72%", color: p.ink }}>
            voice
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: large ? 6 : 4, marginTop: large ? 10 : 7, background: p.surface, border: `1.5px solid ${p.ink}`, borderRadius: 6, padding: large ? "8px 10px" : "5px 7px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
            <AxisSlider label="wght" value="840" pos="72%" large={large} p={p} />
            <AxisSlider label="wdth" value="112" pos="58%" large={large} p={p} />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: large ? "6px 14px" : "4px 10px",
            borderTop: `1px solid ${p.ink}2e`,
            fontFamily: mono,
            fontSize: large ? 7 : 5,
            color: p.muted,
          }}
        >
          <span>opsz 14 · Caption→Display</span>
          <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <span style={{ width: large ? 22 : 14, height: 3, borderRadius: 2, background: p.accent }} />
            <span style={{ color: p.ink, fontWeight: 700 }}>Aa</span>
          </span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
