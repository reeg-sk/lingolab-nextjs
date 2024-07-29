import { getFaq } from "@/lib/records";
import Details from "../util/Details";


export default async function FreqQuestions() {
  const { questions } = await getFaq();

  return (
    <section id="faq">
      <div className="relative mx-auto grid lg:grid-cols-2 items-center max-w-2xl lg:max-w-7xl gap-x-8 gap-y-10 md:gap-y-20 px-4 pb-24">
        <div className="overflow-hidden">
          <img
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt="Ukážka odpovedí na otázky našimi lektormi"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-mr-32 lg:-ml-96"
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
