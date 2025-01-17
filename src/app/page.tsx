import DropDownMenuCountries from "@/components/DropDownMenuCountries";
import countriesAllowedData from "../mock/Countries.json";
import WeatherWidget from "@/components/WeatherWidget";

import { fetchWeatherCountry, updateWidgetData } from "@/utils";
import { searchParamsProps } from "@/types";

const paramsFirstRender = {
  lat: '35.9375',
  lon: '14.3754'
}

export default async function Home({ searchParams }: searchParamsProps) {
  const paramsSearch = await searchParams;
  const params = !paramsSearch ? paramsFirstRender : paramsSearch
  const countriesData = await fetchWeatherCountry(params)
  const data = await updateWidgetData(countriesData);

  return (
    <div className="h-full w-full p-1 font-[family-name:var(--font-geist-sans)]">
      <DropDownMenuCountries
        countries={countriesAllowedData}
        placeholder="Select country"
      />
      {data.map(({ title, imgSrc, temperature, humidity, pressure, wind }) => (
        <WeatherWidget
          title={title}
          imgSrc={imgSrc}
          temperature={temperature}
          humidity={humidity}
          pressure={pressure}
          wind={wind}
        />
      ))}
    </div>
  );
}
