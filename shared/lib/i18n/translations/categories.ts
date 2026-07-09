/**
 * Categories Translations Module
 * Category pages and category name translations
 */

import type { CategoriesTranslations } from '../types';

export const categoriesTranslations: Record<string, CategoriesTranslations> = {
  ko: {
    // Category pages
    'categories.title': '카테고리 해몽',
    'categories.totalCount': '총 {{count}}개의 해몽',
    'categories.noResults': '해몽이 없습니다',

    // Category names (Korean - using Korean as the base keys)
    category: {
      사람: '사람',
      동물: '동물',
      자연: '자연',
      물건: '물건',
      장소: '장소',
      행동: '행동',
      감정: '감정',
      신체: '신체',
      음식: '음식',
      교통: '교통',
      천재지변: '천재지변',
      초자연: '초자연',
      물: '물',
      불: '불',
      가족: '가족',
      일: '일',
      건강: '건강',
      학교: '학교',
      사랑: '사랑',
      범죄: '범죄',
      여행: '여행',
      옷: '옷',
      날씨: '날씨',
      색깔: '색깔',
      숫자: '숫자',
      스포츠: '스포츠',
      기술: '기술'
    }
  },

  en: {
    // Category pages
    'categories.title': 'Dream Categories',
    'categories.totalCount': '{{count}} dream interpretations',
    'categories.noResults': 'No dream interpretations found',

    // Category names (English translations)
    category: {
      사람: 'People',
      동물: 'Animals',
      자연: 'Nature',
      물건: 'Objects',
      장소: 'Places',
      행동: 'Actions',
      감정: 'Emotions',
      신체: 'Body',
      음식: 'Food',
      교통: 'Transportation',
      천재지변: 'Natural Disasters',
      초자연: 'Supernatural',
      물: 'Water',
      불: 'Fire',
      가족: 'Family',
      일: 'Work',
      건강: 'Health',
      학교: 'School',
      사랑: 'Love',
      범죄: 'Crime',
      여행: 'Travel',
      옷: 'Clothing',
      날씨: 'Weather',
      색깔: 'Colors',
      숫자: 'Numbers',
      스포츠: 'Sports',
      기술: 'Technology'
    }
  },

  es: {
    // Category pages
    'categories.title': 'Categorías de Sueños',
    'categories.totalCount': '{{count}} interpretaciones de sueños',
    'categories.noResults': 'No se encontraron interpretaciones de sueños',

    // Category names (Spanish translations)
    category: {
      사람: 'Personas',
      동물: 'Animales',
      자연: 'Naturaleza',
      물건: 'Objetos',
      장소: 'Lugares',
      행동: 'Acciones',
      감정: 'Emociones',
      신체: 'Cuerpo',
      음식: 'Comida',
      교통: 'Transporte',
      천재지변: 'Desastres naturales',
      초자연: 'Sobrenatural',
      물: 'Agua',
      불: 'Fuego',
      가족: 'Familia',
      일: 'Trabajo',
      건강: 'Salud',
      학교: 'Escuela',
      사랑: 'Amor',
      범죄: 'Crimen',
      여행: 'Viaje',
      옷: 'Ropa',
      날씨: 'Clima',
      색깔: 'Colores',
      숫자: 'Números',
      스포츠: 'Deportes',
      기술: 'Tecnología'
    }
  },

  ja: {
    // Category pages
    'categories.title': '夢のカテゴリー',
    'categories.totalCount': '{{count}}個の夢占い',
    'categories.noResults': '夢占いが見つかりません',

    // Category names (Japanese translations)
    category: {
      사람: '人',
      동물: '動物',
      자연: '自然',
      물건: '物',
      장소: '場所',
      행동: '行動',
      감정: '感情',
      신체: '身体',
      음식: '食べ物',
      교통: '交通',
      천재지변: '天災',
      초자연: '超自然',
      물: '水',
      불: '火',
      가족: '家族',
      일: '仕事',
      건강: '健康',
      학교: '学校',
      사랑: '恋愛',
      범죄: '犯罪',
      여행: '旅行',
      옷: '服',
      날씨: '天気',
      색깔: '色',
      숫자: '数字',
      스포츠: 'スポーツ',
      기술: '技術'
    }
  },

  zh: {
    // Category pages
    'categories.title': '梦境分类',
    'categories.totalCount': '{{count}}个解梦',
    'categories.noResults': '未找到解梦',

    // Category names (Chinese translations)
    category: {
      사람: '人',
      동물: '动物',
      자연: '自然',
      물건: '物品',
      장소: '地方',
      행동: '行为',
      감정: '情感',
      신체: '身体',
      음식: '食物',
      교통: '交通',
      천재지변: '天灾',
      초자연: '超自然',
      물: '水',
      불: '火',
      가족: '家庭',
      일: '工作',
      건강: '健康',
      학교: '学校',
      사랑: '爱情',
      범죄: '犯罪',
      여행: '旅行',
      옷: '衣服',
      날씨: '天气',
      색깔: '颜色',
      숫자: '数字',
      스포츠: '体育',
      기술: '技术'
    }
  },

  ar: {
    // Category pages
    'categories.title': 'فئات الأحلام',
    'categories.totalCount': '{{count}} تفسير للأحلام',
    'categories.noResults': 'لم يتم العثور على تفسيرات للأحلام',

    // Category names (Arabic translations)
    category: {
      사람: 'الناس',
      동물: 'الحيوانات',
      자연: 'الطبيعة',
      물건: 'الأشياء',
      장소: 'الأماكن',
      행동: 'الأفعال',
      감정: 'المشاعر',
      신체: 'الجسم',
      음식: 'الطعام',
      교통: 'المواصلات',
      천재지변: 'الكوارث الطبيعية',
      초자연: 'خارق للطبيعة',
      물: 'ماء',
      불: 'نار',
      가족: 'عائلة',
      일: 'عمل',
      건강: 'صحة',
      학교: 'مدرسة',
      사랑: 'حب',
      범죄: 'جريمة',
      여행: 'سفر',
      옷: 'ملابس',
      날씨: 'طقس',
      색깔: 'ألوان',
      숫자: 'أرقام',
      스포츠: 'رياضة',
      기술: 'تكنولوجيا'
    }
  },

  fr: {
    // Category pages
    'categories.title': 'Catégories de rêves',
    'categories.totalCount': '{{count}} interprétations de rêves',
    'categories.noResults': 'Aucune interprétation de rêve trouvée',

    // Category names (French translations)
    category: {
      사람: 'Personnes',
      동물: 'Animaux',
      자연: 'Nature',
      물건: 'Objets',
      장소: 'Lieux',
      행동: 'Actions',
      감정: 'Émotions',
      신체: 'Corps',
      음식: 'Nourriture',
      교통: 'Transport',
      천재지변: 'Catastrophes naturelles',
      초자연: 'Surnaturel',
      물: 'Eau',
      불: 'Feu',
      가족: 'Famille',
      일: 'Travail',
      건강: 'Santé',
      학교: 'École',
      사랑: 'Amour',
      범죄: 'Crime',
      여행: 'Voyage',
      옷: 'Vêtements',
      날씨: 'Météo',
      색깔: 'Couleurs',
      숫자: 'Nombres',
      스포츠: 'Sports',
      기술: 'Technologie'
    }
  },

  hi: {
    // Category pages
    'categories.title': 'सपनों की श्रेणियाँ',
    'categories.totalCount': '{{count}} सपने की व्याख्याएँ',
    'categories.noResults': 'कोई सपने की व्याख्या नहीं मिली',

    // Category names (Hindi translations)
    category: {
      사람: 'लोग',
      동물: 'जानवर',
      자연: 'प्रकृति',
      물건: 'वस्तुएं',
      장소: 'स्थान',
      행동: 'क्रियाएं',
      감정: 'भावनाएं',
      신체: 'शरीर',
      음식: 'भोजन',
      교통: 'परिवहन',
      천재지변: 'प्राकृतिक आपदाएं',
      초자연: 'अलौकिक',
      물: 'पानी',
      불: 'आग',
      가족: 'परिवार',
      일: 'काम',
      건강: 'स्वास्थ्य',
      학교: 'स्कूल',
      사랑: 'प्यार',
      범죄: 'अपराध',
      여행: 'यात्रा',
      옷: 'कपड़े',
      날씨: 'मौसम',
      색깔: 'रंग',
      숫자: 'संख्याएं',
      스포츠: 'खेल',
      기술: 'प्रौद्योगिकी'
    }
  },

  id: {
    // Category pages
    'categories.title': 'Kategori Mimpi',
    'categories.totalCount': '{{count}} interpretasi mimpi',
    'categories.noResults': 'Tidak ada interpretasi mimpi ditemukan',

    // Category names (Indonesian translations)
    category: {
      사람: 'Orang',
      동물: 'Hewan',
      자연: 'Alam',
      물건: 'Benda',
      장소: 'Tempat',
      행동: 'Tindakan',
      감정: 'Emosi',
      신체: 'Tubuh',
      음식: 'Makanan',
      교통: 'Transportasi',
      천재지변: 'Bencana Alam',
      초자연: 'Supranatural',
      물: 'Air',
      불: 'Api',
      가족: 'Keluarga',
      일: 'Pekerjaan',
      건강: 'Kesehatan',
      학교: 'Sekolah',
      사랑: 'Cinta',
      범죄: 'Kejahatan',
      여행: 'Perjalanan',
      옷: 'Pakaian',
      날씨: 'Cuaca',
      색깔: 'Warna',
      숫자: 'Angka',
      스포츠: 'Olahraga',
      기술: 'Teknologi'
    }
  },

  ru: {
    // Category pages
    'categories.title': 'Категории снов',
    'categories.totalCount': '{{count}} толкований снов',
    'categories.noResults': 'Толкования снов не найдены',

    // Category names (Russian translations)
    category: {
      사람: 'Люди',
      동물: 'Животные',
      자연: 'Природа',
      물건: 'Предметы',
      장소: 'Места',
      행동: 'Действия',
      감정: 'Эмоции',
      신체: 'Тело',
      음식: 'Еда',
      교통: 'Транспорт',
      천재지변: 'Стихийные бедствия',
      초자연: 'Сверхъестественное',
      물: 'Вода',
      불: 'Огонь',
      가족: 'Семья',
      일: 'Работа',
      건강: 'Здоровье',
      학교: 'Школа',
      사랑: 'Любовь',
      범죄: 'Преступление',
      여행: 'Путешествие',
      옷: 'Одежда',
      날씨: 'Погода',
      색깔: 'Цвета',
      숫자: 'Числа',
      스포츠: 'Спорт',
      기술: 'Технологии'
    }
  }
};