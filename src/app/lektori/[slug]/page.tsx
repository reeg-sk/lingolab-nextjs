import StyleIndex from "@/components/graphics/StyleIndex";
import { getImageUrl } from "@/data/siteMetadata";
import { getLecturer } from "@/lib/records";
import { notFound } from "next/navigation";
import Image from "next/image";
import { findFlagUrlByIso2Code } from "country-flags-svg";
import { Josefin_Sans } from "next/font/google";
import Review from "@/components/util/Review";

export const revalidate = 60;

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
        <div className="grid lg:grid-cols-[406px_minmax(640px,_1fr)] mt-2 gap-x-4 mx-4">
          <div className="sticky flex flex-col gap-4 bg-white border rounded-lg p-8 w-full">
            <Image
              className="relative rounded-full border-4 border-white"
              src={getImageUrl(lecturer.avatar, lecturer.name)}
              width={120}
              height={120}
              alt={lecturer.name}
            />
            <h1 className="text-3xl mt-2 font-semibold sm:text-5xl sm:leading-[3.5rem] text-balance">
              {lecturer.name}
            </h1>
            <div className="flex gap-2 items-baseline text-lg font-semibold leading-6 text-slate-700">
              <Image
                src={findFlagUrlByIso2Code(
                  lecturer.languages[0].languages_slug.code
                )}
                width={24}
                height={24}
                alt={`Doučuje jazyk - ${lecturer.languages[0].languages_slug.name}`}
              />
              <p>{lecturer.languages[0].languages_slug.name}</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="gap-4 bg-white border rounded-lg p-8 w-full">
              <h2 className="text-2xl mt-2 font-semibold sm:leading-[3.5rem] text-balance">
                O mne
              </h2>
              <p className="text-balance mb-4">
                {lecturer.description || "Zatiaľ tu nič nie je."}
              </p>
              <ul className="flex flex-col md:flex-row gap-2">
                {lecturer.hobbies?.map(({ name, Icon }, index) => (
                  <li
                    key={index}
                    className="rounded-2xl border bg-slate-100 p-2 px-3"
                  >
                    <p>{name}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="gap-4 bg-white border rounded-lg p-8 w-full">
              <h2 className="text-2xl my-2 font-semibold sm:leading-[3.5rem] text-balance">
                Recenzie
              </h2>
              <div className="grid gap-1 text-balance mb-2">
                {lecturer.reviews == 0 ? (
                  <p>Lektor zatiaľ nemá žiadne recenzie.</p>
                ) : (
                  <>
                    {lecturer.reviews?.map(
                      ({ id, name, avatar, stars, content, date_created }) => (
                        <Review
                          key={id}
                          {...{ name, avatar, stars, content, date_created }}
                        />
                      )
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
