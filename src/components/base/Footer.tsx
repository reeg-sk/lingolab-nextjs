import Link from "next/link";
import StyleFooter from "../graphics/StyleFooter";
import Newsletter from "./Newsletter";
import Socials from "./Socials";

export default function Footer({
  footerLinks = [
    {
      title: "Všeobecné obchodné podmienky",
      url: "/legal/vseobecne-obchodne-podmienky",
    },
    { title: "Ochrana osobných údajov", url: "/legal/ochrana-osobnych udajov" },
  ],
  companyData = {
    name: "Lingolab s. r. o.",
    address: "Hlavná 3, 072 31 Košice",
    addressFounding: "Jahodová 13, 071 01 Michalovce",
    ico: "2909400990",
    icdph: "2909400990",
  },
}: {
  footerLinks?: { title: string; url: string }[];
  companyData?: {
    name: string;
    address: string;
    addressFounding: string;
    ico: string;
    icdph: string;
  };
}) {
  return (
    <footer className="relative isolate overflow-hidden bg-gray-800 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-2xl lg:max-w-7xl px-6 lg:px-8">
        <div className="mx-auto flex flex-col lg:flex-row max-w-2xl gap-x-8 gap-y-16 lg:max-w-none lg:items-end justify-between">
          <Newsletter />
          <div className="text-white w-full lg:w-fit max-w-xl lg:max-w-lg">
            <div>
              <p>{companyData.name}</p>
              <p>{companyData.address}</p>
              <p className="text-sm text-slate-200">
                {companyData.addressFounding}
              </p>
              <p className="mt-2">
                <span className="text-sm text-slate-300">IČO</span>{" "}
                {companyData.ico}
              </p>
              <p>
                <span className="text-sm text-slate-300">IČ DPH</span>{" "}
                {companyData.icdph}
              </p>
            </div>
            {footerLinks.map(({ title, url }) => (
                <Link key={url} href={url} className="block mt-3 text-slate-200 hover:text-white">
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
