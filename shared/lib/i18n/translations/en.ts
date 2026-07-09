/**
 * English Translation
 * T-028: 다국어 지원 시스템 및 데이터베이스 스키마 구현
 */

export const en = {
  // Top-level keys for backwards compatibility
  dreamNotFound: 'Dream interpretation not found',
  dreamNotFoundDescription: 'The requested dream interpretation could not be found. Try searching for other dreams.',
  back: 'Back',
  views: 'Views',

  // Common
  common: {
    loading: 'Loading...',
    error: 'An error occurred',
    retry: 'Retry',
    cancel: 'Cancel',
    save: 'Save',
    edit: 'Edit',
    delete: 'Delete',
    search: 'Search',
    share: 'Share',
    back: 'Back',
    next: 'Next',
    previous: 'Previous',
    home: 'Home',
    about: 'About',
    contact: 'Contact',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service'
  },

  // Navigation
  nav: {
    home: 'Home',
    search: 'Dream Search',
    categories: 'Categories',
    popular: 'Popular Dreams',
    dreamSymbols: 'Dream Symbols',
    recent: 'Recent Dreams',
    about: 'About',
    language: 'Language'
  },

  // Search
  search: {
    placeholder: 'Search your dream (e.g., dog, rain, ocean)',
    button: 'Search',
    noResults: 'No search results found',
    resultsFound: 'search results found',
    searchFor: 'Search for:',
    trending: 'Trending Searches',
    recentSearches: 'Recent Searches'
  },

  // Dream
  dream: {
    title: 'Dream Interpretation',
    interpretation: 'Interpretation',
    meaning: 'Dream Meaning',
    category: 'Category',
    views: 'Views',
    shares: 'Shares',
    published: 'Published',
    updated: 'Updated',
    keywords: 'Keywords',
    related: 'Related Dreams',
    share: {
      title: 'Share this Dream',
      facebook: 'Share on Facebook',
      twitter: 'Share on Twitter',
      kakao: 'Share on KakaoTalk',
      link: 'Copy Link',
      copySuccess: 'Link copied to clipboard'
    }
  },

  // Categories
  categories: {
    title: 'Dream Categories',
    all: 'All',
    animals: 'Animals',
    nature: 'Nature',
    people: 'People',
    objects: 'Objects',
    emotions: 'Emotions',
    actions: 'Actions',
    places: 'Places',
    colors: 'Colors',
    numbers: 'Numbers',
    supernatural: 'Supernatural',
    totalCount: '{{count}} dream interpretations',
    noResults: 'No dream interpretations found'
  },

  // Homepage
  home: {
    title: 'Dream-DB',
    subtitle: 'Curious about the meaning of last night\'s dream?',
    description: 'Get accurate AI-analyzed dream interpretations instantly',
    featured: 'Popular Dreams',
    categories: 'Dream Categories',
    about: {
      title: 'The Meaning and Importance of Dream Interpretation',
      content: 'Dreams are messages from our unconscious mind. Dream-DB uses AI technology to provide more accurate and diverse dream interpretation information.',
      features: {
        title: 'What Makes Dream-DB Special',
        ai: 'AI-powered accurate dream analysis',
        database: 'Thousands of dream interpretations database',
        categories: 'Systematic categorization',
        sharing: 'Easy sharing features',
        mobile: 'Mobile-optimized fast search'
      }
    }
  },

  // SEO & Meta
  seo: {
    defaultTitle: 'Dream-DB - AI-Powered Dream Interpretation Service',
    defaultDescription: 'Provide accurate AI-based dream interpretation information and easily search and share dream meanings.',
    notFound: {
      title: 'Page Not Found',
      description: 'The requested page could not be found.'
    }
  },

  // Error messages
  errors: {
    general: 'An error occurred. Please try again later.',
    network: 'Please check your network connection.',
    notFound: 'The requested content could not be found.',
    searchFailed: 'Search failed.',
    shareFailed: 'Share failed.'
  },

  // Time/Date
  time: {
    ago: 'ago',
    minute: 'minute',
    hour: 'hour',
    day: 'day',
    month: 'month',
    year: 'year',
    today: 'Today',
    yesterday: 'Yesterday',
    thisWeek: 'This week',
    thisMonth: 'This month'
  },

  // Ads
  ads: {
    label: 'Advertisement'
  },

  // Admin Dashboard
  admin: {
    title: 'Admin Dashboard',
    analytics: 'Analytics',
    dreams: 'Dream Management',
    categories: 'Category Management',
    users: 'User Management',
    settings: 'Settings',
    overview: 'Overview',
    totalDreams: 'Total Dreams',
    totalViews: 'Total Views',
    totalShares: 'Total Shares',
    popularDreams: 'Popular Dreams',
    recentActivity: 'Recent Activity',
    aiQuality: 'AI Quality Monitoring',
    performance: 'Performance Metrics'
  },

  // Forms
  forms: {
    required: 'This field is required',
    invalid: 'Invalid format',
    tooShort: 'Too short',
    tooLong: 'Too long',
    submit: 'Submit',
    reset: 'Reset',
    clear: 'Clear',
    apply: 'Apply',
    filter: 'Filter',
    sort: 'Sort',
    ascending: 'Ascending',
    descending: 'Descending',
    selectAll: 'Select All',
    deselectAll: 'Deselect All',
    confirm: 'Confirm',
    close: 'Close'
  },

  // Pagination
  pagination: {
    previous: 'Previous',
    next: 'Next',
    first: 'First',
    last: 'Last',
    page: 'Page',
    of: 'of',
    showing: 'Showing',
    to: 'to',
    entries: 'entries',
    noData: 'No data available'
  },

  // Notifications
  notifications: {
    success: 'Success',
    error: 'An error occurred',
    warning: 'Warning',
    info: 'Information',
    saved: 'Saved successfully',
    deleted: 'Deleted successfully',
    updated: 'Updated successfully',
    loading: 'Loading...',
    copied: 'Copied to clipboard',
    linkCopied: 'Link copied to clipboard'
  },

  // Filters & Sorting
  filters: {
    all: 'All',
    filterBy: 'Filter by',
    sortBy: 'Sort by',
    newest: 'Newest first',
    oldest: 'Oldest first',
    popular: 'Most popular',
    dreamSymbols: 'Dream Symbols',
    alphabetical: 'Alphabetical',
    mostViewed: 'Most viewed',
    mostShared: 'Most shared',
    featured: 'Featured',
    category: 'Category',
    date: 'Date',
    clear: 'Clear filters',
    apply: 'Apply filters'
  },

  // Modal Dialogs
  modal: {
    close: 'Close',
    confirm: 'Confirm',
    cancel: 'Cancel',
    delete: {
      title: 'Confirm Delete',
      message: 'Are you sure you want to delete this?',
      confirm: 'Delete',
      cancel: 'Cancel'
    },
    share: {
      title: 'Share',
      copyLink: 'Copy Link',
      facebook: 'Facebook',
      twitter: 'Twitter',
      kakao: 'KakaoTalk',
      email: 'Email'
    }
  },

  // Breadcrumbs
  breadcrumb: {
    home: 'Home',
    search: 'Search',
    category: 'Category',
    dream: 'Dream'
  },

  // Loading States
  loading: {
    dreams: 'Loading dreams...',
    categories: 'Loading categories...',
    search: 'Searching...',
    saving: 'Saving...',
    deleting: 'Deleting...',
    uploading: 'Uploading...',
    processing: 'Processing...'
  },

  // Footer
  footer: {
    about: 'About',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    contact: 'Contact',
    copyright: 'Copyright',
    allRightsReserved: 'All rights reserved',
    company: 'Dream-DB',
    disclaimer: 'All dream interpretations are for reference only. Personal interpretation is important.'
  },

  // Meta/SEO
  meta: {
    defaultTitle: 'Dream-DB - AI-Powered Dream Interpretation Service',
    titleTemplate: '%s | Dream-DB',
    description: 'Provide accurate AI-based dream interpretation information and easily search and share dream meanings.',
    keywords: 'dream interpretation, dream meaning, Dream-DB, AI dreams, dream analysis',
    ogTitle: 'Dream-DB - AI-Powered Dream Interpretation Service',
    ogDescription: 'Accurately interpret the messages your dreams convey with AI.'
  },

  // Site
  site: {
    name: 'Dream-DB',
    description: 'AI-Powered Dream Interpretation Service'
  },

  // Settings Page
  settings: {
    title: 'Settings',
    loginRequired: 'Login required',
    account: 'Account',
    profile: 'Edit Profile',
    profileDesc: 'Update your profile information like name and email.',
    password: 'Change Password',
    passwordDesc: 'Update your account password.',
    preferences: 'Preferences',
    language: 'Language',
    languageDesc: 'Change the display language.',
    theme: 'Theme',
    themeDesc: 'Switch between light and dark mode.',
    notifications: 'Notifications',
    emailNotif: 'Email Notifications',
    emailNotifDesc: 'Receive important notifications via email.',
    pushNotif: 'Push Notifications',
    pushNotifDesc: 'Receive browser push notifications.',
    privacy: 'Privacy & Security',
    privacyPolicy: 'Privacy Policy',
    privacyPolicyDesc: 'View the privacy policy.',
    deleteAccount: 'Delete Account',
    deleteAccountDesc: 'Permanently delete your account.'
  },

  // Contact Page
  contact: {
    title: 'Contact Us',
    description: 'If you have any questions or suggestions, please contact us using the form below.',
    info: 'Contact Information',
    name: 'Name',
    namePlaceholder: 'John Doe',
    email: 'Email',
    subject: 'Subject',
    subjectPlaceholder: 'Enter the subject of your inquiry',
    message: 'Message',
    messagePlaceholder: 'Please describe your inquiry in detail',
    send: 'Send',
    sending: 'Sending...',
    successTitle: 'Message Sent',
    successMessage: 'We will get back to you soon.',
    sendAnother: 'Send another message'
  },

  // FAQ
  faq: {
    dreamMeaning: {
      question: 'What is dream interpretation?',
      answer: 'Dream interpretation is the process of understanding the meaning of dreams experienced during sleep. Dream-DB uses AI technology to provide accurate and rich dream interpretations.'
    },
    aiAccuracy: {
      question: 'How accurate is AI dream interpretation?',
      answer: 'Our AI has learned from tens of thousands of dream interpretation databases and boasts high accuracy. However, interpretations that consider personal situations and emotional states may be more accurate.'
    },
    searchMethod: {
      question: 'How do I search for dreams?',
      answer: 'You can find related interpretations by entering dream content or keywords in the search box at the top. You can also explore by category.'
    },
    freeService: {
      question: 'Are all interpretation services free?',
      answer: 'Basic dream interpretation services are provided free of charge. Premium services provide more detailed and personalized interpretations.'
    },
    recurringDreams: {
      question: 'Why do I keep having the same dream?',
      answer: 'Recurring dreams usually contain unresolved problems, strong emotions, or important messages. Find the meaning of that dream on Dream-DB.'
    }
  }
} as const;