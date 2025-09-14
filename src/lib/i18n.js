const translations = {
  en: {
    title: "Tasks App",
    description: "Simple task management app",
    getStarted: "Get started by editing",
    saveChanges: "Save and see your changes instantly",
    deployNow: "Deploy now",
    readDocs: "Read our docs",
    learn: "Learn",
    examples: "Examples",
    goToNextjs: "Go to nextjs.org"
  },
  tr: {
    title: "Görevler Uygulaması", 
    description: "Basit görev yönetimi uygulaması",
    getStarted: "Düzenlemeye başlamak için",
    saveChanges: "Kaydet ve değişiklikleri anında gör",
    deployNow: "Şimdi yayınla",
    readDocs: "Dokümantasyonu oku",
    learn: "Öğren",
    examples: "Örnekler", 
    goToNextjs: "nextjs.org'a git"
  }
};

let currentLang = 'en';

export const setLanguage = (lang) => {
  currentLang = lang;
  if (typeof window !== 'undefined') {
    localStorage.setItem('language', lang);
  }
};

export const getLanguage = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('language') || 'en';
  }
  return currentLang;
};

export const t = (key) => {
  const lang = getLanguage();
  return translations[lang]?.[key] || translations.en[key] || key;
};
