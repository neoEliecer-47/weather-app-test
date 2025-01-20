import DropDownMenuCountries from "@/components/DropDownMenuCountries";
import { fetchCountriesAllowed, fetchWeatherCountry } from "@/utils";
import { searchParamsProps } from "@/types";
import TemperatureWidget from "@/components/weather-variables/TemperatureWidget";
import WindWidget from "@/components/weather-variables/WindWidget";
import HumidityWidget from "@/components/weather-variables/HumidityWidget";
import PressureWidget from "@/components/weather-variables/PressureWidget";
import classNames from "classnames";
import styles from "./page.module.css";

//server component

export default async function Home({ searchParams }: searchParamsProps) {
  const paramsSearch = await searchParams;
  const countriesAllowedData = await fetchCountriesAllowed()
  const countryWeatherData = await fetchWeatherCountry(paramsSearch);
  const { temp, wind_speed, pressure, humidity } = countryWeatherData.current;

  return (
    <div className={classNames("md:h-[100vh] w-full p-4", styles.pageContainer)}>
      <DropDownMenuCountries
        placeholder="Select country"
        countries={countriesAllowedData}
      />

      <h1 className={classNames("w-full text-center capitalize text-2xl font-bold bg-white rounded-md mt-6 md:max-w-[20rem] mx-auto shadow-lg",
          styles.countryName
        )}
      >
        {paramsSearch.country}
      </h1>

      <section
        className={classNames("grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 w-full p-0 lg:max-w-[50rem] mx-auto",
          styles.widgetsContainer
        )}
      >
        <TemperatureWidget temperature={temp} />
        <WindWidget windSpeed={wind_speed} />
        <HumidityWidget humidity={humidity} />
        <PressureWidget pressure={pressure} />
      </section>
    </div>
  );
}
