import Heading from "@/components/base/Heading";
import StyleIndex from "@/components/graphics/StyleIndex";
import ClubCard from "@/components/util/ClubCard";
import CourseListing from "@/components/util/CourseListing";
import Details from "@/components/util/Details";
import LectureOffer from "@/components/util/LectureOffer";
import { getCoursesFaq, getLanguages } from "@/lib/records";
import { IconZoomQuestion } from "@tabler/icons-react";
import type { Metadata } from "next";
import Link from "next/link";

export const revalidate = 60

export const metadata: Metadata = {
  title: "Kurzy – LingoLab",
  description: "Prihlás sa na kurz a rozvíjaj svoj jazykový potenciál! Ponúkame individuálne, duo aj skupinové hodiny a prípravu na maturitu či certifikáty.",
};

export default async function Courses() {
  const languages = await getLanguages();
  const faq = await getCoursesFaq() as unknown as { questions: { q: string; a: string }[] };

  return (
    <div className="px-4">
      <StyleIndex />
      <section
        id="zoznam"
        className="relative container mx-auto max-w-7xl flex justify-center flex-col mb-12 md:mb-0"
      >
        <Heading>Dostupné kurzy</Heading>

        <div className="relative grid lg:lg:grid-cols-[minmax(540px,_1fr)_minmax(480px,520px)] gap-x-4">
          <div className="md:mb-12">
            {[...new Set(languages.map((language) => language.type))].map(
              (type) => (
                <CourseListing
                  key={type}
                  title={type}
                  courses={languages.filter(
                    (language) => language.type === type
                  )}
                />
              )
            )}
          </div>
          <div className="relative h-[calc(100%-6rem)]">
            <div className="sticky md:top-36 md:mt-12">
              <LectureOffer className="p-8 bg-slate-100 rounded-lg" />
              <Link
                href="#faq"
                className="group hidden lg:flex items-center gap-2 w-full mt-2 p-4 px-8 text-slate-700 border border-slate-300 rounded-lg hover:bg-slate-50 transition-all"
              >
                <IconZoomQuestion
                  size={20}
                  className="group-hover:-rotate-180 transition-transform delay-75"
                />
                Často kladené otázky
              </Link>
            </div>
          </div>
        </div>
      </section>
      <ClubCard />
      {faq.questions ? (
        <section
          id="faq"
          className="relative container mx-auto max-w-7xl flex justify-center flex-col mb-24 pt-32"
        >
          <div className="mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
              Často kladené otázky
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-4">
            <div>
              {faq.questions.splice(0, faq.questions.length / 2).map(({ q, a }, id) => (
                <Details key={q} isOpen={id === 0} question={q} answer={a} />
              ))}
            </div>
            <div>
              {faq.questions
                .splice(faq.questions.length / 2 - 1)
                .map(({ q, a }, id) => (
                  <Details key={q} isOpen={id === 0} question={q} answer={a} />
                ))}
            </div>
          </div>
        </section>
      ) : (
        <hr className="mb-24" />
      )}
    </div>
  );
}
