import type { FlattenTranslation } from "@/lib/i18n";
import { siteData } from "@/data/site";

const { company, nif, street, zip, city, province } = siteData.legal;

export const translations = {
  navigationLabel: {
    de: "AGB",
    en: "Terms & Conditions",
    es: "Condiciones generales",
  },
  seo: {
    title: {
      de: "AGB | Finca Los Castaños",
      en: "Terms & Conditions | Finca Los Castaños",
      es: "Condiciones generales | Finca Los Castaños",
    },
    description: {
      de: "Allgemeine Geschäftsbedingungen der Finca Los Castaños – Kaffeetouren und Verkostungen in Agaete, Gran Canaria",
      en: "General terms and conditions of Finca Los Castaños – coffee tours and tastings in Agaete, Gran Canaria",
      es: "Condiciones generales de Finca Los Castaños – tours de café y degustaciones en Agaete, Gran Canaria",
    },
  },

  title: {
    de: "Allgemeine Geschäftsbedingungen (AGB)",
    en: "Terms and Conditions",
    es: "Condiciones generales de contratación",
  },
  subtitle: {
    de: "Finca Los Castaños",
    en: "Finca Los Castaños",
    es: "Finca Los Castaños",
  },

  scope: {
    heading: {
      de: "1. Geltungsbereich und Vertragspartner",
      en: "1. Scope and Contracting Party",
      es: "1. Ámbito de aplicación y parte contratante",
    },
    text: {
      de: `Diese AGB gelten für alle Verträge über die Durchführung von Kaffeetouren und Verkostungen auf der Finca Los Castaños, ${city}. Vertragspartner ist ${company}, ${street}, ${zip} ${city}, ${province} (CIF: ${nif}), im Folgenden 'Veranstalter' genannt.`,
      en: `These Terms and Conditions apply to all contracts for the provision of coffee tours and tastings at Finca Los Castaños, ${city}. The contracting party is ${company}, ${street}, ${zip} ${city}, ${province} (CIF: ${nif}), hereinafter referred to as the 'Organiser'.`,
      es: `Estas condiciones generales se aplican a todos los contratos relativos a la realización de tours de café y degustaciones en la Finca Los Castaños, ${city}. La parte contratante es ${company}, ${street}, ${zip} ${city}, ${province} (CIF: ${nif}), en adelante denominada 'Organizador'.`,
    },
  },

  tours: {
    heading: {
      de: "2. Kaffeetouren und Verkostungen",
      en: "2. Coffee Tours and Tastings",
      es: "2. Tours de café y degustaciones",
    },
    bookingTitle: {
      de: "2.1 Vertragsabschluss und Zahlung",
      en: "2.1 Conclusion of Contract and Payment",
      es: "2.1 Celebración del contrato y pago",
    },
    bookingText: {
      de: "Die Buchung von Touren erfolgt online, schriftlich oder vor Ort. Der Vertrag kommt mit der Bestätigung durch den Veranstalter zustande. Die Preise verstehen sich inklusive der gesetzlichen kanarischen Steuer (IGIC). Die Zahlung erfolgt gemäß der gewählten Zahlungsart vor Beginn der Tour.",
      en: "Tours can be booked online, in writing or on site. The contract is concluded upon confirmation by the Organiser. Prices include the statutory Canary Islands tax (IGIC). Payment is made according to the chosen payment method before the start of the tour.",
      es: "La reserva de los tours se realiza en línea, por escrito o de forma presencial. El contrato se formaliza con la confirmación por parte del Organizador. Los precios incluyen el Impuesto General Indirecto Canario (IGIC). El pago se efectúa según la forma de pago elegida antes del inicio del tour.",
    },
    healthTitle: {
      de: "2.2 Gesundheit, Allergien und Unverträglichkeiten",
      en: "2.2 Health, Allergies and Intolerances",
      es: "2.2 Salud, alergias e intolerancias",
    },
    healthDuty: {
      de: "Informationspflicht: Der Teilnehmer ist ausdrücklich verpflichtet, den Veranstalter vor Beginn der Tour oder Verkostung über bestehende Lebensmittelallergien (z. B. Koffeinintoleranz, Laktose, Nüsse, Gluten) oder schwere Allergien gegen Insektenstiche (Bienen/Wespen) zu informieren.",
      en: "Duty to inform: The participant is expressly obliged to inform the Organiser before the start of the tour or tasting of any existing food allergies (e.g. caffeine intolerance, lactose, nuts, gluten) or severe allergies to insect stings (bees/wasps).",
      es: "Deber de información: El participante está expresamente obligado a informar al Organizador antes del inicio del tour o la degustación sobre cualquier alergia alimentaria existente (p. ej., intolerancia a la cafeína, lactosa, frutos secos, gluten) o alergias graves a picaduras de insectos (abejas/avispas).",
    },
    healthLiability: {
      de: "Haftung bei Verkostung: Die Teilnahme an der Verkostung von Kaffee, Kaffeekirschen-Tee (Cascara) oder gereichten Snacks erfolgt auf eigene Gefahr. Da es sich um einen landwirtschaftlichen Betrieb handelt, können Kreuzkontaminationen mit Allergenen nicht vollständig ausgeschlossen werden.",
      en: "Tasting liability: Participation in the tasting of coffee, coffee cherry tea (cascara) or served snacks is at the participant's own risk. As this is an agricultural operation, cross-contamination with allergens cannot be completely ruled out.",
      es: "Responsabilidad en la degustación: La participación en la degustación de café, té de cereza de café (cascara) o aperitivos servidos se realiza bajo la propia responsabilidad del participante. Al tratarse de una explotación agrícola, no se puede descartar por completo la contaminación cruzada con alérgenos.",
    },
    healthNote: {
      de: "Gesundheitshinweis: Aufgrund des natürlichen Koffeingehalts der Produkte wird Personen mit Herz-Kreislauf-Erkrankungen, Bluthochdruck oder Schwangeren empfohlen, ihren Konsum eigenverantwortlich zu prüfen und ggf. einzuschränken.",
      en: "Health notice: Due to the natural caffeine content of the products, persons with cardiovascular diseases, high blood pressure or pregnant women are advised to check their consumption on their own responsibility and limit it if necessary.",
      es: "Aviso de salud: Debido al contenido natural de cafeína de los productos, se recomienda a las personas con enfermedades cardiovasculares, hipertensión arterial o embarazadas que evalúen su consumo bajo su propia responsabilidad y lo limiten en caso necesario.",
    },
    cancellationTitle: {
      de: "2.3 Stornierung von Touren",
      en: "2.3 Tour Cancellation",
      es: "2.3 Cancelación de tours",
    },
    cancellation1: {
      de: "Bis 3 Tage vor Tourbeginn: Stornierung möglich.",
      en: "Up to 3 days before the tour: cancellation possible.",
      es: "Hasta 3 días antes del inicio del tour: cancelación posible.",
    },
    cancellation2: {
      de: "Weniger als 3 Tage vor Beginn oder Nichterscheinen: 100 % des Preises werden fällig.",
      en: "Less than 3 days before the start or no-show: 100% of the price is due.",
      es: "Menos de 3 días antes del inicio o no presentación: se adeuda el 100 % del precio.",
    },
    cancellation3: {
      de: "Non-Refundable Tarife sehen keine Erstattung bei Stornierung vor.",
      en: "Non-refundable rates do not provide for any refund in case of cancellation.",
      es: "Las tarifas no reembolsables no contemplan devolución alguna en caso de cancelación.",
    },
  },

  finca: {
    heading: {
      de: "3. Allgemeine Bestimmungen für die Finca",
      en: "3. General Provisions for the Finca",
      es: "3. Disposiciones generales para la finca",
    },
    safetyTitle: {
      de: "3.1 Sicherheit und Kleidung",
      en: "3.1 Safety and Clothing",
      es: "3.1 Seguridad y vestimenta",
    },
    safetyText: {
      de: "Die Finca ist ein arbeitender landwirtschaftlicher Betrieb. Das Betreten erfolgt auf eigene Gefahr. Den Anweisungen des Personals ist Folge zu leisten. Das Verlassen der Wege ist untersagt. Festes Schuhwerk ist für die Begehung der Plantage zwingend erforderlich.",
      en: "The Finca is a working agricultural operation. Entry is at your own risk. Staff instructions must be followed. Leaving the paths is prohibited. Sturdy footwear is mandatory for walking through the plantation.",
      es: "La finca es una explotación agrícola en activo. El acceso se realiza bajo la propia responsabilidad del visitante. Se deben seguir las instrucciones del personal. Está prohibido abandonar los caminos. Es obligatorio el uso de calzado cerrado para recorrer la plantación.",
    },
    liabilityTitle: {
      de: "3.2 Haftungsausschluss",
      en: "3.2 Disclaimer of Liability",
      es: "3.2 Exclusión de responsabilidad",
    },
    liabilityText: {
      de: "Der Veranstalter haftet nur für Schäden, die auf einer vorsätzlichen oder grob fahrlässigen Pflichtverletzung beruhen. Für allergische Reaktionen oder gesundheitliche Beeinträchtigungen infolge der Verkostung wird keine Haftung übernommen, sofern der Veranstalter seinen Informationspflichten nachgekommen ist und keine grobe Fahrlässigkeit vorliegt.",
      en: "The Organiser is only liable for damages resulting from intentional or grossly negligent breach of duty. No liability is assumed for allergic reactions or health impairments resulting from the tasting, provided the Organiser has fulfilled its duty to inform and there is no gross negligence.",
      es: "El Organizador solo responde por los daños derivados de un incumplimiento doloso o por negligencia grave de sus obligaciones. No se asume responsabilidad alguna por reacciones alérgicas o perjuicios para la salud derivados de la degustación, siempre que el Organizador haya cumplido con su deber de información y no exista negligencia grave.",
    },
    rulesTitle: {
      de: "3.3 Hausordnung",
      en: "3.3 House Rules",
      es: "3.3 Normas de la casa",
    },
    rule1: {
      de: "In allen Innenräumen gilt striktes Rauchverbot.",
      en: "Smoking is strictly prohibited in all indoor areas.",
      es: "Está estrictamente prohibido fumar en todos los espacios interiores.",
    },
    rule2: {
      de: "Ab 22:00 Uhr gilt die Nachtruhe.",
      en: "Quiet hours begin at 10:00 PM.",
      es: "El horario de descanso nocturno comienza a las 22:00 h.",
    },
    rule3: {
      de: "Pflanzen und Früchte dürfen nicht eigenmächtig beschädigt oder geerntet werden.",
      en: "Plants and fruits may not be damaged or harvested without permission.",
      es: "No se permite dañar ni recolectar plantas y frutos sin autorización.",
    },
    imageTitle: {
      de: "3.4 Bildrechte",
      en: "3.4 Image Rights",
      es: "3.4 Derechos de imagen",
    },
    imageText: {
      de: "Fotos für den privaten Gebrauch sind erlaubt. Eine kommerzielle Nutzung von Aufnahmen der Finca bedarf der vorherigen schriftlichen Genehmigung.",
      en: "Photos for private use are permitted. Commercial use of images of the Finca requires prior written permission.",
      es: "Se permiten las fotografías para uso privado. El uso comercial de imágenes de la finca requiere autorización previa por escrito.",
    },
    finalTitle: {
      de: "3.5 Schlussbestimmungen",
      en: "3.5 Final Provisions",
      es: "3.5 Disposiciones finales",
    },
    finalText: {
      de: "Es gilt spanisches Recht. Gerichtsstand ist Las Palmas de Gran Canaria.",
      en: "Spanish law applies. The place of jurisdiction is Las Palmas de Gran Canaria.",
      es: "Se aplica la legislación española. El fuero competente es Las Palmas de Gran Canaria.",
    },
  },

  source: {
    de: `Stand: Februar 2026 | ${company} | Finca Los Castaños, ${city}, Gran Canaria`,
    en: `As of: February 2026 | ${company} | Finca Los Castaños, ${city}, Gran Canaria`,
    es: `Fecha: febrero de 2026 | ${company} | Finca Los Castaños, ${city}, Gran Canaria`,
  },
};

export type TermsTranslations = FlattenTranslation<typeof translations>;
