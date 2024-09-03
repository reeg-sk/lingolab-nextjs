import StyleIndex from "@/components/graphics/StyleIndex";
import { getImageUrl } from "@/data/siteMetadata";
import { getLecturer } from "@/lib/records";
import { notFound } from "next/navigation";
import Image from "next/image";
import { findFlagUrlByIso2Code } from "country-flags-svg";
import { IconLocation, IconMapPin } from "@tabler/icons-react";

async function getPage(slug) {
  try {
    const [id, ...rest] = slug.split("-");
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
    <div className="mt-0 px-4 mb-24">
      <StyleIndex />
      <section
        id="pribeh"
        className="relative container mx-auto max-w-7xl flex justify-center flex-col mb-12 md:mb-0"
      >
        <div className="relative">
          <div className="-z-10 absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
          <Image
            className="relative -bottom-10 left-4 rounded-full border-4 border-white"
            src={getImageUrl(lecturer.avatar, lecturer.name)}
            width={120}
            height={120}
            alt={lecturer.name}
          />
        </div>
        <div className="grid lg:grid-cols-[306px_minmax(640px,_1fr)] mt-2 gap-x-4 mx-4">
          <div className="grid gap-4">
            <h1 className="text-3xl mt-12 font-semibold sm:text-5xl sm:leading-[3.5rem] text-balance">
              {lecturer.name}
            </h1>
            <div className="flex gap-2 text-lg font-semibold leading-6 text-slate-700">
              <Image
                src={findFlagUrlByIso2Code(lecturer.languagecode)}
                width={24}
                height={24}
                alt={`Doučuje jazyk - ${lecturer.language}`}
              />
              <p>{lecturer.language}</p>
            </div>
            <p title="Lokalita" className="flex gap-2 text-xl font-light">
              <IconMapPin size={24} />
              Kosice, SK
            </p>
            <p className="font-light text-balance">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit qui est a facere laudantium eveniet culpa sed alias autem at sunt, quae dolorem reiciendis deserunt, eos magni magnam minima nobis.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
