"use client";

import { useClickOutsideDetector } from "@/hooks/useClickOutside";
import { DropDownMenuCountriesProps } from "@/types";
import { CheckIcon } from "@heroicons/react/24/solid";

import { useEffect, useRef, useState } from "react";

const DropDownMenuCountries = ({
  placeholder,
  countries,
}: DropDownMenuCountriesProps) => {
  const countriesRef = useRef<HTMLUListElement | null>(null)
  const [isOpen, setIsOpen] = useState(false);
  const [countryIndex, setCountryIndex] = useState<number | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const { dropMenuRef, isClickOutside, setIsClickOutside } =
    useClickOutsideDetector();

  function buildLatitudeAndLongitude(countryIndex: number) {
    const latlgn = countries[countryIndex]?.latlng;
  }

  //filter countries based on searchTerm

  function filteredCountries() {
    if (!searchTerm) return countries;

    const filterCountry = countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filterCountry;
  }

  useEffect(() => {
    if (isClickOutside) {
      setIsOpen(false);
      setIsClickOutside(false);
    }
  }, [isClickOutside]);

  return (
    <div className="flex flex-col justify-center items-center">
      <input
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        className="p-4 border-red-300 bg-white/85 capitalize transition-opacity rounded-[0.5rem]"
        onClick={() => setIsOpen(true)}
      />
      <section
        className="cursor-pointer p-0"
        ref={dropMenuRef}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="relative flex justify-center w-[12rem] text-[1rem] py-[10px] transition-all duration-300 ease-linear bg-gray-200 rounded-[5px]">
          {selectedCountry ? selectedCountry : placeholder}
        </div>

        <ul
          className="absolute m-auto w-[12rem] bg-white/50 rounded-[0.5rem] transition-all duration-250 ease-linear z-[9999px] shadow-sm overflow-scroll overflow-x-hidden"
          ref={countriesRef}
          style={{
            height: isOpen === false ? '0px' : `${countriesRef.current?.scrollHeight}px`,
            maxHeight: `${isOpen === true ? "12rem" : "0px"}`,
            scrollbarWidth: "none",
            
          }}
        >
          {
            filteredCountries().map(({ name }, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    setCountryIndex(index);
                    buildLatitudeAndLongitude(index);
                    setSelectedCountry(name.common);
                  }}
                  className="bg-white m-0 flex justify-between items-center"
                >
                  
                   
                  <li className={`${selectedCountry === name.common ? 'bg-blue-300' : 'bg-white/35'} rounded-md text-center w-full m-0`}>{name?.common}</li>
                </div>
              );
            })}
        </ul>
      </section>
    </div>
  );
};

export default DropDownMenuCountries;
