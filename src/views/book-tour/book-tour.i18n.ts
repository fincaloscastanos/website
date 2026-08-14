import type { FlattenTranslation } from "@/lib/i18n";
import { siteData } from "@/data/site";

const { coffeeTour } = siteData;

export const translations = {
  navigationLabel: {
    de: "Tour buchen",
    en: "Book tour",
    es: "Reservar tour",
  },
  seo: {
    title: {
      de: "Kaffeetour buchen | Europäischer Kaffee zwischen Vulkanen",
      en: "Book coffee tour | European coffee born among volcanoes",
      es: "Reservar tour de café | Café europeo nacido entre volcanes",
    },
    description: {
      de: "Buchen Sie jetzt Ihre geführte Kaffeetour auf der Finca Los Castaños im Valle de Agaete",
      en: "Book your guided coffee tour at Finca Los Castaños in the Valle de Agaete",
      es: "Reserven su tour guiado de café en la Finca Los Castaños en el Valle de Agaete",
    },
  },

  hero: {
    title: {
      de: "Europäischer Kaffee, geboren zwischen Vulkanen",
      en: "European coffee born among volcanoes",
      es: "Café europeo nacido entre volcanes",
    },
    subtitle: {
      de: "Wählen Sie Ihren Wunschtermin und buchen Sie direkt",
      en: "Choose your preferred date and book directly",
      es: "Elijan su fecha y reserven directo",
    },
  },

  facts: {
    duration: {
      de: `${coffeeTour.durationMinutes} Min.`,
      en: `${coffeeTour.durationMinutes} min`,
      es: `${coffeeTour.durationMinutes} min`,
    },
    tasting: {
      de: "Verkostung inklusive",
      en: "Tasting included",
      es: "Degustación incluida",
    },
    languages: {
      de: "ES · EN · FR · DE",
      en: "ES · EN · FR · DE",
      es: "ES · EN · FR · DE",
    },
  },

  widget: {
    label: {
      de: "Termin wählen & buchen",
      en: "Pick a date & book",
      es: "Elegir fecha y reservar",
    },
    placeholder: {
      de: "Das Buchungssystem wird geladen…",
      en: "The booking system is loading…",
      es: "El sistema de reservas se está cargando…",
    },
    note: {
      de: "Sofortige Bestätigung per E-Mail",
      en: "Instant confirmation by email",
      es: "Confirmación inmediata por correo",
    },
  },

  help: {
    text: {
      de: "Fragen oder Gruppenbuchung?",
      en: "Questions or group booking?",
      es: "¿Dudas o reserva de grupo?",
    },
  },
};

export type BookTourTranslations = FlattenTranslation<typeof translations>;
