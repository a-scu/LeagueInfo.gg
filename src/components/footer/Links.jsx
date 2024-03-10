import Link from "next/link";

const LINKS = [
  {
    name: "About",
    href: "/",
  },
  {
    name: "Contact",
    href: "/",
  },
  {
    name: "Terms of Service",
    href: "/",
  },
];

export default function Links() {
  return (
    <div className="flex items-center gap-4">
      {LINKS.map(({ name, href }) => (
        <Link
          key={name}
          href={href}
          className="text-xs underline underline-offset-1 text-lg-500 dark:text-dg-500"
        >
          {name}
        </Link>
      ))}
    </div>
  );
}
