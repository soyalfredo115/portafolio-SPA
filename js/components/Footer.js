export function mountFooter(host) {
  const year = new Date().getFullYear();
  host.className = 'footer';
  host.innerHTML = `
    <div class="container" style="display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap;">
      <span>© ${year} Cesar — Portafolio</span>
      <div style="display:flex;gap:12px;">
        <a href="https://github.com/TU_USUARIO" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/TU_PERFIL" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="mailto:tu@email">Email</a>
      </div>
    </div>
  `;
}