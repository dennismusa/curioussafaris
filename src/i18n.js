"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import fr from "./locales/fr.json";
import de from "./locales/de.json";
import es from "./locales/es.json";
import it from "./locales/it.json";
import ar from "./locales/ar.json";

const resources = {
  en: {
    translation: en,
  },

  fr: {
    translation: fr,
  },

  de: {
    translation: de,
  },

  es: {
    translation: es,
  },

  it: {
    translation: it,
  },

  ar: {
    translation: ar,
  },
};

const savedLanguage =
  typeof window !== "undefined"
    ? localStorage.getItem("lang") || "en"
    : "en";

i18n
  .use(initReactI18next)
  .init({
    resources,

    lng: savedLanguage,

    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });

// Change page direction whenever language changes
if (typeof window !== "undefined") {
  const setDirection = (language) => {
    const isArabic = language === "ar";

    document.documentElement.dir = isArabic ? "rtl" : "ltr";
    document.documentElement.lang = language;
  };

  // Set initial direction
  setDirection(i18n.language);

  // Update direction whenever language changes
  i18n.on("languageChanged", setDirection);
}

export default i18n;