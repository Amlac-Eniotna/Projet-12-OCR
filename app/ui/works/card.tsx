"use client";

import { Arrow } from "@/app/ui/works/arrow";
import style from "@/app/ui/works/card.module.css";
import { Techno } from "@/app/ui/works/techno-avatar";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const fetch: {
  title: string;
  description: string;
  img: string;
  imgMobile: string;
  alt: string;
  technos: string[];
  github: string;
  link: string;
}[] = require("@/public/works.json").works;

function Card({
  title,
  description,
  technos,
  img,
  imgMobile,
  alt,
  link,
  position,
  github,
  id,
}: {
  title: string;
  description: string;
  technos: Array<string>;
  img: string;
  imgMobile: string;
  alt: string;
  link: string;
  position: string;
  github: string;
  id: number;
}) {
  return (
    <div
      className={`${position} card-movement relative mx-3 h-[690px] max-h-[82vh] w-full overflow-hidden rounded-3xl bg-wmauve-3 object-cover shadow-2xl xl:min-w-[1256px] dark:border-none dark:bg-mauve-3 dark:shadow-none`}
    >
      <Link target="_blank" href={link} className="absolute h-full w-full">
        <Image
          src={img}
          alt={alt}
          fill={true}
          className="absolute hidden object-cover object-top min-[850px]:block xl:w-[1080px]"
        />
        <Image
          src={imgMobile}
          alt={alt}
          fill={true}
          className="absolute object-cover object-top min-[850px]:hidden xl:w-[1080px]"
        />
      </Link>
      <div
        className={`${style.textshadow} absolute bottom-0 flex min-h-[25%] w-full justify-between gap-2 bg-wmauve-2 p-5 opacity-90 dark:bg-mauve-4`}
      >
        <div>
          <h2 className="text-lg font-medium sm:text-2xl xl:text-3xl">
            {title} :
          </h2>
          <p className="text-sm sm:text-base xl:text-xl">{description}</p>
        </div>
        <div>
          <div
            className="mb-2 grid min-w-max grid-flow-row grid-cols-2 gap-1 xl:mb-0 xl:grid-cols-4 xl:grid-rows-2 xl:gap-3"
            dir="rtl"
          >
            {technos.map((techno) => {
              return (
                <Techno
                  key={techno + id}
                  techno={techno}
                  className="size-9 sm:size-12"
                />
              );
            })}
          </div>
          <Link
            target="_blank"
            href={github}
            className="block w-full whitespace-nowrap text-right text-indigo-400 underline"
          >
            lien github
          </Link>
        </div>
      </div>
    </div>
  );
}

export function Cards() {
  const [selected, setSelected] = useState(0);
  const [position, setPosition] = useState("left-[656px]");
  useEffect(() => {
    switch (selected) {
      case 0:
        setPosition("xl:left-[656px]");
        break;
      case 1:
        setPosition("xl:left-[-656px]");
        break;
    }
  }, [selected]);
  const clickHandler = (direction: number) => {
    setSelected(selected + direction);
    if (selected === 0 && direction === -1) {
      setSelected(fetch.length - 1);
    } else if (selected === fetch.length - 1 && direction === 1) {
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
      <div className="flex flex-col items-center justify-center gap-8 overflow-x-clip xl:flex-row">
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
              imgMobile={dataCard.imgMobile}
              alt={dataCard.alt}
              github={dataCard.github}
              id={i}
            />
          );
        })}
      </div>
    </div>
  );
}
