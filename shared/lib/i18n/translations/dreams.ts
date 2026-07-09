/**
 * Dreams Translations Module
 * Dream cards, details, interpretations, and SEO analysis
 */

import type { DreamsTranslations } from '../types';

export const dreamsTranslations: Record<string, DreamsTranslations> = {
  ko: {
    // Dream cards
    views: '조회수',
    viewsCount: '조회수 {{count}}',
    moreHashtags: '+{{count}}개',

    // Dream details
    interpretation: '해몽 풀이',
    seoAnalysis: '콘텐츠 SEO 분석',
    wordCount: '단어 수',
    readingTime: '읽기 시간',
    seoScore: 'SEO 점수',
    headingStructure: '제목 구조',
    minutes: '{{count}}분',
    headings: '{{count}}개',

    // Dream status
    dreamNotFound: '해몽을 찾을 수 없습니다',
    loadingDreams: '해몽을 불러오는 중...'
  },

  en: {
    // Dream cards
    views: 'Views',
    viewsCount: '{{count}} views',
    moreHashtags: '+{{count}} more',

    // Dream details
    interpretation: 'Dream Interpretation',
    seoAnalysis: 'Content SEO Analysis',
    wordCount: 'Word Count',
    readingTime: 'Reading Time',
    seoScore: 'SEO Score',
    headingStructure: 'Heading Structure',
    minutes: '{{count}} min',
    headings: '{{count}} headings',

    // Dream status
    dreamNotFound: 'Dream interpretation not found',
    loadingDreams: 'Loading dreams...'
  },

  es: {
    // Dream cards
    views: 'Vistas',
    viewsCount: '{{count}} vistas',
    moreHashtags: '+{{count}} más',

    // Dream details
    interpretation: 'Interpretación del Sueño',
    seoAnalysis: 'Análisis SEO del Contenido',
    wordCount: 'Número de Palabras',
    readingTime: 'Tiempo de Lectura',
    seoScore: 'Puntuación SEO',
    headingStructure: 'Estructura de Encabezados',
    minutes: '{{count}} min',
    headings: '{{count}} encabezados',

    // Dream status
    dreamNotFound: 'Interpretación del sueño no encontrada',
    loadingDreams: 'Cargando sueños...'
  },

  ja: {
    // Dream cards
    views: '閲覧数',
    viewsCount: '閲覧数 {{count}}',
    moreHashtags: '+{{count}}件',

    // Dream details
    interpretation: '夢占いの解釈',
    seoAnalysis: 'コンテンツSEO分析',
    wordCount: '単語数',
    readingTime: '読書時間',
    seoScore: 'SEOスコア',
    headingStructure: '見出し構造',
    minutes: '{{count}}分',
    headings: '{{count}}個',

    // Dream status
    dreamNotFound: '夢占いが見つかりません',
    loadingDreams: '夢を読み込み中...'
  },

  zh: {
    // Dream cards
    views: '浏览次数',
    viewsCount: '浏览次数 {{count}}',
    moreHashtags: '+{{count}}个',

    // Dream details
    interpretation: '梦境解析',
    seoAnalysis: '内容SEO分析',
    wordCount: '字数',
    readingTime: '阅读时间',
    seoScore: 'SEO评分',
    headingStructure: '标题结构',
    minutes: '{{count}}分钟',
    headings: '{{count}}个',

    // Dream status
    dreamNotFound: '未找到解梦',
    loadingDreams: '正在加载梦境...'
  },

  ar: {
    // Dream cards
    views: 'المشاهدات',
    viewsCount: '{{count}} مشاهدة',
    moreHashtags: '+{{count}} المزيد',

    // Dream details
    interpretation: 'تفسير الحلم',
    seoAnalysis: 'تحليل محتوى SEO',
    wordCount: 'عدد الكلمات',
    readingTime: 'وقت القراءة',
    seoScore: 'نقاط SEO',
    headingStructure: 'هيكل العناوين',
    minutes: '{{count}} دقيقة',
    headings: '{{count}} عنوان',

    // Dream status
    dreamNotFound: 'لم يتم العثور على تفسير الحلم',
    loadingDreams: 'جارٍ تحميل الأحلام...'
  },

  fr: {
    // Dream cards
    views: 'Vues',
    viewsCount: '{{count}} vues',
    moreHashtags: '+{{count}} de plus',

    // Dream details
    interpretation: 'Interprétation du rêve',
    seoAnalysis: 'Analyse SEO du contenu',
    wordCount: 'Nombre de mots',
    readingTime: 'Temps de lecture',
    seoScore: 'Score SEO',
    headingStructure: 'Structure des titres',
    minutes: '{{count}} min',
    headings: '{{count}} titres',

    // Dream status
    dreamNotFound: 'Interprétation du rêve introuvable',
    loadingDreams: 'Chargement des rêves...'
  },

  hi: {
    // Dream cards
    views: 'दृश्य',
    viewsCount: '{{count}} दृश्य',
    moreHashtags: '+{{count}} और',

    // Dream details
    interpretation: 'सपने की व्याख्या',
    seoAnalysis: 'सामग्री SEO विश्लेषण',
    wordCount: 'शब्द गणना',
    readingTime: 'पढ़ने का समय',
    seoScore: 'SEO स्कोर',
    headingStructure: 'शीर्षक संरचना',
    minutes: '{{count}} मिनट',
    headings: '{{count}} शीर्षक',

    // Dream status
    dreamNotFound: 'सपने की व्याख्या नहीं मिली',
    loadingDreams: 'सपने लोड हो रहे हैं...'
  },

  id: {
    // Dream cards
    views: 'Tampilan',
    viewsCount: '{{count}} tampilan',
    moreHashtags: '+{{count}} lagi',

    // Dream details
    interpretation: 'Interpretasi Mimpi',
    seoAnalysis: 'Analisis SEO Konten',
    wordCount: 'Jumlah Kata',
    readingTime: 'Waktu Membaca',
    seoScore: 'Skor SEO',
    headingStructure: 'Struktur Judul',
    minutes: '{{count}} menit',
    headings: '{{count}} judul',

    // Dream status
    dreamNotFound: 'Interpretasi mimpi tidak ditemukan',
    loadingDreams: 'Memuat mimpi...'
  },

  ru: {
    // Dream cards
    views: 'Просмотры',
    viewsCount: '{{count}} просмотров',
    moreHashtags: '+{{count}} еще',

    // Dream details
    interpretation: 'Толкование сна',
    seoAnalysis: 'SEO-анализ контента',
    wordCount: 'Количество слов',
    readingTime: 'Время чтения',
    seoScore: 'SEO-рейтинг',
    headingStructure: 'Структура заголовков',
    minutes: '{{count}} мин',
    headings: '{{count}} заголовков',

    // Dream status
    dreamNotFound: 'Толкование сна не найдено',
    loadingDreams: 'Загрузка снов...'
  }
};