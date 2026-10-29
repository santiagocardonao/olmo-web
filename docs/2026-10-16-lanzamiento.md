# Lanzamiento de olmo.agency · 16 de octubre de 2026

El sitio dejó Framer y quedó como sitio estático en Astro, publicado en SiteGround.

## Migración

- `scripts/deploy.sh` construye con `SITE_URL=https://olmo.agency` y `PUBLIC_NOINDEX=false` y sube `dist/` a `www/olmo.agency/public_html/` con `rsync --delete`, sin tocar `.well-known` (certificado SSL).
- `pruebas.olmo.agency` se vació y redirige (301) a la misma ruta en olmo.agency.
- Redirecciones en `public/.htaccess`: HTTP → HTTPS, `www` → olmo.agency, URLs de Framer, `/casos/*` → `/portafolio/*` y `/diagnostico/` → `/asesoria/` (el diagnóstico se eliminó del sitio).
- Verificado: las 44 URLs del sitemap responden 200 y una ruta inexistente responde 404.

## Medición

- Google Tag Manager `GTM-NF997GFC` carga en todas las páginas y GA4 (`G-2RREBLZ19H`) recibe `page_view` desde olmo.agency.
- La medición mejorada de GA4 registra los clics a WhatsApp como `click` hacia `wa.me`. Cada botón tiene `data-cta` (por ejemplo `wa5-header`, `wa4-ladder`) para medirlo por separado en GTM.

## SEO

- Canonical, `hreflang` (es, en, x-default), Open Graph y Twitter en todas las páginas; `sitemap.xml` con alternos por idioma; `robots.txt` con `Allow: /`.
- JSON-LD `ProfessionalService` en la home (Olmo, Medellín, fundador Santiago Cardona Ortiz).
- Títulos de 25 a 65 caracteres y descripciones de 70 a 165, sin duplicados.

## Textos

- Sin lorem ipsum en ninguna página.
- Inglés revisado contra el español, con un término único para el servicio mensual: "Monthly advisory".

## Seguridad

- Cabeceras en `public/.htaccess`: HSTS, `X-Frame-Options: DENY`, `Cross-Origin-Opener-Policy`, `Permissions-Policy`, `nosniff`, `Referrer-Policy`.
- CSP en modo solo reporte con los hashes de los dos `<script>` en línea (GTM y `no-anim`). Si cambian, hay que recalcularlos; tras una semana sin violaciones se pasa a `Content-Security-Policy`.
- `.env` y `.env.deploy` nunca se versionan. Archivos ocultos, `.git` y listados de carpetas responden 403.
