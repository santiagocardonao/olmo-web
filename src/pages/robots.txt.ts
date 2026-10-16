import type { APIRoute } from 'astro';
import { NOINDEX } from '../config';

// Pruebas: Disallow: / (PUBLIC_NOINDEX=true). Producción: PUBLIC_NOINDEX=false.
export const GET: APIRoute = ({ site }) =>
  new Response(
    NOINDEX
      ? 'User-agent: *\nDisallow: /\n'
      : `User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap.xml', site)}\n`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
