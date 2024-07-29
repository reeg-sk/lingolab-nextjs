import LanguageList from "./LanguageList";

export default function CourseListing({
  title,
  courses,
}) {
  return (
    <div>
      <h2 className="text-2xl mb-4 font-semibold">{title}</h2>
      <div className="relative grid mb-12">
        <LanguageList languages={courses} />
      </div>
    </div>
  );
}
