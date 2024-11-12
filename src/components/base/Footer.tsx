import Link from "next/link";
import StyleFooter from "../graphics/StyleFooter";
import Newsletter from "./Newsletter";
import Socials from "./Socials";
import { getGlobals } from "@/lib/records";

export default async function Footer() {
  const { footerLinks, name, address, addressFounding, ico, icdph } =
    await getGlobals();

  return (
    <footer className="relative isolate overflow-hidden bg-gray-800 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-2xl lg:max-w-7xl px-6 lg:px-8">
        <div className="mx-auto flex flex-col lg:flex-row max-w-2xl gap-x-8 gap-y-16 lg:max-w-none lg:items-end justify-between">
          <Newsletter />
          <div className="text-white w-full lg:w-fit max-w-xl lg:max-w-lg">
            <div>
              <p>{name}</p>
              <p>{address}</p>
              <p className="text-sm text-slate-200">{addressFounding}</p>
              <p className="mt-2">
                <span className="text-sm text-slate-300">IČO</span> {ico}
              </p>
              {icdph && (
                <p>
                  <span className="text-sm text-slate-300">IČ DPH</span> {icdph}
                </p>
              )}
            </div>
            {footerLinks.map(({ title, url }) => (
              <Link
                key={url}
                href={url}
                target="_blank"
                className="block mt-3 text-slate-200 hover:text-white"
              >
                {title}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row text-center gap-4 md:justify-between text-slate-200 mt-12 py-12 border-t border-gray-600 border-opacity-45">
          <p>Copyright &copy; lingolab.sk {new Date().getFullYear()}</p>
          <Socials />
        </div>
      </div>
      <StyleFooter />
    </footer>
  );
}
