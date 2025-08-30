import { html } from '../utils/dom.js';

export default function ProjectCard(p) {
  return html`
    <article class="card project-card card-fade-in">
      <img src="${p.cover}" alt="${p.title}" />
      <div>
        <h3>${p.title}</h3>
        <p class="meta">${p.subtitle}</p>
        <div class="tags">
          ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
      </div>
      <div style="display:flex; gap:8px; flex-wrap:wrap;">
        <a class="btn" href="#/projects/${encodeURIComponent(p.slug)}">Ver detalle</a>
        ${p.repo ? `<a class="btn" href="${p.repo}" target="_blank" rel="noreferrer">Repo</a>` : ''}
        ${p.demo ? `<a class="btn" href="${p.demo}" target="_blank" rel="noreferrer">Demo</a>` : ''}
      </div>
    </article>
  `;
}