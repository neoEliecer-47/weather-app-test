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
  const { data, loading } = useUpdateWidget(widgetType);
  return (
    <WidgetWrapper>
      <WidgetData
        widgetName="temperature"
        imgSrc={imgTempeture}
        unit="C"
        variableValue={!widgetType ? temperature : data}
      />
      <div className="p-0 m-0 flex justify-center items-center">
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
