// Highlight active nav link
document.addEventListener('DOMContentLoaded', () => {
  const currentHref = window.location.href;
  document.querySelectorAll('nav a').forEach(a => {
    a.classList.remove('active');
    const linkHref = new URL(a.getAttribute('href'), currentHref).href;
    if (linkHref === currentHref) a.classList.add('active');
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
