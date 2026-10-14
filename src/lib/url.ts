// Prefixes internal paths with Astro's configured base so the site works both
// at the domain root (Vercel/Netlify) and under a sub-path (GitHub Pages).
const base = import.meta.env.BASE_URL.replace(/\/$/, "");

export function url(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}` || "/";
}

// Build a locale-aware URL respecting BASE_PATH
export function localeUrl(path: string, locale: string): string {
  const cleanPath = path.replace(/^\/+/, "");
  if (locale === "de") {
    return url(cleanPath ? `/${cleanPath}` : "/");
  }
  return url(cleanPath ? `/${locale}/${cleanPath}` : `/${locale}`);
}
