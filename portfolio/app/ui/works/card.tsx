"use client";

import Image from "next/image";
import { Arrow } from "@/app/ui/works/arrow";

const fetch = [
  {
    title: "titrea",
    description: "ablablabla",
    img: "/image.png",
    alt: "titre du site",
    techno: ["redux", "react", "next"],
    link: "#",
  },
  {
    title: "titreb",
    description: "bblablabla",
    img: "/image.png",
    alt: "titre du site",
    techno: ["redux", "react", "next"],
    link: "#",
  },
  {
    title: "titrec",
    description: "cblablabla",
    img: "/image.png",
    alt: "titre du site",
    techno: ["redux", "react", "next"],
    link: "#",
  },
];

function Card({
  title,
  description,
  techno,
  img,
  alt,
  link,
}: {
  title: string;
  description: string;
  techno: Array<string>;
  img: string;
  alt: string;
  link: string;
}) {
  return (
    <div className="relative mx-3 h-[650px] max-h-[80vh] w-full overflow-hidden rounded-3xl bg-mauve-3 object-cover xl:w-[1080px] xl:min-w-[1080px]">
      <Image
        src={img}
        alt={alt}
        fill={true}
        className="absolute object-cover xl:w-[1080px]"
      />
      <div className="absolute bottom-0 h-1/5 w-full bg-mauve-4 opacity-90">
        azerty
      </div>
    </div>
  );
}

export function Cards() {
  return (
    <div className="relative m-3 xl:m-0">
      <div className="absolute flex h-full w-full items-center justify-center">
        <div className="absolute flex h-full w-full items-center justify-between xl:max-w-[1080px]">
          <div className="relative z-10 m-24 hidden h-24 w-24 cursor-pointer items-center justify-center overflow-hidden rounded-full border-[1px] border-wmauve-7 xl:flex dark:border-mauve-7">
            <Arrow className="relative right-1 z-10 h-full min-w-48 rotate-180 bg-wmauve-4/30 p-5 transition-colors hover:bg-wmauve-6 dark:bg-mauve-4/30 dark:hover:bg-mauve-6" />
          </div>
          <div className="relative z-10 m-24 hidden h-24 w-24 cursor-pointer items-center justify-center overflow-hidden rounded-full border-[1px] border-wmauve-7 xl:flex dark:border-mauve-7">
            <Arrow className="relative left-1 z-10 h-full min-w-48 bg-wmauve-4/30 p-5 transition-colors hover:bg-wmauve-6 dark:bg-mauve-4/30 dark:hover:bg-mauve-6" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-8 overflow-hidden xl:flex-row">
        {fetch.map((dataCard) => {
          return (
            <Card
              key={dataCard.title}
              link={dataCard.link}
              title={dataCard.title}
              description={dataCard.description}
              techno={dataCard.techno}
              img={dataCard.img}
              alt={dataCard.alt}
            />
          );
        })}
      </div>
    </div>
  );
}
