import Picture from "@/app/ui/me/picture";
import MyName from "@/app/ui/me/my-name";
import { Cards } from "@/app/ui/works/card";
import { playfair } from "@/app/ui/fonts";
// import { Game } from "@/app/ui/techno/game";
import { GridTechno } from "@/app/ui/techno/techno-grid";
import { Formular } from "@/app/ui/contact/formulaire";

export default function Home() {
  return (
    <main>
      <section
        id="me"
        className="min-h-dvh snap-start snap-always bg-wmauve-1 pt-20 xl:flex xl:items-center xl:pt-28 dark:bg-mauve-2"
      >
        <div className="mx-auto flex h-full w-auto max-w-7xl flex-col items-center justify-evenly px-3 xl:w-full xl:flex-row xl:justify-normal">
          <Picture className="mb-3 mt-8 w-2/3 max-w-[320px] xl:w-96" />
          <div className="flex flex-col justify-center xl:ml-24">
            <MyName className="mb-2" />
            <p className="text-justify text-base font-light xl:text-start xl:text-3xl">
              Je suis développeur front-end junior, formé chez OpenClassrooms.
              Passionné par la programmation, le design et les nouvelles
              technologies, je me suis orienté vers le langage JS. En dehors du
              développement, j'aime jouer du violon et dessiner.
            </p>
          </div>
        </div>
      </section>
      <section
        id="works"
        className="min-h-dvh snap-start snap-always bg-wmauve-2 pt-20 xl:pt-28 dark:bg-mauve-1"
      >
        <div className="m-auto xl:max-w-7xl xl:px-0">
          <div className="px-3">
            <h2
              className={`${playfair.className} mb-2 w-40 border-b-2 border-wmauve-11 text-4xl font-black text-wmauve-11 xl:mb-8 xl:w-96 xl:border-b-4 xl:text-8xl dark:border-mauve-11 dark:text-mauve-11`}
            >
              Works
            </h2>
          </div>
        </div>
        <Cards />
      </section>
      <section
        id="techno"
        className="min-h-dvh snap-start snap-always bg-wmauve-1 pt-20 xl:pt-28 dark:bg-mauve-2"
      >
        <div className="m-auto xl:max-w-7xl xl:px-0">
          <div className="mx-3">
            <h2
              className={`${playfair.className} mb-2 w-40 border-b-2 border-wmauve-11 text-4xl font-black text-wmauve-11 xl:mb-8 xl:w-96 xl:border-b-4 xl:text-8xl dark:border-mauve-11 dark:text-mauve-11`}
            >
              Techno
            </h2>
          </div>
        </div>
        <div className="m-auto xl:max-w-7xl xl:px-0">
          <div className="mx-3">
            {/* <Game /> */}
            <GridTechno />
          </div>
        </div>
      </section>
      <section
        id="contact"
        className="min-h-dvh snap-start snap-always bg-wmauve-2 dark:bg-mauve-1"
      >
        <div className="min-h-[75dvh] bg-wmauve-1 pt-20 xl:h-[75dvh] xl:pt-28 dark:bg-mauve-2">
          <div className="m-auto flex h-full flex-col xl:max-w-7xl">
            <div className="mx-3">
              <h2
                className={`${playfair.className} mb-2 w-40 border-b-2 border-wmauve-11 text-4xl font-black text-wmauve-11 xl:mb-8 xl:w-96 xl:border-b-4 xl:text-8xl dark:border-mauve-11 dark:text-mauve-11`}
              >
                Contact
              </h2>
            </div>
            <div className="relative mx-3 flex h-full flex-col">
              <Formular />
            </div>
          </div>
        </div>
        <footer className="flex max-h-[45dvh] snap-end snap-always flex-col items-center p-3 xl:h-[25dvh]">
          <p className="mb-6 mt-3">
            © Copyright 2024 | Antoine CALMA | Tous droits réservés.
          </p>
          <div>
            <h3 className="mb-1 text-xl font-semibold">Réseaux :</h3>
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/antoine-calma/"
                  target="_blank"
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a href="https://github.com/Amlac-Eniotna" target="_blank">
                  Github
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </section>
    </main>
  );
}
