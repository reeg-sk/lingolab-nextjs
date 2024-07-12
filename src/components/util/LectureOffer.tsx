import { IconCalendarFilled } from "@tabler/icons-react";
import Link from "next/link";

export default function LectureOffer({
  isHero = false,
  className = "",
}: {
  isHero?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <h2
        className={`text-3xl font-bold tracking-tight text-slate-900 ${
          isHero ? "sm:text-4xl" : "sm:text-3xl"
        } text-balance`}
      >
        Ukážková hodina <span className="text-primary">zdarma</span> pre nových
        študentov
      </h2>
      <p className="mt-6 text-lg leading-8 text-slate-700 max-w-xl">
        Nie je problém si to vyskúšať. Zaregistrujte sa na ukážkovú hodinu
        a&nbsp;presvedčte sa sami. Naši lektori sú pripravení vám pomôcť
        s&nbsp;výberom úrovne.
      </p>
      <div className="mt-10 flex flex-col md:flex-row items-center gap-x-6 gap-y-2">
        <Link
          href="/rezervacia-hodiny"
          className="w-full transition-all md:w-fit flex gap-2 items-center rounded-md border border-primary text-primary py-3 px-8 lg:px-5 text-sm font-semibold shadow-sm hover:bg-indigo-50"
        >
          <IconCalendarFilled />
          Rezervovať
          {!isHero && (
            <span className="-mx-1 hidden md:inline">ukážkovú</span>
          )}{" "}
          hodinu
        </Link>
        {isHero && (
          <Link
            href="/rezervacia-hodiny#faq"
            className="w-full md:w-fit group text-sm font-semibold leading-6 border border-slate-500 py-3 px-8 lg:px-5 md:border-none rounded-lg text-slate-700 hover:text-slate-900"
          >
            Viac informácií
          </Link>
        )}
      </div>
    </div>
  );
}
