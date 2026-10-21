(() => {
  'use strict';
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const animations = new WeakMap();
  const targets = new WeakMap();

  // Keep native details semantics and no-JavaScript behavior. Animate measured
  // heights so long sections and nested project entries need no fixed limits.
  function setOpen(detail, open, animate = true) {
    const currentHeight = detail.getBoundingClientRect().height;
    animations.get(detail)?.cancel();
    animations.delete(detail);
    detail.style.height = '';
    detail.style.overflow = '';
    targets.set(detail, open);
    if (!animate || reducedMotion.matches || typeof detail.animate !== 'function') {
      detail.open = open;
      return;
    }
    if (!detail.open && !open) return;
    detail.open = true;
    const summary = detail.querySelector(':scope > summary');
    const endHeight = open ? detail.getBoundingClientRect().height : summary.getBoundingClientRect().height + 2;
    detail.style.overflow = 'hidden';
    const animation = detail.animate(
      [{ height: `${currentHeight}px` }, { height: `${endHeight}px` }],
      { duration: 240, easing: 'cubic-bezier(.2,.7,.2,1)' }
    );
    animations.set(detail, animation);
    animation.onfinish = () => {
      detail.open = open;
      detail.style.overflow = '';
      animations.delete(detail);
    };
  }

  document.querySelectorAll('details').forEach(detail => {
    detail.querySelector(':scope > summary').addEventListener('click', event => {
      // Preserve interaction with any links nested in a summary.
      if (event.target.closest('a')) return;
      event.preventDefault();
      const pending = animations.has(detail) ? targets.get(detail) : detail.open;
      setOpen(detail, !pending);
    });
  });

  function revealHash() {
    let id;
    try { id = decodeURIComponent(location.hash.slice(1)); } catch { return; }
    const target = document.getElementById(id);
    if (!target) return;
    const ancestors = [];
    for (let node = target; node; node = node.parentElement) {
      if (node.matches('details')) ancestors.unshift(node);
    }
    ancestors.forEach(detail => setOpen(detail, true, false));
    document.querySelectorAll('nav a').forEach(link => {
      if (link.hash === location.hash) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    requestAnimationFrame(() => target.scrollIntoView({ block: 'start', behavior: 'instant' }));
  }
  window.addEventListener('hashchange', revealHash);
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', () => {
      if (link.hash === location.hash) revealHash();
    });
  });
  if (location.hash) revealHash();

  // A resize or a second interaction must never leave a panel clipped.
  window.addEventListener('resize', () => {
    document.querySelectorAll('details').forEach(detail => {
      if (animations.has(detail)) setOpen(detail, targets.get(detail), false);
    });
  });
  let printState;
  window.addEventListener('beforeprint', () => {
    if (printState) return;
    printState = [...document.querySelectorAll('details')].map(detail => [detail, animations.has(detail) ? targets.get(detail) : detail.open]);
    printState.forEach(([detail]) => setOpen(detail, true, false));
  });
  window.addEventListener('afterprint', () => {
    printState?.forEach(([detail, open]) => setOpen(detail, open, false));
    printState = undefined;
  });
})();
