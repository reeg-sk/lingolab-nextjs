import Details from "../util/Details";
import Image from "next/image";

export default async function FreqQuestions({ questions }) {

  return (
    <section id="faq">
      <div className="relative mx-auto grid lg:grid-cols-2 items-center max-w-2xl lg:max-w-7xl gap-x-8 gap-y-10 md:gap-y-20 px-4 pb-24">
        <div className="overflow-hidden">
          <Image
            src="https://cdn.lingolab.sk/uploads/56dd341e-cedb-450b-be40-f83f9f58e8c5.jpg"
            alt="Ukážka odpovedí na otázky našimi lektormi"
            className="w-[48rem] object-[-11cm_0] md:object-center max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-mr-32 lg:-ml-96"
            width="2432"
            height="1442"
          />
        </div>
        <div>
          {questions.map(({ q, a }, id) => (
            <Details
              key={q}
              isOpen={id === 0}
              question={q}
              answer={a}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
