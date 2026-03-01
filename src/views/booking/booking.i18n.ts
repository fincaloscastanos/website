import type { FlattenTranslation } from "@/lib/i18n";

export const translations = {
  navigationLabel: {
    de: "Buchen",
    en: "Book",
    es: "Reservar",
  },
  seo: {
    title: {
      de: "Unterkunft buchen | Finca Los Castaños",
      en: "Book accommodation | Finca Los Castaños",
      es: "Reservar alojamiento | Finca Los Castaños",
    },
    description: {
      de: "Buchen Sie Ihre Unterkunft auf der Finca Los Castaños im Valle de Agaete – direkt und ohne Umwege",
      en: "Book your accommodation at Finca Los Castaños in the Valle de Agaete – directly and hassle-free",
      es: "Reserven su alojamiento en la Finca Los Castaños en el Valle de Agaete – directo y sin complicaciones",
    },
  },

  hero: {
    titleAll: {
      de: "Alle Unterkünfte durchsuchen",
      en: "Browse all properties",
      es: "Buscar todos los alojamientos",
    },
    titleProperty: {
      de: "{name} buchen",
      en: "Book {name}",
      es: "Reservar {name}",
    },
  },

  booking: {
    allProperties: {
      de: "Alle Unterkünfte anzeigen",
      en: "Show all properties",
      es: "Ver todos los alojamientos",
    },
  },
};

export type BookingTranslations = FlattenTranslation<typeof translations>;
