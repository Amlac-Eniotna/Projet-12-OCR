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
const repeat = [0, 1, 2, 3, 4];
const repeatListTechnos = [0, 1, 2];

export function GridTechno() {
  function shuffle(array: string[]) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  let technos = technoslist;

  for (let i = 0; i < 3; i++) {}

  return (
    <div
      className={`relative flex h-[70vh] w-full flex-col items-center justify-evenly gap-4 overflow-hidden rounded-3xl bg-wmauve-3 xl:h-[650px] xl:p-8 dark:bg-mauve-3`}
    >
      <HoverTechno />
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
          </div>
        );
      })}
    </div>
  );
}

function HoverTechno() {
  return (
    <div
      className={`${style.bghover} absolute z-30 flex h-full w-full items-center justify-center p-4 transition-all xl:text-2xl`}
    >
      <div className="flex flex-col divide-y divide-wmauve-12 xl:flex-row xl:divide-x xl:divide-y-0 dark:divide-mauve-12">
        <div className="py-4 xl:px-12 xl:py-0">
          <h3 className="text-xl font-black xl:mb-2 xl:text-3xl">
            Front-end :
          </h3>
          <ul>
            <li>React</li>
            <li>Redux</li>
          </ul>
        </div>
        <div className="py-4 xl:px-12 xl:py-0">
          <h3 className="text-xl font-black xl:mb-2 xl:text-3xl">Back-end :</h3>
          <ul>
            <li>NextJS</li>
          </ul>
        </div>
        <div className="py-4 xl:px-12 xl:py-0">
          <h3 className="text-xl font-black xl:mb-2 xl:text-3xl">CSS :</h3>
          <ul>
            <li>Sass</li>
            <li>Tailwind</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
