"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Logo from "../icons/Logo";
import { IconMenu2 } from "@tabler/icons-react";
import { motion } from "framer-motion";

export default function Header({
  navLinks = [
    { title: "Domov", url: "/" },
    { title: "Kurzy", url: "/kurzy" },
    { title: "Certifikáty", url: "/certifikaty" },
    { title: "O nás", url: "/o-nas" },
    { title: "Kontakt", url: "/kontakt" },
  ],
}: {
  navLinks?: Array<{ title: string; url: string }>;
}) {
  const pathname = usePathname();
  useEffect(() => {
    setNavbarOpen(false);
  }, [pathname]);

  let [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <header
        className={`fixed left-1/2 -translate-x-1/2 z-50 w-full flex-none text-sm font-semibold leading-6 text-slate-900 bg-white/85 backdrop-blur-md border-b transition-all duration-300 ease-in-out border-slate-100`}
      >
        <nav
          aria-label="Global"
          className="container mx-auto max-w-7xl max-w-container"
        >
          <div className="relative flex items-center justify-between py-4 xl:py-[2.125rem]">
            <Link
              className="pl-4 text-lg flex items-center gap-3 text-slate-900"
              href="/"
            >
              <Logo />
              <span className="hidden sm:block">LingoLab</span>
            </Link>
            <motion.div
              className={`${
                navbarOpen
                  ? "flex border-b flex-col py-4 absolute top-20 bg-white backdrop-blur-xl w-full"
                  : "hidden"
              } lg:border-none lg:flex-row lg:py-0 lg:w-fit lg:bg-transparent lg:relative lg:top-0 ml-auto lg:flex lg:items-center lg:gap-3 px-4 lg:pr-0`}
            >
              {navLinks.map(({ title, url }) => (
                <Link
                  key={url}
                  href={url}
                  className={`p-4 border-t border-slate-100 lg:border-none block text-slate-600 hover:text-slate-900 ${
                    pathname === url ? "text-slate-900" : ""
                  }`}
                >
                  {title}
                </Link>
              ))}
            </motion.div>
            <div className="flex items-center gap-3 mr-3 lg:mr-0">
              {/* <div>
                <a
                  className="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-slate-600 text-white hover:bg-slate-700 -my-2.5 ml-4 transition-all lg:mr-4 xl:mr-0"
                  href="https://klub.lingolab.sk/"
                  target="_blank"
                  rel="noopener"
                >
                  <span>
                    Lingo&nbsp;klub
                    <span
                      aria-hidden="true"
                      className="hidden lg:inline-block ml-2"
                    >
                      →
                    </span>
                  </span>
                </a>
              </div> */}
              <button
                onClick={() => setNavbarOpen(!navbarOpen)}
                className="lg:hidden p-2 pr-4"
                aria-label="Otvoriť navigáciu"
              >
                <IconMenu2 />
              </button>
            </div>
          </div>
        </nav>
      </header>
      <div className="pb-24 lg:pb-32"></div>
    </>
  );
}
