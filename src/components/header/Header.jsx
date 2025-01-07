"use client";

import { useEffect, useState, useRef } from "react";

import InputLabel from "./InputLabel";
import SearchButton from "./SearchButton";
import Regions from "./Regions";

import baron from "../../assets/images/baron.webp";
import Star from "../icons/Star";

export default function Header({ region }) {
  const [search, setSearch] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);

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

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const headerHeight = headerRef.current.offsetHeight;
        setScrolled(window.scrollY > headerHeight - 48); // Ajusta el umbral según sea necesario
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={`flex flex-col bg-blue shadow-md z-50 transition-all duration-300 ease-out ${
        scrolled ? "sticky top-0" : "h-auto"
      }`}
    >
      <div className={`w-full ${scrolled ? "p-1" : "p-2 max-400:p-1"}`}>
        <div
          className={`flex items-center relative w-full max-w-screen-md max-400:gap-1 gap-2 mx-auto transition-all duration-300 ease-out ${
            scrolled ? "flex-row" : "flex-col"
          }`}
        >
          {/* Imagen */}
          <img
            src={baron.src}
            alt=""
            className={`object-contain transition-all duration-300 ease-out ${
              scrolled ? "h-10" : "h-24 max-sm:h-20"
            }`}
          />

          {/* Formulario */}
          <form onSubmit={handleSearch} className="flex w-full h-9 rounded bg-gray-1">
            <Regions />

            <div className="relative justify-center flex items-center flex-1 overflow-hidden">
              <input
                id="search"
                type="text"
                value={search}
                onChange={onChange}
                className="w-full h-full px-3 text-sm text-transparent bg-transparent outline-none caret-blue"
              />

              <span className="absolute left-3 pointer-events-none truncate">
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
