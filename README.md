# Taller Barro & Arte — Catálogo web

Catálogo / portafolio web para un taller de **cerámica artesanal y obras de arte**.
Sin pasarela de pago: muestra las piezas, sus detalles y un formulario de contacto
para consultas y encargos. Hecho con [Astro](https://astro.build).

## Características

- Página de inicio con piezas destacadas y categorías.
- Catálogo filtrable por categoría (Cerámica, Arte, Escultura).
- Página de detalle por pieza (materiales, dimensiones, año, disponibilidad).
- Página "El taller" (sobre) y página de contacto con formulario `mailto`.
- Diseño responsive, elegante y de carga rápida (sitio 100% estático).
- Contenido gestionado con **content collections** en Markdown (sin base de datos).

## Cómo personalizar

| Qué | Dónde |
| --- | --- |
| Nombre, email, redes, ubicación | `src/data/site.ts` |
| Piezas del catálogo | `src/content/obras/*.md` (una por pieza) |
| Imágenes | `public/images/` (reemplaza `pieza-1.jpg` … `pieza-9.jpg` por tus fotos, manteniendo el mismo nombre) |
| Colores y tipografía | `src/styles/global.css` (variables CSS en `:root`) |

### Añadir una pieza nueva

Crea un archivo `src/content/obras/mi-pieza.md`:

```md
---
titulo: "Mi pieza"
categoria: "Cerámica"        # Cerámica | Arte | Escultura
descripcion: "Descripción corta para las tarjetas."
imagen: "/images/mi-foto.jpg"   # ruta a la foto en public/images
materiales: "Gres, esmalte mate"
dimensiones: "20 × 12 cm"
anio: 2025
disponible: true
destacada: false             # true = aparece en la home
orden: 10
---

Texto largo con la descripción completa de la pieza.
```

## Desarrollo

Requiere **Node 22+**.

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # genera el sitio estático en dist/
npm run preview   # previsualiza el build
```

## Despliegue (gratis)

El sitio es estático (`dist/`), así que se despliega gratis en cualquier host estático:

- **Netlify**: ya incluye `netlify.toml`. Conecta el repo y listo.
- **Vercel**: detecta Astro automáticamente (build `astro build`, output `dist`).
- **GitHub Pages / Cloudflare Pages**: sirve la carpeta `dist/`.
