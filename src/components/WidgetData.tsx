import { widgetData } from "@/types"
import Image from "next/image"


const WidgetData = ({ widgetName, imgSrc, unit, variableValue, loading }: widgetData) => {
  return (
    <div className="w-full  p-0 flex flex-col">
        <section className="w-full flex justify-start pt-0">
            <Image src={imgSrc} alt={widgetName} width={50} height={50} objectFit='contain'/>
        </section>
        <section className="flex flex-col justify-center items-center p-0">
            <h2 className="p-0">{widgetName}</h2>
           {!loading && (
             <span className="p-0">{variableValue}  {unit}</span>
           )}
        </section>
    </div>
  )
}

export default WidgetData