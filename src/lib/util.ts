import type { Lang } from '../config';
import { ROUTES, type RouteId } from '../i18n/routes';

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Convierte *palabra* en <em class="s">palabra</em> (Source Serif 4 cursiva violeta). */
export function emph(text: string, cls = 's'): string {
  // La palabra en serif y la puntuación que la sigue no se separan al partir líneas.
  return esc(text).replace(/(\S*)\*([^*]+)\*([.,;:?!¿¡]*)/g, `<span class="nw">$1<em class="${cls}">$2</em>$3</span>`);
}

/** Quita los asteriscos (para atributos, títulos y meta). */
export const plain = (text: string) => text.replace(/\*/g, '');

/** Resuelve 'silbe', 'pfIlmin' o 'advisory#funnels' a la ruta del idioma. */
export function link(lang: Lang, key: string): string {
  const [id, hash] = key.split('#');
  const base = ROUTES[id as RouteId]?.[lang];
  if (!base) throw new Error(`Ruta desconocida: ${key}`);
  return hash ? `${base}#${hash}` : base;
}
