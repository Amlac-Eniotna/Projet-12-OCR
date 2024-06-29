import Image from "next/image";

export default function Picture({ className }: { className: string }) {
  return (
    <Image
      src="/me.jpg"
      sizes="(max-width: 320px) 200px,(max-width: 505px) 320px"
      width={480}
      height={480}
      className={`${className} rounded-full`}
      alt="Antoine Calma"
    />
  );
}
