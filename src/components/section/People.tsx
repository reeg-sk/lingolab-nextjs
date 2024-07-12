import { findFlagUrlByIso2Code } from "country-flags-svg";
import StylePeople from "../graphics/StylePeople";
import { IconUserCheck } from "@tabler/icons-react";

export default function People({
  people = [
    {
      name: "Leslie Alexander",
      teaching: { flag: "GB", language: "Angličtina" },
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Michael Foster",
      teaching: { flag: "GB", language: "Angličtina" },
      image:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Dries Vincent",
      teaching: { flag: "GB", language: "Angličtina" },
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
    },
    {
      name: "Lindsay Walton",
      teaching: { flag: "GB", language: "Angličtina" },
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Courtney Henry",
      teaching: { flag: "DE", language: "Nemčina" },
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Tom Cook",
      teaching: { flag: "DE", language: "Nemčina" },
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ],
}) {
  return (
    <section id="lektori">
      <div className="relative mx-auto grid max-w-2xl lg:max-w-7xl gap-x-8 gap-y-10 md:gap-y-20 px-4 pb-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Lektori, ktorých sa oplatí spoznať
          </h2>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 sm:gap-y-16 xl:col-span-2"
        >
          {people.map(({ name, teaching, image }) => (
            <li key={name}>
              <a
                href="/#"
                className="group flex items-center gap-x-6 group hover:bg-slate-50 rounded-full"
              >
                <img
                  className="h-16 w-16 md:h-24 md:w-24 rounded-full border-2 border-transparent group-hover:border-primary group-hover:transform group-hover:scale-105 transition-all duration-300"
                  src={image}
                  alt={name + " selfie"}
                />
                <div>
                  <h3 className="text-lg font-semibold leading-7 tracking-tight text-gray-900">
                    {name}
                  </h3>
                  <div className="flex gap-2 text-base leading-6 text-slate-700">
                    <img
                      src={findFlagUrlByIso2Code(teaching.flag)}
                      width={24}
                      alt={`Vlajka - ${teaching.language}`}
                    />
                    <p>{teaching.language}</p>
                  </div>
                </div>
                <p
                  className="opacity-90 md:opacity-0 transition-opacity delay-50 group-hover:opacity-90 flex w-12 h-12 rounded-full justify-center items-center bg-slate-100 ml-auto mr-4"
                  aria-hidden="true"
                >
                  →
                </p>
              </a>
            </li>
          ))}
        </ul>
        <div className="flex flex-col md:flex-row items-center gap-x-6 gap-y-2">
          <a
            href="/lektori"
            className="group w-full transition-all md:w-fit flex gap-2 items-center rounded-md border border-primary text-primary py-3 px-8 lg:px-5 text-sm font-semibold shadow-sm hover:bg-indigo-50"
          >
            <IconUserCheck />
            Je nás ešte viac
          </a>
          <a
            href="/lektori/nabor"
            className="w-full md:w-fit group text-sm font-semibold leading-6 border border-slate-500 py-3 px-8 lg:px-5 md:border-none rounded-lg text-slate-700 hover:text-slate-900"
          >
            Pridaj sa k nám
          </a>
        </div>

        <StylePeople />
      </div>
    </section>
  );
}
