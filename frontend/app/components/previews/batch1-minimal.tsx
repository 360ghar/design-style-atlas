import type { StyleMeta } from "../../lib/styles";
import { Frame, Meta } from "./frame";

/** Batch 1 — Minimal family (10). Quiet specimens: hairlines, whitespace, restraint. */
export function MinimalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col justify-center px-[10%]">
        <div style={{ background: p.accent, height: 2, width: 28, marginBottom: large ? 14 : 8 }} />
        <div style={{ fontFamily: p.display, fontWeight: 500, fontSize: large ? 30 : 17, letterSpacing: "-0.02em", lineHeight: 1.05 }}>
          Less, but<br />better.
        </div>
        <div style={{ color: p.muted, fontSize: large ? 12 : 8, marginTop: large ? 10 : 6 }}>A study in restraint — 04 objects</div>
        <div className="flex gap-2" style={{ marginTop: large ? 14 : 8 }}>
          <span style={{ background: p.ink, color: p.surface, fontSize: large ? 10 : 7, padding: large ? "7px 16px" : "4px 10px", borderRadius: 6 }}>Continue</span>
          <span style={{ border: `1px solid ${p.ink}44`, fontSize: large ? 10 : 7, padding: large ? "7px 16px" : "4px 10px", borderRadius: 6 }}>Learn more</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function UltraMinimalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full items-center justify-center">
        <div className="text-center">
          <div style={{ fontSize: large ? 15 : 10, color: p.ink }}>untitled, no. 4</div>
          <div style={{ fontSize: large ? 11 : 8, color: p.muted, marginTop: 6 }}>oil on canvas — 2026</div>
          <div style={{ background: p.muted, opacity: 0.4, height: 1, width: large ? 120 : 70, margin: "10px auto 0" }} />
        </div>
      </div>
      <div className="absolute left-0 right-0 top-0 flex justify-between px-3 pt-2" style={{ fontSize: large ? 9 : 7, color: p.muted }}>
        <span>index</span><span>contact</span>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function SwissDesignPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="grid h-full grid-cols-12 gap-0">
        <div className="col-span-7 flex flex-col justify-between p-[7%]">
          <div style={{ fontSize: large ? 10 : 7, fontWeight: 700, letterSpacing: "0.1em" }}>01 / GRID</div>
          <div>
            <div style={{ fontWeight: 800, fontSize: large ? 52 : 27, lineHeight: 0.95, letterSpacing: "-0.03em" }}>HEL<br />VET<br />ICA</div>
            <div style={{ background: p.accent, height: large ? 10 : 6, width: "38%", marginTop: 8 }} />
          </div>
          <div style={{ fontSize: large ? 9 : 6.5, color: p.muted }}>Flush left. Ragged right. Never centered.</div>
        </div>
        <div className="col-span-5 flex flex-col" style={{ background: p.accent }}>
          <div className="flex-1" style={{ background: p.ink, margin: "12%", borderRadius: "50%" }} />
          <div className="p-[10%] pt-0" style={{ color: "#fff", fontSize: large ? 10 : 7, fontWeight: 700 }}>ZÜRICH 1957</div>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function JapaneseMinimalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full">
        <div className="flex w-[16%] flex-col items-center justify-between border-r py-[6%]" style={{ borderColor: `${p.ink}22`, fontSize: large ? 11 : 8, color: p.muted }}>
          <span style={{ writingMode: "vertical-rl", letterSpacing: "0.4em" }}>余白の美しさ</span>
          <span style={{ background: p.accent, color: "#fff", width: large ? 22 : 15, height: large ? 22 : 15, fontSize: large ? 11 : 7, display: "flex", alignItems: "center", justifyContent: "center" }}>印</span>
        </div>
        <div className="flex flex-1 flex-col justify-end p-[8%]">
          <div style={{ fontFamily: p.display, fontSize: large ? 26 : 15, lineHeight: 1.3 }}>間 — the space<br />between things.</div>
          <div style={{ color: p.muted, fontSize: large ? 10 : 7, marginTop: 8, letterSpacing: "0.2em" }}>MA · STILLNESS · WABI-SABI</div>
        </div>
        <div className="w-[26%] p-[4%]"><div className="h-full w-full" style={{ background: `linear-gradient(180deg, ${p.muted}55, ${p.surface})`, borderRadius: "50% 50% 0 0" }} /></div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function ScandinavianPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col items-center justify-center px-[8%] text-center">
        <div className="flex gap-2" style={{ marginBottom: large ? 12 : 7 }}>
          {["#C2703D", "#5B7E6B", "#D9A441"].map((c) => (
            <span key={c} style={{ background: c, width: large ? 34 : 20, height: large ? 34 : 20, borderRadius: "50%" }} />
          ))}
        </div>
        <div style={{ fontWeight: 600, fontSize: large ? 24 : 14 }}>Hygge, made functional.</div>
        <div style={{ color: p.muted, fontSize: large ? 11 : 7.5, marginTop: 6 }}>Light oak · soft daylight · 48px targets</div>
        <span style={{ background: p.accent, color: "#fff", borderRadius: 999, fontSize: large ? 10 : 7, padding: large ? "8px 22px" : "5px 14px", marginTop: large ? 12 : 7, boxShadow: "0 6px 18px rgba(194,112,61,.35)" }}>Shop the collection</span>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function MonochromePreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="grid h-full grid-cols-2">
        <div className="flex flex-col justify-center p-[9%]">
          <div style={{ fontSize: large ? 9 : 6.5, letterSpacing: "0.25em", color: p.muted }}>N° 001 — VALUE STUDY</div>
          <div style={{ fontWeight: 800, fontSize: large ? 34 : 19, letterSpacing: "-0.02em", lineHeight: 1, marginTop: 6 }}>BLACK<br />WHITE<br />GRAY.</div>
          <div className="flex" style={{ marginTop: 10 }}>
            {["#0A0A0A", "#525252", "#A3A3A3", "#E5E5E5"].map((c) => (
              <span key={c} style={{ background: c, flex: 1, height: large ? 14 : 9, border: "1px solid #00000022" }} />
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center gap-2 p-[9%]" style={{ background: "#0A0A0A", color: "#fff" }}>
          <div style={{ fontSize: large ? 11 : 7.5, fontWeight: 600 }}>Inverted chapter</div>
          <div style={{ fontSize: large ? 9 : 6.5, color: "#A3A3A3" }}>Contrast does all the work. Photography carries the color.</div>
          <span style={{ background: "#fff", color: "#0A0A0A", fontSize: large ? 9 : 6.5, fontWeight: 700, padding: large ? "7px 14px" : "4px 9px", width: "fit-content" }}>VIEW PROOF</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function EditorialMinimalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="mx-auto flex h-full max-w-[80%] flex-col justify-center">
        <div style={{ fontSize: large ? 9 : 6.5, letterSpacing: "0.22em", color: p.accent, fontWeight: 700 }}>ESSAY — VOL. IV</div>
        <div style={{ fontFamily: p.display, fontStyle: "italic", fontSize: large ? 26 : 15, lineHeight: 1.2, marginTop: 6 }}>“On the quiet discipline of the well-set paragraph.”</div>
        <div style={{ borderTop: `1px solid ${p.ink}`, marginTop: large ? 12 : 7, paddingTop: large ? 8 : 5, fontSize: large ? 9 : 6.5, color: p.muted, display: "flex", justifyContent: "space-between" }}>
          <span>By E. Marlowe</span><span>12 min read · § 4</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function LuxuryMinimalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col items-center justify-center px-[10%] text-center">
        <div style={{ fontSize: large ? 10 : 7, letterSpacing: "0.5em", color: p.accent }}>M A I S O N</div>
        <div style={{ fontFamily: p.display, fontSize: large ? 40 : 23, marginTop: 8, lineHeight: 1 }}>Lumière</div>
        <div style={{ borderTop: `1px solid ${p.accent}66`, borderBottom: `1px solid ${p.accent}66`, marginTop: 10, padding: "6px 0", fontSize: large ? 9 : 6.5, letterSpacing: "0.3em", color: p.muted }}>HAUTE · MMXXVI · PARIS</div>
        <span style={{ border: `1px solid ${p.accent}`, color: p.accent, fontSize: large ? 9 : 6.5, letterSpacing: "0.25em", padding: large ? "9px 26px" : "5px 15px", marginTop: large ? 14 : 8 }}>PRIVATE VIEWING</span>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function ProductMinimalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full">
        <div className="flex w-[30%] flex-col gap-1.5 p-[4%]" style={{ borderRight: "1px solid #E5E7EB" }}>
          <div style={{ fontWeight: 700, fontSize: large ? 10 : 7 }}>◍ Linear-ish</div>
          {["Inbox", "My issues", "Cycles"].map((t, i) => (
            <div key={t} style={{ fontSize: large ? 9 : 6.5, padding: large ? "5px 8px" : "3px 5px", borderRadius: 6, background: i === 0 ? "#EEF2FF" : "transparent", color: i === 0 ? p.accent : p.muted }}>▸ {t}</div>
          ))}
          <div style={{ marginTop: "auto", fontSize: large ? 8 : 6, color: p.muted, fontFamily: "monospace" }}>⌘K to command</div>
        </div>
        <div className="flex-1 p-[5%]">
          <div style={{ fontWeight: 650, fontSize: large ? 13 : 8.5 }}>Q3 Roadmap</div>
          {[78, 45, 92].map((w, i) => (
            <div key={i} style={{ marginTop: large ? 8 : 5 }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: large ? 8 : 6, color: p.muted }}><span>PRJ-{102 + i}</span><span>{w}%</span></div>
              <div style={{ background: "#EEF0F3", borderRadius: 4, height: large ? 6 : 4, marginTop: 3 }}>
                <div style={{ background: p.accent, width: `${w}%`, height: "100%", borderRadius: 4 }} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}

export function FunctionalMinimalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col p-[5%]">
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: large ? 9 : 6.5, color: p.muted, fontFamily: "monospace" }}>
          <span>ops / deploys</span><span>● nominal</span>
        </div>
        <table style={{ width: "100%", fontSize: large ? 9 : 6.5, marginTop: 6, borderCollapse: "collapse" }}>
          <thead><tr style={{ textAlign: "left", color: p.muted }}>
            {["BUILD", "STATUS", "DUR"].map((h) => <th key={h} style={{ borderBottom: "1px solid #E4E4E7", padding: "3px 4px", fontWeight: 600 }}>{h}</th>)}
          </tr></thead>
          <tbody>
            {[["#4821", "passed", "1m 04s"], ["#4820", "passed", "0m 58s"], ["#4819", "failed", "2m 11s"]].map((r) => (
              <tr key={r[0]}>
                <td style={{ borderBottom: "1px solid #E4E4E7", padding: "3px 4px", fontFamily: "monospace" }}>{r[0]}</td>
                <td style={{ borderBottom: "1px solid #E4E4E7", padding: "3px 4px", color: r[1] === "passed" ? "#059669" : "#DC2626" }}>● {r[1]}</td>
                <td style={{ borderBottom: "1px solid #E4E4E7", padding: "3px 4px", fontFamily: "monospace" }}>{r[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ marginTop: "auto", display: "flex", gap: 6 }}>
          <span style={{ border: "1px solid #D1D5DB", borderRadius: 6, fontSize: large ? 9 : 6.5, padding: large ? "6px 14px" : "3px 9px", background: p.accent, color: "#fff", borderColor: p.accent }}>Retry failed</span>
          <span style={{ border: "1px solid #D1D5DB", borderRadius: 6, fontSize: large ? 9 : 6.5, padding: large ? "6px 14px" : "3px 9px" }}>View logs</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
