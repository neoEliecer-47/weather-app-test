import WidgetWrapper from "../WidgetWrapper"

type PressureWidgetProps = {
    pressure?: string
}

const PressureWidget = ({ pressure }: PressureWidgetProps) => {
  return (
    <WidgetWrapper>
        <h1>{pressure}</h1>
    </WidgetWrapper>
  )
}

export default PressureWidget