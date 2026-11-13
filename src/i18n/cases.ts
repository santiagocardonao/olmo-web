/**
 * Casos con página propia: silBe, Undergold e Ideal Team.
 * Solo se publican cifras aprobadas; cualquier cifra nueva necesita aprobación antes de salir.
 * Forbes Colombia solo respalda "USD 400k y 5.000 suscriptores en la primera semana". El resto es dato interno.
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
    tag: 'Líder de growth, tecnología y conversión · Suscripción fitness',
    period: 'Ago. 2020 – jun. 2026',
    headline: 'De una comunidad gratis a un negocio de *suscripción*.',
    lead: 'Lideré growth, tecnología y conversión en silBe by Silvy de agosto de 2020 a junio de 2026 y le reportaba los resultados a la fundadora. El primer lanzamiento vendió USD 800k y la conversión pasó de cerca de 3 % a 4 %.',
    figures: [
      { value: 'USD 400k', label: 'en ventas la primera semana', source: 'Forbes Colombia, 2021' },
      { value: '5.000', label: 'suscriptores la primera semana', source: 'Forbes Colombia, 2021' },
      { value: 'USD 800k', label: 'en todo el primer lanzamiento', source: 'Dato interno' },
      { value: '3 % → 4 %', label: 'de conversión a compra tras los cambios al funnel', source: 'Dato interno' },
      { value: '42 %', label: 'de la lista de espera final compró', source: 'Dato interno' },
      { value: '25k', label: 'suscriptores pagos en la base que ayudé a construir', source: 'Dato interno' },
    ],
    stall: 'En 2020 Silvy tenía cerca de 1M de seguidores en Instagram y hacía entrenamientos en vivo gratis todos los días, pero la comunidad no generaba ingresos.',
    did: [
      'Armé el MVP y el funnel: landing de preregistro, WordPress con LearnDash, pagos, flujos de correo y automatizaciones. El 42 % de la lista de espera final compró.',
      'Quité fricción en el pago: cuotas sin interés, pago en efectivo en Efecty y Baloto, solo dos planes, recuperación de carritos por WhatsApp y un equipo de chat entrenado en ventas.',
      'Probé con compradores reales: pruebas A/B con Nelio A/B Testing sobre los primeros compradores de cada lanzamiento, y el ganador salía de inmediato. La conversión pasó de cerca de 3 % a 4,0 %.',
      'Diseñé la suscripción en app sobre FitBudd: onboarding, paywall, planes y prueba gratis de 7 días. En 2022 había 20.000 usuarios pagando USD 29 al mes.',
    ],
    changed: [
      'USD 400k y 5.000 suscriptores en la primera semana (Forbes Colombia, 2021).',
      'USD 800k en todo el primer lanzamiento y 42 % de la lista de espera final convertida (dato interno).',
      'Conversión de cerca de 3 % a 4,0 % y precio de USD 29 a USD 39 al mes sin subir la cancelación (dato interno).',
    ],
    note: 'Las cifras marcadas "Forbes Colombia, 2021" salen de Forbes Colombia (7 de febrero de 2021). Las marcadas "Dato interno" son datos propios de silBe.',
    story: [
      { when: 'Contexto', title: 'Una comunidad grande que no generaba ingresos', text: 'silBe by Silvy es una suscripción de entrenamiento para mujeres. En agosto de 2020, Silvy tenía cerca de 1M de seguidores en Instagram y entrenaba en vivo gratis todos los días, pero la comunidad no dejaba plata. No había producto ni ingresos.' },
      { when: 'Mi rol', title: 'Growth, tecnología y conversión, 2020–2026', text: 'Me hice cargo del funnel, la tecnología y la conversión, y después de todo el marketing. Le reportaba los resultados a la fundadora y trabajaba con su equipo y, más adelante, con el equipo de desarrollo de FitBudd en India.' },
      { when: 'El reto', title: 'Vender antes de tener una app', text: 'La primera versión tenía que venderle a una audiencia acostumbrada al contenido gratis, y a compradores que muchas veces prefieren pagar en efectivo o en cuotas antes que con una sola transacción de tarjeta.' },
      { when: '17 de diciembre de 2020', title: 'El MVP: un reto de 8 semanas', text: 'Antes de pensar en una app, armé un reto de 8 semanas para mujeres de 18 a 50 años: plan de nutrición personalizado, 60 videos para entrenar en casa, PDFs de nutrición y soporte diario por WhatsApp para la compra. Hice yo mismo la propuesta de valor, la landing de preregistro, la plataforma de contenido en WordPress y LearnDash, los pagos, los flujos de correo y las automatizaciones. El 42 % de la lista de espera final compró (dato interno), y en la primera semana hubo 5.000 suscriptores y USD 400k en ventas (Forbes Colombia, 2021).' },
      { when: 'CRO del lanzamiento', title: 'Conversión de cerca de 3 % a 4 %', text: 'Cambié el funnel pieza por pieza: cuotas sin interés, pago en efectivo en Efecty y Baloto, solo dos planes (el reto, o el reto con nutrición), un plan de nutrición personalizada de USD 300 que compraron 252 personas, recuperación de carritos por WhatsApp y un equipo de chat entrenado en ventas para quien dudaba. Corrí pruebas A/B con Nelio A/B Testing sobre los primeros compradores de cada lanzamiento y el ganador salía de inmediato. Sumando todo, la conversión pasó de cerca de 3 % a 4,0 % y el lanzamiento cerró en USD 800k (dato interno).' },
      { when: 'Los retos siguientes', title: 'Repetir con pauta', text: 'Vinieron tres retos más. Dirigí todo el marketing: pauta, SEO, SEM y analítica.' },
      { when: 'De reto a app', title: 'Onboarding, paywall y prueba de 7 días', text: 'La suscripción pasó a una app. Trainerize no encajó, así que silBe pasó a las apps nativas de FitBudd para iOS y Android. Diseñé el onboarding, el paywall (en el editor sin código de FitBudd, con su equipo de desarrollo en India), los planes y una prueba gratis de 7 días. En 2022 había 20.000 usuarios pagando USD 29 al mes.' },
      { when: 'Precio', title: 'De USD 29 a USD 39 al mes', text: 'Cuando la marca creció en mercados de mayor ingreso (Estados Unidos, Medio Oriente, Australia y España), el precio subió a USD 39 al mes. La cancelación no subió y las ventas nuevas se mantuvieron.' },
      { when: 'Último proyecto', title: 'Una app propia para cobrar en local', text: 'La pantalla de pago de FitBudd no servía para lo que silBe necesitaba: débito automático con DRUO desde cuentas de Bancolombia y precios convertidos a la moneda de cada país. Lideré el paso a una app hecha a la medida hasta que salí en junio de 2026.' },
      { when: 'Herramientas', title: 'Stack', text: 'WordPress, LearnDash, Nelio A/B Testing, WhatsApp, email marketing y automatizaciones, Trainerize, FitBudd (iOS y Android), pauta, SEO, SEM y analítica.' },
      { when: 'Lo que aprendí', title: 'Lo que me llevo a cualquier equipo', text: 'La base de suscriptores que ayudé a construir hoy tiene 25.000 suscriptores pagos. Me quedo con tres cosas: lanzar con el producto más pequeño que se pueda vender, quitar fricción en el pago antes de comprar tráfico y probar con los primeros compradores de cada lanzamiento para sacar el ganador de inmediato.' },
    ],
    next: 'undergold',
    meta: {
      title: 'silBe: de comunidad gratis a suscripción | Santiago Cardona',
      description: 'Lideré growth, tecnología y conversión en silBe by Silvy (2020–2026): lanzamiento de USD 800k y conversión de cerca de 3 % a 4 %.',
    },
  },
  undergold: {
    id: 'undergold',
    name: 'Undergold',
    tag: 'Moda B2B · Automatización del catálogo · Proyecto por contrato, terminado',
    headline: 'Más de 14 horas a la semana *de vuelta*.',
    lead: 'Undergold es una marca de ropa con más de 100 empleados que vende al por mayor en mercados B2B de todo el mundo. Diseñé y conecté el sistema que mantiene al día su catálogo B2B.',
    figures: [
      { value: '+14 h', label: 'a la semana ahorradas' },
      { value: '1', label: 'sola fuente de datos, sin doble carga' },
    ],
    stall: 'Undergold vendía por Brandboom, que no permitía actualizar rápido precios ni inventario. Todo se hacía a mano: más de 20 horas a la semana solo en mantener productos y catálogos al día.',
    did: [
      'Conecté Shopify, Supabase y Vercel en un sistema a la medida.',
      'Dejé los datos en una sola fuente: se cargan una vez y en un solo lugar.',
      'Las imágenes salen directo de Shopify, con el plan Shopify Plus que la marca ya pagaba.',
      'El catálogo y la compra corren sobre Shopify, que ya está hecho para e-commerce.',
    ],
    changed: [
      'Laura, encargada de internacionalización, se ahorra más de 14 horas a la semana.',
      'Una sola fuente de datos, sin doble carga.',
    ],
    note: 'Las imágenes de este caso son una recreación ilustrativa. Las cifras de ventas de Undergold no se publican. Lo siguiente que haría: medir los pedidos que entran por el catálogo nuevo para conectar el tiempo ahorrado con las ventas.',
    next: 'idealTeam',
    meta: {
      title: 'Undergold: catálogo B2B sin doble carga | Santiago Cardona',
      description: 'Conecté Shopify, Supabase y Vercel para el catálogo B2B de Undergold: más de 14 horas a la semana ahorradas.',
    },
  },
  idealTeam: {
    id: 'idealTeam',
    name: 'Ideal Team',
    tag: 'Rendimiento web · 14 sitios · Proyecto por contrato, terminado',
    headline: 'Catorce sitios, *un solo* estándar.',
    lead: 'Ideal Team es una agencia de más de 50 personas entre EE. UU., Canadá y Colombia. Lideré el rendimiento, la seguridad y las migraciones de 14 sitios de sus clientes, todos de cirugía plástica.',
    figures: [
      { value: '−60 %', label: 'en tiempo de carga' },
      { value: '−75 %', label: 'en recursos de servidor y cloud' },
      { value: '30–40 %', label: 'menos tiempo de los programadores (estimado del equipo)' },
      { value: '14', label: 'sitios corregidos' },
    ],
    stall: 'Catorce sitios, cada uno con un problema distinto: posicionamiento en Google, velocidad, carga en celular y seguridad.',
    did: [
      'Auditoría sitio por sitio, con el mismo estándar para todos.',
      'Caché y recompresión de imágenes. En un sitio las imágenes pasaron de 223 MB a 75 MB, ya en WebP.',
      'Seguridad reforzada en todos los sitios.',
      'Migración de algunos sitios a Framer y de otros a un servidor nuevo.',
    ],
    changed: [
      '−60 % en tiempo de carga.',
      '−75 % en recursos de servidor y cloud.',
      '30–40 % menos tiempo de los programadores con herramientas de IA (estimado del equipo).',
      'Los 14 sitios quedaron corregidos.',
    ],
    note: 'Lo siguiente que haría: monitorear la velocidad de los 14 sitios cada semana para detectar retrocesos antes de que afecten el posicionamiento.',
    next: 'silbe',
    meta: {
      title: 'Ideal Team: 14 sitios más rápidos | Santiago Cardona',
      description: 'Rendimiento, seguridad y migraciones para 14 sitios de Ideal Team: −60 % en tiempo de carga.',
    },
  },
};

const en: Record<CaseId, CaseText> = {
  silbe: {
    id: 'silbe',
    name: 'silBe by Silvy',
    tag: 'Growth, tech & conversion lead · Fitness subscription',
    period: 'Aug 2020 – Jun 2026',
    headline: 'From a free community to a *subscription* business.',
    lead: 'I led growth, tech and conversion for silBe by Silvy from August 2020 to June 2026, reporting results to the founder. The first launch sold USD 800k, and conversion went from about 3% to 4%.',
    figures: [
      { value: 'USD 400k', label: 'in sales in the first week', source: 'Forbes Colombia, 2021' },
      { value: '5,000', label: 'subscribers in the first week', source: 'Forbes Colombia, 2021' },
      { value: 'USD 800k', label: 'across the whole first launch', source: 'Internal data' },
      { value: '3% → 4%', label: 'purchase conversion after the funnel changes', source: 'Internal data' },
      { value: '42%', label: 'of the final waitlist bought', source: 'Internal data' },
      { value: '25k', label: 'paying subscribers on the base I helped build', source: 'Internal data' },
    ],
    stall: 'In 2020 Silvy had about 1M Instagram followers and ran free live workouts every day, but the community brought in no revenue.',
    did: [
      'Built the MVP and the funnel: a pre-registration landing page, WordPress with LearnDash, payments, email flows and automations. 42% of the final waitlist bought.',
      'Removed payment friction: interest-free installments, cash payment at Efecty and Baloto, only two plans, WhatsApp cart recovery and a sales-trained chat team.',
      'Tested on live buyers: A/B tests with Nelio A/B Testing on the first buyers of each launch, with the winner shipped right away. Conversion went from about 3% to 4.0%.',
      'Designed the in-app subscription on FitBudd: onboarding, paywall, plans and a 7-day free trial. By 2022, 20,000 users were paying USD 29 a month.',
    ],
    changed: [
      'USD 400k and 5,000 subscribers in the first week (Forbes Colombia, 2021).',
      'USD 800k across the whole first launch, with 42% of the final waitlist converting (internal data).',
      'Conversion from about 3% to 4.0%, and price from USD 29 to USD 39 a month with no rise in churn (internal data).',
    ],
    note: 'Figures marked "Forbes Colombia, 2021" come from Forbes Colombia (February 7, 2021). Figures marked "Internal data" come from silBe\'s own records.',
    story: [
      { when: 'Context', title: 'A big community with no revenue', text: 'silBe by Silvy is a fitness subscription for women. In August 2020, Silvy had about 1M Instagram followers and ran free live workouts every day, but the community made no money. There was no product and no revenue.' },
      { when: 'My role', title: 'Growth, tech and conversion, 2020–2026', text: "I owned the funnel, the tech and conversion, and later all of marketing. I reported results to the founder and worked with her team and, later on, with FitBudd's development team in India." },
      { when: 'The constraint', title: 'Sell before there is an app', text: 'The first version had to sell to an audience used to free content, and to buyers who often prefer cash or installments over a single card payment.' },
      { when: 'December 17, 2020', title: 'The MVP: an 8-week challenge', text: 'Before any app, I built an 8-week challenge for women aged 18 to 50: a personalized nutrition plan, 60 follow-along workout videos, nutrition PDFs and daily WhatsApp support for buyers. I did the value proposition, the pre-registration landing page, the WordPress and LearnDash content platform, payments, email flows and automations myself. 42% of the final waitlist bought (internal data), and the first week brought 5,000 subscribers and USD 400k in sales (Forbes Colombia, 2021).' },
      { when: 'Launch CRO', title: 'Conversion from about 3% to 4%', text: 'I changed the funnel one piece at a time: interest-free installments, cash payment at Efecty and Baloto, only two plans (the challenge, or the challenge plus nutrition), a USD 300 personalized nutrition upsell that 252 people bought, abandoned-cart recovery over WhatsApp, and a sales-trained chat team for hesitant buyers. I ran A/B tests with Nelio A/B Testing on the first buyers of each launch and shipped the winner right away. Together, these changes took conversion from about 3% to 4.0%, and the launch closed at USD 800k (internal data).' },
      { when: 'The next challenges', title: 'Repeat, with paid media', text: 'Three more challenges followed. I led all of the marketing: paid media, SEO, SEM and analytics.' },
      { when: 'From challenge to app', title: 'Onboarding, paywall and a 7-day trial', text: "The subscription moved into an app. Trainerize didn't fit, so silBe switched to FitBudd's native iOS and Android apps. I designed the onboarding, the paywall (in FitBudd's no-code builder, with their development team in India), the plans and a 7-day free trial. By 2022, 20,000 users were paying USD 29 a month." },
      { when: 'Pricing', title: 'From USD 29 to USD 39 a month', text: "As the brand grew in higher-income markets (the US, the Middle East, Australia and Spain), the price went up to USD 39 a month. Churn didn't rise and new sales held." },
      { when: 'Last project', title: 'A custom app for local payments', text: "FitBudd's payment screen couldn't do what silBe needed: DRUO auto-debit from Bancolombia accounts and prices converted to local currency by location. I led the move to a custom-built app until I left in June 2026." },
      { when: 'Tools', title: 'Stack', text: 'WordPress, LearnDash, Nelio A/B Testing, WhatsApp, email marketing and automations, Trainerize, FitBudd (iOS and Android), paid media, SEO, SEM and analytics.' },
      { when: 'What I learned', title: 'What I bring to any team', text: 'The subscription base I helped build is now at 25,000 paying subscribers. Three habits came out of it: launch with the smallest product that can sell, remove payment friction before buying traffic, and test on the first buyers of each launch so the winner ships right away.' },
    ],
    next: 'undergold',
    meta: {
      title: 'silBe: from a free community to a subscription | Santiago Cardona',
      description: 'I led growth, tech and conversion for silBe by Silvy (2020–2026): a USD 800k launch and conversion from about 3% to 4%.',
    },
  },
  undergold: {
    id: 'undergold',
    name: 'Undergold',
    tag: 'B2B fashion · Catalog automation · Contract project, completed',
    headline: '14+ hours a week, *back*.',
    lead: 'Undergold is a clothing brand with 100+ employees that sells wholesale in B2B markets worldwide. I designed and connected the system that keeps its B2B catalog up to date.',
    figures: [
      { value: '14+ h', label: 'a week saved' },
      { value: '1', label: 'single source of data, no double entry' },
    ],
    stall: "Undergold sold through Brandboom, which didn't allow quick price or inventory updates. Everything was done by hand: 20+ hours a week just keeping products and catalogs current.",
    did: [
      'I connected Shopify, Supabase and Vercel into a custom system.',
      'I moved the data into a single source: it goes in once, in one place.',
      'Images come straight from Shopify, using the Shopify Plus plan the brand already paid for.',
      'Browsing and buying run on Shopify, which is already built for e-commerce.',
    ],
    changed: [
      '14+ hours a week saved for Laura, head of internationalization.',
      'A single source of data, no double entry.',
    ],
    note: "This case's images are an illustrative recreation. Undergold's sales figures are not published. What I'd do next: track orders placed through the new catalog to tie the time saved to sales.",
    next: 'idealTeam',
    meta: {
      title: 'Undergold: a B2B catalog without double entry | Santiago Cardona',
      description: "I connected Shopify, Supabase and Vercel for Undergold's B2B catalog: 14+ hours a week saved.",
    },
  },
  idealTeam: {
    id: 'idealTeam',
    name: 'Ideal Team',
    tag: 'Web performance · 14 websites · Contract project, completed',
    headline: 'Fourteen sites, *one* standard.',
    lead: "Ideal Team is an agency of 50+ people across the US, Canada and Colombia. I led performance, security and migrations for 14 of its client sites, all plastic-surgery practices.",
    figures: [
      { value: '−60%', label: 'load time' },
      { value: '−75%', label: 'server and cloud resources' },
      { value: '30–40%', label: 'less developer time (team estimate)' },
      { value: '14', label: 'sites fixed' },
    ],
    stall: 'Fourteen sites, each with a different problem: Google rankings, speed, mobile loading and security.',
    did: [
      'A site-by-site audit, with one standard for all of them.',
      'Caching and image recompression. On one site, images went from 223 MB to 75 MB and moved to WebP.',
      'Hardened security on every site.',
      'Moved some sites to Framer and others to a new server.',
    ],
    changed: [
      'Load times cut by 60%.',
      '75% fewer server and cloud resources.',
      '30–40% less developer time with AI tools (team estimate).',
      'All 14 sites fixed.',
    ],
    note: "What I'd do next: check the speed of all 14 sites every week to catch regressions before they hurt rankings.",
    next: 'silbe',
    meta: {
      title: 'Ideal Team: 14 faster websites | Santiago Cardona',
      description: 'Performance, security and migrations for 14 Ideal Team websites: load times cut by 60%.',
    },
  },
};

export const CASES: Record<Lang, Record<CaseId, CaseText>> = { es, en };
