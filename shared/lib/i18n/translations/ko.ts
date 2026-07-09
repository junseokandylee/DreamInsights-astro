/**
 * Korean Translation
 * T-028: 다국어 지원 시스템 및 데이터베이스 스키마 구현
 */

export const ko = {
  // Top-level keys for backwards compatibility
  dreamNotFound: '해몽을 찾을 수 없습니다',
  dreamNotFoundDescription: '요청하신 해몽 정보를 찾을 수 없습니다. 다른 해몽을 검색해보세요.',
  back: '뒤로',
  views: '조회수',

  // Common
  common: {
    loading: '로딩 중...',
    error: '오류가 발생했습니다',
    retry: '다시 시도',
    cancel: '취소',
    save: '저장',
    edit: '수정',
    delete: '삭제',
    search: '검색',
    share: '공유',
    back: '뒤로',
    next: '다음',
    previous: '이전',
    home: '홈',
    about: '소개',
    contact: '연락처',
    privacy: '개인정보처리방침',
    terms: '이용약관'
  },

  // Navigation
  nav: {
    home: '홈',
    search: '해몽 검색',
    categories: '카테고리',
    popular: '인기 해몽',
    dreamSymbols: '꿈 상징 사전',
    recent: '최신 해몽',
    about: '소개',
    language: '언어'
  },

  // Search
  search: {
    placeholder: '꿈 내용을 검색해보세요 (예: 강아지, 비, 바다)',
    button: '검색하기',
    noResults: '검색 결과가 없습니다',
    resultsFound: '개의 검색 결과',
    searchFor: '검색어:',
    trending: '인기 검색어',
    recentSearches: '최근 검색어',
    tryOtherKeywords: '다른 키워드로 검색해보세요.',
    howTo: {
      title: '꿈 해몽 검색하는 방법',
      description: '드림디비에서 효과적으로 꿈 해몽을 검색하고 해석하는 단계별 가이드',
      step1: {
        name: '꿈의 키워드 파악하기',
        text: '꿈에서 가장 인상깊었던 요소나 감정을 떠올려보세요. 예: 물, 동물, 사람, 감정 등'
      },
      step2: {
        name: '검색창에 키워드 입력',
        text: '검색창에 해당 키워드를 입력하세요. 여러 키워드를 함께 검색할 수도 있습니다.'
      },
      step3: {
        name: '검색 결과 확인',
        text: '관련된 해몽 결과들을 확인하고, 가장 적합한 해석을 선택하세요.'
      },
      step4: {
        name: '카테고리 탐색',
        text: '원하는 결과를 찾지 못했다면 관련 카테고리를 탐색해보세요.'
      },
      step5: {
        name: '해석 적용',
        text: '해몽 결과를 개인의 상황과 연결하여 의미를 해석해보세요.'
      }
    }
  },

  // Dream
  dream: {
    title: '해몽',
    interpretation: '해몽 풀이',
    meaning: '꿈의 의미',
    category: '카테고리',
    views: '조회',
    shares: '공유',
    published: '게시일',
    updated: '수정일',
    keywords: '키워드',
    related: '관련 해몽',
    share: {
      title: '이 해몽 공유하기',
      facebook: '페이스북 공유',
      twitter: '트위터 공유',
      kakao: '카카오톡 공유',
      link: '링크 복사',
      copySuccess: '링크가 복사되었습니다'
    }
  },

  // Categories
  categories: {
    title: '카테고리별 해몽',
    description: '관련 꿈 해몽을 확인하세요.',
    totalCount: '총 {{count}}개의 해몽',
    noResults: '해당 카테고리의 해몽을 찾을 수 없습니다.',
    all: '전체',
    animals: '동물',
    nature: '자연',
    people: '사람',
    objects: '사물',
    emotions: '감정',
    actions: '행동',
    places: '장소',
    colors: '색깔',
    numbers: '숫자',
    supernatural: '초자연적'
  },

  // Homepage
  home: {
    title: '드림디비',
    subtitle: '어젯밤 꿈의 의미가 궁금하신가요?',
    description: 'AI가 분석한 정확한 해몽을 바로 확인해보세요',
    featured: '인기 해몽',
    categories: '카테고리별 해몽',
    about: {
      title: '꿈 해몽의 의미와 중요성',
      content: '꿈은 우리의 무의식이 전하는 메시지입니다. 드림디비는 AI 기술을 활용하여 더욱 정확하고 다양한 해몽 정보를 제공합니다.',
      features: {
        title: '드림디비만의 특별함',
        ai: 'AI 기반 정확한 해몽 분석',
        database: '수만 개의 해몽 데이터베이스',
        categories: '카테고리별 체계적인 분류',
        sharing: '손쉬운 공유 기능',
        mobile: '모바일 최적화된 빠른 검색'
      }
    }
  },

  // SEO & Meta
  seo: {
    defaultTitle: '드림디비 - AI 기반 꿈 해몽 서비스',
    defaultDescription: 'AI 기반 정확한 해몽 정보를 제공하고, 꿈의 의미를 쉽게 검색하고 공유할 수 있는 서비스입니다.',
    notFound: {
      title: '페이지를 찾을 수 없습니다',
      description: '요청하신 페이지를 찾을 수 없습니다.'
    }
  },

  // Error messages
  errors: {
    general: '오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
    network: '네트워크 연결을 확인해주세요.',
    notFound: '요청하신 내용을 찾을 수 없습니다.',
    searchFailed: '검색에 실패했습니다.',
    shareFailed: '공유에 실패했습니다.'
  },

  // Time/Date
  time: {
    ago: '전',
    minute: '분',
    hour: '시간',
    day: '일',
    month: '개월',
    year: '년',
    today: '오늘',
    yesterday: '어제',
    thisWeek: '이번 주',
    thisMonth: '이번 달'
  },

  // Ads
  ads: {
    label: '광고'
  },

  // Admin Dashboard
  admin: {
    title: '관리자 대시보드',
    analytics: '분석',
    dreams: '해몽 관리',
    categories: '카테고리 관리',
    users: '사용자 관리',
    settings: '설정',
    overview: '개요',
    totalDreams: '전체 해몽 수',
    totalViews: '전체 조회 수',
    totalShares: '전체 공유 수',
    popularDreams: '인기 해몽',
    recentActivity: '최근 활동',
    aiQuality: 'AI 품질 모니터링',
    performance: '성능 지표'
  },

  // Forms
  forms: {
    required: '필수 항목입니다',
    invalid: '올바르지 않은 형식입니다',
    tooShort: '너무 짧습니다',
    tooLong: '너무 깁니다',
    submit: '제출',
    reset: '초기화',
    clear: '지우기',
    apply: '적용',
    filter: '필터',
    sort: '정렬',
    ascending: '오름차순',
    descending: '내림차순',
    selectAll: '전체 선택',
    deselectAll: '선택 해제',
    confirm: '확인',
    close: '닫기'
  },

  // Pagination
  pagination: {
    previous: '이전',
    next: '다음',
    first: '처음',
    last: '마지막',
    page: '페이지',
    of: '/',
    showing: '표시 중',
    to: '~',
    entries: '항목',
    noData: '데이터가 없습니다'
  },

  // Notifications
  notifications: {
    success: '성공했습니다',
    error: '오류가 발생했습니다',
    warning: '주의하세요',
    info: '알림',
    saved: '저장되었습니다',
    deleted: '삭제되었습니다',
    updated: '업데이트되었습니다',
    loading: '처리 중...',
    copied: '복사되었습니다',
    linkCopied: '링크가 복사되었습니다'
  },

  // Filters & Sorting
  filters: {
    all: '전체',
    filterBy: '필터링',
    sortBy: '정렬',
    newest: '최신순',
    oldest: '오래된순',
    popular: '인기순',
    alphabetical: '가나다순',
    mostViewed: '조회수순',
    mostShared: '공유순',
    featured: '추천',
    category: '카테고리',
    date: '날짜',
    clear: '필터 지우기',
    apply: '필터 적용'
  },

  // Modal Dialogs
  modal: {
    close: '닫기',
    confirm: '확인',
    cancel: '취소',
    delete: {
      title: '삭제 확인',
      message: '정말로 삭제하시겠습니까?',
      confirm: '삭제',
      cancel: '취소'
    },
    share: {
      title: '공유하기',
      copyLink: '링크 복사',
      facebook: '페이스북',
      twitter: '트위터',
      kakao: '카카오톡',
      email: '이메일'
    }
  },

  // Breadcrumbs
  breadcrumb: {
    home: '홈',
    search: '검색',
    category: '카테고리',
    dream: '해몽'
  },

  // Loading States
  loading: {
    dreams: '해몽을 불러오는 중...',
    categories: '카테고리를 불러오는 중...',
    search: '검색 중...',
    saving: '저장 중...',
    deleting: '삭제 중...',
    uploading: '업로드 중...',
    processing: '처리 중...'
  },

  // Footer
  footer: {
    about: '소개',
    privacy: '개인정보처리방침',
    terms: '이용약관',
    contact: '문의하기',
    copyright: '저작권',
    allRightsReserved: '모든 권리 보유',
    company: '드림디비',
    disclaimer: '모든 해몽은 참고용이며 개인의 해석이 중요합니다.'
  },

  // Meta/SEO
  meta: {
    defaultTitle: '드림디비 - AI 기반 꿈 해몽 서비스',
    titleTemplate: '%s | 드림디비',
    description: 'AI 기반 정확한 해몽 정보를 제공하고, 꿈의 의미를 쉽게 검색하고 공유할 수 있는 서비스입니다.',
    keywords: '꿈해몽, 꿈풀이, 드림디비, AI 해몽, 꿈 해석, 꿈 의미',
    ogTitle: '드림디비 - AI 기반 꿈 해몽 서비스',
    ogDescription: '당신의 꿈이 전하는 메시지를 AI로 해석해드립니다.'
  },

  // Site
  site: {
    name: '드림디비',
    description: 'AI 기반 꿈 해몽 서비스'
  },

  // Settings Page
  settings: {
    title: '설정',
    loginRequired: '로그인이 필요합니다',
    account: '계정',
    profile: '프로필 수정',
    profileDesc: '이름, 이메일 등 프로필 정보를 수정합니다.',
    password: '비밀번호 변경',
    passwordDesc: '계정 비밀번호를 변경합니다.',
    preferences: '환경 설정',
    language: '언어',
    languageDesc: '표시 언어를 변경합니다.',
    theme: '테마',
    themeDesc: '라이트/다크 모드를 변경합니다.',
    notifications: '알림',
    emailNotif: '이메일 알림',
    emailNotifDesc: '중요한 알림을 이메일로 받습니다.',
    pushNotif: '푸시 알림',
    pushNotifDesc: '브라우저 푸시 알림을 받습니다.',
    privacy: '개인정보 및 보안',
    privacyPolicy: '개인정보처리방침',
    privacyPolicyDesc: '개인정보 처리에 관한 정책을 확인합니다.',
    deleteAccount: '계정 삭제',
    deleteAccountDesc: '계정을 영구적으로 삭제합니다.'
  },

  // Contact Page
  contact: {
    title: '문의하기',
    description: '궁금한 점이나 제안사항이 있으시면 아래 양식을 통해 문의해 주세요.',
    info: '연락처 정보',
    name: '이름',
    namePlaceholder: '홍길동',
    email: '이메일',
    subject: '제목',
    subjectPlaceholder: '문의 제목을 입력하세요',
    message: '내용',
    messagePlaceholder: '문의 내용을 자세히 작성해 주세요',
    send: '보내기',
    sending: '전송 중...',
    successTitle: '메시지가 전송되었습니다',
    successMessage: '빠른 시일 내에 답변 드리겠습니다.',
    sendAnother: '다른 문의하기'
  },

  // FAQ
  faq: {
    dreamMeaning: {
      question: '꿈 해몽이란 무엇인가요?',
      answer: '꿈 해몽은 잠을 자는 동안 꾸는 꿈의 의미를 해석하는 것입니다. 드림디비는 AI 기술을 활용하여 정확하고 풍부한 꿈 해석을 제공합니다.'
    },
    aiAccuracy: {
      question: 'AI 꿈 해몽의 정확성은 어느 정도인가요?',
      answer: '저희 AI는 수만 건의 꿈 해몽 데이터베이스를 학습하여 높은 정확성을 자랑합니다. 다만 개인의 상황과 감정 상태를 고려한 해석이 더욱 정확할 수 있습니다.'
    },
    searchMethod: {
      question: '꿈을 검색하는 방법은 무엇인가요?',
      answer: '상단의 검색창에 꿈의 내용이나 키워드를 입력하시면 관련된 해몽을 찾을 수 있습니다. 카테고리별로도 탐색 가능합니다.'
    },
    freeService: {
      question: '모든 해몽 서비스가 무료인가요?',
      answer: '기본적인 꿈 해몽 서비스는 무료로 제공됩니다. 프리미엄 서비스에서는 더욱 상세하고 개인화된 해몽을 제공합니다.'
    },
    recurringDreams: {
      question: '같은 꿈을 자주 꾸는 이유가 있나요?',
      answer: '반복되는 꿈은 보통 해결되지 않은 문제나 강한 감정, 또는 중요한 메시지를 담고 있을 수 있습니다. 드림디비에서 해당 꿈의 의미를 찾아보세요.'
    }
  },

} as const;