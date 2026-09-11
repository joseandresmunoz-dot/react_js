<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# AGENTS.md

## Stack
- Next.js 16.3.4 + React 19.2.8, App Router only (`src/app/`). No `pages/` directory, no TypeScript.
- `jsconfig.json:3` alias `@/*` -> `./src/*`. Both `@/components/...` and relative `../components/...` work (see `src/app/page.js:1-2`); prefer `@/` for consistency.

## Commands
- `npm run dev` — dev server at http://localhost:3000 (also `next dev` regenerates this file's header block)
- `npm run build` — production build; only verification available (no lint/test/typecheck scripts)
- `npm start` — serve production build

No ESLint, Prettier, Jest/Vitest, or CI workflows configured. `npm run build` is the sole check before commit.

## Structure
- `src/app/` — routes: `layout.js` (root layout + metadata), `page.js` (home), `globals.css`, `page.module.css`
- `src/components/` — shared components: `tituloPrincipal.js` (`TituloPrincipal`), `listacomida.js` (`ListaComida`)
- `public/` — static assets; `.next/` and `out/` are build artifacts (gitignored)

## Gotchas
- All components are Server Components by default; add `"use client"` directive explicitly when needing hooks/state/effects.
- Files use `.js` not `.jsx` — no TS, no prop-types. Default export mismatch exists: `src/app/page.js:1` imports `tituloPrincipal` default that doesn't exist (only named `TituloPrincipal` is exported); don't replicate.
- `next/font` Geist setup from `create-next-app` is referenced in README but not wired in `src/app/layout.js` — font CSS vars in `page.module.css` will be inert until re-added.
- `.env*` is gitignored; no env vars currently required. No `next.config.mjs` customizations yet.
