import Heading from "@/components/base/Heading";
import Socials from "@/components/base/Socials";
import StyleIndex from "@/components/graphics/StyleIndex";
import StylePeople from "@/components/graphics/StylePeople";
import FloatingInput from "@/components/util/FloatingInput";
import FloatingTextarea from "@/components/util/FloatingTextarea";
import GridContainer from "@/components/util/GridContainer";
import { getGlobals } from "@/lib/records";
import { IconMessage } from "@tabler/icons-react";
import { Metadata } from "next";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Kontakt – LingoLab",
  description:
    "Máte otázky? Neváhajte nás kontaktovať! Sme tu pre vás. Ozvite sa cez formulár, e-mail alebo telefón, a radi vám pomôžeme s vašimi jazykovými potrebami.",
};

export default async function Contact({
  searchParams
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { address, phone, email } = await getGlobals();

  // TODO: Add directus db records

  const contactPersons = [
    {
      text: "Všeobecné",
      name: "Tím LingoLab",
      email: "ahoj@lingolab.sk",
    },
    {
      text: "Spolupráce",
      name: "Radovan Kokoš",
      email: "radovan.kokos@lingolab.sk",
      phone: "+421 940 221 621",
    },
    {
      text: "Nábor",
      name: "David Jacečko",
      email: "david.jacecko@lingolab.sk",
      phone: "+421 944 934 090",
    },
    {
      text: "Technické chyby a návrhy",
      name: "Andrej Kažmirský",
      email: "andrej@kazmirsky.com",
      // phone: "+421 911 123 456",
    },
  ];

  return (
    <div className="px-4 mb-24">
      <StyleIndex />
      <section
        id="kontakt"
        className="relative container mx-auto max-w-7xl flex justify-center flex-col mb-12 md:mb-0"
      >
        <Heading>Kontakt</Heading>
        <GridContainer
          title="Kontaktujte nás"
          description="Máte otázky alebo návrhy? Neváhajte nás kontaktovať. Radi vám pomôžeme."
        >
          <>
            {contactPersons.map(({ text, name, email, phone }, index) => (
              <div
                key={index}
                className={`${text == "Nábor" && searchParams.recruit == "" ? "border-2 border-green-400 animate-rotate-green-border " : ""}flex flex-col gap-4 bg-gray-50/90 rounded-2xl py-12 px-10`}
              >
                <div className="flex gap-2 mb-2">
                  <h3 className="text-lg font-semibold">{text}</h3>
                </div>
                {name && <p className="text-gray-700">{name}</p>}
                {email && (
                  <a
                    href={`mailto:${email}`}
                    className="font-medium text-primary hover:underline"
                  >
                    {email}
                  </a>
                )}
                {phone && (
                  <a
                    href={`tel:${phone.split(" ").join("")}`}
                    className="text-gray-700 hover:text-primary"
                  >
                    {phone}
                  </a>
                )}
              </div>
            ))}
          </>
        </GridContainer>
        <hr className="my-12 lg:my-24 bg-gray-50 lg:bg-gray-300" />
        <div className="relative">
          <StylePeople />
        </div>
        <GridContainer
          title="Miesta výučby"
          description="Doučovanie prebieha aj našej pobočke v Košiciach - Alžbetina 18/2."
        >
          <div className="bg-slate-200 col-span-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2632.23604875626!2d21.254694211942684!3d48.72008111031035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ee0655ce4d1d3%3A0xfec0ecb5d40eac1!2zQWzFvmJldGluYSAxOC8yLCAwNDAgMDEgS2_FoWljZQ!5e0!3m2!1sen!2ssk!4v1728379237730!5m2!1sen!2ssk"
              width="600"
              height="450"
              className="rounded-2xl w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </GridContainer>
        <hr className="my-12 lg:my-24 bg-gray-50 lg:bg-gray-300" />
        <div id="socialne-siete" className="relative pt-12 lg:pt-24 pb-12">
          <h3 className="text-center text-3xl font-semibold my-8 mb-8 md:mb-16">
            Nájdete nás aj na sociálnych sieťach
          </h3>
          <Socials longName />
        </div>
      </section>
    </div>
  );
}
