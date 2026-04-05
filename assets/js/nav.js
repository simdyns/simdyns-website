// Highlight active nav link
document.addEventListener('DOMContentLoaded', () => {
  // Normalise a pathname: strip trailing slash, strip index.html, lowercase
  function normPath(p) {
    return p.replace(/\/index\.html$/, '/').replace(/\/$/, '').toLowerCase() || '/';
  }

  const currentPath = normPath(window.location.pathname);

  document.querySelectorAll('nav a').forEach(a => {
    a.classList.remove('active');
    try {
      const linkPath = normPath(new URL(a.getAttribute('href'), window.location.href).pathname);
      if (linkPath === currentPath) a.classList.add('active');
    } catch(e) {}
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
