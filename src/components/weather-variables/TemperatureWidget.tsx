"use client";

import { useState } from "react";
import WidgetWrapper from "../WidgetWrapper";
import { useUpdateWidget } from "@/hooks/useUpdateWidget";
import { CustomWidgetButton } from "../CustomWidgetButton";
import Loader from "../Loader";
import WidgetData from "../WidgetData";
import imgTempeture from "../../../public/assets/temperature.png";

type TemperatureWidgetProps = {
  temperature?: string;
};

const TemperatureWidget = ({ temperature }: TemperatureWidgetProps) => {
  const [widgetType, setWidgetType] = useState("");
  const { data, loading } = useUpdateWidget(widgetType, setWidgetType);

  function changeTempFahToCelcius(){// I do this calculation since the units from the api come in Fahrenheid units
    const tempString = widgetType ? data : temperature
    const tempNumber = Number(tempString)
    console.log({TTT: tempNumber})
    const tempValueCelcius = String(((tempNumber - 32) * 5/9).toFixed(1))
    return tempValueCelcius
  }

  return (
    <WidgetWrapper>
      <WidgetData
        widgetName="temperature"
        imgSrc={imgTempeture}
        unit="°C"
        variableValue={changeTempFahToCelcius()}
        loading={loading}
        color="red"
      />
      <div className="p-0 m-0 flex justify-center items-center mt-[0.7rem] md:mt-[1.5rem]">
        {loading ? (
          <Loader />
        ) : (
          <CustomWidgetButton
            text="update temperature"
            widgetType="temp"
            setWidgetType={setWidgetType}
          />
        )}
      </div>
    </WidgetWrapper>
  );
};

export default TemperatureWidget;
