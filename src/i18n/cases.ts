/**
 * Casos con página propia: silBe, Undergold e Ideal Team.
 * Solo se publican cifras aprobadas; cualquier cifra nueva necesita aprobación antes de salir.
 */
import type { Lang } from '../config';
import type { RouteId } from './routes';

export type CaseId = 'silbe' | 'undergold' | 'idealTeam';

export interface CaseText {
  id: CaseId;
  name: string;
  tag: string;
  period?: string;
  headline: string; // con *palabra* en serif
  lead: string;
  figures: { value: string; label: string; source?: string }[];
  stall: string;
  did: string[];
  changed: string[];
  note?: string;
  story?: { when: string; title: string; text: string }[];
  next: RouteId;
  meta: { title: string; description: string };
}

const es: Record<CaseId, CaseText> = {
  silbe: {
    id: 'silbe',
    name: 'silBe by Silvy',
    tag: 'Suscripción fitness',
    period: '2020–2026',
    headline: 'De comunidad a *suscripción*.',
    lead: 'Marca personal con modelo de suscripción. Equipo de más de 35 personas y 15 programadores externos. La acompañé de 2020 a 2026, primero desde Vieli y después de forma independiente.',
    figures: [
      { value: 'USD 400k', label: 'en la primera semana', source: 'Forbes, 2021' },
      { value: '5.000', label: 'suscriptores en la primera semana', source: 'Forbes, 2021' },
      { value: 'USD 800k', label: 'en el lanzamiento completo' },
      { value: '42 %', label: 'de conversión de la lista de espera final' },
      { value: '3 % → 4 %', label: 'de conversión' },
      { value: '25k', label: 'suscriptores activos' },
    ],
    stall: 'En 2020 Silvy tenía alrededor de 1M de seguidores y hacía entrenamientos en vivo todos los días, pero su comunidad no le generaba ingresos.',
    did: [
      'Diseñé el MVP: un reto de 8 semanas con plan nutricional personalizado y soporte por WhatsApp.',
      'Armé el funnel completo: preregistro, landing, checkout, email marketing y automatizaciones.',
      'Trabajé la conversión: cuotas sin interés, pago en efectivo (Efecty y Baloto), solo 2 planes, un upsell de nutrición, recuperación de carritos por WhatsApp, un chat de ventas entrenado y A/B tests en el checkout.',
      'Hice la migración a app (Trainerize, FitBudd y después una app propia), donde diseñé el onboarding, el paywall, los planes y una prueba gratis de 7 días.',
    ],
    changed: [
      'USD 400k y 5.000 suscriptores en la primera semana (Forbes Colombia, 2021).',
      'USD 800k en el lanzamiento completo y 42 % de conversión de la lista de espera final.',
      'La conversión pasó de 3 % a 4 % y la marca llegó a 25k suscriptores activos.',
    ],
    note: 'Las cifras marcadas "Forbes, 2021" salen de Forbes Colombia (7 de febrero de 2021). Las demás son datos propios del proyecto.',
    story: [
      { when: 'Agosto 2020', title: 'Una comunidad sin ingresos', text: 'Silvy tenía cerca de 1M de seguidores y entrenaba en vivo todos los días por Instagram, pero la comunidad no le dejaba plata. Contrató a Vieli para convertirla en un negocio y yo tomé el proyecto.' },
      { when: 'Diciembre 2020', title: 'El MVP: un reto de 8 semanas', text: 'Antes de pensar en una app, vendimos un reto de 8 semanas para mujeres de 18 a 50 años: 60 videos para entrenar en casa, un plan de nutrición personalizado por una nutricionista y soporte diario por WhatsApp. Lo monté en WordPress y LearnDash, y armé yo mismo el funnel, el correo, las automatizaciones, la plataforma de contenido y los pagos. Salió el 17 de diciembre: USD 400k y 5.000 suscriptores en la primera semana, y USD 800k en todo el lanzamiento.' },
      { when: 'Los retos siguientes', title: 'Repetir y medir', text: 'Vinieron tres retos más con la misma mecánica. En cada uno sumamos pauta, SEO, SEM y analítica, y yo dirigí todo el marketing. La métrica de cada lanzamiento era visita a compra, y con pruebas A/B en el checkout la llevamos de 3 % a 4 %. Un plan de nutrición personalizada de USD 300 lo compraron 252 personas.' },
      { when: 'De reto a app', title: 'Trainerize y después FitBudd', text: 'Pasamos a suscripción en app. Trainerize no alcanzó, así que nos movimos a FitBudd, con apps nativas para iOS y Android. Diseñé el onboarding, el paywall, los planes y la prueba gratis de 7 días, trabajando directo con el equipo de desarrollo de FitBudd. En 2022 ya había 20.000 usuarios pagando cada mes.' },
      { when: 'El precio', title: 'De USD 29 a USD 39 al mes', text: 'Cuando la audiencia creció en Estados Unidos, Medio Oriente, Australia y España, subimos el precio. El churn no subió y las ventas nuevas se mantuvieron.' },
      { when: 'App propia', title: 'Cuando la plataforma se queda corta', text: 'FitBudd no mostraba la moneda local según el país ni permitía débito automático con cuentas de Bancolombia. Propuse construir una app propia y lideré la migración.' },
      { when: 'Junio 2026', title: 'Cierre de mi etapa', text: 'Trabajé en silBe hasta junio de 2026, primero desde Vieli y después por mi cuenta. Hoy Silvy tiene más de 3M de seguidores y la marca tiene 25.000 suscriptores pagos. Desde el lanzamiento se han suscrito más de 100.000 personas.' },
    ],
    next: 'undergold',
    meta: {
      title: 'silBe: de comunidad a suscripción | Olmo',
      description: 'Cómo silBe by Silvy pasó de una comunidad sin ingresos a USD 400k y 5.000 suscriptores en la primera semana (Forbes, 2021).',
    },
  },
  undergold: {
    id: 'undergold',
    name: 'Undergold',
    tag: 'Moda, venta B2B',
    headline: 'Más de 14 horas a la semana *de vuelta*.',
    lead: 'Marca de ropa con más de 100 empleados que vende en mercados B2B de todo el mundo.',
    figures: [
      { value: '+14 h', label: 'a la semana ahorradas' },
      { value: '1', label: 'sola fuente de datos, sin doble carga' },
    ],
    stall: 'Undergold vendía en mercados B2B de todo el mundo a través de Brandboom. Brandboom no permitía actualizar rápido los precios ni el inventario, así que todo se hacía a mano: más de 20 horas a la semana solo en mantener productos y catálogos al día.',
    did: [
      'Diseñé un sistema híbrido a la medida entre Shopify, Supabase y Vercel.',
      'Los datos quedan centralizados en una sola fuente: se suben en un solo lugar.',
      'Las imágenes salen directamente de Shopify y se aprovecha el plan de Shopify Plus que la marca ya pagaba.',
      'Ver el catálogo y comprar es fluido, porque Shopify está hecho para e-commerce.',
    ],
    changed: [
      'Laura, encargada de internacionalización, se ahorra más de 14 horas a la semana.',
      'Una sola fuente de datos, sin doble carga.',
    ],
    note: 'Las imágenes de este caso son una recreación ilustrativa. Las cifras de facturación de Undergold no se publican.',
    next: 'idealTeam',
    meta: {
      title: 'Undergold: catálogo B2B sin doble carga | Olmo',
      description: 'Sistema a la medida entre Shopify, Supabase y Vercel para Undergold: más de 14 horas a la semana ahorradas.',
    },
  },
  idealTeam: {
    id: 'idealTeam',
    name: 'Ideal Team',
    tag: 'Agencia, 14 sitios',
    headline: 'Catorce sitios, *un solo* estándar.',
    lead: 'Agencia con más de 50 personas entre EE. UU., Canadá y Colombia, que maneja más de 40 clientes. La asesoro para que sus procesos tecnológicos y web funcionen lo mejor posible.',
    figures: [
      { value: '−60 %', label: 'en tiempo de carga' },
      { value: '−75 %', label: 'en recursos de servidor y cloud' },
      { value: '30–40 %', label: 'menos tiempo de los programadores' },
      { value: '14', label: 'sitios corregidos' },
    ],
    stall: 'Más de 14 sitios web de clientes, cada uno con un problema distinto: posicionamiento SEO, velocidad, carga en móviles y seguridad.',
    did: [
      'Auditoría sitio por sitio.',
      'Corrección de rendimiento: caché y recompresión de imágenes. En un sitio las imágenes pasaron de 223 MB a 75 MB y además quedaron en WebP.',
      'Seguridad reforzada.',
      'Migración de algunos sitios a Framer y de otros a un servidor nuevo.',
    ],
    changed: [
      '−60 % en tiempo de carga.',
      '−75 % en recursos de servidor y cloud.',
      '30–40 % menos tiempo de los programadores gracias a nuevas herramientas de IA.',
      'Los 14 sitios quedaron corregidos.',
    ],
    next: 'silbe',
    meta: {
      title: 'Ideal Team: 14 sitios más rápidos | Olmo',
      description: 'Auditoría, rendimiento, seguridad reforzada y migraciones para 14 sitios de Ideal Team: −60 % en tiempo de carga.',
    },
  },
};

const en: Record<CaseId, CaseText> = {
  silbe: {
    id: 'silbe',
    name: 'silBe by Silvy',
    tag: 'Fitness subscription',
    period: '2020–2026',
    headline: 'From community to *subscription*.',
    lead: "A personal brand with a subscription model. A team of 35+ people and 15 external developers. I worked with them from 2020 to 2026, first through Vieli and then on my own.",
    figures: [
      { value: 'USD 400k', label: 'in the first week', source: 'Forbes, 2021' },
      { value: '5,000', label: 'subscribers in the first week', source: 'Forbes, 2021' },
      { value: 'USD 800k', label: 'across the full launch' },
      { value: '42%', label: 'conversion from the final waitlist' },
      { value: '3% → 4%', label: 'conversion' },
      { value: '25k', label: 'active subscribers' },
    ],
    stall: 'In 2020 Silvy had around 1M followers and ran live workouts every day, but her community brought in no revenue.',
    did: [
      'I designed the MVP: an 8-week challenge with a personalized meal plan and WhatsApp support.',
      'I built the full funnel: waitlist, landing page, checkout, email marketing and automations.',
      'I worked on conversion: interest-free installments, cash payments (Efecty and Baloto), just 2 plans, a nutrition upsell, WhatsApp cart recovery, a trained sales chat and A/B tests at checkout.',
      'I handled the move to an app (Trainerize, FitBudd and then their own app), designing the onboarding, paywall, plans and a 7-day free trial.',
    ],
    changed: [
      'USD 400k and 5,000 subscribers in the first week (Forbes Colombia, 2021).',
      'USD 800k across the full launch and 42% conversion from the final waitlist.',
      'Conversion went from 3% to 4%, and the brand reached 25k active subscribers.',
    ],
    note: 'Figures marked "Forbes, 2021" come from Forbes Colombia (February 7, 2021). The rest are the project\'s own data.',
    story: [
      { when: 'August 2020', title: 'A community with no revenue', text: 'Silvy had around 1M followers and ran live workouts on Instagram every day, but the community made no money. She hired Vieli to turn it into a business, and I took on the project.' },
      { when: 'December 2020', title: 'The MVP: an 8-week challenge', text: 'Before any app, we sold an 8-week challenge for women aged 18 to 50: 60 at-home workout videos, a nutrition plan personalized by a nutritionist and daily WhatsApp support. I built it on WordPress and LearnDash, and set up the funnel, email, automations, content platform and payments myself. It launched on December 17: USD 400k and 5,000 subscribers in the first week, and USD 800k across the full launch.' },
      { when: 'The next challenges', title: 'Repeat and measure', text: 'Three more challenges followed with the same mechanic. Each one added paid media, SEO, SEM and analytics, and I led all of the marketing. The launch metric was visit to purchase, and A/B tests at checkout took it from 3% to 4%. 252 people bought a USD 300 personalized nutrition plan.' },
      { when: 'From challenge to app', title: 'Trainerize, then FitBudd', text: "We moved to an in-app subscription. Trainerize fell short, so we switched to FitBudd, with native iOS and Android apps. I designed the onboarding, paywall, plans and 7-day free trial, working directly with FitBudd's development team. By 2022 there were 20,000 users paying every month." },
      { when: 'Pricing', title: 'From USD 29 to USD 39 a month', text: "As the audience grew in the US, the Middle East, Australia and Spain, we raised the price. Churn didn't go up and new sales held steady." },
      { when: 'Their own app', title: 'When the platform falls short', text: "FitBudd couldn't show local currency by country or debit Bancolombia accounts automatically. I made the case for a custom app and led the move." },
      { when: 'June 2026', title: 'Closing my chapter', text: 'I worked on silBe until June 2026, first through Vieli and then on my own. Today Silvy has 3M+ followers and the brand has 25,000 paying subscribers. More than 100,000 people have subscribed since launch.' },
    ],
    next: 'undergold',
    meta: {
      title: 'silBe: from community to subscription | Olmo',
      description: 'How silBe by Silvy went from a community with no revenue to USD 400k and 5,000 subscribers in its first week (Forbes, 2021).',
    },
  },
  undergold: {
    id: 'undergold',
    name: 'Undergold',
    tag: 'Fashion, B2B sales',
    headline: '14+ hours a week, *back*.',
    lead: 'A clothing brand with 100+ employees that sells in B2B markets worldwide.',
    figures: [
      { value: '14+ h', label: 'a week saved' },
      { value: '1', label: 'single source of data, no double entry' },
    ],
    stall: "Undergold sold in B2B markets worldwide through Brandboom. Brandboom didn't allow quick price or inventory updates, so everything was done by hand: 20+ hours a week just keeping products and catalogs up to date.",
    did: [
      'I designed a custom hybrid system across Shopify, Supabase and Vercel.',
      'Data lives in a single source: it goes in once, in one place.',
      'Images come straight from Shopify, making use of the Shopify Plus plan the brand already paid for.',
      'Browsing and buying are smooth, because Shopify is built for e-commerce.',
    ],
    changed: [
      '14+ hours a week saved for Laura, head of internationalization.',
      'A single source of data, no double entry.',
    ],
    note: "This case's images are an illustrative recreation. Undergold's revenue figures are not published.",
    next: 'idealTeam',
    meta: {
      title: 'Undergold: a B2B catalog without double entry | Olmo',
      description: 'A custom Shopify, Supabase and Vercel setup for Undergold: 14+ hours a week saved.',
    },
  },
  idealTeam: {
    id: 'idealTeam',
    name: 'Ideal Team',
    tag: 'Agency, 14 websites',
    headline: 'Fourteen sites, *one* standard.',
    lead: 'An agency of 50+ people across the US, Canada and Colombia, managing 40+ clients. I advise them so their tech and web processes run as well as they can.',
    figures: [
      { value: '−60%', label: 'load time' },
      { value: '−75%', label: 'server and cloud resources' },
      { value: '30–40%', label: 'less developer time' },
      { value: '14', label: 'sites fixed' },
    ],
    stall: 'More than 14 client websites, each with a different problem: SEO rankings, speed, mobile loading and security.',
    did: [
      'A site-by-site audit.',
      'Performance fixes: caching and image recompression. On one site, images went from 223 MB to 75 MB and were converted to WebP.',
      'Hardened security.',
      'Moved some sites to Framer and others to a new server.',
    ],
    changed: [
      'Load times cut by 60%.',
      '75% fewer server and cloud resources.',
      '30–40% less developer time thanks to new AI tools.',
      'All 14 sites fixed.',
    ],
    next: 'silbe',
    meta: {
      title: 'Ideal Team: 14 faster websites | Olmo',
      description: 'Audit, performance, hardened security and migrations for 14 Ideal Team websites: load times cut by 60%.',
    },
  },
};

export const CASES: Record<Lang, Record<CaseId, CaseText>> = { es, en };
