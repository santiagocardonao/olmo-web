// Animaciones con GSAP. Solo se carga sin prefers-reduced-motion.
// Regla: el estado oculto lo pone JS (gsap.from), nunca CSS; si esto falla, todo queda visible.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

export function init() {
  const root = document.documentElement;
  root.classList.add('anim-ready');
  root.classList.remove('no-anim');
  const mm = gsap.matchMedia();
  const P3 = 'power3.out';

  /* ---------- H2: letras del logo gigante al cargar ---------- */
  const logoInner = gsap.utils.toArray<HTMLElement>('.hero-logo .li');
  if (logoInner.length) {
    gsap.from(logoInner, {
      yPercent: 40, opacity: 0, duration: 0.9, ease: P3,
      stagger: { each: 0.05, from: 'center' }, delay: 0.05,
    });
  }

  /* ---------- H1: bloques del hero (h1, texto, botones, pills, tira) ---------- */
  const heroBits = gsap.utils.toArray<HTMLElement>('[data-hero]');
  if (heroBits.length) {
    mm.add({ sm: '(max-width: 767px)', lg: '(min-width: 768px)' }, (ctx) => {
      gsap.from(heroBits, {
        y: ctx.conditions?.sm ? 16 : 24, opacity: 0, duration: 0.6, ease: P3, stagger: 0.08, delay: 0.3,
        clearProps: 'transform,opacity',
      });
    });
  }

  /* ---------- H3: letras que se van al hacer scroll (≥1200) ---------- */
  const logoOuter = gsap.utils.toArray<HTMLElement>('.hero-logo .lo');
  if (logoOuter.length) {
    mm.add('(min-width: 1200px)', () => {
      gsap.to(logoOuter, {
        yPercent: -60, ease: 'none',
        stagger: { each: 0.04, from: 'center' },
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
      });
    });
  }

  /* ---------- T1 / P1: revelado por líneas en perspectiva + T2 palabra serif ---------- */
  gsap.utils.toArray<HTMLElement>('[data-split-lines]').forEach((el) => {
    const serif = el.querySelector('em.s');
    SplitText.create(el, {
      type: 'lines',
      mask: 'lines',
      autoSplit: true,
      linesClass: 'sl',
      onSplit(self) {
        const small = window.matchMedia('(max-width: 767px)').matches;
        const tl = gsap.timeline({
          scrollTrigger: { trigger: el, start: 'top 85%', once: true },
          delay: 0.15,
        });
        tl.from(self.lines, {
          rotationX: small ? -40 : -80, opacity: 0, transformOrigin: 'top center -50',
          duration: 0.9, ease: P3, stagger: small ? 0.08 : 0.1,
        });
        if (serif) {
          tl.from(serif, { y: '0.25em', filter: 'blur(6px)', opacity: 0, duration: 0.9, ease: P3 }, '-=0.45');
        }
        return tl;
      },
    });
  });

  /* ---------- Revelado de imágenes: la máscara sube y la foto se asienta ----------
     Una sola vez por imagen. Las del hero de página no, porque llegan con la transición. */
  const media = gsap.utils.toArray<HTMLElement>('main .media-frame').filter((m) => !m.closest('.phero, .hero'));
  media.forEach((m) => {
    const inner = m.querySelector('img, svg');
    const tl = gsap.timeline({ scrollTrigger: { trigger: m, start: 'top 90%', once: true } });
    // Si algo interrumpe la animación, la imagen queda entera y no a medio destapar.
    const reveal = () => { gsap.set(m, { clearProps: 'clipPath' }); if (inner) gsap.set(inner, { clearProps: 'transform' }); };
    tl.from(m, { clipPath: 'inset(100% 0% 0% 0%)', duration: 1.05, ease: 'expo.out', clearProps: 'clipPath', onInterrupt: reveal });
    if (inner) tl.from(inner, { scale: 1.12, duration: 1.4, ease: 'expo.out', clearProps: 'transform', onInterrupt: reveal }, 0);
  });

  /* ---------- Entradas suaves en cascada (P2, T3 y bloques internos) ----------
     Lo que entra a la vez (una fila de tarjetas) aparece escalonado, no en bloque. */
  mm.add({ sm: '(max-width: 767px)', lg: '(min-width: 768px)' }, (ctx) => {
    const y = ctx.conditions?.sm ? 14 : 24;
    const fades = gsap.utils.toArray<HTMLElement>('[data-fade]').filter((el) => !el.closest('.phero-aside'));
    // Si el bloque trae una imagen que ya se revela, solo sube: la opacidad apagaría la máscara.
    const withMedia = new Set(fades.filter((el) => media.some((m) => el === m || el.contains(m))));
    fades.forEach((el) => gsap.set(el, withMedia.has(el) ? { y } : { y, opacity: 0 }));
    ScrollTrigger.batch(fades, {
      start: 'top 90%',
      once: true,
      onEnter: (batch) => gsap.to(batch, {
        // 'auto' y no true: true mataba también la máscara de las imágenes y la foto quedaba a medio destapar.
        y: 0, opacity: 1, duration: 0.8, ease: 'expo.out', stagger: 0.07, overwrite: 'auto',
        clearProps: 'transform,opacity',
      }),
    });
  });

  /* ---------- Hero: portadas flotantes que entran (el nombre entra con CSS para no retrasar el LCP) ---------- */
  const cards = gsap.utils.toArray<HTMLElement>('[data-fc]');
  const heroName = document.querySelector<HTMLElement>('[data-hero-name]');
  if (cards.length) {
    gsap.from(cards, { y: 24, opacity: 0, duration: 0.9, ease: 'expo.out', stagger: 0.06, clearProps: 'transform,opacity' });
  }

  /* Scroll (primer viewport): las portadas se abren hacia afuera y el nombre se encoge y se apaga */
  const hero = document.querySelector<HTMLElement>('.hero');
  if (hero) {
    const st = { trigger: hero, start: 'top top', end: 'bottom top', scrub: 0.4 };
    gsap.utils.toArray<HTMLElement>('[data-fc-scroll]').forEach((el) => {
      const b = el.getBoundingClientRect();
      const dx = b.left + b.width / 2 < window.innerWidth / 2 ? -1 : 1;
      const dy = b.top + b.height / 2 < window.innerHeight / 2 ? -1 : 1;
      gsap.to(el, { x: dx * 120, y: dy * 80, scale: 1.18, ease: 'none', scrollTrigger: st });
    });
    // fromTo: el nombre entra con CSS desde opacidad 0, así que no se puede leer su valor de partida.
    if (heroName) gsap.fromTo(heroName, { scale: 1, opacity: 1 }, { scale: 0.92, opacity: 0, ease: 'none', immediateRender: false, scrollTrigger: { ...st, end: '70% top' } });
  }

  /* ---------- Bloque de enfoque: cada palabra pasa de 20 % a 100 % al cruzar la línea de lectura ---------- */
  gsap.utils.toArray<HTMLElement>('[data-words]').forEach((el) => {
    gsap.fromTo(el.querySelectorAll('.w'), { opacity: 0.2 }, {
      opacity: 1, ease: 'none', stagger: 0.1,
      scrollTrigger: { trigger: el, start: 'top 80%', end: 'bottom 45%', scrub: true },
    });
  });

  /* ---------- Círculos: el trazo se dibuja de izquierda a derecha ---------- */
  const rings = gsap.utils.toArray<SVGCircleElement>('[data-ring]');
  if (rings.length) {
    gsap.fromTo(rings, { strokeDashoffset: 1 }, {
      strokeDashoffset: 0, duration: 1.2, ease: 'power2.inOut', stagger: 0.12,
      scrollTrigger: { trigger: rings[0], start: 'top 85%', once: true },
    });
  }

  // Recalcula posiciones cuando terminan de cargar fuentes e imágenes.
  document.fonts?.ready.then(() => ScrollTrigger.refresh());
  window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
}
