# Test Plan — Cerámica & Arte Catálogo (Astro static site)

Dev server: http://localhost:4322 (base = "/"; port 4321 was in use). Record browser flow.

## T1 — Home page (/)
Load http://localhost:4322/
- PASS if: hero shows tagline "Cerámica artesanal y obras de arte hechas a mano", two hero images render (not broken), "Piezas destacadas" grid shows 4 cards, "Por categoría" section shows category cards with counts (Cerámica 5 piezas, Arte 2 piezas, Escultura 2 piezas), CTA band "¿Te interesa una pieza?" with Contactar button.
- FAIL if: images broken, wrong counts, sections missing.
- Console: no errors.

## T2 — Navigation + active highlight + mobile hamburger
- Click header links Inicio, Menú, Cursos, Encargos, Artista JLS, Galería de Fotos, Contacto — each lands on correct page (/,/catalogo,/cursos,/encargos,/sobre,/galeria,/contacto).
- PASS if active link is underlined/highlighted (clay color) matching current page.
- At 390px width: nav links hidden, hamburger visible; click hamburger → menu expands (links visible); click again → collapses.
- FAIL if links dead, no active highlight, hamburger absent or non-functional.

## T3 — Catálogo filters (/catalogo)
Load /catalogo.
- PASS if grid shows cards, filter buttons: Todas (active), Cerámica, Arte, Escultura, Cursos, Eventos, Trabajos en torno, Trabajos modelados, Objetos cotidianos, Encargos.
- Click each category filter → only cards in that category visible, button becomes active.
- Click "Todas" → all cards visible again. Empty-state message stays hidden throughout.
- FAIL if counts wrong or filtering doesn't change visible set.

## T4 — Piece detail (/obra/jarron-terracota)
- PASS if: image renders, title "Jarrón Terracota", description, specs show Materiales / Dimensiones (28 × 15 cm) / Año (2025) / Disponibilidad (Disponible), "Consultar esta pieza" is a mailto link (mailto:artstudiojls@gmail.com?subject=...), "Otras piezas de Cerámica" related section with clickable cards.
- Click a related card → navigates to another Cerámica piece detail.
- FAIL if specs missing, mailto malformed, related links dead.

## T5 — El taller (/sobre) & Contacto (/contacto)
- /sobre renders content without error.
- /contacto renders contact info list (email, teléfono, Telegram, Instagram, ubicación) + form with Nombre, Email, Mensaje fields + Enviar button.
- FAIL if pages error or form fields absent.

## T6 — Console check
- Throughout, browser console shows no JS errors on any page.
