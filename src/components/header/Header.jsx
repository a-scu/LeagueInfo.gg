"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

import Link from "next/link";

import FavoritesButton from "./FavoritesButton";
import ThemeSwitch from "@/app/ThemeSwitch";
import RegionButton from "./RegionButton";
import InputLabel from "./InputLabel";
import SearchButton from "./SearchButton";
import PatchNotesButton from "./PatchNotesButton";

export default function Header() {
  const { push } = useRouter();

  const [search, setSearch] = useState("");

  const handleOnChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    if (search.includes("#")) {
      var formattedSearch = search
        .replace("#", "-")
        .replace(/\s/g, "")
        .toLowerCase();
      push(`/summoner/las/${formattedSearch}`);
    } else {
      push(`/summoner/las/${search.replace(/\s/g, "").toLowerCase()}`);
    }
  };

  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <header className="flex flex-col bg-db-500">
      <div className="flex items-center justify-between w-full p-2 bg-db-100">
        <span className="text-xs text-lg-500 dark:text-dg-500">
          Work in progress...
        </span>

        <div className="flex items-center gap-4">
          <FavoritesButton />
          <ThemeSwitch theme={theme} handleTheme={handleTheme} />
        </div>
      </div>

      <div className="w-full p-2">
        <div className="flex flex-col items-center w-full max-w-screen-md gap-2 mx-auto">
          <div className="flex flex-col gap-0.5">
            <img
              src="https://meta-static.op.gg/logo/image/ddac05b4e86440c3ef666a1bf5ec0326.png?image=q_auto,f_webp,w_392&v=1708681571653"
              alt=""
              className="object-contain h-24 max-sm:h-20"
            />
          </div>

          <div className="flex w-full h-8 overflow-hidden bg-white rounded">
            <RegionButton>LAS</RegionButton>

            <div className="relative flex items-center w-full">
              <input
                id="search"
                type="text"
                value={search}
                onChange={handleOnChange}
                className="w-full px-3 text-sm text-black bg-transparent"
              />

              {!search && <InputLabel />}
            </div>

            <SearchButton onClick={handleSearch} />
          </div>

          {/* <PatchNotesButton>14.4.1</PatchNotesButton> */}
        </div>
      </div>
    </header>
  );
}
