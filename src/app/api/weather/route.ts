
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
   
    const query = req.nextUrl.searchParams
    const lat = query.get('lat')
    const lon = query.get('lon')
    const weatherVariable = query.get('variable')
   
    function buildVariableUpdated(dataJson: {temp: string, humidity: string, pressure: string, wind_speed: string}){
      if(weatherVariable === 'temp') return dataJson.temp
      if(weatherVariable === 'humidity') return dataJson.humidity
      if(weatherVariable === 'pressure') return dataJson.pressure
      if(weatherVariable === 'wind_speed') return dataJson.wind_speed
    }
    
    
    //

    
    try {
         const response = await fetch(
            `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=hourly,daily,minutely,alerts&appid=${process.env.NEXT_PUBLIC_API_KEY}`
           );
           
           const data = await response.json();
           
            return NextResponse.json(data, { status: 200 });
        
    } catch (error) {
        
    }
    
}