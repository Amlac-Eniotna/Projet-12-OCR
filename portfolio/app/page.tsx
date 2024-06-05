import Picture from "@/app/ui/me/picture";
import MyName from "@/app/ui/me/my-name";
import { Cards } from "@/app/ui/works/card";
import { playfair } from "@/app/ui/fonts";

export default function Home() {
  return (
    <main>
      <section
        id="me"
        className="h-screen snap-start snap-always bg-wmauve-1 pt-20 xl:flex xl:items-center xl:pt-28 dark:bg-mauve-2"
      >
        <div className="mx-auto flex h-full w-auto max-w-7xl flex-col items-center justify-evenly px-3 xl:w-full xl:flex-row xl:justify-normal">
          <Picture className="mb-3 mt-8 w-2/3 max-w-[320px] xl:w-96" />
          <div className="flex flex-col justify-center xl:ml-24">
            <MyName className="mb-2" />
            <p className="text-justify text-base font-light xl:text-start xl:text-3xl">
              Je suis développeur front-end junior, formé chez OpenClassrooms.
              Passionné par la programmation, le design et les nouvelles
              technologies, je me suis orienté vers le langage JS.
            </p>
          </div>
        </div>
      </section>
      <section
        id="works"
        className="min-h-screen snap-start snap-always bg-wmauve-2 pt-20 xl:pt-28 dark:bg-mauve-1"
      >
        <div className="m-auto px-3 xl:max-w-7xl xl:px-0">
          <h2
            className={`${playfair.className} mb-12 w-40 border-b-2 border-wmauve-11 text-4xl font-black text-wmauve-11 xl:w-96 xl:border-b-4 xl:text-8xl dark:border-mauve-11 dark:text-mauve-11`}
          >
            Works
          </h2>
        </div>
        <Cards />
      </section>
      <section
        id="techno"
        className="h-screen snap-start snap-always bg-wmauve-1 pt-20 xl:pt-28 dark:bg-mauve-2"
      >
        <div className="m-auto px-3 xl:max-w-7xl xl:px-0">
          <h2
            className={`${playfair.className} mb-12 w-40 border-b-2 border-wmauve-11 text-4xl font-black text-wmauve-11 xl:w-96 xl:border-b-4 xl:text-8xl dark:border-mauve-11 dark:text-mauve-11`}
          >
            Techno
          </h2>
        </div>
        <div className="m-auto px-3 xl:max-w-7xl xl:px-0">
          <p className="h-[650px] w-full rounded-3xl bg-slate-400">a</p>
        </div>
      </section>
    </main>
  );
}
