(function () {
  const SELECTOR = '#hover';       // apply only to these elements
  const PADDING = 4;           // padding around selection box

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

  let selectedElement = null;

  function positionOverlayFor(element) {
    const rect = element.getBoundingClientRect();
    overlay.style.left = window.scrollX + rect.left - PADDING + 'px';
    overlay.style.top = window.scrollY + rect.top - PADDING + 'px';
    overlay.style.width = rect.width + PADDING * 2 + 'px';
    overlay.style.height = rect.height + PADDING * 2 + 'px';
  }

  function selectElement(el) {
    selectedElement = el;
    positionOverlayFor(el);
    overlay.classList.add('visible');
  }

  function clearSelection() {
    overlay.classList.remove('visible');
    selectedElement = null;
  }

  let rafPending = false;
  function scheduleUpdate() {
    if (!selectedElement || rafPending) return;
    rafPending = true;
    requestAnimationFrame(() => {
      rafPending = false;
      positionOverlayFor(selectedElement);
    });
  }

  // 🔑 CLICK-BASED SELECTION
  document.addEventListener('click', (ev) => {
    const target = ev.target;
    if (overlay.contains(target)) return; // ignore clicks on overlay

    if (target.matches(SELECTOR)) {
      ev.stopPropagation(); // prevent clearing immediately
      selectElement(target);
    } else {
      clearSelection();
    }
  });

  // Keep overlay aligned when scrolling or resizing
  window.addEventListener('scroll', scheduleUpdate, true);
  window.addEventListener('resize', scheduleUpdate);
})();
