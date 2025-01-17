import DropDownMenuCountries from "@/components/DropDownMenuCountries";
import countriesAllowedData from '../mock/Countries.json'

export default async function Home() {
  //const data = await fetchCountries()
 
  return (
    <div className="h-full p-1 font-[family-name:var(--font-geist-sans)]">
      <DropDownMenuCountries countries={countriesAllowedData} placeholder="Select country"/>
    </div>
  );
}
