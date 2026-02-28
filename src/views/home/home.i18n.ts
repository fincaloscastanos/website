import type { FlattenTranslation } from "@/lib/i18n";

export const translations = {
  navigationLabel: {
    de: "Home",
    en: "Home",
    es: "Home"
  },
  seo: {
    title: {
      es: "Willkommen | Finca Los Castaños ",
      en: "Willkommen | Finca Los Castaños",
      de: "Willkommen | Finca Los Castaños"
    },
    description: {
      es: "Willkommen auf der Finca Los Castaños: Erleben Sie die Welt des Kaffees und mehr - wir bieten Kaffeetouren, Ferienapartments und mehr",
      en: "Willkommen auf der Finca Los Castaños: Erleben Sie die Welt des Kaffees und mehr - wir bieten Kaffeetouren, Ferienapartments und mehr",
      de: "Willkommen auf der Finca Los Castaños: Erleben Sie die Welt des Kaffees und mehr - wir bieten Kaffeetouren, Ferienapartments und mehr"
    },
  },
};

export type HomeTranslations = FlattenTranslation<typeof translations>;
