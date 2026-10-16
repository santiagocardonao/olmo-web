// Configuración global del sitio de Olmo.
// Los textos viven en src/i18n/. Aquí solo van datos y banderas.

export type Lang = 'es' | 'en';

/** true = sitio de pruebas: noindex + robots.txt con Disallow: /. En olmo.agency va en false. */
export const NOINDEX = (import.meta.env.PUBLIC_NOINDEX ?? 'false') === 'true';

/** Contenedor de Google Tag Manager. GA4 se configura dentro de GTM, no en el código. Vacío = no se imprime. */
export const GTM_ID: string = (import.meta.env.PUBLIC_GTM_ID ?? 'GTM-NF997GFC').trim();

export const WHATSAPP_NUMBER = '573193326821';
export const WHATSAPP_DISPLAY = '+57 319 332 68 21';
export const EMAIL = 'hola@olmo.agency';

export const LINKS = {
  linkedin: 'https://www.linkedin.com/in/scardonaortiz',
  github: 'https://github.com/santiagocardonao',
  behance: 'https://www.behance.net/santiagcardona14',
  forbes:
    'https://forbes.co/2021/02/07/forbes-life/10-influencers-fit/los-10-influencers-fit-de-forbes-silvana-araujo/',
};

/** Catálogo de mensajes precargados (13_textos_es_en/home.md §9). */
export const WA_MESSAGES: Record<Lang, Record<'WA1' | 'WA2' | 'WA3' | 'WA4' | 'WA5' | 'WA6', string>> = {
  es: {
    WA1: 'Hola, Santiago. Mi marca es ___ y quiero contarte qué está pasando: ___.',
    WA2: 'Hola, Santiago. Me interesa la asesoría mensual. Mi marca es ___. ¿Podemos ver si encaja?',
    WA3: 'Hola, Santiago. Quiero reservar una hora suelta. El tema es ___.',
    WA4: 'Hola, Santiago. Quiero cotizar un proyecto cerrado. En pocas palabras: ___.',
    WA5: 'Hola, Santiago. Vi tu web y quiero contarte qué está pasando con mi marca.',
    WA6: 'Hola, Santiago. Necesito ayuda con ___ y vi que no lo haces. ¿A quién me recomiendas?',
  },
  en: {
    WA1: "Hi Santiago, my brand is ___ and I'd like to tell you what's going on: ___.",
    WA2: "Hi Santiago, I'm interested in the monthly advisory. My brand is ___. Can we see if it's a fit?",
    WA3: "Hi Santiago, I'd like to book a single hour. The topic is ___.",
    WA4: "Hi Santiago, I'd like a quote for a fixed project. In short: ___.",
    WA5: "Hi Santiago, I saw your website and want to tell you what's going on with my brand.",
    WA6: "Hi Santiago, I need help with ___ and saw it's not something you do. Who would you recommend?",
  },
};

export type WaId = keyof (typeof WA_MESSAGES)['es'];

export function wa(lang: Lang, id: WaId): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WA_MESSAGES[lang][id])}`;
}
