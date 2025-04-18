import { IconCalendarFilled } from "@tabler/icons-react";
import Link from "next/link";
import DoodleArrows from "../graphics/DoodleArrows";

export default function LectureOffer({
  isHero = false,
  className = "",
}: {
  isHero?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      {isHero && <DoodleArrows />}
      <h2
        className={`text-center md:text-left text-3xl font-bold tracking-tight text-slate-900 ${
          isHero ? "sm:text-4xl" : "sm:text-3xl"
        } text-balance`}
      >
        Úvodná konzultácia <span className="text-primary">zdarma</span> pre
        nových študentov
      </h2>
      <p className="text-center md:text-left text-balance mt-6 text-lg leading-8 text-slate-700 max-w-xl">
        Nie je problém si to vyskúšať. Zaregistrujte sa na ukážkovú hodinu
        a&nbsp;presvedčte sa sami. Naši lektori sú pripravení vám pomôcť
        s&nbsp;výberom úrovne.
      </p>
      <div className="mt-10 flex flex-col md:flex-row items-center gap-x-6 gap-y-2">
        <Link
          href="/uvodna-konzultacia"
          className={`w-full transition-all md:w-fit flex gap-2 items-center rounded-md border border-primary py-3 px-8 lg:px-5 text-sm font-semibold shadow-sm ${isHero ? "bg-primary text-white hover:bg-indigo-500" : "text-primary hover:bg-indigo-100"} justify-center md:justify-start`}
        >
          <IconCalendarFilled />
          Rezervovať
          {!isHero && (
            <span className="-mx-1 hidden md:inline">úvodnú</span>
          )}{" "}
          konzultáciu
        </Link>
        {isHero && (
          <Link
            href="/uvodna-konzultacia#faq"
            className="w-full md:w-fit group text-sm font-semibold leading-6 border border-slate-500 py-3 px-8 lg:px-5 md:border-none rounded-lg text-slate-700 hover:text-slate-900 text-center md:text-left"
          >
            Viac informácií
          </Link>
        )}
      </div>
    </div>
  );
}
