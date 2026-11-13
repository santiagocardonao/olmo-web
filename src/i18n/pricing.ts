/**
 * Precios y "lo que no hago". Solo los usan las páginas de precios (/advisory, /es/asesoria),
 * que no están en el menú ni en Google y se comparten por link directo.
 */
import type { Lang, WaId } from '../config';

type Row = { name: string; detail: string; amount: string };
export interface PricingText {
  ctaLabel: string;
  pricing: {
    left: string; right: string; title: string; lead: string; aria: string;
    rows: Row[]; total: Row; links: { label: string; wa?: WaId; href?: string }[];
    currencyNote: string; paymentNote: string; legalNote: string; cta: string;
  };
  notDo: {
    left: string; right: string; srPrefix: string;
    items: { word: string; support: string }[]; closing: string; link: string;
  };
}

const es: PricingText = {
  ctaLabel: 'Escríbeme por WhatsApp (se abre en otra pestaña)',
  pricing: {
    left: 'Precios',
    right: '( COP · USD )',
    title: 'Precios *a la vista*.',
    lead: 'Publico lo que cobro para que sepas cuánto cuesta antes de escribirme.',
    aria: 'Precios de Olmo',
    rows: [
      { name: 'Asesoría mensual', detail: 'WhatsApp todos los días y 4 reuniones de 1 h al mes.', amount: 'COP 1.900.000 · USD 700 / mes' },
      { name: 'Hora adicional', detail: 'Para clientes con asesoría mensual.', amount: 'COP 160.000 · USD 60' },
      { name: 'Hora suelta', detail: 'Sin mensualidad, para resolver algo puntual.', amount: 'COP 320.000 · USD 100' },
      { name: 'Proyecto cerrado', detail: 'Cuando me encargas el proyecto completo.', amount: 'Cotización a la medida' },
    ],
    total: { name: 'Para empezar', detail: 'Una hora suelta', amount: 'COP 320.000 · USD 100' },
    cta: 'Escríbeme por WhatsApp',
    links: [
      { label: 'Preguntar por la asesoría', wa: 'WA2' },
      { label: 'Reservar una hora suelta', wa: 'WA3' },
      { label: 'Cotizar un proyecto', wa: 'WA4' },
      { label: 'Ver qué incluye cada opción →', href: 'advisory' },
    ],
    currencyNote: 'Precios en pesos para Colombia y en dólares para clientes del exterior.',
    paymentNote: 'El pago se coordina por WhatsApp.',
    legalNote: 'No cobro IVA. Sin permanencia mínima. 50 % de anticipo.',
  },
  notDo: {
    left: 'Lo que no hago',
    right: '( 4 )',
    srPrefix: 'No hago:',
    items: [
      { word: 'Redes sociales', support: 'Publicar y responder en tus redes.' },
      { word: 'Pauta / Ads', support: 'Montar y vigilar anuncios en el día a día.' },
      { word: 'Branding', support: 'Identidad visual desde cero.' },
      { word: 'Sitios en WordPress', support: 'Soporte mensual de WordPress. La velocidad y las migraciones sí las hago.' },
    ],
    closing: 'Te digo qué comprar, aunque no sea algo que yo haga. Y si necesitas algo de esta lista, te recomiendo a alguien que sí lo haga.',
    link: 'Pregúntame a quién llamar',
  },
};

const en: PricingText = {
  ctaLabel: 'Message me on WhatsApp (opens in a new tab)',
  pricing: {
    left: 'Pricing',
    right: '( USD )',
    title: 'Prices, *upfront*.',
    lead: 'My prices are public, so you know the cost before you message me.',
    aria: 'Olmo pricing',
    rows: [
      { name: 'Monthly advisory', detail: 'WhatsApp every day and four 1-hour meetings a month.', amount: 'USD 700 / month' },
      { name: 'Extra hour', detail: 'For monthly advisory clients.', amount: 'USD 60' },
      { name: 'Single hour', detail: 'Without monthly advisory, for a one-off question.', amount: 'USD 100' },
      { name: 'Fixed project', detail: 'When you hand me the whole project.', amount: 'Custom quote' },
    ],
    total: { name: 'To start', detail: 'A single hour', amount: 'USD 100' },
    cta: 'Message me on WhatsApp',
    links: [
      { label: 'Ask about advisory', wa: 'WA2' },
      { label: 'Book a single hour', wa: 'WA3' },
      { label: 'Get a project quote', wa: 'WA4' },
      { label: 'See what each option includes →', href: 'advisory' },
    ],
    currencyNote: 'Prices in US dollars. Clients in Colombia pay in pesos.',
    paymentNote: 'Payment is arranged over WhatsApp.',
    legalNote: 'No VAT charged. No minimum term. 50% upfront.',
  },
  notDo: {
    left: "What I don't do",
    right: '( 4 )',
    srPrefix: "I don't do:",
    items: [
      { word: 'Social media', support: 'Posting and replying on your social accounts.' },
      { word: 'Paid ads', support: 'Setting up and watching ads day to day.' },
      { word: 'Branding', support: 'Visual identity from scratch.' },
      { word: 'WordPress websites', support: 'Monthly WordPress support. Speed fixes and migrations, yes.' },
    ],
    closing: "I'll tell you what to buy, even when it isn't something I do. And if you need something on this list, I'll point you to someone who does it.",
    link: 'Ask me who to call',
  },
};

export const PRICING: Record<Lang, PricingText> = { es, en };
