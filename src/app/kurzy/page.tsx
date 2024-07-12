import StyleIndex from "@/components/graphics/StyleIndex";
import CourseListing from "@/components/util/CourseListing";
import LectureOffer from "@/components/util/LectureOffer";

export default function Courses({
  courses = {
    title: "Doučovanie",
    list: [
      {
        title: "Angličtina",
        flag: "GB",
        price: 15,
        slug: "anglictina",
        mentors: [
          {
            fullName: "Leslie Alexander",
            image:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          },
          {
            fullName: "Michael Foster",
            image:
              "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          },
          {
            fullName: "Dries Vincent",
            image:
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
          },
          {
            fullName: "Lindsay Walton",
            image:
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          },
        ],
      },
      {
        title: "Nemčina",
        flag: "DE",
        price: 20,
        slug: "nemcina",
        mentors: [
          {
            fullName: "Courtney Henry",
            image:
              "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          },
        ],
      },
      {
        title: "Francúzština",
        flag: "FR",
        price: 25,
        slug: "francuzstina",
        mentors: [
          {
            fullName: "Dries Vincent",
            image:
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
          },
        ],
      },
      {
        title: "Španielčina",
        flag: "ES",
        price: 30,
        slug: "spanielcina",
        mentors: [
          {
            fullName: "Lindsay Walton",
            image:
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          },
        ],
      },
      {
        title: "Taliančina",
        flag: "IT",
        price: 35,
        slug: "taliancina",
        mentors: [
          {
            fullName: "Michael Foster",
            image:
              "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          },
        ],
      },
    ],
  },
  preps = {
    title: "Príprava na maturitu",
    list: [
      {
        title: "Španielčina",
        flag: "ES",
        price: 30,
        slug: "spanielcina",
        mentors: [
          {
            fullName: "Lindsay Walton",
            image:
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          },
        ],
      },
      {
        title: "Taliančina",
        flag: "IT",
        price: 35,
        slug: "taliancina",
        mentors: [
          {
            fullName: "Michael Foster",
            image:
              "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          },
        ],
      },
    ],
  },
  groups = {
    title: "Skupinové rozhovory",
    list: [
      {
        title: "Španielčina",
        flag: "ES",
        price: 30,
        slug: "spanielcina",
        mentors: [
          {
            fullName: "Lindsay Walton",
            image:
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          },
        ],
      },
      {
        title: "Taliančina",
        flag: "IT",
        price: 35,
        slug: "taliancina",
        mentors: [
          {
            fullName: "Michael Foster",
            image:
              "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          },
        ],
      },
    ],
  },
}) {
  return (
    <div className="px-4">
      <StyleIndex />
      <section
        id="zoznam"
        className="relative container mx-auto max-w-7xl flex justify-center flex-col mb-12 md:mb-0"
      >
        <div className="mt-2">
          <h1 className="text-3xl mb-8 font-extrabold sm:text-5xl sm:leading-[3.5rem] text-balance">
            Dostupné kurzy
          </h1>
        </div>

        <div className="relative grid lg:lg:grid-cols-[minmax(640px,_1fr)_minmax(480px,520px)] gap-x-4">
          <div className="md:mb-12">
            <CourseListing course={courses} />
            <CourseListing course={preps} />
            <CourseListing course={groups} />
          </div>
          <div className="relative h-[calc(100%-6rem)]">
            <LectureOffer className="sticky md:top-36 md:mt-12 p-8 bg-slate-100 rounded-lg" />
          </div>
        </div>
      </section>
      {/* Contact form or a promo for a Lingo Lab */}
    </div>
  );
}
