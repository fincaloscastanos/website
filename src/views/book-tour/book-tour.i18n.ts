import type { FlattenTranslation } from "@/lib/i18n";

export const translations = {
  navigationLabel: {
    de: "Tour buchen",
    en: "Book tour",
    es: "Reservar tour",
  },
  seo: {
    title: {
      de: "Kaffeetour buchen | Finca Los Castaños",
      en: "Book coffee tour | Finca Los Castaños",
      es: "Reservar tour de café | Finca Los Castaños",
    },
    description: {
      de: "Buchen Sie jetzt Ihre geführte Kaffeetour auf der Finca Los Castaños im Valle de Agaete",
      en: "Book your guided coffee tour at Finca Los Castaños in the Valle de Agaete",
      es: "Reserven su tour guiado de café en la Finca Los Castaños en el Valle de Agaete",
    },
  },

  hero: {
    title: {
      de: "Kaffeetour buchen",
      en: "Book your coffee tour",
      es: "Reservar tour de café",
    },
    subtitle: {
      de: "Wählen Sie Ihren Wunschtermin und buchen Sie direkt",
      en: "Choose your preferred date and book directly",
      es: "Elijan su fecha y reserven directo",
    },
  },

  widget: {
    placeholder: {
      de: "Das Buchungssystem wird geladen\u2026",
      en: "The booking system is loading\u2026",
      es: "El sistema de reservas se está cargando\u2026",
    },
  },

  consent: {
    title: {
      de: "Buchungssystem laden",
      en: "Load booking system",
      es: "Cargar sistema de reservas",
    },
    description: {
      de: "Durch Klicken stimmen Sie der Datenübertragung an Bokun/Viator (bokun.io) zu. Wir speichern diese Einstellung für Ihren Besuch.",
      en: "By clicking you agree to the data transfer to Bokun/Viator (bokun.io). We will remember your choice for this visit.",
      es: "Al hacer clic, acepta la transferencia de datos a Bokun/Viator (bokun.io). Guardamos esta preferencia para su visita.",
    },
    button: {
      de: "Buchungssystem laden",
      en: "Load booking system",
      es: "Cargar sistema de reservas",
    },
  },
};

export type BookTourTranslations = FlattenTranslation<typeof translations>;
