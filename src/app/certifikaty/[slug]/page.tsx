import directus from "@/lib/directus";
import { readItem } from "@directus/sdk";
import { notFound } from "next/navigation";

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
        <>
            <h1>{certificate.title}</h1>
            <div>
                {JSON.stringify(certificate)}
            </div>
        </>
    )
}