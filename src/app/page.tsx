import StyleIndex from "@/components/graphics/StyleIndex";
import CtaCall from "@/components/section/CtaCall";
import FreeLecture from "@/components/section/FreeLecture";
import FreqQuestions from "@/components/section/FreqQuestion";
import Hero from "@/components/section/Hero";
import People from "@/components/section/People";
import Pros from "@/components/section/Pros";
import Reviews from "@/components/section/Reviews";
import { getFaq, getLanguages, getLecturers, getReviews } from "@/lib/records";

export default async function Home() {
  const languages = await getLanguages(5);
  const reviews = await getReviews();
  const people = await getLecturers();
  const { questions } = await getFaq();

  return (
    <>
      <StyleIndex />
      <Hero languages={languages} />
      <FreeLecture />
      <Pros />
      <People people={people} />
      <FreqQuestions questions={questions} />
      <Reviews reviews={reviews} />
      <CtaCall />
    </>
  );
}
