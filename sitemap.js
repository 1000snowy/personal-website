import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";
import { writeFileSync } from "fs";

const lastmod = new Date().toISOString().slice(0, 10);

const links = [
  {
    url: "/about/",
    changefreq: "daily",
    lastmod,
  },
  {
    url: "/404/",
    changefreq: "daily",
    lastmod,
  },
  {
    url: "/repos",
    changefreq: "daily",
    lastmod,
  },
  {
    url: "/",
    changefreq: "daily",
    priority: 1.0,
    lastmod,
  },
];

const stream = new SitemapStream({ hostname: "https://kaans.land" });

const sitemap = streamToPromise(Readable.from(links).pipe(stream)).then(
  (data) => writeFileSync("public/sitemap.xml", data.toString())
);
