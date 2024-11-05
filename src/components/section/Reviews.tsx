import StyleReviews from "../graphics/StyleReviews";
import { getReviews } from "@/lib/records";
import Review from "../util/Review";

export default async function Reviews({ reviews }) {
  return (
    <section id="recenzie" className="relative my-8">
      <StyleReviews />
      <div className="mx-auto grid max-w-2xl lg:max-w-7xl gap-x-8 gap-y-10 md:gap-y-20 px-4">
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
          className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:gap-y-16 xl:col-span-2"
        >
          {reviews.map(({ name, avatar, stars, content, date_created }) => (
            <li
              key={name}
              className="p-4 pt-6 bg-white bg-opacity-75 hover:bg-slate-50 hover:bg-opacity-50 rounded-lg transition-all"
            >
              <Review {...{ name, avatar, stars, content, date_created }} />
            </li>
          ))}
        </ul>
        {/* More reviews?  */}
      </div>
    </section>
  );
}
