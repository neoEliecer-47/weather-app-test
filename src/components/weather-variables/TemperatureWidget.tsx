import WidgetWrapper from "../WidgetWrapper"



type TemperatureWidgetProps = {
    temperature?: string
}

const TemperatureWidget = ({ temperature }: TemperatureWidgetProps) => {
  return (
    <WidgetWrapper>
        <h1 className="p-0 m-0">temperature</h1>
        <span>{temperature}</span>
    </WidgetWrapper>
  )
}

export default TemperatureWidget