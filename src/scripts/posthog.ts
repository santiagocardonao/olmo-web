// PostHog: páginas vistas, clics (autocapture) y salidas de página.
// Se empaqueta con el sitio (sin <script> en línea), así no cambian los hashes de la CSP.
// La librería va en un chunk aparte y se pide cuando el navegador está libre, para no
// competir con la primera pintura. No corre en localhost ni si la clave está vacía.
import { POSTHOG_KEY, POSTHOG_HOST } from '../config';

const local = /^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname);

async function start() {
  const { default: posthog } = await import('posthog-js');
  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    defaults: '2026-01-30',
    // Visitantes anónimos: sin perfiles de persona (el sitio no tiene login ni formularios).
    person_profiles: 'identified_only',
  });

  // Clics a WhatsApp con nombre propio: es la conversión del sitio.
  document.addEventListener('click', (e) => {
    const a = (e.target as Element | null)?.closest?.('a[href*="wa.me/"]') as HTMLAnchorElement | null;
    if (!a) return;
    posthog.capture('whatsapp_click', {
      lang: document.body.dataset.lang,
      link_text: a.textContent?.trim().slice(0, 80),
    });
  });
}

if (POSTHOG_KEY && !local) {
  const idle = window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 1500));
  idle(() => void start(), { timeout: 3000 });
}
