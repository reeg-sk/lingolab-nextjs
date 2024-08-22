import StyleIndex from "@/components/graphics/StyleIndex";
import { getLecturer } from "@/lib/records";
import { notFound } from "next/navigation";

async function getPage(slug) {
  try {
    const [id, ...rest] = slug.split('-');
    const page = await getLecturer(id);
    return page;
  } catch (error) {
    notFound();
  }
}

export async function generateMetadata({ params }) {
  const lecturer = await getPage(params.slug);

  return {
    title: `${lecturer.name} – LingoLab`,
    description: `${lecturer.bio}`,
  };
}

export default async function Lecturer({ params }) {
  const lecturer = await getPage(params.slug);

  return (
    <div className="mt-6 px-4 mb-24">
      <StyleIndex />
      <section
        id="pribeh"
        className="relative container mx-auto max-w-7xl flex justify-center flex-col mb-12 md:mb-0"
      >
        <h1 className="text-3xl mb-8 font-extrabold sm:text-5xl sm:leading-[3.5rem] text-balance">
          {/* <img src="/" alt="" /> */}
          {lecturer.name}
        </h1>
        <div className="grid lg:grid-cols-2 mt-2 gap-x-4"></div>
      </section>
    </div>
  );
}
