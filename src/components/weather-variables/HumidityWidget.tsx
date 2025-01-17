import WidgetWrapper from "../WidgetWrapper"

type HumidityWidgetProps = {
    humidity?: string
}

const HumidityWidget = ({ humidity }: HumidityWidgetProps) => {
  return (
    <WidgetWrapper>
        <h1>{humidity}</h1>
    </WidgetWrapper>
  )
}

export default HumidityWidget