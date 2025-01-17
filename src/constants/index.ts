import temperatureImg from '../assets/temperature.png'
import windImg from '../assets/wind.png'
import humidityImg from '../assets/humidity.png'
import pressureImg from '../assets/pressure.png'
import { widgetInfoProps } from '@/types'


export const widgetInfo: widgetInfoProps[] = [
    { title: 'temperature', imgSrc: temperatureImg, temperature: '' },
    { title: 'wind', imgSrc: windImg, wind: '' },
    { title: 'humidity', imgSrc: humidityImg, humidity: '' },
    { title: 'pressure', imgSrc: pressureImg, pressure: '' },
  ]

  export const paramsFirstRender = { //Malta latitude and longitude
    lat: '35.9375',
    lon: '14.3754'
  }