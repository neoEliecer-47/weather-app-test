import { widgetSwitchUnitsProps } from "@/types";

const WidgetSwitchUnits = ({
  currentUnit,
  setCurrentUnit,
  unitValueOne,
  unitValueTwo,
}: widgetSwitchUnitsProps) => {
  return (
    <div className="p-0 m-0 mt-[0.7rem] md:mt-[1.6rem]">
      <button
        onClick={() => setCurrentUnit(!currentUnit)}
        className="flex items-center justify-center p-2 bg-white/80 rounded-full w-[2.5rem] md:hover:scale-125 transition-all"
      >
        {currentUnit ? unitValueOne : unitValueTwo}
      </button>
    </div>
  );
}; //

export default WidgetSwitchUnits;
