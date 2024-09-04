import AboutStyle from "@/components/graphics/AboutStyle";
import StyleIndex from "@/components/graphics/StyleIndex";
import { IconBuildingCommunity, IconClock, IconLabelImportant, IconLanguage } from "@tabler/icons-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nábor – LingoLab",
  description: "Stále hľadáme šikovných ľudí, ktorí by sa chceli stať súčasťou nášho tímu.",
};

export default async function Recruitment() {
  return (
    <div className="px-4 mb-24">
      <StyleIndex />
      <section
        id="pribeh"
        className="relative container mx-auto max-w-7xl flex justify-center flex-col mb-12 md:mb-0 text-center"
      >
        <AboutStyle />
        <h1 className="text-3xl mb-8 font-extrabold sm:text-5xl sm:leading-[3.5rem] text-balance">
          Nábor lektorov
        </h1>
        <div className="grid gap-x-4 text-xl text-balance">
          <p>
            Stále hľadáme šikovných ľudí, ktorí by sa chceli stať súčasťou nášho
            tímu.
          </p>
          <div className="my-12 mt-24 mx-auto max-w-6xl">
            <h3 className="font-semibold text-3xl mb-4">Koho hľadáme?</h3>
            <ul className="grid md:grid-cols-2 xl:grid-cols-4 gap-y-2 text-balance">
              <li className="flex items-center flex-col p-4 py-6 text-center">
                <IconLanguage className="text-primary w-8 h-8 mb-2 " />
                ovládaš cudzí jazyk na profesionálnej úrovni,
              </li>
              <li className="flex items-center flex-col p-4 py-6 text-center">
                <IconBuildingCommunity className="text-primary w-8 h-8 mb-2 " />
                vieš proaktívne komunikovať,
              </li>
              <li className="flex items-center flex-col p-4 py-6 text-center">
                <IconClock className="text-primary w-8 h-8 mb-2 " />
                máš dostatok času na prípravu a výučbu,
              </li>
              <li className="flex items-center flex-col p-4 py-6 text-center">
                <IconLabelImportant className="text-primary w-8 h-8 mb-2 " />
                chceš sa stále zlepšovať a naučiť niečo nové.
              </li>
            </ul>
          </div>
          <div className="my-12">
            <p className="text-md text-balance">Čakáme na teba! Tak neváhaj a napíš nám</p>
            <a
              href="mailto:nabor@lingolab.sk"
              className="mt-3 bg-primary rounded-md py-4 px-8 block text-white w-fit mx-auto"
            >
              nabor@lingolab.sk
            </a>
          </div>
          <div className="mt-12">
            <p>Napíš nám a my sa ti už ozveme.</p>
            <p className="text-slate-700">
              Určite sa nezabudni spomenúť svoje úspechy a skúsenosti.
            </p>
            <p className="text-2xl mt-6">Tešíme sa na teba!</p>

            <img src="/logo.svg" alt="Tím LingoLab" width={64} height={64} className="my-4 mx-auto" />
          </div>
        </div>
      </section>
    </div>
  );
}
