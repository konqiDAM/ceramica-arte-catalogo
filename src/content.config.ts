import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { CATEGORIES } from "./data/categories";
import { locales } from "./i18n/ui";

// Shared frontmatter fields. `lang` is added per collection below because the
// two collections have different strictness — see the comments there.
const obraFields = {
  titulo: z.string(),
  categoria: z.enum(CATEGORIES),
  descripcion: z.string(),
  imagen: z.string(),
  materiales: z.string().optional(),
  dimensiones: z.string().optional(),
  anio: z.number().optional(),
  disponible: z.boolean().default(true),
  destacada: z.boolean().default(false),
  orden: z.number().default(0),
};

const obras = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/obras" }),
  schema: z.object({
    ...obraFields,
    // Required on purpose: a piece without `lang` is silently filtered out of
    // every catalogue page, which is far harder to notice than a build error.
    lang: z.enum(locales),
  }),
});

// Legacy collection, kept only so the existing files keep validating. No view
// reads it — the site builds its pages from `obras`.
const objetos = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/objetos" }),
  schema: z.object({
    ...obraFields,
    lang: z.enum(locales).default("es"),
  }),
});

export const collections = { obras, objetos };