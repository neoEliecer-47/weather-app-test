import DropDownMenuCountries from "@/components/DropDownMenuCountries";
import countriesAllowedData from "../mock/Countries.json";

import { fetchWeatherCountry } from "@/utils";
import { searchParamsProps } from "@/types";
import { paramsFirstRender } from "@/constants";
import TemperatureWidget from "@/components/weather-variables/TemperatureWidget";
import WindWidget from "@/components/weather-variables/WindWidget";
import HumidityWidget from "@/components/weather-variables/HumidityWidget";
import PressureWidget from "@/components/weather-variables/PressureWidget";

//server component

export default async function Home({ searchParams }: searchParamsProps) {
  const paramsSearch = await searchParams;
  const params = !paramsSearch.lat ? paramsFirstRender : paramsSearch;
  const countryWeatherData = await fetchWeatherCountry(params);
  const { temp, wind_speed, pressure, humidity } = countryWeatherData.current;
  
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
