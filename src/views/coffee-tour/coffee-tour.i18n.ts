import type { FlattenTranslation } from "@/lib/i18n";

export const translations = {
  navigationLabel: {
    de: "Kaffeetour",
    en: "Coffee tour",
    es: "Tour de café",
  },
  seo: {
    title: {
      de: "Kaffeetour buchen | Finca Los Castaños",
      en: "Book a coffee tour | Finca Los Castaños",
      es: "Reservar tour de café | Finca Los Castaños",
    },
    description: {
      de: "Buchen Sie eine geführte Kaffeetour auf der Finca Los Castaños im Valle de Agaete – 45 Minuten Plantage, Kaffeewissen und Verkostung",
      en: "Book a guided coffee tour at Finca Los Castaños in the Valle de Agaete – 45 minutes of plantation, coffee knowledge and tasting",
      es: "Reserven un tour guiado de café en la Finca Los Castaños en el Valle de Agaete – 45 minutos por la plantación, saberes cafeteros y degustación",
    },
  },

  hero: {
    title: {
      de: "Kaffeetour & Kaffeewissen",
      en: "Coffee tour & coffee knowledge",
      es: "Tour de café",
    },
    subtitle: {
      de: "Führung über unsere Plantage",
      en: "Guided tour of our plantation",
      es: "Visita guiada por nuestra plantación",
    },
  },

  intro: {
    p1: {
      de: "Erleben Sie die Welt des Kaffees! Unser Tourguide zeigt Ihnen in etwa einer Stunde unsere Plantage und Hänge mit den angebauten Pflanzen und gibt auf Spanisch, Französisch oder Englisch ihr spannendes Wissen rund um Anbau und Kaffeegenuss weiter.",
      en: "Experience the world of coffee! Our tour guide will show you our plantation and slopes with the cultivated plants in about an hour and pass on her exciting knowledge about cultivation and coffee enjoyment in Spanish, French or English.",
      es: "¡Vengan a conocer el mundo del café! Nuestra guía les enseña la plantación y las laderas con los cultivos durante una horita, contándoles todo lo que sabe sobre el cultivo y el buen café – en español, francés o inglés.",
    },
    p2: {
      de: "Die Kaffeeleidenschaft überträgt sich auf Sie, wenn unsere Expertin stolz von der Geschichte des Kaffeeanbaus erzählt, Basiswissen zu Gattungen und Varietäten, Wachstum, Ernteerträgen sowie die wichtigsten Prozesse rund um das Thema Kaffeeanbau vermittelt.",
      en: "The passion for coffee is transferred to you when our expert proudly tells you about the history of coffee cultivation, imparts basic knowledge about types and varieties, growth, harvest yields and the most important processes involved in coffee cultivation.",
      es: "La pasión por el café se pega, ya verán. Nuestra experta les cuenta con orgullo la historia del cultivo aquí en el valle, les explica las variedades, cómo crecen, cuánto se cosecha y todo el proceso que hay detrás de cada grano.",
    },
    p3: {
      de: "Einen Teil der Führung können Sie selbst die Plantage erkunden. Stolz zeigt unser Guide auch die \u201EKaffeeschule\u201C \u2013 in unseren Schulungsräumen führt sie Ihnen beispielhaft die Zubereitung vor und es gibt eine Verkostung.",
      en: "You can spend part of the tour exploring the plantation yourself. Our guide will also proudly show you the 'coffee school' – in our training rooms, she will give you an example of how coffee is prepared and there will be a tasting session.",
      es: "Durante un ratito pueden pasear por la plantación a su aire. Nuestra guía también les enseña la \"escuela del café\" – allí les prepara el café delante de ustedes y, claro, hay que probarlo.",
    },
    p4: {
      de: "In unserem Angebot halten wir für Sie Führungen über die Plantage, Verköstigungen und Barista-Abende ebenso bereit wie die Möglichkeit, unseren exklusiven Café zu erstehen.",
      en: "We offer guided tours of the plantation, tastings and barista evenings as well as the opportunity to purchase our exclusive coffee.",
      es: "Tenemos visitas por la plantación, degustaciones y noches de barista, y por supuesto pueden llevarse nuestro café a casa.",
    },
  },

  pricing: {
    title: {
      de: "Preise & Angebote",
      en: "Prices & offers",
      es: "Precios",
    },
    subtitle: {
      de: "Unsere Touren & Erlebnisse rund um Kaffee!",
      en: "Our tours & experiences around coffee!",
      es: "¡Nuestros tours y experiencias cafeteras!",
    },
    adults: {
      de: "Erwachsene",
      en: "Adults",
      es: "Adultos",
    },
    children: {
      de: "Kinder",
      en: "Children",
      es: "Niños",
    },
    infants: {
      de: "Kleinkinder bis {age} Jahre",
      en: "Infants up to {age} years",
      es: "Peques hasta {age} años",
    },
    infantsFree: {
      de: "kostenlos",
      en: "free of charge",
      es: "gratis",
    },
    cta: {
      de: "Jetzt Tour buchen",
      en: "Book your tour",
      es: "Reservar tour",
    },
    duration: {
      de: "Die Dauer der Führung beläuft sich auf etwa {minutes} Minuten inkl. Kaffeeverkostung.",
      en: "The tour lasts around {minutes} minutes and includes a coffee tasting.",
      es: "El recorrido dura unos {minutes} minutos e incluye una degustación de café.",
    },
  },

};

export type CoffeeTourTranslations = FlattenTranslation<typeof translations>;
