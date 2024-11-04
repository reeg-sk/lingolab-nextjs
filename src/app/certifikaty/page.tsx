import Heading from "@/components/base/Heading";
import StyleIndex from "@/components/graphics/StyleIndex";
import CourseListing from "@/components/util/CourseListing";
import Details from "@/components/util/Details";
import LectureOffer from "@/components/util/LectureOffer";
import { getCertificates, getCoursesFaq } from "@/lib/records";
import { IconZoomQuestion } from "@tabler/icons-react";
import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 60

export const metadata: Metadata = {
  title: "Príprava na certifikáty – LingoLab",
  description: "",
};

export default async function Certificates() {
  const certificates = await getCertificates();
  const faq = await getCoursesFaq() as unknown as { certificates: { q: string; a: string }[] };

  return (
    <div className="px-4">
      <StyleIndex />
      <section
        id="certifikaty"
        className="relative container mx-auto max-w-7xl flex justify-center flex-col mb-12 md:mb-0"
      >
        <Heading>Príprava na certifikáty</Heading>

        <div className="relative grid lg:lg:grid-cols-[minmax(540px,_1fr)_minmax(480px,520px)] gap-x-4">
          <div className="md:mb-12">
            {[...new Set(certificates.map((cert) => cert.language))].map(
              (type) => (
                <CourseListing
                  key={type}
                  title={type}
                  courses={certificates.filter(
                    (language) => language.language === type
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
      {faq?.certificates && faq.certificates.length > 0 ? (
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
              {faq?.certificates.splice(0, faq?.certificates.length / 2).map(({ q, a }, id) => (
                <Details key={q} isOpen={id === 0} question={q} answer={a} />
              ))}
            </div>
            <div>
              {faq?.certificates
                .splice(faq?.certificates.length / 2 - 1)
                .map(({ q, a }, id) => (
                  <Details key={q} isOpen={id === 0} question={q} answer={a} />
                ))}
            </div>
          </div>
        </section>
      ) : (
        <hr className="border-transparent mb-24" />
      )}
    </div>
  );
}
