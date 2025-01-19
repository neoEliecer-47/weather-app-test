import { widgetSwitchUnitsProps } from "@/types"

const WidgetSwitchUnits = ({ currentUnit, setCurrentUnit, unitValueOne, unitValueTwo }: widgetSwitchUnitsProps) => {
  return (
        <div className="p-0 m-0 h-4">
              <button
                onClick={() => setCurrentUnit(!currentUnit)}
                className="p-1 bg-white/80 rounded-full w-[2.1rem] md:hover:scale-125 transition-all"
              >
                {currentUnit ? unitValueOne : unitValueTwo}
              </button>
            </div>
  )
}// 

export default WidgetSwitchUnits