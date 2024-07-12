"use client";
import { IconBriefcaseFilled } from "@tabler/icons-react";
import { useState } from "react";
import { findFlagUrlByIso2Code } from "country-flags-svg";
import Link from "next/link";

import HeroVideo from "../util/HeroVideo";
import { AnimatePresence, motion } from "framer-motion";
import { Language } from "../interfaces";
import LanguageList from "../util/LanguageList";

export default function Hero({
  languages = [
    {
      title: "Angličtina",
      flag: "GB",
      price: 15,
      slug: "anglictina",
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
        },
      ],
    },
    {
      title: "Nemčina",
      flag: "DE",
      price: 20,
      slug: "nemcina",
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
      slug: "francuzstina",
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
      slug: "spanielcina",
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
      slug: "taliancina",
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
      <HeroVideo src="/videos/promo-video.mp4" />
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
            <motion.span
              animate={{
                rotate: [0, 10, -10, 10, -10, 0],
              }}
            >
              <IconBriefcaseFilled />
            </motion.span>
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
            <AnimatePresence>
              {activeHoverLanguage && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: 20,
                  }}
                  className="flex gap-2 items-center"
                >
                  <motion.img
                    animate={{
                      rotate: [0, 10, -10, 10, -10, 0],
                    }}
                    exit={{ opacity: 0 }}
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
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        <div className="relative grid sm:grid-cols-2 lg:grid-cols-3">
          <LanguageList isHero languages={languages} setActiveHoverLanguage={setActiveHoverLanguage} />
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
