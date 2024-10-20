import StyleIndex from "@/components/graphics/StyleIndex";
import { getLatestPosts } from "@/lib/records";
import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 60

export const metadata: Metadata = {
  title: "Blog – LingoLab",
  description: "",
};
export default async function Blog() {
  const latestPosts = await getLatestPosts();

  return (
    <div className="px-4 mb-24">
      <StyleIndex />
      <section
        id="blog"
        className="relative container mx-auto max-w-7xl flex justify-center flex-col mb-12 md:mb-0"
      >
        {latestPosts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="bg-white md:border-y py-6 pl-4 flex flex-col md:flex-row gap-4 md:items-center justify-between"
          >
            <div>
              <p className="text-xl">{post.title}</p>
              <div className="flex items-baseline gap-3">
                <h1 className="text-4xl font-semibold">{post.description}</h1>
              </div>
            </div>
            <div className="flex gap-6 lg:gap-12 justify-start md:px-4">
              <div className="grid gap-2 items-center">
                <p>{new Intl.DateTimeFormat("sk").format(new Date(post.date_created))}</p>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
