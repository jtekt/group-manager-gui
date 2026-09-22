import { createI18n } from 'vue-i18n'
import en from '@/locales/en.json'
import ja from '@/locales/ja.json'
import { en as VuetifyEn, ja as VuetifyJa } from 'vuetify/locale'
import runtimeEnv from '@/runtimeEnv'

const savedLocale = localStorage.locale || runtimeEnv.VITE_I18N_LOCALE || 'en'

export const i18n = createI18n({
  legacy: false,
  locale: savedLocale,
  fallbackLocale: runtimeEnv.VITE_I18N_FALLBACK_LOCALE || 'en',
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
