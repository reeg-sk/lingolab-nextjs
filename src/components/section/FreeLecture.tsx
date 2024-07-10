import Link from "next/link";
import StyleLecture from "../graphics/StyleLecture";
import { IconCalendarFilled } from "@tabler/icons-react";

export default function FreeLecture() {
  return (
    <section
      id="hodina-zdarma"
      className="relative container mx-auto md:mt-16 mt-16 xl:mt-0 mb-16 max-w-7xl flex justify-center flex-col p-4"
    >
      <div className="hidden lg:block">
        <StyleLecture />
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl text-balance">
            Ukážková hodina <span className="text-primary">zdarma</span>
            {" "}pre nových študentov
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
              Rezervovať hodinu
            </Link>
            <Link
              href="/rezervacia-hodiny#faq"
              className="w-full md:w-fit group text-sm font-semibold leading-6 border border-slate-500 py-3 px-8 lg:px-5 md:border-none rounded-lg text-slate-700 hover:text-slate-900"
            >
              Viac informácií
            </Link>
          </div>
        </div>
        <div className="overflow-hidden">
          <img
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width="2432"
            height="1442"
          />
        </div>
      </div>
    </section>
  );
}
