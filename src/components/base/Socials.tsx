import { getSocials } from "@/lib/records";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";

// TODO - Fix socials
export default async function Socials({
  longName = false,
}: {
  longName?: boolean;
}) {
  const { facebook, instagram, linkedin } = await getSocials();

  const socials = [
    {
      name: "Facebook",
      Icon: IconBrandFacebook,
      link: `https://www.facebook.com/${facebook}`,
    },
    {
      name: "Instagram",
      Icon: IconBrandInstagram,
      link: `https://www.instagram.com/${instagram}`,
    },
    {
      name: "Linkedin",
      Icon: IconBrandLinkedin,
      link: `https://www.linkedin.com/company/${linkedin}`,
    },
  ];

  return (
    <div className="flex md:gap-3 justify-evenly items-center">
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
          {longName && <span className="hidden md:block">{name}</span>}
        </a>
      ))}
    </div>
  );
}
