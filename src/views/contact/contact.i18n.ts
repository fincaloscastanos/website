import type { FlattenTranslation } from "@/lib/i18n";

export const translations = {
  navigationLabel: {
    es: "Contacto",
    en: "Contact",
    de: "Kontakt",
  },
  seo: {
    title: {
      es: "Kontakt | Finca Los Castaños ",
      en: "Kontakt | Finca Los Castaños",
      de: "Kontakt | Finca Los Castaños",
    },
    description: {
      es: "Kontakt beschreibung...",
      en: "Kontakt beschreibung...",
      de: "Kontakt beschreibung...",
    },
  },
};

export type ContactTranslations = FlattenTranslation<typeof translations>;
