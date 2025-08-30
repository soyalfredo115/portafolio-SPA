// js/utils/animate.js
export async function animateSwap(container, nextHTML, onMounted) {
  // Si no hay contenido nuevo, no borres lo que ya está
  if (!nextHTML) {
    console.warn('animateSwap: contenido vacío, se mantiene la vista actual.');
    return;
  }

  const current = container.firstElementChild;
  if (current) {
    current.classList.add('view-exit');
    await waitAnimationEnd(current);
  }

  container.innerHTML = '';
  const next = document.createElement('section');
  next.className = 'view section card view-enter';
  next.innerHTML = nextHTML;
  container.appendChild(next);

  if (onMounted) await onMounted();

  await waitAnimationEnd(next);
  next.classList.remove('view-enter');
}

function waitAnimationEnd(el) {
  return new Promise(resolve => {
    if (!el) return resolve();
    const cb = () => {
      el.removeEventListener('animationend', cb);
      resolve();
    };
    el.addEventListener('animationend', cb);
  });
}