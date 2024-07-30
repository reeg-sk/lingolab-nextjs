import { IconMail } from "@tabler/icons-react";
import { getImageUrl } from "@/data/siteMetadata";

export default function PersonFoundingLink({ person }) {
  return (
    <div className="flex gap-4 items-center rounded-full bg-slate-100 bg-opacity-35">
      <img
        src={getImageUrl(person.avatar, person.name)}
        alt={person.name + " avatar"}
        className="w-32 h-32 rounded-full"
      />
      <div>
        <h4 className="text-lg font-semibold leading-7 tracking-tight text-gray-900">
          {person.name}
        </h4>
        <p className="text-primary">{person.role}</p>
      </div>
      <a
        href={`mailto:${person.email}`}
        className="flex w-12 h-12 rounded-full justify-center items-center hover:bg-slate-200/80 bg-slate-100 transition-all ml-auto mr-4"
        aria-hidden="true"
      >
        <IconMail className="text-slate-400" />
      </a>
    </div>
  );
}
