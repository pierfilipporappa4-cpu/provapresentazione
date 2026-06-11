(function () {
  const slides = document.querySelectorAll('.slide');
  const counter = document.getElementById('slide-counter');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const bar = document.getElementById('progress-bar');
  const total = slides.length;
  let current = 0;
  let busy = false;

  function go(idx) {
    if (busy) return;
    busy = true;
    slides[current].classList.remove('active');
    current = ((idx % total) + total) % total;
    slides[current].classList.add('active');
    const n = String(current + 1).padStart(2, '0');
    counter.textContent = n + ' / ' + String(total).padStart(2, '0');
    bar.style.width = ((current + 1) / total * 100) + '%';
    setTimeout(() => { busy = false; }, 550);
  }

  nextBtn.addEventListener('click', () => go(current + 1));
  prevBtn.addEventListener('click', () => go(current - 1));

  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') { e.preventDefault(); go(current + 1); }
    if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp') { e.preventDefault(); go(current - 1); }
  });

  let tx = 0;
  document.addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, { passive: true });
  document.addEventListener('touchend',   e => {
    const dx = e.changedTouches[0].clientX - tx;
    if (Math.abs(dx) > 45) dx < 0 ? go(current + 1) : go(current - 1);
  }, { passive: true });

  go(0);
})();
