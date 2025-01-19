import { CustomWidgetButtonProps } from "@/types"
import ReloadWidgetIcon from "./icons/ReloadWidgetIcon"


export const CustomWidgetButton = ({ text, setWidgetType, widgetType }: CustomWidgetButtonProps) => {

  return (
    <button onClick={()=> setWidgetType(widgetType)} className="p-2 m-0 bg-white rounded-full text-black">
      <ReloadWidgetIcon />
    </button>
  )
}
