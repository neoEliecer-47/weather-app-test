//functiono that calls the route handler in order to get countries allowed 
export async function fetchCountriesAllowed() {
  try {
    const response = await fetch(
      "/api/countries"
    );

    const data = await response.json();

    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(
        "something happened trying to get the countries allowed",
        error.message
      );
    }
  }
}

//function to fetch countries current weather data
export async function fetchWeatherCountry(params: {
  lat: string;
  lon: string;
}) {
  const { lat, lon } = params;

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${process.env.NEXT_PUBLIC_API_KEY}`,
      {
        method: "GET",
        cache: "no-store",
        headers: {
          "Cache-Control": "no-cache",
          Pragma: "no-cache",
        },
      }
    );
    const data = await res.json();

    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(
        "something happened trying to get the country weather data",
        error.message
      );
    }
  }
}

//function which is used from the client side to update searchParams
export function updateSearchParams( 
  type: string,
  value: number,
  typeTwo: string,
  valueTwo: number,
  typeTree: string,
  valueTree: string
) {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type, value.toString().toLocaleLowerCase());
  searchParams.set(typeTwo, valueTwo.toString().toLocaleLowerCase());
  searchParams.set(typeTree, valueTree.toString().toLocaleLowerCase());

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
}

//function to update one single widget from the client
export async function updateWidgetVariable() {
  

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
