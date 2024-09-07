import Socials from "@/components/base/Socials";
import StyleIndex from "@/components/graphics/StyleIndex";
import StylePeople from "@/components/graphics/StylePeople";
import GridContainer from "@/components/util/GridContainer";
import { getGlobals } from "@/lib/records";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt – LingoLab",
  description: "Generated by create next app",
};

export default async function Contact() {
  const { address, phone, email } = await getGlobals();

  // TODO: Add directus db records

  const contactPersons = [
    {
      text: "Všeobecné",
      name: "LingoLab tím",
      email: "ahoj@lingolab.sk",
    },
    {
      text: "Marketing",
      name: "Radovan Kokoš",
      email: "radovan.kokos@lingolab.sk",
      phone: "+421 911 123 456",
    },
    {
      text: "Obchod",
      name: "Jana Kokošová",
      email: "jana.kokosova@lingolab.sk",
      phone: "+421 911 123 456",
    },
    {
      text: "Podpora",
      name: "Peter Kokoš",
      email: "peter.kokos@lingolab.sk",
      phone: "+421 911 123 456",
    },
    // {
    //   Icon: IconMapPins,
    //   content: address,
    //   text: "Adresa pobočky",
    // },
    // {
    //   Icon: IconPhone,
    //   content: phone.replace(/\d{3,4}?(?=...)/g, "$& "),
    //   url: `tel:${phone}`,
    //   text: "Telefónne číslo",
    // },
    // {
    //   Icon: IconMail,
    //   content: email,
    //   url: `mailto:${email}`,
    //   text: "Email",
    // },
  ];

  return (
    <div className="px-4 mb-24">
      <StyleIndex />
      <section
        id="kontakt"
        className="relative container mx-auto max-w-7xl flex justify-center flex-col mb-12 md:mb-0"
      >
        <div className="flex justify-between items-center gap-4 mt-8 mb-14">
          <h1 className="text-3xl font-extrabold sm:text-5xl sm:leading-[3.5rem] text-balance">
            Kontakt
          </h1>
        </div>
        <GridContainer
          title="Kontaktujte nás"
          description="Máte otázky alebo návrhy? Neváhajte nás kontaktovať. Radi vám pomôžeme."
        >
          <>
            {contactPersons.map(({ text, name, email, phone }, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 bg-gray-50/90 rounded-2xl py-12 px-10"
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
        <hr className="my-24 bg-gray-400" />
        <div className="relative">
          <StylePeople />
        </div>
        <GridContainer
          title="Miesta výučby"
          description="Doučovanie prebieha aj našej pobočke v Košiciach. Stačí si len vybrať."
        >
          <div className="bg-slate-200 col-span-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d168539.40049426706!2d21.07438873562737!3d48.697297326391464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ee01b67c6957b%3A0x400f7d1c6978bd0!2zS2_FoWljZQ!5e0!3m2!1sen!2ssk!4v1721051734873!5m2!1sen!2ssk"
              width="600"
              height="450"
              className="rounded-2xl w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </GridContainer>
        <hr className="mt-24 bg-gray-400" />
        <div id="socialne-siete" className="relative pt-24 pb-12">
          <h3 className="text-center text-3xl font-semibold my-8 mb-8 md:mb-16">
            Nájdete nás aj na sociálnych sieťach
          </h3>
          <Socials longName />
        </div>
      </section>
    </div>
  );
}
