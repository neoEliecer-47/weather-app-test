import { widgetInfoProps } from "@/types"
import Image from "next/image"


const WeatherWidget = ({ title, imgSrc, temperature, wind, humidity, pressure }: widgetInfoProps) => {

  function buildValue(title: string){
    if(title.startsWith('t')) return temperature
    if(title.startsWith('w')) return wind
    if(title.startsWith('h')) return humidity
    if(title.startsWith('p')) return pressure
  }
  return (
    <div className="p-10 bg-red-300 w-full h-[10rem] m-auto mb-10 overflow-hidden">
        <Image src={imgSrc} width={50} height={50} alt="image"/>
        <h2>{title}</h2>
        <h4>{buildValue(title)}</h4>
    </div>
  )
}

export default WeatherWidget