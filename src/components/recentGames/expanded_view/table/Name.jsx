import Link from "next/link";

export default function Name({ name, tag, linkToProfile }) {
  return (
    <Link
      href={linkToProfile}
      className="flex-1 text-black truncate text-2xs sm:text-xs dark:text-white"
    >
      {name} <span className="text-lg-500 dark:text-dg-500">#{tag}</span>
    </Link>
  );
}
