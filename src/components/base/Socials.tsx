import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandX,
} from "@tabler/icons-react";

export default async function Socials({
  longName = false,
}: {
  longName?: boolean;
}) {
  const socials = [
    {
      name: "Facebook",
      Icon: IconBrandFacebook,
      link: "https://www.facebook.com",
    },
    {
      name: "Instagram",
      Icon: IconBrandInstagram,
      link: "https://www.instagram.com",
    },
    {
      name: "Twitter",
      Icon: IconBrandX,
      link: "https://www.twitter.com",
    },
  ];

  return (
    <div className="flex gap-3 items-center">
      {socials.map(({ name, Icon, link }) => (
        <a
          key={name}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`${longName ? 'text-slate-600 hover:text-slate-700 p-6 hover:bg-slate-100' : 'text-slate-300 hover:text-white'} flex flex-col md:flex-row gap-4 items-center rounded`}
          aria-label={name}
          title={name}
        >
          <Icon />
          {longName && <span>{name}</span>}
        </a>
      ))}
    </div>
  );
}
