import Image from "next/image";

export default function Logo() {
  return (
    <Image src="/logo.svg" alt="LingoLab logo" width={48} height={48} />
  );
}
