import Logo from '@/app/ui/logo-ac';
import NavLink from '@/app/ui/header/link-nav';

export default function Header() {
  return (
    <div className="flex justify-center fixed bg-mauve-1 w-full z-10">
      <header className="font-thin flex justify-between max-w-screen-xl w-full p-2">
        <Logo />
        <NavLink className="hidden lg:flex lg:justify-center lg:items-center" />
      </header>
    </div>
  );
}
