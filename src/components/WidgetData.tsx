import { buildBackgroundWidgetColorName } from "@/helpers";
import { widgetData } from "@/types";

import Image from "next/image";

const WidgetData = ({
  widgetName,
  imgSrc,
  unit,
  variableValue,
  loading,
  color,
}: widgetData) => {
  return (
    <div
      className={`transition-all w-full h-[5.5rem] md:h-[7rem] pt-2 px-4 flex flex-col bg-white/55 hover:bg-white/85 rounded-tr-3xl rounded-tl-3xl `}
    >
      <section className="w-full flex justify-between pt-0">
        <div className="p-0 m-0 h-12 w-12 flex justify-center items-center">
          <Image
            src={imgSrc}
            alt={widgetName}
            width={50}
            height={50}
            objectFit="contain"
          />
        </div>

        <h2
          style={{ backgroundColor: buildBackgroundWidgetColorName(color) }}
          className="p-2 rounded-2xl capitalize text-md flex justify-center items-center text-lg font-semibold"
        >
          {widgetName}
        </h2>
      </section>
      <section className="flex flex-col justify-center items-center p-0 md:mt-[0.8rem]">
        {!loading ? (
          <span className="p-0 text-lg">
            {variableValue} {unit}
          </span>
        ) : (
          <span>{`updating ${widgetName}...`}</span>
        )}
      </section>
    </div>
  );
};

export default WidgetData;
