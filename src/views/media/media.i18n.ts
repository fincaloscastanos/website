import type { FlattenTranslation } from "@/lib/i18n";

export const translations = {
  navigationLabel: {
    de: "Erfahren",
    en: "Media",
    es: "Medios",
  },
  seo: {
    title: {
      de: "In den Medien | Finca Los Castaños",
      en: "In the Media | Finca Los Castaños",
      es: "En los medios | Finca Los Castaños",
    },
    description: {
      de: "Presse, Videos und Veröffentlichungen rund um die Finca Los Castaños im Valle de Agaete",
      en: "Press, videos and publications about Finca Los Castaños in the Valle de Agaete",
      es: "Prensa, vídeos y publicaciones sobre la Finca Los Castaños en el Valle de Agaete",
    },
  },

  hero: {
    title: {
      de: "In den Medien",
      en: "In the Media",
      es: "En los medios",
    },
    subtitle: {
      de: "Erfahren Sie Aktuelles rund um die Finca Los Castaños!",
      en: "Discover the latest about Finca Los Castaños!",
      es: "¡Descubra las últimas novedades sobre la Finca Los Castaños!",
    },
  },

  intro: {
    text: {
      de: "Manche Orte erzählen ihre Geschichte durch die Menschen, die sie erleben. In journalistischen Artikeln, Video-Reportagen und Social-Media-Beiträgen wurde die Finca Los Castaños aus unterschiedlichen Perspektiven vorgestellt – entdecken Sie hier eine Auswahl aktueller Veröffentlichungen.",
      en: "Some places tell their story through the people who experience them. In journalistic articles, video reports and social media posts, Finca Los Castaños has been featured from different perspectives – discover a selection of recent publications here.",
      es: "Algunos lugares cuentan su historia a través de las personas que los viven. En artículos periodísticos, reportajes de vídeo y publicaciones en redes sociales, la Finca Los Castaños ha sido presentada desde diferentes perspectivas – descubra aquí una selección de publicaciones recientes.",
    },
  },

  sections: {
    socialMedia: {
      title: {
        de: "Social Media",
        en: "Social Media",
        es: "Redes sociales",
      },
    },
    press: {
      title: {
        de: "Presse",
        en: "Press",
        es: "Prensa",
      },
    },
    video: {
      title: {
        de: "Video",
        en: "Video",
        es: "Vídeo",
      },
    },
    radio: {
      title: {
        de: "Radio",
        en: "Radio",
        es: "Radio",
      },
    },
  },
};

export type MediaTranslations = FlattenTranslation<typeof translations>;
