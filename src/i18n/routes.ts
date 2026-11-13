import type { Lang } from '../config';

/**
 * Tabla de equivalencias ES ↔ EN (08_PLAN_MAESTRO.md §11).
 * La clave es un id interno; el selector de idioma y los hreflang salen de aquí.
 */
export const ROUTES = {
  home: { es: '/es/', en: '/' },
  advisory: { es: '/es/asesoria/', en: '/advisory/' },
  monthly: { es: '/es/mensualidad/', en: '/monthly/' },
  silbe: { es: '/es/portafolio/silbe/', en: '/portfolio/silbe/' },
  radhi: { es: '/es/portafolio/radhi-yoga/', en: '/portfolio/radhi-yoga/' },
  undergold: { es: '/es/portafolio/undergold/', en: '/portfolio/undergold/' },
  idealTeam: { es: '/es/portafolio/ideal-team/', en: '/portfolio/ideal-team/' },
  portfolio: { es: '/es/portafolio/', en: '/portfolio/' },
  pfIlmin: { es: '/es/portafolio/ilmin/', en: '/portfolio/ilmin/' },
  pfMetricas: { es: '/es/portafolio/olmo-metricas/', en: '/portfolio/olmo-metricas/' },
  pfCotiza: { es: '/es/portafolio/olmo-cotiza/', en: '/portfolio/olmo-cotiza/' },
  pfEspanol: { es: '/es/portafolio/espanol-natural/', en: '/portfolio/espanol-natural/' },
  pfDsa: { es: '/es/portafolio/design-system-adherence/', en: '/portfolio/design-system-adherence/' },
  tools: { es: '/es/herramientas/', en: '/tools/' },
  press: { es: '/es/prensa/', en: '/press/' },
  about: { es: '/es/sobre-mi/', en: '/about/' },
  terms: { es: '/es/terminos/', en: '/terms/' },
  privacy: { es: '/es/privacidad/', en: '/privacy/' },
} as const satisfies Record<string, Record<Lang, string>>;

export type RouteId = keyof typeof ROUTES;

/** Páginas de precios: viven por link directo, fuera de menú, sitemap y Google. */
export const HIDDEN_ROUTES: RouteId[] = ['advisory', 'monthly'];

export const r = (id: RouteId, lang: Lang) => ROUTES[id][lang];

/** Ancla del bloque de contacto (está en el pie de todas las páginas). */
export const CONTACT_ANCHOR = { es: '#contacto', en: '#contact' } as const;

/** Anclas de servicios en /asesoria (ES) y /en/advisory (EN). */
export const SERVICE_ANCHORS = {
  es: { funnels: 'funnels', product: 'producto', systems: 'sistemas', web: 'web' },
  en: { funnels: 'funnels', product: 'product', systems: 'systems', web: 'web' },
} as const;
