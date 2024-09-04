import DoodleSpin from "../graphics/DoodleSpin";
import LinkOffer from "../util/LinkOffer";

export default function CtaCall() {
  return (
    <section id="cta" className="relative my-12 mb-32">
      <div className="flex justify-center">
        <DoodleSpin />
      </div>
      <div className="mx-auto grid max-w-2xl lg:max-w-7xl gap-x-8 gap-y-10 md:gap-y-20 px-4">
        <div className="w-full text-center xl:col-span-2">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Tak čo, chceš sa naučiť nový jazyk?
          </h2>
          <div className="mt-12 flex justify-center">
            <LinkOffer />
          </div>
        </div>
      </div>
    </section>
  );
}
