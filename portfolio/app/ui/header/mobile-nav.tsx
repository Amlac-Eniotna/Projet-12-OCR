"use client";

import style from "@/app/ui/header/mobile-nav.module.css";
import Link from "next/link";
import { useState } from "react";
export function NavMobile({
  className,
  links,
}: {
  className: string;
  links: {
    name: string;
    href: string;
  }[];
}) {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <nav className={`${className}`}>
        <div className={`${style.menumobile} h-8`}>
          <label className="sr-only" htmlFor="menu">
            Menu
          </label>
          <input
            name="menu"
            id="menu"
            type="checkbox"
            checked={opened}
            onChange={() => setOpened(!opened)}
          />
          <span className="bg-wmauve-12 dark:bg-mauve-12"></span>
          <span className="bg-wmauve-12 dark:bg-mauve-12"></span>
          <span className="bg-wmauve-12 dark:bg-mauve-12"></span>
        </div>
      </nav>
      <div
        className={`${opened ? "min-h-dvh" : "min-h-0"} absolute left-0 w-full overflow-hidden bg-wmauve-2 px-4 transition-all dark:bg-mauve-1`}
      >
        <ul
          className={`absolute top-[80px] flex w-full list-none flex-col gap-6`}
        >
          {links.map((link) => {
            return (
              <li key={`${link.name}b`}>
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-5xl"
                  onClick={() => setOpened(false)}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
