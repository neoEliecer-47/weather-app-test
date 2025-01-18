import WidgetWrapper from "../WidgetWrapper"

type PressureWidgetProps = {
    pressure?: string
}

const PressureWidget = ({ pressure }: PressureWidgetProps) => {
  return (
    <WidgetWrapper>
        <h1 className="p-0 m-0">pressure</h1>
        <span>{pressure}</span>
    </WidgetWrapper>
  )
}

export default PressureWidget