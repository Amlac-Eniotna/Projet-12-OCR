import Picture from '@/app/ui/me/picture';
import MyName from '@/app/ui/me/my-name';

export default function Home() {
  return (
    <main>
      <section
        id="me"
        className="pt-28 dark:bg-mauve-2 bg-wmauve-1 h-screen lg:flex lg:items-center"
      >
        <div className="mx-auto lg:w-full max-w-7xl flex flex-col lg:flex-row justify-center items-center lg:justify-normal w-auto px-3">
          <Picture className="mb-3 mt-8 w-2/3 lg:w-96" />
          <div className="lg:ml-24 flex flex-col justify-center">
            <MyName className="mb-2" />
            <p className="lg:text-3xl text-base font-light text-justify lg:text-start">
              Je suis développeur front-end junior, formé chez OpenClassrooms.
              Passionné par la programmation, le design et le web, je me suis
              orienté vers les technologies JS.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
