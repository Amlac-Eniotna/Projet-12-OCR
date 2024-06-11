"use client";

import Image from "next/image";
import { Arrow } from "@/app/ui/works/arrow";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Techno } from "@/app/ui/works/techno-avatar";

const fetch = [
  {
    title: "titrea",
    description: "ablablabla",
    img: "/image.png",
    alt: "titre du site",
    technos: ["redux", "react", "nextjs"],
    link: "#",
  },
  {
    title: "titreb",
    description: "bblablabla",
    img: "/image.png",
    alt: "titre du site",
    technos: ["redux", "react", "nextjs"],
    link: "#",
  },
  {
    title: "titrec",
    description: "cblablabla",
    img: "/image.png",
    alt: "titre du site",
    technos: ["redux", "react", "nextjs"],
    link: "#",
  },
];

function Card({
  title,
  description,
  technos,
  img,
  alt,
  link,
  position,
  id,
}: {
  title: string;
  description: string;
  technos: Array<string>;
  img: string;
  alt: string;
  link: string;
  position: string;
  id: number;
}) {
  return (
    <div
      className={`${position} card-movement relative mx-3 h-[650px] max-h-[80vh] w-full overflow-hidden rounded-3xl bg-mauve-3 object-cover xl:min-w-[1256px]`}
    >
      <Link href={link} className="absolute h-full w-full">
        <Image
          src={img}
          alt={alt}
          fill={true}
          className="absolute object-cover xl:w-[1080px]"
        />
      </Link>
      <div className="absolute bottom-0 flex h-1/4 w-full justify-between bg-wmauve-2 p-5 opacity-90 xl:p-5 dark:bg-mauve-4">
        <div className="">
          <h2 className="xl:text-5xl">{title} :</h2>
          <p className="xl:text-2xl">{description}</p>
        </div>
        <div
          className="grid grid-flow-row grid-cols-2 gap-3 xl:grid-cols-4 xl:grid-rows-2"
          dir="rtl"
        >
          {technos.map((techno) => {
            return (
              <Techno key={techno + id} techno={techno} className="size-14" />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function Cards() {
  const [selected, setSelected] = useState(1);
  const [position, setPosition] = useState("left-[0px]");
  useEffect(() => {
    switch (selected) {
      case 0:
        setPosition("xl:left-[1312px]");
        break;
      case 1:
        setPosition("xl:left-[0px]");
        break;
      case 2:
        setPosition("xl:left-[-1312px]");
        break;
    }
  }, [selected]);
  const clickHandler = (direction: number) => {
    setSelected(selected + direction);
    if (selected === 0 && direction === -1) {
      setSelected(2);
    } else if (selected === 2 && direction === 1) {
      setSelected(0);
    }
  };

  return (
    <div className="relative m-3 xl:m-0">
      <div className="absolute flex h-full w-full items-center justify-center">
        <div className="absolute flex h-full w-full items-center justify-between xl:max-w-[1280px]">
          <div
            onClick={() => clickHandler(-1)}
            className="relative z-10 m-24 hidden h-24 w-24 cursor-pointer items-center justify-center overflow-hidden rounded-full border-[1px] border-wmauve-7 xl:flex dark:border-mauve-7"
          >
            <Arrow className="relative right-1 z-10 h-full min-w-48 rotate-180 bg-wmauve-4/30 p-5 transition-colors hover:bg-wmauve-5 active:bg-wmauve-8 dark:bg-mauve-4/30 dark:hover:bg-mauve-6 dark:active:bg-mauve-8" />
          </div>
          <div
            onClick={() => clickHandler(1)}
            className="relative z-10 m-24 hidden h-24 w-24 cursor-pointer items-center justify-center overflow-hidden rounded-full border-[1px] border-wmauve-7 xl:flex dark:border-mauve-7"
          >
            <Arrow className="relative left-1 z-10 h-full min-w-48 bg-wmauve-4/30 p-5 transition-colors hover:bg-wmauve-5 active:bg-wmauve-8 dark:bg-mauve-4/30 dark:hover:bg-mauve-6 dark:active:bg-mauve-8" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-8 overflow-hidden xl:flex-row">
        {fetch.map((dataCard, i) => {
          return (
            <Card
              position={position}
              key={dataCard.title}
              link={dataCard.link}
              title={dataCard.title}
              description={dataCard.description}
              technos={dataCard.technos}
              img={dataCard.img}
              alt={dataCard.alt}
              id={i}
            />
          );
        })}
      </div>
    </div>
  );
}
