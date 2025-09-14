export const translations = {
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

export const t = (key, lang = 'en') => {
  return translations[lang]?.[key] || translations.en[key] || key;
};
