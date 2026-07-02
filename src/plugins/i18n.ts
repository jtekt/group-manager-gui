import { createI18n } from 'vue-i18n'
import en from '@/locales/en.json'
import ja from '@/locales/ja.json'
import { en as VuetifyEn, ja as VuetifyJa } from 'vuetify/locale'

const savedLocale = localStorage.locale || import.meta.env.VITE_I18N_LOCALE || 'en'

export const i18n = createI18n({
  legacy: false,
  locale: savedLocale,
  fallbackLocale: import.meta.env.VITE_I18N_FALLBACK_LOCALE || 'en',
  messages: {
    en: {
      ...en,
      $vuetify: VuetifyEn,
    },
    ja: {
      ...ja,
      $vuetify: VuetifyJa,
    },
  },
})
