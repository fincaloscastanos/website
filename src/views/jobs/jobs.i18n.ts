import type { FlattenTranslation } from "@/lib/i18n";

export const translations = {
  navigationLabel: {
    de: "Jobs",
    en: "Jobs",
    es: "Empleo",
  },
  seo: {
    title: {
      de: "Stellenangebote | Finca Los Castaños",
      en: "Jobs | Finca Los Castaños",
      es: "Empleo | Finca Los Castaños",
    },
    description: {
      de: "Offene Stellen auf der Finca Los Castaños in Agaete – San Pedro, Gran Canaria: Verwaltungsassistenz, Guide und Servicekraft",
      en: "Open positions at Finca Los Castaños in Agaete – San Pedro, Gran Canaria: administrative assistant, guide and service staff",
      es: "Ofertas de empleo en la Finca Los Castaños, Agaete – San Pedro, Gran Canaria: administración, guía de experiencias y camarero/a",
    },
  },

  hero: {
    title: {
      de: "Stellenangebote",
      en: "Job Openings",
      es: "Ofertas de empleo",
    },
    subtitle: {
      de: "Werden Sie Teil unseres Teams",
      en: "Become part of our team",
      es: "Forme parte de nuestro equipo",
    },
  },

  intro: {
    de: "Die Finca Los Castaños im Norden von Gran Canaria, in Agaete – San Pedro, sucht Verstärkung für folgende Positionen:",
    en: "Finca Los Castaños, in the north of Gran Canaria in Agaete – San Pedro, is looking for new team members for the following positions:",
    es: "La Finca Los Castaños, en el norte de Gran Canaria, en Agaete – San Pedro, busca incorporar a su equipo los siguientes perfiles:",
  },

  positions: {
    admin: {
      title: {
        de: "Assistenz der Verwaltung",
        en: "Administrative Assistant",
        es: "Asistente de administración",
      },
      type: {
        de: "Teilzeit oder Vollzeit",
        en: "Part-time or full-time",
        es: "Media jornada o jornada completa",
      },
      description: {
        de: "Mit Buchhaltungskenntnissen.",
        en: "With accounting skills.",
        es: "Con conocimientos de contabilidad.",
      },
    },
    guide: {
      title: {
        de: "Guide / Gästeführer/in",
        en: "Guide / Experience Host",
        es: "Guía de experiencias",
      },
      type: {
        de: "",
        en: "",
        es: "",
      },
      description: {
        de: "Mit sehr guten Deutsch-, Englisch- und Spanischkenntnissen. Weitere Sprachkenntnisse sind sehr willkommen.",
        en: "With excellent German, English and Spanish. Additional languages are very welcome.",
        es: "Con muy buen nivel de alemán, inglés y español. Otros idiomas son muy bienvenidos.",
      },
    },
    service: {
      title: {
        de: "Servicekraft / Kellner/in",
        en: "Service Staff / Waiter",
        es: "Camarero/a – hospitality",
      },
      type: {
        de: "Vollzeit",
        en: "Full-time",
        es: "Jornada completa",
      },
      description: {
        de: "Wir suchen nicht nur eine Servicekraft, sondern einen Menschen mit echter Serviceberufung, Hospitality-Mentalität und touristischem Gespür.",
        en: "We are not just looking for a waiter, but for a person with a true vocation for service, a hospitality mindset and a feel for tourism.",
        es: "Buscamos no solo un camarero, sino una persona con vocación de servicio, mentalidad de hospitality y visión turística.",
      },
    },
  },

  apply: {
    title: {
      de: "Interesse?",
      en: "Interested?",
      es: "¿Interesado/a?",
    },
    text: {
      de: "Bei Interesse senden Sie Ihre Anfrage bitte per E-Mail an:",
      en: "If you are interested, please send your enquiry by email to:",
      es: "Si está interesado/a, envíe su solicitud por correo electrónico a:",
    },
    cta: {
      de: "Jetzt bewerben",
      en: "Apply now",
      es: "Enviar candidatura",
    },
    mailSubject: {
      de: "Bewerbung Finca Los Castaños",
      en: "Application Finca Los Castaños",
      es: "Candidatura Finca Los Castaños",
    },
  },
};

export type JobsTranslations = FlattenTranslation<typeof translations>;
