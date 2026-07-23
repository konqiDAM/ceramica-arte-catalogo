import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const obras = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/obras" }),
  schema: z.object({
    titulo: z.string(),
    categoria: z.enum(["Cerámica", "Arte", "Escultura", "Cursos", "Eventos", "Trabajos en torno", "Trabajos modelados", "Objetos cotidianos", "Encargos"]),
    descripcion: z.string(),
    imagen: z.string(),
    materiales: z.string().optional(),
    dimensiones: z.string().optional(),
    anio: z.number().optional(),
    disponible: z.boolean().default(true),
    destacada: z.boolean().default(false),
    orden: z.number().default(0),
  }),
});

const objetos = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/objetos" }),
  schema: z.object({
    titulo: z.string(),
    categoria: z.enum(["Cerámica", "Arte", "Escultura", "Cursos", "Eventos", "Trabajos en torno", "Trabajos modelados", "Objetos cotidianos", "Encargos"]),
    descripcion: z.string(),
    imagen: z.string(),
    materiales: z.string().optional(),
    dimensiones: z.string().optional(),
    anio: z.number().optional(),
    disponible: z.boolean().default(true),
    destacada: z.boolean().default(false),
    orden: z.number().default(0),
  }),
});

export const collections = { obras, objetos };
