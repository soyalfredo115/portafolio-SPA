import { html } from '../utils/dom.js';

export default {
  async render() {
    return html`
      <div class="container">
        <h1>Sobre mí</h1>
        <p style="color:var(--muted)">
          Desarrollador front-end y product owner enfocado en e-commerce para bebés y niños.
          Trabajo con módulos claros, documentación útil y ciclos de iteración rápidos.
        </p>
        <div class="grid cols-3" style="margin-top:16px;">
          <div class="card section">
            <h3>Lo que priorizo</h3>
            <ul>
              <li><span class="kbd">Modularidad</span> y separación de responsabilidades</li>
              <li><span class="kbd">UX</span> con micro-interacciones significativas</li>
              <li><span class="kbd">Escalabilidad</span> y mantenibilidad</li>
            </ul>
          </div>
          <div class="card section">
            <h3>Stack</h3>
            <ul>
              <li>HTML semántico, CSS moderno (Grid, variables, accesibilidad)</li>
              <li>JavaScript modular (ES Modules) + SPA routing</li>
              <li>Integraciones con plataformas como Odoo</li>
            </ul>
          </div>
          <div class="card section">
            <h3>Valor</h3>
            <ul>
              <li>Onboarding, documentación y handoff claros</li>
              <li>Experimentos controlados y medición</li>
              <li>UI memorable con base técnica sólida</li>
            </ul>
          </div>
        </div>
      </div>
    `;
  },
};