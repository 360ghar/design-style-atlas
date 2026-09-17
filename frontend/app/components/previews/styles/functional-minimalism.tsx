import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

const BUILDS = [
  { id: "#4823", branch: "main", status: "passed" as const, dur: "1m 04s" },
  { id: "#4822", branch: "main", status: "passed" as const, dur: "0m 58s" },
  { id: "#4821", branch: "feat/auth", status: "failed" as const, dur: "2m 11s" },
  { id: "#4820", branch: "main", status: "passed" as const, dur: "1m 12s" },
];

export function FunctionalMinimalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const hairline = `${p.ink}26`;
  const mono = "ui-monospace, SFMono-Regular, Menlo, monospace";
  const fs = large ? 11 : 7;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col" style={{ background: p.bg, color: p.ink, fontFamily: p.body, textAlign: "left" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: large ? "8px 14px" : "5px 8px", borderBottom: `1px solid ${hairline}`, fontFamily: mono, fontSize: fs, color: p.muted }}>
          <span>ops / deploys</span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
            <span style={{ width: large ? 7 : 5, height: large ? 7 : 5, borderRadius: "50%", background: p.accent2, display: "inline-block" }} />
            <span style={{ color: p.accent2, fontWeight: 600 }}>● nominal</span>
          </span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: large ? "6px 14px" : "4px 8px", borderBottom: `1px solid ${hairline}`, fontSize: fs }}>
          <span style={{ display: "inline-flex", gap: large ? 12 : 8 }}>
            <span style={{ fontWeight: 700, color: p.ink, textDecoration: "underline", textUnderlineOffset: 3 }}>All (24)</span>
            <span style={{ color: p.muted }}>Failed (1)</span>
          </span>
          <span style={{ fontFamily: mono, color: p.muted }}>main</span>
        </div>
        <div style={{ padding: large ? "10px 14px" : "6px 8px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: fs }}>
            <thead>
              <tr style={{ textAlign: "left", color: p.muted }}>
                {(["BUILD", "STATUS", "DUR"] as const).map((h) => (
                  <th key={h} style={{ background: p.surface, border: `1px solid ${hairline}`, padding: large ? "5px 8px" : "3px 5px", fontWeight: 600 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {BUILDS.map((r, i) => (
                <tr key={r.id} style={{ background: i % 2 === 1 ? p.surface : p.bg }}>
                  <td style={{ border: `1px solid ${hairline}`, padding: large ? "5px 8px" : "3px 5px", fontFamily: mono, color: p.ink }}>{r.id}</td>
                  <td style={{ border: `1px solid ${hairline}`, padding: large ? "5px 8px" : "3px 5px", fontWeight: 600, color: r.status === "passed" ? p.accent2 : "#DC2626" }}>● {r.status}</td>
                  <td style={{ border: `1px solid ${hairline}`, padding: large ? "5px 8px" : "3px 5px", fontFamily: mono, color: p.muted }}>{r.dur}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ marginTop: "auto", padding: large ? "0 14px 8px" : "0 8px 6px", display: "flex", gap: large ? 8 : 6 }}>
          <span style={{ fontSize: fs, fontWeight: 600, padding: large ? "6px 14px" : "3px 9px", borderRadius: 6, background: p.accent, color: p.bg, border: `1px solid ${p.accent}`, outline: `2px solid ${p.accent}`, outlineOffset: 1 }}>Retry failed</span>
          <span style={{ fontSize: fs, fontWeight: 600, padding: large ? "6px 14px" : "3px 9px", borderRadius: 6, background: p.bg, color: p.ink, border: `1px solid ${p.muted}`, textDecoration: "underline", textUnderlineOffset: 2 }}>View logs</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", padding: large ? "6px 14px" : "4px 8px", borderTop: `1px solid ${hairline}`, fontFamily: mono, fontSize: large ? 9 : 6, color: p.muted }}>
          <span>3 passed · 1 failed</span>
          <span>updated 2m ago</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
