/**
 * Astro-specific i18n wrapper
 * Imports translation modules directly from DreamInsights shared code.
 */
import type { Locale } from '../../shared/lib/i18n/config';

// Import translation data directly (pure data files)
import { ko } from '../../shared/lib/i18n/translations/ko';
import { en } from '../../shared/lib/i18n/translations/en';
import { ja } from '../../shared/lib/i18n/translations/ja';
import { zh } from '../../shared/lib/i18n/translations/zh';
import { hi } from '../../shared/lib/i18n/translations/hi';
import { es } from '../../shared/lib/i18n/translations/es';
import { fr } from '../../shared/lib/i18n/translations/fr';
import { ar } from '../../shared/lib/i18n/translations/ar';
import { ru } from '../../shared/lib/i18n/translations/ru';
import { id } from '../../shared/lib/i18n/translations/id';

const translations: Record<string, Record<string, any>> = {
  ko: ko as any,
  en: en as any,
  ja: ja as any,
  zh: zh as any,
  hi: hi as any,
  es: es as any,
  fr: fr as any,
  ar: ar as any,
  ru: ru as any,
  id: id as any,
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

/**
 * Get a nested translation value using dot notation (e.g., 'nav.home')
 */
function getNestedValue(obj: any, key: string): string {
  const parts = key.split('.');
  let current = obj;
  for (const part of parts) {
    if (current === null || current === undefined || typeof current !== 'object') return '';
    current = current[part];
  }
  return typeof current === 'string' ? current : '';
}

export function t(locale: Locale, key: string): string {
  const localeData = translations[locale] || translations['ko'];
  // Try dot-notation nested lookup first
  const nested = getNestedValue(localeData, key);
  if (nested) return nested;
  // Then try flat lookup
  if ((localeData as any)[key]) return (localeData as any)[key];
  // Fallback to ko locale
  if (locale !== 'ko') {
    const koNested = getNestedValue(translations['ko'], key);
    if (koNested) return koNested;
    if ((translations['ko'] as any)[key]) return (translations['ko'] as any)[key];
  }
  // Then fallback translations
  return fallbackTranslations[key] || key;
}

export function createTranslator(locale: Locale) {
  return (key: string) => t(locale, key);
}
