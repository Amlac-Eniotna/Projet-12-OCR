import Picture from "@/app/ui/me/picture";
import MyName from "@/app/ui/me/my-name";
import { Cards } from "@/app/ui/works/card";
import { playfair } from "@/app/ui/fonts";

export default function Home() {
  return (
    <main>
      <section
        id="me"
        className="h-screen snap-start snap-always bg-wmauve-1 pt-20 lg:flex lg:items-center lg:pt-28 dark:bg-mauve-2"
      >
        <div className="mx-auto flex h-full w-auto max-w-7xl flex-col items-center justify-evenly px-3 lg:w-full lg:flex-row lg:justify-normal">
          <Picture className="mb-3 mt-8 w-2/3 max-w-[320px] lg:w-96" />
          <div className="flex flex-col justify-center lg:ml-24">
            <MyName className="mb-2" />
            <p className="text-justify text-base font-light lg:text-start lg:text-3xl">
              Je suis développeur front-end junior, formé chez OpenClassrooms.
              Passionné par la programmation, le design et les nouvelles
              technologies, je me suis orienté vers le langage JS.
            </p>
          </div>
        </div>
      </section>
      <section
        id="works"
        className="min-h-screen snap-start snap-always bg-wmauve-2 pt-20 lg:pt-28 dark:bg-mauve-1"
      >
        <div className="m-auto px-3 lg:max-w-7xl lg:px-0">
          <h2
            className={`mb-2 text-4xl text-wmauve-11 lg:text-8xl dark:text-mauve-11 ${playfair.className} w-40 border-b-2 border-wmauve-11 font-black dark:border-mauve-11`}
          >
            Works
          </h2>
          <div className="flex min-w-0 flex-col items-center justify-center gap-8 lg:flex-row">
            <Cards />
          </div>
        </div>
      </section>
    </main>
  );
}
