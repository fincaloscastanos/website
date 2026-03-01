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
    title: {
      de: "Unterkunft buchen",
      en: "Book your stay",
      es: "Reservar alojamiento",
    },
    subtitle: {
      de: "Direkt buchen – einfach und unkompliziert",
      en: "Book directly – simple and straightforward",
      es: "Reserven directo – fácil y sin líos",
    },
  },

  booking: {
    placeholder: {
      de: "Das Buchungssystem wird geladen\u2026",
      en: "The booking system is loading\u2026",
      es: "El sistema de reservas se está cargando\u2026",
    },
  },
};

export type BookingTranslations = FlattenTranslation<typeof translations>;
