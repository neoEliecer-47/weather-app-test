"use client";

import { useState } from "react";
import WidgetWrapper from "../WidgetWrapper";
import { useUpdateWidget } from "@/hooks/useUpdateWidget";
import { CustomWidgetButton } from "../CustomWidgetButton";

import WidgetData from "../WidgetData";
import imgTempeture from "../../../public/assets/temperature.png";
import WidgetSwitchUnits from "../WidgetSwitchUnits";

type TemperatureWidgetProps = {
  temperature?: string;
};

const TemperatureWidget = ({ temperature }: TemperatureWidgetProps) => {
  const [widgetType, setWidgetType] = useState<string>("");
  const [fahUnit, setFahUnit] = useState<boolean>(false);
  const { data, loading } = useUpdateWidget(widgetType, setWidgetType); //custom hook which make the call to the server side to get specific updated data

  function changeTempFahToCelcius() {
    // I do this calculation since the units from the api come in Fahrenheid units
    const tempString = widgetType ? data : temperature;
    const tempNumber = Number(tempString);
    const tempValueCelcius = String((((tempNumber - 32) * 5) / 9).toFixed(1));
    return tempValueCelcius;
  }

  return (
    <WidgetWrapper>
      <WidgetData
        widgetName="temperature"
        imgSrc={imgTempeture}
        unit={fahUnit === false ? "°C" : "°F"}
        variableValue={
          fahUnit === false ? changeTempFahToCelcius() : temperature
        }
        loading={loading}
        color="red"
      />
      <div className="flex h-8 items-center justify-start mt-2">
        <WidgetSwitchUnits
          currentUnit={fahUnit}
          setCurrentUnit={setFahUnit}
          unitValueOne="°C"
          unitValueTwo="°F"
        />
        <CustomWidgetButton
          text="update temperature"
          widgetType="temp"
          setWidgetType={setWidgetType}
          loading={loading}
          unitSwitchFeature={true}
        />
      </div>
    </WidgetWrapper>
  );
};

export default TemperatureWidget;
