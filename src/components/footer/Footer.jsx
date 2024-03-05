import Link from "next/link";

import Social from "./Social";
import Links from "./Links";

export default function Footer() {
  return (
    <div className="px-2 py-4 bg-white max-800:bg-white dark:bg-dg-0">
      <div className="flex flex-col max-w-screen-md gap-4 mx-auto">
        <Link href="/" className="font-medium text-black dark:text-white w-fit">
          LeagueInfo.gg
        </Link>
        <Social />
        <Links />
        <span className="text-xs text-lg-500 dark:text-dg-500">
          Made by Scu
        </span>
      </div>
    </div>
  );
}
