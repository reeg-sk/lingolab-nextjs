import StyleIndex from "@/components/graphics/StyleIndex";
import directus from "@/lib/directus";
import { readItem } from "@directus/sdk";
import { findFlagUrlByIso2Code } from "country-flags-svg";
import { notFound } from "next/navigation";
import Image from "next/image";

export const revalidate = 60

async function getPage(slug: string) {
    try {
      const page = await directus.request(
        readItem("certificates", slug, {
        //   fields: ["title", "content", "description", "date_created", "cover", "user_created"],
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
    const certificate = await getPage(params.slug);
   
    return {
      title: `${certificate.title} – LingoLab`,
      description: certificate.description,
    }
  }

export default async function CertificateDetail({ params }) {
    const certificate = await getPage(params.slug);

    return (
      <div className="px-4 mb-24">
      <StyleIndex />
      <section
        id="detail"
        className="relative container mx-auto max-w-7xl flex justify-center flex-col mb-12 md:mb-0"
      >
        <div className="bg-white md:border-y py-6 pl-4 flex flex-col md:flex-row gap-4 md:items-center justify-between">
          <div>
            {/* <p className="text-xl">{certificate.type}</p> */}
            <div className="flex items-baseline gap-3">
              <Image
                src={findFlagUrlByIso2Code(certificate.code)}
                width={42}
                height={42}
                alt={`Kurz Angličtina`}
              />
              <h1 className="text-4xl font-semibold">{certificate.name}</h1>
            </div>
          </div>
          <div className="flex gap-6 lg:gap-12 justify-start md:px-4">
            <div className="grid gap-2 items-center">
              <p>Počet hodiny</p>
              <p className="font-semibold text-base">{certificate.num_courses}</p>
            </div>
            <div className="grid gap-2 items-center">
              <p>Cena</p>
              <p className="font-semibold text-base">{certificate.price * certificate.num_courses} €</p>
            </div>
            <div className="grid gap-2 items-center">
              <p>Počet osôb</p>
                <p className="font-semibold text-base">
                {/* {certificate.type.split(" ")[1] === "Duo" ? "2" : "1"} */}
                </p>
              </div>
              </div>
            </div>
        <div>
          <iframe
            width="100%"
            className="w-full h-[calc(100vh-18rem)]"
            src={certificate.link}
          ></iframe>
        </div>
      </section>
    </div>
    )
}
