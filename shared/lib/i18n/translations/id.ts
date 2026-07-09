/**
 * Indonesian Translation
 * T-028: 다국어 지원 시스템 및 데이터베이스 스키마 구현
 */

export const id = {
  // Common
  common: {
    loading: 'Memuat...',
    error: 'Terjadi kesalahan',
    retry: 'Coba Lagi',
    cancel: 'Batal',
    save: 'Simpan',
    edit: 'Edit',
    delete: 'Hapus',
    search: 'Cari',
    share: 'Bagikan',
    back: 'Kembali',
    next: 'Selanjutnya',
    previous: 'Sebelumnya',
    home: 'Beranda',
    about: 'Tentang',
    contact: 'Kontak',
    privacy: 'Kebijakan Privasi',
    terms: 'Syarat Layanan'
  },

  // Navigation
  nav: {
    home: 'Beranda',
    dreams: 'Mimpi',
    categories: 'Kategori',
    search: 'Cari',
    admin: 'Administrator',
    profile: 'Profil',
    login: 'Masuk',
    logout: 'Keluar'
  },

  // Dream content
  dream: {
    title: 'Tafsir Mimpi',
    interpretation: 'Interpretasi',
    meaning: 'Makna',
    symbols: 'Simbol',
    category: 'Kategori',
    keywords: 'Kata Kunci',
    related: 'Mimpi Terkait',
    share_text: 'Bagikan tafsir mimpi ini',
    not_found: 'Mimpi tidak ditemukan',
    loading: 'Memuat tafsir mimpi...'
  },

  // Search
  search: {
    placeholder: 'Cari mimpi...',
    button: 'Cari',
    results: 'Hasil Pencarian',
    no_results: 'Tidak ada hasil ditemukan',
    suggestions: 'Saran',
    popular: 'Pencarian Populer',
    dreamSymbols: 'Simbol Mimpi',
  },

  // Categories
  categories: {
    title: 'Kategori Mimpi',
    all: 'Semua Kategori',
    popular: 'Populer',
    dreamSymbols: 'Simbol Mimpi',
    recent: 'Terbaru',
    totalCount: '{{count}} interpretasi mimpi',
    noResults: 'Tidak ada interpretasi mimpi ditemukan'
  },

  // Homepage
  home: {
    title: 'Dream-DB',
    subtitle: 'Penasaran dengan makna mimpi semalam?',
    description: 'Dapatkan interpretasi mimpi yang akurat dengan analisis AI secara instan',
    featured: 'Mimpi Populer',
    categories: 'Kategori Mimpi',
    about: {
      title: 'Makna dan Pentingnya Tafsir Mimpi',
      content: 'Mimpi adalah pesan dari alam bawah sadar kita. Dream-DB menggunakan teknologi AI untuk memberikan informasi interpretasi mimpi yang lebih akurat dan beragam.',
      features: {
        title: 'Yang Membuat Dream-DB Istimewa',
        ai: 'Analisis mimpi akurat bertenaga AI',
        database: 'Database ribuan interpretasi mimpi',
        categories: 'Kategorisasi sistematis',
        sharing: 'Fitur berbagi yang mudah',
        mobile: 'Pencarian cepat dioptimalkan mobile'
      }
    }
  },

  // Admin
  admin: {
    dashboard: 'Dasbor',
    analytics: 'Analitik',
    dreams: 'Manajemen Mimpi',
    users: 'Pengguna',
    settings: 'Pengaturan',
    translations: 'Terjemahan',
    quality: 'Kualitas',
    performance: 'Performa',
    traffic: 'Lalu Lintas'
  },

  // SEO
  seo: {
    site_name: 'Dream Insights - Tafsir Mimpi',
    description: 'Tafsir dan makna mimpi dengan AI. Pahami mimpi Anda.',
    keywords: 'tafsir mimpi, arti mimpi, analisis mimpi'
  },

  // Forms
  form: {
    email: 'Email',
    password: 'Kata Sandi',
    name: 'Nama',
    submit: 'Kirim',
    required: 'Wajib',
    invalid_email: 'Email tidak valid',
    password_min: 'Kata sandi harus minimal 6 karakter'
  },

  // Errors
  error: {
    not_found: 'Halaman tidak ditemukan',
    server_error: 'Kesalahan server',
    network_error: 'Kesalahan jaringan',
    try_again: 'Silakan coba lagi'
  },

  // Site
  site: {
    name: 'Dream-DB',
    description: 'Layanan Interpretasi Mimpi Bertenaga AI'
  },

  // FAQ
  faq: {
    dreamMeaning: {
      question: 'Apa itu interpretasi mimpi?',
      answer: 'Interpretasi mimpi adalah proses memahami makna mimpi yang dialami saat tidur. Dream-DB menggunakan teknologi AI untuk memberikan interpretasi mimpi yang akurat dan kaya.'
    },
    aiAccuracy: {
      question: 'Seberapa akurat interpretasi mimpi AI?',
      answer: 'AI kami telah belajar dari puluhan ribu database interpretasi mimpi dan membanggakan akurasi yang tinggi. Namun, interpretasi yang mempertimbangkan situasi pribadi dan keadaan emosional mungkin lebih akurat.'
    },
    searchMethod: {
      question: 'Bagaimana cara mencari mimpi?',
      answer: 'Anda dapat menemukan interpretasi terkait dengan memasukkan isi mimpi atau kata kunci di kotak pencarian di atas. Anda juga dapat menjelajahi berdasarkan kategori.'
    },
    freeService: {
      question: 'Apakah semua layanan interpretasi gratis?',
      answer: 'Layanan interpretasi mimpi dasar disediakan secara gratis. Layanan premium menyediakan interpretasi yang lebih detail dan personal.'
    },
    recurringDreams: {
      question: 'Mengapa saya terus bermimpi hal yang sama?',
      answer: 'Mimpi berulang biasanya mengandung masalah yang belum terselesaikan, emosi yang kuat, atau pesan penting. Temukan makna mimpi itu di Dream-DB.'
    }
  }
} as const;