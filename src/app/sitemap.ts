import { MetadataRoute } from "next";
import siteMetadata from "@/data/siteMetadata";
import { getCertificates, getLanguages } from "@/lib/records";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = siteMetadata.siteUrl;

  const routes = [
    "",
    "kurzy",
    "certifikaty",
    "uvodna-konzultacia",
    "o-nas",
    "kontakt",
  ].map((route, i) => ({
    url: `${siteUrl}/${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    priority: 1 - i * 0.1,
  }));

  const languages = await getLanguages();
  languages.forEach((language) => {
    routes.push({
      url: `${siteUrl}/kurzy/${language.slug}`,
      lastModified: new Date().toISOString().split("T")[0],
      priority: 0.9,
    });
  });

  const certificates = await getCertificates();
  certificates.forEach((certificate) => {
    routes.push({
      url: `${siteUrl}/certifikaty/${certificate.slug}`,
      lastModified: new Date().toISOString().split("T")[0],
      priority: 0.9,
    });
  });

  return [...routes];
}
