import type { APIRoute } from 'astro';
import { NOINDEX } from '../config';
import { HIDDEN_ROUTES, ROUTES } from '../i18n/routes';

// El portafolio se indexa. Las páginas de precios (HIDDEN_ROUTES) se comparten por link directo
// y quedan fuera de Google (además llevan meta noindex y X-Robots-Tag en .htaccess).
// Pruebas (PUBLIC_NOINDEX=true): Disallow: / en todo.
const hidden = HIDDEN_ROUTES.flatMap((id) => [ROUTES[id].en, ROUTES[id].es])
  .map((p) => `Disallow: ${p}`)
  .join('\n');

export const GET: APIRoute = ({ site }) =>
  new Response(
    NOINDEX
      ? 'User-agent: *\nDisallow: /\n'
      : `User-agent: *\n${hidden}\nAllow: /\n\nSitemap: ${new URL('/sitemap.xml', site)}\n`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
