import type { FlattenTranslation } from "@/lib/i18n";

export const translations = {
  navigationLabel: {
    de: "Bildergalerie",
    en: "Photo Gallery",
    es: "Galería de fotos",
  },
  seo: {
    title: {
      de: "Galerie | Finca Los Castaños",
      en: "Gallery | Finca Los Castaños",
      es: "Galería | Finca Los Castaños",
    },
    description: {
      de: "Bildergalerie der Finca Los Castaños im Valle de Agaete – Einblicke in unsere Plantage, unser Team und die Kaffeewelt",
      en: "Photo gallery of Finca Los Castaños in the Valle de Agaete – insights into our plantation, our team and the world of coffee",
      es: "Galería de fotos de la Finca Los Castaños en el Valle de Agaete – un vistazo a nuestra plantación, nuestro equipo y el mundo del café",
    },
  },

  hero: {
    title: {
      de: "Bildergalerie",
      en: "Photo Gallery",
      es: "Galería de fotos",
    },
    subtitle: {
      de: "Entdecken Sie die Finca Los Castaños!",
      en: "Discover the Finca Los Castaños!",
      es: "¡Descubran la Finca Los Castaños!",
    },
  },

};

export type GalleryTranslations = FlattenTranslation<typeof translations>;
