'use client'

import { updateWidgetVariable } from "@/utils"
import WidgetWrapper from "../WidgetWrapper"

type WindWidgetProps = {
    windSpeed?: string
}

const WindWidget = ({ windSpeed }: WindWidgetProps) => {

  async function handleUpdate(weatherVariable: string) {//server handler route
    const searchParams = new URLSearchParams(window.location.search);
    const lat = searchParams.get('lat');
    const lon = searchParams.get('lon')
    const data = await fetch(`/api/weather?variable=${weatherVariable}&lat=${lat}&lon=${lon}`)
    const weatherUpdate = await data.json()
    console.log(weatherUpdate)
    
  } 

  return (
    <WidgetWrapper>
         <h1 className="p-0 m-0">Wind</h1>
         <span>{windSpeed}</span>
         <button className='p-5 bg-slate-50 text-black' onClick={()=> handleUpdate('wind_speed')}>Update Wind Speed</button>
    </WidgetWrapper>
  )
}

export default WindWidget