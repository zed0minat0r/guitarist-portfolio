/* ============================================================
   MAIN.JS — Dan Neoclassical Guitarist Portfolio
   ============================================================ */

/* --- Nav: scroll state ------------------------------------ */
(function initNav() {
  const nav = document.getElementById('nav');
  if (!nav) return;

  function onScroll() {
    if (window.scrollY > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load
})();

/* --- Mobile burger menu ----------------------------------- */
(function initBurger() {
  const burger = document.getElementById('navBurger');
  const mobileNav = document.getElementById('navMobile');
  if (!burger || !mobileNav) return;

  let isOpen = false;

  function toggleMenu() {
    isOpen = !isOpen;
    mobileNav.classList.toggle('open', isOpen);
    burger.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  burger.addEventListener('click', toggleMenu);

  // Close on link click
  mobileNav.querySelectorAll('.nav__mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      if (isOpen) toggleMenu();
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (isOpen && !mobileNav.contains(e.target) && !burger.contains(e.target)) {
      toggleMenu();
    }
  });
})();

/* --- Smooth scroll for anchor links ----------------------- */
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const navHeight = document.getElementById('nav')?.offsetHeight || 72;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();

/* --- Scroll reveal (IntersectionObserver) ----------------- */
(function initReveal() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  // Respect reduced motion
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    elements.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // animate once
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  elements.forEach(el => observer.observe(el));
})();

/* --- Stagger reveal children within card grids ------------ */
(function initStagger() {
  const groups = document.querySelectorAll('.cards');
  groups.forEach(group => {
    const children = group.querySelectorAll('.reveal');
    children.forEach((child, i) => {
      child.style.transitionDelay = `${i * 0.12}s`;
    });
  });
})();
