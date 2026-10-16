// @ts-check
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

// URL pública del sitio (SITE_URL en .env). Producción: https://olmo.agency
const env = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), '');
const SITE = env.SITE_URL || 'https://olmo.agency';

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
});
