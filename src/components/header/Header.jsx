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
  { id: "kr", name: "Korea", Icon: Kr }, // La región con más jugadores
  { id: "euw", name: "Europe West", Icon: Euw }, // Segunda más grande
  { id: "na", name: "North America", Icon: Na }, // Históricamente grande pero en declive
  { id: "vn", name: "Vietnam", Icon: Vn }, // Comunidad muy activa
  { id: "br", name: "Brazil", Icon: Br }, // Servidor con muchos jugadores
  { id: "tr", name: "Turkey", Icon: Tr }, // Servidor con buena cantidad de jugadores
  { id: "lan", name: "LAN", Icon: Lan }, // Latinoamérica Norte
  { id: "las", name: "LAS", Icon: Las }, // Latinoamérica Sur
  { id: "tw", name: "Taiwan", Icon: Tw }, // Servidor con comunidad fiel
  { id: "eun", name: "Europe Nordic & East", Icon: Eun }, // Menos jugadores que EUW
  { id: "sea", name: "South East Asia", Icon: Sea }, // Antes manejado por Garena, ahora por Riot
  { id: "jp", name: "Japan", Icon: Jp }, // Comunidad más pequeña
  { id: "ru", name: "Russia", Icon: Ru }, // Servidor cerrado en 2022
  { id: "me", name: "Middle East", Icon: Me }, // Servidor reciente, menos jugadores
  { id: "oce", name: "Oceania", Icon: Oce }, // Servidor pequeño
];

export default function Header({ initialRegion }) {
  const scrolled = useStore($scrolled);

  const [expanded, setExpanded] = useState(false);
  const [region, setRegion] = useState(initialRegion);
  const [search, setSearch] = useState("");
  const [inputFocused, setInputFocused] = useState(false);
  const [inputSelected, setInputSelected] = useState(false);

  const headerRef = useRef(null);
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);

  const handleSearch = (e, search, region) => {
    e.preventDefault();
    if (!search) return;

    if (search.includes("#")) {
      const formattedSearch = search.replace("#", "-").replace(/\s/g, "").toLowerCase();
      window.location.href = `/summoners/${region}/${formattedSearch}`;
    }
  };

  const handleSelect = (event) => {
    const input = event.target;
    const selectedText = input.value.substring(input.selectionStart, input.selectionEnd);

    // Solo ocultar el placeholder si hay selección real de texto
    setInputSelected(selectedText.length > 0);
  };

  // esta funcion se encarga de que el input cumpla con todas las condiciones necesarias para tener un nombre de invocador valido (con nombre y tag)
  // el nombre puede tener como maximo 16 caracteres
  // el tag puede tener como maximo 5 caracteres
  // ejemplo: elchorizero12 #aura
  // la funcion agrega un espacio en blanco automaticamente antes del '#' una vez que este se escribe
  // si se escriben 16 caracteres, automaticamente la funcion agrega un espacio en blanco y el '#'
  // si se escriben 5 caracteres despues del '#', la funcion no permite escribir mas caracteres
  // si se escriben la funcion no permite mas de un '#'
  // la funcion solo permite un espacio en blanco entre texto antes del '#'. ejemplo: el capo mas capo #aura
  // la funcion no permite espacios luego del '#'

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
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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

  const handleClickOutside = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setInputFocused(false);
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

  const getHighlightedText = (text) => {
    if (!text) return '<span class="text-gray-500">+ #TAG</span>';
    const parts = text.split("#");
    if (parts.length > 1) {
      return `${parts[0]}<span class="text-emerald-400">#${parts[1]}</span>`;
    }
    return text;
  };

  return (
    <header
      ref={headerRef}
      className={`flex flex-col bg-blue shadow-md z-50 transition-all duration-300 ease-out ${
        scrolled ? "sticky top-0" : "h-auto"
      }`}
    >
      <div className={`w-full ${scrolled ? "py-1 px-2 max-400:px-1" : "py-2 max-400:py-1"}`}>
        <div
          ref={inputRef}
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
            onSubmit={(e) => handleSearch(e, search, region)}
            className={`flex w-full h-9 ${scrolled ? "rounded" : "800:rounded"} bg-gray-1 relative`}
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
                ref={dropdownRef}
                className={`absolute left-0 right-0 top-full rounded-b-md overflow-auto z-50 bg-gray-8 grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] p-1 gap-1 shadow-lg ${
                  expanded && !scrolled ? "max-800:rounded-b-none" : ""
                } w-full thin-scroll`}
              >
                {REGIONS.map(
                  ({ id, name, Icon }) =>
                    id !== region && (
                      <button
                        key={id}
                        onClick={() => handleOnClick(id)}
                        className="text-gray-6 border-gray-4 bg-gray-8 hover:bg-gray-4 text-start h-14 max-500:h-11 flex gap-1.5 justify-start items-center rounded text-xs max-500:text-2xs max-500:px-1 px-2"
                      >
                        <Icon className="size-6 min-size-6 max:500:size-5 max:500:min-size-5 " />
                        <span className="w-max">{name}</span>
                      </button>
                    )
                )}
              </div>
            )}

            {/* Input de búsqueda */}
            <div className="relative justify-center flex items-center flex-1 overflow-auto">
              <input
                id="search"
                type="text"
                value={search}
                onChange={onChange}
                onFocus={() => setInputFocused(true)}
                autoComplete="off"
                onSelect={handleSelect}
                onBlur={() => setInputSelected(false)}
                maxLength={23}
                className="w-full h-full pl-3 hidden-selection text-xs max-500:text-2xs text-transparent bg-transparent outline-none caret-blue select"
              />

              {/* Placeholder dinámico */}

              <span className="absolute left-3 pointer-events-none truncate">
                <span className="text-xs max-500:text-2xs text-white">{search.split("#")[0]}</span>
                {search && !search.includes("#") && (
                  <span className="ml-1 text-xs max-500:text-2xs text-gray-5">+ #TAG</span>
                )}
                {search && search.includes("#") && (
                  <span className="text-xs max-500:text-2xs text-emerald">
                    #{search.split("#")[1]}
                  </span>
                )}
              </span>

              {!search && <InputLabel />}
            </div>

            {inputFocused && <SearchSuggestions scrolled={scrolled} handleSearch={handleSearch} />}

            {/* Botón de búsqueda principal */}
            <SearchButton expanded={expanded} inputFocused={inputFocused} onClick={handleSearch} />
          </form>
        </div>
      </div>
    </header>
  );
}
