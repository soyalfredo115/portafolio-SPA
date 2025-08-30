import { navigate } from '../router.js';

export function mountNav(host) {
  host.className = 'header';
  host.innerHTML = `
    <div class="container nav">
      <div class="nav-left">
        <a href="#/" class="logo">Cesar<span style="color:var(--primary)">.</span></a>
        <a href="#/" data-nav>Inicio</a>
        <a href="#/about" data-nav>Sobre mí</a>
        <a href="#/projects" data-nav>Proyectos</a>
        <a href="#/contact" data-nav>Contacto</a>
      </div>
      <div class="nav-right">
        <div data-theme-toggle></div>
        <a class="btn primary" href="#/contact">Hablemos</a>
      </div>
    </div>
  `;
  host.addEventListener('click', e => {
    const a = e.target.closest('a[href^="#/"]');
    if (!a) return;
    e.preventDefault();
    navigate(a.getAttribute('href').slice(1));
  });
}