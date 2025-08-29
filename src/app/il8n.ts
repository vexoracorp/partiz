import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslations from "@/locales/en.json";
import koTranslations from "@/locales/ko.json";

i18n.use(initReactI18next).init({
  lng: "ko",
  fallbackLng: "en",
  resources: {
    en: { translation: enTranslations },
    ko: { translation: koTranslations },
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
