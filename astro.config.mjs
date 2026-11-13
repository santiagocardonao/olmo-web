// @ts-check
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

// URL pública del sitio (SITE_URL en .env). Producción: https://santiagocardonaortiz.com
const env = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), '');
const SITE = env.SITE_URL || 'https://santiagocardonaortiz.com';

export default defineConfig({
  site: SITE,
  trailingSlash: 'ignore',
  build: { format: 'directory', inlineStylesheets: 'auto' },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  image: { responsiveStyles: false },
  devToolbar: { enabled: false },
  // Astro 7 cambió el default a 'jsx'; true conserva el HTML de Astro 5.
  compressHTML: true,
});
