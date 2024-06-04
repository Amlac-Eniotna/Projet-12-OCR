import Logo from "@/app/ui/logo-ac";
import NavLink from "@/app/ui/header/link-nav";

export default function Header() {
  return (
    <div className="fixed z-10 flex w-full justify-center bg-wmauve-2 dark:bg-mauve-1">
      <header className="flex w-full max-w-screen-xl justify-between p-2 font-thin">
        <Logo />
        <NavLink className="hidden xl:flex xl:items-center xl:justify-center" />
      </header>
    </div>
  );
}
