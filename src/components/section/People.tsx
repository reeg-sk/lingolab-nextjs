import StylePeople from "../graphics/StylePeople";
import { IconUserCheck } from "@tabler/icons-react";
import PersonLink from "../util/PersonLink";
import DoodleBothWays from "../graphics/DoodleBothWays";

export default async function People({ people }) {

  return (
    <section id="lektori">
      <div className="relative mx-auto grid max-w-2xl lg:max-w-7xl gap-x-8 gap-y-10 md:gap-y-20 px-4 pb-24">
        <DoodleBothWays />
        <div className="w-full xl:col-span-2">
          <h2 className="text-center md:text-left text-3xl sm:text-center font-bold tracking-tight text-gray-900 sm:text-4xl">
            Lektori, ktorých sa oplatí spoznať
          </h2>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 sm:gap-y-16 xl:col-span-2"
        >

          {people.map(person => (
            <li key={person.name}>
              <PersonLink person={person} />
            </li>
          ))}
        </ul>
        <div className="flex flex-col md:flex-row  justify-center items-center gap-x-6 gap-y-2 xl:col-span-2">
          <a
            href="/o-nas#lektori"
            className="group w-full transition-all md:w-fit flex gap-2 items-center rounded-md border border-primary text-white py-3 px-8 lg:px-5 text-sm font-semibold shadow-sm bg-primary hover:bg-indigo-500 justify-center md:justify-start"
          >
            <IconUserCheck />
            Zoznam lektorov
          </a>
          <a
            href="/kontakt?recruit"
            className="w-full md:w-fit group text-sm font-semibold leading-6 border border-slate-500 py-3 px-8 lg:px-5 md:border-none rounded-lg text-slate-700 hover:text-slate-900 text-center md:text-left"
          >
            Pridaj sa k nám
          </a>
        </div>

        <StylePeople />
      </div>
    </section>
  );
}
