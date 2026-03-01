import type { FlattenTranslation } from "@/lib/i18n";

export const translations = {
  navigationLabel: {
    de: "Kontakt",
    en: "Contact",
    es: "Contacto",
  },
  seo: {
    title: {
      de: "Kontakt | Finca Los Castaños",
      en: "Contact | Finca Los Castaños",
      es: "Contacto | Finca Los Castaños",
    },
    description: {
      de: "Kontaktieren Sie die Finca Los Castaños im Valle de Agaete, Gran Canaria – Telefon, E-Mail, WhatsApp und Anfahrt",
      en: "Get in touch with Finca Los Castaños in the Valle de Agaete, Gran Canaria – phone, email, WhatsApp and directions",
      es: "Contacte con la Finca Los Castaños en el Valle de Agaete, Gran Canaria – teléfono, correo, WhatsApp y cómo llegar",
    },
  },

  hero: {
    title: {
      de: "Kontakt",
      en: "Contact",
      es: "Contacto",
    },
    subtitle: {
      de: "Wir freuen uns auf Sie!",
      en: "We'd love to hear from you!",
      es: "¡Nos encantará saber de ustedes!",
    },
  },

  info: {
    addressLabel: {
      de: "Adresse",
      en: "Address",
      es: "Dirección",
    },
    emailLabel: {
      de: "E-Mail",
      en: "Email",
      es: "Correo",
    },
    whatsappLabel: {
      de: "WhatsApp",
      en: "WhatsApp",
      es: "WhatsApp",
    },
    toursLabel: {
      de: "Touren",
      en: "Tours",
      es: "Visitas",
    },
    salesLabel: {
      de: "Verkauf",
      en: "Shop",
      es: "Ventas",
    },
    eventsLabel: {
      de: "Events",
      en: "Events",
      es: "Eventos",
    },
  },

  hours: {
    title: {
      de: "Öffnungszeiten",
      en: "Opening hours",
      es: "Horario",
    },
    weekdays: {
      de: "Montag bis Freitag: {start} – {end} Uhr",
      en: "Monday to Friday: {start} – {end}",
      es: "Lunes a viernes: {start} – {end}",
    },
    weekends: {
      de: "Samstag & Sonntag: {start} – {end} Uhr",
      en: "Saturday & Sunday: {start} – {end}",
      es: "Sábados y domingos: {start} – {end}",
    },
  },

  social: {
    title: {
      de: "Folgen Sie uns",
      en: "Follow us",
      es: "Sígannos",
    },
  },

  map: {
    title: {
      de: "So finden Sie uns",
      en: "How to find us",
      es: "Cómo llegar",
    },
    loadMap: {
      de: "Karte laden",
      en: "Load map",
      es: "Cargar mapa",
    },
    accept: {
      de: "Durch Klicken stimmen Sie der Datenübertragung an Google zu. Wir speichern diese Einstellung für Ihren Besuch.",
      en: "By clicking you agree to send data to Google. We'll remember your choice for this visit.",
      es: "Al pulsar, acepta la transferencia de datos a Google. Guardamos esta preferencia para su visita.",
    },
    showMap: {
      de: "Karte anzeigen",
      en: "Show map",
      es: "Ver mapa",
    },
  },
};

export type ContactTranslations = FlattenTranslation<typeof translations>;
