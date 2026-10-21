(() => {
  'use strict';
  const main = document.getElementById('portfolio');
  const nav = document.querySelector('nav');
  const tabs = [...nav.querySelectorAll('a')];
  const sections = [...main.querySelectorAll('.section-page')];
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let active;
  let printState;

  nav.setAttribute('role', 'tablist');
  tabs.forEach((tab, i) => {
    const section = sections[i];
    tab.id = `tab-${section.id}`;
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-controls', section.id);
    section.setAttribute('role', 'tabpanel');
    section.setAttribute('aria-labelledby', tab.id);
    section.tabIndex = 0;
    tab.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      show(section, true);
    });
    tab.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowRight') next = (i + 1) % tabs.length;
      if (event.key === 'ArrowLeft') next = (i - 1 + tabs.length) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next === undefined) return;
      event.preventDefault();
      tabs[next].focus({ preventScroll: true });
      show(sections[next], true);
    });
  });

  function show(section, updateHistory = false) {
    const changed = active !== section;
    active = section;
    sections.forEach((item, i) => {
      const selected = item === section;
      item.hidden = !selected;
      tabs[i].setAttribute('aria-selected', String(selected));
      tabs[i].tabIndex = selected ? 0 : -1;
      if (selected) tabs[i].setAttribute('aria-current', 'location');
      else tabs[i].removeAttribute('aria-current');
    });
    if (updateHistory && location.hash !== `#${section.id}`) {
      const url = new URL(location.href);
      url.hash = section.id;
      history.pushState(null, '', url);
    }
    if (changed) {
      main.scrollTop = 0;
      sections.forEach(item => item.getAnimations().forEach(animation => animation.cancel()));
      if (!reducedMotion.matches && typeof section.animate === 'function') {
        section.animate([{ opacity: 0, transform: 'translateY(4px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 160, easing: 'ease-out' });
      }
    }
    // Reveal the active label without moving the header or document vertically.
    const tab = tabs[sections.indexOf(section)];
    const left = tab.offsetLeft - nav.offsetLeft;
    if (left < nav.scrollLeft) nav.scrollLeft = left;
    else if (left + tab.offsetWidth > nav.scrollLeft + nav.clientWidth) nav.scrollLeft = left + tab.offsetWidth - nav.clientWidth;
  }

  function readHash() {
    let id;
    try { id = decodeURIComponent(location.hash.slice(1)); } catch { id = ''; }
    show(sections.find(section => section.id === id) || sections[0]);
    if (id === 'top') main.scrollTop = 0;
  }
  window.addEventListener('hashchange', readHash);
  window.addEventListener('popstate', readHash);
  readHash();
  document.querySelector('.skip-link').addEventListener('click', event => {
    event.preventDefault();
    active.focus({ preventScroll: true });
  });
  document.querySelector('footer a').addEventListener('click', event => {
    event.preventDefault();
    main.scrollTo({ top: 0, behavior: reducedMotion.matches ? 'instant' : 'smooth' });
    tabs[sections.indexOf(active)].focus({ preventScroll: true });
  });

  // Native nested disclosures remain independent and usable without JavaScript.
  const animations = new WeakMap();
  const targets = new WeakMap();
  function setOpen(detail, open, animate = true) {
    const start = detail.getBoundingClientRect().height;
    animations.get(detail)?.cancel();
    animations.delete(detail);
    detail.style.overflow = '';
    targets.set(detail, open);
    if (!animate || reducedMotion.matches || typeof detail.animate !== 'function') {
      detail.open = open;
      return;
    }
    detail.open = true;
    const end = open ? detail.getBoundingClientRect().height : detail.querySelector('summary').getBoundingClientRect().height + 2;
    detail.style.overflow = 'hidden';
    const animation = detail.animate([{ height: `${start}px` }, { height: `${end}px` }], { duration: 200, easing: 'ease-out' });
    animations.set(detail, animation);
    animation.onfinish = () => {
      detail.open = open;
      detail.style.overflow = '';
      animations.delete(detail);
    };
  }
  main.querySelectorAll('details').forEach(detail => {
    detail.querySelector(':scope > summary').addEventListener('click', event => {
      if (event.target.closest('a')) return;
      event.preventDefault();
      setOpen(detail, !(animations.has(detail) ? targets.get(detail) : detail.open));
    });
  });
  window.addEventListener('resize', () => {
    main.querySelectorAll('details').forEach(detail => {
      if (animations.has(detail)) setOpen(detail, targets.get(detail), false);
    });
  });
  window.addEventListener('beforeprint', () => {
    if (printState) return;
    printState = { scroll: main.scrollTop, details: [...main.querySelectorAll('details')].map(detail => [detail, animations.has(detail) ? targets.get(detail) : detail.open]) };
    sections.forEach(section => { section.hidden = false; });
    main.querySelectorAll('details').forEach(detail => setOpen(detail, true, false));
  });
  window.addEventListener('afterprint', () => {
    if (!printState) return;
    printState.details.forEach(([detail, open]) => setOpen(detail, open, false));
    const scroll = printState.scroll;
    printState = undefined;
    show(active);
    main.scrollTop = scroll;
  });
})();
