import type { FlattenTranslation } from "@/lib/i18n";

export const translations = {
  navigationLabel: {
    de: "Veranstaltungen",
    en: "Events",
    es: "Eventos",
  },
  seo: {
    title: {
      de: "Veranstaltungen | Finca Los Castaños",
      en: "Events | Finca Los Castaños",
      es: "Eventos | Finca Los Castaños",
    },
    description: {
      de: "Feiern Sie auf der Finca Los Castaños \u2013 Eventzelt f\u00fcr bis zu 75 Personen inmitten der Kaffeeplantage im Valle de Agaete",
      en: "Celebrate at Finca Los Castaños \u2013 event tent for up to 75 guests amid the coffee plantation in the Valle de Agaete",
      es: "Celebren en la Finca Los Castaños \u2013 carpa para hasta 75 personas en medio del cafetal en el Valle de Agaete",
    },
  },

  hero: {
    title: {
      de: "Feiern auf der Finca Los Castaños",
      en: "Celebrate at Finca Los Castaños",
      es: "Celebren en la Finca Los Castaños",
    },
    subtitle: {
      de: "Stilvoll, komfortabel und unvergesslich",
      en: "Stylish, comfortable and unforgettable",
      es: "Con estilo, comodidad y momentos para recordar",
    },
  },

  intro: {
    p1: {
      de: "Erleben Sie unvergessliche Momente inmitten der malerischen Kaffeeplantage der Finca Los Castaños. Unser gro\u00dfz\u00fcgiges Eventzelt mit Au\u00dfenbereich bietet Platz f\u00fcr bis zu 75 Personen und ist perfekt f\u00fcr Hochzeiten, Geburtstage oder Firmenfeiern geeignet.",
      en: "Experience unforgettable moments amid the picturesque coffee plantation of Finca Los Castaños. Our spacious event tent with outdoor area accommodates up to 75 guests and is perfect for weddings, birthdays or corporate celebrations.",
      es: "Vivan momentos inolvidables en medio del cafetal de la Finca Los Castaños. Nuestra carpa con zona al aire libre tiene sitio para hasta 75 personas y es perfecta para bodas, cumplea\u00f1os o eventos de empresa.",
    },
    p2: {
      de: "Mit barrierefreiem Zugang, Parkpl\u00e4tzen, Klimatisierung, Heizung und WLAN sowie modernen Sanit\u00e4ranlagen genie\u00dfen Sie h\u00f6chsten Komfort.",
      en: "With barrier-free access, parking, air conditioning, heating and WiFi as well as modern sanitary facilities, you enjoy the highest comfort.",
      es: "Acceso sin barreras, aparcamiento, aire acondicionado, calefacci\u00f3n, wifi y ba\u00f1os modernos \u2013 aqu\u00ed no les falta de nada.",
    },
  },

  features: {
    capacity: {
      de: "Bis zu 75 Personen",
      en: "Up to 75 guests",
      es: "Hasta 75 personas",
    },
    accessible: {
      de: "Barrierefreier Zugang",
      en: "Barrier-free access",
      es: "Acceso sin barreras",
    },
    parking: {
      de: "Parkpl\u00e4tze vorhanden",
      en: "Parking available",
      es: "Aparcamiento",
    },
    climate: {
      de: "Klimaanlage & Heizung",
      en: "Air conditioning & heating",
      es: "Aire acondicionado y calefacci\u00f3n",
    },
    wifi: {
      de: "WLAN verf\u00fcgbar",
      en: "WiFi available",
      es: "Wifi disponible",
    },
    wc: {
      de: "Moderne Sanit\u00e4ranlagen",
      en: "Modern sanitary facilities",
      es: "Ba\u00f1os modernos",
    },
  },

  style: {
    title: {
      de: "Feiern mit Stil",
      en: "Celebrate in style",
      es: "Celebren por todo lo alto",
    },
    subtitle: {
      de: "Entspannt genie\u00dfen in idyllischer Umgebung",
      en: "Relax and enjoy in idyllic surroundings",
      es: "A disfrutar tranquilamente en un entorno de ensue\u00f1o",
    },
    p1: {
      de: "Das Zelt ist mit Tischen und ausreichend Sitzm\u00f6glichkeiten ausgestattet, sodass Ihre G\u00e4ste entspannt feiern k\u00f6nnen. Beim Catering haben Sie die Wahl: Organisieren Sie es selbst oder \u00fcberlassen Sie es uns.",
      en: "The tent is equipped with tables and plenty of seating, so your guests can celebrate in comfort. For catering, you have the choice: organise it yourself or leave it to us.",
      es: "La carpa viene con mesas y asientos de sobra para que sus invitados est\u00e9n c\u00f3modos. Para el c\u00e1tering, ustedes eligen: lo organizan ustedes mismos o nos encargamos nosotros.",
    },
    p2: {
      de: "F\u00fcr eine besondere Atmosph\u00e4re vermitteln wir gern professionelle K\u00fcnstler f\u00fcr die musikalische Begleitung. Eine moderne Musikanlage sorgt zus\u00e4tzlich f\u00fcr die perfekte Stimmung.",
      en: "For a special atmosphere, we are happy to arrange professional artists for musical entertainment. A modern sound system provides the perfect ambiance.",
      es: "Si quieren algo especial, les buscamos artistas profesionales para la m\u00fasica. Adem\u00e1s tenemos un equipo de sonido moderno para ponerle ambiente.",
    },
  },

  closing: {
    text: {
      de: "Feiern Sie stilvoll inmitten einer idyllischen Umgebung und genie\u00dfen Sie unseren erstklassigen Service \u2013 wir machen Ihr Event unvergesslich!",
      en: "Celebrate stylishly in an idyllic setting and enjoy our first-class service \u2013 we make your event unforgettable!",
      es: "\u00a1Celebren con estilo en un sitio de ensue\u00f1o y disfruten de nuestro servicio \u2013 nosotros nos encargamos de que su evento sea inolvidable!",
    },
    cta: {
      de: "Jetzt anfragen",
      en: "Enquire now",
      es: "Consultar ahora",
    },
  },
};

export type EventsTranslations = FlattenTranslation<typeof translations>;
