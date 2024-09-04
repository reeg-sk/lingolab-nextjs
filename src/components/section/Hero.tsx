"use client";
import { IconBriefcaseFilled } from "@tabler/icons-react";
import { useRef, useState } from "react";
import { findFlagUrlByIso2Code } from "country-flags-svg";
import Link from "next/link";

import { AnimatePresence, motion } from "framer-motion";
import LanguageList from "../util/LanguageList";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import LinkOffer from "../util/LinkOffer";

export default function Hero({ languages }) {
  const [activeHoverLanguage, setActiveHoverLanguage] = useState<any>(null);

  const container = useRef(null);
  gsap.registerPlugin(useGSAP);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from("h1", {
        opacity: 0,
        y: 20,
        duration: 1,
      });

      tl.from(".gradient", {
        backgroundPosition: "-100px -100px",
        duration: 1,
        delay: -1,
      });

      tl.from(".offer", {
        opacity: 0,
        y: 60,
        duration: 1,
        delay: -1,
      });
    },
    { scope: container }
  );

  return (
    <section
      id="hero"
      ref={container}
      className="relative min-h-screen container mx-auto max-w-7xl flex justify-center flex-col"
    >
      {/* <HeroVideo src="/videos/promo-video.mp4" /> */}
      <div className="mt-12 mb-16 lg:mb-32 m-4">
        <h1 className="text-center md:text-left text-3xl mb-12 font-extrabold sm:text-5xl sm:leading-[3.5rem] text-balance">
          Naučíme vás{" "}
          <span className="gradient bg-gradient-to-r from-white to-indigo-300">
            nový jazyk
          </span>
          , aby ste sa vo svete nestratili
        </h1>
        <div className="flex flex-col md:flex-row gap-4 md:items-center">
          <LinkOffer />
          <Link
            href="/o-nas#lektori"
            className="text-slate-700 py-3 px-8 lg:px-5 border md:border-none rounded-lg hover:text-slate-900 text-center md:text-left"
          >
            Vyhľadať lektora
          </Link>
        </div>
      </div>

      <div className="relative">
        <div className="flex justify-between items-center m-4">
          <h2 className="md:text-2xl text-balance">Nami ponúkané jazyky</h2>
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
                    src={findFlagUrlByIso2Code(activeHoverLanguage?.code)}
                    width={24}
                    alt={`Kurz pre jazyk ${activeHoverLanguage?.name}`}
                  />
                  <span className="text-slate-700">
                    {activeHoverLanguage?.name}
                  </span>
                  <span>
                    – {activeHoverLanguage?.lecturers.length} lektor
                    {activeHoverLanguage?.lecturers.length > 1 ? "i" : ""}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        <div className="relative grid sm:grid-cols-2 lg:grid-cols-3">
          <LanguageList
            isHero
            languages={languages}
            setActiveHoverLanguage={setActiveHoverLanguage}
          />
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
