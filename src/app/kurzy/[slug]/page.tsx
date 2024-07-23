import StyleIndex from "@/components/graphics/StyleIndex";
import { findFlagUrlByIso2Code } from "country-flags-svg";

export default function CourseDetail() {
  return (
    <div className="px-4 mb-24">
      <StyleIndex />
      <section
        id="detail"
        className="relative container mx-auto max-w-7xl flex justify-center flex-col mb-12 md:mb-0"
      >
        <div className="bg-white md:border-y py-6 pl-4 flex flex-col md:flex-row gap-4 md:items-center justify-between">
          <div>
            <p className="text-xl">Doučovanie</p>
            <div className="flex items-baseline gap-3">
              <img
                src={findFlagUrlByIso2Code("gb")}
                width={42}
                alt={`Kurz Angličtina`}
              />
              <h1 className="text-4xl font-semibold">Angličtina</h1>
            </div>
          </div>
          <div className="flex gap-6 lg:gap-12 justify-start md:px-4">

          <div
            className="grid gap-2 items-center"
          >
            <p>Dĺžka hodiny</p>
            <p className="font-semibold text-base">60 minút</p>
          </div>
          <div
            className="grid gap-2 items-center"
          >
            <p>Cena</p>
            <p className="font-semibold text-base">15 €</p>
          </div>
          </div>
        </div>
        <div>
          <iframe
            width="100%"
            className="w-full h-[calc(100vh-18rem)]"
            src="https://lingolab.zohobookings.eu/portal-embed#/202597000000036054"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
