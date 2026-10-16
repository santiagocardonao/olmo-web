import type { Lang } from '../config';

/**
 * Tabla de equivalencias ES ↔ EN (08_PLAN_MAESTRO.md §11).
 * La clave es un id interno; el selector de idioma y los hreflang salen de aquí.
 */
export const ROUTES = {
  home: { es: '/', en: '/en/' },
  advisory: { es: '/asesoria/', en: '/en/advisory/' },
  monthly: { es: '/mensualidad/', en: '/en/monthly/' },
  silbe: { es: '/portafolio/silbe/', en: '/en/portfolio/silbe/' },
  undergold: { es: '/portafolio/undergold/', en: '/en/portfolio/undergold/' },
  idealTeam: { es: '/portafolio/ideal-team/', en: '/en/portfolio/ideal-team/' },
  portfolio: { es: '/portafolio/', en: '/en/portfolio/' },
  pfBalparaiso: { es: '/portafolio/balparaiso/', en: '/en/portfolio/balparaiso/' },
  pfMiaplus: { es: '/portafolio/mia-plus/', en: '/en/portfolio/mia-plus/' },
  pfZafiro: { es: '/portafolio/zafiro/', en: '/en/portfolio/zafiro/' },
  pfVieli: { es: '/portafolio/vieli/', en: '/en/portfolio/vieli/' },
  pfSarabe: { es: '/portafolio/sarabe/', en: '/en/portfolio/sarabe/' },
  pfIlmin: { es: '/portafolio/ilmin/', en: '/en/portfolio/ilmin/' },
  pfItaca: { es: '/portafolio/itaca/', en: '/en/portfolio/itaca/' },
  pfMetricas: { es: '/portafolio/olmo-metricas/', en: '/en/portfolio/olmo-metricas/' },
  pfCotiza: { es: '/portafolio/olmo-cotiza/', en: '/en/portfolio/olmo-cotiza/' },
  pfEspanol: { es: '/portafolio/espanol-natural/', en: '/en/portfolio/espanol-natural/' },
  pfDsa: { es: '/portafolio/design-system-adherence/', en: '/en/portfolio/design-system-adherence/' },
  tools: { es: '/herramientas/', en: '/en/tools/' },
  about: { es: '/sobre-mi/', en: '/en/about/' },
  terms: { es: '/terminos/', en: '/en/terms/' },
  privacy: { es: '/privacidad/', en: '/en/privacy/' },
} as const satisfies Record<string, Record<Lang, string>>;

export type RouteId = keyof typeof ROUTES;

export const r = (id: RouteId, lang: Lang) => ROUTES[id][lang];

/** Ancla de la sección de servicios ("Lo que hago") en la home. */
export const SERVICES_ANCHOR = { es: '/#servicios', en: '/en/#services' } as const;

/** Anclas de servicios en /asesoria (ES) y /en/advisory (EN). */
export const SERVICE_ANCHORS = {
  es: { funnels: 'funnels', product: 'producto', systems: 'sistemas', web: 'web' },
  en: { funnels: 'funnels', product: 'product', systems: 'systems', web: 'web' },
} as const;
