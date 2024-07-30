"use client";
import { findFlagUrlByIso2Code } from "country-flags-svg";
import Link from "next/link";
import { IconCalendarCheck } from "@tabler/icons-react";

export default function LanguageList({
  languages = [],
  isHero = false,
  setActiveHoverLanguage,
}: {
  languages: any[];
  isHero?: boolean;
  setActiveHoverLanguage?: any;
}) {
  return (
    <>
      {languages.map(({ code, name, slug, type, online, lecturers }, idx) => (
        <Link
          key={`${slug}-${type}-${idx}`}
          href={`/kurzy/${slug}`}
          className={`group relative p-6 py-8 border-separate border border-slate-100 transition-all hover:bg-slate-100 bg-white hover:z-10 hover:border-indigo-400 grid grid-cols-2 ${
            !isHero ? "md:grid-cols-3" : ""
          } items-center md:justify-start`}
          onMouseEnter={() =>
            setActiveHoverLanguage
              ? setActiveHoverLanguage({ code, name, lecturers, online })
              : null
          }
        >
          <div>
            <div className="flex items-baseline gap-3">
              <img
                src={findFlagUrlByIso2Code(code)}
                width={32}
                alt={`Kurz ${name}`}
              />
              <p className="text-lg font-semibold">{name}</p>
            </div>
            <div className="flex items-center">
              <p className="text-slate-800">od {online} €</p>
            </div>
          </div>

          <div className="justify-self-end">
            <div className="flex -space-x-1 overflow-hidden">
              {lecturers.map(({ lecturers_id }) => (
                <img
                  key={lecturers_id.name}
                  className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                  src={
                    lecturers_id.avatar
                      ? `/files/${lecturers_id.avatar}`
                      : `https://ui-avatars.com/api/?name=${lecturers_id.name}&background=random`
                  }
                  alt={lecturers_id.name + " profilová fotka"}
                />
              ))}
            </div>
          </div>
          {!isHero && (
            <div className="hidden md:block justify-self-end">
              <p className="p-2 px-4 flex gap-2 items-center border border-primary rounded-lg text-primary group-hover:bg-indigo-100">
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
