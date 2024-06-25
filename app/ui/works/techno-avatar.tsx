import Image from "next/image";

export function Techno({
  techno,
  className,
}: {
  techno: string;
  className?: string;
}) {
  return (
    <div
      className={`${className} relative flex items-center justify-center rounded-full border-[1px] border-wmauve-7 bg-wmauve-5 dark:border-mauve-7 dark:bg-mauve-5`}
    >
      <Image
        fill={true}
        src={`/techno/${techno}.svg`}
        alt={techno}
        className="p-2"
      />
    </div>
  );
}
