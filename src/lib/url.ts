// Prefixes internal paths with Astro's configured base so the site works both
// at the domain root (Vercel/Netlify) and under a sub-path (GitHub Pages).
const base = import.meta.env.BASE_URL.replace(/\/$/, "");

export function url(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}` || "/";
}
