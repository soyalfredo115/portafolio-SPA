import { html } from '../utils/dom.js';
import { projects } from '../data/projects.js';
import ProjectCard from '../components/ProjectCard.js';

export default {
  async render() {
    return html`
      <div class="container">
        <h1>Proyectos</h1>
        <p style="color:var(--muted)">Case studies, repos y demos. Click en “Ver detalle”.</p>
        <div class="grid cols-2" style="margin-top:16px;">
          ${projects.map(ProjectCard).join('')}
        </div>
      </div>
    `;
  },
};