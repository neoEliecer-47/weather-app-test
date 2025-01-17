import WidgetWrapper from "../WidgetWrapper"

type TemperatureWidgetProps = {
    temperature?: string
}

const TemperatureWidget = ({ temperature }: TemperatureWidgetProps) => {
  return (
    <WidgetWrapper>
        <h1>{temperature}</h1>
    </WidgetWrapper>
  )
}

export default TemperatureWidget