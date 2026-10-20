(function () {
  'use strict';

  var marquee = document.querySelector('.client-marquee');
  if (!marquee) return;
  var track = marquee.querySelector('.client-track');
  var group = track.querySelector('.client-group');
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var drag = null;

  function getAnimation() {
    if (reducedMotion.matches || typeof track.getAnimations !== 'function') return null;
    return track.getAnimations().find(function (animation) {
      return animation.animationName === 'client-scroll';
    }) || null;
  }

  function wrap(time, duration) {
    return ((time % duration) + duration) % duration;
  }

  function finishDrag(event) {
    if (!drag) return;
    if (event && 'pointerId' in event && event.pointerId !== drag.pointerId) return;
    var finished = drag;
    drag = null;
    marquee.classList.remove('is-dragging');
    if (marquee.hasPointerCapture(finished.pointerId)) marquee.releasePointerCapture(finished.pointerId);
    if (getAnimation() === finished.animation) finished.animation.play();
  }

  marquee.querySelectorAll('img').forEach(function (image) { image.draggable = false; });
  marquee.addEventListener('dragstart', function (event) { event.preventDefault(); });
  marquee.addEventListener('pointerdown', function (event) {
    if (!event.isPrimary || event.button !== 0 || drag) return;
    var animation = getAnimation();
    if (!animation) return;
    var width = group.getBoundingClientRect().width;
    if (!width) return;
    animation.pause();
    drag = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startTime: Number(animation.currentTime) || 0,
      duration: Number(animation.effect.getTiming().duration),
      width: width,
      animation: animation
    };
    marquee.setPointerCapture(event.pointerId);
    marquee.classList.add('is-dragging');
  });
  marquee.addEventListener('pointermove', function (event) {
    if (!drag || event.pointerId !== drag.pointerId) return;
    var distance = event.clientX - drag.startX;
    // Scrub the existing animation so releasing continues from the exact dragged position.
    drag.animation.currentTime = wrap(drag.startTime - distance * drag.duration / drag.width, drag.duration);
  });
  marquee.addEventListener('pointerup', finishDrag);
  marquee.addEventListener('pointercancel', finishDrag);
  marquee.addEventListener('lostpointercapture', finishDrag);
  marquee.addEventListener('keydown', function (event) {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    var animation = getAnimation();
    if (!animation || drag) return;
    event.preventDefault();
    var duration = Number(animation.effect.getTiming().duration);
    var step = group.getBoundingClientRect().width / group.children.length;
    var direction = event.key === 'ArrowRight' ? 1 : -1;
    animation.currentTime = wrap(Number(animation.currentTime) + direction * step * duration / group.getBoundingClientRect().width, duration);
  });
  window.addEventListener('resize', finishDrag);
  window.addEventListener('blur', finishDrag);
  reducedMotion.addEventListener('change', finishDrag);
})();
