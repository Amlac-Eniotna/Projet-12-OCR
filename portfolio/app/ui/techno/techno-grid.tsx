import style from "@/app/ui/techno/animation-techno.module.css";
import { Techno } from "@/app/ui/works/techno-avatar";
const technoslist = [
  "redux",
  "react",
  "nextjs",
  "sass",
  "tailwind",
  "typescript",
];
const repeat = [0, 1, 2];

export function GridTechno() {
  function shuffle(array: string[]) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  let technos = technoslist;
  return (
    <div
      className={`relative flex h-[70vh] w-full flex-col items-center justify-evenly overflow-hidden rounded-3xl bg-wmauve-3 xl:h-[650px] xl:p-8 dark:bg-mauve-3`}
    >
      <div className="absolute z-30">mettre un hover</div>
      {repeat.map((n) => {
        shuffle(technos);
        return (
          <div
            key={n}
            className={`${n & 1 ? style.animation : style.animationb} relative flex flex-nowrap justify-between gap-4`}
            style={{
              animationDuration: `${Math.floor(Math.random() * 30) + 10}s`,
              animationDelay: `${Math.floor(Math.random() * 30) - 31}s`,
            }}
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
