import DropDownMenuCountries from "@/components/DropDownMenuCountries";
import countriesAllowedData from "../mock/Countries.json";

import { fetchWeatherCountry } from "@/utils";
import { searchParamsProps } from "@/types";
import { paramsFirstRender } from "@/constants";
import TemperatureWidget from "@/components/weather-variables/TemperatureWidget";
import WindWidget from "@/components/weather-variables/WindWidget";
import HumidityWidget from "@/components/weather-variables/HumidityWidget";
import PressureWidget from "@/components/weather-variables/PressureWidget";
import { headers } from "next/headers";

//server component

export default async function Home({ searchParams }: searchParamsProps) {
  const paramsSearch = await searchParams;
  
  const countryWeatherData = await fetchWeatherCountry(paramsSearch);
  const { temp, wind_speed, pressure, humidity } = countryWeatherData.current;
  const headerInstance = headers()
  const host = headerInstance.get('host')
 
  


  return (
    <div className="h-full w-full p-1 font-[family-name:var(--font-geist-sans)]">
      <DropDownMenuCountries
        countries={countriesAllowedData}
        placeholder="Select country"
      />
      <section>
        <TemperatureWidget temperature={temp} />
        <WindWidget windSpeed={wind_speed} />
        <HumidityWidget humidity={humidity} />
        <PressureWidget pressure={pressure} />
      </section>
    </div>
  );
}
