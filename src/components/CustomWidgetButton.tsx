import { CustomWidgetButtonProps } from "@/types"
import RefreshWidgetIcon from './icons/RefreshWidgetIcon'
import Loader from "./Loader"


export const CustomWidgetButton = ({ text, setWidgetType, widgetType, loading }: CustomWidgetButtonProps) => {

  return (
    <div className="p-0 m-0 flex justify-center items-center mt-[0.7rem] md:mt-[1.6rem]">
      {loading ? (
        <Loader />
      ): (
      <button onClick={()=> setWidgetType(widgetType)} className="p-2 m-0 bg-white rounded-full text-black hover:scale-125 transition-all duration-200">
        <RefreshWidgetIcon />
      </button> 

      )}
    </div>
  )
}
