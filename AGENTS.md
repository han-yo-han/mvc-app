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

- There is no backend, no database. All content is file-based JSON/Markdown under `frontend/src/content/`.
- **네이버 지도**: 지도 표시를 위해 `PUBLIC_NCP_KEY_ID` (네이버 클라우드 Maps API Client ID)를 `.env`에 설정하면 네이버 지도가 임베드됩니다. 미설정 시 "네이버 지도에서 보기" 링크가 표시됩니다.
- The project uses `package-lock.json` (npm), not pnpm or yarn.
- Astro outputs a deprecation warning about auto-generated content collections; this is cosmetic and does not affect the build.
- No linter or test runner is configured in `package.json`. The only verification is `npm run build` (Astro static build).
- Some content fields show `[NEEDS INPUT]` placeholders — this is expected for the MVP.
