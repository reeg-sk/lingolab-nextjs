import { IconStarFilled } from "@tabler/icons-react";
import StyleReviews from "../graphics/StyleReviews";

export default function Reviews({
  reviews = [
    {
      name: "John Doe",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae metus ac nunc tincidunt aliquet. Nulla facilisi. Fusce euismod, nisl ac tincidunt tincidunt, nunc nunc lacinia nunc, nec luctus nunc nisl id nunc.",
      date: "12. May 2021",
    },
    {
      name: "Jane Doe",
      image:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      rating: 4,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae metus ac nunc tincidunt aliquet. Nulla facilisi. Fusce euismod, nisl ac tincidunt tincidunt, nunc nunc lacinia nunc, nec luctus nunc nisl id nunc.",
      date: "15. May 2021",
    },
    {
      name: "John Smith",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
      rating: 3,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae metus ac nunc tincidunt aliquet. Nulla facilisi. Fusce euismod, nisl ac tincidunt tincidunt, nunc nunc lacinia nunc, nec luctus nunc nisl id nunc.",
      date: "18. May 2021",
    },
  ],
}) {
  return (
    <section id="recenzie" className="relative mb-8">
      <StyleReviews />
      <div className="mx-auto grid max-w-2xl lg:max-w-7xl gap-x-8 gap-y-10 md:gap-y-20 px-4 pb-24">
        <div className="w-full text-center xl:col-span-2">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Čo o nás hovoria naši študenti
          </h2>
          <p className="text-slate-700 mx-auto max-w-xl mt-3">
            Každý študent dostane po ukončení kurzu formulár, v ktorom môžu
            ohodnotiť kurz a aj svojho lektora. Čo sa im páčilo a čo sa dá
            zlepšiť.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 sm:gap-y-16 xl:col-span-2"
        >
          {reviews.map(({ name, image, rating, text, date }) => (
            <li
              key={name}
              className="p-4 py-6 bg-white bg-opacity-75 hover:bg-slate-50 hover:bg-opacity-50 rounded-lg transition-all"
            >
              <div className="flex items-center mb-4">
                <img
                  src={image}
                  alt="Avatar"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <h3 className="text-lg font-semibold">
                  <span>{name}</span>
                  <div className="flex gap-0 text-slate-500">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <IconStarFilled
                          key={i}
                          className={`h-5 w-5 ${
                            i < rating ? "text-yellow-400" : "text-slate-500"
                          }`}
                        />
                      ))}
                  </div>
                </h3>
                <p className="text-sm ml-auto text-slate-700 pr-2 md:pr-4">
                  {date}
                </p>
              </div>
              <p className="text-gray-600">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
