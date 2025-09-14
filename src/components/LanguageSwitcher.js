'use client';

import { useState, useEffect } from 'react';
import { getLanguage, setLanguage } from '@/lib/i18n';

export default function LanguageSwitcher() {
  const [currentLang, setCurrentLang] = useState('en');

  useEffect(() => {
    setCurrentLang(getLanguage());
  }, []);

  const toggleLanguage = () => {
    const newLang = currentLang === 'en' ? 'tr' : 'en';
    setLanguage(newLang);
    setCurrentLang(newLang);
    window.location.reload();
  };

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-4 right-4 bg-black dark:bg-white text-white dark:text-black px-3 py-2 rounded-md text-sm font-medium hover:opacity-80 transition-opacity"
    >
      {currentLang === 'en' ? 'TR' : 'EN'}
    </button>
  );
}
