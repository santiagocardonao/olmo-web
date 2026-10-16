# olmo.agency · sitio nuevo

Sitio estático en Astro 7 (Node ≥ 22.22) + TypeScript, sin frameworks de UI. Animaciones con GSAP (ScrollTrigger + SplitText) solo cuando el visitante no pide `prefers-reduced-motion`.
En producción en **https://olmo.agency** desde el 16 de octubre de 2026. `pruebas.olmo.agency` se vació y redirige (301) a olmo.agency.

## Correr en local

```sh
npm install
npm run dev        # http://localhost:4321
npm run build      # genera dist/
npm run preview    # sirve dist/ tal como quedará en el servidor
npx astro check    # revisa tipos
```

Si npm falla por permisos de caché: `npm install --cache /ruta/temporal/npmcache`.

## Desplegar

```sh
npm run deploy     # = sh scripts/deploy.sh
```

El script construye con `SITE_URL=https://olmo.agency` y `PUBLIC_NOINDEX=false` y sube `dist/` con `rsync --delete` a `www/olmo.agency/public_html/` en SiteGround, sin tocar `.well-known` (certificado SSL).
Los datos de conexión están en `.env.deploy` (copiado de olmo-metricas, **no se versiona**): `SG_USER`, `SG_HOST`, `SG_PORT` y, opcional, `SG_KEY` (por defecto `~/.ssh/siteground_olmo`).
El script se niega a subir a cualquier otro destino.

## Dónde están los textos

| Qué | Archivo |
|---|---|
| Home ES/EN (literal de `13_textos_es_en/home.md`) | `src/i18n/home.ts` |
| Mensajes de WhatsApp (WA-1 a WA-6), teléfono, correo, redes | `src/config.ts` |
| Casos silBe, Undergold, Ideal Team (de `12_contenido_casos.md`) | `src/i18n/cases.ts` |
| Rutas ES ↔ EN (selector de idioma, hreflang, sitemap) | `src/i18n/routes.ts` |
| Páginas internas (cada una trae su texto ES/EN arriba) | `src/components/pages/*.astro` |
| Redirecciones 301 de Framer | `public/.htaccess` |

`*palabra*` en un texto = la palabra en Source Serif 4 cursiva violeta.
El sitio no tiene lorem ipsum. Lo que falta por decidir queda como comentario `<!-- PENDIENTE -->` en el HTML (no se ve en la página): `grep -rn "PENDIENTE" src`.

## Estructura

```
src/
  config.ts            banderas (NOINDEX, GTM), WhatsApp, correo, enlaces
  i18n/                textos y rutas
  layouts/Base.astro   <head> (SEO, hreflang, OG, robots, GTM), cabecera, menú, footer, cursor
  components/          Header, Menu, Footer, Btn, LangSwitch, PageHero, Visual (ilustraciones)
  components/home/     secciones de la home
  components/pages/    páginas internas
  scripts/site.ts      menú (foco atrapado, Esc), cursor, servicios, hora de Medellín, letras del footer
  scripts/anim.ts      GSAP: entradas del hero, letras del logo, revelado por líneas, titular fijo de casos
  pages/               rutas (ES en la raíz, EN en /en/)
public/                .htaccess, fuentes autoalojadas, favicon, imágenes OG
```

Imágenes: `src/assets/` (las procesa `astro:assets` a AVIF + WebP con `srcset`). Undergold, Ideal Team, los diagramas de servicios y las dos skills son ilustraciones SVG hechas con los tokens de Olmo (`Visual.astro`), no fotos de stock. Las capturas de Olmo Métricas, Olmo Cotiza y Steady se tomaron en vivo el 2026-10-14.

## Volver a tener un sitio de pruebas

`PUBLIC_NOINDEX=true` en `.env` imprime `<meta name="robots" content="noindex, nofollow">` y un `robots.txt` con `Disallow: /`. Úsalo solo para una copia de pruebas, nunca en olmo.agency.

## Analítica (GTM + GA4)

El sitio carga Google Tag Manager (`GTM-NF997GFC`, en `src/config.ts` o `PUBLIC_GTM_ID`), con el snippet en el `<head>` y el `<noscript>` al inicio del `<body>` (`src/layouts/Base.astro`). GA4 (`G-2RREBLZ19H`, propiedad "Olmo") se configura **dentro de GTM** con la etiqueta "GA4 - Olmo" en todas las páginas (versión 2 del contenedor), no en el código. Si se cambia algo de la medición, hay que actualizar la página de privacidad.

## Accesibilidad y movimiento

- `prefers-reduced-motion: reduce`: no se descarga GSAP, no hay cursor personalizado, el titular de casos no queda fijo y las transiciones CSS duran 0.
- Menú: `role="dialog"`, `aria-expanded`, foco atrapado, Esc cierra, el resto de la página queda `inert` y el foco vuelve al botón.
- Servicios: el estado activo responde a hover y a foco de teclado; en móvil cada servicio muestra su línea de apoyo y miniatura.
- Si el JS de animación no carga en 2 s, la clase `no-anim` deja todo visible.
