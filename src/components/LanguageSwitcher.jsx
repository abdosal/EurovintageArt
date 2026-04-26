import React from 'react'
import { useTranslation } from 'react-i18next'
import './LanguageSwitcher.css'

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <div className="language-switcher">
      <button
        className={`lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
        onClick={() => handleLanguageChange('en')}
        aria-label="Switch to English"
        title="English"
      >
        EN
      </button>
      <span className="lang-sep">|</span>
      <button
        className={`lang-btn ${i18n.language === 'pt' ? 'active' : ''}`}
        onClick={() => handleLanguageChange('pt')}
        aria-label="Mudar para Português"
        title="Português"
      >
        PT
      </button>
    </div>
  )
}
