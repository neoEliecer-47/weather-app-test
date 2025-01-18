"use client";

import { updateWidgetVariable } from "@/utils";
import WidgetWrapper from "../WidgetWrapper";
import { useEffect, useState } from "react";
import { useUpdateWidget } from "@/hooks/useUpdateWidget";
import { CustomWidgetButton } from "../CustomWidgetButton";
import Loader from "../Loader";
import WidgetData from "../WidgetData";
import imgWid from "../../../public/assets/wind.png";

type WindWidgetProps = {
  windSpeed?: string;
};

const WindWidget = ({ windSpeed }: WindWidgetProps) => {
  const [widgetType, setWidgetType] = useState("");
  const { data, loading } = useUpdateWidget(widgetType);

console.log(data)


  return (
    <WidgetWrapper>
      <WidgetData
        widgetName="wind speed"
        imgSrc={imgWid}
        unit="C"
        variableValue={!widgetType ? windSpeed : data}
      />
      <div className="p-0 m-0 flex justify-center items-center">
        {loading ? (
          <Loader />
        ) : (
          <CustomWidgetButton
            text="update wind"
            widgetType="wind_speed"
            setWidgetType={setWidgetType}
          />
        )}
      </div>
    </WidgetWrapper>
  );
};

export default WindWidget;
