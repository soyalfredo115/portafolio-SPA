// js/router.js
import Home from './pages/home.js';
import About from './pages/about.js';
import Projects from './pages/projects.js';
import ProjectDetail from './pages/projectDetail.js';
import Contact from './pages/contact.js';
import { animateSwap } from './utils/animate.js';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/projects', component: Projects },
  { path: '/projects/:slug', component: ProjectDetail },
  { path: '/contact', component: Contact },
];

function pathToRegex(path) {
  return new RegExp('^' + path.replace(/\/:\w+/g, '/([^/]+)') + '$');
}

function getParams(match, route) {
  const keys = (route.path.match(/:(\w+)/g) || []).map(k => k.slice(1));
  const vals = match.slice(1);
  return keys.reduce((acc, k, i) => ({ ...acc, [k]: decodeURIComponent(vals[i] || '') }), {});
}

function resolve(hash) {
  const path = hash.replace(/^#/, '') || '/';
  for (const route of routes) {
    const re = pathToRegex(route.path);
    const m = path.match(re);
    if (m) return { route, params: getParams(m, route) };
  }
  // fallback seguro
  return { route: routes[0], params: {} };
}

export function navigate(to) {
  if (location.hash !== `#${to}`) location.hash = `#${to}`;
}

export function initRouter({ outlet }) {
  async function render() {
    const { route, params } = resolve(location.hash);
    const View = route.component;
    try {
      const html = await View.render(params);
      await animateSwap(outlet, html, async () => {
        if (View.afterRender) await View.afterRender(params);
        // Marca activo en el nav
        document.querySelectorAll('[data-nav]').forEach(a => {
          const href = a.getAttribute('href') || '';
          const path = href.replace(/^#/, '');
          const current = location.hash.replace(/^#/, '') || '/';
          a.classList.toggle('active', current.startsWith(path));
        });
      });
    } catch (err) {
      console.error('Error renderizando vista:', err);
      outlet.innerHTML = `<div class="container"><h1>Error cargando la vista</h1></div>`;
    }
  }

  window.addEventListener('hashchange', render);
  render();
}