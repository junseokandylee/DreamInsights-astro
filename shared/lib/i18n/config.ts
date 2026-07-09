/**
 * Internationalization (i18n) Configuration
 * T-028: 다국어 지원 시스템 및 데이터베이스 스키마 구현
 */

export const DEFAULT_LOCALE = 'ko' as const;

export const LOCALES = [
  'ko', // Korean (default)
  'en', // English
  'ja', // Japanese  
  'zh', // Chinese
  'hi', // Hindi
  'es', // Spanish
  'fr', // French
  'ar', // Arabic
  'ru', // Russian
  'id'  // Indonesian
] as const;

export type Locale = typeof LOCALES[number];

export const LOCALE_INFO: Record<Locale, {
  name: string;
  nativeName: string;
  direction: 'ltr' | 'rtl';
  flag: string;
}> = {
  ko: {
    name: 'Korean',
    nativeName: '한국어',
    direction: 'ltr',
    flag: '🇰🇷'
  },
  en: {
    name: 'English',
    nativeName: 'English',
    direction: 'ltr',
    flag: '🇺🇸'
  },
  ja: {
    name: 'Japanese',
    nativeName: '日本語',
    direction: 'ltr',
    flag: '🇯🇵'
  },
  zh: {
    name: 'Chinese',
    nativeName: '中文',
    direction: 'ltr',
    flag: '🇨🇳'
  },
  hi: {
    name: 'Hindi',
    nativeName: 'हिन्दी',
    direction: 'ltr',
    flag: '🇮🇳'
  },
  es: {
    name: 'Spanish',
    nativeName: 'Español',
    direction: 'ltr',
    flag: '🇪🇸'
  },
  fr: {
    name: 'French',
    nativeName: 'Français',
    direction: 'ltr',
    flag: '🇫🇷'
  },
  ar: {
    name: 'Arabic',
    nativeName: 'العربية',
    direction: 'rtl',
    flag: '🇸🇦'
  },
  ru: {
    name: 'Russian',
    nativeName: 'Русский',
    direction: 'ltr',
    flag: '🇷🇺'
  },
  id: {
    name: 'Indonesian',
    nativeName: 'Bahasa Indonesia',
    direction: 'ltr',
    flag: '🇮🇩'
  }
};

/**
 * URL path patterns for locale detection
 */
export const LOCALE_PATHS = {
  ko: '', // Default locale has no prefix
  en: '/en',
  ja: '/ja',
  zh: '/zh',
  hi: '/hi',
  es: '/es',
  fr: '/fr',
  ar: '/ar',
  ru: '/ru',
  id: '/id'
} as const;

/**
 * SEO configuration per locale
 */
export const SEO_CONFIG: Record<Locale, {
  siteName: string;
  siteDescription: string;
  twitterHandle: string;
}> = {
  ko: {
    siteName: '드림디비',
    siteDescription: 'AI 기반 꿈 해몽 서비스로 당신의 꿈이 전하는 메시지를 정확하게 해석해드립니다.',
    twitterHandle: '@dreaminsight_kr'
  },
  en: {
    siteName: 'Dream-DB',
    siteDescription: 'AI-powered dream interpretation service that accurately interprets the messages your dreams convey.',
    twitterHandle: '@dreaminsight_en'
  },
  ja: {
    siteName: 'ドリームインサイト',
    siteDescription: 'AI搭載の夢解釈サービスで、あなたの夢が伝えるメッセージを正確に解釈します。',
    twitterHandle: '@dreaminsight_jp'
  },
  zh: {
    siteName: '梦境洞察',
    siteDescription: '基于AI的梦境解释服务，准确解释您的梦境传达的信息。',
    twitterHandle: '@dreaminsight_zh'
  },
  hi: {
    siteName: 'ड्रीम इनसाइट्स',
    siteDescription: 'AI-आधारित सपने की व्याख्या सेवा जो आपके सपनों के संदेश को सटीक रूप से समझाती है।',
    twitterHandle: '@dreaminsight_hi'
  },
  es: {
    siteName: 'Dream Insights',
    siteDescription: 'Servicio de interpretación de sueños impulsado por IA que interpreta con precisión los mensajes que transmiten tus sueños.',
    twitterHandle: '@dreaminsight_es'
  },
  fr: {
    siteName: 'Dream Insights',
    siteDescription: 'Service d\'interprétation des rêves alimenté par l\'IA qui interprète avec précision les messages que transmettent vos rêves.',
    twitterHandle: '@dreaminsight_fr'
  },
  ar: {
    siteName: 'رؤى الأحلام',
    siteDescription: 'خدمة تفسير الأحلام المدعومة بالذكاء الاصطناعي والتي تفسر بدقة الرسائل التي تنقلها أحلامك.',
    twitterHandle: '@dreaminsight_ar'
  },
  ru: {
    siteName: 'Dream Insights',
    siteDescription: 'Сервис толкования снов на основе ИИ, который точно интерпретирует сообщения, которые передают ваши сны.',
    twitterHandle: '@dreaminsight_ru'
  },
  id: {
    siteName: 'Dream Insights',
    siteDescription: 'Layanan interpretasi mimpi bertenaga AI yang secara akurat menafsirkan pesan yang disampaikan mimpi Anda.',
    twitterHandle: '@dreaminsight_id'
  }
};

/**
 * Date/time formatting per locale
 */
export const DATE_FORMATS: Record<Locale, {
  short: string;
  long: string;
  time: string;
}> = {
  ko: {
    short: 'yyyy.MM.dd',
    long: 'yyyy년 MM월 dd일',
    time: 'HH:mm'
  },
  en: {
    short: 'MM/dd/yyyy',
    long: 'MMMM dd, yyyy',
    time: 'h:mm a'
  },
  ja: {
    short: 'yyyy/MM/dd',
    long: 'yyyy年MM月dd日',
    time: 'HH:mm'
  },
  zh: {
    short: 'yyyy-MM-dd',
    long: 'yyyy年MM月dd日',
    time: 'HH:mm'
  },
  hi: {
    short: 'dd/MM/yyyy',
    long: 'dd MMMM, yyyy',
    time: 'HH:mm'
  },
  es: {
    short: 'dd/MM/yyyy',
    long: 'dd \'de\' MMMM \'de\' yyyy',
    time: 'HH:mm'
  },
  fr: {
    short: 'dd/MM/yyyy',
    long: 'dd MMMM yyyy',
    time: 'HH:mm'
  },
  ar: {
    short: 'dd/MM/yyyy',
    long: 'dd MMMM yyyy',
    time: 'HH:mm'
  },
  ru: {
    short: 'dd.MM.yyyy',
    long: 'dd MMMM yyyy \'г.\'',
    time: 'HH:mm'
  },
  id: {
    short: 'dd/MM/yyyy',
    long: 'dd MMMM yyyy',
    time: 'HH:mm'
  }
};

/**
 * Number formatting per locale
 */
export const NUMBER_FORMATS: Record<Locale, {
  locale: string;
  currency: string;
}> = {
  ko: {
    locale: 'ko-KR',
    currency: 'KRW'
  },
  en: {
    locale: 'en-US',
    currency: 'USD'
  },
  ja: {
    locale: 'ja-JP',
    currency: 'JPY'
  },
  zh: {
    locale: 'zh-CN',
    currency: 'CNY'
  },
  hi: {
    locale: 'hi-IN',
    currency: 'INR'
  },
  es: {
    locale: 'es-ES',
    currency: 'EUR'
  },
  fr: {
    locale: 'fr-FR',
    currency: 'EUR'
  },
  ar: {
    locale: 'ar-SA',
    currency: 'SAR'
  },
  ru: {
    locale: 'ru-RU',
    currency: 'RUB'
  },
  id: {
    locale: 'id-ID',
    currency: 'IDR'
  }
};

/**
 * Utility functions
 */

export function isValidLocale(locale: string): locale is Locale {
  return LOCALES.includes(locale as Locale);
}

export function getDefaultLocale(): Locale {
  return DEFAULT_LOCALE;
}

export function getLocaleFromPath(pathname: string): Locale {
  const segments = pathname.split('/');
  const potentialLocale = segments[1];
  
  if (isValidLocale(potentialLocale)) {
    return potentialLocale;
  }
  
  return DEFAULT_LOCALE;
}

export function getPathWithoutLocale(pathname: string): string {
  const locale = getLocaleFromPath(pathname);
  
  if (locale === DEFAULT_LOCALE) {
    return pathname;
  }
  
  return pathname.replace(`/${locale}`, '') || '/';
}

export function getLocalizedPath(pathname: string, locale: Locale): string {
  const pathWithoutLocale = getPathWithoutLocale(pathname);
  
  if (locale === DEFAULT_LOCALE) {
    return pathWithoutLocale;
  }
  
  return `/${locale}${pathWithoutLocale}`;
}

export function getAlternateLinks(pathname: string): Array<{ href: string; hrefLang: Locale }> {
  return LOCALES.map(locale => ({
    href: getLocalizedPath(pathname, locale),
    hrefLang: locale
  }));
}

// Main i18n configuration object for backward compatibility
export const i18n = {
  defaultLocale: DEFAULT_LOCALE,
  locales: LOCALES,
  localeInfo: LOCALE_INFO,
  seoConfig: SEO_CONFIG,
  dateFormats: DATE_FORMATS,
  numberFormats: NUMBER_FORMATS,
  // Utility functions
  isValidLocale,
  getDefaultLocale,
  getLocaleFromPath,
  getPathWithoutLocale,
  getLocalizedPath,
  getAlternateLinks
} as const;