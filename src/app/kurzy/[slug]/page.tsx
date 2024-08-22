import StyleIndex from "@/components/graphics/StyleIndex";
import { findFlagUrlByIso2Code } from "country-flags-svg";
import directus from "@/lib/directus";
import { notFound } from "next/navigation";
import { readItem } from "@directus/sdk";

async function getPage(slug) {
  try {
    const page = await directus.request(
      readItem("languages", slug, {
        fields: ["name", "code", "type", "online", "link"],
      })
    );
    return page;
  } catch (error) {
    notFound();
  }
}

// TODO - https://nextjs.org/docs/app/building-your-application/optimizing/metadata#dynamic-image-generation in the future
export async function generateMetadata(
  { params }
) { 
  const product = await getPage(params.slug);
 
  return {
    title: `${product.name} :: ${product.type} – LingoLab`,
    description: `${product.type} jazyka ${product.name} pre každého. Uč sa s nami online alebo offline. Príď sa naučiť niečo nové.`,
  }
}

export default async function CourseDetail({ params }) {
  const page = await getPage(params.slug);

  return (
    <div className="px-4 mb-24">
      <StyleIndex />
      <section
        id="detail"
        className="relative container mx-auto max-w-7xl flex justify-center flex-col mb-12 md:mb-0"
      >
        <div className="bg-white md:border-y py-6 pl-4 flex flex-col md:flex-row gap-4 md:items-center justify-between">
          <div>
            <p className="text-xl">{page.type}</p>
            <div className="flex items-baseline gap-3">
              <img
                src={findFlagUrlByIso2Code(page.code)}
                width={42}
                alt={`Kurz Angličtina`}
              />
              <h1 className="text-4xl font-semibold">{page.name}</h1>
            </div>
          </div>
          <div className="flex gap-6 lg:gap-12 justify-start md:px-4">
            <div className="grid gap-2 items-center">
              <p>Dĺžka hodiny</p>
              <p className="font-semibold text-base">60 minút</p>
            </div>
            <div className="grid gap-2 items-center">
              <p>Cena</p>
              <p className="font-semibold text-base">od {page.online} €</p>
            </div>
          </div>
        </div>
        <div>
          <iframe
            width="100%"
            className="w-full h-[calc(100vh-18rem)]"
            src={page.link}
          ></iframe>
        </div>
      </section>
    </div>
  );
}
