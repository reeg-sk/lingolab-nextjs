import Image from "next/image";
import StyleLecture from "../graphics/StyleLecture";
import LectureOffer from "../util/LectureOffer";

export default function FreeLecture() {
  return (
    <section
      id="uvodna-konzultacia"
      className="relative container mx-auto md:mt-16 mt-16 xl:mt-0 mb-16 max-w-7xl flex justify-center flex-col p-4"
    >
      <div className="hidden lg:block">
        <StyleLecture />
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
        <LectureOffer isHero className="relative" />
        <div className="overflow-hidden">
          <Image
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt="Ukážka doučovacej hodiny"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </section>
  );
}
