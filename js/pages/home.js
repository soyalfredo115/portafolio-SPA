import { html } from '../utils/dom.js';

export default {
  async render() {
    return html`
      <div class="container">
        <div class="hero">
          <div>
            <span class="badge">Frontend modular • UX • E-commerce</span>
            <h1>Hola, soy Cesar. Construyo experiencias web claras, escalables y con encanto.</h1>
            <p style="color:var(--muted)">
              Me enfoco en arquitectura modular, rendimiento y detalles que elevan la experiencia.
              Amante de los diseños pastel, la gamificación con propósito y la documentación impecable.
            </p>
            <div style="display:flex; gap:10px; margin-top:10px;">
              <a class="btn primary" href="#/projects">Ver proyectos</a>
              <a class="btn" href="#/about">Sobre mí</a>
            </div>
          </div>
          <div>
            <img src="./assets/img/avatar.jpg" alt="Cesar" />
          </div>
        </div>
      </div>
    `;
  },
};