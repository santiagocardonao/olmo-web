import type { Lang } from '../config';
import forbes from '../assets/prensa/forbes.svg';
import telva from '../assets/prensa/telva.svg';
import laRazon from '../assets/prensa/la-razon.svg';
import telefe from '../assets/prensa/telefe.svg';
import marieClaire from '../assets/prensa/marie-claire.svg';
import elMundo from '../assets/prensa/el-mundo.svg';

/**
 * Prensa de clientes: solo notas publicadas MIENTRAS Santiago trabajaba con ese cliente.
 * La nota es sobre el cliente, no sobre él. Nada de cifras privadas (Radhi: solo ratios; silBe: solo lo que publicó Forbes).
 * Fuera a propósito: Radhi (Vivir en El Poblado 2020 y El Colombiano 2026, fuera de su periodo),
 * Julien en Infobae 2023 y La Vanguardia 2026 (fuera de 2024), Jahir Rueda (falta rol y años).
 */
type T = Record<Lang, string>;
export interface PressItem {
  id: string; outlet: string; logo: ImageMetadata; h: number;
  client: string; years: string; role: T; caption: T;
  articles: { url: string; date: string; title: T }[];
  caseHref?: string;
}

const silvy = { client: 'Silvy Araújo · silBe', years: '2020–2026', role: { en: 'Growth, tech and conversion', es: 'Growth, tecnología y conversión' } };
const gise = { client: 'Gise Schwartz', years: '2024–2025', role: { en: 'Organic growth', es: 'Crecimiento orgánico' } };
const giseCap = { en: 'Dancer and creator. I led the organic growth of her audience.', es: 'Bailarina y creadora. Lideré el crecimiento orgánico de su audiencia.' };

export const PRESS: PressItem[] = [
  {
    id: 'forbes', outlet: 'Forbes Colombia', logo: forbes, h: 30, ...silvy,
    caption: { en: 'From free Instagram workouts to a fitness subscription app. First launch: USD 400k and 5,000 subscribers in week one.', es: 'De entrenamientos gratis en Instagram a una app fitness de suscripción. Primer lanzamiento: USD 400k y 5.000 suscriptores en la primera semana.' },
    articles: [
      { url: 'https://forbes.co/editors-picks/top-creators-2025-silvana-araujo', date: '2025-12', title: { en: 'Top Creators 2025', es: 'Top Creators 2025' } },
      { url: 'https://forbes.co/editors-picks/silvy-araujo-la-creadora-fitness-que-no-se-rinde', date: '2024-12', title: { en: 'The fitness creator who never gives up', es: 'La creadora fitness que no se rinde' } },
    ],
    caseHref: 'silbe',
  },
  {
    id: 'telva', outlet: 'Telva', logo: telva, h: 26, ...gise, caption: giseCap,
    articles: [{ url: 'https://www.telva.com/bienestar/ejercicio/2025/04/29/680f843502136e4b6d8b456e.html', date: '2025-04', title: { en: 'Dancing improves mental health', es: 'Bailar mejora la salud mental' } }],
  },
  {
    id: 'la-razon', outlet: 'La Razón', logo: laRazon, h: 24, ...gise, caption: giseCap,
    articles: [{ url: 'https://www.larazon.es/madrid/danza-cerebro-proyecto-nazareth-gisela-prevenir-problemas-salud-mental_20241013670b86ffafcb530001e7269b.html', date: '2024-10', title: { en: 'Dance and the Brain', es: 'La danza y el cerebro' } }],
  },
  {
    id: 'telefe', outlet: 'Telefe', logo: telefe, h: 24, ...gise, caption: giseCap,
    articles: [{ url: 'https://www.mitelefe.com/streams-telefe/noticias/es-mi-motor-gisela-schwartz-a-corazon-abierto-en-hola-vos-pid2659625', date: '2024-08', title: { en: 'Interview on Hola Vos', es: 'Entrevista en Hola Vos' } }],
  },
  {
    id: 'marie-claire', outlet: 'Marie Claire', logo: marieClaire, h: 20, ...gise, caption: giseCap,
    articles: [{ url: 'https://marieclaire.perfil.com/noticias/cultura/en-primera-persona-la-danza-como-vehiculo-para-conectar-con-mas-mujeres.phtml', date: '2024-03', title: { en: 'Dance as a way to connect with women', es: 'La danza como vehículo para conectar con más mujeres' } }],
  },
  {
    id: 'el-mundo', outlet: 'El Mundo', logo: elMundo, h: 22,
    client: 'Julien Leprêtre', years: '2024', role: { en: 'Growth advisor', es: 'Asesor de growth' },
    caption: { en: 'Osteopath and personal trainer. I advised him on growth.', es: 'Osteópata y entrenador personal. Lo asesoré en growth.' },
    articles: [{ url: 'https://www.elmundo.es/vida-sana/cuerpo/2024/04/08/660d6a1fe4d4d83d498b4599.html', date: '2024-04', title: { en: 'The trainer who fixes posture', es: 'El entrenador que corrige la postura' } }],
  },
];

const MONTHS: T = { en: 'Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec', es: 'ene feb mar abr may jun jul ago sep oct nov dic' };
export const fmtDate = (d: string, lang: Lang) => {
  const [y, m] = d.split('-');
  return `${MONTHS[lang].split(' ')[+m - 1]} ${y}`;
};

export const PRESS_UI = {
  en: {
    meta: { title: 'My clients in the press | Santiago Cardona', description: 'Forbes, El Mundo, Telva and more: press coverage of creators I worked with, published while I was working with them.' },
    label: 'Press', title: 'My *clients* in the press',
    lead: 'Coverage of the creators I worked with, published while I was working with them. The articles are about them, not me. Below each one: what I did.',
    strip: 'My clients, in the press', stripAria: 'Press coverage of my clients', read: 'Read', seeCase: 'See the case',
  },
  es: {
    meta: { title: 'Mis clientes en la prensa | Santiago Cardona', description: 'Forbes, El Mundo, Telva y más: notas de prensa sobre creadores con los que trabajé, publicadas mientras trabajaba con ellos.' },
    label: 'Prensa', title: 'Mis *clientes* en la prensa',
    lead: 'Notas sobre los creadores con los que trabajé, publicadas mientras trabajaba con ellos. Las notas hablan de ellos, no de mí. Debajo de cada una cuento qué hice yo.',
    strip: 'Mis clientes, en la prensa', stripAria: 'Notas de prensa sobre mis clientes', read: 'Leer', seeCase: 'Ver el caso',
  },
} as const;
