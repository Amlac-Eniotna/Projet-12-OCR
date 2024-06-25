import Image from "next/image";

export function Arrow({ className }: { className?: string }) {
  return (
    <Image
      src="/arrow.svg"
      width={30}
      height={30}
      alt="arrow"
      className={className}
    />
  );
}
