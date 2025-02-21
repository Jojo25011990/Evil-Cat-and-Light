'use strict';
const posLight = document.documentElement;

posLight.addEventListener('mousemove', e => {
  const x = e.clientX;
  const y = e.clientY;

  posLight.style.setProperty('--x', x + 'px');
  posLight.style.setProperty('--y', y + 'px');
});
