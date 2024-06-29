"use client";

import style from "@/app/ui/techno/animation-techno.module.css";
import { Techno } from "@/app/ui/works/techno-avatar";
import styled, { keyframes } from "styled-components";

const technos: string[] = require("@/public/technos.json").technos;
const technoslist: technosListType =
  require("@/public/technos.json").technoslist;
const repeat = [0, 1, 2, 3, 4];
const repeatListTechnos = [0, 1];

const defilement = keyframes`
from {
  right: ${((technos.length + 1) * 2 * 96 + 16 * technos.length) / 4}px;
}
to {
  right: -${((technos.length + 1) * 2 * 96 + 16 * technos.length) / 4}px;
}
`;

const AnimationDiv = styled.div`
  animation: ${defilement} linear infinite;
`;

export function GridTechno() {
  function shuffle(array: string[]) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  return (
    <div
      className={`relative flex h-[75vh] w-full flex-col items-center justify-evenly gap-4 overflow-hidden rounded-3xl bg-wmauve-3 xl:h-[650px] xl:p-8 dark:bg-mauve-3`}
    >
      <OverlayTechno />
      {repeat.map((n) => {
        shuffle(technos);
        return (
          <AnimationDiv
            key={n}
            className={`relative flex flex-nowrap justify-between gap-4`}
            style={{
              animationDuration: `${Math.floor(Math.random() * 30) + 10}s`,
              animationDelay: `${Math.floor(Math.random() * 30) - 31}s`,
              animationDirection: `${n & 1 ? "reverse" : null}`,
            }}
          >
            {repeatListTechnos.map(() =>
              technos.map((techno, i) => {
                return (
                  <Techno
                    className="size-24"
                    techno={techno}
                    key={techno + i}
                  />
                );
              }),
            )}
          </AnimationDiv>
        );
      })}
    </div>
  );
}

function OverlayTechno() {
  return (
    <div
      className={`${style.bghover} absolute z-30 flex h-full w-full items-center justify-center p-4 transition-all xl:text-2xl`}
    >
      <div className="flex flex-col divide-y divide-wmauve-12 xl:flex-row xl:divide-x xl:divide-y-0 dark:divide-mauve-12">
        {technoslist.map((list) => {
          return (
            <div key={list.zone} className="py-4 xl:px-12 xl:py-0">
              <h3 className="text-xl font-semibold xl:mb-2 xl:text-3xl">
                {list.zone} :
              </h3>
              <ul>
                {list.technos.map((techno) => {
                  return <li key={`${list.zone}_${techno}`}>{techno}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

type technosListType = {
  zone: string;
  technos: string[];
}[];
