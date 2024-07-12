import { IconCircleFilled } from "@tabler/icons-react";

export default function HeroVideo({ src }: { src: string }) {
  
  return (
    <div
      className="hidden opacity-90 lg:block overflow-hidden absolute top-0 xl:top-12 right-4 text-primary/80"
    >
      <video
        className="transition-all relative border-4 rounded-full object-cover w-72 h-72 xl:w-96 xl:h-96"
        src={src}
        autoPlay
        loop
        muted
        disablePictureInPicture
      />
      <IconCircleFilled className="absolute right-2 top-10" />
      <IconCircleFilled className="w-18 h-18 absolute left-0 bottom-10" />
      <IconCircleFilled className="w-12 h-12 absolute left-6 bottom-12" />
    </div>
  );
}
