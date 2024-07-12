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
      <h2 className="text-2xl mb-4 font-semibold underline decoration-primary">
        {course.title}
      </h2>
      <div className="relative grid gap-1 mb-12">
        <LanguageList languages={course.list} />
      </div>
    </div>
  );
}
