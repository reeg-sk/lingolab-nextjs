import { Language } from "../interfaces";
import LanguageList from "./LanguageList";

export default function CourseListing({
  course,
}: {
  course: {
    title: string;
    list: Language[];
  };
}) {
  return (
    <div>
      <h2 className="text-2xl mb-4 font-semibold">
        {course.title}
      </h2>
      <div className="relative grid mb-12">
        <LanguageList languages={course.list} />
      </div>
    </div>
  );
}
