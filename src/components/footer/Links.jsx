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
        <a key={name} href={href} className="text-xs text-gray-6">
          {name}
        </a>
      ))}
    </div>
  );
}
