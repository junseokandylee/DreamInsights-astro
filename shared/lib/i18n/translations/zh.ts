/**
 * Chinese Translation
 * T-028: 다국어 지원 시스템 및 데이터베이스 스키마 구현
 */

export const zh = {
  // Common
  common: {
    loading: '加载中...',
    error: '发生错误',
    retry: '重试',
    cancel: '取消',
    save: '保存',
    edit: '编辑',
    delete: '删除',
    search: '搜索',
    share: '分享',
    back: '返回',
    next: '下一个',
    previous: '上一个',
    home: '首页',
    about: '关于',
    contact: '联系我们',
    privacy: '隐私政策',
    terms: '服务条款'
  },

  // Navigation
  nav: {
    home: '首页',
    search: '梦境搜索',
    categories: '分类',
    popular: '热门解梦',
    dreamSymbols: '梦象征词典',
    recent: '最新解梦',
    about: '关于',
    language: '语言'
  },

  // Search
  search: {
    placeholder: '搜索您的梦境（例如：狗，雨，大海）',
    button: '搜索',
    noResults: '没有找到搜索结果',
    resultsFound: '个搜索结果',
    searchFor: '搜索：',
    trending: '热门搜索',
    recentSearches: '最近搜索'
  },

  // Dream
  dream: {
    title: '解梦',
    interpretation: '梦境解释',
    meaning: '梦境含义',
    category: '分类',
    views: '查看次数',
    shares: '分享次数',
    published: '发布日期',
    updated: '更新日期',
    keywords: '关键词',
    related: '相关解梦',
    share: {
      title: '分享这个解梦',
      facebook: '分享到Facebook',
      twitter: '分享到Twitter',
      kakao: '分享到KakaoTalk',
      link: '复制链接',
      copySuccess: '链接已复制'
    }
  },

  // Categories
  categories: {
    title: '分类解梦',
    all: '全部',
    animals: '动物',
    nature: '自然',
    people: '人物',
    objects: '物品',
    emotions: '情感',
    actions: '行为',
    places: '地点',
    colors: '颜色',
    numbers: '数字',
    supernatural: '超自然',
    totalCount: '{{count}}个解梦',
    noResults: '未找到解梦'
  },

  // Homepage
  home: {
    title: '梦境洞察',
    subtitle: '想知道昨晚梦境的含义吗？',
    description: '立即获取AI分析的准确解梦结果',
    featured: '热门解梦',
    categories: '分类解梦',
    about: {
      title: '解梦的意义和重要性',
      content: '梦境是我们潜意识传达的信息。梦境洞察运用AI技术，为您提供更准确、更丰富的解梦信息。',
      features: {
        title: '梦境洞察的特色',
        ai: '基于AI的精准梦境分析',
        database: '数万条解梦数据库',
        categories: '系统化分类整理',
        sharing: '便捷的分享功能',
        mobile: '移动端优化的快速搜索'
      }
    }
  },

  // SEO & Meta
  seo: {
    defaultTitle: '梦境洞察 - AI解梦服务',
    defaultDescription: '提供基于AI的准确解梦信息，轻松搜索和分享梦境含义。',
    notFound: {
      title: '页面未找到',
      description: '请求的页面不存在。'
    }
  },

  // Error messages
  errors: {
    general: '发生错误，请稍后再试。',
    network: '请检查网络连接。',
    notFound: '未找到请求的内容。',
    searchFailed: '搜索失败。',
    shareFailed: '分享失败。'
  },

  // Time/Date
  time: {
    ago: '前',
    minute: '分钟',
    hour: '小时',
    day: '天',
    month: '个月',
    year: '年',
    today: '今天',
    yesterday: '昨天',
    thisWeek: '本周',
    thisMonth: '本月'
  },

  // Ads
  ads: {
    label: '广告'
  },

  // Admin Dashboard
  admin: {
    title: '管理员仪表板',
    analytics: '分析',
    dreams: '解梦管理',
    categories: '分类管理',
    users: '用户管理',
    settings: '设置',
    overview: '概览',
    totalDreams: '总解梦数',
    totalViews: '总浏览量',
    totalShares: '总分享数',
    popularDreams: '热门解梦',
    recentActivity: '最近活动',
    aiQuality: 'AI质量监控',
    performance: '性能指标'
  },

  // Forms
  forms: {
    required: '此字段为必填项',
    invalid: '格式无效',
    tooShort: '太短',
    tooLong: '太长',
    submit: '提交',
    reset: '重置',
    clear: '清空',
    apply: '应用',
    filter: '筛选',
    sort: '排序',
    ascending: '升序',
    descending: '降序',
    selectAll: '全选',
    deselectAll: '取消选择',
    confirm: '确认',
    close: '关闭'
  },

  // Pagination
  pagination: {
    previous: '上一页',
    next: '下一页',
    first: '首页',
    last: '尾页',
    page: '页',
    of: '共',
    showing: '显示',
    to: '至',
    entries: '条',
    noData: '暂无数据'
  },

  // Notifications
  notifications: {
    success: '操作成功',
    error: '发生错误',
    warning: '警告',
    info: '信息',
    saved: '保存成功',
    deleted: '删除成功',
    updated: '更新成功',
    loading: '加载中...',
    copied: '已复制',
    linkCopied: '链接已复制'
  },

  // Filters & Sorting
  filters: {
    all: '全部',
    filterBy: '筛选',
    sortBy: '排序',
    newest: '最新',
    oldest: '最旧',
    popular: '最受欢迎',
    dreamSymbols: '梦象征词典',
    alphabetical: '字母顺序',
    mostViewed: '浏览最多',
    mostShared: '分享最多',
    featured: '推荐',
    category: '分类',
    date: '日期',
    clear: '清除筛选',
    apply: '应用筛选'
  },

  // Modal Dialogs
  modal: {
    close: '关闭',
    confirm: '确认',
    cancel: '取消',
    delete: {
      title: '确认删除',
      message: '您确定要删除吗？',
      confirm: '删除',
      cancel: '取消'
    },
    share: {
      title: '分享',
      copyLink: '复制链接',
      facebook: 'Facebook',
      twitter: 'Twitter',
      kakao: 'KakaoTalk',
      email: '邮箱'
    }
  },

  // Breadcrumbs
  breadcrumb: {
    home: '首页',
    search: '搜索',
    category: '分类',
    dream: '解梦'
  },

  // Loading States
  loading: {
    dreams: '解梦加载中...',
    categories: '分类加载中...',
    search: '搜索中...',
    saving: '保存中...',
    deleting: '删除中...',
    uploading: '上传中...',
    processing: '处理中...'
  },

  // Footer
  footer: {
    about: '关于',
    privacy: '隐私政策',
    terms: '服务条款',
    contact: '联系我们',
    copyright: '版权所有',
    allRightsReserved: '保留所有权利',
    company: 'Dream-DB',
    disclaimer: '所有解梦仅供参考，个人解释很重要。'
  },

  // Meta/SEO
  meta: {
    defaultTitle: '梦境洞察 - AI解梦服务',
    titleTemplate: '%s | 梦境洞察',
    description: '提供基于AI的准确解梦信息，轻松搜索和分享梦境含义。',
    keywords: '解梦, 梦境解释, 梦境洞察, AI解梦, 梦境分析, 梦境含义',
    ogTitle: '梦境洞察 - AI解梦服务',
    ogDescription: '用AI准确解释您梦境传达的信息。'
  },

  // Site
  site: {
    name: '梦境洞察',
    description: 'AI解梦服务'
  },

  // FAQ
  faq: {
    dreamMeaning: {
      question: '什么是解梦？',
      answer: '解梦是解释睡眠中所做梦境含义的过程。梦境洞察利用AI技术提供准确丰富的梦境解释。'
    },
    aiAccuracy: {
      question: 'AI解梦的准确性如何？',
      answer: '我们的AI学习了数万个解梦数据库，准确性很高。但是，考虑个人情况和情绪状态的解释可能更加准确。'
    },
    searchMethod: {
      question: '如何搜索梦境？',
      answer: '在顶部搜索框中输入梦境内容或关键词，就能找到相关的解梦。也可以按类别探索。'
    },
    freeService: {
      question: '所有解梦服务都是免费的吗？',
      answer: '基本的解梦服务是免费提供的。高级服务提供更详细和个性化的解梦。'
    },
    recurringDreams: {
      question: '为什么经常做同样的梦？',
      answer: '重复出现的梦通常包含未解决的问题、强烈的情感或重要的信息。在梦境洞察中找到那个梦的含义吧。'
    }
  }
} as const;