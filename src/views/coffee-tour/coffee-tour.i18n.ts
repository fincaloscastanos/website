import type { FlattenTranslation } from "@/lib/i18n";
import { siteData } from "@/data/site";

const { coffeeTour } = siteData;
const fp = (price: number) =>
  price % 1 === 0
    ? `${price},00 €`
    : `${price.toFixed(2).replace(".", ",")} €`;

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
    cta: {
      de: "Tour buchen",
      en: "Book tour",
      es: "Reservar tour",
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

  faq: {
    title: {
      de: "Häufige Fragen",
      en: "Frequently asked questions",
      es: "Preguntas frecuentes",
    },
    subtitle: {
      de: "Alles rund um die Kaffeetour",
      en: "Everything about the coffee tour",
      es: "Todo sobre el tour de café",
    },
    items: {
      de: [
        { question: "Wie lange dauert die Kaffeetour?", answer: `Die geführte Tour dauert etwa ${coffeeTour.durationMinutes} Minuten inklusive einer Kaffeeverkostung am Ende.` },
        { question: "In welchen Sprachen wird die Tour angeboten?", answer: "Die Tour wird auf Spanisch, Englisch und Französisch angeboten." },
        { question: "Muss ich die Tour im Voraus buchen?", answer: "Eine Online-Buchung wird empfohlen, da die Plätze begrenzt sind. Online erhalten Sie zudem einen vergünstigten Preis." },
        { question: "Ist die Tour für Kinder geeignet?", answer: `Ja, Kinder sind willkommen. Kinder zahlen einen ermäßigten Preis und Kleinkinder bis ${coffeeTour.infantsMaxAge} Jahre sind kostenlos.` },
        { question: "Was ist im Tourpreis enthalten?", answer: "Der Preis beinhaltet die geführte Besichtigung der Kaffeeplantage, Erklärungen zum Kaffeeanbau und eine Kaffeeverkostung." },
        { question: "Gibt es Parkmöglichkeiten?", answer: "Ja, kostenlose Parkplätze stehen direkt an der Finca zur Verfügung." },
      ],
      en: [
        { question: "How long does the coffee tour last?", answer: `The guided tour takes approximately ${coffeeTour.durationMinutes} minutes, including a coffee tasting at the end.` },
        { question: "What languages are the tours offered in?", answer: "Tours are offered in Spanish, English, and French." },
        { question: "Do I need to book in advance?", answer: "Advance online booking is recommended as places are limited. You also get a discounted price when booking online." },
        { question: "Is the tour suitable for children?", answer: `Yes, children are welcome. Children pay a reduced price, and infants up to ${coffeeTour.infantsMaxAge} years old are free.` },
        { question: "What is included in the tour price?", answer: "The price includes a guided visit of the coffee plantation, explanations about coffee cultivation, and a coffee tasting session." },
        { question: "Is there parking available?", answer: "Yes, free parking is available directly at the finca." },
      ],
      es: [
        { question: "\u00bfCu\u00e1nto dura el tour de caf\u00e9?", answer: `La visita guiada dura aproximadamente ${coffeeTour.durationMinutes} minutos, incluyendo una degustaci\u00f3n de caf\u00e9 al final.` },
        { question: "\u00bfEn qu\u00e9 idiomas se ofrece el tour?", answer: "Los tours se ofrecen en espa\u00f1ol, ingl\u00e9s y franc\u00e9s." },
        { question: "\u00bfEs necesario reservar con antelaci\u00f3n?", answer: "Se recomienda reservar online ya que las plazas son limitadas. Adem\u00e1s, obtendr\u00e1n un precio reducido al reservar online." },
        { question: "\u00bfEl tour es apto para ni\u00f1os?", answer: `S\u00ed, los ni\u00f1os son bienvenidos. Los ni\u00f1os pagan un precio reducido y los peques hasta ${coffeeTour.infantsMaxAge} a\u00f1os entran gratis.` },
        { question: "\u00bfQu\u00e9 incluye el precio del tour?", answer: "El precio incluye una visita guiada por la plantaci\u00f3n de caf\u00e9, explicaciones sobre el cultivo del caf\u00e9 y una degustaci\u00f3n." },
        { question: "\u00bfHay aparcamiento disponible?", answer: "S\u00ed, hay aparcamiento gratuito en la propia finca." },
      ],
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
      de: `Kleinkinder bis ${coffeeTour.infantsMaxAge} Jahre`,
      en: `Infants up to ${coffeeTour.infantsMaxAge} years`,
      es: `Peques hasta ${coffeeTour.infantsMaxAge} años`,
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
    adultsOnlinePrice: {
      de: fp(coffeeTour.adultsOnline),
      en: fp(coffeeTour.adultsOnline),
      es: fp(coffeeTour.adultsOnline),
    },
    childrenOnlinePrice: {
      de: fp(coffeeTour.childrenOnline),
      en: fp(coffeeTour.childrenOnline),
      es: fp(coffeeTour.childrenOnline),
    },
    onlinePrice: {
      de: "Online-Preis",
      en: "Online price",
      es: "Precio online",
    },
    onsiteNote: {
      de: `* Bei Bezahlung vor Ort: Erwachsene ${fp(coffeeTour.adults)}, Kinder ${fp(coffeeTour.children)}`,
      en: `* On-site payment: Adults ${fp(coffeeTour.adults)}, Children ${fp(coffeeTour.children)}`,
      es: `* Pago en el lugar: Adultos ${fp(coffeeTour.adults)}, Niños ${fp(coffeeTour.children)}`,
    },
    duration: {
      de: `Die Dauer der Führung beläuft sich auf etwa ${coffeeTour.durationMinutes} Minuten inkl. Kaffeeverkostung.`,
      en: `The tour lasts around ${coffeeTour.durationMinutes} minutes and includes a coffee tasting.`,
      es: `El recorrido dura unos ${coffeeTour.durationMinutes} minutos e incluye una degustación de café.`,
    },
  },

};

export type CoffeeTourTranslations = FlattenTranslation<typeof translations>;
