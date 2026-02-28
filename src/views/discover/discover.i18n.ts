import type { FlattenTranslation } from "@/lib/i18n";

export const translations = {
  navigationLabel: {
    de: "Entdecken",
    en: "Discover",
    es: "Descubrir",
  },
  seo: {
    title: {
      de: "Entdecken | Finca Los Castaños",
      en: "Discover | Finca Los Castaños",
      es: "Descubrir | Finca Los Castaños",
    },
    description: {
      de: "Bildergalerie der Finca Los Castaños im Valle de Agaete – Einblicke in unsere Plantage, unser Team und die Kaffeewelt",
      en: "Photo gallery of Finca Los Castaños in the Valle de Agaete – insights into our plantation, our team and the world of coffee",
      es: "Galería de fotos de la Finca Los Castaños en el Valle de Agaete – un vistazo a nuestra plantación, nuestro equipo y el mundo del café",
    },
  },

  hero: {
    title: {
      de: "Entdecken Sie die Finca Los Castaños!",
      en: "Discover the Finca Los Castaños!",
      es: "¡Descubran la Finca Los Castaños!",
    },
  },

  gallery: {
    title: {
      de: "Bildergalerie",
      en: "Picture gallery",
      es: "Galería de fotos",
    },
    subtitle: {
      de: "Entdecken Sie die Welt des Kaffees auf der Finca Los Castaños! Unsere Bildergalerie gibt bunte Einblicke in unsere Plantage, unser Team und mehr.",
      en: "Discover the world of coffee at Finca Los Castaños! Our picture gallery provides colourful insights into our plantation, our team and more.",
      es: "¡Descubran el mundo del café en la Finca Los Castaños! Nuestra galería de fotos les da un vistazo bien bonito a la plantación, al equipo y a mucho más.",
    },
  },
};

export type DiscoverTranslations = FlattenTranslation<typeof translations>;
