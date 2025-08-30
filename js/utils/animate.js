// js/utils/animate.js
// Versión mejorada: evita el "flash" superponiendo la nueva vista y animando ambas en paralelo.
export async function animateSwap(container, nextHTML, onMounted) {
// Si no hay contenido nuevo, no borres lo que ya está
if (!nextHTML) {
console.warn('animateSwap: contenido vacío, se mantiene la vista actual.');
return;
}


const current = container.firstElementChild;


// Crear la nueva vista (pero no quitar todavía la anterior)
const next = document.createElement('section');
next.className = 'view section card view-enter overlay-next';
next.innerHTML = nextHTML;


// Aseguramos que el contenedor tenga posicionamiento relativo
if (getComputedStyle(container).position === 'static') {
container.style.position = 'relative';
}


// Estilo temporal para superponer sin romper layout
next.style.position = 'absolute';
next.style.inset = '0';
next.style.zIndex = 10;


container.appendChild(next); // añadimos la nueva vista encima


// Ejecutar callback afterMount (si aplica)
if (onMounted) await onMounted();


// Si hay vista actual, animarla fuera mientras la nueva entra
if (current) {
// Aseguramos que current esté por debajo visualmente
current.style.position = current.style.position || 'relative';
current.classList.add('view-exit');
}


// Esperamos a que termine la animación de entrada de 'next' y la salida del 'current'
await Promise.all([
waitAnimationEnd(next),
current ? waitAnimationEnd(current) : Promise.resolve()
]);


// Limpieza: eliminar la vista anterior y dejar next como "view"
if (current && current.parentNode === container) {
container.removeChild(current);
}


// Normalizamos next (quitamos clase de entrada y estilos inline)
next.classList.remove('view-enter', 'overlay-next');
next.style.position = '';
next.style.inset = '';
next.style.zIndex = '';
}


function waitAnimationEnd(el) {
return new Promise(resolve => {
} ) }