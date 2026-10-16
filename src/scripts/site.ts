// Comportamiento global: menú, botón redondo, cursor, hora de Medellín,
// letras que se estiran en el footer y lista de servicios. Sin dependencias.
// Las animaciones con GSAP se cargan aparte (./anim) solo si no hay reduced-motion.

const root = document.documentElement;
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');

/* ---------- Botón redondo: aparece al bajar 120 px (M1) ---------- */
const onScroll = () => root.classList.toggle('scrolled', window.scrollY > 120);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

/* ---------- Menú offcanvas (M2–M6) ---------- */
const menu = document.getElementById('menu') as HTMLElement | null;
const menuBtn = document.querySelector<HTMLButtonElement>('.menu-btn');
const outside = () => Array.from(document.querySelectorAll<HTMLElement>('.site-header, #main, .cta, .site-footer, .skip'));
let lastFocus: HTMLElement | null = null;

function focusables(): HTMLElement[] {
  if (!menu || !menuBtn) return [];
  const inner = Array.from(
    menu.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'),
  );
  return [menuBtn, ...inner];
}

function openMenu() {
  if (!menu || !menuBtn) return;
  lastFocus = document.activeElement as HTMLElement;
  menu.hidden = false;
  menu.classList.remove('is-closing');
  requestAnimationFrame(() => requestAnimationFrame(() => menu.classList.add('is-open')));
  menuBtn.setAttribute('aria-expanded', 'true');
  menuBtn.setAttribute('aria-label', menuBtn.dataset.closeLabel || 'Cerrar menú');
  outside().forEach((el) => el.setAttribute('inert', ''));
  root.style.overflow = 'hidden';
  const first = menu.querySelector<HTMLElement>('.menu-list a');
  window.setTimeout(() => first?.focus({ preventScroll: true }), reduced.matches ? 0 : 280);
}

function closeMenu(returnFocus = true) {
  if (!menu || !menuBtn || menu.hidden) return;
  menu.classList.add('is-closing');
  menu.classList.remove('is-open');
  menuBtn.setAttribute('aria-expanded', 'false');
  menuBtn.setAttribute('aria-label', menuBtn.dataset.openLabel || 'Abrir menú');
  outside().forEach((el) => el.removeAttribute('inert'));
  root.style.overflow = '';
  window.setTimeout(() => { if (!menu.classList.contains('is-open')) menu.hidden = true; }, reduced.matches ? 0 : 380);
  if (returnFocus) (lastFocus && document.contains(lastFocus) ? lastFocus : menuBtn).focus({ preventScroll: true });
}

menuBtn?.addEventListener('click', () => (menuBtn.getAttribute('aria-expanded') === 'true' ? closeMenu() : openMenu()));
document.addEventListener('keydown', (e) => {
  if (!menu || menu.hidden) return;
  if (e.key === 'Escape') { e.preventDefault(); closeMenu(); return; }
  if (e.key === 'Tab') {
    const f = focusables();
    if (!f.length) return;
    const i = f.indexOf(document.activeElement as HTMLElement);
    if (e.shiftKey && (i <= 0)) { e.preventDefault(); f[f.length - 1].focus(); }
    else if (!e.shiftKey && i === f.length - 1) { e.preventDefault(); f[0].focus(); }
    else if (i === -1) { e.preventDefault(); f[0].focus(); }
  }
});
menu?.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;
  if (target === menu) closeMenu();
  // Un enlace a un ancla de la misma página cierra el menú.
  const a = target.closest('a');
  if (a && a.getAttribute('href')?.includes('#')) closeMenu(false);
});

/* ---------- Hora local de Medellín en el footer ---------- */
document.querySelectorAll<HTMLTimeElement>('time[data-clock]').forEach((el) => {
  const lang = el.dataset.lang === 'en' ? 'en-US' : 'es-CO';
  const fmt = new Intl.DateTimeFormat(lang, { hour: 'numeric', minute: '2-digit', timeZone: 'America/Bogota' });
  const tick = () => { el.textContent = fmt.format(new Date()); };
  tick();
  window.setInterval(tick, 30_000);
  (el.closest('.ft-clock') as HTMLElement | null)?.removeAttribute('hidden');
});

/* ---------- Servicios: palabra activa ↔ tarjeta (S2–S4). Hover y foco ---------- */
document.querySelectorAll<HTMLElement>('[data-services]').forEach((wrap) => {
  const items = Array.from(wrap.querySelectorAll<HTMLElement>('[data-svc]'));
  const panes = Array.from(wrap.querySelectorAll<HTMLElement>('[data-svc-pane]'));
  const activate = (i: number) => {
    items.forEach((it, k) => it.classList.toggle('is-active', k === i));
    panes.forEach((p, k) => p.classList.toggle('is-active', k === i));
  };
  let current = 0, timer = 0, hovering = false;
  const show = (i: number) => { current = i; activate(i); };
  items.forEach((it, i) => {
    it.addEventListener('pointerenter', () => finePointer.matches && show(i));
    it.addEventListener('focusin', () => show(i));
  });
  // Sin hover (celular) o mientras nadie pasa el mouse, rota sola cuando está en pantalla
  wrap.addEventListener('pointerenter', () => { hovering = finePointer.matches; });
  wrap.addEventListener('pointerleave', () => { hovering = false; });
  if (reduced.matches || items.length < 2) return;
  new IntersectionObserver(([e]) => {
    window.clearInterval(timer);
    if (e.isIntersecting) timer = window.setInterval(() => !hovering && show((current + 1) % items.length), 3500);
  }, { threshold: 0.4 }).observe(wrap);
});

/* ---------- Footer: letras que se estiran (P3) ---------- */
document.querySelectorAll<HTMLElement>('[data-stretch]').forEach((word) => {
  const chars = Array.from(word.querySelectorAll<HTMLElement>('.ch, .sp'));
  const reset = () => chars.forEach((c) => { c.style.transform = ''; c.classList.remove('on'); });
  word.addEventListener('pointermove', (e) => {
    if (!finePointer.matches || reduced.matches) return;
    let hit = -1;
    chars.forEach((c, i) => {
      const b = c.getBoundingClientRect();
      if (e.clientX >= b.left && e.clientX <= b.right) hit = i;
    });
    chars.forEach((c, i) => {
      const d = Math.abs(i - hit);
      if (hit === -1 || d > 1 || !c.classList.contains('ch')) { c.style.transform = ''; c.classList.remove('on'); return; }
      c.style.transform = d === 0 ? 'translateY(-24%) scaleY(1.6)' : 'translateY(-12%) scaleY(1.3)';
      c.classList.toggle('on', d === 0);
    });
  });
  word.addEventListener('pointerleave', reset);
});

/* ---------- Cursor personalizado (C1–C4) ---------- */
function initCursor() {
  const el = document.querySelector<HTMLElement>('.cursor');
  if (!el) return;
  const txt = el.querySelector<HTMLElement>('.cursor-txt')!;
  root.classList.add('has-cursor');
  let x = -100, y = -100, cx = -100, cy = -100, raf = 0, visible = false;
  const loop = () => {
    cx += (x - cx) * 0.18;
    cy += (y - cy) * 0.18;
    el.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
    raf = Math.abs(x - cx) + Math.abs(y - cy) > 0.1 ? requestAnimationFrame(loop) : 0;
  };
  document.addEventListener('pointermove', (e) => {
    if (e.pointerType !== 'mouse') return;
    x = e.clientX; y = e.clientY;
    if (!visible) { visible = true; cx = x; cy = y; el.classList.add('is-visible'); }
    if (!raf) raf = requestAnimationFrame(loop);
  }, { passive: true });
  document.documentElement.addEventListener('pointerleave', () => { visible = false; el.classList.remove('is-visible'); });
  document.addEventListener('pointerover', (e) => {
    const t = e.target as HTMLElement;
    const card = t.closest<HTMLElement>('[data-cursor]');
    const svc = t.closest('[data-svc]');
    const link = t.closest('a, button, [role="button"], label, summary');
    el.classList.toggle('on-dark', !!t.closest('[data-dark]'));
    el.classList.remove('is-link', 'is-card', 'is-svc');
    if (card) { el.classList.add('is-card'); txt.textContent = card.dataset.cursor || ''; }
    else if (svc) el.classList.add('is-svc');
    else if (link) el.classList.add('is-link');
  });
  document.addEventListener('pointerdown', () => el.classList.add('is-down'));
  document.addEventListener('pointerup', () => el.classList.remove('is-down'));
}
if (finePointer.matches && !reduced.matches) initCursor();

/* ---------- Animaciones (GSAP) ---------- */
if (!reduced.matches) {
  import('./anim').then((m) => m.init()).catch(() => root.classList.add('no-anim'));
} else {
  root.classList.add('anim-ready');
}
