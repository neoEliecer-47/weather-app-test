import { CustomWidgetButtonProps } from "@/types"


export const CustomWidgetButton = ({ text, setWidgetType, widgetType }: CustomWidgetButtonProps) => {

  return (
    <button onClick={()=> setWidgetType(widgetType)} className="p-2 bg-white text-black">{text}</button>
  )
}
