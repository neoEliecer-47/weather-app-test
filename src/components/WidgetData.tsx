import { widgetData } from "@/types"
import Image from "next/image"


const WidgetData = ({ widgetName, imgSrc, unit, variableValue, loading }: widgetData) => {
  return (
    <div className="w-full h-[5.5rem] pt-2 px-4 flex flex-col bg-white/55 rounded-tr-3xl rounded-tl-3xl ">
        <section className="w-full flex justify-between pt-0">
           <div className="p-0 m-0 h-12 w-12 flex justify-center items-center">
           <Image src={imgSrc} alt={widgetName} width={50} height={50} objectFit='contain'/>
           </div>
            <h2 className="p-0 capitalize text-md flex justify-center items-center text-lg font-semibold">{widgetName}</h2>
        </section>
        <section className="flex flex-col justify-center items-center p-0 pb-4">
            
           {!loading ? (
             <span className="p-0 text-lg">{variableValue}  {unit}</span>
           ): (
                <span>{`updating ${widgetName}...`}</span>
           )}
        </section>
    </div>
  )
}

export default WidgetData