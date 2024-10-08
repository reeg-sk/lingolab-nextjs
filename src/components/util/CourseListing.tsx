import LanguageList from "./LanguageList";

export default function CourseListing({ title, courses }) {
  return (
    <div>
      <div className="md:flex gap-2 items-baseline mb-4">
        <h2 className="text-2xl font-semibold">{title}</h2>
        {title === "Doučovanie Duo" && <p className="text-slate-700">pre 2 osoby</p>}
        {title === "Doučovanie Uno" && <p className="text-slate-700">pre 1 osobu</p>}
      </div>
      <div className="relative grid mb-12">
        <LanguageList languages={courses} />
      </div>
    </div>
  );
}
