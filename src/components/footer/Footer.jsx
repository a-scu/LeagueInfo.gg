import Social from "./Social";
import Links from "./Links";

export default function Footer() {
  return (
    <div className="p-2 800:max-w-[768px] w-full 1126:max-w-[1096px] 800:mb-2 800:mx-auto">
      <div className="flex flex-col items-center justify-center w-full max-w-screen-md gap-4 mx-auto">
        <a href="/" className="font-medium text-lg text-white w-fit">
          LeagueInfo.gg
        </a>
        <Social />
        <Links />
        <span className="text-xs text-gray-6 mb-1">Made by Scu</span>
      </div>
    </div>
  );
}
