"use client";
import { findFlagUrlByIso2Code } from "country-flags-svg";
import Link from "next/link";
import { IconCalendarCheck } from "@tabler/icons-react";
import { getImageUrl } from "@/data/siteMetadata";
import Image from "next/image";

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
      {languages.map(
        (
          {
            code,
            name,
            slug,
            type,
            online,
            lecturers,
            price,
            num_courses,
            from,
            to,
          },
          idx
        ) => (
          <Link
            key={slug}
            href={`/kurzy/${slug}`}
            className={`group relative p-6 py-8 border-separate border border-slate-100 transition-all hover:bg-slate-100 bg-white hover:z-10 hover:border-indigo-400 grid grid-cols-2 ${
              !isHero ? "md:grid-cols-2" : ""
            } items-center md:justify-start`}
            onMouseEnter={() =>
              setActiveHoverLanguage
                ? setActiveHoverLanguage({ code, name, lecturers, online })
                : null
            }
          >
            <div>
              <div className="flex items-baseline gap-3">
                <Image
                  src={findFlagUrlByIso2Code(code)}
                  width={32}
                  height={32}
                  alt={`Kurz ${name}`}
                />
                <p className="flex gap-1 items-baseline text-lg font-semibold">
                  {name}{" "}
                  {isHero && (
                    <span className="text-sm font-normal">
                      {type.split(" ")[1]}
                    </span>
                  )}
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <p className="text-slate-800">
                  od {online || price * num_courses} €
                </p>
                {num_courses && (
                  <p className="font-semibold bg-indigo-200 py-1 p-2 text-xs rounded">
                    {num_courses} hodín
                  </p>
                )}
              </div>
            </div>
            {!isHero && (
              <div className="hidden md:block justify-self-end">
                <p
                  className={`p-2 px-4 flex gap-2 items-center border border-primary rounded-lg text-primary ${
                    isHero
                      ? "group-hover:bg-indigo-100"
                      : "group-hover:bg-indigo-700 group-hover:text-white"
                  }`}
                >
                  <IconCalendarCheck />
                  Rezervovať
                </p>
                <p className="text-center mt-2">
                  {from && to
                    ? `${new Intl.DateTimeFormat("default", {
                        month: "short",
                        day: "numeric",
                      }).format(new Date(from))} - ${new Intl.DateTimeFormat(
                        "default",
                        { month: "short", day: "numeric" }
                      ).format(new Date(to))}`
                    : ""}
                </p>
              </div>
            )}
          </Link>
        )
      )}
    </>
  );
}
