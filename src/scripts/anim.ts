// Animaciones con GSAP (15_animaciones.md). Solo se carga sin prefers-reduced-motion.
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

  /* ---------- Entradas suaves (P2, T3 y bloques internos) ---------- */
  mm.add('(min-width: 768px)', () => {
    gsap.utils.toArray<HTMLElement>('[data-fade]').forEach((el) => {
      gsap.from(el, {
        y: 24, opacity: 0, duration: 0.6, ease: P3,
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        clearProps: 'transform,opacity',
      });
    });
  });

  /* ---------- F1: titular de casos fijo que crece y queda de marca de agua (≥1200) ---------- */
  const workTitle = document.querySelector<HTMLElement>('.work-title-inner');
  const workArea = document.querySelector<HTMLElement>('.work-collage');
  if (workTitle && workArea) {
    mm.add('(min-width: 1200px)', () => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: workArea, start: 'top 75%', end: 'bottom 60%', scrub: 0.6 },
      });
      tl.to(workTitle, { scale: 1.12, duration: 1, ease: 'none' })
        .to(workTitle, { opacity: 0.08, duration: 1, ease: 'none' }, '<0.4')
        .to(workTitle, { scale: 1, duration: 1, ease: 'none' });
    });
  }

  // Recalcula posiciones cuando terminan de cargar fuentes e imágenes.
  document.fonts?.ready.then(() => ScrollTrigger.refresh());
  window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
}
