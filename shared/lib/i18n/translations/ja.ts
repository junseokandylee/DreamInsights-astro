/**
 * Japanese Translation
 * T-028: 다국어 지원 시스템 및 데이터베이스 스키마 구현
 */

export const ja = {
  // Common
  common: {
    loading: '読み込み中...',
    error: 'エラーが発生しました',
    retry: '再試行',
    cancel: 'キャンセル',
    save: '保存',
    edit: '編集',
    delete: '削除',
    search: '検索',
    share: '共有',
    back: '戻る',
    next: '次へ',
    previous: '前へ',
    home: 'ホーム',
    about: '概要',
    contact: 'お問い合わせ',
    privacy: 'プライバシーポリシー',
    terms: '利用規約'
  },

  // Navigation
  nav: {
    home: 'ホーム',
    search: '夢占い検索',
    categories: 'カテゴリ',
    popular: '人気の夢占い',
    dreamSymbols: '夢のシンボル',
    recent: '最新の夢占い',
    about: '概要',
    language: '言語'
  },

  // Search
  search: {
    placeholder: '夢の内容を検索してください（例：犬、雨、海）',
    button: '検索',
    noResults: '検索結果が見つかりません',
    resultsFound: '件の検索結果',
    searchFor: '検索：',
    trending: '人気の検索',
    recentSearches: '最近の検索'
  },

  // Dream
  dream: {
    title: '夢占い',
    interpretation: '夢の解釈',
    meaning: '夢の意味',
    category: 'カテゴリ',
    views: '閲覧数',
    shares: '共有数',
    published: '公開日',
    updated: '更新日',
    keywords: 'キーワード',
    related: '関連する夢占い',
    share: {
      title: 'この夢占いを共有',
      facebook: 'Facebookで共有',
      twitter: 'Twitterで共有',
      kakao: 'KakaoTalkで共有',
      link: 'リンクをコピー',
      copySuccess: 'リンクがコピーされました'
    }
  },

  // Categories
  categories: {
    title: 'カテゴリ別夢占い',
    all: 'すべて',
    animals: '動物',
    nature: '自然',
    people: '人',
    objects: '物',
    emotions: '感情',
    actions: '行動',
    places: '場所',
    colors: '色',
    numbers: '数字',
    supernatural: '超自然的',
    totalCount: '{{count}}個の夢占い',
    noResults: '夢占いが見つかりません'
  },

  // Homepage
  home: {
    title: 'ドリームインサイト',
    subtitle: '昨夜の夢の意味が気になりませんか？',
    description: 'AIが分析した正確な夢占いをすぐに確認できます',
    featured: '人気の夢占い',
    categories: 'カテゴリ別夢占い',
    about: {
      title: '夢占いの意味と重要性',
      content: '夢は私たちの無意識が伝えるメッセージです。ドリームインサイトはAI技術を活用して、より正確で多様な夢占い情報を提供します。',
      features: {
        title: 'ドリームインサイトの特徴',
        ai: 'AI基盤の正確な夢分析',
        database: '数万件の夢占いデータベース',
        categories: 'カテゴリ別体系的分類',
        sharing: '簡単な共有機能',
        mobile: 'モバイル最適化された高速検索'
      }
    }
  },

  // SEO & Meta
  seo: {
    defaultTitle: 'ドリームインサイト - AI夢占いサービス',
    defaultDescription: 'AI基盤の正確な夢占い情報を提供し、夢の意味を簡単に検索・共有できるサービスです。',
    notFound: {
      title: 'ページが見つかりません',
      description: 'リクエストされたページが見つかりません。'
    }
  },

  // Error messages
  errors: {
    general: 'エラーが発生しました。しばらくしてから再度お試しください。',
    network: 'ネットワーク接続を確認してください。',
    notFound: 'リクエストされた内容が見つかりません。',
    searchFailed: '検索に失敗しました。',
    shareFailed: '共有に失敗しました。'
  },

  // Time/Date
  time: {
    ago: '前',
    minute: '分',
    hour: '時間',
    day: '日',
    month: 'ヶ月',
    year: '年',
    today: '今日',
    yesterday: '昨日',
    thisWeek: '今週',
    thisMonth: '今月'
  },

  // Ads
  ads: {
    label: '広告'
  },

  // Admin Dashboard
  admin: {
    title: '管理者ダッシュボード',
    analytics: '分析',
    dreams: '夢占い管理',
    categories: 'カテゴリ管理',
    users: 'ユーザー管理',
    settings: '設定',
    overview: '概要',
    totalDreams: '総夢占い数',
    totalViews: '総閲覧数',
    totalShares: '総共有数',
    popularDreams: '人気の夢占い',
    recentActivity: '最近のアクティビティ',
    aiQuality: 'AI品質監視',
    performance: 'パフォーマンス指標'
  },

  // Forms
  forms: {
    required: 'この項目は必須です',
    invalid: '無効な形式です',
    tooShort: '短すぎます',
    tooLong: '長すぎます',
    submit: '送信',
    reset: 'リセット',
    clear: 'クリア',
    apply: '適用',
    filter: 'フィルター',
    sort: '並び替え',
    ascending: '昇順',
    descending: '降順',
    selectAll: '全て選択',
    deselectAll: '選択解除',
    confirm: '確認',
    close: '閉じる'
  },

  // Pagination
  pagination: {
    previous: '前へ',
    next: '次へ',
    first: '最初',
    last: '最後',
    page: 'ページ',
    of: '/',
    showing: '表示中',
    to: '〜',
    entries: '件',
    noData: 'データがありません'
  },

  // Notifications
  notifications: {
    success: '成功しました',
    error: 'エラーが発生しました',
    warning: '警告',
    info: '情報',
    saved: '保存されました',
    deleted: '削除されました',
    updated: '更新されました',
    loading: '処理中...',
    copied: 'コピーされました',
    linkCopied: 'リンクがコピーされました'
  },

  // Filters & Sorting
  filters: {
    all: '全て',
    filterBy: 'フィルター',
    sortBy: '並び替え',
    newest: '新しい順',
    oldest: '古い順',
    popular: '人気順',
    dreamSymbols: '夢のシンボル',
    alphabetical: 'あいうえお順',
    mostViewed: '閲覧数順',
    mostShared: '共有数順',
    featured: 'おすすめ',
    category: 'カテゴリ',
    date: '日付',
    clear: 'フィルタークリア',
    apply: 'フィルター適用'
  },

  // Modal Dialogs
  modal: {
    close: '閉じる',
    confirm: '確認',
    cancel: 'キャンセル',
    delete: {
      title: '削除確認',
      message: '本当に削除しますか？',
      confirm: '削除',
      cancel: 'キャンセル'
    },
    share: {
      title: '共有',
      copyLink: 'リンクをコピー',
      facebook: 'Facebook',
      twitter: 'Twitter',
      kakao: 'KakaoTalk',
      email: 'メール'
    }
  },

  // Breadcrumbs
  breadcrumb: {
    home: 'ホーム',
    search: '検索',
    category: 'カテゴリ',
    dream: '夢占い'
  },

  // Loading States
  loading: {
    dreams: '夢占いを読み込み中...',
    categories: 'カテゴリを読み込み中...',
    search: '検索中...',
    saving: '保存中...',
    deleting: '削除中...',
    uploading: 'アップロード中...',
    processing: '処理中...'
  },

  // Footer
  footer: {
    about: '概要',
    privacy: 'プライバシーポリシー',
    terms: '利用規約',
    contact: 'お問い合わせ',
    copyright: '著作権',
    allRightsReserved: 'All rights reserved',
    company: 'Dream-DB',
    disclaimer: 'すべての夢占いは参考用であり、個人の解釈が重要です。'
  },

  // Meta/SEO
  meta: {
    defaultTitle: 'ドリームインサイト - AI夢占いサービス',
    titleTemplate: '%s | ドリームインサイト',
    description: 'AI基盤の正確な夢占い情報を提供し、夢の意味を簡単に検索・共有できるサービスです。',
    keywords: '夢占い, 夢解釈, ドリームインサイト, AI夢占い, 夢分析, 夢の意味',
    ogTitle: 'ドリームインサイト - AI夢占いサービス',
    ogDescription: 'あなたの夢が伝えるメッセージをAIで解釈します。'
  },

  // Site
  site: {
    name: 'ドリームインサイト',
    description: 'AI夢占いサービス'
  },

  // FAQ
  faq: {
    dreamMeaning: {
      question: '夢占いとは何ですか？',
      answer: '夢占いとは、睡眠中に見る夢の意味を解釈することです。ドリームインサイトはAI技術を活用して正確で豊富な夢の解釈を提供しています。'
    },
    aiAccuracy: {
      question: 'AI夢占いの精度はどの程度ですか？',
      answer: '私たちのAIは数万件の夢占いデータベースを学習し、高い精度を誇ります。ただし、個人の状況や感情状態を考慮した解釈がより正確である場合があります。'
    },
    searchMethod: {
      question: '夢を検索する方法は何ですか？',
      answer: '上部の検索ボックスに夢の内容やキーワードを入力すると、関連する夢占いを見つけることができます。カテゴリ別に探索することも可能です。'
    },
    freeService: {
      question: 'すべての夢占いサービスは無料ですか？',
      answer: '基本的な夢占いサービスは無料で提供されています。プレミアムサービスでは、より詳細で個人化された夢占いを提供しています。'
    },
    recurringDreams: {
      question: '同じ夢を頻繁に見る理由はありますか？',
      answer: '繰り返される夢は通常、未解決の問題や強い感情、または重要なメッセージを含んでいる可能性があります。ドリームインサイトでその夢の意味を見つけてください。'
    }
  }
} as const;