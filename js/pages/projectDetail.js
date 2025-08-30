import { html } from '../utils/dom.js';
import { projects } from '../data/projects.js';

export default {
  async render(params) {
    const p = projects.find(x => x.slug === params.slug);
    if (!p) {
      return html`
        <div class="container">
          <h1>Proyecto no encontrado</h1>
          <a class="btn" href="#/projects">Volver a proyectos</a>
        </div>
      `;
    }
    return html`
      <div class="container">
        <a class="btn" href="#/projects">← Volver</a>
        <h1 style="margin-top:12px;">${p.title}</h1>
        <p style="color:var(--muted)">${p.subtitle}</p>

        <div class="card section" style="margin-top:12px;">
          <p>${p.summary}</p>
          <div class="tags" style="margin-top:8px;">
            ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
          </div>
          <div style="display:flex; gap:8px; flex-wrap:wrap; margin-top:12px;">
            ${p.repo ? `<a class="btn" href="${p.repo}" target="_blank" rel="noreferrer">Ver repo</a>` : ''}
            ${p.demo ? `<a class="btn" href="${p.demo}" target="_blank" rel="noreferrer">Ver demo</a>` : ''}
          </div>
        </div>

        <div class="grid cols-2" style="margin-top:16px;">
          ${p.media.map(m => `
            <figure class="card section">
              <img src="${m.src}" alt="${m.alt}" />
              <figcaption style="color:var(--muted); margin-top:6px;">${m.alt}</figcaption>
            </figure>
          `).join('')}
        </div>

        <div class="grid cols-2" style="margin-top:16px;">
          <div class="card section">
            <h3>Highlights</h3>
            <ul>${p.highlights.map(h => `<li>${h}</li>`).join('')}</ul>
          </div>
          <div class="card section">
            <h3>Stack y arquitectura</h3>
            <ul>${p.tech.map(t => `<li>${t}</li>`).join('')}</ul>
          </div>
        </div>

        <div class="card section" style="margin-top:16px;">
          <h3>Resultados</h3>
          <ul>${p.outcomes.map(o => `<li>${o}</li>`).join('')}</ul>
        </div>
      </div>
    `;
  },
};