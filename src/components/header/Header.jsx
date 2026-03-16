"use client";

import { useEffect, useState, useRef } from "react";

import InputLabel from "./InputLabel";
import SearchButton from "./SearchButton";
import Regions from "./Regions";

import baron from "../../assets/images/baron.webp";

import { $scrolled, setScrolled } from "@/js/store";
import { useStore } from "@nanostores/react";
import SearchSuggestions from "./SearchSuggestions";

import Las from "../icons/regions/Las";
import Br from "../icons/regions/Br";
import Me from "../icons/regions/Me";
import Sea from "../icons/regions/Sea";
import Tr from "../icons/regions/Tr";
import Ru from "../icons/regions/Ru";
import Oce from "../icons/regions/Oce";
import Na from "../icons/regions/Na";
import Lan from "../icons/regions/Lan";
import Kr from "../icons/regions/Kr";
import Jp from "../icons/regions/Jp";
import Euw from "../icons/regions/Euw";
import Eun from "../icons/regions/Eun";
import Vn from "../icons/regions/Vn";
import Tw from "../icons/regions/Tw";

// const REGIONS = [
//   { id: "euw", name: "Europe West", Icon: Euw },
//   { id: "eun", name: "Europe Nordic & East", Icon: Eun },
//   { id: "sea", name: "South East Asia", Icon: Sea },
//   { id: "na", name: "North America", Icon: Na },
//   { id: "lan", name: "LAN", Icon: Lan },
//   { id: "las", name: "LAS", Icon: Las },
//   { id: "me", name: "Middle East", Icon: Me },
//   { id: "oce", name: "Oceania", Icon: Oce },
//   { id: "ru", name: "Russia", Icon: Ru },
//   { id: "jp", name: "Japan", Icon: Jp },
//   { id: "br", name: "Brazil", Icon: Br },
//   { id: "tr", name: "Turkey", Icon: Tr },
//   { id: "tw", name: "Taiwan", Icon: Tw },
//   { id: "kr", name: "Korea", Icon: Kr },
//   { id: "vn", name: "Vietnam", Icon: Vn },
// ];

const REGIONS = [
  { id: "kr", name: "Korea", Icon: Kr },
  { id: "euw", name: "Europe West", Icon: Euw },
  { id: "na", name: "North America", Icon: Na },
  { id: "vn", name: "Vietnam", Icon: Vn },
  { id: "br", name: "Brazil", Icon: Br },
  { id: "tr", name: "Turkey", Icon: Tr },
  { id: "lan", name: "LAN", Icon: Lan },
  { id: "las", name: "LAS", Icon: Las },
  { id: "tw", name: "Taiwan", Icon: Tw },
  { id: "eun", name: "Europe Nordic & East", Icon: Eun },
  { id: "sea", name: "South East Asia", Icon: Sea },
  { id: "jp", name: "Japan", Icon: Jp },
  { id: "ru", name: "Russia", Icon: Ru },
  { id: "me", name: "Middle East", Icon: Me },
  { id: "oce", name: "Oceania", Icon: Oce },
];

export default function Header({ initialRegion }) {
  const scrolled = useStore($scrolled);

  const [expanded, setExpanded] = useState(false);
  const [region, setRegion] = useState(initialRegion);
  const [search, setSearch] = useState("");
  const [inputFocused, setInputFocused] = useState(false);

  const headerRef = useRef(null);
  const inputRef = useRef(null);
  const inputRef2 = useRef(null);
  const dropdownRef = useRef(null);

  const handleSearch = (e, search, region) => {
    e.preventDefault();
    if (!search) return;

    if (search.includes("#")) {
      const formattedSearch = search
        .replace("#", "-")
        .replace(/\s/g, "")
        .toLowerCase();
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

    // window.addEventListener("scroll", handleScroll);

    // return () => {
    //   window.removeEventListener("scroll", handleScroll);
    // };
  }, []);

  const handleClickOutside = (event) => {
    if (
      inputRef.current &&
      !inputRef.current.contains(event.target) &&
      inputRef2.current &&
      !inputRef2.current.contains(event.target)
    ) {
      console.log("Click outside");
      setInputFocused(false);
    }

    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setExpanded(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOnClick = (region) => {
    setRegion(region);
    setExpanded(false);
    console.log("Region:", region);
  };

  return (
    <header
      ref={headerRef}
      className={`flex flex-col bg-blue shadow-md z-50 transition-all duration-300 ease-out ${
        scrolled ? "sticky top-0" : "h-auto"
      }`}
    >
      <div
        className={`w-full ${
          scrolled ? "py-1 px-2 max-400:px-1" : "py-2 max-400:py-1"
        }`}
      >
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
            ref={dropdownRef}
            onSubmit={(e) => handleSearch(e, search, region)}
            className={`flex w-full h-9 ${
              scrolled ? "rounded" : "800:rounded"
            } bg-gray-1 relative`}
          >
            {/* Región */}
            <Regions
              handleClickOutside={() => setInputFocused(false)}
              inputFocused={inputFocused}
              region={region}
              setRegion={setRegion}
              expanded={expanded}
              setExpanded={setExpanded}
            />

            {expanded && (
              <div
                className={`absolute left-0 right-0 top-full rounded-b-md overflow-auto z-50 bg-gray-8 grid max-500:grid-cols-3 grid-cols-5 p-1 gap-1 shadow-lg ${
                  expanded && !scrolled ? "max-800:rounded-b-none" : ""
                } w-full thin-scroll`}
              >
                {REGIONS.map(({ id, name, Icon }) => (
                  <button
                    key={id}
                    onClick={() => handleOnClick(id)}
                    className={`hover:bg-gray-1 text-gray-6 text-start h-8 max-500:h-9 flex max-500:gap-1.5 gap-2 justify-start items-center rounded text-2xs max-500:text-3xs max-500:px-1.5 px-2 ${
                      id === region ? "bg-gray-4" : " bg-gray-8"
                    }`}
                  >
                    <Icon className="size-5 min-size-5 max:500:size-4-5 max:500:min-size-4-5 " />
                    <span className="w-max">{name}</span>
                  </button>
                ))}
              </div>
            )}

            {/* Input de búsqueda */}
            <div
              ref={inputRef2}
              className="relative justify-center flex items-center flex-1 overflow-auto"
            >
              <input
                id="search"
                type="text"
                value={search}
                onChange={onChange}
                onFocus={() => {
                  setInputFocused(true);
                  setExpanded(false);
                }}
                autoComplete="off"
                maxLength={23}
                className="w-full h-full pl-3 hidden-selection text-xs max-500:text-2xs text-transparent bg-transparent outline-none caret-blue select"
              />

              {/* Placeholder dinámico */}

              <span className="absolute left-3 pointer-events-none truncate">
                <span className="text-xs max-500:text-2xs text-white">
                  {search.split("#")[0]}
                </span>
                {search && !search.includes("#") && (
                  <span className="ml-1 text-xs max-500:text-2xs text-gray-5">
                    + #TAG
                  </span>
                )}
                {search && search.includes("#") && (
                  <span className="text-xs max-500:text-2xs text-emerald">
                    #{search.split("#")[1]}
                  </span>
                )}
              </span>

              {!search && <InputLabel />}
            </div>

            <div ref={inputRef}>
              {inputFocused && (
                <SearchSuggestions
                  scrolled={scrolled}
                  handleSearch={handleSearch}
                />
              )}
            </div>

            {/* Botón de búsqueda principal */}
            <SearchButton
              expanded={expanded}
              inputFocused={inputFocused}
              onClick={handleSearch}
            />
          </form>
        </div>
      </div>
    </header>
  );
}
