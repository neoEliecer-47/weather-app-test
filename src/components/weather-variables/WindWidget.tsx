'use client'

import { updateWidgetVariable } from "@/utils"
import WidgetWrapper from "../WidgetWrapper"
import { useState } from "react"
import { useUpdateWidget } from "@/hooks/useUpdateWidget"
import { CustomWidgetButton } from "../CustomWidgetButton"

type WindWidgetProps = {
    windSpeed?: string
}

const WindWidget = ({ windSpeed }: WindWidgetProps) => {
  const [widgetType, setWidgetType] = useState('')
  const { data, loading } = useUpdateWidget(widgetType)
  if(data){
    console.log(data)
    console.log(loading)
  }


  return (
    <WidgetWrapper>
         <div>
          {loading && 'loading...'}
         </div>
         <h1 className="p-0 m-0">Wind</h1>
         <span>{windSpeed}</span>
         <CustomWidgetButton text="update wind" widgetType="wind_speed" setWidgetType={setWidgetType}/>
    </WidgetWrapper>
  )
}

export default WindWidget