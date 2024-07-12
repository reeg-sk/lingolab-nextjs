"use client";
import { findFlagUrlByIso2Code } from "country-flags-svg";
import Link from "next/link";
import { Language } from "../interfaces";
import { IconCalendarCheck } from "@tabler/icons-react";

export default function LanguageList({
  languages = [],
  isHero = false,
  setActiveHoverLanguage,
}: {
  languages: Language[];
  isHero?: boolean;
  setActiveHoverLanguage?: any;
}) {
  return (
    <>
      {languages.map(({ title, flag, price, slug, mentors }) => (
        <Link
          key={title}
          href={`/kurzy/${slug}`}
          className={`group relative p-6 py-8 border-separate border border-slate-100 transition-all hover:bg-slate-100 bg-white hover:z-10 hover:border-indigo-400 grid grid-cols-2 ${
            !isHero ? "md:grid-cols-3" : ""
          } items-center md:justify-start`}
          onMouseEnter={() =>
            setActiveHoverLanguage
              ? setActiveHoverLanguage({ title, flag, mentors, price })
              : null
          }
        >
          <div>
            <div className="flex items-baseline gap-3">
              <img
                src={findFlagUrlByIso2Code(flag)}
                width={32}
                alt={`Kurz ${title}`}
              />
              <p className="text-lg font-semibold">{title}</p>
            </div>
            <div className="flex items-center">
              <p className="text-slate-800">od {price} €</p>
            </div>
          </div>

          <div className="justify-self-end">
            <div className="flex -space-x-1 overflow-hidden">
              {mentors.map(({ fullName, image }) => (
                <img
                  key={fullName}
                  className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                  src={image}
                  alt={fullName + " profilová fotka"}
                />
              ))}
            </div>
          </div>
          {!isHero && (
            <div className="hidden md:block justify-self-end">
              <p className="p-2 px-4 flex gap-2 items-center border border-primary rounded-lg text-primary hover:bg-indigo-100">
                <IconCalendarCheck />
                Rezervovať
              </p>
            </div>
          )}
        </Link>
      ))}
    </>
  );
}
