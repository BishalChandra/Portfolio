// ===== Sticky header shadow on scroll =====
const header = document.getElementById('site-header');
const onScroll = () => {
  if (window.scrollY > 8) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ===== Mobile menu toggle =====
const menuToggle = document.getElementById('menu-toggle');
const mainNav = document.getElementById('main-nav');

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('active');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

// close mobile menu when a link is tapped
mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

// ===== Scroll-reveal animations =====
const reveals = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  reveals.forEach((el) => io.observe(el));
} else {
  // fallback: just show everything
  reveals.forEach((el) => el.classList.add('is-visible'));
}
