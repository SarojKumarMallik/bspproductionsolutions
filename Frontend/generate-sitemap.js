import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";

const hostname = "https://www.bspprojectsolutions.co.in";

const sitemap = new SitemapStream({ hostname });
const writeStream = createWriteStream("./public/sitemap.xml");

sitemap.pipe(writeStream);

// ✅ Only 2 URLs
sitemap.write({ url: "/", changefreq: "daily", priority: 1.0 });
sitemap.write({
  url: "/services/on-grid-solar-system",
  changefreq: "weekly",
  priority: 0.9,
});

sitemap.end();

streamToPromise(sitemap).then(() => {
  console.log("✅ Sitemap generated successfully!");
});