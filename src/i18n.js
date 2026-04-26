import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// Imports des traductions
import en from './locales/en/translation.json'
import pt from './locales/pt/translation.json'

const resources = {
  en: { translation: en },
  pt: { translation: pt },
}

i18n
  // Détecteur de langue du navigateur
  .use(LanguageDetector)
  // Passe i18n à react-i18next
  .use(initReactI18next)
  // Initialise i18n
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React gère déjà le XSS
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  })

export default i18n
