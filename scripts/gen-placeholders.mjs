// Generates warm, artisan-style .jpg placeholder images for the catalog.
// Each image is a stylized ceramic/art piece so the site looks real before
// the user drops in their own photography (replace files in public/images).
import { mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, '..', 'public', 'images');
mkdirSync(outDir, { recursive: true });

const palettes = [
  ['#c96f4a', '#e9c9a8'],
  ['#7d8b74', '#dfe3d0'],
  ['#a9603f', '#efd9b4'],
  ['#4f6d7a', '#d3e0e2'],
  ['#8c5a4a', '#e7cdbb'],
  ['#b08968', '#efe3d3'],
  ['#5b6650', '#d8ddc7'],
  ['#9c6644', '#eaddca'],
  ['#6d597a', '#e4dbe8'],
];

// Simple stylized silhouettes to vary the pieces visually.
const shapes = [
  // vase
  (c) => `<path d="M180 120 q-10 40 15 70 q40 30 40 90 q0 90 -75 130 q-75 -40 -75 -130 q0 -60 40 -90 q25 -30 15 -70 z" transform="translate(50,20)" fill="${c}"/>`,
  // bowl
  (c) => `<path d="M120 230 a130 90 0 0 0 260 0 q-8 -18 -30 -18 h-200 q-22 0 -30 18 z" fill="${c}"/>`,
  // tall jar
  (c) => `<path d="M215 110 h70 v40 q40 30 40 120 q0 100 -75 130 q-75 -30 -75 -130 q0 -90 40 -120 z" fill="${c}"/>`,
  // plate (abstract art)
  (c) => `<circle cx="250" cy="240" r="130" fill="none" stroke="${c}" stroke-width="26"/><circle cx="250" cy="240" r="70" fill="${c}" opacity="0.55"/>`,
  // mug
  (c) => `<rect x="170" y="150" width="120" height="180" rx="16" fill="${c}"/><path d="M290 190 q60 5 60 55 q0 50 -60 55" fill="none" stroke="${c}" stroke-width="20"/>`,
  // sculpture (abstract)
  (c) => `<path d="M250 110 q60 60 20 130 q-40 60 30 150 q-90 -10 -120 -90 q-25 -70 30 -120 q30 -30 40 -70 z" fill="${c}"/>`,
];

const count = 9;
const jobs = [];
for (let i = 0; i < count; i++) {
  const [main, bg] = palettes[i % palettes.length];
  const shape = shapes[i % shapes.length](main);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="1000" viewBox="0 0 500 500" role="img" aria-label="Pieza artesanal">
  <defs>
    <linearGradient id="g${i}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${bg}"/>
      <stop offset="1" stop-color="${shade(bg, -18)}"/>
    </linearGradient>
    <filter id="soft${i}"><feGaussianBlur stdDeviation="2"/></filter>
  </defs>
  <rect width="500" height="500" fill="url(#g${i})"/>
  <ellipse cx="250" cy="400" rx="150" ry="26" fill="#000" opacity="0.08" filter="url(#soft${i})"/>
  ${shape}
</svg>`;
  jobs.push(
    sharp(Buffer.from(svg.trim()), { density: 150 })
      .jpeg({ quality: 88 })
      .toFile(join(outDir, `pieza-${i + 1}.jpg`)),
  );
}
await Promise.all(jobs);

function shade(hex, amt) {
  const n = parseInt(hex.slice(1), 16);
  const r = clamp((n >> 16) + amt);
  const g = clamp(((n >> 8) & 0xff) + amt);
  const b = clamp((n & 0xff) + amt);
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
}
function clamp(v) { return Math.max(0, Math.min(255, v)); }

console.log(`Generated ${count} placeholder images in public/images`);
