"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Logo from "../icons/Logo";
import { IconMenu } from "@tabler/icons-react";

export default function Header({
  navLinks = [
    { title: "Domov", url: "/" },
    { title: "Kurzy", url: "/kurzy" },
    { title: "O nás", url: "/o-nas" },
    { title: "Cenník", url: "/cennik" },
    { title: "Blog", url: "/blog" },
  ],
}: {
  navLinks?: Array<{ title: string; url: string }>;
}) {
  const pathname = usePathname();

  let [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <header className="fixed left-1/2 -translate-x-1/2 z-50 w-full flex-none text-sm font-semibold leading-6 text-slate-900 bg-white/75">
        <nav
          aria-label="Global"
          className="container mx-auto max-w-7xl max-w-container"
        >
          <div className="relative flex items-center justify-between py-4 xl:py-[2.125rem]">
            <Link
              className="px-4 text-lg flex items-center gap-3 text-slate-900"
              href="/"
            >
              <Logo />
              LingoLab
            </Link>
            <div
              className={`${
                navbarOpen
                  ? "flex border-b flex-col py-4 absolute top-20 bg-white w-full"
                  : "hidden"
              } lg:border-none lg:flex-row lg:py-0 lg:w-fit lg:bg-transparent lg:relative lg:top-0 ml-auto lg:flex lg:items-center lg:gap-3 px-4`}
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
              <div className="bg-primary lg:bg-transparent lg:rounded-none rounded-lg lg:flex lg:items-center lg:border-l lg:border-slate-900/15 lg:pl-8">
                <Link
                  href="/#"
                  className="block text-white p-4 lg:p-2 lg:text-slate-600 hover:text-slate-900"
                >
                  Kontakt
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div>
                <a
                  className="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-slate-900 text-white hover:bg-slate-700 -my-2.5 ml-8 transition-all"
                  href="https://klub.lingolab.sk/"
                  target="_blank"
                  rel="noopener"
                >
                  <span>
                    Lingo klub 
                    <span aria-hidden="true" className="hidden lg:inline-block ml-2">
                      →
                    </span>
                  </span>
                </a>
              </div>
              <button
                onClick={() => setNavbarOpen(!navbarOpen)}
                className="lg:hidden p-2 pr-4"
                aria-label="Otvoriť navigáciu"
              >
                <IconMenu />
              </button>
            </div>
          </div>
        </nav>
      </header>
      <div className="pb-32"></div>
    </>
  );
}
