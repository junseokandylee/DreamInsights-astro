/**
 * UI Translations Module
 * Loading states, error messages, interactive elements
 */

import type { UiTranslations } from '../types';

export const uiTranslations: Record<string, UiTranslations> = {
  ko: {
    // Loading and states
    loading: '로딩 중...',
    loadingDreams: '해몽을 불러오는 중...',
    error: '오류가 발생했습니다',
    dreamNotFound: '해몽을 찾을 수 없습니다',

    // Interactive elements
    retry: '다시 시도',
    cancel: '취소',
    confirm: '확인',
    close: '닫기',
    open: '열기',

    // Messages
    success: '성공',
    warning: '경고',
    info: '정보'
  },

  en: {
    // Loading and states
    loading: 'Loading...',
    loadingDreams: 'Loading dreams...',
    error: 'An error occurred',
    dreamNotFound: 'Dream interpretation not found',

    // Interactive elements
    retry: 'Retry',
    cancel: 'Cancel',
    confirm: 'Confirm',
    close: 'Close',
    open: 'Open',

    // Messages
    success: 'Success',
    warning: 'Warning',
    info: 'Information'
  },

  es: {
    // Loading and states
    loading: 'Cargando...',
    loadingDreams: 'Cargando sueños...',
    error: 'Ocurrió un error',
    dreamNotFound: 'Interpretación del sueño no encontrada',

    // Interactive elements
    retry: 'Reintentar',
    cancel: 'Cancelar',
    confirm: 'Confirmar',
    close: 'Cerrar',
    open: 'Abrir',

    // Messages
    success: 'Éxito',
    warning: 'Advertencia',
    info: 'Información'
  },

  ja: {
    // Loading and states
    loading: '読み込み中...',
    loadingDreams: '夢を読み込み中...',
    error: 'エラーが発生しました',
    dreamNotFound: '夢占いが見つかりません',

    // Interactive elements
    retry: '再試行',
    cancel: 'キャンセル',
    confirm: '確認',
    close: '閉じる',
    open: '開く',

    // Messages
    success: '成功',
    warning: '警告',
    info: '情報'
  },

  zh: {
    // Loading and states
    loading: '正在加载...',
    loadingDreams: '正在加载梦境...',
    error: '发生错误',
    dreamNotFound: '未找到解梦',

    // Interactive elements
    retry: '重试',
    cancel: '取消',
    confirm: '确认',
    close: '关闭',
    open: '打开',

    // Messages
    success: '成功',
    warning: '警告',
    info: '信息'
  },

  ar: {
    // Loading and states
    loading: 'جارٍ التحميل...',
    loadingDreams: 'جارٍ تحميل الأحلام...',
    error: 'حدث خطأ',
    dreamNotFound: 'لم يتم العثور على تفسير الحلم',

    // Interactive elements
    retry: 'إعادة المحاولة',
    cancel: 'إلغاء',
    confirm: 'تأكيد',
    close: 'إغلاق',
    open: 'فتح',

    // Messages
    success: 'نجح',
    warning: 'تحذير',
    info: 'معلومات'
  },

  fr: {
    // Loading and states
    loading: 'Chargement...',
    loadingDreams: 'Chargement des rêves...',
    error: 'Une erreur s\'est produite',
    dreamNotFound: 'Interprétation du rêve introuvable',

    // Interactive elements
    retry: 'Réessayer',
    cancel: 'Annuler',
    confirm: 'Confirmer',
    close: 'Fermer',
    open: 'Ouvrir',

    // Messages
    success: 'Succès',
    warning: 'Avertissement',
    info: 'Information'
  },

  hi: {
    // Loading and states
    loading: 'लोड हो रहा है...',
    loadingDreams: 'सपने लोड हो रहे हैं...',
    error: 'एक त्रुटि हुई',
    dreamNotFound: 'सपने की व्याख्या नहीं मिली',

    // Interactive elements
    retry: 'पुनः प्रयास करें',
    cancel: 'रद्द करें',
    confirm: 'पुष्टि करें',
    close: 'बंद करें',
    open: 'खोलें',

    // Messages
    success: 'सफलता',
    warning: 'चेतावनी',
    info: 'जानकारी'
  },

  id: {
    // Loading and states
    loading: 'Memuat...',
    loadingDreams: 'Memuat mimpi...',
    error: 'Terjadi kesalahan',
    dreamNotFound: 'Interpretasi mimpi tidak ditemukan',

    // Interactive elements
    retry: 'Coba Lagi',
    cancel: 'Batal',
    confirm: 'Konfirmasi',
    close: 'Tutup',
    open: 'Buka',

    // Messages
    success: 'Berhasil',
    warning: 'Peringatan',
    info: 'Informasi'
  },

  ru: {
    // Loading and states
    loading: 'Загрузка...',
    loadingDreams: 'Загрузка снов...',
    error: 'Произошла ошибка',
    dreamNotFound: 'Толкование сна не найдено',

    // Interactive elements
    retry: 'Повторить',
    cancel: 'Отмена',
    confirm: 'Подтвердить',
    close: 'Закрыть',
    open: 'Открыть',

    // Messages
    success: 'Успешно',
    warning: 'Предупреждение',
    info: 'Информация'
  }
};