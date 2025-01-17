import DropDownMenuCountries from "@/components/DropDownMenuCountries";
import countriesAllowedData from '../mock/Countries.json'
import WeatherWidget from "@/components/WeatherWidget";

import { updateWidgetData } from "@/utils";


export default async function Home() {
  const data = await updateWidgetData()
 
  return (
    <div className="h-full w-full p-1 font-[family-name:var(--font-geist-sans)]">
      <DropDownMenuCountries countries={countriesAllowedData} placeholder="Select country"/>
      {data.map(({ title, imgSrc, temperature })=>(
        <WeatherWidget title={title} imgSrc={imgSrc} temperature={temperature}/>
      ))}
    </div>
  );
}
