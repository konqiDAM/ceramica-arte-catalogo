// Central place for the studio's details. Edit these to personalize the site.
import type { Locale } from "../i18n/ui";
import { defaultLocale, isLocale } from "../i18n/ui";
import { url } from "../lib/url";

export interface SiteInfo {
  name: string;
  tagline: string;
  description: string;
  phone: string;
  location: string;
  mapQuery: string;
  instagram: string;
  telegram: string;
  url: string;
}

const baseSite: Omit<SiteInfo, "tagline" | "description"> = {
  name: "Art studio JLS",
  phone: "0041 76 348 84 54",
  location: "Limmattalstrasse 280, 8049 Zürich",
  mapQuery: "Limmattalstrasse 280, 8049 Zürich",
  instagram: "https://instagram.com/",
  telegram: "https://t.me/",
  url: "https://barroyarte.example.com",
};

export const siteLocales: Record<Locale, SiteInfo> = {
  de: {
    ...baseSite,
    tagline: "Handgefertigte Keramik und Kunst",
    description: "Design und Kunstschaffen. Sie finden hier einzigartige Stücke und Objekte für den Alltag.",
  },
  en: {
    ...baseSite,
    tagline: "Handmade ceramics and works of art",
    description: "Design and creation of art. You will find unique pieces and everyday objects.",
  },
  es: {
    ...baseSite,
    tagline: "Bienvenidos al Taller de ceramica artesanal",
    description: "Diseño y creación de arte. Encontrarás piezas únicas y piezas de uso cotidiano.",
  },
  it: {
    ...baseSite,
    tagline: "Ceramica artigianale e opere d'arte",
    description: "Progettazione e creazione artistica. Qui troverai pezzi unici e oggetti per la vita quotidiana.",
  },
};

export function getSite(locale: Locale | string | undefined): SiteInfo {
  return siteLocales[isLocale(locale) ? locale : defaultLocale];
}

export const site: SiteInfo = siteLocales[defaultLocale];

const navLabels: Record<Locale, string[]> = {
  de: ["Startseite", "Werke", "Kurse", "Auftragsarbeiten", "Künstlerin JLS", "Fotogalerie", "Kontakt"],
  en: ["Home", "Works", "Courses", "Commissions", "Artist JLS", "Photo gallery", "Contact"],
  es: ["Inicio", "Obras", "Cursos", "Encargos", "Artista JLS", "Galería de Fotos", "Contacto"],
  it: ["Home", "Opere", "Corsi", "Commissioni", "Artista JLS", "Galleria fotografica", "Contatto"],
};

export function getNav(locale: Locale | string | undefined) {
  const l = isLocale(locale) ? locale : defaultLocale;
  const labels = navLabels[l];
  const hrefs = ["/", "/catalogo", "/cursos", "/encargos", "/sobre", "/galeria", "/contacto"];
  return hrefs.map((href, i) => ({
    href: href,
    label: labels[i],
  }));
}

export const nav = getNav(defaultLocale);