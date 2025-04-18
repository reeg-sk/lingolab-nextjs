import { findFlagUrlByIso2Code } from "country-flags-svg";
import { getImageUrl } from "@/data/siteMetadata";
import Link from "next/link";
import Image from "next/image";

export default function PersonLink({ person }) {
  return (
    <Link
      href={`/lektori/${person.id}-${person.slug}`}
      className="group flex items-center gap-x-6 group hover:bg-slate-50 rounded-full"
    >
      <Image
        width={96}
        height={96}
        quality={100}
        className="h-16 w-16 md:h-24 md:w-24 rounded-full border-2 border-transparent group-hover:border-primary group-hover:transform group-hover:scale-105 transition-all duration-300"
        src={getImageUrl(person.avatar, person.name)}
        loading="lazy"
        alt={person.name + " profilová fotka"}
      />
      <div>
        <h3 className="text-lg font-semibold leading-7 tracking-tight text-gray-900">
          {person.name}
        </h3>
        {person.languages.length > 0 && (
          <div className="flex gap-2 text-base leading-6 text-slate-700">
            <Image
              src={findFlagUrlByIso2Code(person.languages[0].languages_slug.code)}
              width={24}
              height={24}
              alt={`Doučuje jazyk - ${person.languages[0].languages_slug.name}`}
            />
            <p>{person.languages[0].languages_slug.name}</p>
          </div>
        )}
      </div>
      <p
        className="opacity-90 md:opacity-0 transition-opacity delay-50 group-hover:opacity-90 flex w-12 h-12 rounded-full justify-center items-center bg-slate-100 ml-auto mr-4"
        aria-hidden="true"
      >
        →
      </p>
    </Link>
  );
}
