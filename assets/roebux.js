/*
 * roebux.js — homepage scroll-reveal (Horizon-native, no libraries, no build step).
 *
 * Per MOTION_SPECS: transform/opacity only; the initial hidden state is applied
 * by JS (class `rbx-reveal`), so content is always visible when JS is off.
 * Gated behind prefers-reduced-motion: no-preference.
 */
(function () {
  'use strict';

  var main = document.querySelector('main[data-template^="index"]');
  if (!main) return;
  if (!window.matchMedia || !window.matchMedia('(prefers-reduced-motion: no-preference)').matches) return;
  if (!('IntersectionObserver' in window)) return;

  var targets = main.querySelectorAll('.shopify-section .section-content-wrapper');
  if (!targets.length) return;

  targets.forEach(function (el) {
    el.classList.add('rbx-reveal');
  });

  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('rbx-in');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
  );

  targets.forEach(function (el) {
    io.observe(el);
  });
})();
