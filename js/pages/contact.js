import { html, qs } from '../utils/dom.js';

export default {
  async render() {
    return html`
      <div class="container">
        <h1>Contacto</h1>
        <p style="color:var(--muted)">¿Tienes un proyecto o idea? Conversemos.</p>
        <form id="contact-form" class="form card section" autocomplete="on">
          <div>
            <label for="name">Nombre</label>
            <input class="input" type="text" id="name" name="name" required placeholder="Tu nombre" />
          </div>
          <div>
            <label for="email">Email</label>
            <input class="input" type="email" id="email" name="email" required placeholder="tu@email"/>
          </div>
          <div>
            <label for="msg">Mensaje</label>
            <textarea class="textarea" id="msg" name="msg" required placeholder="Cuéntame sobre tu proyecto"></textarea>
          </div>
          <div style="display:flex; gap:10px; flex-wrap:wrap;">
            <button class="btn primary" type="submit">Enviar</button>
            <span style="color:var(--muted)">Respuesta en 24–48h.</span>
          </div>
        </form>
      </div>
    `;
  },
  async afterRender() {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', e => {
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const msg = form.msg.value.trim();
      if (!name || !email || !msg) return;
      // mailto simple para no requerir backend
      const subject = encodeURIComponent(`Contacto desde portafolio — ${name}`);
      const body = encodeURIComponent(`${msg}\n\n— ${name} <${email}>`);
      window.location.href = `mailto:tu@email?subject=${subject}&body=${body}`;
    });
  },
};