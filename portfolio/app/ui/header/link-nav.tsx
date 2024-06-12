import Link from "next/link";

export default function NavLink({
  className,
  links,
}: {
  className: string;
  links: {
    name: string;
    href: string;
  }[];
}) {
  return (
    <nav className={`${className}`}>
      <ul className="flex list-none gap-6">
        {links.map((link) => {
          return (
            <li key={`${link.name}a`}>
              <Link key={link.name} href={link.href} className="text-5xl">
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
