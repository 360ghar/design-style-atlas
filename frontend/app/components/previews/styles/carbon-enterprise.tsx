import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function CarbonEnterprisePreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const s = large ? 1.6 : 1;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col" style={{ background: p.bg, color: p.ink, fontFamily: p.body, padding: `${9 * s}px ${10 * s}px` }}>
        <div className="flex items-center justify-between" style={{ fontSize: 7 * s }}>
          <span style={{ fontWeight: 700 }}><span style={{ background: p.accent, color: "#fff", padding: "1px 5px", marginRight: 5 * s }}>IBM</span>Carbon</span>
          <span className="flex" style={{ gap: 8 * s, color: p.muted }}><span>Docs</span><span>Catalog</span><span>Support</span></span>
          <span style={{ border: `1px solid ${p.ink}`, padding: `${3 * s}px ${9 * s}px`, fontFamily: "monospace" }}>⌕ Search</span>
        </div>
        <div className="flex items-center justify-between" style={{ marginTop: 8 * s, fontSize: 6.5 * s, fontFamily: "monospace", color: p.muted }}><span>GRID 2X · 16 COL</span><span>ROW 001–004</span></div>
        <div style={{ marginTop: 6 * s, border: `1px solid ${p.ink}33`, fontSize: 7 * s }}>
          {[["orderstbl", "12,408", "pass"], ["users_iam", "8,412", "pass"], ["billing_eu", "−4.1%", "warn"]].map((r) => (
            <div key={r[0]} className="flex items-center justify-between" style={{ padding: `${4 * s}px ${7 * s}px`, borderBottom: `1px solid ${p.ink}18`, fontFamily: "monospace" }}>
              <span>{r[0]}</span><span>{r[1]}</span><span style={{ color: r[2] === "warn" ? "#da1e28" : p.accent }}>● {r[2]}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between" style={{ marginTop: "auto", fontSize: 6 * s, color: p.muted, fontFamily: "monospace" }}>
          <span>STRICT GRID · §4.2</span><span>1–3 of 248 →</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
