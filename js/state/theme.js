const KEY = 'theme'; // 'light' | 'dark' | 'system'

export function applySavedTheme() {
  const saved = localStorage.getItem(KEY) || 'system';
  document.documentElement.setAttribute('data-theme', saved);
}
export function setTheme(mode) {
  localStorage.setItem(KEY, mode);
  applySavedTheme();
}
export function getTheme() {
  return localStorage.getItem(KEY) || 'system';
}

export function mountThemeToggle() {
  const host = document.querySelector('[data-theme-toggle]');
  if (!host) return;
  host.innerHTML = `
    <button class="theme-toggle" id="theme-btn" title="Tema">
      <span id="theme-label"></span>
    </button>
  `;
  const btn = document.getElementById('theme-btn');
  const label = document.getElementById('theme-label');
  const icons = {
    light: '☀️ Claro',
    dark: '🌙 Oscuro',
    system: '🖥️ Sistema',
  };
  const cycle = { system: 'light', light: 'dark', dark: 'system' };
  function sync() { label.textContent = icons[getTheme()]; }
  btn.addEventListener('click', () => { setTheme(cycle[getTheme()]); sync(); });
  sync();
}