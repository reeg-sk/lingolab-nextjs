import { IconArrowRight } from "@tabler/icons-react";
import CourseClubStyle from "../graphics/CourseClubStyle";
import Image from "next/image";

export default function CourseClub() {
  return (
    <section
      id="lingoklub"
      className="relative container mx-auto max-w-7xl flex justify-center flex-col"
    >
      <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-12 lg:pt-0">
        <CourseClubStyle />
        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Pridaj sa k našej komunite{" "}
            <span className="text-indigo-400">Lingo klubu</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Pre všetkých nadšencov jazykov, ktorí chcú vylepšiť svoje jazykové
            schopnosti.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <a
              href="https://klub.lingolab.sk"
              className="flex gap-2 rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Viac informácií
              <IconArrowRight size={20} />
            </a>
          </div>
        </div>
        <div className="relative mt-16 h-80 lg:mt-8">
          <Image
            className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
            src="https://cdn.lingolab.sk/static/team.jpg"
            alt="Klub LingoLab"
            width="1824"
            height="1080"
          />
        </div>
      </div>
    </section>
  );
}
