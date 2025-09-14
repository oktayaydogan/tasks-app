'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function LanguageSwitcher() {
  const { language, changeLanguage, mounted } = useLanguage();

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'tr' : 'en';
    changeLanguage(newLang);
  };

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-4 right-4 bg-black dark:bg-white text-white dark:text-black px-3 py-2 rounded-md text-sm font-medium hover:opacity-80 transition-opacity z-50"
    >
      {language === 'en' ? 'TR' : 'EN'}
    </button>
  );
}
