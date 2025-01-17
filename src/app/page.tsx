import DropDownMenuCountries from "@/components/DropDownMenuCountries";
import countriesAllowedData from "../mock/Countries.json";

import { fetchWeatherCountry, updateWidgetData } from "@/utils";
import { searchParamsProps } from "@/types";
import { paramsFirstRender } from "@/constants";
import TemperatureWidget from "@/components/weather-variables/TemperatureWidget";
import WindWidget from "@/components/weather-variables/WindWidget";
import HumidityWidget from "@/components/weather-variables/HumidityWidget";
import PressureWidget from "@/components/weather-variables/PressureWidget";

//server component

export default async function Home({ searchParams }: searchParamsProps) {
  const paramsSearch = await searchParams;
  const params = !paramsSearch.lat ? paramsFirstRender : paramsSearch
  const countryWeatherData = await fetchWeatherCountry(params)
  const data = await updateWidgetData(countryWeatherData);

  return (
    <div className="h-full w-full p-1 font-[family-name:var(--font-geist-sans)]">
      <DropDownMenuCountries
        countries={countriesAllowedData}
        placeholder="Select country"
      />
      {data.map((data) => (
        <>
          <TemperatureWidget temperature={data.temperature}/>
          <WindWidget windSpeed={data.wind}/>
          <HumidityWidget humidity={data.humidity}/>
          <PressureWidget pressure={data.pressure}/>
        </>
      ))}
    </div>
  );
}
