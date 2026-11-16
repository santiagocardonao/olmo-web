// PostHog: páginas vistas, clics (autocapture) y salidas de página.
// Se empaqueta con el sitio (sin <script> en línea), así no cambian los hashes de la CSP.
// La librería va en un chunk aparte y se pide cuando el navegador está libre, para no
// competir con la primera pintura. No corre en localhost ni si la clave está vacía.
import { POSTHOG_KEY, POSTHOG_HOST } from '../config';

const local = /^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname);

// Modo "soy yo": visitar el sitio con ?yo=1 marca este navegador como interno (?yo=0 lo quita).
// GTM lee la misma marca y envía traffic_type=internal a GA4; aquí PostHog simplemente no carga.
function internal(): boolean {
  try {
    const q = location.search;
    if (/[?&]yo=1/.test(q)) localStorage.setItem('sco_internal', '1');
    if (/[?&]yo=0/.test(q)) localStorage.removeItem('sco_internal');
    return localStorage.getItem('sco_internal') === '1';
  } catch {
    return false;
  }
}

async function start() {
  const { default: posthog } = await import('posthog-js');
  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    defaults: '2026-01-30',
    // Visitantes anónimos: sin perfiles de persona (el sitio no tiene login ni formularios).
    person_profiles: 'identified_only',
  });

  // Conversiones del portafolio: correo y LinkedIn (WhatsApp solo queda en las páginas de precios).
  const EVENTS: [string, string][] = [
    ['a[href^="mailto:"]', 'email_click'],
    ['a[href*="linkedin.com/"]', 'linkedin_click'],
    ['a[href*="wa.me/"]', 'whatsapp_click'],
  ];
  document.addEventListener('click', (e) => {
    const el = e.target as Element | null;
    for (const [sel, name] of EVENTS) {
      const a = el?.closest?.(sel) as HTMLAnchorElement | null;
      if (!a) continue;
      posthog.capture(name, {
        lang: document.documentElement.lang,
        cta: a.dataset.cta,
        link_text: a.textContent?.trim().slice(0, 80),
      });
      return;
    }
  });
}

if (POSTHOG_KEY && !local && !internal()) {
  const idle = window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 1500));
  idle(() => void start(), { timeout: 3000 });
}
