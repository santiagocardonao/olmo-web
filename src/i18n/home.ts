/**
 * Textos de la home, tomados LITERAL de 13_textos_es_en/home.md
 * (el bloque "Ajustes aprobados" y la ronda 9 de 06 mandan).
 * Convención: *palabra* = Source Serif 4 cursiva violeta (máx. una por titular).
 */
import type { Lang, WaId } from '../config';

type Service = { word: string; support: string; href: string; img: string; alt: string };
type Card = { name: string; tag: string; figure: string; alt: string; href: string; note?: string };
type Row = { name: string; detail: string; amount: string };

export interface HomeText {
  meta: { title: string; description: string; ogTitle: string; ogDescription: string; ogAlt: string };
  ui: {
    skip: string; logoLabel: string; nav: string[]; langLabel: string; cta: string; ctaLabel: string; waCta: string; waCtaLabel: string;
    menuOpen: string; menuClose: string; menuItems: string[]; newTab: string;
  };
  hero: {
    h1: string; sub: string; primary: string; secondary: string; secondaryHref: string;
    linkedinLabel: string; githubLabel: string;
  };
  clients: { label: string; aria: string };
  big: { h2: string; body: string; button: string; footer: string };
  services: {
    left: string; right: string; aria: string; button: string; items: Service[];
    /** Sección de la home: 4 productos con foto de fondo. `items` sigue alimentando la página de asesoría. */
    offer: { title: string; kind: string; meta: string; href: string; img: 'asesoria' | 'ia' | 'web' | 'mensualidad' }[];
    marquee: string[];
  };
  work: {
    line1: string; line2: string; cursor: string; button: string; source: string;
    illustrative: string; viewCase: string; cards: Card[];
  };
  pricing: {
    left: string; right: string; title: string; lead: string; aria: string;
    rows: Row[]; total: Row; links: { label: string; wa?: WaId; href?: string }[];
    currencyNote: string; paymentNote: string; legalNote: string; cta: string;
  };
  about: {
    label: string; title: string; body: string; button: string;
    milestones: { date: string; place: string; role: string }[];
    cv: string; cvLabel: string; cvPending: string; linkedin: string; photoAlt: string;
  };
  notDo: {
    left: string; right: string; srPrefix: string;
    items: { word: string; support: string }[]; closing: string; link: string;
  };
  footer: {
    eyebrow: string; title: string; button: string; pills: string[]; tools: string;
    emailLabel: string; whatsapp: string; city: string; inCity: string; bigWord: string;
    bigLabel: string; copyright: string;
  };
}

const es: HomeText = {
  meta: {
    title: 'Olmo · Asesoría para marcas estancadas | Santiago Cardona',
    description:
      'Tu marca vende, pero dejó de crecer. Trabajo con tu equipo hasta que se note en ventas, conversión o tiempo. Escríbeme por WhatsApp.',
    ogTitle: 'Tu marca vende. ¿Se estancó?',
    ogDescription:
      'Asesoría de Santiago Cardona para marcas que ya venden online y dejaron de crecer. Medellín, Colombia.',
    ogAlt: 'Olmo: Tu marca vende. ¿Se estancó?',
  },
  ui: {
    skip: 'Saltar al contenido',
    logoLabel: 'olmo, ir al inicio',
    nav: ['Servicios', 'Portafolio', 'Herramientas', 'Sobre mí'],
    langLabel: 'Cambiar a inglés',
    cta: 'Escríbeme por WhatsApp',
    ctaLabel: 'Escríbeme por WhatsApp (se abre en otra pestaña)',
    waCta: 'Escríbeme',
    waCtaLabel: 'Escríbeme por WhatsApp (se abre en otra pestaña)',
    menuOpen: 'Abrir menú',
    menuClose: 'Cerrar menú',
    menuItems: ['Servicios', 'Portafolio', 'Herramientas', 'Sobre mí'],
    newTab: '(se abre en otra pestaña)',
  },
  hero: {
    h1: 'Tu marca vende. ¿Se *estancó*?',
    sub: 'Asesoro marcas que ya venden online y dejaron de crecer. Entro a trabajar con tu equipo, encuentro dónde se frena la venta y me quedo hasta que se note en conversión, ventas o tiempo.',
    primary: 'Ver servicios',
    secondary: 'Ver portafolio',
    secondaryHref: '/portafolio/',
    linkedinLabel: 'LinkedIn de Santiago Cardona (se abre en otra pestaña)',
    githubLabel: 'GitHub de Santiago Cardona (se abre en otra pestaña)',
  },
  clients: { label: 'Desde 2017 trabajando con:', aria: 'Marcas con las que he trabajado' },
  big: {
    h2: 'No desaparezco dos semanas para volver con un *entregable*.',
    body: 'Trabajo dentro de tu equipo, con todas las áreas, para encontrar dónde se frena la venta. Y me quedo hasta que el cambio se note en la conversión (cuántas visitas terminan comprando), en las ventas o en las horas que tu equipo se ahorra.',
    button: 'Cómo trabajo',
    footer: 'Cómo trabajo',
  },
  services: {
    left: 'Lo que hago',
    right: '( 5 )',
    aria: 'Servicios',
    offer: [
      { title: 'Asesoría & Consultoría', kind: 'Estrategia y acompañamiento', meta: 'Desde COP 320.000 la hora', href: 'advisory', img: 'asesoria' },
      { title: 'IA & Automatización', kind: 'Agentes, flujos y datos', meta: '+14 h a la semana en Undergold', href: 'advisory#sistemas', img: 'ia' },
      { title: 'Web & Apps', kind: 'Sitios, tiendas y apps', meta: '−60 % de carga en Ideal Team', href: 'portfolio', img: 'web' },
      { title: 'Mensualidad', kind: 'WhatsApp diario y 1 h semanal', meta: 'COP 1.900.000 · USD 700 / mes', href: 'monthly', img: 'mensualidad' },
    ],
    marquee: ['Escríbeme por WhatsApp', 'Disponible para nuevos proyectos'],
    button: 'Ver precios y cómo trabajo',
    items: [
      { word: 'Asesoría', support: 'Mensualidad: WhatsApp todos los días y una reunión de 1 h cada semana.', href: 'advisory', img: 'santiago', alt: 'Santiago Cardona en una reunión con el portátil abierto' },
      { word: 'Funnels', support: 'El funnel es el camino de la primera visita al pago: preregistro, landing, checkout, correos y automatizaciones. En silBe la conversión pasó de 3 % a 4 %.', href: 'advisory#funnels', img: 'funnel', alt: 'Diagrama de un funnel: preregistro, landing, checkout, correo y automatización' },
      { word: 'Producto', support: 'De la primera versión a la app: registro, pantalla de pago, planes y prueba gratis.', href: 'advisory#producto', img: 'steady', alt: 'App Steady abierta en un celular' },
      { word: 'Sistemas', support: 'Conecto tus plataformas para que los datos se suban una sola vez. En Undergold: más de 14 h a la semana ahorradas.', href: 'advisory#sistemas', img: 'systems', alt: 'Diagrama de la conexión entre Shopify, Supabase y Vercel' },
      { word: 'Web', support: 'Velocidad, carga en celular, posicionamiento en Google (SEO) y migraciones. En Ideal Team: −60 % en tiempo de carga.', href: 'advisory#web', img: 'speed', alt: 'Comparación de velocidad antes y después: 60 % menos tiempo de carga' },
    ],
  },
  work: {
    line1: 'Resultados *con nombre*',
    line2: 'y cifras',
    cursor: 'Ver proyecto',
    button: 'Ver todo el portafolio',
    source: 'Cifra de silBe: Forbes Colombia, 7 de febrero de 2021',
    illustrative: 'Recreación ilustrativa',
    viewCase: 'Ver proyecto',
    cards: [
      { name: 'silBe by Silvy', tag: 'Suscripción fitness', figure: 'USD 400k y 5.000 suscriptores en la primera semana (Forbes, 2021)', alt: 'Capturas de la app y el sitio web de silBe', href: 'silbe' },
      { name: 'Undergold', tag: 'Moda, venta B2B', figure: '+14 h a la semana ahorradas', alt: 'Recreación ilustrativa del catálogo B2B de Undergold', href: 'undergold' },
      { name: 'Ideal Team', tag: 'Agencia, 14 sitios', figure: '−60 % en tiempo de carga', alt: 'Mosaico de sitios web con su tablero de rendimiento', href: 'idealTeam' },
      { name: 'ILMIN', tag: 'Perfumes', figure: '+25 % en ventas digitales en 3 meses', alt: 'Perfume de ILMIN, foto de su tienda online', href: 'pfIlmin' },
      { name: 'SaraBe', tag: 'Escritora y conferencista', figure: 'Una web con un camino de compra para cada servicio', alt: 'Sitio de SaraBe en un portátil y un celular', href: 'pfSarabe' },
    ],
  },
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
      { name: 'Proyecto cerrado', detail: 'Cuando el proyecto completo queda en mis manos.', amount: 'Cotización a la medida' },
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
  about: {
    label: 'Sobre mí',
    title: 'Hablas con quien hace el *trabajo*.',
    body: 'Soy Santiago Cardona Ortiz y trabajo solo, desde Medellín, con marcas de Colombia y del exterior. Entre 2017 y 2025 cofundé Vieli, un estudio de 30 personas, y fui su director de operaciones (COO): hicimos más de 100 proyectos, todos por referidos. Desde 2020 acompaño a silBe. Durante 6 años enseñé UX/UI (diseño de interfaces y experiencia de usuario) en CESDE, y para Bancolombia diseñé FIDI, un prototipo de educación financiera con videos por WhatsApp.',
    button: 'Más sobre mí',
    milestones: [
      { date: '2017–2025', place: 'Vieli', role: 'Cofundador y COO. 30 personas, 100+ proyectos por referidos.' },
      { date: '6 años', place: 'CESDE', role: 'Docente de UX/UI.' },
      { date: 'Desde 2025', place: 'Olmo', role: 'Asesoría independiente.' },
    ],
    cv: 'Descargar CV (en inglés)',
    cvLabel: 'Descargar el CV de Santiago Cardona, en inglés, PDF',
    cvPending: 'Próximamente',
    linkedin: 'LinkedIn',
    photoAlt: 'Retrato de Santiago Cardona Ortiz',
  },
  notDo: {
    left: 'Lo que no hago',
    right: '( 4 )',
    srPrefix: 'No hago:',
    items: [
      { word: 'Manejo de redes', support: 'Publicar y responder en tus redes.' },
      { word: 'Pauta diaria', support: 'Montar y vigilar anuncios todos los días.' },
      { word: 'Logos', support: 'Identidad visual desde cero.' },
      { word: 'Mantener WordPress', support: 'Soporte mensual de WordPress. La velocidad y las migraciones sí las hago.' },
    ],
    closing: 'Te digo qué comprar, aunque no sea lo mío. Y si necesitas algo de esta lista, te digo a quién buscar.',
    link: 'Preguntarme a quién buscar',
  },
  footer: {
    eyebrow: '¿Tu marca se estancó?',
    title: 'Escríbeme antes de que pase otro *trimestre*.',
    button: 'Escríbeme por WhatsApp',
    pills: ['Asesoría', 'Portafolio', 'Herramientas', 'Sobre mí', 'Términos', 'Privacidad'],
    tools: 'Herramientas gratis que hice →',
    emailLabel: '¿Prefieres correo?',
    whatsapp: 'WhatsApp',
    city: 'Medellín, Colombia',
    inCity: 'en Medellín',
    bigWord: 'Hablemos',
    bigLabel: 'Hablemos por WhatsApp (se abre en otra pestaña)',
    copyright: '© 2026 Olmo · Santiago Cardona Ortiz',
  },
};

const en: HomeText = {
  meta: {
    title: 'Olmo · Advisory for brands on a plateau | Santiago Cardona',
    description:
      'Your brand sells, but growth stalled. I work inside your team until it shows in sales, conversion or time saved. Message me on WhatsApp.',
    ogTitle: 'Your brand sells. Has it hit a plateau?',
    ogDescription:
      'Advisory by Santiago Cardona for brands that already sell online and have stopped growing. Medellín, Colombia.',
    ogAlt: 'Olmo: Your brand sells. Has it hit a plateau?',
  },
  ui: {
    skip: 'Skip to content',
    logoLabel: 'olmo, go to home',
    nav: ['Services', 'Portfolio', 'Tools', 'About me'],
    langLabel: 'Switch to Spanish',
    cta: 'Message me on WhatsApp',
    ctaLabel: 'Message me on WhatsApp (opens in a new tab)',
    waCta: 'Message me',
    waCtaLabel: 'Message me on WhatsApp (opens in a new tab)',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    menuItems: ['Services', 'Portfolio', 'Tools', 'About me'],
    newTab: '(opens in a new tab)',
  },
  hero: {
    h1: 'Your brand sells. Has it hit a *plateau*?',
    sub: 'I advise brands that already sell online and have stopped growing. I work inside your team, find where sales are getting stuck, and stay until it shows in conversion, revenue or time saved.',
    primary: 'See services',
    secondary: 'See the portfolio',
    secondaryHref: '/en/portfolio/',
    linkedinLabel: 'Santiago Cardona on LinkedIn (opens in a new tab)',
    githubLabel: 'Santiago Cardona on GitHub (opens in a new tab)',
  },
  clients: { label: "Since 2017, I've worked with:", aria: 'Brands I have worked with' },
  big: {
    h2: "I don't vanish for two weeks and come back with a *deliverable*.",
    body: 'I work inside your team, across every area, to find where sales are getting stuck. And I stay until the change shows up in conversion (how many visitors end up buying), in revenue, or in hours your team gets back.',
    button: 'How I work',
    footer: 'How I work',
  },
  services: {
    left: 'What I do',
    right: '( 5 )',
    aria: 'Services',
    offer: [
      { title: 'Advisory & Consulting', kind: 'Strategy and hands-on support', meta: 'From USD 100 an hour', href: 'advisory', img: 'asesoria' },
      { title: 'AI & Automation', kind: 'Agents, workflows and data', meta: '14+ hours a week saved at Undergold', href: 'advisory#systems', img: 'ia' },
      { title: 'Web & Apps', kind: 'Websites, stores and apps', meta: 'Load times cut 60% at Ideal Team', href: 'portfolio', img: 'web' },
      { title: 'Monthly advisory', kind: 'Daily WhatsApp and a weekly 1-hour call', meta: 'USD 700 / month', href: 'monthly', img: 'mensualidad' },
    ],
    marquee: ['Message me on WhatsApp', 'Available for new projects'],
    button: 'See pricing and how I work',
    items: [
      { word: 'Advisory', support: 'Monthly advisory: WhatsApp every day and a 1-hour meeting every week.', href: 'advisory', img: 'santiago', alt: 'Santiago Cardona in a meeting with his laptop open' },
      { word: 'Funnels', support: 'A funnel is the path from first visit to payment: waitlist, landing page, checkout, emails and automations. At silBe, conversion went from 3% to 4%.', href: 'advisory#funnels', img: 'funnel', alt: 'Funnel diagram: waitlist, landing page, checkout, email and automation' },
      { word: 'Product', support: 'From first version to app: sign-up, paywall, plans and free trial.', href: 'advisory#product', img: 'steady', alt: 'The Steady app open on a phone' },
      { word: 'Systems', support: 'I connect your platforms so data goes in once. At Undergold: 14+ hours a week saved.', href: 'advisory#systems', img: 'systems', alt: 'Diagram of the Shopify, Supabase and Vercel setup' },
      { word: 'Web', support: 'Speed, mobile loading, Google rankings (SEO) and migrations. At Ideal Team: load times cut by 60%.', href: 'advisory#web', img: 'speed', alt: 'Before-and-after speed comparison: 60% shorter load time' },
    ],
  },
  work: {
    line1: 'Results *with names*',
    line2: '& numbers',
    cursor: 'View project',
    button: 'See the full portfolio',
    source: 'silBe figures: Forbes Colombia, February 7, 2021',
    illustrative: 'Illustrative recreation',
    viewCase: 'View project',
    cards: [
      { name: 'silBe by Silvy', tag: 'Fitness subscription', figure: 'USD 400k and 5,000 subscribers in the first week (Forbes, 2021)', alt: 'Screenshots of the silBe app and website', href: 'silbe' },
      { name: 'Undergold', tag: 'Fashion, B2B sales', figure: '14+ hours a week saved', alt: "Illustrative recreation of Undergold's B2B catalog", href: 'undergold' },
      { name: 'Ideal Team', tag: 'Agency, 14 websites', figure: 'Load times cut by 60%', alt: 'Website mosaic with its performance dashboard', href: 'idealTeam' },
      { name: 'ILMIN', tag: 'Fragrance', figure: '+25% digital sales in 3 months', alt: 'ILMIN perfume, photo from their online store', href: 'pfIlmin' },
      { name: 'SaraBe', tag: 'Writer and speaker', figure: 'One website with a path to purchase for each service', alt: "SaraBe's website on a laptop and a phone", href: 'pfSarabe' },
    ],
  },
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
  about: {
    label: 'About',
    title: 'You talk to the person doing the *work*.',
    body: "I'm Santiago Cardona Ortiz. I work on my own, from Medellín, with brands in Colombia and abroad. From 2017 to 2025 I was co-founder and COO of Vieli, a 30-person studio: we delivered 100+ projects, all of them from referrals. I've worked with silBe since 2020. I taught UX/UI design at CESDE for six years, and for Bancolombia I designed FIDI, a financial-education prototype built on WhatsApp videos.",
    button: 'More about me',
    milestones: [
      { date: '2017–2025', place: 'Vieli', role: 'Co-founder & COO. 30 people, 100+ projects from referrals.' },
      { date: '6 years', place: 'CESDE', role: 'UX/UI instructor.' },
      { date: 'Since 2025', place: 'Olmo', role: 'Independent advisory.' },
    ],
    cv: 'Download CV',
    cvLabel: "Download Santiago Cardona's CV, PDF",
    cvPending: 'Coming soon',
    linkedin: 'LinkedIn',
    photoAlt: 'Portrait of Santiago Cardona Ortiz',
  },
  notDo: {
    left: "What I don't do",
    right: '( 4 )',
    srPrefix: "I don't do:",
    items: [
      { word: 'Social media management', support: 'Posting and replying on your social accounts.' },
      { word: 'Daily ad management', support: 'Setting up and watching ads day to day.' },
      { word: 'Logos', support: 'Visual identity from scratch.' },
      { word: 'WordPress upkeep', support: 'Monthly WordPress support. Speed fixes and migrations, yes.' },
    ],
    closing: "I'll tell you what to buy, even when it isn't something I do. And if you need something on this list, I'll point you to someone who does it.",
    link: 'Ask me who to call',
  },
  footer: {
    eyebrow: 'Has your brand stalled?',
    title: 'Message me before another *quarter* slips by.',
    button: 'Message me on WhatsApp',
    pills: ['Advisory', 'Portfolio', 'Tools', 'About me', 'Terms', 'Privacy'],
    tools: 'Free tools I built →',
    emailLabel: 'Prefer email?',
    whatsapp: 'WhatsApp',
    city: 'Medellín, Colombia',
    inCity: 'in Medellín',
    bigWord: "Let's talk",
    bigLabel: "Let's talk on WhatsApp (opens in a new tab)",
    copyright: '© 2026 Olmo · Santiago Cardona Ortiz',
  },
};

export const HOME: Record<Lang, HomeText> = { es, en };
