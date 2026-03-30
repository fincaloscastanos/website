import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
  const baseUrl = site ? site.toString() : "http://localhost:4321/";
  const sitemapUrl = new URL("sitemap.xml", baseUrl).toString();
  const content = `
User-agent: *
Allow: /
Disallow: /404

# AI Crawlers
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Anthropic-ai
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: cohere-ai
Allow: /

Sitemap: ${sitemapUrl}
Llms: ${new URL("llms.txt", baseUrl).toString()}
Llms-full: ${new URL("llms-full.txt", baseUrl).toString()}
`.trim();

  return new Response(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
