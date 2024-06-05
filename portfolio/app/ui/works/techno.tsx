import Image from "next/image";

export function Techno({ techno }: { techno: string }) {
  return (
    <div className="flex h-14 w-14 items-center justify-center rounded-full border-[1px] border-wmauve-7 dark:border-mauve-7">
      <p>{techno}</p>
      {/* <Image /> */}
    </div>
  );
}
