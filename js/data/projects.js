export const projects = [
  {
    slug: 'tienda-bebes-ninos',
    title: 'E-commerce para bebés y niños',
    subtitle: 'Front-end modular, pastel y gamificado sobre plataforma Odoo',
    cover: './assets/img/store-cover.png',
    repo: 'https://github.com/soyalfredo115/tienda-bebes',
    demo: 'https://tu-dominio-o-demo',
    tags: ['HTML', 'CSS', 'JS Modular', 'Odoo Studio', 'UX', 'Gamificación'],
    summary:
      'Arquitectura front-end modular con búsqueda en vivo, quick view, mini-cart y comparador. Diseño pastel, accesible y escalable.',
    media: [
      { type: 'img', src: './assets/img/store-cover.png', alt: 'Listado de productos' },
      { type: 'gif', src: './assets/img/store-ux.gif', alt: 'Interacciones y micro-animaciones' },
    ],
    highlights: [
      'Búsqueda en vivo y “quick view” sin recargar',
      'Mini-cart con transiciones suaves y persistencia',
      'Comparador de productos y reseñas',
      'Timers de oferta y UI gamificada no intrusiva',
      'Componentización: tarjetas, modales, tooltips, banners',
    ],
    tech: [
      'Arquitectura modular (HTML/CSS/JS separados)',
      'ES Modules y router hash',
      'CSS variables con temas claro/oscuro',
      'Utilidades accesibles (focus, roles, ARIA)',
    ],
    outcomes: [
      'Tiempo hasta interacción percibida < 1s en rutas internas',
      'Reducción de deuda técnica gracias a separación de responsabilidades',
    ],
  },
  {
    slug: 'portfolio-spa',
    title: 'Este Portafolio SPA',
    subtitle: 'Plantilla vanilla escalable y animada',
    cover: './assets/img/placeholder.png',
    repo: 'https://github.com/TU_USUARIO/portfolio-spa',
    demo: '',
    tags: ['Vanilla JS', 'SPA', 'CSS Animations'],
    summary: 'La base que estás viendo: navegación fluida, modo oscuro y componentes reutilizables.',
    media: [],
    highlights: ['Router minimalista', 'Transiciones de vista', 'Data-driven pages'],
    tech: ['ES Modules', 'localStorage', 'CSS Grid/Flex'],
    outcomes: ['Estructura lista para escalar con más páginas y componentes'],
  },
];