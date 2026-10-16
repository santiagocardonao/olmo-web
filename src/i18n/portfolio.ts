/**
 * Portafolio: 14 proyectos. Orden de Santiago (15 oct 2026) + Ideal Team e ILMIN (agregados el mismo día).
 * silBe, Undergold e Ideal Team enlazan a su caso completo; el resto tiene ficha propia en /portafolio/<slug>/.
 * Solo se publican cifras y enlaces aprobados por Santiago; cualquier dato nuevo necesita su visto bueno.
 * El inglés es traducción de Olmo (pendiente de revisión de Santiago).
 */
import type { Lang } from '../config';
import type { RouteId } from './routes';

export type ProjectId =
  | 'silbe' | 'undergold' | 'ideal' | 'balparaiso' | 'miaplus' | 'zafiro'
  | 'vieli' | 'sarabe' | 'ilmin' | 'itaca' | 'metricas' | 'cotiza' | 'espanol' | 'dsa';

export const ORDER: ProjectId[] = [
  'silbe', 'undergold', 'ideal',
  'balparaiso', 'miaplus', 'zafiro', 'vieli', 'sarabe', 'ilmin', 'itaca',
  'metricas', 'cotiza', 'espanol', 'dsa',
];

/** Ruta de cada proyecto: caso completo o ficha del portafolio. */
export const PROJECT_ROUTE: Record<ProjectId, RouteId> = {
  silbe: 'silbe', undergold: 'undergold', ideal: 'idealTeam', ilmin: 'pfIlmin',
  balparaiso: 'pfBalparaiso', miaplus: 'pfMiaplus', zafiro: 'pfZafiro', vieli: 'pfVieli', sarabe: 'pfSarabe', itaca: 'pfItaca',
  metricas: 'pfMetricas', cotiza: 'pfCotiza', espanol: 'pfEspanol', dsa: 'pfDsa',
};

/** Slug de la ficha (igual en ES y EN). */
export const SLUG: Partial<Record<ProjectId, string>> = {
  balparaiso: 'balparaiso', miaplus: 'mia-plus', zafiro: 'zafiro', vieli: 'vieli', sarabe: 'sarabe', ilmin: 'ilmin', itaca: 'itaca',
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
  pending?: boolean; // faltan textos e imágenes de Santiago
  // Las capturas de la galería salen de src/assets/galerias/<id>/ (ver ProjectPage).
  meta?: { title: string; description: string };
}

const GH = 'https://github.com/santiagocardonao/';

const es: Record<ProjectId, Project> = {
  silbe: { name: 'silBe by Silvy', tag: 'Growth y producto · 2020–2026' },
  undergold: { name: 'Undergold', tag: 'Marketplace B2B · Concepto y desarrollo con IA' },
  ideal: { name: 'Ideal Team', tag: 'Agencia con 40+ clientes · Web y operación' },
  balparaiso: {
    name: 'Balparaiso',
    tag: 'Diseño y desarrollo web',
    headline: 'Moda de Medellín, *vestida* para vender.',
    lead: 'Marca de moda masculina de alta gama de Medellín. Mezcla prêt-à-porter y streetwear con esencia latinoamericana.',
    facts: [{ k: 'Rol', v: 'Diseño y desarrollo web' }, { k: 'Plataforma', v: 'Shopify' }, { k: 'Sector', v: 'Moda' }],
    did: ['Diseñé el sitio y el recorrido de compra.', 'Desarrollé la tienda en Shopify.'],
    live: { href: 'https://balparaiso.com/', label: 'balparaiso.com' },
    pending: true,
    meta: { title: 'Balparaiso: diseño y desarrollo web | Olmo', description: 'Diseño y desarrollo de la tienda en Shopify de Balparaiso, marca de moda masculina de alta gama de Medellín.' },
  },
  miaplus: {
    name: 'Mía+',
    tag: 'Diseño y desarrollo web',
    headline: 'Una farmacia que se *entiende* en línea.',
    lead: 'Farmacia Mía+ está en Puerto Rico. Su equipo de farmacéuticos prepara medicamentos a la medida de cada paciente.',
    facts: [{ k: 'Rol', v: 'Diseño y desarrollo web' }, { k: 'Plataforma', v: 'Shopify' }, { k: 'Sector', v: 'Salud, Puerto Rico' }],
    did: ['Diseñé el sitio y la forma de presentar sus servicios.', 'Desarrollé la tienda en Shopify.'],
    live: { href: 'https://farmaciamiapr.com/', label: 'farmaciamiapr.com' },
    pending: true,
    meta: { title: 'Mía+: diseño y desarrollo web | Olmo', description: 'Diseño y desarrollo del sitio en Shopify de Farmacia Mía+, en Puerto Rico.' },
  },
  zafiro: {
    name: 'Zafiro Clothing Corp',
    tag: 'Diseño y desarrollo web',
    headline: 'Más de 30 marcas en *una sola* tienda.',
    lead: 'Tienda multimarca de ropa masculina en Puerto Rico, con tiendas físicas y venta online a Puerto Rico y Estados Unidos.',
    facts: [{ k: 'Rol', v: 'Diseño y desarrollo web' }, { k: 'Plataforma', v: 'Shopify' }, { k: 'Sector', v: 'Moda, Puerto Rico' }],
    did: ['Diseñé el sitio y la navegación por marcas y categorías.', 'Desarrollé la tienda en Shopify.'],
    live: { href: 'https://www.zafiroshop.com/', label: 'zafiroshop.com' },
    pending: true,
    meta: { title: 'Zafiro Clothing: diseño y desarrollo web | Olmo', description: 'Diseño y desarrollo de la tienda en Shopify de Zafiro Clothing, tienda multimarca de Puerto Rico.' },
  },
  vieli: {
    name: 'Vieli',
    tag: 'Cofundador y COO · 8 años',
    headline: 'Ocho años dirigiendo *un estudio*.',
    lead: 'Estudio digital de 30 personas que cofundé en Medellín y dirigí como COO de 2017 a 2025, con clientes en Colombia, Puerto Rico y Argentina.',
    facts: [{ k: 'Rol', v: 'Cofundador y COO' }, { k: 'Años', v: '2017–2025' }, { k: 'Equipo', v: '30 personas' }],
    about: 'En Vieli hicimos sitios web, apps, tiendas online y marcas. Más de 100 proyectos entregados, y todos los clientes llegaron por referidos o aliados: nunca pagamos para conseguir clientes.',
    stats: [
      { v: '+100', k: 'proyectos entregados' },
      { v: '100 %', k: 'de los clientes llegaron por referidos' },
      { v: '300.000', k: 'personas en la comunidad de una creadora de yoga, que empezó en 10.000' },
    ],
    did: [
      { t: 'Entrada de clientes', d: 'Recibía a cada cliente nuevo: evaluaba si encajaba, definía el alcance, cotizaba y pasaba el proyecto al equipo.' },
      { t: 'Del pedido a los requisitos', d: 'Traducía lo que pedía el cliente en requisitos para diseño y desarrollo, y cuidaba el alcance hasta el lanzamiento.' },
      { t: 'Un estudio que no dependía de mí', d: 'Documenté cómo trabajaba el estudio, de la primera conversación a la entrega, para que un equipo remoto de 30 personas funcionara sin depender de mí.' },
      { t: 'Apps y comunidad', d: 'Lanzamos apps con Hotmart y FitBudd, y llevamos la comunidad de una creadora de yoga de 10.000 a más de 300.000 personas.' },
    ],
    live: { href: 'https://vieli.com.co/', label: 'vieli.com.co' },
    meta: { title: 'Vieli: cofundador y COO durante 8 años | Olmo', description: 'Estudio digital de 30 personas que cofundé y dirigí como COO de 2017 a 2025: más de 100 proyectos, todos por referidos.' },
  },
  sarabe: {
    name: 'SaraBe',
    tag: 'Escritora y conferencista · Web',
    headline: 'Una web con un camino de compra *para cada* servicio.',
    lead: 'Sara Betancur es escritora y conferencista. Sus servicios estaban regados en varios canales y costaba entender qué ofrecía.',
    facts: [{ k: 'Rol', v: 'Estrategia, diseño y desarrollo web' }, { k: 'Ventas', v: 'Shopify y WhatsApp' }, { k: 'Sector', v: 'Marca personal' }],
    about: 'Reuní toda la información en una sola web para que sus servicios fueran fáciles de verificar y de entender.',
    did: [
      'Cada servicio lleva un llamado a la acción directo: los productos físicos se compran en Shopify y las asesorías se agendan por WhatsApp.',
      'Redirigí tráfico de todos los canales a Patreon y a sus podcasts y entrevistas en Spotify.',
    ],
    live: { href: 'https://sarabetancur.com/', label: 'sarabetancur.com' },
    meta: { title: 'SaraBe: una web para cada servicio | Olmo', description: 'Web de Sara Betancur, escritora y conferencista: cada servicio con su camino de compra, en Shopify o por WhatsApp.' },
  },
  ilmin: {
    name: 'ILMIN',
    tag: 'Perfumes · Marketing y e-commerce',
    headline: '+25 % en ventas digitales *en tres* meses.',
    lead: 'ILMIN es una marca de perfumería nicho de Medellín. Además de su tienda online, asumí la dirección de toda su estrategia de marketing.',
    facts: [{ k: 'Rol', v: 'Dirección de marketing y e-commerce' }, { k: 'Plataforma', v: 'Shopify' }, { k: 'Sector', v: 'Perfumería nicho' }],
    about: 'Además del e-commerce, asumí la dirección de toda la estrategia de marketing y asesoré a la marca para aprovechar mejor el canal digital.',
    did: [
      'Dirijo la estrategia de marketing de la marca.',
      'Me encargo de la tienda online en Shopify.',
      'Asesoro a la marca para que el canal digital venda más.',
    ],
    live: { href: 'https://www.ilmin.com/', label: 'ilmin.com' },
    pending: true,
    meta: { title: 'ILMIN: +25 % en ventas digitales en 3 meses | Olmo', description: 'Dirección de marketing y e-commerce para ILMIN, perfumería nicho de Medellín: +25 % en ventas digitales en los primeros 3 meses.' },
  },
  itaca: {
    name: 'Ítaca Clothing',
    tag: 'Diseño y desarrollo web',
    headline: 'Ropa de ciclismo, *probada* en la montaña.',
    lead: 'Marca de ropa para MTB: jerseys, pantalones y guantes para enduro, gravel, XC y ruta, desarrollados y probados por el ciclista Marcelo Gutiérrez.',
    facts: [{ k: 'Rol', v: 'Diseño y desarrollo web' }, { k: 'Plataforma', v: 'Shopify' }, { k: 'Sector', v: 'Ropa deportiva' }],
    did: ['Diseñé el sitio y el recorrido de compra.', 'Desarrollé la tienda en Shopify.'],
    live: { href: 'https://itacaclothing.com/', label: 'itacaclothing.com' },
    pending: true,
    meta: { title: 'Ítaca Clothing: diseño y desarrollo web | Olmo', description: 'Diseño y desarrollo de la tienda en Shopify de Ítaca Clothing, ropa MTB probada por Marcelo Gutiérrez.' },
  },
  metricas: {
    name: 'Olmo Métricas',
    tag: 'Calculadora de suscripciones',
    headline: 'Las cuentas de una suscripción, *en minutos*.',
    lead: 'Calculadora gratuita para negocios de suscripción: apps, streaming, música y SaaS.',
    facts: [{ k: 'Tipo', v: 'Herramienta gratuita' }, { k: 'Tecnología', v: 'React y Supabase (Postgres)' }, { k: 'Idiomas', v: 'Español e inglés' }],
    about: 'Pones usuarios, churn, precio, comisiones de pago, crecimiento y costos, y te devuelve MRR, ingresos anuales, CLTV, CAC, LTV:CAC, recuperación de la inversión, utilidad y punto de equilibrio. Incluye un semáforo de diagnóstico y un PDF de dos páginas.',
    did: [
      'Todos los cálculos viven en una sola función de Postgres, así que hay una única fuente de verdad.',
      'Cada estudio se puede guardar con un link y reabrir después.',
      'Funciona en USD, EUR, MXN y COP.',
    ],
    live: { href: 'https://metricas.olmo.agency/', label: 'metricas.olmo.agency' },
    repo: 'olmo-metricas',
    meta: { title: 'Olmo Métricas: calculadora de suscripciones | Olmo', description: 'Calculadora gratuita de MRR, CLTV, CAC, LTV:CAC y punto de equilibrio para negocios de suscripción.' },
  },
  cotiza: {
    name: 'Olmo Cotiza',
    tag: 'Cotizaciones con IA',
    headline: 'Del texto libre a una *propuesta* lista.',
    lead: 'Generador de cotizaciones: escribes el alcance y los precios en texto libre, y sale una propuesta con la marca de Olmo, link público y PDF.',
    facts: [{ k: 'Tipo', v: 'Herramienta propia, en uso con clientes' }, { k: 'Tecnología', v: 'Supabase, Edge Functions y la API de Claude' }],
    about: 'Claude ordena la información, las reglas del negocio la validan y las plantillas del sistema de diseño de Olmo arman la propuesta. Todo queda guardado en Postgres, así que se puede consultar cuánto se cotizó, a quién, qué se abrió y qué se cerró.',
    did: [
      'Lo construí con Claude Code sobre Supabase: Postgres con seguridad por filas, Edge Functions y tareas programadas.',
      'El modelo redacta y estructura; las plantillas mandan en el diseño, así que cada propuesta sale consistente.',
      'Las propuestas salen en español o en inglés.',
    ],
    live: { href: 'https://cotiza.olmo.agency/demo', label: 'cotiza.olmo.agency/demo' },
    repo: 'olmo-cotiza',
    meta: { title: 'Olmo Cotiza: cotizaciones con IA | Olmo', description: 'Generador de cotizaciones con Claude y Supabase: del texto libre a una propuesta con link público y PDF.' },
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
    meta: { title: 'Español natural: skill para Claude | Olmo', description: 'Skill de código abierto para que Claude escriba en español nativo, no en traducción del inglés.' },
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
    meta: { title: 'Design System Adherence: skill para Claude | Olmo', description: 'Skill de Claude que audita si un entregable sigue su design system, con color y contraste medidos por scripts.' },
  },
};

const en: Record<ProjectId, Project> = {
  silbe: { name: 'silBe by Silvy', tag: 'Growth & product · 2020–2026' },
  undergold: { name: 'Undergold', tag: 'B2B marketplace · Concept & AI development' },
  ideal: { name: 'Ideal Team', tag: 'Agency with 40+ clients · Web & operations' },
  balparaiso: {
    name: 'Balparaiso',
    tag: 'Web design & development',
    headline: 'Medellín fashion, *dressed* to sell.',
    lead: 'A high-end menswear brand from Medellín. It blends prêt-à-porter and streetwear with a Latin American feel.',
    facts: [{ k: 'Role', v: 'Web design & development' }, { k: 'Platform', v: 'Shopify' }, { k: 'Industry', v: 'Fashion' }],
    did: ['I designed the site and the path to purchase.', 'I built the store on Shopify.'],
    live: { href: 'https://balparaiso.com/', label: 'balparaiso.com' },
    pending: true,
    meta: { title: 'Balparaiso: web design & development | Olmo', description: 'Design and development of the Shopify store for Balparaiso, a high-end menswear brand from Medellín.' },
  },
  miaplus: {
    name: 'Mía+',
    tag: 'Web design & development',
    headline: 'A pharmacy that makes *sense* online.',
    lead: 'Farmacia Mía+ is in Puerto Rico. Its team of pharmacists prepares medication tailored to each patient.',
    facts: [{ k: 'Role', v: 'Web design & development' }, { k: 'Platform', v: 'Shopify' }, { k: 'Industry', v: 'Health, Puerto Rico' }],
    did: ['I designed the site and how its services are presented.', 'I built the store on Shopify.'],
    live: { href: 'https://farmaciamiapr.com/', label: 'farmaciamiapr.com' },
    pending: true,
    meta: { title: 'Mía+: web design & development | Olmo', description: 'Design and development of the Shopify site for Farmacia Mía+ in Puerto Rico.' },
  },
  zafiro: {
    name: 'Zafiro Clothing Corp',
    tag: 'Web design & development',
    headline: '30+ brands in *one* store.',
    lead: 'A multi-brand menswear retailer in Puerto Rico, with physical stores and online sales to Puerto Rico and the US.',
    facts: [{ k: 'Role', v: 'Web design & development' }, { k: 'Platform', v: 'Shopify' }, { k: 'Industry', v: 'Fashion, Puerto Rico' }],
    did: ['I designed the site and the browsing by brand and category.', 'I built the store on Shopify.'],
    live: { href: 'https://www.zafiroshop.com/', label: 'zafiroshop.com' },
    pending: true,
    meta: { title: 'Zafiro Clothing: web design & development | Olmo', description: 'Design and development of the Shopify store for Zafiro Clothing, a multi-brand retailer in Puerto Rico.' },
  },
  vieli: {
    name: 'Vieli',
    tag: 'Co-founder & COO · 8 years',
    headline: 'Eight years running *a studio*.',
    lead: 'A 30-person digital studio I co-founded in Medellín and ran as COO from 2017 to 2025, with clients in Colombia, Puerto Rico and Argentina.',
    facts: [{ k: 'Role', v: 'Co-founder & COO' }, { k: 'Years', v: '2017–2025' }, { k: 'Team', v: '30 people' }],
    about: 'At Vieli we built websites, apps, online stores and brands. 100+ projects delivered, and every client came through a referral or a partner: we never paid for acquisition.',
    stats: [
      { v: '100+', k: 'projects delivered' },
      { v: '100%', k: 'of clients came through referrals' },
      { v: '300,000', k: "people in a yoga creator's community, up from 10,000" },
    ],
    did: [
      { t: 'Client intake', d: 'I took in every new client: checked the fit, scoped the work, priced it and handed it to the team.' },
      { t: 'From brief to requirements', d: 'I turned client needs into requirements for design and development, and kept scope in check through launch.' },
      { t: "A studio that didn't need me", d: 'I documented how the studio worked, from first conversation to delivery, so a remote team of 30 could run without depending on me.' },
      { t: 'Apps and community', d: "We launched apps with Hotmart and FitBudd, and grew a yoga creator's community from 10,000 to more than 300,000 people." },
    ],
    live: { href: 'https://vieli.com.co/', label: 'vieli.com.co' },
    meta: { title: 'Vieli: co-founder & COO for 8 years | Olmo', description: 'A 30-person digital studio I co-founded and ran as COO from 2017 to 2025: 100+ projects, all from referrals.' },
  },
  sarabe: {
    name: 'SaraBe',
    tag: 'Writer and speaker · Web',
    headline: 'One website with a path to purchase *for each* service.',
    lead: 'Sara Betancur is a writer and speaker. Her services were spread across several channels, and it was hard to tell what she offered.',
    facts: [{ k: 'Role', v: 'Strategy, web design & development' }, { k: 'Sales', v: 'Shopify and WhatsApp' }, { k: 'Industry', v: 'Personal brand' }],
    about: 'I brought everything together on one website so her services were easy to verify and understand.',
    did: [
      'Every service has a direct call to action: people buy physical products on Shopify and book consultations over WhatsApp.',
      'I routed traffic from every channel to Patreon and to her podcasts and interviews on Spotify.',
    ],
    live: { href: 'https://sarabetancur.com/', label: 'sarabetancur.com' },
    meta: { title: 'SaraBe: one website for every service | Olmo', description: 'Website for Sara Betancur, writer and speaker: every service has its own path to purchase, on Shopify or over WhatsApp.' },
  },
  ilmin: {
    name: 'ILMIN',
    tag: 'Fragrance · Marketing & e-commerce',
    headline: '+25% digital sales *in three* months.',
    lead: 'ILMIN is a niche fragrance brand from Medellín. Beyond their online store, I took over their whole marketing strategy.',
    facts: [{ k: 'Role', v: 'Marketing lead and e-commerce' }, { k: 'Platform', v: 'Shopify' }, { k: 'Industry', v: 'Niche fragrance' }],
    about: 'Beyond the e-commerce store, I took over the whole marketing strategy and advised the brand on making better use of its digital channel.',
    did: [
      'I lead the brand\'s marketing strategy.',
      'I run the Shopify online store.',
      'I advise the brand on getting more sales out of its digital channel.',
    ],
    live: { href: 'https://www.ilmin.com/', label: 'ilmin.com' },
    pending: true,
    meta: { title: 'ILMIN: +25% digital sales in 3 months | Olmo', description: 'Marketing leadership and e-commerce for ILMIN, a niche fragrance brand from Medellín: +25% digital sales in the first 3 months.' },
  },
  itaca: {
    name: 'Ítaca Clothing',
    tag: 'Web design & development',
    headline: 'Cycling apparel, *tested* on the trail.',
    lead: 'An MTB apparel brand: jerseys, pants and gloves for enduro, gravel, XC and road, developed and tested by rider Marcelo Gutiérrez.',
    facts: [{ k: 'Role', v: 'Web design & development' }, { k: 'Platform', v: 'Shopify' }, { k: 'Industry', v: 'Sportswear' }],
    did: ['I designed the site and the path to purchase.', 'I built the store on Shopify.'],
    live: { href: 'https://itacaclothing.com/', label: 'itacaclothing.com' },
    pending: true,
    meta: { title: 'Ítaca Clothing: web design & development | Olmo', description: 'Design and development of the Shopify store for Ítaca Clothing, MTB apparel tested by Marcelo Gutiérrez.' },
  },
  metricas: {
    name: 'Olmo Métricas',
    tag: 'Subscription calculator',
    headline: 'Subscription math, *in minutes*.',
    lead: 'A free calculator for subscription businesses: apps, streaming, music and SaaS.',
    facts: [{ k: 'Type', v: 'Free tool' }, { k: 'Stack', v: 'React and Supabase (Postgres)' }, { k: 'Languages', v: 'Spanish and English' }],
    about: 'Enter users, churn, price, payment fees, growth and costs, and get MRR, annual revenue, CLTV, CAC, LTV:CAC, payback, profit and break-even. It includes a traffic-light diagnosis and a two-page PDF.',
    did: [
      'All the math lives in a single Postgres function, so there is one source of truth.',
      'Every analysis can be saved as a link and reopened later.',
      'It works in USD, EUR, MXN and COP.',
    ],
    live: { href: 'https://metricas.olmo.agency/', label: 'metricas.olmo.agency' },
    repo: 'olmo-metricas',
    meta: { title: 'Olmo Métricas: subscription calculator | Olmo', description: 'A free MRR, CLTV, CAC, LTV:CAC and break-even calculator for subscription businesses.' },
  },
  cotiza: {
    name: 'Olmo Cotiza',
    tag: 'AI quote builder',
    headline: 'From free text to a *ready* proposal.',
    lead: 'A quote generator: you write the scope and prices in plain text, and out comes an Olmo-branded proposal with a public link and a PDF.',
    facts: [{ k: 'Type', v: 'In-house tool, used with clients' }, { k: 'Stack', v: 'Supabase, Edge Functions and the Claude API' }],
    about: 'Claude structures the information, business rules validate it, and templates from the Olmo design system assemble the proposal. Everything is stored in Postgres, so you can see what was quoted, to whom, what was opened and what was closed.',
    did: [
      'I built it with Claude Code on Supabase: Postgres with row-level security, Edge Functions and scheduled jobs.',
      'The model drafts and structures; the templates own the design, so every proposal comes out consistent.',
      'Proposals come out in Spanish or English.',
    ],
    live: { href: 'https://cotiza.olmo.agency/demo', label: 'cotiza.olmo.agency/demo' },
    repo: 'olmo-cotiza',
    meta: { title: 'Olmo Cotiza: AI quote builder | Olmo', description: 'A quote generator built on Claude and Supabase: from plain text to a proposal with a public link and PDF.' },
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
    meta: { title: 'Español natural: a Claude skill | Olmo', description: 'An open-source skill that makes Claude write native Spanish, not translated English.' },
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
    meta: { title: 'Design System Adherence: a Claude skill | Olmo', description: 'A Claude skill that audits whether a deliverable follows its design system, with color and contrast measured by scripts.' },
  },
};

/**
 * Títulos de cada fila de "Qué hice" y cifras de la franja (aprobados por Santiago, 15 oct 2026).
 * Los títulos van en el mismo orden que `did`. Vieli los tiene directamente en su ficha.
 */
const TITLES: Record<Lang, Partial<Record<ProjectId, string[]>>> = {
  es: {
    balparaiso: ['Diseño del sitio', 'Tienda en Shopify'],
    miaplus: ['Servicios claros', 'Tienda en Shopify'],
    zafiro: ['Navegación por marcas', 'Tienda en Shopify'],
    sarabe: ['Un camino por servicio', 'Tráfico a Patreon y Spotify'],
    ilmin: ['Estrategia de marketing', 'Tienda online', 'Canal digital'],
    itaca: ['Diseño del sitio', 'Tienda en Shopify'],
    metricas: ['Una sola fuente de verdad', 'Estudios con link', 'Cuatro monedas'],
    cotiza: ['Construido con Claude Code', 'Propuestas consistentes', 'Español e inglés'],
    espanol: ['Tres modos', 'Cinco dialectos', 'Sin corregir de más'],
    dsa: ['Tu sistema es la vara', 'Medido, no adivinado', 'Resultados repetibles'],
  },
  en: {
    balparaiso: ['Site design', 'Shopify store'],
    miaplus: ['Clear services', 'Shopify store'],
    zafiro: ['Browse by brand', 'Shopify store'],
    sarabe: ['A path for each service', 'Traffic to Patreon and Spotify'],
    ilmin: ['Marketing strategy', 'Online store', 'Digital channel'],
    itaca: ['Site design', 'Shopify store'],
    metricas: ['One source of truth', 'Shareable links', 'Four currencies'],
    cotiza: ['Built with Claude Code', 'Consistent proposals', 'Spanish and English'],
    espanol: ['Three modes', 'Five dialects', 'No over-correcting'],
    dsa: ['Your system sets the bar', 'Measured, not guessed', 'Repeatable results'],
  },
};

const STATS: Record<Lang, Partial<Record<ProjectId, { v: string; k: string }[]>>> = {
  es: {
    ilmin: [{ v: '+25 %', k: 'en ventas digitales en los primeros 3 meses' }],
    metricas: [{ v: '8', k: 'indicadores (MRR, CLTV, CAC…)' }, { v: '4', k: 'monedas' }, { v: '2', k: 'idiomas' }],
    espanol: [{ v: '5', k: 'dialectos' }, { v: '3', k: 'modos' }],
    dsa: [{ v: '4', k: 'cosas que mide: color, tipografía, tamaños y contraste' }],
  },
  en: {
    ilmin: [{ v: '+25%', k: 'digital sales in the first 3 months' }],
    metricas: [{ v: '8', k: 'metrics (MRR, CLTV, CAC…)' }, { v: '4', k: 'currencies' }, { v: '2', k: 'languages' }],
    espanol: [{ v: '5', k: 'dialects' }, { v: '3', k: 'modes' }],
    dsa: [{ v: '4', k: 'things it measures: color, type, sizes and contrast' }],
  },
};

/** Cifra de la tarjeta del índice (las mismas aprobadas de la home). */
const FIGURES: Record<Lang, Partial<Record<ProjectId, string>>> = {
  es: {
    silbe: 'USD 400k y 5.000 suscriptores en la primera semana (Forbes, 2021)',
    undergold: '+14 h a la semana ahorradas',
    ideal: '−60 % en tiempo de carga',
    ilmin: '+25 % en ventas digitales en 3 meses',
  },
  en: {
    silbe: 'USD 400k and 5,000 subscribers in the first week (Forbes, 2021)',
    undergold: '14+ hours a week saved',
    ideal: 'Load times cut by 60%',
    ilmin: '+25% digital sales in 3 months',
  },
};

/** Grupos del índice del portafolio, en orden. */
/** Debe seguir el mismo orden que ORDER. */
export const GROUPS: { id: 'cases' | 'brands' | 'tools'; ids: ProjectId[] }[] = [
  { id: 'cases', ids: ['silbe', 'undergold', 'ideal'] },
  { id: 'brands', ids: ['balparaiso', 'miaplus', 'zafiro', 'vieli', 'sarabe', 'ilmin', 'itaca'] },
  { id: 'tools', ids: ['metricas', 'cotiza', 'espanol', 'dsa'] },
];

for (const [lang, set] of [['es', es], ['en', en]] as const) {
  for (const id of Object.keys(set) as ProjectId[]) {
    const p = set[id];
    const titles = TITLES[lang][id];
    if (titles && p.did) p.did = p.did.map((d, i) => (typeof d === 'string' && titles[i] ? { t: titles[i], d } : d));
    if (FIGURES[lang][id]) p.figure = FIGURES[lang][id];
    if (id === 'zafiro') p.short = 'Zafiro';
    const stats = STATS[lang][id];
    if (stats) p.stats = stats;
  }
}

export const PROJECTS: Record<Lang, Record<ProjectId, Project>> = { es, en };
export const repoUrl = (repo: string) => GH + repo;
