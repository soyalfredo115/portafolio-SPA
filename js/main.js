// js/main.js
import { mountNav } from './components/NavBar.js';
import { mountFooter } from './components/Footer.js';
import { mountThemeToggle, applySavedTheme } from './state/theme.js';
import { initRouter } from './router.js';

document.addEventListener('DOMContentLoaded', () => {
  // Aplica el tema guardado antes de pintar nada
  applySavedTheme();

  // Monta header y footer
  mountNav(document.getElementById('site-header'));
  mountThemeToggle(); // ahora sí existe el data-theme-toggle
  mountFooter(document.getElementById('site-footer'));

  // Fuerza ruta inicial si no hay hash (antes de iniciar el router)
  if (!location.hash) {
    location.hash = '#/';
  }

  // Inicia el router
  initRouter({
    outlet: document.getElementById('app'),
  });
});