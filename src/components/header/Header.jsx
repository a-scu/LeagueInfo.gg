"use client";

import { useEffect, useState, useRef } from "react";

import InputLabel from "./InputLabel";
import SearchButton from "./SearchButton";
import Regions from "./Regions";

import baron from "../../assets/images/baron.webp";
import Star from "../icons/Star";

import { $scrolled, setScrolled } from "@/js/store";
import { useStore } from "@nanostores/react";
import SearchSuggestions from "./SearchSuggestions";

export default function Header({ initialRegion }) {
  const scrolled = useStore($scrolled);

  const [region, setRegion] = useState(initialRegion);
  const [search, setSearch] = useState("");
  const [inputFocused, setInputFocused] = useState(false);

  const headerRef = useRef(null);
  const inputRef = useRef(null);

  const handleSearch = (e, search, region) => {
    e.preventDefault();
    if (!search) return;

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

    const getRegion = async () => {
      try {
        if (initialRegion) {
          localStorage.setItem("region", region);
        }

        const storedRegion = localStorage.getItem("region");
        console.log("Stored region:", storedRegion);

        if (storedRegion) {
          setRegion(storedRegion);
        } else {
          setRegion("LAS");
          localStorage.setItem("region", "LAS");
        }
      } catch (error) {
        console.log("Error fetching region:", error);
      }
    };

    getRegion();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setInputFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={`flex flex-col bg-blue shadow-md z-50 transition-all duration-300 ease-out ${
        scrolled ? "sticky top-0" : "h-auto"
      }`}
    >
      <div className={`w-full ${scrolled ? "py-1 px-2 max-400:px-1" : "p-2 max-400:p-1"}`}>
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
          <form
            ref={inputRef}
            onSubmit={(e) => handleSearch(e, search, region)}
            className="flex w-full h-9 rounded bg-gray-1 relative"
          >
            {/* Región */}
            <Regions region={region} setRegion={setRegion} />

            {/* Input de búsqueda */}
            <div className="relative justify-center flex items-center flex-1 overflow-visible">
              <input
                id="search"
                type="text"
                value={search}
                onChange={onChange}
                onFocus={() => setInputFocused(true)}
                autoComplete="off"
                className="w-full h-full px-3 text-sm text-transparent bg-transparent outline-none caret-blue"
              />

              {/* Placeholder dinámico */}
              <span className="absolute left-3 pointer-events-none truncate">
                <span className="text-sm text-white">{search.split("#")[0]}</span>
                {search && !search.includes("#") && (
                  <span className="ml-1 text-sm text-gray-5">+ #TAG</span>
                )}
                {search && search.includes("#") && (
                  <span className="text-sm text-emerald">#{search.split("#")[1]}</span>
                )}
              </span>

              {!search && <InputLabel />}

              {inputFocused && <SearchSuggestions handleSearch={handleSearch} />}
            </div>

            {/* Botón de búsqueda principal */}
            <SearchButton onClick={handleSearch} />
          </form>
        </div>
      </div>
    </header>
  );
}
