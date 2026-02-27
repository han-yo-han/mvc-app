# AGENTS.md

## Cursor Cloud specific instructions

This is a static Astro website for a Korean church (선교비전교회). The entire application lives in `frontend/`.

### Services

| Service | Command | Port | Notes |
|---|---|---|---|
| Astro Dev Server | `npm run dev` (from `frontend/`) | 4321 | The only service; use `--host 0.0.0.0` for external access |

### Quick Reference

- **Install deps:** `npm install` in `frontend/`
- **Dev server:** `npm run dev` in `frontend/` — serves at `http://localhost:4321`
- **Build:** `npm run build` in `frontend/` — outputs to `frontend/dist/`
- **Preview prod build:** `npm run preview` in `frontend/`

See `frontend/README.md` for the full commands table.

### Non-obvious Notes

- There is no backend, no database, and no external API keys required. All content is file-based JSON/Markdown under `frontend/src/content/`.
- The project uses `package-lock.json` (npm), not pnpm or yarn.
- Astro outputs a deprecation warning about auto-generated content collections; this is cosmetic and does not affect the build.
- No linter or test runner is configured in `package.json`. The only verification is `npm run build` (Astro static build).
- Some content fields show `[NEEDS INPUT]` placeholders — this is expected for the MVP.
