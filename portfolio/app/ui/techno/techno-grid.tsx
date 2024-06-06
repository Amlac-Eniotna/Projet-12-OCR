import style from "@/app/ui/techno/animation-techno.module.css";
import { Techno } from "@/app/ui/works/techno-avatar";
const technos = ["redux", "react", "nextjs", "sass", "tailwind", "typescript"];
const repeat = [0, 1, 2];

export function GridTechno() {
  return (
    <div
      className={`relative flex h-[70vh] w-full flex-col items-center justify-evenly overflow-hidden rounded-3xl bg-wmauve-3 xl:h-[650px] xl:p-8 dark:bg-mauve-3`}
    >
      {repeat.map((n) => {
        return (
          <div
            key={n}
            className={`${n & 1 ? style.animation : style.animationb} relative flex flex-nowrap justify-between gap-4`}
          >
            {technos.map((techno) => {
              return (
                <Techno
                  className="size-24"
                  techno={techno}
                  key={techno + "0"}
                />
              );
            })}
            {technos.map((techno) => {
              return (
                <Techno
                  className="size-24"
                  techno={techno}
                  key={techno + "1"}
                />
              );
            })}
            {technos.map((techno) => {
              return (
                <Techno
                  className="size-24"
                  techno={techno}
                  key={techno + "2"}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
