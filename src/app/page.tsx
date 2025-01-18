import DropDownMenuCountries from "@/components/DropDownMenuCountries";
import countriesAllowedData from "../mock/Countries.json";

import { fetchWeatherCountry } from "@/utils";
import { searchParamsProps } from "@/types";
import TemperatureWidget from "@/components/weather-variables/TemperatureWidget";
import WindWidget from "@/components/weather-variables/WindWidget";
import HumidityWidget from "@/components/weather-variables/HumidityWidget";
import PressureWidget from "@/components/weather-variables/PressureWidget";

//server component

export default async function Home({ searchParams }: searchParamsProps) {
  const paramsSearch = await searchParams;
  const countryWeatherData = await fetchWeatherCountry(paramsSearch);
  const { temp, wind_speed, pressure, humidity } = countryWeatherData.current;
  console.log(countryWeatherData)
  return (
    <div className="h-full w-full p-1 font-[family-name:var(--font-geist-sans)]">
      <DropDownMenuCountries
        countries={countriesAllowedData}
        placeholder="Select country"
      />
      <h1 className='w-full text-center capitalize text-2xl font-bold bg-white rounded-md mt-6 md:max-w-[30rem] mx-auto'>{paramsSearch.country}</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 w-full p-0 lg:max-w-[50rem] mx-auto">
        <TemperatureWidget temperature={temp} />
        <WindWidget windSpeed={wind_speed} />
        <HumidityWidget humidity={humidity} />
        <PressureWidget pressure={pressure} />
      </section>
    </div>
  );
}
