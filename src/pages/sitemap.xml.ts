import type { APIRoute } from "astro";
import { languages, defaultLang } from "@/lib/i18n";
import { routeSlugs, getTranslatedPath } from "@/lib/registry";

// Escape special XML characters in URLs
const escapeXml = (str: string): string => {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
};

export const GET: APIRoute = async ({ site }) => {
  const baseUrl =
    site?.toString().replace(/\/$/, "") || "http://localhost:4321";

  const otherRouteKeys = Object.keys(routeSlugs).filter(
    (key) => key !== "home",
  );
  const allRouteKeys = ["home", ...otherRouteKeys];

  const priorityMap: Record<string, string> = {
    home: "1.0",
    experience: "0.9",
    "coffee-tour": "0.9",
    relax: "0.9",
    events: "0.8",
    "book-tour": "0.8",
    booking: "0.8",
    discover: "0.7",
    media: "0.6",
    contact: "0.7",
    imprint: "0.3",
    terms: "0.3",
    privacy: "0.3",
  };

  const changefreqMap: Record<string, string> = {
    home: "weekly",
    experience: "monthly",
    "coffee-tour": "monthly",
    relax: "monthly",
    events: "monthly",
    "book-tour": "weekly",
    booking: "weekly",
    discover: "monthly",
    media: "monthly",
    contact: "monthly",
    imprint: "yearly",
    terms: "yearly",
    privacy: "yearly",
  };

  // Video data for homepage
  const videoByLang: Record<string, { title: string; description: string }> = {
    en: {
      title: "Finca Los Castaños - Coffee Plantation in Valle de Agaete",
      description: "Impressions of our coffee plantation in the Valle de Agaete, Gran Canaria – Europe's only coffee-growing region.",
    },
    de: {
      title: "Finca Los Castaños - Kaffeeplantage im Valle de Agaete",
      description: "Eindrücke unserer Kaffeeplantage im Valle de Agaete, Gran Canaria – Europas einzige Kaffeeanbauregion.",
    },
    es: {
      title: "Finca Los Castaños - Plantación de café en el Valle de Agaete",
      description: "Imágenes de nuestra plantación de café en el Valle de Agaete, Gran Canaria – la única región cafetera de Europa.",
    },
  };

  // Static pages
  const pageUrls = allRouteKeys
    .flatMap((key) =>
      languages.map((currentLang) => {
        const path = getTranslatedPath(key, currentLang);
        if (path === "/404") return "";
        const currentUrl = escapeXml(`${baseUrl}${path}`);
        const priority = priorityMap[key] || "0.5";
        const changefreq = changefreqMap[key] || "monthly";
        const alternates = languages
          .map((lang) => {
            const altPath = getTranslatedPath(key, lang);
            if (altPath === "/404") return "";
            return `    <xhtml:link rel="alternate" hreflang="${lang}" href="${escapeXml(`${baseUrl}${altPath}`)}"/>`;
          })
          .filter(Boolean)
          .join("\n");

        const xDefaultPath = getTranslatedPath(key, defaultLang);
        const xDefaultLink = `    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(`${baseUrl}${xDefaultPath}`)}"/>`;

        // Add video sitemap entry for homepage
        const videoEntry = key === "home" && videoByLang[currentLang]
          ? `
    <video:video>
      <video:thumbnail_loc>${escapeXml(`${baseUrl}/og-default.png`)}</video:thumbnail_loc>
      <video:title>${escapeXml(videoByLang[currentLang].title)}</video:title>
      <video:description>${escapeXml(videoByLang[currentLang].description)}</video:description>
      <video:content_loc>${escapeXml(`${baseUrl}/hero.mp4`)}</video:content_loc>
      <video:publication_date>2025-01-01T00:00:00+00:00</video:publication_date>
    </video:video>`
          : "";

        return `
  <url>
    <loc>${currentUrl}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
${alternates}
${xDefaultLink}${videoEntry}
  </url>`;
      }),
    )
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${pageUrls}
</urlset>`;

  return new Response(sitemap.trim(), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
