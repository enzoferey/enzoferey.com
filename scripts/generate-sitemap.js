const fs = require("fs");

function addPage(page) {
  const path = page
    .replace("src/pages", "")
    .replace(".tsx", "")
    .replace(".js", "");

  const route = path === "/index" ? "" : path;

  return `  <url>
    <loc>${`${process.env.SITEMAP_URL}${route}`}</loc>
    <changefreq>hourly</changefreq>
  </url>`;
}

async function generateSitemap() {
  const { globby } = await import("globby");

  // Ignore Next.js specific files (e.g., _app.js) and API routes.
  const pages = await globby([
    "src/pages/**/*.tsx",
    "!src/pages/_*.tsx",
    "!src/pages/_*.js",
    "!src/pages/api",
  ]);

  const sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(addPage).join("\n")}
</urlset>`;

  fs.writeFileSync("public/sitemap.xml", sitemap);
}

generateSitemap();
