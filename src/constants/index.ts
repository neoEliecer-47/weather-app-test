import temperatureImg from '../assets/temperature.png'
import windImg from '../assets/wind.png'
import humidityImg from '../assets/humidity.png'
import pressureImg from '../assets/pressure.png'
import { widgetInfoProps } from '@/types'


export const widgetInfo: widgetInfoProps[] = [
    { title: 'temperature', imgSrc: temperatureImg, temperature: 0 },
    { title: 'wind', imgSrc: windImg, wind: 0 },
    { title: 'humidity', imgSrc: humidityImg, humidity: 0 },
    { title: 'pressure', imgSrc: pressureImg, pressure: 0 },
  ]