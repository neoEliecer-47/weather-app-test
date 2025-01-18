'use client'

import { updateWidgetVariable } from "@/utils"
import WidgetWrapper from "../WidgetWrapper"
import { useState } from "react"
import { useUpdateWidget } from "@/hooks/useUpdateWidget"

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
         <button className='p-5 bg-slate-50 text-black' onClick={()=> setWidgetType('wind_speed')}>Update Wind Speed</button>
    </WidgetWrapper>
  )
}

export default WindWidget