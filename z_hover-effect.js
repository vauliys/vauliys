(function () {
  const SELECTOR = '#hover';       // apply to these elements
  const PADDING = 4;           // 👈 padding in px around element

  const overlay = document.createElement('div');
  overlay.className = 'hover-selection-overlay';
  overlay.innerHTML = `
    <!-- 4 corners -->
    <div class="handle tl"></div>
    <div class="handle tr"></div>
    <div class="handle bl"></div>
    <div class="handle br"></div>
    <!-- 4 mid-edge handles -->
    <div class="handle tm"></div>
    <div class="handle bm"></div>
    <div class="handle ml"></div>
    <div class="handle mr"></div>
  `;
  document.body.appendChild(overlay);

  let currentTarget = null;
  let hideTimeout = null;

  function positionOverlayFor(element) {
    const rect = element.getBoundingClientRect();
    overlay.style.left = window.scrollX + rect.left - PADDING + 'px';
    overlay.style.top = window.scrollY + rect.top - PADDING + 'px';
    overlay.style.width = rect.width + PADDING * 2 + 'px';
    overlay.style.height = rect.height + PADDING * 2 + 'px';
  }

  function showOverlayFor(el) {
    clearTimeout(hideTimeout);
    currentTarget = el;
    positionOverlayFor(el);
    overlay.classList.add('visible');
  }

  function hideOverlay() {
    overlay.classList.remove('visible');
    currentTarget = null;
  }

  let rafPending = false;
  function scheduleUpdate() {
    if (!currentTarget || rafPending) return;
    rafPending = true;
    requestAnimationFrame(() => {
      rafPending = false;
      positionOverlayFor(currentTarget);
    });
  }

  document.addEventListener('mouseover', (ev) => {
    const target = ev.target;
    if (!target || overlay.contains(target)) return;
    if (!target.matches(SELECTOR)) return;

    const r = target.getBoundingClientRect();
    if (r.width < 6 || r.height < 6) return;

    showOverlayFor(target);
  }, true);

  document.addEventListener('mouseout', () => {
    if (!currentTarget) return;
    hideTimeout = setTimeout(() => {
      if (!currentTarget.matches(':hover')) {
        hideOverlay();
      }
    }, 120);
  }, true);

  window.addEventListener('scroll', scheduleUpdate, true);
  window.addEventListener('resize', scheduleUpdate);
})();
