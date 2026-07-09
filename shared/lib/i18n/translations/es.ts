/**
 * Spanish Translation
 * T-028: 다국어 지원 시스템 및 데이터베이스 스키마 구현
 */

export const es = {
  // Common
  common: {
    loading: 'Cargando...',
    error: 'Ha ocurrido un error',
    retry: 'Reintentar',
    cancel: 'Cancelar',
    save: 'Guardar',
    edit: 'Editar',
    delete: 'Eliminar',
    search: 'Buscar',
    share: 'Compartir',
    back: 'Atrás',
    next: 'Siguiente',
    previous: 'Anterior',
    home: 'Inicio',
    about: 'Acerca de',
    contact: 'Contacto',
    privacy: 'Política de Privacidad',
    terms: 'Términos de Servicio'
  },

  // Navigation
  nav: {
    home: 'Inicio',
    dreams: 'Sueños',
    categories: 'Categorías',
    search: 'Buscar',
    admin: 'Administrador',
    profile: 'Perfil',
    login: 'Iniciar Sesión',
    logout: 'Cerrar Sesión'
  },

  // Dream content
  dream: {
    title: 'Interpretación de Sueños',
    interpretation: 'Interpretación',
    meaning: 'Significado',
    symbols: 'Símbolos',
    category: 'Categoría',
    keywords: 'Palabras Clave',
    related: 'Sueños Relacionados',
    share_text: 'Compartir esta interpretación de sueño',
    not_found: 'Sueño no encontrado',
    loading: 'Cargando interpretación del sueño...'
  },

  // Search
  search: {
    placeholder: 'Buscar sueño...',
    button: 'Buscar',
    results: 'Resultados de Búsqueda',
    no_results: 'No se encontraron resultados',
    suggestions: 'Sugerencias',
    popular: 'Búsquedas Populares',
    dreamSymbols: 'Símbolos de Sueños',
  },

  // Categories
  categories: {
    title: 'Categorías de Sueños',
    all: 'Todas las Categorías',
    popular: 'Popular',
    dreamSymbols: 'Símbolos de Sueños',
    recent: 'Reciente',
    totalCount: '{{count}} interpretaciones de sueños',
    noResults: 'No se encontraron interpretaciones de sueños'
  },

  // Homepage
  home: {
    title: 'Dream-DB',
    subtitle: '¿Tienes curiosidad sobre el significado del sueño de anoche?',
    description: 'Obtén interpretaciones precisas de sueños analizadas por IA al instante',
    featured: 'Sueños Populares',
    categories: 'Categorías de Sueños',
    about: {
      title: 'El Significado e Importancia de la Interpretación de Sueños',
      content: 'Los sueños son mensajes de nuestra mente inconsciente. Dream-DB utiliza tecnología de IA para proporcionar información de interpretación de sueños más precisa y diversa.',
      features: {
        title: 'Lo que Hace Especial a Dream-DB',
        ai: 'Análisis preciso de sueños con IA',
        database: 'Base de datos de miles de interpretaciones de sueños',
        categories: 'Categorización sistemática',
        sharing: 'Funciones de compartir fáciles',
        mobile: 'Búsqueda rápida optimizada para móviles'
      }
    }
  },

  // Admin
  admin: {
    dashboard: 'Panel de Control',
    analytics: 'Analíticas',
    dreams: 'Gestión de Sueños',
    users: 'Usuarios',
    settings: 'Configuración',
    translations: 'Traducciones',
    quality: 'Calidad',
    performance: 'Rendimiento',
    traffic: 'Tráfico'
  },

  // SEO
  seo: {
    site_name: 'Dream Insights - Interpretación de Sueños',
    description: 'Interpretación y significado de sueños impulsada por IA. Comprende tus sueños.',
    keywords: 'interpretación de sueños, significado de sueños, análisis de sueños'
  },

  // Forms
  form: {
    email: 'Correo Electrónico',
    password: 'Contraseña',
    name: 'Nombre',
    submit: 'Enviar',
    required: 'Requerido',
    invalid_email: 'Correo electrónico inválido',
    password_min: 'La contraseña debe tener al menos 6 caracteres'
  },

  // Errors
  error: {
    not_found: 'Página no encontrada',
    server_error: 'Error del servidor',
    network_error: 'Error de red',
    try_again: 'Por favor, inténtalo de nuevo'
  },

  // Site
  site: {
    name: 'Dream-DB',
    description: 'Servicio de interpretación de sueños impulsado por IA'
  },

  // FAQ
  faq: {
    dreamMeaning: {
      question: '¿Qué es la interpretación de sueños?',
      answer: 'La interpretación de sueños es el proceso de entender el significado de los sueños experimentados durante el sueño. Dream-DB utiliza tecnología IA para proporcionar interpretaciones de sueños precisas y ricas.'
    },
    aiAccuracy: {
      question: '¿Qué tan precisa es la interpretación de sueños por IA?',
      answer: 'Nuestra IA ha aprendido de decenas de miles de bases de datos de interpretación de sueños y presume de alta precisión. Sin embargo, las interpretaciones que consideran situaciones personales y estados emocionales pueden ser más precisas.'
    },
    searchMethod: {
      question: '¿Cómo busco sueños?',
      answer: 'Puede encontrar interpretaciones relacionadas ingresando el contenido del sueño o palabras clave en el cuadro de búsqueda en la parte superior. También puede explorar por categoría.'
    },
    freeService: {
      question: '¿Son todos los servicios de interpretación gratuitos?',
      answer: 'Los servicios básicos de interpretación de sueños se proporcionan de forma gratuita. Los servicios premium proporcionan interpretaciones más detalladas y personalizadas.'
    },
    recurringDreams: {
      question: '¿Por qué sigo teniendo el mismo sueño?',
      answer: 'Los sueños recurrentes generalmente contienen problemas no resueltos, emociones fuertes o mensajes importantes. Encuentra el significado de ese sueño en Dream-DB.'
    }
  }
} as const;