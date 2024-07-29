import StyleIndex from "@/components/graphics/StyleIndex";
import FreeLecture from "@/components/section/FreeLecture";
import FreqQuestions from "@/components/section/FreqQuestion";
import Hero from "@/components/section/Hero";
import People from "@/components/section/People";
import Pros from "@/components/section/Pros";
import Reviews from "@/components/section/Reviews";
import { getLanguages } from "@/lib/records";

export default async function Home() {
  const languages = await getLanguages(5);

  return (
    <>
      <StyleIndex />
      <Hero languages={languages} />
      <FreeLecture />
      <Pros />
      <People />
      <FreqQuestions />
      <Reviews />
    </>
  );
}
