import AboutStyle from "@/components/graphics/AboutStyle";
import StyleIndex from "@/components/graphics/StyleIndex";
import PersonFoundingLink from "@/components/util/PersonFoundingLink";
import PersonLink from "@/components/util/PersonLink";

export default function AboutUs({
  foundingMembers = [
    {
      name: "John Doe",
      role: "CEO",
      email: "john@doe.com",
      image:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Jane Smith",
      role: "CTO",
      email: "john@doe.com",
      image:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "John Doe",
      role: "CEO",
      email: "john@doe.com",
      image:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ],
  members = [
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
  ],
}: {
  foundingMembers: {
    name: string;
    role: string;
    image: string;
    email?: string;
  }[];
  members: {
    name: string;
    teaching: { flag: string; language: string };
    image: string;
  }[];
}) {
  return (
    <div className="px-4 mb-24">
      <StyleIndex />
      <section
        id="pribeh"
        className="relative container mx-auto max-w-7xl flex justify-center flex-col mb-12 md:mb-0"
      >
        <AboutStyle />
        <h1 className="text-3xl mb-8 font-extrabold sm:text-5xl sm:leading-[3.5rem] text-balance">
          O nás
        </h1>
        <div className="grid lg:grid-cols-2 mt-2 gap-x-4">
          <div>
            <img
              src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
              alt="Zakladajúci členovia nášho tímu"
              className="rounded-xl"
            />
          </div>
          <div className="flex items-center p-4">
            <div className="flex flex-col gap-2 max-w-2xl text-balance">
              <p className="text-lg">
                Sme tím aktívnych mladých lektorov z celého Slovenska, ktorí
                plynule ovládajú cudzie jazyky a chcú odovzdávať svoje vedomosti
                ďalej, pretože vedia, aké je to v dnešnom svete potrebné.
              </p>
              <p>
                Cestujeme, učíme seba aj vás a odovzdávame jazyky ďalej už viac
                ako 2 roky. Pravidelne sa náš tím rozrastá a pribúdajú nové
                posily.
              </p>
              <ol className="mt-4 relative border-s border-gray-200">
                <li className="ms-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-500">
                    August 2024
                  </time>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Začiatok našej cesty
                  </h3>
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="relative mt-12">
          <h2 className="text-3xl mb-8 font-bold text-balance">
            Zakladajúci členovia
          </h2>
          <div className="grid lg:grid-cols-3 gap-4">
            {foundingMembers.map((person) => (
              <PersonFoundingLink key={person.name} person={person} />
            ))}
          </div>
        </div>
      </section>
      <section
        id="lektori"
        className="relative container mx-auto max-w-7xl flex justify-center flex-col mt-12 md:mt-24"
      >
        <h2 className="text-3xl mb-8 font-bold text-balance">
          Úžastní mentori
        </h2>
        <div className="grid lg:grid-cols-3 gap-4">
          {members.map((person) => (
            <PersonLink key={person.name} person={person} />
          ))}
        </div>
      </section>
    </div>
  );
}
