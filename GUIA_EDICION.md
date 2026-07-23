# Guía para Editar la Web - Muy Fácil

Esta guía está escrita para personas que NO saben programar. Te explicaremos paso a paso cómo cambiar textos, imágenes y otros elementos de tu web desde tu ordenador.

## Índice
1. [¿Qué necesitas?](#qué-necesitas)
2. [Estructura de archivos](#estructura-de-archivos)
3. [Cambiar textos de la web](#cambiar-textos-de-la-web)
4. [Cambiar imágenes](#cambiar-imágenes)
5. [Añadir una nueva pieza al catálogo](#añadir-una-nueva-pieza-al-catálogo)
6. [Ver los cambios en tu ordenador](#ver-los-cambios-en-tu-ordenador)
7. [Publicar los cambios en internet](#publicar-los-cambios-en-internet)

---

## ¿Qué necesitas?

- Un editor de texto (recomendado: **VS Code** - es gratis y fácil de usar)
- Tu ordenador con los archivos del proyecto

**¿Dónde están los archivos?**
Los archivos están en esta carpeta:
```
C:\Users\jeni\CascadeProjects\ceramica-arte-catalogo
```

---

## Estructura de archivos

Aquí te explicamos qué hace cada carpeta y archivo importante:

### Carpeta principal: `ceramica-arte-catalogo`

```
ceramica-arte-catalogo/
├── src/                          # Aquí está todo el código de la web
│   ├── data/
│   │   └── site.ts              # INFORMACIÓN DEL ESTUDIO (nombre, email, teléfono, menú)
│   ├── pages/                    # PÁGINAS DE LA WEB
│   │   ├── index.astro          # Página de inicio
│   │   ├── catalogo.astro      # Página del menú/catálogo
│   │   ├── cursos.astro        # Página de cursos
│   │   ├── encargos.astro      # Página de encargos
│   │   ├── sobre.astro         # Página "Artista JLS"
│   │   ├── galeria.astro       # Página de galería de fotos
│   │   └── contacto.astro       # Página de contacto
│   ├── content/
│   │   └── obras/              # AQUÍ ESTÁN LAS PIEZAS DEL CATÁLOGO
│   │       ├── jarron-terracota.md
│   │       ├── cuenco-esmaltado-verde.md
│   │       └── ... (un archivo por pieza)
│   └── styles/
│       └── global.css          # COLORES Y ESTILOS GENERALES
├── public/                      # IMÁGENES Y ARCHIVOS PÚBLICOS
│   └── images/                 # AQUÍ VAN LAS FOTOS DE LAS PIEZAS
│       ├── pieza-1.jpg         # Imágenes generales (piezas del catálogo)
│       ├── pieza-2.jpg
│       └── ... (pieza-3.jpg hasta pieza-9.jpg)
│       ├── menu/               # Carpeta para imágenes del Menú (20 imágenes)
│       ├── cursos/             # Carpeta para imágenes de Cursos (3 imágenes)
│       ├── encargos/           # Carpeta para imágenes de Encargos (3 imágenes)
│       ├── artista-jls/        # Carpeta para imágenes de Artista JLS (1 imagen)
│       └── galeria/            # Carpeta para Galería de Fotos (100 imágenes)
└── README.md                   # Información técnica (no necesitas tocarlo)
```

---

## Cambiar textos de la web

### PASO 1: Abrir el archivo de configuración

1. Ve a la carpeta: `C:\Users\jeni\CascadeProjects\ceramica-arte-catalogo`
2. Abre la carpeta `src`
3. Abre la carpeta `data`
4. Abre el archivo `site.ts` con tu editor de texto (VS Code)

### PASO 2: Cambiar la información del estudio

En el archivo `site.ts` verás algo como esto:

```typescript
export const site = {
  name: "Art studio JLS",                    // ← NOMBRE DEL ESTUDIO
  tagline: "Cerámica artesanal...",         // ← FRASE CORTA
  description: "Piezas únicas...",           // ← DESCRIPCIÓN
  email: "artstudiojls@gmail.com",          // ← TU EMAIL
  phone: "0041 76 348 84 54",               // ← TU TELÉFONO
  location: "Limmattalstrasse 280...",      // ← TU DIRECCIÓN
  instagram: "https://instagram.com/",       // ← TU INSTAGRAM
  telegram: "https://t.me/",                // ← TU TELEGRAM
};
```

**Para cambiar algo:**
- Borra el texto entre comillas
- Escribe el nuevo texto
- **MANTÉN LAS COMILLAS** (son importantes)

### PASO 3: Cambiar el menú de navegación

En el mismo archivo `site.ts`, verás esto:

```typescript
export const nav = [
  { href: "/", label: "Inicio" },
  { href: "/catalogo", label: "Menú" },
  { href: "/cursos", label: "Cursos" },
  { href: "/encargos", label: "Encargos" },
  { href: "/sobre", label: "Artista JLS" },
  { href: "/galeria", label: "Galería de Fotos" },
  { href: "/contacto", label: "Contacto" },
];
```

**Para cambiar el nombre de un menú:**
- Cambia el texto después de `label:`
- Ejemplo: `{ href: "/catalogo", label: "Catálogo" }` cambia "Menú" por "Catálogo"

**NO cambies el `href`** (la parte entre comillas después de `href:`)

### PASO 4: Guardar el archivo

- Presiona `Ctrl + S` (o `Cmd + S` en Mac)
- ¡Listo! Los cambios están guardados

---

## Cambiar imágenes

### Organización de imágenes por página

Las imágenes están organizadas en carpetas por página:

- **`public/images/menu/`** - Para imágenes del Menú (20 imágenes)
- **`public/images/cursos/`** - Para imágenes de Cursos (3 imágenes)
- **`public/images/encargos/`** - Para imágenes de Encargos (3 imágenes)
- **`public/images/artista-jls/`** - Para imágenes de Artista JLS (1 imagen)
- **`public/images/galeria/`** - Para Galería de Fotos (100 imágenes)
- **`public/images/pieza-1.jpg` a `pieza-9.jpg`** - Imágenes generales del catálogo

### OPCIÓN A: Cambiar una imagen existente (más fácil)

**Ejemplo: Cambiar la imagen de la pieza 1**

1. Ve a: `C:\Users\jeni\CascadeProjects\ceramica-arte-catalogo\public\images`
2. Encuentra el archivo `pieza-1.jpg`
3. **Copia el nombre del archivo** (pieza-1.jpg)
4. Borra el archivo `pieza-1.jpg`
5. Pon tu nueva foto en la misma carpeta
6. **Cambia el nombre de tu foto a** `pieza-1.jpg` (exactamente igual)

**¡Importante!**
- La foto debe ser formato JPG
- El nombre debe ser EXACTAMENTE igual (pieza-1.jpg, no Pieza-1.jpg ni pieza 1.jpg)

### OPCIÓN B: Añadir imágenes a carpetas específicas

**Para añadir imágenes al Menú:**
1. Ve a: `C:\Users\jeni\CascadeProjects\ceramica-arte-catalogo\public\images\menu`
2. Copia tus fotos en esta carpeta
3. Nómbralas como quieras (ejemplo: `menu-1.jpg`, `menu-2.jpg`, etc.)

**Para añadir imágenes a Cursos:**
1. Ve a: `C:\Users\jeni\CascadeProjects\ceramica-arte-catalogo\public\images\cursos`
2. Copia tus 3 fotos en esta carpeta
3. Nómbralas como quieras

**Para añadir imágenes a Encargos:**
1. Ve a: `C:\Users\jeni\CascadeProjects\ceramica-arte-catalogo\public\images\encargos`
2. Copia tus 3 fotos en esta carpeta
3. Nómbralas como quieras

**Para añadir imágenes a Artista JLS:**
1. Ve a: `C:\Users\jeni\CascadeProjects\ceramica-arte-catalogo\public\images\artista-jls`
2. Copia tu foto en esta carpeta
3. Nómbrala como quieras

**Para añadir imágenes a Galería:**
1. Ve a: `C:\Users\jeni\CascadeProjects\ceramica-arte-catalogo\public\images\galeria`
2. Copia tus fotos en esta carpeta
3. Nómbralas como quieras

### OPCIÓN C: Añadir una nueva imagen con nombre diferente

1. Ve a: `C:\Users\jeni\CascadeProjects\ceramica-arte-catalogo\public\images`
2. Copia tu nueva foto en esta carpeta
3. Anota el nombre de tu foto (ejemplo: `mi-foto.jpg`)
4. Ahora necesitas actualizar el archivo de la pieza (ver sección siguiente)

---

## Añadir una nueva pieza al catálogo

### PASO 1: Preparar tu foto

1. Pon tu foto en: `C:\Users\jeni\CascadeProjects\ceramica-arte-catalogo\public\images`
2. Anota el nombre de tu foto (ejemplo: `nueva-pieza.jpg`)

### PASO 2: Crear el archivo de la pieza

1. Ve a: `C:\Users\jeni\CascadeProjects\ceramica-arte-catalogo\src\content\obras`
2. Verás muchos archivos `.md` (uno por pieza)
3. Copia uno de los archivos existentes (por ejemplo, `jarron-terracota.md`)
4. Pega la copia en la misma carpeta
5. Cambia el nombre del archivo copiado (ejemplo: `mi-nueva-pieza.md`)

### PASO 3: Editar el archivo de la pieza

1. Abre el archivo nuevo que creaste
2. Verás algo así:

```markdown
---
titulo: "Jarrón Terracota"
categoria: "Cerámica"
descripcion: "Texto corto para las tarjetas."
imagen: "/images/pieza-1.jpg"
materiales: "Barro rojo, esmalte mate"
dimensiones: "28 × 15 cm"
anio: 2025
disponible: true
destacada: true
orden: 1
---

Texto largo con la descripción completa de la pieza.
```

**Cambia cada campo:**

- **titulo**: Nombre de tu pieza (entre comillas)
- **categoria**: Una de estas opciones:
  - "Cerámica"
  - "Arte"
  - "Escultura"
  - "Cursos"
  - "Eventos"
  - "Trabajos en torno"
  - "Trabajos modelados"
  - "Objetos cotidianos"
  - "Encargos"
- **descripcion**: Texto corto que aparece en la tarjeta
- **imagen**: Ruta de tu foto
  - Si tu foto se llama `nueva-pieza.jpg`, escribe: `/images/nueva-pieza.jpg`
- **materiales**: Materiales usados (opcional)
- **dimensiones**: Tamaño de la pieza (opcional)
- **anio**: Año de creación (opcional)
- **disponible**: 
  - `true` = disponible
  - `false` = vendida
- **destacada**: 
  - `true` = aparece en la página de inicio
  - `false` = solo aparece en el catálogo
- **orden**: Número para ordenar (1 aparece primero, 2 después, etc.)

**Después de los guiones `---`**, escribe la descripción larga de la pieza.

### PASO 4: Guardar el archivo

- Presiona `Ctrl + S`

---

## Cambiar textos de una página específica

### Ejemplo: Cambiar el texto de la página de Cursos

1. Ve a: `C:\Users\jeni\CascadeProjects\ceramica-arte-catalogo\src\pages`
2. Abre el archivo `cursos.astro`
3. Busca el texto que quieres cambiar
4. Cambia el texto
5. Guarda con `Ctrl + S`

**Mismo proceso para otras páginas:**
- `encargos.astro` → Página de encargos
- `sobre.astro` → Página "Artista JLS"
- `contacto.astro` → Página de contacto
- `index.astro` → Página de inicio

---

## Ver los cambios en tu ordenador

### PASO 1: Abrir la terminal

1. Presiona `Windows + R`
2. Escribe `cmd` y presiona Enter

### PASO 2: Ir a la carpeta del proyecto

Escribe esto en la terminal (copia y pega):

```
cd C:\Users\jeni\CascadeProjects\ceramica-arte-catalogo
```

Presiona Enter.

### PASO 3: Instalar dependencias (solo la primera vez)

Escribe:

```
npm install
```

Presiona Enter y espera a que termine.

### PASO 4: Iniciar el servidor local

Escribe:

```
npm run dev
```

Presiona Enter.

### PASO 5: Ver tu web

1. Abre tu navegador (Chrome, Firefox, etc.)
2. Ve a: `http://localhost:4321`
3. ¡Verás tu web con los cambios!

**Mantén la terminal abierta** mientras editas. Los cambios se actualizan automáticamente.

---

## Publicar los cambios en internet

### PASO 1: Guardar todos los cambios

Asegúrate de haber guardado todos los archivos (`Ctrl + S`).

### PASO 2: Abrir la terminal

Si cerraste la terminal anterior, ábrela de nuevo y ve a la carpeta:

```
cd C:\Users\jeni\CascadeProjects\ceramica-arte-catalogo
```

### PASO 3: Ver qué archivos cambiaste

Escribe:

```
git status
```

Verás una lista de archivos modificados.

### PASO 4: Añadir los cambios

Escribe:

```
git add .
```

### PASO 5: Guardar los cambios con un mensaje

Escribe:

```
git commit -m "Mis cambios"
```

(Puedes cambiar "Mis cambios" por una descripción más específica)

### PASO 6: Subir a internet

Escribe:

```
git push
```

### PASO 7: Esperar

- Espera 1-2 minutos
- Ve a: `https://konqidam.github.io/ceramica-arte-catalogo/`
- ¡Tus cambios estarán en internet!

---

## Resumen rápido

**Para cambiar textos del estudio:**
- Edita `src/data/site.ts`

**Para cambiar imágenes:**
- Reemplaza archivos en `public/images/` manteniendo el mismo nombre

**Para añadir una pieza:**
1. Pon foto en `public/images/`
2. Copia un archivo `.md` en `src/content/obras/`
3. Edita los datos de la pieza

**Para ver cambios localmente:**
- `npm run dev` y abre `http://localhost:4321`

**Para publicar:**
- `git add .`
- `git commit -m "mensaje"`
- `git push`

---

## ¿Problemas?

**La web no se actualiza:**
- Cierra el servidor (Ctrl + C en la terminal)
- Vuelve a ejecutar `npm run dev`

**Error al publicar:**
- Asegúrate de tener internet
- Verifica que escribiste bien los comandos git

**La imagen no aparece:**
- Verifica que el nombre del archivo sea EXACTAMENTE igual
- Verifica que sea formato JPG

---

## ¿Necesitas ayuda?

Si tienes problemas, revisa:
- Que los nombres de archivos sean exactos (mayúsculas/minúsculas importan)
- Que hayas guardado los archivos (Ctrl + S)
- Que las comillas estén bien puestas

¡Éxito con tu web!
