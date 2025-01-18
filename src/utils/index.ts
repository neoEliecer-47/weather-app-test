

export async function fetchCountries() {//countries allowed
  const response = await fetch("https://restcountries.com/v3.1/all");
  const data = await response.json();
  return data;
}

export async function fetchWeatherCountry(//function to fetch countries current weather data
  params: { lat: string; lon: string },
) {

  const { lat, lon } = params;

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${process.env.NEXT_PUBLIC_API_KEY}`, {
        method: 'GET',
       headers: {
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache'
       }
      }
    );
    const data = await res.json();

    return data;
  } catch (error) {}
}

export function updateSearchParams(//function which is used from the client side
  type: string,
  value: number,
  typeTwo: string,
  valueTwo: number,
  typeTree: string,
  valueTree: string,
) {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type, value.toString().toLocaleLowerCase());
  searchParams.set(typeTwo, valueTwo.toString().toLocaleLowerCase());
  searchParams.set(typeTree, valueTree.toString().toLocaleLowerCase());
 

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
}

export async function updateWidgetVariable() {//function to update one single widget from the client
  try {
    const searchParams = new URLSearchParams(window.location.search);
    const lat = searchParams.get("lat");
    const lon = searchParams.get("lon");
    const data = await fetch(`/api/weather?lat=${lat}&lon=${lon}`);
    const weatherUpdateData = await data.json();
    return weatherUpdateData;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(
        "something happened trying to update the widget data",
        error.message
      );
    }
  }
}
