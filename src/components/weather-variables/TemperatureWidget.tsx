'use client'

import { useState } from "react"
import WidgetWrapper from "../WidgetWrapper"
import { useUpdateWidget } from "@/hooks/useUpdateWidget"
import { CustomWidgetButton } from "../CustomWidgetButton"



type TemperatureWidgetProps = {
    temperature?: string
}

const TemperatureWidget = ({ temperature }: TemperatureWidgetProps) => {
  const [widgetType, setWidgetType] = useState('')
    const { data, loading } = useUpdateWidget(widgetType)
  return (
    <WidgetWrapper>
        <div>{loading && 'loading...'}</div>
        <h1 className="p-0 m-0">temperature</h1>
        <span>{temperature}</span>
      <CustomWidgetButton text="update temperature" widgetType="temp" setWidgetType={setWidgetType}/>
    </WidgetWrapper>
  )
}

export default TemperatureWidget