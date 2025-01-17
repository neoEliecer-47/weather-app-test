"use client";

import { DropDownMenuCountriesProps } from "@/types";
import { CheckIcon } from "@heroicons/react/16/solid";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const DropDownMenuCountries = ({
  placeholder,
  countries,
}: DropDownMenuCountriesProps) => {
  const dropMenuRef = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [countryIndex, setCountryIndex] = useState<number | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  
  //console.log(countries[0].latlng)

  function buildLatitudeAndLongitude(countryIndex: number){
    const latlgn = countries[countryIndex]?.latlng
  }

  //filter countries based on searchTerm

function filteredCountries(){
    if(!searchTerm) return countries
      return countries.filter((country)=> country.name.common.includes(searchTerm))
    }
  

 

  return (
    <section
      className="cursor-pointer"
      ref={dropMenuRef}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="relative flex justify-center w-24 text-[1rem] py-[10px] transition-all duration-300 ease-linear bg-gray-200 rounded-[5px]">
        {selectedCountry ? selectedCountry : placeholder}
      </div>

      <input 
        value={searchTerm}
        name="searchTerm"
        onChange={(e)=>{
          setSearchTerm(e.target.value)
        }}
        className="p-4 border-red-300 bg-white/85 capitalize"
        onClick={()=> setIsOpen(!isOpen)}
      />

      <ul
        className="absolute bg-white rounded-[0.5rem] z-[9999px] transition-all duration-200 ease-linear shadow-sm overflow-scroll overflow-x-hidden"
        style={{
          padding: `${isOpen ? "10px 0px" : "0px"}`,
          width: "8rem",
          maxHeight: `${isOpen ? "10rem" : "0px"}`,
          scrollbarWidth: "thin",
        }}
      >
        {isOpen &&
          filteredCountries().map(({ name }, index) => {
         return (
          <div
          key={index}
          onClick={() => {
            setCountryIndex(index);
           buildLatitudeAndLongitude(index)
           setSelectedCountry(name.common)
          
          }}
          className="bg-white m-0 flex justify-between items-center"
        >
          <div style={{ width: "1.3rem" }}>
            {countryIndex === index && <CheckIcon />}
            
          </div>
          <li className="bg-white/35">{name?.common}</li>
        </div>
         )
})}
      </ul>
    </section>
  );
};

export default DropDownMenuCountries;
