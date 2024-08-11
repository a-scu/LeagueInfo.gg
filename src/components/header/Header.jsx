"use client";

import { useState, useEffect } from "react";

// import { $theme, setTheme } from "@/js/store";
// import { useStore } from "@nanostores/react";

import InputLabel from "./InputLabel";
// import ThemeSwitch from "./ThemeSwitch";
import RegionButton from "./RegionButton";
import SearchButton from "./SearchButton";

export default function Header() {
  // const navigate = useNavigate();

  // const theme = useStore($theme);

  // useEffect(() => {
  //   const theme = localStorage.getItem("theme");
  //   if (theme) setTheme(theme);
  // }, []);

  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.includes("#")) {
      const formattedSearch = search.replace("#", "-").replace(/\s/g, "").toLowerCase();
      // navigate(`/summoners/las/${formattedSearch}`);
    }
  };

  // const handleTheme = () => {
  //   theme === "light" ? setTheme("dark") : setTheme("light");
  // };

  return (
    <header className="flex flex-col bg-blue">
      <div className="w-full p-2">
        <div className="flex flex-col items-center w-full max-w-screen-md gap-2 mx-auto">
          <div className="flex flex-col gap-0.5">
            <img
              src="https://meta-static.op.gg/logo/image/ddac05b4e86440c3ef666a1bf5ec0326.png?image=q_auto,f_webp,w_392&v=1708681571653"
              alt=""
              className="object-contain h-24 max-sm:h-20"
            />
          </div>

          <form
            onSubmit={handleSearch}
            className="flex w-full h-8 overflow-hidden rounded bg-gray-1"
          >
            <RegionButton>LAS</RegionButton>

            <div className="relative flex items-center w-full">
              <input
                id="search"
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full h-full px-3 text-sm text-white bg-transparent outline-none"
              />

              {!search && <InputLabel />}
            </div>

            <SearchButton onClick={handleSearch} />
          </form>
        </div>
      </div>
    </header>
  );
}
