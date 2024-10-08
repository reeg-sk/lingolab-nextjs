import AboutStyle from "@/components/graphics/AboutStyle";
import StyleIndex from "@/components/graphics/StyleIndex";
import PersonFoundingLink from "@/components/util/PersonFoundingLink";
import PersonLink from "@/components/util/PersonLink";
import { getFoundingMembers, getLecturers } from "@/lib/records";
import { Metadata } from "next";
import Image from "next/image";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "O nás – LingoLab",
  description:
    "Sme tím mladých lektorov, ktorí s nadšením učia a motivujú. Ponúkame hodiny prispôsobené vašim potrebám, vrátane prípravy na Cambridge, TOEFL a AiLS.",
};

export default async function AboutUs() {
  const members = await getLecturers(100);
  const foundingMembers = await getFoundingMembers();

  return (
    <div className="px-4 mb-24">
      <StyleIndex />
      <section
        id="pribeh"
        className="relative container mx-auto max-w-7xl flex justify-center flex-col mb-12 md:mb-0"
      >
        <AboutStyle />
        <h1 className="mt-6 text-3xl mb-8 font-extrabold sm:text-5xl sm:leading-[3.5rem] text-balance">
          O nás
        </h1>
        <div className="grid lg:grid-cols-2 mt-2 gap-x-4">
          <div>
            <Image
              width={720}
              height={420}
              src="https://cdn.lingolab.sk/static/founders.jpg"
              alt="Zakladajúci členovia nášho tímu"
              className="rounded-lg"
            />
          </div>
          <div className="flex items-center p-4">
            <div className="flex flex-col gap-2 max-w-2xl text-balance">
              <h3 className="text-3xl font-semibold mb-2">Kto sme?</h3>
              <p className="leading-7 text-balance">
                Sme tím mladých Košických lektorov, ktorí s nadšením a odbornými
                certifikátmi vyučujú jazyky, ktoré sami milujú. Naša filozofia
                je jednoduchá – <b>kladieme dôraz na kvalitu a osobný prístup</b>,
                pretože veríme, že v dnešnom svete je jazyk tou pravou životnou
                školou. Sme tu, aby sme pomohli mladým ľuďom zdokonaliť sa v
                jazyku, a tiež starším otvoriť dvere do nových, dynamických
                prostredí alebo napredovať v kariére. S nami objavíte krásu
                učenia sa jazykov a získate nové možnosti!
              </p>
            </div>
          </div>
        </div>
        <div className="relative pt-12 md:pt-32">
          <h2 className="text-3xl mb-8 font-bold text-balance">
            Zakladajúci členovia
          </h2>
          <div className="grid lg:grid-cols-3 gap-x-8 gap-y-12">
            {foundingMembers.map((person) => (
              <PersonFoundingLink key={person.name} person={person} />
            ))}
          </div>
        </div>
      </section>
      <section
        id="lektori"
        className="relative container mx-auto max-w-7xl flex justify-center flex-col pt-12 md:pt-32"
      >
        <h2 className="text-3xl mb-8 font-bold text-balance">Naši lektori</h2>
        <div className="grid lg:grid-cols-3 gap-x-8 gap-y-12">
          {members.map((person) => (
            <PersonLink key={person.name} person={person} />
          ))}
        </div>
      </section>
    </div>
  );
}
