import { countries } from "@/types";

export function buildBackgroundWidgetColorName(color: string) {
  //i tried to create backgrounds of even hovers for the dynamic widget component but it is not possible with Tailwind so built this
  if (color === "green") return "rgba(187,247,108,0.5)";
  if (color === "blue") return "rgba(191,219,254,0.5)";
  if (color === "red") return "rgba(254,202,202,0.5)";
  if (color === "gray") return "rgba(209,213,219,0.7)";
}

  //filter countries based on searchTerm
  export function filteredCountries(countries: countries[], searchTerm: string | '') {//we ensure that countries is not gonna null when filtered so I pass it as argument
    if (searchTerm === '') return countries;

  const filterCountry = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return filterCountry;
 

  }
