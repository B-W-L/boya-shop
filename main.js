/* ============================================================
   BOYA SHOP — JavaScript Principal
============================================================ */

// ─── SPLASH SCREEN ──────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  const splash   = document.getElementById('splash');
  const mainSite = document.getElementById('main-site');

  if (splash && mainSite) {
    // Afficher le site après 3.2s (durée animation splash)
    setTimeout(() => {
      mainSite.style.display = 'block';
      mainSite.style.animation = 'fadeInUp 0.5s ease';
    }, 3000);

    setTimeout(() => {
      splash.style.display = 'none';
    }, 3500);
  }

  initTheme();
  initHamburger();
  initCarousel();
  initSizeButtons();
  initColorButtons();
  initFavButtons();
  initCart();
});

// ─── THÈME CLAIR / SOMBRE ───────────────────────────────────
function initTheme() {
  const btn = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('boyashop-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);

  if (btn) {
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('boyashop-theme', next);
    });
  }
}

// ─── HAMBURGER SIDEBAR ──────────────────────────────────────
function initHamburger() {
  const btn     = document.getElementById('hamburgerBtn');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  const close   = document.getElementById('sidebarClose');

  function openSidebar() {
    sidebar?.classList.add('open');
    overlay?.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function closeSidebar() {
    sidebar?.classList.remove('open');
    overlay?.classList.remove('active');
    document.body.style.overflow = '';
  }

  btn?.addEventListener('click', openSidebar);
  close?.addEventListener('click', closeSidebar);
  overlay?.addEventListener('click', closeSidebar);
}

// ─── CARROUSEL AUTOMATIQUE ──────────────────────────────────
function initCarousel() {
  const slides  = document.querySelectorAll('.carousel-slide');
  const dots    = document.querySelectorAll('.dot');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  if (!slides.length) return;

  let current  = 0;
  let interval = null;

  function goTo(index) {
    slides[current].classList.remove('active');
    dots[current]?.classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current]?.classList.add('active');
  }

  function startAuto() {
    interval = setInterval(() => goTo(current + 1), 4000);
  }
  function stopAuto() {
    clearInterval(interval);
  }

  prevBtn?.addEventListener('click', () => { stopAuto(); goTo(current - 1); startAuto(); });
  nextBtn?.addEventListener('click', () => { stopAuto(); goTo(current + 1); startAuto(); });

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      stopAuto();
      goTo(parseInt(dot.dataset.slide));
      startAuto();
    });
  });

  startAuto();

  // Swipe sur mobile
  let touchX = 0;
  const container = document.getElementById('carouselContainer');
  container?.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; });
  container?.addEventListener('touchend', e => {
    const diff = touchX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      stopAuto();
      goTo(diff > 0 ? current + 1 : current - 1);
      startAuto();
    }
  });
}

// ─── BOUTONS TAILLES ────────────────────────────────────────
function initSizeButtons() {
  document.querySelectorAll('.sizes-row').forEach(row => {
    row.querySelectorAll('.size-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        row.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });
  });
}

// ─── BOUTONS COULEURS ────────────────────────────────────────
function initColorButtons() {
  document.querySelectorAll('.colors-row').forEach(row => {
    row.querySelectorAll('.color-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        row.querySelectorAll('.color-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });
  });
}

// ─── FAVORIS ────────────────────────────────────────────────
function initFavButtons() {
  const favs = JSON.parse(localStorage.getItem('boyashop-favs') || '[]');

  document.querySelectorAll('.fav-btn').forEach(btn => {
    const id = btn.dataset.id;
    if (favs.includes(id)) btn.classList.add('active');
    btn.textContent = favs.includes(id) ? '♥' : '♡';

    btn.addEventListener('click', () => {
      const stored = JSON.parse(localStorage.getItem('boyashop-favs') || '[]');
      const idx = stored.indexOf(id);
      if (idx > -1) {
        stored.splice(idx, 1);
        btn.classList.remove('active');
        btn.textContent = '♡';
      } else {
        stored.push(id);
        btn.classList.add('active');
        btn.textContent = '♥';
      }
      localStorage.setItem('boyashop-favs', JSON.stringify(stored));
    });
  });
}

// ─── PANIER ─────────────────────────────────────────────────
function initCart() {
  const count = JSON.parse(localStorage.getItem('boyashop-cart') || '[]').length;
  const el = document.getElementById('cartCount');
  if (el) el.textContent = count;
}
