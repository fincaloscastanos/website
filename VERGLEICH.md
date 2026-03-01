# Vergleich: finca.pulpo.cloud vs. fincaloscastanos.com

> Stand: 01.03.2026

## 1. Technologie & Framework

| | **finca.pulpo.cloud** (Neu) | **fincaloscastanos.com** (Alt) |
|---|---|---|
| **Framework** | Astro 5 (Static Site Generator) | WordPress + Enfold Theme |
| **Page Builder** | Handcodiert (Astro Components) | Avia Template Builder |
| **CSS** | Tailwind CSS v4 | Enfold Theme CSS + Inline Styles |
| **JavaScript** | Vanilla JS, minimal | jQuery + diverse WP-Plugins |
| **E-Commerce** | Keins (nicht nötig) | WooCommerce |
| **i18n** | Eigenes System (route-basiert) | WPML Plugin |
| **Server** | nginx/alpine (Docker) | Apache |

## 2. Performance

| | **finca.pulpo.cloud** | **fincaloscastanos.com** |
|---|---|---|
| **TTFB** | **0.24s** | 4.10s |
| **Gesamtladezeit** | **0.38s** | 4.35s |
| **HTML-Größe (raw)** | **48 KB** | 193 KB |
| **HTML-Größe (gzip)** | **13 KB** | 35 KB |
| **JS-Dateien** | **1** | 5 |
| **CSS-Dateien** | **1** | 0 (inline im HTML) |
| **Bilder** | 34 `<img>` Tags | 86 `<img>` Tags |
| **Bildformat** | WebP (75 Referenzen) | Gemischt (21 WebP) |

Die neue Seite ist **~11x schneller** beim TTFB und liefert **4x weniger HTML** aus. Das liegt am statischen Build (Astro) vs. dynamischem Rendering (WordPress/Apache).

## 3. SEO & Meta-Tags

| | **finca.pulpo.cloud** | **fincaloscastanos.com** |
|---|---|---|
| **Meta Description** | Ja (pro Sprache) | Ja |
| **Open Graph** | Vollständig (type, url, title, desc, image, site_name, locale) | Vollständig |
| **OG Locale Alternates** | Ja (es_ES, en_GB, de_DE) | Nur de_DE |
| **Twitter Cards** | Ja (summary_large_image) | Ja (summary_large_image) |
| **Hreflang Tags** | Ja (x-default, es, en, de) | Ja (4 Tags) |
| **Canonical URL** | Ja | Ja (via Yoast/WPML) |
| **Schema.org (JSON-LD)** | Ja (Organization, LocalBusiness, WebSite, WebPage) | Ja (Organization, WebSite, Article) |
| **robots** | `index, follow` | Standard |

Die neue Seite hat vollständige hreflang-Implementierung mit `x-default` und umfangreicheres Schema.org Markup mit LocalBusiness (Adresse, Öffnungszeiten, Geo-Koordinaten).

## 4. Inhalt & Aufbau

| | **finca.pulpo.cloud** | **fincaloscastanos.com** |
|---|---|---|
| **Hero** | **Video** (hero.mp4) | Statisches Bild/Slider |
| **Feature Cards** | 3 Cards (Events, Tours, Unterkunft) | 3 Cards (ähnlich) |
| **Über uns** | Ja, mit Bildern | Ja |
| **Visitas/Touren** | Eigene Sektion | Eigene Sektion |
| **Café/Shop** | Sektion "Ruta del café" | Sektion mit WooCommerce |
| **Nachhaltigkeit** | Ja | Ja |
| **Galerie** | 12 Bilder | Karussell |
| **Kontakt/Karte** | Google Maps mit Privacy-Gate | Google Maps (direkt) |
| **Öffnungszeiten** | Ja, in Sektion integriert | Ja |

Inhaltlich sind beide Seiten sehr ähnlich -- die neue Seite hat den gleichen Content, aber mit Video-Hero statt Slider.

## 5. Navigation

| | **finca.pulpo.cloud** | **fincaloscastanos.com** |
|---|---|---|
| **Hauptmenü** | Inicio, Experiencia, Relajarse, Descubrir, Contacto | Erleben, Entspannen, Entdecken, Kontakt |
| **Untermenüs** | Nein (flach) | Ja (Dropdown unter "Erleben") |
| **Standardsprache** | Spanisch | Deutsch |
| **Sprachwechsel** | Flaggen-Icons im Header | Flaggen-Icons im Header |
| **Mobile Menü** | Fullscreen-Overlay mit Animation | Standard WordPress Mobile |

## 6. Sprachen

| | **finca.pulpo.cloud** | **fincaloscastanos.com** |
|---|---|---|
| **Sprachen** | ES (default), EN, DE | DE (default), ES, EN |
| **URL-Struktur** | `/` (ES), `/en`, `/de` | `/` (DE), `/es/`, `/en/` |
| **System** | Route-basiert, eigenes i18n | WPML Plugin |

## 7. Bilder & Medien

| | **finca.pulpo.cloud** | **fincaloscastanos.com** |
|---|---|---|
| **Bildformat** | **Durchgehend WebP** | Gemischt (WebP, JPEG, PNG) |
| **Responsive Images** | `srcset` mit 2-3 Größen | `srcset` mit 3+ Größen |
| **Lazy Loading** | Native (`loading="lazy"`) | `sizes="auto i"` + Intersection Observer |
| **Video** | Hero-Video (MP4) | Kein Video |
| **Icon System** | SVG Sprites (astro-icon) | Icon Fonts (Entypo, Flaticon) |

## 8. Datenschutz & Third-Party

| | **finca.pulpo.cloud** | **fincaloscastanos.com** |
|---|---|---|
| **Analytics** | Umami (self-hosted auf pulpo.cloud) | Google Tag Manager |
| **Cookie Banner** | Kein Banner nötig (Umami = cookieless) | Cookiebot |
| **Maps** | Google Maps mit **Privacy-Gate** (Opt-in) | Google Maps mit Cookiebot-Consent |
| **Booking** | Keine Einbindung | Booking.com |
| **Social** | Instagram, Facebook, WhatsApp | Instagram, Facebook |

## 9. Code-Qualität & Wartbarkeit

| | **finca.pulpo.cloud** | **fincaloscastanos.com** |
|---|---|---|
| **Codebase** | Schlank, handcodiert, versioniert (Git) | WordPress + Theme + 20+ Plugins |
| **Updates** | Manuell, kontrolliert | WP Core + Plugin-Updates nötig |
| **Sicherheit** | Statische Dateien (kein Backend) | PHP/MySQL (Angriffsfläche) |
| **Deployment** | Docker → GitHub Actions → ghcr.io | Hosting-Provider |
| **Abhängigkeiten** | Minimal (Astro, Tailwind) | WordPress-Ökosystem |

## 10. HTTP-Header

| | **finca.pulpo.cloud** | **fincaloscastanos.com** |
|---|---|---|
| **Server** | nginx/1.29.5 | Apache |
| **Komprimierung** | gzip (via `Vary: Accept-Encoding`) | Nicht erkannt |
| **Caching** | ETag-basiert | Kein ETag |
| **Rate Limiting** | Nein | Ja (x-ws-ratelimit) |

## Gesamtfazit

Die neue Seite (finca.pulpo.cloud) ist ein **massives Upgrade** in allen technischen Bereichen:

- **~11x schneller** beim TTFB (0.24s vs. 4.10s)
- **4x weniger HTML** (48 KB vs. 193 KB)
- **Kein Cookie-Banner** nötig dank datenschutzfreundlichem Analytics
- **Keine WordPress-Sicherheitsrisiken** (statische Dateien, kein PHP/MySQL)
- **Vollständiges SEO** mit Schema.org, Twitter Cards, hreflang und Open Graph
- **Minimale Abhängigkeiten** und volle Kontrolle über den Code

Inhaltlich sind beide Seiten gleichwertig -- alle Informationen der alten Seite sind in der neuen vorhanden.

## 11. Verfügbarkeit & Stabilität

Während dieses Vergleichs (01.03.2026) war die alte WordPress-Seite (fincaloscastanos.com) zeitweise mit einem **500 Internal Server Error** komplett offline -- die neue Astro-Seite (finca.pulpo.cloud) war durchgehend erreichbar.

Das unterstreicht einen fundamentalen Unterschied der Architekturen:

| | **finca.pulpo.cloud** | **fincaloscastanos.com** |
|---|---|---|
| **Architektur** | Statische HTML-Dateien via nginx | Dynamisch generiert via PHP/MySQL |
| **Ausfallrisiko** | Minimal (nur nginx muss laufen) | Hoch (PHP, MySQL, Plugins, Theme -- jede Komponente kann ausfallen) |
| **Typische Fehlerquellen** | Praktisch keine | Plugin-Konflikte, PHP-Updates, Datenbank-Probleme, Memory-Limits |

Eine statische Seite kann im Grunde nicht crashen -- es werden nur fertige Dateien ausgeliefert. Bei WordPress reicht ein fehlerhaftes Plugin-Update oder ein Datenbankproblem, um die gesamte Seite lahmzulegen.
