/**
 * French Translation
 * T-028: 다국어 지원 시스템 및 데이터베이스 스키마 구현
 */

export const fr = {
  // Common
  common: {
    loading: 'Chargement...',
    error: 'Une erreur est survenue',
    retry: 'Réessayer',
    cancel: 'Annuler',
    save: 'Enregistrer',
    edit: 'Modifier',
    delete: 'Supprimer',
    search: 'Rechercher',
    share: 'Partager',
    back: 'Retour',
    next: 'Suivant',
    previous: 'Précédent',
    home: 'Accueil',
    about: 'À propos',
    contact: 'Contact',
    privacy: 'Politique de Confidentialité',
    terms: 'Conditions de Service'
  },

  // Navigation
  nav: {
    home: 'Accueil',
    dreams: 'Rêves',
    categories: 'Catégories',
    search: 'Rechercher',
    admin: 'Administrateur',
    profile: 'Profil',
    login: 'Se Connecter',
    logout: 'Se Déconnecter'
  },

  // Dream content
  dream: {
    title: 'Interprétation des Rêves',
    interpretation: 'Interprétation',
    meaning: 'Signification',
    symbols: 'Symboles',
    category: 'Catégorie',
    keywords: 'Mots-clés',
    related: 'Rêves Connexes',
    share_text: 'Partager cette interprétation de rêve',
    not_found: 'Rêve non trouvé',
    loading: 'Chargement de l\'interprétation du rêve...'
  },

  // Search
  search: {
    placeholder: 'Rechercher un rêve...',
    button: 'Rechercher',
    results: 'Résultats de Recherche',
    no_results: 'Aucun résultat trouvé',
    suggestions: 'Suggestions',
    popular: 'Recherches Populaires',
    dreamSymbols: 'Symboles de Rêves',
  },

  // Categories
  categories: {
    title: 'Catégories de Rêves',
    all: 'Toutes les Catégories',
    popular: 'Populaire',
    dreamSymbols: 'Symboles de Rêves',
    recent: 'Récent',
    totalCount: '{{count}} interprétations de rêves',
    noResults: 'Aucune interprétation de rêve trouvée'
  },

  // Homepage
  home: {
    title: 'Dream-DB',
    subtitle: 'Curieux de connaître la signification du rêve de la nuit dernière ?',
    description: 'Obtenez des interprétations précises de rêves analysées par IA instantanément',
    featured: 'Rêves Populaires',
    categories: 'Catégories de Rêves',
    about: {
      title: 'La Signification et l\'Importance de l\'Interprétation des Rêves',
      content: 'Les rêves sont des messages de notre esprit inconscient. Dream-DB utilise la technologie IA pour fournir des informations d\'interprétation de rêves plus précises et diversifiées.',
      features: {
        title: 'Ce qui Rend Dream-DB Spécial',
        ai: 'Analyse précise des rêves avec IA',
        database: 'Base de données de milliers d\'interprétations de rêves',
        categories: 'Catégorisation systématique',
        sharing: 'Fonctionnalités de partage faciles',
        mobile: 'Recherche rapide optimisée mobile'
      }
    }
  },

  // Admin
  admin: {
    dashboard: 'Tableau de Bord',
    analytics: 'Analyses',
    dreams: 'Gestion des Rêves',
    users: 'Utilisateurs',
    settings: 'Paramètres',
    translations: 'Traductions',
    quality: 'Qualité',
    performance: 'Performance',
    traffic: 'Trafic'
  },

  // SEO
  seo: {
    site_name: 'Dream Insights - Interprétation des Rêves',
    description: 'Interprétation et signification des rêves alimentées par l\'IA. Comprenez vos rêves.',
    keywords: 'interprétation des rêves, signification des rêves, analyse des rêves'
  },

  // Forms
  form: {
    email: 'E-mail',
    password: 'Mot de passe',
    name: 'Nom',
    submit: 'Soumettre',
    required: 'Requis',
    invalid_email: 'E-mail invalide',
    password_min: 'Le mot de passe doit contenir au moins 6 caractères'
  },

  // Errors
  error: {
    not_found: 'Page non trouvée',
    server_error: 'Erreur serveur',
    network_error: 'Erreur réseau',
    try_again: 'Veuillez réessayer'
  },

  // Site
  site: {
    name: 'Dream-DB',
    description: 'Service d\'interprétation des rêves alimenté par l\'IA'
  },

  // FAQ
  faq: {
    dreamMeaning: {
      question: 'Qu\'est-ce que l\'interprétation des rêves ?',
      answer: 'L\'interprétation des rêves est le processus de compréhension de la signification des rêves vécus pendant le sommeil. Dream-DB utilise la technologie IA pour fournir des interprétations de rêves précises et riches.'
    },
    aiAccuracy: {
      question: 'Quelle est la précision de l\'interprétation des rêves par IA ?',
      answer: 'Notre IA a appris à partir de dizaines de milliers de bases de données d\'interprétation des rêves et se vante d\'une grande précision. Cependant, les interprétations qui tiennent compte des situations personnelles et des états émotionnels peuvent être plus précises.'
    },
    searchMethod: {
      question: 'Comment rechercher des rêves ?',
      answer: 'Vous pouvez trouver des interprétations connexes en saisissant le contenu du rêve ou des mots-clés dans la boîte de recherche en haut. Vous pouvez également explorer par catégorie.'
    },
    freeService: {
      question: 'Tous les services d\'interprétation sont-ils gratuits ?',
      answer: 'Les services de base d\'interprétation des rêves sont fournis gratuitement. Les services premium offrent des interprétations plus détaillées et personnalisées.'
    },
    recurringDreams: {
      question: 'Pourquoi je fais toujours le même rêve ?',
      answer: 'Les rêves récurrents contiennent généralement des problèmes non résolus, des émotions fortes ou des messages importants. Trouvez la signification de ce rêve sur Dream-DB.'
    }
  }
} as const;