import Heading from "@/components/base/Heading";
import StyleIndex from "@/components/graphics/StyleIndex";
import { Metadata } from "next";

export const revalidate = 60

export const metadata: Metadata = {
  title: "Úvodná konzultácia zdarma – LingoLab",
  description: "Úvodná konzultácia je čas venovaný nastaveniu a prispôsobeniu učebného plánu pre študenta,túto hodinu si každý môže rezervovať zadarmo bez viazania.",
};

export default function Reservation() {
  return (
    <div className="px-4">
      <StyleIndex />
      <section
        id="ponuka"
        className="relative container mx-auto max-w-7xl flex justify-center flex-col mb-12 md:mb-0"
      >
        <Heading>
          Úvodná konzultácia 
        </Heading>
      </section>
    </div>
  );
}

