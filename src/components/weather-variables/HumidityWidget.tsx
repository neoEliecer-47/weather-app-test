import WidgetWrapper from "../WidgetWrapper"

type HumidityWidgetProps = {
    humidity?: string
}

const HumidityWidget = ({ humidity }: HumidityWidgetProps) => {
  return (
    <WidgetWrapper>
        <h1 className="p-0 m-0">humidity</h1>
        <span>{humidity}</span>
    </WidgetWrapper>
  )
}

export default HumidityWidget