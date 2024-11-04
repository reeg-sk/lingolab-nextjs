import { IconStarFilled } from "@tabler/icons-react";
import assetUrl, { getImageUrl } from "@/data/siteMetadata";
import Image from 'next/image';

export default function Review({ avatar, name, stars, date_created, content }) {
  return (
    <div className="mb-6 pb-6 border-b border-slate-100">
      <div className="flex items-center mb-4">
        <Image
          src={getImageUrl(avatar, name)}
          loading="lazy"
          alt="Avatar"
          className="w-12 h-12 rounded-full mr-4"
          width={64}
          height={64}
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
                    i < stars ? "text-yellow-400" : "text-slate-500"
                  }`}
                />
              ))}
          </div>
        </h3>
        <p className="text-sm ml-auto text-slate-700 pr-2 md:pr-4">
          {new Date(date_created).toLocaleDateString("sk-SK")}
        </p>
      </div>
      <p className="text-gray-600">{content}</p>
    </div>
  );
}
