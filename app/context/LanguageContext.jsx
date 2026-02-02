import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en')
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('language')
    if (saved) {
      setLanguage(saved)
    } else {
      const browserLang = navigator.language || ''
      setLanguage(browserLang.startsWith('es') ? 'es' : 'en')
    }
    setIsHydrated(true)
  }, [])

  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem('language', language)
    }
  }, [language, isHydrated])

  function toggleLanguage() {
    setLanguage(prev => (prev === 'en' ? 'es' : 'en'))
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, isHydrated }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
