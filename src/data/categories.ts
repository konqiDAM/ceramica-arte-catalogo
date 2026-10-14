/**
 * Canonical catalog categories.
 *
 * These values are written verbatim in the Markdown frontmatter of every piece,
 * so they are data rather than UI text — translate them with `categoryLabel()`
 * in `src/i18n/ui.ts` instead of renaming them here.
 */
export const CATEGORIES = [
  "Cerámica",
  "Arte",
  "Escultura",
  "Cursos",
  "Eventos",
  "Trabajos en torno",
  "Trabajos modelados",
  "Objetos cotidianos",
  "Encargos",
] as const;

export type Category = (typeof CATEGORIES)[number];