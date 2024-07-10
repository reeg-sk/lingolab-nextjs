import directus from "@/lib/directus";
import { readItems } from "@directus/sdk";

async function getAboutUs() {
  return directus.request(readItems("aboutus"));
}

export default async function AboutUs() {
  const aboutUs = await getAboutUs();

  return (
    <section
      id="hero"
      className="relative min-h-screen container mx-auto max-w-7xl flex justify-center flex-col"
    >
      <div dangerouslySetInnerHTML={{ __html: aboutUs.content }}></div>
    </section>
  );
}
