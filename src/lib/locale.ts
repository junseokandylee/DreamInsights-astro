/**
 * Astro locale routing helpers
 * Used by [locale] pages to build paths and alternate links
 */
import { DEFAULT_LOCALE, LOCALES, LOCALE_INFO, type Locale } from '../../shared/lib/i18n/config';

const BASE_URL = 'https://dream-db.net';

/**
 * Build a localized path. Default locale (ko) has no prefix.
 * getLPath(locale, '/dream/test') → '/dream/test' for ko, '/en/dream/test' for en
 */
export function getLPath(locale: Locale, path: string): string {
  if (locale === DEFAULT_LOCALE) return path;
  // Ensure path starts with /
  const p = path.startsWith('/') ? path : `/${path}`;
  return `/${locale}${p}`;
}

/**
 * Build hreflang alternate links for a given path
 */
export function getAlternateLinks(path: string): Array<{ href: string; hreflang: string }> {
  return LOCALES.map(locale => ({
    href: `${BASE_URL}${getLPath(locale, path)}`,
    hreflang: locale,
  }));
}

/**
 * Get locale info (direction, etc)
 */
export function getLocaleInfo(locale: Locale) {
  return LOCALE_INFO[locale];
}

/**
 * Get the BCP 47 locale tag for HTML lang attribute
 */
export function getLangTag(locale: Locale): string {
  const map: Record<string, string> = {
    ko: 'ko', en: 'en', ja: 'ja', zh: 'zh-CN',
    hi: 'hi', es: 'es', fr: 'fr', ar: 'ar',
    ru: 'ru', id: 'id',
  };
  return map[locale] || locale;
}

/**
 * Get the OG locale tag (e.g., ko_KR)
 */
export function getOgLocale(locale: Locale): string {
  const map: Record<string, string> = {
    ko: 'ko_KR', en: 'en_US', ja: 'ja_JP', zh: 'zh_CN',
    hi: 'hi_IN', es: 'es_ES', fr: 'fr_FR', ar: 'ar_SA',
    ru: 'ru_RU', id: 'id_ID',
  };
  return map[locale] || locale;
}

/**
 * Validate locale string
 */
export function isValidLocale(locale: string): locale is Locale {
  return (LOCALES as readonly string[]).includes(locale);
}

/**
 * Detect locale from Accept-Language header
 */
export function detectLocale(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return DEFAULT_LOCALE;
  const preferred = acceptLanguage.split(',')[0]?.split(';')[0]?.trim().substring(0, 2);
  if (preferred && isValidLocale(preferred)) return preferred;
  return DEFAULT_LOCALE;
}

export { BASE_URL, DEFAULT_LOCALE, LOCALES };
