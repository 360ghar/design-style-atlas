import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function NotionInspiredPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const s = large ? 1.6 : 1;
  const BG = p.bg;
  const SURFACE = p.surface;
  const BORDER = `${p.ink}15`;
  const CALLOUT_BG = `${p.accent2}15`;
  const CALLOUT_BORDER = `${p.accent2}33`;
  const INK = p.ink;
  const MUTED = p.muted;
  const ACCENT = p.accent;
  const ACCENT2 = p.accent2;
  const DISPLAY = p.display;
  const BODY = p.body;

  const ROWS = [
    { task: "Beta invites", owner: "MK", status: "Done", dot: MUTED },
    { task: "Launch post", owner: "JT", status: "In progress", dot: ACCENT },
    { task: "Pricing page", owner: "AR", status: "Review", dot: ACCENT2 },
  ];
  return (
    <Frame meta={meta} large={large}>
      <div
        className="flex h-full flex-col"
        style={{ background: BG, color: INK, fontFamily: BODY }}
      >
        {/* breadcrumb nav */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center justify-between"
          style={{ padding: `${7 * s}px ${12 * s}px`, borderBottom: `1px solid ${BORDER}` }}
        >
          <div style={{ fontSize: 6.5 * s, color: MUTED, whiteSpace: "nowrap", overflow: "hidden" }}>
            <span>Acme</span>
            <span style={{ margin: "0 4px" }}>/</span>
            <span>Product</span>
            <span style={{ margin: "0 4px" }}>/</span>
            <span style={{ color: INK, fontWeight: 600 }}>Q3 launch plan</span>
          </div>
          <button
            type="button"
            style={{
              fontSize: 6.5 * s,
              fontFamily: BODY,
              fontWeight: 600,
              background: SURFACE,
              color: INK,
              border: `1px solid ${BORDER}`,
              borderRadius: 6,
              padding: `${3 * s}px ${8 * s}px`,
              whiteSpace: "nowrap",
              cursor: "pointer",
              lineHeight: 1.4,
            }}
          >
            Share
          </button>
        </nav>

        {/* cover band */}
        <div
          aria-hidden="true"
          style={{
            height: 26 * s,
            background: SURFACE,
            backgroundImage: `radial-gradient(${BORDER} 1px, transparent 1px)`,
            backgroundSize: `${8 * s}px ${8 * s}px`,
            borderBottom: `1px solid ${BORDER}`,
          }}
        />

        {/* doc hero */}
        <div style={{ padding: `${10 * s}px ${14 * s}px ${8 * s}px` }}>
          <div style={{ fontSize: 15 * s, lineHeight: 1 }}>🗺️</div>
          <div
            style={{ display: "flex", alignItems: "baseline", gap: 6 * s, marginTop: 4 * s }}
          >
            <span aria-hidden="true" style={{ fontSize: 8 * s, color: BORDER, letterSpacing: 1 }}>
              ⋮⋮
            </span>
            <div style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: 14 * s, letterSpacing: "-0.01em" }}>
              Q3 launch plan
            </div>
          </div>
          <div style={{ fontSize: 6.5 * s, color: MUTED, marginTop: 2 * s }}>
            Edited by Maya · 2m ago · 3 comments
          </div>

          {/* callout */}
          <div
            style={{
              marginTop: 7 * s,
              background: CALLOUT_BG,
              border: `1px solid ${CALLOUT_BORDER}`,
              borderLeft: `3px solid ${ACCENT2}`,
              borderRadius: 6,
              padding: `${5 * s}px ${8 * s}px`,
              fontSize: 7 * s,
              lineHeight: 1.45,
            }}
          >
            <span style={{ marginRight: 4 }}>💡</span>
            Press{" "}
            <span
              style={{
                fontFamily: "ui-monospace, monospace",
                background: BG,
                border: `1px solid ${CALLOUT_BORDER}`,
                borderRadius: 3,
                padding: "0 4px",
                fontWeight: 700,
              }}
            >
              /
            </span>{" "}
            for commands — templates, toggles, tables.
          </div>

          {/* toggles */}
          <div style={{ marginTop: 7 * s, display: "flex", flexDirection: "column", gap: 4 * s }}>
            <div>
              <div style={{ fontSize: 7 * s, fontWeight: 600 }}>
                <span style={{ color: MUTED, marginRight: 4 }}>▸</span>
                Launch checklist
                <span style={{ color: MUTED, fontWeight: 400, marginLeft: 5 }}>4 of 6 done</span>
              </div>
              <div style={{ marginTop: 4 * s, marginLeft: 14 * s, background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: 99, height: 5 * s, overflow: "hidden" }}>
                <div style={{ width: "66%", height: "100%", background: ACCENT, borderRadius: 99 }} />
              </div>
            </div>
            <div
              style={{
                fontSize: 7 * s,
                background: SURFACE,
                border: `1px solid ${BORDER}`,
                borderRadius: 6,
                padding: `${5 * s}px ${8 * s}px`,
              }}
            >
              <div style={{ fontWeight: 600 }}>
                <span style={{ color: MUTED, marginRight: 4 }}>▾</span>
                Positioning &amp; messaging
              </div>
              <div style={{ marginTop: 3 * s, color: INK, opacity: 0.85, fontSize: 6.8 * s, lineHeight: 1.5 }}>
                One line: the warm doc your whole team actually reads.
              </div>
            </div>
          </div>

          {/* table */}
          <div style={{ marginTop: 7 * s, border: `1px solid ${BORDER}`, borderRadius: 6, overflow: "hidden" }}>
            <div
              className="grid"
              style={{ gridTemplateColumns: "1fr 34px 62px", fontSize: 6 * s, fontWeight: 600, color: MUTED, background: SURFACE, borderBottom: `1px solid ${BORDER}`, padding: `${4 * s}px ${8 * s}px` }}
            >
              <span>Task</span>
              <span>Owner</span>
              <span style={{ textAlign: "right" }}>Status</span>
            </div>
            {ROWS.map((r) => (
              <div
                key={r.task}
                className="grid items-center"
                style={{ gridTemplateColumns: "1fr 34px 62px", fontSize: 7 * s, padding: `${4.5 * s}px ${8 * s}px`, borderTop: `1px solid ${BORDER}` }}
              >
                <span style={{ fontWeight: 500, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{r.task}</span>
                <span style={{ color: MUTED, fontSize: 6.5 * s }}>{r.owner}</span>
                <span style={{ textAlign: "right" }}>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 3,
                      fontSize: 6 * s,
                      fontWeight: 600,
                      background: SURFACE,
                      border: `1px solid ${BORDER}`,
                      borderRadius: 99,
                      padding: `${1.5 * s}px ${6 * s}px`,
                    }}
                  >
                    <span style={{ width: 4 * s, height: 4 * s, borderRadius: 99, background: r.dot }} />
                    {r.status}
                  </span>
                </span>
              </div>
            ))}
            <div
              style={{
                borderTop: `1px dashed ${MUTED}`,
                color: MUTED,
                fontSize: 6.5 * s,
                fontWeight: 600,
                textAlign: "center",
                padding: `${4 * s}px`,
              }}
            >
              + New entry
            </div>
          </div>
        </div>

        <div style={{ flex: 1 }} />

        {/* slash-command footer */}
        <div style={{ padding: `${6 * s}px ${12 * s}px ${8 * s}px` }}>
          <div
            className="flex items-center"
            style={{
              background: BG,
              border: `1px solid ${BORDER}`,
              boxShadow: "0 4px 20px rgba(55,53,47,0.12)",
              borderRadius: 6,
              padding: `${5 * s}px ${8 * s}px`,
              fontSize: 7 * s,
              gap: 6,
            }}
          >
            <span style={{ background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: 3, padding: "0 5px", fontWeight: 700, color: INK }}>/</span>
            <span style={{ color: MUTED }}>Type for blocks, templates, tables…</span>
            <span style={{ marginLeft: "auto", color: MUTED, fontSize: 6 * s }}>esc</span>
          </div>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
