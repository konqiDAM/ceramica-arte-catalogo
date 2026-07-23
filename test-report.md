# Test Report — Cerámica & Arte Catálogo (Astro static site)

**How tested:** Ran the site locally on the root-based Astro dev server (`npm run dev`, Node 22 via nvm) at `http://localhost:4322` (port 4321 was occupied by a separate base-path build), and exercised the golden paths end-to-end through the browser. Browser console was checked on every page.

**Result:** All tests passed. No console errors on any page.

> Note on ports: port 4321 was already running a build with `BASE_PATH=/ceramica-arte-catalogo` (links prefixed `/ceramica-arte-catalogo/`, unstyled at root). That is **not** the local dev target. My own `npm run dev` served the correct root-based site on **4322** (links `/`, `/catalogo`, images at `/images/...`) — all testing was done there.

---

## T1 — Home page (/) — PASS
Hero renders with tagline "Cerámica artesanal y obras de arte hechas a mano" and both hero images. "Piezas destacadas" shows 4 featured cards (Jarrón Terracota, Cuenco Esmaltado Verde, Plato Decorativo Círculos, Escultura Orgánica). "Por categoría" shows correct counts: **Cerámica 5, Arte 2, Escultura 2**. CTA band "¿Te interesa una pieza?" + Contactar button present. Images render.

![Home featured grid](https://app.devin.ai/attachments/ecd07676-707f-4987-b221-c3d343af2806/ss_bded2673.png)

## T2 — Navigation + active highlight — PASS
Header links (Inicio, Menú, Cursos, Encargos, Artista JLS, Galería de Fotos, Contacto) all navigate to the correct pages. Active link is highlighted (clay underline) matching the current page.

![El taller active nav](https://app.devin.ai/attachments/9cf8dd3e-b049-48ac-9fe2-8913f60fb98e/ss_d267d613.png)

## T3 — Catálogo filters (/catalogo) — PASS
Grid shows all 9 pieces with "Todas" active. Client-side filters work correctly:
- **Cerámica → 5** cards
- **Arte → 2** cards (Plato Decorativo Círculos, Composición Abstracta)
- **Escultura → 2** cards (Escultura Orgánica, Vasija Lila)
- **Todas → 9** cards restored

Active button state updates on each click. Empty state stayed hidden throughout.

| Arte filter (2) | Escultura filter (2) |
|---|---|
| ![Arte filter](https://app.devin.ai/attachments/205b060f-54f8-46e3-93db-2da4f3b8bbbc/ss_16746bb5.png) | ![Escultura filter](https://app.devin.ai/attachments/e7698735-e70c-4010-9fa8-ca261de429ef/ss_d58511cc.png) |

## T4 — Piece detail (/obra/jarron-terracota) — PASS
Image, title, description render. Specs correct: Materiales (Barro rojo, esmalte mate), Dimensiones (28 × 15 cm), Año (2025), Disponibilidad (Disponible). "Consultar esta pieza" is a mailto link with `subject=Consulta%3A...` to artstudiojls@gmail.com. "Otras piezas de Cerámica" related section renders 3 pieces; clicking "Fuente Verde Salvia" navigated to its detail page correctly.

| Detail page | Related-link navigation works |
|---|---|
| ![Detail](https://app.devin.ai/attachments/660c056b-353d-437d-9198-24d6be4fdb75/ss_7cb38196.png) | ![Related nav](https://app.devin.ai/attachments/e068af7a-dc4f-49c2-9475-1366f7d2b28d/ss_fe99ba1b.png) |

## T5 — El taller (/sobre) & Contacto (/contacto) — PASS
/sobre renders (hero, "El proceso", feature blurbs). /contacto renders Información list (email, teléfono, Telegram, Instagram, ubicación) and a form with Nombre, Email, Mensaje fields + Enviar button.

![Contacto form](https://app.devin.ai/attachments/83a9f1bb-e37b-49b0-919d-d39a76d754ce/ss_0f9b5536.png)

## T6 — Responsive @ 390px + hamburger — PASS
At 390px the nav collapses to a hamburger. Clicking it opens a vertical menu with all 4 links (`aria-expanded=true`); clicking again closes it (`aria-expanded=false`). Layout stacks cleanly with no overflow.

![Mobile hamburger open](https://app.devin.ai/attachments/805241c6-abad-4f71-ac7b-263152e34624/ss_8510b2d0.png)

## Console check — PASS
No JS errors on any page (only Vite dev connection debug messages).
