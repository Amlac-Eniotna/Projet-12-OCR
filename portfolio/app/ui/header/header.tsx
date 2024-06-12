import Logo from "@/app/ui/logo-ac";
import NavLink from "@/app/ui/header/link-nav";
import { NavMobile } from "@/app/ui/header/mobile-nav";

const links = [
  { name: "Moi", href: "/#me" },
  { name: "Projets", href: "/#works" },
  { name: "Technos", href: "/#techno" },
  { name: "Contact", href: "/#contact" },
];

export default function Header() {
  return (
    <div className="fixed z-[60] flex w-full justify-center bg-wmauve-2 dark:bg-mauve-1">
      <header className="flex w-full max-w-screen-xl justify-between px-4 py-2 font-extralight xl:p-2 dark:font-thin">
        <Logo />
        <NavLink
          className="hidden xl:flex xl:items-center xl:justify-center"
          links={links}
        />
        <NavMobile
          className="flex items-center justify-center xl:hidden"
          links={links}
        />
      </header>
    </div>
  );
}
