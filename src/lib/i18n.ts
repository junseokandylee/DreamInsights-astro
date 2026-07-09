/**
 * Astro-specific i18n wrapper
 * Imports translation modules directly from DreamInsights shared code.
 * Only uses imports that don't chain through @/ aliases.
 */
import type { Locale } from '../../shared/lib/i18n/config';

// Import translation data directly (these are pure data files without @/ imports)
import { ko } from '../../shared/lib/i18n/translations/ko';
import { en } from '../../shared/lib/i18n/translations/en';

const translations: Record<string, Record<string, string>> = {
  ko: ko as any,
  en: en as any,
  ja: {}, // TODO: import other locales
  zh: {},
  hi: {},
  es: {},
  fr: {},
  ar: {},
  ru: {},
  id: {},
};

// Fallback key → translation function
const fallbackTranslations: Record<string, string> = {
  'home.title': 'DreamInsights — AI 꿈 해몽',
  'home.subtitle': '당신의 꿈이 의미하는 바를 AI가 분석해 드립니다',
  'home.featured': '인기 해몽',
  'search.trending': '인기 검색어',
  'nav.categories': '카테고리',
  'loading.dreams': '해몽을 불러오는 중...',
  'footer.company': 'DreamInsights',
  'footer.disclaimer': '이 사이트의 내용은 참고용이며, 전문적인 상담을 대체하지 않습니다.',
  'site.name': 'DreamInsights',
  'site.description': 'AI 기반 꿈 해몽 서비스',
  'dreamNotFound': '해당하는 해몽을 찾을 수 없습니다',
};

export function t(locale: Locale, key: string): string {
  const localeData = translations[locale] || translations['ko'];
  return localeData[key] || fallbackTranslations[key] || key;
}

export function createTranslator(locale: Locale) {
  return (key: string) => t(locale, key);
}
