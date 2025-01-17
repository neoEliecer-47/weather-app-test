import { widgetInfo } from "@/constants";

export async function fetchCountries() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const data = await response.json();
  return data;
}

export async function fetchWeather() {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/3.0/onecall?lat=35.9375&lon=14.3754&units=imperial&appid=1c11fda5c8d4123410a24c8e93bff0c7`
    );
    const data = await res.json()
    return data;
  } catch (error) {}
}

export async function updateWidgetData(){
    const weatherData = await fetchWeather()
    for (const property of widgetInfo){
        if(weatherData){
            property.temperature = weatherData.current.temp
            property.wind = weatherData.current.wind_speed
            property.humidity = weatherData.current.humidity
            property.pressure = weatherData.current.pressure
        }
    }
    return widgetInfo
}
