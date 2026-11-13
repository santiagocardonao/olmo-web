/**
 * Textos de la home en inglés y español.
 * El sitio es el portafolio personal de Santiago (Growth, CRO, AI builder). No vende servicios.
 * Convención: *palabra* = Source Serif 4 cursiva violeta (máx. una por titular).
 */
import type { Lang } from '../config';

type Pillar = { title: string; kind: string; meta: string; href: string; img: 'asesoria' | 'ia' | 'web' | 'mensualidad' };
type Card = { name: string; tag: string; figure: string; alt: string; href: string };
type LegacyService = { word: string; support: string; href: string; img: string; alt: string };

export interface HomeText {
  meta: { title: string; description: string; ogTitle: string; ogDescription: string; ogAlt: string };
  ui: {
    skip: string; logoLabel: string; logoName: string; nav: string[]; langLabel: string;
    cta: string; ctaLabel: string; menuOpen: string; menuClose: string; menuItems: string[]; newTab: string; closed: string;
  };
  hero: {
    eyebrow: string; h1: string; sub: string;
    stats: { v: string; k: string }[]; press: string;
    primary: string; secondary: string;
    linkedinLabel: string; githubLabel: string;
  };
  clients: { label: string; aria: string };
  big: { h2: string; body: string; steps: { t: string; d: string }[]; button: string };
  services: {
    left: string; aria: string;
    /** Pilares de la home (sin precios). */
    offer: Pillar[];
    marquee: string[];
    /** Solo para la página de precios (/advisory), que se comparte por link directo. */
    items: LegacyService[];
  };
  work: {
    line1: string; line2: string; cursor: string; button: string; source: string;
    viewCase: string; cards: Card[];
  };
  about: {
    label: string; title: string; body: string; intent: string; button: string;
    milestones: { date: string; place: string; role: string }[];
    stackLabel: string; stack: string[];
    langLabel: string; langs: { n: string; l: string }[];
    linkedin: string; photoAlt: string;
  };
  footer: {
    eyebrow: string; title: string; button: string; pills: string[]; tools: string;
    emailLabel: string; city: string; inCity: string;
    colPages: string; colElsewhere: string; colHello: string; toTop: string; copyright: string;
  };
}

const en: HomeText = {
  meta: {
    title: 'Santiago Cardona · Growth Marketer, CRO & AI Builder',
    description:
      'Growth and conversion lead with 8 years of subscription launches, checkout CRO and AI tools I build myself with Claude and Supabase. Remote from Medellín, Colombia.',
    ogTitle: 'Santiago Cardona · Growth Marketer, CRO & AI Builder',
    ogDescription:
      'USD 800k in one subscription launch, conversion from 3% to 4%, and AI products shipped end to end. Open to full-time remote roles.',
    ogAlt: 'Santiago Cardona · Growth Marketer, CRO & AI Builder',
  },
  ui: {
    skip: 'Skip to content',
    closed: 'Open to full-time remote roles · Growth, CRO & AI · Based in Medellín, Colombia (UTC-5)',
    logoLabel: 'Santiago Cardona, go to home',
    logoName: 'Santiago Cardona',
    nav: ['Work', 'AI builds', 'About', 'Contact'],
    langLabel: 'Switch to Spanish',
    cta: 'Email me',
    ctaLabel: 'Email Santiago Cardona',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    menuItems: ['Work', 'AI builds', 'About', 'Contact'],
    newTab: '(opens in a new tab)',
  },
  hero: {
    eyebrow: 'Santiago Cardona · Growth Marketer, CRO & AI Builder',
    h1: 'I grow subscription and e-commerce revenue, and I build the *funnel* myself.',
    sub: '8 years running launches, checkouts, paywalls and pricing, now shipping AI products with Claude Code and Supabase.',
    stats: [
      { v: 'USD 800k', k: 'in one subscription launch at silBe (internal data)' },
      { v: '3% → 4%', k: 'purchase conversion, silBe launches since Dec 2020 (internal data)' },
      { v: 'USD 29 → 39', k: 'monthly price, with no rise in churn (internal data)' },
    ],
    press: 'Forbes Colombia, 2021: USD 400k and 5,000 subscribers in the first week.',
    primary: 'Email me',
    secondary: 'See my work',
    linkedinLabel: 'Santiago Cardona on LinkedIn (opens in a new tab)',
    githubLabel: 'Santiago Cardona on GitHub (opens in a new tab)',
  },
  clients: { label: "Brands I've grown or built for since 2017:", aria: 'Brands I have worked with' },
  big: {
    h2: 'I experiment before I assume it will work.',
    body: 'Every change starts as a hypothesis with a number attached. I set up the tracking, test, read the result and keep what wins.\nCuriosity is what separates someone good from someone excellent.',
    steps: [
      { t: 'Hypothesis', d: 'Where the funnel leaks and what should move.' },
      { t: 'Experiment', d: 'A/B test or staged rollout on real buyers.' },
      { t: 'Instrumentation', d: 'GA4, GTM and PostHog events before launch.' },
      { t: 'Decision', d: 'Ship the winner, write down why.' },
    ],
    button: 'Read the silBe case',
  },
  services: {
    left: 'What I do',
    aria: 'What I do',
    offer: [
      { title: 'Growth marketing', kind: 'Launches, lifecycle and paid strategy', meta: 'USD 800k launch at silBe', href: 'silbe', img: 'mensualidad' },
      { title: 'CRO', kind: 'Checkout, paywall, pricing and A/B tests', meta: 'Conversion 3% → 4%', href: 'silbe', img: 'asesoria' },
      { title: 'AI building', kind: 'Products shipped with Claude Code and Supabase', meta: 'Olmo Cotiza, live', href: 'pfCotiza', img: 'ia' },
      { title: 'Web performance', kind: 'Speed, tracking and site architecture', meta: '−60% load time at Ideal Team', href: 'idealTeam', img: 'web' },
    ],
    marquee: ['Open to full-time remote roles', 'Growth · CRO · AI Builder'],
    items: [
      { word: 'Advisory', support: 'Monthly advisory: WhatsApp every day and a 1-hour meeting every week.', href: 'advisory', img: 'santiago', alt: 'Santiago Cardona in a meeting with his laptop open' },
      { word: 'Funnels', support: 'A funnel is the path from first visit to payment: waitlist, landing page, checkout, emails and automations. At silBe, conversion went from 3% to 4%.', href: 'advisory#funnels', img: 'funnel', alt: 'Funnel diagram: waitlist, landing page, checkout, email and automation' },
      { word: 'Product', support: 'From first version to app: sign-up, paywall, plans and free trial.', href: 'advisory#product', img: 'steady', alt: 'The Steady app open on a phone' },
      { word: 'Systems', support: 'I connect your platforms so data goes in once. At Undergold: 14+ hours a week saved.', href: 'advisory#systems', img: 'systems', alt: 'Diagram of the Shopify, Supabase and Vercel setup' },
      { word: 'Web', support: 'Speed, mobile loading, Google rankings (SEO) and migrations. At Ideal Team: load times cut by 60%.', href: 'advisory#web', img: 'speed', alt: 'Before-and-after speed comparison: 60% shorter load time' },
    ],
  },
  work: {
    line1: 'Work *with numbers*',
    line2: 'and my role in it',
    cursor: 'View case',
    button: 'See all work',
    source: 'silBe first-week figure: Forbes Colombia, Feb 7, 2021',
    viewCase: 'View case',
    cards: [
      { name: 'silBe by Silvy', tag: 'Growth & CRO lead · Subscription fitness', figure: 'USD 800k launch · conversion 3% → 4%', alt: 'Screenshots of the silBe app and website', href: 'silbe' },
      { name: 'Olmo Cotiza', tag: 'AI product I built · Claude + Supabase', figure: '30+ real proposals, 45 min saved on each', alt: 'Olmo Cotiza proposal screen', href: 'pfCotiza' },
      { name: 'ILMIN', tag: 'Marketing & e-commerce lead · Fragrance', figure: '+25% digital sales vs the prior 3 months (Shopify data)', alt: 'ILMIN perfume, from its online store', href: 'pfIlmin' },
      { name: 'Undergold', tag: 'B2B automation · Fashion', figure: '14+ hours a week saved', alt: 'Illustrative recreation of the Undergold B2B catalog', href: 'undergold' },
      { name: 'Ideal Team', tag: 'Web performance · 14 sites', figure: 'Load times cut by 60%', alt: 'Grid of websites with their performance dashboard', href: 'idealTeam' },
    ],
  },
  about: {
    label: 'About',
    title: 'Founder habits, now looking for an *in-house* team.',
    body: "I'm Santiago Cardona Ortiz. From 2020 to June 2026 I led growth, tech and conversion for silBe by Silvy, reporting results to its founder and working with her team and FitBudd's developers. From 2017 to 2025 I co-founded Vieli and ran operations as COO for a 30-person studio, with 100+ projects that all came from referrals. I taught UX/UI at CESDE for six years.",
    intent: 'Vieli closed in 2025. Now I want to own a growth or CRO number inside a product team, full time.',
    button: 'More about me',
    milestones: [
      { date: '2020–2026', place: 'silBe by Silvy', role: 'Growth, tech & conversion lead.' },
      { date: '2017–2025', place: 'Vieli', role: 'Co-founder & COO. 30 people, 100+ projects.' },
      { date: 'Since 2025', place: 'Olmo', role: 'My lab for AI tools: Cotiza, Métricas.' },
      { date: '6 years', place: 'CESDE', role: 'UX/UI instructor.' },
    ],
    langLabel: 'Languages',
    langs: [{ n: 'Spanish', l: 'Native' }, { n: 'English', l: 'Professional working proficiency' }, { n: 'Portuguese', l: 'Conversational' }],
    stackLabel: 'Stack',
    stack: ['Claude Code', 'Supabase · SQL', 'Shopify', 'Figma · Framer', 'Adobe Illustrator', 'GA4 · GTM', 'PostHog', 'Klaviyo · Mailchimp · Kit', 'Meta & Google Ads strategy'],
    linkedin: 'LinkedIn',
    photoAlt: 'Portrait of Santiago Cardona Ortiz',
  },
  footer: {
    eyebrow: 'Open to full-time remote roles',
    title: 'Hiring for growth, CRO or a *product builder*?',
    button: 'Email me',
    pills: ['Work', 'AI builds', 'About', 'Terms', 'Privacy'],
    tools: 'AI tools I built →',
    emailLabel: 'Email',
    city: 'Medellín, Colombia · UTC-5',
    inCity: 'in Medellín',
    colPages: 'Pages',
    colElsewhere: 'Elsewhere',
    colHello: 'Say hello',
    toTop: 'Back to top',
    copyright: '© 2026 Santiago Cardona Ortiz · Olmo',
  },
};

const es: HomeText = {
  meta: {
    title: 'Santiago Cardona · Growth Marketing, CRO y AI Builder',
    description:
      'Lidero growth y conversión: 8 años de lanzamientos por suscripción, CRO de checkout y herramientas de IA que construyo yo con Claude y Supabase. Remoto desde Medellín.',
    ogTitle: 'Santiago Cardona · Growth Marketing, CRO y AI Builder',
    ogDescription:
      'USD 800k en un lanzamiento por suscripción, conversión de 3 % a 4 % y productos de IA de principio a fin. Abierto a roles remotos de tiempo completo.',
    ogAlt: 'Santiago Cardona · Growth Marketing, CRO y AI Builder',
  },
  ui: {
    skip: 'Saltar al contenido',
    closed: 'Abierto a roles remotos de tiempo completo · Growth, CRO e IA · Desde Medellín, Colombia (UTC-5)',
    logoLabel: 'Santiago Cardona, ir al inicio',
    logoName: 'Santiago Cardona',
    nav: ['Trabajo', 'IA', 'Sobre mí', 'Contacto'],
    langLabel: 'Cambiar a inglés',
    cta: 'Escríbeme',
    ctaLabel: 'Escribirle un correo a Santiago Cardona',
    menuOpen: 'Abrir menú',
    menuClose: 'Cerrar menú',
    menuItems: ['Trabajo', 'IA', 'Sobre mí', 'Contacto'],
    newTab: '(se abre en otra pestaña)',
  },
  hero: {
    eyebrow: 'Santiago Cardona · Growth Marketing, CRO y AI Builder',
    h1: 'Hago crecer ventas por suscripción y e-commerce, y el *funnel* lo construyo yo.',
    sub: '8 años con lanzamientos, checkouts, paywalls y precios. Hoy también lanzo productos de IA con Claude Code y Supabase.',
    stats: [
      { v: 'USD 800k', k: 'en un lanzamiento por suscripción en silBe (dato interno)' },
      { v: '3 % → 4 %', k: 'de conversión a compra, lanzamientos de silBe desde dic. 2020 (dato interno)' },
      { v: 'USD 29 → 39', k: 'de precio mensual, sin subir la cancelación (dato interno)' },
    ],
    press: 'Forbes Colombia, 2021: USD 400k y 5.000 suscriptores en la primera semana.',
    primary: 'Escríbeme',
    secondary: 'Ver mi trabajo',
    linkedinLabel: 'LinkedIn de Santiago Cardona (se abre en otra pestaña)',
    githubLabel: 'GitHub de Santiago Cardona (se abre en otra pestaña)',
  },
  clients: { label: 'Marcas que he hecho crecer o para las que he construido desde 2017:', aria: 'Marcas con las que he trabajado' },
  big: {
    h2: 'Experimento antes de suponer que funcionará.',
    body: 'Cada cambio empieza como una hipótesis o con un número. Monto la medición, testeo, leo el resultado y me quedo con lo que gana.\nLa curiosidad hace la diferencia entre alguien bueno y alguien excelente.',
    steps: [
      { t: 'Hipótesis', d: 'Dónde se pierde la venta y qué debería moverse.' },
      { t: 'Experimento', d: 'Prueba A/B o lanzamiento por etapas con compradores reales.' },
      { t: 'Medición', d: 'Eventos en GA4, GTM y PostHog antes de lanzar.' },
      { t: 'Decisión', d: 'Sale lo que gana, y anoto por qué.' },
    ],
    button: 'Leer el caso de silBe',
  },
  services: {
    left: 'Lo que hago',
    aria: 'Lo que hago',
    offer: [
      { title: 'Growth marketing', kind: 'Lanzamientos, lifecycle y estrategia de pauta', meta: 'Lanzamiento de USD 800k en silBe', href: 'silbe', img: 'mensualidad' },
      { title: 'CRO', kind: 'Checkout, paywall, precios y pruebas A/B', meta: 'Conversión de 3 % a 4 %', href: 'silbe', img: 'asesoria' },
      { title: 'Productos con IA', kind: 'Hechos con Claude Code y Supabase', meta: 'Olmo Cotiza, en producción', href: 'pfCotiza', img: 'ia' },
      { title: 'Rendimiento web', kind: 'Velocidad, medición y arquitectura', meta: '−60 % de carga en Ideal Team', href: 'idealTeam', img: 'web' },
    ],
    marquee: ['Abierto a roles remotos de tiempo completo', 'Growth · CRO · AI Builder'],
    items: [
      { word: 'Asesoría', support: 'Mensualidad: WhatsApp todos los días y una reunión de 1 h cada semana.', href: 'advisory', img: 'santiago', alt: 'Santiago Cardona en una reunión con el portátil abierto' },
      { word: 'Funnels', support: 'El funnel es el camino de la primera visita al pago: preregistro, landing, checkout, correos y automatizaciones. En silBe la conversión pasó de 3 % a 4 %.', href: 'advisory#funnels', img: 'funnel', alt: 'Diagrama de un funnel: preregistro, landing, checkout, correo y automatización' },
      { word: 'Producto', support: 'De la primera versión a la app: registro, pantalla de pago, planes y prueba gratis.', href: 'advisory#producto', img: 'steady', alt: 'App Steady abierta en un celular' },
      { word: 'Sistemas', support: 'Conecto tus plataformas para que los datos se suban una sola vez. En Undergold: más de 14 h a la semana ahorradas.', href: 'advisory#sistemas', img: 'systems', alt: 'Diagrama de la conexión entre Shopify, Supabase y Vercel' },
      { word: 'Web', support: 'Velocidad, carga en celular, posicionamiento en Google (SEO) y migraciones. En Ideal Team: −60 % en tiempo de carga.', href: 'advisory#web', img: 'speed', alt: 'Comparación de velocidad antes y después: 60 % menos tiempo de carga' },
    ],
  },
  work: {
    line1: 'Trabajo *con cifras*',
    line2: 'y lo que hice yo',
    cursor: 'Ver caso',
    button: 'Ver todo el trabajo',
    source: 'Cifra de la primera semana de silBe: Forbes Colombia, 7 de febrero de 2021',
    viewCase: 'Ver caso',
    cards: [
      { name: 'silBe by Silvy', tag: 'Líder de growth y CRO · Suscripción fitness', figure: 'Lanzamiento de USD 800k · conversión de 3 % a 4 %', alt: 'Capturas de la app y el sitio web de silBe', href: 'silbe' },
      { name: 'Olmo Cotiza', tag: 'Producto de IA que hice · Claude + Supabase', figure: 'Más de 30 propuestas reales, 45 min menos en cada una', alt: 'Pantalla de una propuesta en Olmo Cotiza', href: 'pfCotiza' },
      { name: 'ILMIN', tag: 'Marketing y e-commerce · Perfumería', figure: '+25 % en ventas digitales frente a los 3 meses anteriores (datos de Shopify)', alt: 'Perfume de ILMIN, foto de su tienda online', href: 'pfIlmin' },
      { name: 'Undergold', tag: 'Automatización B2B · Moda', figure: 'Más de 14 h a la semana ahorradas', alt: 'Recreación ilustrativa del catálogo B2B de Undergold', href: 'undergold' },
      { name: 'Ideal Team', tag: 'Rendimiento web · 14 sitios', figure: '−60 % en tiempo de carga', alt: 'Mosaico de sitios web con su tablero de rendimiento', href: 'idealTeam' },
    ],
  },
  about: {
    label: 'Sobre mí',
    title: 'Hábitos de fundador, buscando un equipo *in-house*.',
    body: 'Soy Santiago Cardona Ortiz. De 2020 a junio de 2026 lideré growth, tecnología y conversión en silBe by Silvy: le reportaba los resultados a la fundadora y trabajaba con su equipo y con los desarrolladores de FitBudd. Entre 2017 y 2025 cofundé Vieli y dirigí la operación como COO de un estudio de 30 personas, con más de 100 proyectos que llegaron por referidos. Fui docente de UX/UI en CESDE durante seis años.',
    intent: 'Vieli cerró en 2025. Ahora quiero hacerme cargo de una métrica de growth o de CRO dentro de un equipo de producto, de tiempo completo.',
    button: 'Más sobre mí',
    milestones: [
      { date: '2020–2026', place: 'silBe by Silvy', role: 'Líder de growth, tecnología y conversión.' },
      { date: '2017–2025', place: 'Vieli', role: 'Cofundador y COO. 30 personas, 100+ proyectos.' },
      { date: 'Desde 2025', place: 'Olmo', role: 'Mi laboratorio de herramientas de IA: Cotiza, Métricas.' },
      { date: '6 años', place: 'CESDE', role: 'Docente de UX/UI.' },
    ],
    langLabel: 'Idiomas',
    langs: [{ n: 'Español', l: 'Nativo' }, { n: 'Inglés', l: 'Competencia profesional' }, { n: 'Portugués', l: 'Conversacional' }],
    stackLabel: 'Herramientas',
    stack: ['Claude Code', 'Supabase · SQL', 'Shopify', 'Figma · Framer', 'Adobe Illustrator', 'GA4 · GTM', 'PostHog', 'Klaviyo · Mailchimp · Kit', 'Estrategia en Meta y Google Ads'],
    linkedin: 'LinkedIn',
    photoAlt: 'Retrato de Santiago Cardona Ortiz',
  },
  footer: {
    eyebrow: 'Abierto a roles remotos de tiempo completo',
    title: '¿Buscas a alguien para growth, CRO o *producto*?',
    button: 'Escríbeme',
    pills: ['Trabajo', 'IA', 'Sobre mí', 'Términos', 'Privacidad'],
    tools: 'Herramientas de IA que hice →',
    emailLabel: 'Correo',
    city: 'Medellín, Colombia · UTC-5',
    inCity: 'en Medellín',
    colPages: 'Páginas',
    colElsewhere: 'En otros sitios',
    colHello: 'Escríbeme',
    toTop: 'Volver arriba',
    copyright: '© 2026 Santiago Cardona Ortiz · Olmo',
  },
};

export const HOME: Record<Lang, HomeText> = { es, en };
