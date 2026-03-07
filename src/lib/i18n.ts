import { getOpenGraphLocale } from "./i18n/locales";
import { createResolver } from "./i18n/resolve";
import { type FlattenTranslation as BaseFlattenTranslation } from "./i18n/types";

export const languages = ["en", "es", "de"] as const;
export const defaultLang = "en" as const;
export type Language = (typeof languages)[number];

export const openGraphLocales: Record<Language, string> = {
  es: getOpenGraphLocale("es"),
  de: getOpenGraphLocale("de"),
  en: getOpenGraphLocale("en"),
};

export const resolveTranslations = createResolver({ languages, defaultLang });

// Re-export with Language type bound
export type FlattenTranslation<T> = BaseFlattenTranslation<T, Language>;
