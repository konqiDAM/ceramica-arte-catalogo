import fs from 'fs';
import path from 'path';

const galeriaDir = path.join(process.cwd(), 'public', 'images', 'galeria');
const galeriaPagePath = path.join(process.cwd(), 'src', 'pages', 'galeria.astro');

// Extensiones de imagen soportadas
const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.avif', '.gif'];

try {
  // Leer archivos de la carpeta galeria
  const files = fs.readdirSync(galeriaDir);
  
  // Filtrar solo archivos de imagen y ordenarlos
  const images = files
    .filter(file => imageExtensions.includes(path.extname(file).toLowerCase()))
    .sort()
    .map(file => `/images/galeria/${file}`);
  
  // Leer el archivo galeria.astro
  let content = fs.readFileSync(galeriaPagePath, 'utf-8');
  
  // Generar el nuevo array de fotos
  const newFotosArray = `const fotos = [\n${images.map(img => `  "${img}",`).join('\n')}\n];`;
  
  // Reemplazar el array existente
  const regex = /const fotos = \[[\s\S]*?\];/;
  content = content.replace(regex, newFotosArray);
  
  // Escribir el archivo actualizado
  fs.writeFileSync(galeriaPagePath, content, 'utf-8');
  
  console.log(`✅ Galería actualizada con ${images.length} imágenes:`);
  images.forEach(img => console.log(`   ${img}`));
} catch (error) {
  console.error('❌ Error al actualizar la galería:', error.message);
  process.exit(1);
}
