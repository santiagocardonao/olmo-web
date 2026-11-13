/**
 * Portafolio: 8 proyectos, en el orden en que aparecen.
 * silBe, Undergold e Ideal Team enlazan a su caso completo; el resto tiene ficha propia en /portafolio/<slug>/.
 * Solo se publican cifras y enlaces aprobados; cualquier dato nuevo necesita aprobación antes de salir.
 */
import type { Lang } from '../config';
import type { RouteId } from './routes';

export type ProjectId =
  | 'silbe' | 'cotiza' | 'ilmin' | 'undergold' | 'ideal' | 'metricas' | 'espanol' | 'dsa';

export const ORDER: ProjectId[] = [
  'silbe', 'cotiza',
  'ilmin', 'undergold', 'ideal',
  'metricas', 'espanol', 'dsa',
];

/** Ruta de cada proyecto: caso completo o ficha del portafolio. */
export const PROJECT_ROUTE: Record<ProjectId, RouteId> = {
  silbe: 'silbe', undergold: 'undergold', ideal: 'idealTeam', ilmin: 'pfIlmin',
  metricas: 'pfMetricas', cotiza: 'pfCotiza', espanol: 'pfEspanol', dsa: 'pfDsa',
};

/** Slug de la ficha (igual en ES y EN). */
export const SLUG: Partial<Record<ProjectId, string>> = {
  ilmin: 'ilmin',
  metricas: 'olmo-metricas', cotiza: 'olmo-cotiza', espanol: 'espanol-natural', dsa: 'design-system-adherence',
};

export interface Project {
  name: string;
  short?: string; // nombre corto para la tarjeta del índice
  figure?: string; // cifra aprobada que se muestra en la tarjeta
  tag: string; // subtítulo de la tarjeta
  // Ficha (no aplica a silBe ni Undergold, que usan su caso)
  headline?: string; // con *palabra* en serif
  lead?: string;
  facts?: { k: string; v: string }[];
  about?: string;
  /** Qué hice: texto suelto o, en el formato nuevo, título corto + frase. */
  did?: (string | { t: string; d: string })[];
  /** Cifras destacadas (solo aprobadas). Sin cifras, la franja no aparece. */
  stats?: { v: string; k: string }[];
  live?: { href: string; label: string };
  repo?: string;
  // Las capturas de la galería salen de src/assets/galerias/<id>/ (ver ProjectPage).
  meta?: { title: string; description: string };
}

const GH = 'https://github.com/santiagocardonao/';

const es: Record<ProjectId, Project> = {
  silbe: { name: 'silBe by Silvy', tag: 'Growth, CRO y producto · 2020–2026' },
  undergold: { name: 'Undergold', tag: 'Catálogo B2B · Shopify, Supabase y Vercel' },
  ideal: { name: 'Ideal Team', tag: 'Rendimiento web · 14 sitios' },
  ilmin: {
    name: 'ILMIN',
    tag: 'Perfumería · Líder de marketing y e-commerce',
    headline: '+25 % en ventas digitales *en tres* meses.',
    lead: 'ILMIN es una marca de perfumería nicho de Medellín. Lideré su marketing y su e-commerce en un proyecto por contrato, ya terminado. En mis primeros 3 meses las ventas digitales crecieron 25 % frente a los 3 meses anteriores (datos de Shopify).',
    facts: [{ k: 'Rol', v: 'Líder de marketing y e-commerce' }, { k: 'Tipo', v: 'Proyecto por contrato, terminado' }, { k: 'Plataforma', v: 'Shopify' }, { k: 'Sector', v: 'Perfumería nicho' }],
    about: 'Empecé por la tienda online y terminé a cargo de todo el marketing de la marca: crecer en Colombia y dejarla lista para mercados internacionales.',
    did: [
      { t: 'Estrategia de marketing', d: 'Definí y dirigí la estrategia de marketing de la marca.' },
      { t: 'Tienda online', d: 'Me hice cargo de la tienda en Shopify y del canal digital, que creció 25 % en ventas en mis primeros 3 meses frente a los 3 anteriores (datos de Shopify).' },
      { t: 'Portafolio y mercados', d: 'Ayudé a depurar el portafolio de productos y a preparar la marca para mercados internacionales.' },
    ],
    live: { href: 'https://www.ilmin.com/', label: 'ilmin.com' },
    meta: { title: 'ILMIN: +25 % en ventas digitales en 3 meses | Santiago Cardona', description: 'Lideré el marketing y el e-commerce de ILMIN, perfumería nicho de Medellín: +25 % en ventas digitales en los primeros 3 meses.' },
  },
  metricas: {
    name: 'Olmo Métricas',
    tag: 'Calculadora de suscripciones',
    headline: 'Las cuentas de una suscripción, *en minutos*.',
    lead: 'Una calculadora gratuita que construí para negocios de suscripción: apps, streaming, música y SaaS.',
    facts: [{ k: 'Tipo', v: 'Herramienta gratuita, en producción' }, { k: 'Tecnología', v: 'React y Supabase (Postgres)' }, { k: 'Idiomas', v: 'Español e inglés' }],
    about: 'Pones usuarios, churn, precio, comisiones de pago, crecimiento y costos, y te devuelve MRR, ingresos anuales, CLTV, CAC, LTV:CAC, recuperación de la inversión, utilidad y punto de equilibrio. Incluye un semáforo de diagnóstico y un PDF de dos páginas.',
    did: [
      'Todos los cálculos viven en una sola función de Postgres, así que hay una única fuente de verdad.',
      'Cada estudio se puede guardar con un link y reabrir después.',
      'Funciona en USD, EUR, MXN y COP.',
    ],
    live: { href: 'https://metricas.olmo.agency/', label: 'metricas.olmo.agency' },
    repo: 'olmo-metricas',
    meta: { title: 'Olmo Métricas: calculadora de suscripciones | Santiago Cardona', description: 'Calculadora gratuita de MRR, CLTV, CAC, LTV:CAC y punto de equilibrio para negocios de suscripción.' },
  },
  cotiza: {
    name: 'Olmo Cotiza',
    tag: 'Producto de IA en producción · Claude + Supabase',
    headline: 'Un alcance escrito entra, una *propuesta* sale.',
    lead: 'Un producto de IA que construí de principio a fin con Claude Code. Escribes el alcance en texto libre y devuelve una propuesta con link público y PDF, en español o en inglés. Está en producción: con él hice más de 30 propuestas reales y cada una me toma 45 minutos menos.',
    facts: [{ k: 'Mi rol', v: 'Producto, diseño y código, de principio a fin' }, { k: 'Tecnología', v: 'Claude (API de Anthropic), Supabase Postgres y una Edge Function' }, { k: 'Estado', v: 'En producción, código abierto' }],
    about: 'El problema: escribir y armar cada propuesta a mano me tomaba tiempo y ninguna salía igual a la anterior. La solución: Claude ordena el alcance, las reglas del negocio lo validan y las plantillas del sistema de diseño arman la propuesta. Todo queda en Postgres, así que se puede consultar qué se cotizó, a quién, qué se abrió y qué se cerró.',
    did: [
      'Lo construí con Claude Code sobre Supabase: Postgres con seguridad por filas y una Edge Function (generate-quote) que llama a la API de Claude.',
      'La demo pública pide un correo y tiene límites: 3 cotizaciones al día por correo y 40 en total. Las cotizaciones de visitantes se borran solas a los 7 días.',
      'El modelo redacta y estructura; las plantillas mandan en el diseño, así que cada propuesta sale igual de consistente en español y en inglés.',
      'Que el modelo estructure el contenido y que las plantillas manden en el diseño. Esa división es la que hace que lo que sale de la IA se pueda mandar a un cliente.',
    ],
    live: { href: 'https://cotiza.olmo.agency/demo', label: 'cotiza.olmo.agency/demo' },
    repo: 'olmo-cotiza',
    meta: { title: 'Olmo Cotiza: producto de IA con Claude y Supabase | Santiago Cardona', description: 'Producto de IA que construí con Claude Code: de un alcance escrito a una propuesta con link público y PDF, en producción.' },
  },
  espanol: {
    name: 'Español natural',
    tag: 'Skill para Claude',
    headline: 'Que la IA escriba *como nativa*.',
    lead: 'Skill de código abierto para Claude que hace que la IA escriba en español como un hablante nativo, no como una traducción del inglés.',
    facts: [{ k: 'Tipo', v: 'Skill de Claude, código abierto' }, { k: 'Funciona en', v: 'Claude Code y Cowork' }],
    about: 'El español de IA es correcto pero plano: estructuras calcadas del inglés, muletillas de relleno y un entusiasmo parejo que ninguna persona usa. Esta skill lo detecta y lo corrige.',
    did: [
      'Tres modos: reescribir, revisar sin tocar el texto y editar un archivo.',
      'Dialecto ajustable: neutro latinoamericano, colombiano, mexicano, rioplatense o de España.',
      'Un banco de calcos y muletillas, con contraejemplos para no corregir de más.',
    ],
    repo: 'espanol-natural',
    meta: { title: 'Español natural: skill para Claude | Santiago Cardona', description: 'Skill de código abierto para que Claude escriba en español nativo, no en traducción del inglés.' },
  },
  dsa: {
    name: 'Design System Adherence',
    tag: 'Skill para Claude',
    headline: 'Revisar la marca en *lo que sale*, no en la receta.',
    lead: 'Skill de código abierto para Claude que revisa si un PDF, una captura o una página sigue de verdad el design system que debía seguir.',
    facts: [{ k: 'Tipo', v: 'Skill de Claude, código abierto' }, { k: 'Mide', v: 'Color, tipografía, tamaños y contraste' }],
    about: 'Un linter lee el código, pero no ve la presentación que fue a la conferencia ni el PDF que manda el equipo comercial. Ahí es donde la marca se rompe frente a la gente, y ahí revisa esta skill.',
    did: [
      'El design system que le das es la vara: lo que no define, no se juzga.',
      'El color y el contraste los miden scripts (CIEDE2000 y WCAG 2.1), no los adivina el modelo.',
      'La severidad se calcula: dos corridas con los mismos datos dan el mismo resultado.',
    ],
    repo: 'design-system-adherence',
    meta: { title: 'Design System Adherence: skill para Claude | Santiago Cardona', description: 'Skill de Claude que audita si un entregable sigue su design system, con color y contraste medidos por scripts.' },
  },
};

const en: Record<ProjectId, Project> = {
  silbe: { name: 'silBe by Silvy', tag: 'Growth, CRO & product · 2020–2026' },
  undergold: { name: 'Undergold', tag: 'B2B catalog · Shopify, Supabase & Vercel' },
  ideal: { name: 'Ideal Team', tag: 'Web performance · 14 sites' },
  ilmin: {
    name: 'ILMIN',
    tag: 'Fragrance · Marketing & e-commerce lead',
    headline: '+25% digital sales *in three* months.',
    lead: 'ILMIN is a niche fragrance brand from Medellín. I led its marketing and e-commerce on a contract project, now complete. Digital sales grew 25% in my first 3 months vs the 3 months before I started (Shopify data).',
    facts: [{ k: 'Role', v: 'Marketing & e-commerce lead' }, { k: 'Engagement', v: 'Contract project, completed' }, { k: 'Platform', v: 'Shopify' }, { k: 'Industry', v: 'Niche fragrance' }],
    about: 'I started with the online store and ended up owning the brand\'s marketing: growing ILMIN in Colombia and getting it ready for international markets.',
    did: [
      { t: 'Marketing strategy', d: 'I set and ran the brand\'s marketing strategy.' },
      { t: 'Online store', d: 'I owned the Shopify store and the digital channel, where sales grew 25% in my first 3 months vs the 3 months before (Shopify data).' },
      { t: 'Products and markets', d: 'I helped trim the product range and get the brand ready for international markets.' },
    ],
    live: { href: 'https://www.ilmin.com/', label: 'ilmin.com' },
    meta: { title: 'ILMIN: +25% digital sales in 3 months | Santiago Cardona', description: 'I led marketing and e-commerce for ILMIN, a niche fragrance brand from Medellín: +25% digital sales in the first 3 months.' },
  },
  metricas: {
    name: 'Olmo Métricas',
    tag: 'Subscription calculator',
    headline: 'Subscription math, *in minutes*.',
    lead: 'A free calculator I built for subscription businesses: apps, streaming, music and SaaS.',
    facts: [{ k: 'Type', v: 'Free tool, live' }, { k: 'Stack', v: 'React and Supabase (Postgres)' }, { k: 'Languages', v: 'Spanish and English' }],
    about: 'Enter users, churn, price, payment fees, growth and costs, and get MRR, annual revenue, CLTV, CAC, LTV:CAC, payback, profit and break-even. It includes a traffic-light diagnosis and a two-page PDF.',
    did: [
      'All the math lives in a single Postgres function, so there is one source of truth.',
      'Every analysis can be saved as a link and reopened later.',
      'It works in USD, EUR, MXN and COP.',
    ],
    live: { href: 'https://metricas.olmo.agency/', label: 'metricas.olmo.agency' },
    repo: 'olmo-metricas',
    meta: { title: 'Olmo Métricas: subscription calculator | Santiago Cardona', description: 'A free MRR, CLTV, CAC, LTV:CAC and break-even calculator for subscription businesses.' },
  },
  cotiza: {
    name: 'Olmo Cotiza',
    tag: 'Production AI product · Claude + Supabase',
    headline: 'A written scope in, a *proposal* out.',
    lead: 'A production AI product I shipped end to end with Claude Code. You write the scope in plain text and get back a proposal with a public link and a PDF, in English or Spanish. It is live: I have sent 30+ real proposals with it, and each one takes me 45 minutes less.',
    facts: [{ k: 'My role', v: 'Product, design and code, end to end' }, { k: 'Stack', v: 'Claude (Anthropic API), Supabase Postgres and an Edge Function' }, { k: 'Status', v: 'Live, open source' }],
    about: 'The problem: writing and formatting every proposal by hand took time, and no two looked the same. The fix: Claude structures the scope, business rules validate it, and design-system templates lay out the proposal. Everything is stored in Postgres, so you can see what was quoted, to whom, what was opened and what was closed.',
    did: [
      'I built it with Claude Code on Supabase: Postgres with row-level security and an Edge Function (generate-quote) that calls the Claude API.',
      'The public demo asks for an email and is rate-limited: 3 quotes a day per email and 40 in total. Visitor quotes delete themselves after 7 days.',
      'The model drafts and structures; the templates own the layout, so every proposal comes out consistent in English and Spanish.',
      'Let the model structure the content and let templates own the layout. That split is what makes AI output reliable enough to send to a client.',
    ],
    live: { href: 'https://cotiza.olmo.agency/demo', label: 'cotiza.olmo.agency/demo' },
    repo: 'olmo-cotiza',
    meta: { title: 'Olmo Cotiza: an AI product on Claude and Supabase | Santiago Cardona', description: 'A production AI product I built with Claude Code: from a written scope to a proposal with a public link and PDF.' },
  },
  espanol: {
    name: 'Español natural',
    tag: 'Claude skill',
    headline: 'AI that writes Spanish *like a native*.',
    lead: 'An open-source Claude skill that makes AI write Spanish like a native speaker, not like translated English.',
    facts: [{ k: 'Type', v: 'Claude skill, open source' }, { k: 'Works in', v: 'Claude Code and Cowork' }],
    about: 'AI Spanish is correct but flat: sentence structures copied from English, filler phrases and the same level of enthusiasm everywhere, which no person writes with. This skill spots it and fixes it.',
    did: [
      'Three modes: rewrite, review without touching the text, and edit a file.',
      'Adjustable dialect: neutral Latin American, Colombian, Mexican, Rioplatense or Spain.',
      'A bank of calques from English and filler phrases, with counterexamples so it doesn\'t over-correct.',
    ],
    repo: 'espanol-natural',
    meta: { title: 'Español natural: a Claude skill | Santiago Cardona', description: 'An open-source skill that makes Claude write native Spanish, not translated English.' },
  },
  dsa: {
    name: 'Design System Adherence',
    tag: 'Claude skill',
    headline: 'Check the brand in *what ships*, not the recipe.',
    lead: 'An open-source Claude skill that checks whether a PDF, a screenshot or a page actually follows the design system it was meant to follow.',
    facts: [{ k: 'Type', v: 'Claude skill, open source' }, { k: 'Measures', v: 'Color, typeface, type size and contrast' }],
    about: "A linter reads source code, but it can't see the deck that went to the conference or the PDF the sales team sends. That is where a brand breaks in front of people, and that is what this skill checks.",
    did: [
      'The design system you supply is the yardstick: if it doesn\'t define something, the skill doesn\'t judge it.',
      'Scripts measure color and contrast (CIEDE2000 and WCAG 2.1); the model doesn\'t guess them.',
      'Severity is calculated: two runs on the same inputs give the same answer.',
    ],
    repo: 'design-system-adherence',
    meta: { title: 'Design System Adherence: a Claude skill | Santiago Cardona', description: 'A Claude skill that audits whether a deliverable follows its design system, with color and contrast measured by scripts.' },
  },
};

/**
 * Títulos de cada fila de "Qué hice" y cifras de la franja.
 * Los títulos van en el mismo orden que `did`. Vieli los tiene directamente en su ficha.
 */
const TITLES: Record<Lang, Partial<Record<ProjectId, string[]>>> = {
  es: {
    ilmin: ['Estrategia de marketing', 'Tienda online', 'Canal digital'],
    metricas: ['Una sola fuente de verdad', 'Estudios con link', 'Cuatro monedas'],
    cotiza: ['Construido con Claude Code', 'Una demo con límites', 'Propuestas consistentes', 'Lo que aprendí'],
    espanol: ['Tres modos', 'Cinco dialectos', 'Sin corregir de más'],
    dsa: ['Tu sistema es la vara', 'Medido, no adivinado', 'Resultados repetibles'],
  },
  en: {
    ilmin: ['Marketing strategy', 'Online store', 'Digital channel'],
    metricas: ['One source of truth', 'Shareable links', 'Four currencies'],
    cotiza: ['Built with Claude Code', 'A demo with guardrails', 'Consistent proposals', 'What I learned'],
    espanol: ['Three modes', 'Five dialects', 'No over-correcting'],
    dsa: ['Your system sets the bar', 'Measured, not guessed', 'Repeatable results'],
  },
};

const STATS: Record<Lang, Partial<Record<ProjectId, { v: string; k: string }[]>>> = {
  es: {
    ilmin: [{ v: '+25 %', k: 'en ventas digitales frente a los 3 meses antes de que empezara (datos de Shopify)' }],
    metricas: [{ v: '8', k: 'indicadores (MRR, CLTV, CAC…)' }, { v: '4', k: 'monedas' }, { v: '2', k: 'idiomas' }],
    cotiza: [{ v: '30+', k: 'propuestas reales enviadas' }, { v: '−45 min', k: 'por propuesta' }, { v: '2', k: 'idiomas: español e inglés' }],
    espanol: [{ v: '5', k: 'dialectos' }, { v: '3', k: 'modos' }],
    dsa: [{ v: '4', k: 'cosas que mide: color, tipografía, tamaños y contraste' }],
  },
  en: {
    ilmin: [{ v: '+25%', k: 'digital sales vs the 3 months before I started (Shopify data)' }],
    metricas: [{ v: '8', k: 'metrics (MRR, CLTV, CAC…)' }, { v: '4', k: 'currencies' }, { v: '2', k: 'languages' }],
    cotiza: [{ v: '30+', k: 'real proposals sent' }, { v: '−45 min', k: 'per proposal' }, { v: '2', k: 'languages: English and Spanish' }],
    espanol: [{ v: '5', k: 'dialects' }, { v: '3', k: 'modes' }],
    dsa: [{ v: '4', k: 'things it measures: color, type, sizes and contrast' }],
  },
};

/** Cifra de la tarjeta del índice (las mismas aprobadas de la home). */
const FIGURES: Record<Lang, Partial<Record<ProjectId, string>>> = {
  es: {
    silbe: 'USD 400k y 5.000 suscriptores en la primera semana (Forbes Colombia, 2021)',
    undergold: '+14 h a la semana ahorradas',
    ideal: '−60 % en tiempo de carga',
    ilmin: '+25 % en ventas digitales frente a los 3 meses anteriores (Shopify)',
    cotiza: '30+ propuestas reales · 45 min menos en cada una',
  },
  en: {
    silbe: 'USD 400k and 5,000 subscribers in the first week (Forbes Colombia, 2021)',
    undergold: '14+ hours a week saved',
    ideal: 'Load times cut by 60%',
    ilmin: '+25% digital sales vs the prior 3 months (Shopify)',
    cotiza: '30+ real proposals · 45 min saved on each',
  },
};

/** Grupos del índice del portafolio, en orden. */
/** Debe seguir el mismo orden que ORDER. */
export const GROUPS: { id: 'featured' | 'cases' | 'tools'; ids: ProjectId[] }[] = [
  { id: 'featured', ids: ['silbe', 'cotiza'] },
  { id: 'cases', ids: ['ilmin', 'undergold', 'ideal'] },
  { id: 'tools', ids: ['metricas', 'espanol', 'dsa'] },
];

for (const [lang, set] of [['es', es], ['en', en]] as const) {
  for (const id of Object.keys(set) as ProjectId[]) {
    const p = set[id];
    const titles = TITLES[lang][id];
    if (titles && p.did) p.did = p.did.map((d, i) => (typeof d === 'string' && titles[i] ? { t: titles[i], d } : d));
    if (FIGURES[lang][id]) p.figure = FIGURES[lang][id];
    const stats = STATS[lang][id];
    if (stats) p.stats = stats;
  }
}

export const PROJECTS: Record<Lang, Record<ProjectId, Project>> = { es, en };
export const repoUrl = (repo: string) => GH + repo;
