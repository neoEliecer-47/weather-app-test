import WidgetWrapper from "../WidgetWrapper"

type WindWidgetProps = {
    windSpeed?: string
}

const WindWidget = ({ windSpeed }: WindWidgetProps) => {
  return (
    <WidgetWrapper>
        <h1>{windSpeed}</h1>
    </WidgetWrapper>
  )
}

export default WindWidget