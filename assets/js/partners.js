(function () {
  'use strict';

  var carousel = document.querySelector('[data-partner-carousel]');
  if (!carousel) return;

  var slides = Array.from(carousel.querySelectorAll('[data-partner-slide]'));
  var announcement = carousel.querySelector('[data-partner-announcement]');
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var current = 0;
  var hovering = false;
  var focused = false;
  var visible = false;
  var timer = null;
  var animation = null;
  var interval = 7500;

  function translate(value) {
    return window.siteI18n ? window.siteI18n.t(value) : value;
  }

  function syncPlayback() {
    var playing = !reducedMotion.matches && visible && !hovering && !focused && !document.hidden;
    clearTimeout(timer);
    timer = null;
    carousel.dataset.playing = String(playing);
    if (playing) {
      timer = setTimeout(function () { showSlide(current + 1, false); }, interval);
    }
  }

  function showSlide(index, manual) {
    current = (index + slides.length) % slides.length;
    slides.forEach(function (slide, position) {
      slide.hidden = position !== current;
    });
    if (animation) animation.cancel();
    if (!reducedMotion.matches && typeof slides[current].animate === 'function') {
      animation = slides[current].animate([{ opacity: 0.35 }, { opacity: 1 }], { duration: 260, easing: 'ease-out' });
    }
    // Automatic changes stay silent; announce only a visitor's explicit selection.
    if (manual) {
      announcement.textContent = translate('Slide') + ' ' + (current + 1) + ' ' + translate('dari') + ' ' + slides.length + ': ' + slides[current].querySelector('h3').textContent;
    }
    syncPlayback();
  }

  carousel.querySelector('[data-partner-prev]').addEventListener('click', function () { showSlide(current - 1, true); });
  carousel.querySelector('[data-partner-next]').addEventListener('click', function () { showSlide(current + 1, true); });
  carousel.addEventListener('keydown', function (event) {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    showSlide(current + (event.key === 'ArrowRight' ? 1 : -1), true);
  });
  carousel.addEventListener('mouseenter', function () { hovering = true; syncPlayback(); });
  carousel.addEventListener('mouseleave', function () { hovering = false; syncPlayback(); });
  carousel.addEventListener('focusin', function () { focused = true; syncPlayback(); });
  carousel.addEventListener('focusout', function (event) {
    focused = carousel.contains(event.relatedTarget);
    syncPlayback();
  });
  document.addEventListener('visibilitychange', syncPlayback);
  document.addEventListener('site:languagechange', function () {
    announcement.textContent = '';
    syncPlayback();
  });
  reducedMotion.addEventListener('change', function () {
    if (reducedMotion.matches) {
      if (animation) animation.cancel();
    }
    syncPlayback();
  });
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      visible = entries[0].isIntersecting;
      syncPlayback();
    }, { threshold: 0.15 }).observe(carousel);
  } else {
    visible = true;
  }
  showSlide(0, false);
})();
