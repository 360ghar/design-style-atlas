# Design Styles MCP server

Stdio MCP server for coding agents. Zero dependencies, reads the prebuilt
static JSON in `frontend/public/api/` (falls back to `designs/` raw files).

## Run

```bash
# from repo root (build the JSON first)
cd frontend && npm run prebuild  # or: node scripts/build-api.mjs
node ../mcp/server.mjs
```

Add `npm run mcp` from `frontend/`:

```json
{ "scripts": { "mcp": "node ../mcp/server.mjs" } }
```

## Claude Code / Cursor config

```json
{
  "mcpServers": {
    "design-styles": { "command": "node", "args": ["/absolute/path/to/design-style-atlas/mcp/server.mjs"] }
  }
}
```

## Tools

- `list_styles { query?, category?, limit? }` — browse all styles.
- `get_style { slug, format?: "slim" | "tokens" | "full" }` — default `slim` (<1500 tokens). `tokens` returns CSS vars + Tailwind snippet.
- `match_vibe { query, limit? }` — e.g. `"dark playful neon"` returns ranked styles.

Static export is untouched: the site never calls this server. It only reads
the same JSON the site serves at `/api/<slug>.json`.
