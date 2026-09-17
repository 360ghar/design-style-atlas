import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

const ROWS = [
  { id: "PRJ-102", title: "Command menu refresh", meta: "Eng · 14 issues", pct: 78, status: "In progress", done: false },
  { id: "PRJ-103", title: "Offline sync engine", meta: "Infra · 22 issues", pct: 45, status: "At risk", done: false },
  { id: "PRJ-104", title: "Inbox triage views", meta: "Design · 9 issues", pct: 92, status: "Complete", done: true },
];

export function ProductMinimalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const font = { fontFamily: p.body };
  const hairline = `1px solid color-mix(in srgb, ${p.ink} 12%, transparent)`;
  const well = `color-mix(in srgb, ${p.ink} 7%, transparent)`;
  const tint = (c: string, amt: number) => `color-mix(in srgb, ${c} ${amt}%, transparent)`;
  const fs = (s: number, l: number) => (large ? l : s);

  return (
    <Frame meta={meta} large={large}>
      <div
        className="flex h-full overflow-hidden text-left"
        style={{ ...font, background: p.bg, color: p.ink }}
      >
        {/* Sidebar */}
        <div
          className="flex w-[34%] shrink-0 flex-col overflow-hidden"
          style={{ background: p.surface, borderRight: hairline, padding: large ? 10 : 7 }}
        >
          <div className="flex items-center gap-1.5" style={{ minHeight: large ? 22 : 16 }}>
            <span
              className="shrink-0 rounded-[4px]"
              style={{ width: large ? 14 : 10, height: large ? 14 : 10, background: p.accent }}
            />
            <span style={{ fontWeight: 600, fontSize: fs(6.5, 9.5), letterSpacing: "-0.01em" }}>Acme</span>
            <span style={{ color: p.muted, fontSize: fs(6, 8) }}>▾</span>
          </div>
          <div
            className="flex items-center justify-between"
            style={{
              marginTop: large ? 8 : 5,
              border: hairline,
              borderRadius: 6,
              padding: large ? "4px 6px" : "3px 5px",
              color: p.muted,
              fontSize: fs(6, 8),
            }}
          >
            <span>Search…</span>
            <span
              style={{
                fontFamily: "monospace",
                fontSize: fs(5.5, 7.5),
                border: hairline,
                borderRadius: 4,
                padding: "0 3px",
                background: p.bg,
              }}
            >
              ⌘K
            </span>
          </div>
          <div style={{ marginTop: large ? 8 : 5, fontSize: fs(5.5, 7), fontWeight: 600, color: p.muted }}>
            Workspace
          </div>
          {[
            { t: "Inbox", c: "4", on: true },
            { t: "My issues", c: "12", on: false },
            { t: "Cycles", c: "8", on: false },
          ].map((n) => (
            <div
              key={n.t}
              className="flex items-center justify-between"
              style={{
                marginTop: 2,
                fontSize: fs(6.5, 9),
                fontWeight: n.on ? 600 : 400,
                padding: large ? "4px 6px" : "3px 5px",
                borderRadius: 6,
                background: n.on ? tint(p.accent, 12) : "transparent",
                color: n.on ? p.accent : p.ink,
                whiteSpace: "nowrap",
              }}
            >
              <span style={{ overflow: "hidden", textOverflow: "ellipsis" }}>
                <span style={{ color: n.on ? p.accent : p.muted }}>○ </span>
                {n.t}
              </span>
              <span
                style={{
                  fontSize: fs(5.5, 7.5),
                  color: n.on ? p.accent : p.muted,
                  background: n.on ? "transparent" : well,
                  borderRadius: 4,
                  padding: "0 4px",
                }}
              >
                {n.c}
              </span>
            </div>
          ))}
          <div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: 4 }}>
            <span
              className="flex shrink-0 items-center justify-center rounded-full"
              style={{
                width: large ? 16 : 12,
                height: large ? 16 : 12,
                background: tint(p.accent2, 20),
                color: p.accent2,
                fontSize: fs(5.5, 7.5),
                fontWeight: 700,
              }}
            >
              S
            </span>
            <span style={{ fontSize: fs(6, 8), color: p.muted, whiteSpace: "nowrap" }}>sara@acme.co</span>
          </div>
        </div>

        {/* Main */}
        <div className="flex min-w-0 flex-1 flex-col overflow-hidden" style={{ padding: large ? 10 : 7 }}>
          <div className="flex items-center justify-between" style={{ color: p.muted, fontSize: fs(5.5, 7.5) }}>
            <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              Acme <span style={{ opacity: 0.6 }}>/</span> <span style={{ color: p.ink, fontWeight: 500 }}>Roadmap</span>
            </span>
            <span
              className="shrink-0 rounded-full"
              style={{ width: large ? 14 : 10, height: large ? 14 : 10, background: well, border: hairline }}
            />
          </div>
          <div className="flex items-center justify-between" style={{ marginTop: large ? 6 : 4 }}>
            <div style={{ fontWeight: 600, fontSize: fs(8.5, 13), letterSpacing: "-0.02em", whiteSpace: "nowrap" }}>
              Q3 Roadmap{" "}
              <span
                style={{
                  fontWeight: 500,
                  fontSize: fs(5.5, 7.5),
                  color: p.muted,
                  background: well,
                  borderRadius: 99,
                  padding: "1px 6px",
                  verticalAlign: "middle",
                }}
              >
                Q3
              </span>
            </div>
            <span
              style={{
                background: p.accent,
                color: "#fff",
                fontSize: fs(6, 8),
                fontWeight: 600,
                borderRadius: 6,
                padding: large ? "4px 8px" : "3px 6px",
                whiteSpace: "nowrap",
              }}
            >
              + New issue
            </span>
          </div>
          <div className="flex flex-col" style={{ marginTop: large ? 6 : 4, gap: large ? 6 : 4 }}>
            {ROWS.map((r) => (
              <div
                key={r.id}
                style={{ background: p.surface, border: hairline, borderRadius: 8, padding: large ? "6px 8px" : "4px 6px" }}
              >
                <div className="flex items-center justify-between gap-1">
                  <span
                    style={{ fontSize: fs(6.5, 9), fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
                  >
                    {r.title}
                  </span>
                  <span
                    className="shrink-0"
                    style={{
                      fontSize: fs(5, 7),
                      fontWeight: 600,
                      borderRadius: 99,
                      padding: "1px 6px",
                      whiteSpace: "nowrap",
                      color: r.done ? p.accent2 : r.pct < 50 ? "#B45309" : p.accent,
                      background: r.done ? tint(p.accent2, 14) : r.pct < 50 ? "color-mix(in srgb, #B45309 10%, transparent)" : tint(p.accent, 12),
                    }}
                  >
                    {r.status}
                  </span>
                </div>
                <div style={{ fontSize: fs(5.5, 7.5), color: p.muted, marginTop: 1, whiteSpace: "nowrap" }}>
                  {r.id} · {r.meta}
                </div>
                <div className="flex items-center gap-1.5" style={{ marginTop: large ? 5 : 3 }}>
                  <div style={{ flex: 1, background: well, borderRadius: 4, height: large ? 5 : 4, overflow: "hidden" }}>
                    <div
                      style={{
                        background: r.done ? p.accent2 : p.accent,
                        width: `${r.pct}%`,
                        height: "100%",
                        borderRadius: 4,
                      }}
                    />
                  </div>
                  <span style={{ fontSize: fs(5.5, 7.5), color: p.muted, fontVariantNumeric: "tabular-nums" }}>{r.pct}%</span>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "auto", fontSize: fs(5.5, 7.5), color: p.muted, whiteSpace: "nowrap" }}>
            <span style={{ fontFamily: "monospace", border: hairline, borderRadius: 4, padding: "0 3px", background: p.surface }}>C</span>{" "}
            new issue · <span style={{ fontFamily: "monospace", border: hairline, borderRadius: 4, padding: "0 3px", background: p.surface }}>⌘↵</span>{" "}
            submit
          </div>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
