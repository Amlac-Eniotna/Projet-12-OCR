import Picture from '@/app/ui/me/picture';
import MyName from '@/app/ui/me/my-name';

export default function Home() {
  return (
    <main>
      <section id="me" className="pt-28 bg-mauve-2 h-screen flex items-center">
        <div className="mx-auto w-full max-w-7xl flex flex-row">
          <Picture className="" />
          <div className="ml-24 flex flex-col justify-center">
            <MyName className="mb-2" />
            <p className="text-2xl font-light">Bla bla bla</p>
          </div>
        </div>
      </section>
    </main>
  );
}
