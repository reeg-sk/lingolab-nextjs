import { MetadataRoute } from "next";
import siteMetadata from "@/data/siteMetadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteMetadata.siteUrl;

  const routes = ["", "kurzy", "blog", "o-nas", "kontakt", "hodina-zdarma"].map((route, i) => ({
    url: `${siteUrl}/${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    priority: 1 - i * 0.1,
  }));

  return [...routes];
}
