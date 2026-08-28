/* =========================================================
   PORTFOLIO - Nikhil V R  |  script.js
   ========================================================= */

// Strict mode
(function() {

/* Dark Mode ------------------------------------------------ */
const html        = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');
const saved       = localStorage.getItem('nvr-theme') || 'light';
html.setAttribute('data-theme', saved);

themeToggle.addEventListener('click', () => {
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('nvr-theme', next);
});

/* Sticky Nav Shadow ---------------------------------------- */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

/* Mobile Hamburger ----------------------------------------- */
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');
hamburger.addEventListener('click', () => {
  const open = hamburger.classList.toggle('open');
  mobileNav.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', String(open));
});
mobileNav.querySelectorAll('a').forEach(function(l) {
  l.addEventListener('click', function() {
    hamburger.classList.remove('open');
    mobileNav.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

/* Smooth Scroll -------------------------------------------- */
document.querySelectorAll('a[href^="#"]').forEach(function(a) {
  a.addEventListener('click', function(e) {
    var href = a.getAttribute('href');
    if (href === '#') return;
    var t = document.querySelector(href);
    if (!t) return;
    e.preventDefault();
    window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
  });
});

/* Scroll Reveal -------------------------------------------- */
var ro = new IntersectionObserver(function(entries) {
  entries.forEach(function(e) {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      ro.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(function(el) { ro.observe(el); });

/* Active Nav Highlight ------------------------------------- */
var navLinks = document.querySelectorAll('.nav-links a, .nav-mobile a');
document.querySelectorAll('section[id]').forEach(function(s) {
  new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) {
        navLinks.forEach(function(l) {
          l.style.color = '';
          if (l.getAttribute('href') === '#' + e.target.id) {
            l.style.color = 'var(--accent)';
          }
        });
      }
    });
  }, { threshold: 0.4 }).observe(s);
});

/* Footer Year ---------------------------------------------- */
var yr = document.getElementById('footer-year');
if (yr) yr.textContent = new Date().getFullYear();

})();
