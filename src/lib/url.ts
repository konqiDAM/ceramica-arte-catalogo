import { defaultLocale, isLocale } from "../i18n/ui";

// Prefixes internal paths with Astro's configured base so the site works both
// at the domain root (Vercel/Netlify) and under a sub-path (GitHub Pages).
const base = import.meta.env.BASE_URL.replace(/\/$/, "");

export function url(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}` || "/";
}

// Build a locale-aware URL respecting BASE_PATH. The default locale lives at the
// root, every other locale gets a `/<locale>` prefix.
export function localeUrl(path: string, locale: string): string {
  const cleanPath = path.replace(/^\/+/, "");
  const l = isLocale(locale) ? locale : defaultLocale;
  if (l === defaultLocale) {
    return url(cleanPath ? `/${cleanPath}` : "/");
  }
  return url(cleanPath ? `/${l}/${cleanPath}` : `/${l}`);
}
