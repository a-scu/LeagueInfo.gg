"use client";

import { useState } from "react";

import InputLabel from "./InputLabel";
import SearchButton from "./SearchButton";
import Regions from "./Regions";

import baron from "../../assets/images/baron.webp";

// Arreglar todo lo de la region

export default function Header({ region }) {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.includes("#")) {
      const formattedSearch = search.replace("#", "-").replace(/\s/g, "").toLowerCase();
      window.location.href = `/summoners/${region}/${formattedSearch}`;
    }
  };

  const onChange = (e) => {
    let newValue = e.target.value;

    if (newValue.length < 4 && newValue.slice(-1) === "#") return;

    if (!search && newValue === " ") return;

    if (newValue.includes("#")) {
      if (newValue.slice(-1) === " ") return;
      if (newValue.split("#").length > 2) return;

      if (newValue.split("#")[1].length === 6) return;
    } else {
      if (search.length < newValue.length && newValue.length === 16)
        newValue = newValue.slice(0, 16) + " #";
    }

    if (newValue.includes("#") && !newValue.includes(" #")) {
      newValue = newValue.replace("#", " #");
    }

    newValue = newValue.replace(/\s{2,}/g, " ");

    setSearch(newValue);
  };

  // 1234567890abcde

  return (
    <header className="flex flex-col bg-blue">
      <div className="w-full p-2">
        <div className="flex flex-col items-center w-full max-w-screen-md gap-2 mx-auto">
          <div className="flex flex-col gap-0.5">
            <img src={baron.src} alt="" className="object-contain h-24 max-sm:h-20" />
          </div>

          <form onSubmit={handleSearch} className="flex w-full h-8 rounded bg-gray-1">
            <Regions />

            <div className="relative justify-center flex items-center w-full">
              <input
                id="search"
                type="text"
                value={search}
                onChange={onChange}
                className="w-full h-full px-3 text-sm text-transparent bg-transparent outline-none caret-blue"
              />

              <span className="absolute left-3 pointer-events-none">
                <span className="text-sm text-white">{search.split("#")[0]}</span>
                {search && !search.includes("#") && (
                  <span className="ml-1 text-sm text-gray-5">+ #TAG</span>
                )}
                {search && search.includes("#") && (
                  <span className="text-sm text-emerald">
                    {" "}
                    #{search.includes("#") ? search.split("#")[1] : ""}{" "}
                  </span>
                )}
              </span>

              {!search && <InputLabel />}
            </div>

            <SearchButton onClick={handleSearch} />
          </form>
        </div>
      </div>
    </header>
  );
}
