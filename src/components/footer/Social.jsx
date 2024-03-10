import Link from "next/link";

import GitHub from "../icons/GitHub";
import LinkedIn from "../icons/LinkedIn";
import Twitter from "../icons/Twitter";

const SOCIAL = [
  {
    name: "GitHub",
    href: "/",
    Icon: GitHub,
  },
  {
    name: "LinkedIn",
    href: "/",
    Icon: LinkedIn,
  },
  {
    name: "Twitter / X",
    href: "/",
    Icon: Twitter,
  },
];

export default function Social() {
  return (
    <div className="flex gap-8">
      {SOCIAL.map(({ name, href, Icon }) => (
        <Link
          key={name}
          href={href}
          className="flex items-center gap-1 text-xs text-lg-500 dark:text-dg-500"
        >
          <Icon className="size-4" /> {name}
        </Link>
      ))}
    </div>
  );
}
