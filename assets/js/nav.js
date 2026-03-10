// Highlight active nav link
document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname.replace(/\/$/, '').split('/').pop() || 'index';
  document.querySelectorAll('nav a').forEach(a => {
    const href = a.getAttribute('href').replace(/\/$/, '').split('/').pop() || 'index';
    if (href === path) a.classList.add('active');
  });

  // Mobile menu toggle
  const toggle = document.getElementById('menu-toggle');
  const navUl = document.querySelector('nav ul');
  if (toggle && navUl) {
    toggle.addEventListener('click', () => {
      navUl.classList.toggle('open');
      toggle.classList.toggle('open');
    });
  }
});
