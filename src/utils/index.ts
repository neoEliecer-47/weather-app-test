import { widgetInfo } from "@/constants";
import { countries, updateWidgetDataProps } from "@/types";

export async function fetchCountries() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const data = await response.json();
  return data;
}

export async function fetchWeatherCountry(params: { lat: string, lon: string }) {
  console.log({p: params})
  const { lat, lon } = params
  
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    const data = await res.json()
    return data;
  } catch (error) {}
}

export async function updateWidgetData(weatherData: updateWidgetDataProps){
    console.log(weatherData)
    for (const property of widgetInfo){
        if(weatherData){
            property.temperature = weatherData.current?.temp
            property.wind = weatherData.current?.wind_speed
            property.humidity = weatherData.current?.humidity
            property.pressure = weatherData.current?.pressure
        }
    }
    return widgetInfo
}

export function updateSearchParams(type: string, value:number, typeTwo: string, valueTwo: number){
  const searchParams = new URLSearchParams(window.location.search);
  
  searchParams.set(type, value.toString().toLocaleLowerCase());
  searchParams.set(typeTwo, valueTwo.toString().toLocaleLowerCase());

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
}
