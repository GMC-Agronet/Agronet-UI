import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  // Default to English, or use localStorage if set
  const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('language') || 'en';
    }
    return 'en';
  });
  const [strings, setStrings] = useState({});

  useEffect(() => {
    async function loadStrings() {
      const lang = language || 'en';
      const mod = await import(`../locales/${lang}.json`);
      setStrings(mod.default || {});
    }
    loadStrings();
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', language);
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, strings }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
