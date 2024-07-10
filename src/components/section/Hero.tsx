"use client";
import { IconBriefcaseFilled } from "@tabler/icons-react";
import { useState } from "react";
import { findFlagUrlByIso2Code } from "country-flags-svg";
import Link from "next/link";

type Language = {
  title: string;
  flag: string;
  price: number;
  mentors: Array<{
    fullName: string;
    image: string;
  }>;
};

export default function Hero({
  languages = [
    {
      title: "Angličtina",
      flag: "GB",
      price: 15,
      mentors: [
        {
          fullName: "Leslie Alexander",
          image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        {
          fullName: "Michael Foster",
          image:
            "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        {
          fullName: "Dries Vincent",
          image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
        },
        {
          fullName: "Lindsay Walton",
          image:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        }
      ],
    },
    {
      title: "Nemčina",
      flag: "DE",
      price: 20,
      mentors: [
        {
          fullName: "Courtney Henry",
          image:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      ],
    },
    {
      title: "Francúzština",
      flag: "FR",
      price: 25,
      mentors: [
        {
          fullName: "Dries Vincent",
          image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
        },
      ],
    },
    {
      title: "Španielčina",
      flag: "ES",
      price: 30,
      mentors: [
        {
          fullName: "Lindsay Walton",
          image:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      ],
    },
    {
      title: "Taliančina",
      flag: "IT",
      price: 35,
      mentors: [
        {
          fullName: "Michael Foster",
          image:
            "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      ],
    },
  ],
}) {
  const [activeHoverLanguage, setActiveHoverLanguage] =
    useState<Language | null>(null);

  return (
    <section
      id="hero"
      className="relative min-h-screen container mx-auto max-w-7xl flex justify-center flex-col"
    >
      <div className="mt-12 mb-16 lg:mb-32 m-4">
        <h1 className="text-3xl mb-12 font-extrabold sm:text-5xl sm:leading-[3.5rem] text-balance">
          Naučíme vás{" "}
          <span className="bg-gradient-to-r from-white to-indigo-300">
            nový jazyk
          </span>
          , aby ste sa vo svete nestratili
        </h1>
        <div className="flex flex-col md:flex-row gap-4 md:items-center">
          <Link
            href="/kurzy"
            className="flex items-center gap-2 rounded-lg text-sm font-semibold py-4 px-8 text-white transition-all duration-500 bg-gradient-to-tl from-indigo-500 via-indigo-400 to-indigo-600 bg-size-200 bg-pos-0 hover:bg-pos-100"
          >
            <IconBriefcaseFilled />
            Zobraziť ponuku
          </Link>
          <Link
            href="/lektori"
            className="text-slate-700 py-3 px-8 lg:px-5 border md:border-none rounded-lg hover:text-slate-900"
          >
            Vyhľadať lektora
          </Link>
        </div>
      </div>

      <div className="relative">
        <div className="flex justify-between items-center m-4">
          <h2 className="md:text-2xl text-balance">
            Ponúkame viac, ako <span className="text-primary">10 jazykov</span>
          </h2>
          <div className="hidden sm:block">
            {activeHoverLanguage && (
              <div className="flex gap-2 items-center">
                <img
                  src={findFlagUrlByIso2Code(activeHoverLanguage?.flag)}
                  width={24}
                  alt={`Kurz pre jazyk ${activeHoverLanguage?.title}`}
                />
                <span className="text-slate-700">
                  {activeHoverLanguage?.title}
                </span>
                <span>
                  – {activeHoverLanguage?.mentors.length} lektor
                  {activeHoverLanguage?.mentors.length > 1 ? "i" : ""}
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="relative grid sm:grid-cols-2 lg:grid-cols-3">
          {languages.map(({ title, flag, price, mentors }) => (
            <Link
              href="/kurzy"
              className="group relative p-6 py-8 border-separate border border-slate-100 transition-all hover:bg-slate-100 bg-white hover:z-10 hover:border-indigo-400 flex items-center justify-between"
              onMouseEnter={() =>
                setActiveHoverLanguage({ title, flag, mentors, price })
              }
            >
              <div>
                <div className="flex items-baseline gap-3">
                  <img
                    src={findFlagUrlByIso2Code(flag)}
                    width={32}
                    alt={`Vlajka - ${title}`}
                  />
                  <p className="text-lg font-semibold">{title}</p>
                </div>
                <div className="flex items-center">
                  <p className="text-slate-800">od {price} €</p>
                </div>
              </div>
              <div>
                <div className="flex -space-x-1 overflow-hidden">
                  {mentors.map(({ fullName, image }) => (
                    <img
                      key={fullName}
                      className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                      src={image}
                      alt={fullName + " selfie"}
                    />
                  ))}
                </div>
              </div>
            </Link>
          ))}
          <Link
            href="/kurzy"
            className="group p-6 py-8 border-separate border border-slate-200 bg-indigo-50 text-primary flex items-center hover:bg-indigo-100 hover:border-indigo-400"
            onMouseEnter={() => setActiveHoverLanguage(null)}
          >
            <p className="w-full">
              Zobraziť celú ponuku{" "}
              <span
                className="group-hover:ml-2 transition-all"
                aria-hidden="true"
              >
                →
              </span>
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}
