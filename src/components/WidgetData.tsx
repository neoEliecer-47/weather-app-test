import { widgetData } from "@/types";
import Image from "next/image";

const WidgetData = ({
  widgetName,
  imgSrc,
  unit,
  variableValue,
  loading,
  color
}: widgetData) => {

    function buildBackgroundWidgetName(){
        if(color === 'green') return 'rgba(187,247,108,0.5)'
        if(color === 'blue') return 'rgba(191,219,254,0.5)'
        if(color === 'red') return 'rgba(254,202,202,0.5)'
        if(color === 'gray') return 'rgba(209,213,219,0.7)'
    }

  return (
    <div className={`transition-all w-full h-[5.5rem] md:h-[7rem] pt-2 px-4 flex flex-col bg-white/55 hover:bg-white/85 rounded-tr-3xl rounded-tl-3xl `}>
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
        
        <h2 style={{ backgroundColor: buildBackgroundWidgetName() }} className="p-2 rounded-2xl capitalize text-md flex justify-center items-center text-lg font-semibold">
          {widgetName}
        </h2>
      </section>
      <section className="flex flex-col justify-center items-center p-0">
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
