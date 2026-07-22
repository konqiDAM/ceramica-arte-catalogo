# Project context — Art studio JLS (catálogo web)

Handoff document for another Devin instance (or developer) continuing this project locally.

## What this is
A **static catalog / portfolio website** for a ceramics & art studio. **No payments, no cart, no backend** — it only showcases pieces, offers courses, and has a contact form (`mailto`). Built with **Astro** (static output). Content is managed with Astro **content collections** in Markdown, so no database.

Language of the site UI and content: **Spanish**.

## Live site & repo
- Repo: https://github.com/konqiDAM/ceramica-arte-catalogo (branch `main`)
- Live (GitHub Pages): https://konqidam.github.io/ceramica-arte-catalogo/
- Deploy: GitHub Actions workflow `.github/workflows/deploy.yml` runs on every push to `main` and publishes to GitHub Pages. Pages is already enabled (Source = "GitHub Actions").

## Tech stack
- **Astro 7** (static site, `output: "static"`).
- **Node.js 22+ required** (Astro 7 refuses Node 20). Locally use nvm: `nvm install 22 && nvm use 22`. There is a `.nvmrc` pinned to `22`.
- Plain CSS (no framework). Google Fonts: Cormorant Garamond (headings) + Inter (body).
- `sharp` (bundled with Astro) is used only by the placeholder-image generator script.

## Run locally
```bash
nvm use 22          # or: nvm install 22
npm install
npm run dev         # http://localhost:4321  (base = "/")
npm run build       # static output in dist/
npm run preview     # preview the build
npx astro check     # type check (expect 0 errors)
```

## IMPORTANT: base path (GitHub Pages vs local)
The site is served under a **sub-path** on GitHub Pages (`/ceramica-arte-catalogo`) but at the **root** locally.

- `astro.config.mjs` reads `BASE_PATH` env var (default `/`). The CI workflow sets `BASE_PATH=/<repo-name>` and `SITE_URL=https://<owner>.github.io` for the production build.
- All internal links and asset URLs MUST go through the helper `src/lib/url.ts` → `url("/some/path")`, which prefixes `import.meta.env.BASE_URL`. **Never hard-code absolute internal paths** like `href="/catalogo"` or `src="/images/x.jpg"` — always `url("/catalogo")`, `url("/images/x.jpg")`. This is what keeps links working under the sub-path.
- Locally (`npm run dev`) base is `/`, so browse `http://localhost:4321/` with NO `/ceramica-arte-catalogo` prefix.

## Project structure
```
astro.config.mjs                # site + base (BASE_PATH/SITE_URL env-driven)
.github/workflows/deploy.yml     # GitHub Pages deploy
scripts/gen-placeholders.mjs     # regenerates public/images/pieza-N.jpg placeholders
public/images/pieza-1..9.jpg     # piece images (placeholders; replace with real photos)
public/favicon.svg
src/
  data/site.ts                   # studio name, email, phone, socials, nav, location, mapQuery — EDIT ME
  content.config.ts              # content collection "obras" schema (zod)
  content/obras/*.md             # ONE markdown file per piece (the catalog data)
  lib/url.ts                     # base-path-aware URL helper (use everywhere)
  layouts/BaseLayout.astro       # <head>, fonts, Header + Footer wrapper
  components/Header.astro         # sticky nav + mobile hamburger (client script)
  components/Footer.astro
  components/ObraCard.astro       # catalog card
  pages/
    index.astro                  # home: hero, destacadas, categorías, CTA
    catalogo.astro               # full grid + client-side category filter
    cursos.astro                 # courses page with contact info
    sobre.astro                  # "Artista JLS" (about)
    galeria.astro                # photo gallery page
    contacto.astro               # contact info + mailto form + Google Maps
    obra/[...slug].astro         # per-piece detail page (getStaticPaths)
```

## Content model — how to add / edit pieces
Each piece is a Markdown file in `src/content/obras/`. Frontmatter schema (see `src/content.config.ts`):
```md
---
titulo: "Jarrón Terracota"
categoria: "Cerámica"        # one of: Cerámica | Arte | Escultura | Cursos | Eventos | Trabajos en torno | Trabajos modelados | Objetos cotidianos | Encargos
descripcion: "Texto corto para las tarjetas."
imagen: "/images/pieza-1.jpg"   # path under public/
materiales: "Barro rojo, esmalte mate"   # optional
dimensiones: "28 × 15 cm"                 # optional
anio: 2025                                # optional
disponible: true             # false => shows "Vendida" badge
destacada: true              # true => appears on the home page "destacadas"
orden: 1                     # sort order (lower first)
---

Texto largo (markdown) que se muestra en la página de detalle.
```
Categories are an enum — adding a new category means updating the `z.enum([...])` in `src/content.config.ts`.

## Images
- Images live in `public/images/` and are named `pieza-1.jpg` … `pieza-9.jpg` (JPG).
- Easiest content update for the non-technical owner: **replace a file keeping the same name** (`pieza-1.jpg`) via the GitHub web UI (Add file → Upload files → Commit). No code change needed; the site redeploys automatically (~1 min).
- If you add a photo with a different name, update the `imagen:` field of the corresponding piece md file.
- `node scripts/gen-placeholders.mjs` regenerates the stylized placeholder JPGs (only needed if you want fresh placeholders).

## Styling
- Global styles + CSS variables (colors, fonts) in `src/styles/global.css` under `:root` (clay/sand/cream palette). Component-scoped styles live in each `.astro` file's `<style>` block.

## Known constraints / gotchas (learned this session)
- The Devin GitHub bot **cannot create repos** or **enable GitHub Pages** under this account (403 "Resource not accessible by integration"); the human owner had to create the empty repo and enable Pages once. Pages is now enabled.
- The bot also **cannot `workflow_dispatch`**; to re-trigger a deploy, push a commit (an empty commit works: `git commit --allow-empty`).
- Node 20 is the system default in PATH on the cloud VM; must `nvm use 22` before any npm/astro command there. A local machine just needs Node 22+.
- `@types/node` is a devDependency so `process.env` typechecks in `astro.config.mjs`.

## Current studio details (as of July 2026)
- **Studio name**: Art studio JLS
- **Email**: artstudiojls@gmail.com
- **Phone**: 0041 76 348 84 54
- **Location**: Limmattalstrasse 280, 8049 Zürich
- **Social**: Telegram (https://t.me/), Instagram (placeholder)
- **Contact method**: Telegram instead of WhatsApp

## Ideas / possible next steps (not done)
- Replace placeholder JPGs with real studio photography.
- Fill in real Instagram URL in `src/data/site.ts`.
- Optional: add `@astrojs/sitemap`, an OG/social share image, a real contact-form backend (e.g. Formspree/Netlify Forms), or per-piece image galleries.
