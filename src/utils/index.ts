

export async function fetchCountries() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const data = await response.json();
  return data;
}

export async function fetchWeatherCountry(params: { lat: string, lon: string }) {
  
  const { lat, lon } = params
  
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    const data = await res.json()
   
    return data
  } catch (error) {}
}


export function updateSearchParams(type: string, value:number, typeTwo: string, valueTwo: number){
  const searchParams = new URLSearchParams(window.location.search);
  
  searchParams.set(type, value.toString().toLocaleLowerCase());
  searchParams.set(typeTwo, valueTwo.toString().toLocaleLowerCase());

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
}

export async function updateWidgetVariable(){
  try {
    const searchParams = new URLSearchParams(window.location.search);
    const lat = searchParams.get('lat');
    const lon = searchParams.get('lon')
    const data = await fetch(`/api/weather?lat=${lat}&lon=${lon}`)
    const weatherUpdateData = await data.json()
    return weatherUpdateData
  } catch (error: unknown) {
    if(error instanceof Error){
      console.error('something happened trying to update the widget data', error.message)
    }
  }
}
