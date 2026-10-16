import type { APIRoute } from 'astro';
import { ROUTES } from '../i18n/routes';

export const GET: APIRoute = ({ site }) => {
  const urls = Object.values(ROUTES)
    .map((alt) =>
      (['es', 'en'] as const)
        .map(
          (l) => `  <url>
    <loc>${new URL(alt[l], site)}</loc>
    <xhtml:link rel="alternate" hreflang="es" href="${new URL(alt.es, site)}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${new URL(alt.en, site)}"/>
  </url>`,
        )
        .join('\n'),
    )
    .join('\n');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};
