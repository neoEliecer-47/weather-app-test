"use client";

import { useClickOutsideDetector } from "@/hooks/useClickOutside";
import { DropDownMenuCountriesProps } from "@/types";
import { updateSearchParams } from "@/utils";
import { useRouter } from "next/navigation";

import { useEffect, useRef, useState } from "react";

const DropDownMenuCountries = ({ placeholder, countries }: DropDownMenuCountriesProps) => {
  const countriesRef = useRef<HTMLUListElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const { dropMenuRef, isClickOutside, setIsClickOutside } = useClickOutsideDetector();
  const router = useRouter();

  function buildLatitudeAndLongitude(latlon: number[], country: string) {
    const [lat, lon] = latlon;
    const newPathname = updateSearchParams("lat", lat, "lon", lon, "country", country);
    router.push(newPathname);
  }

   function filteredCountries() {//we ensure that countries is not gonna null when filtered so I pass it as argument
    if (!searchTerm) return countries;

  const filterCountry = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return filterCountry;
 

  }

  //this function sanitize the text before process it
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const sanitizedValue = event.target.value.replace(/[^a-z]/g, ""); //to only allow letters in the input
    setSearchTerm(sanitizedValue);
  }


  useEffect(() => {
    if (isClickOutside) {
      setIsOpen(false);
      setIsClickOutside(false);
    }
  }, [isClickOutside]);//to handle and close it when user clicks outside the element


  return (
    <div className="flex flex-col justify-center items-center">
      <input
        value={searchTerm}
        onChange={handleChange}
        className="p-2 border-red-300 bg-white/85 capitalize transition-opacity rounded-[0.5rem] shadow-lg"
        onClick={() => setIsOpen(true)}
      />
      <section
        className="cursor-pointer p-0 mt-2 shadow-md z-20 "
        ref={dropMenuRef}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="capitalize hover:bg-white/65 relative flex justify-center w-[12rem] text-[1rem] py-[10px] transition-all duration-300 ease-linear bg-gray-200 rounded-[5px]">
          {placeholder}
        </div>

        <ul
          className={`max-h-[10rem] bg-transparent absolute m-auto w-[12rem] rounded-[0.5rem] transition-all duration-250 ease-linear z-[9999px] shadow-sm overflow-scroll overflow-x-hidden overflow-y-auto`}
          ref={countriesRef}
          style={{
            height:
              isOpen === false
                ? "0px"
                : `${countriesRef.current?.scrollHeight}px`,
            maxHeight: `${isOpen === true ? "10rem" : "0rem"}`,
            scrollbarWidth: "none",
          }}
        >
          {countries && filteredCountries().map(({ name, latlng }, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  buildLatitudeAndLongitude(latlng, name.common);
                  setSelectedCountry(name.common);
                }}
                className="bg-white m-0 flex justify-between items-center md:hover:bg-red-100 transition-all"
              >
                <li
                  className={`${
                    selectedCountry === name.common
                      ? "bg-blue-300"
                      : "bg-white/35"
                  } rounded-md text-center w-full m-0 p-2 border-[2px] border-red-100 `}
                >
                  {name?.common}
                </li>
              </div>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default DropDownMenuCountries;
