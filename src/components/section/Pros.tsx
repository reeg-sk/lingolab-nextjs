import { IconBubbleFilled, IconClock12, IconWifi } from "@tabler/icons-react";

export default function Pros({
  prosItems = [
    {
      title: "Široká ponuka kurzov",
      description:
        "Môžete si vybrať z rôznych kurzov, ktoré vyhovujú vašim záujmom a kariérnym cieľom.",
      Icon: IconBubbleFilled,
    },
    {
      title: "Flexibilné hodiny",
      description:
        "Výučbu si môžete prispôsobiť podľa svojho časového harmonogramu.",
      Icon: IconClock12,
    },
    {
      title: "Hybridná výučba",
      description:
        "Prezenčne alebo online, nemáte sa čoho obávať už nezmeškate žiadnu hodinu.",
      Icon: IconWifi,
    },
  ],
}) {
  return (
    <section
      id="pros"
      className="mx-auto m-4 my-32 mb-24 md:mb-40 max-w-2xl lg:max-w-7xl"
    >
      <dl className="grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-16 m-4">
        {prosItems.map(({ title, description, Icon }, index) => (
          <div key={index} className="relative">
            <dt className="flex flex-col gap-3 font-semibold leading-7 text-gray-900">
              <div className="left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                <Icon className="text-white" />
              </div>
              <p>{title}</p>
            </dt>
            <dd className="mt-2 text-base leading-7 text-gray-600">
              {description}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
