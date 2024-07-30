import directus from "@/lib/directus";
import { readItem } from "@directus/sdk";
import { notFound } from "next/navigation";

async function getPage(slug) {
    try {
      const page = await directus.request(
        readItem("posts", slug, {
          fields: ["title", "content", "description", "date_created", "cover", "user_created"],
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
      title: `${product.title} – LingoLab`,
      description: product.description,
    }
  }

export default async function BlogPost({ params }) {
    const page = await getPage(params.slug);

    return (
        <>
            <h1>{page.title}</h1>
            <p>{page.description}</p>
            <div>
                {JSON.stringify(page.content)}
            </div>
        </>
    )
}