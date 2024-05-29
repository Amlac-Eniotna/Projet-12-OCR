import Link from 'next/link';

const links = [
  { name: 'Moi', href: '#me' },
  { name: 'Projets', href: '#works' },
  { name: 'Technos', href: '#techno' },
  { name: 'Contact', href: '#contact' },
];

export default function NavLink() {
  return (
    <nav className="flex justify-center items-center">
      <ul className="list-none flex gap-6">
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
