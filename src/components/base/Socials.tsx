import { IconBrandFacebook, IconBrandInstagram, IconBrandX } from "@tabler/icons-react";

export default async function Socials() {
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
      name: "X",
      Icon: IconBrandX,
      link: "https://www.twitter.com",
    },
  ];

  return (
    <div className="flex gap-3 items-center justify-center">
      {socials.map(({ name, Icon, link }) => (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-300 hover:text-white"
          aria-label={name}
          title={name}
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}
