"use client";

import WidgetWrapper from "../WidgetWrapper";
import { useState } from "react";
import { useUpdateWidget } from "@/hooks/useUpdateWidget";
import { CustomWidgetButton } from "../CustomWidgetButton";
import WidgetData from "../WidgetData";
import imgWid from "../../../public/assets/wind.png";
import WidgetSwitchUnits from "../WidgetSwitchUnits";

type WindWidgetProps = {
  windSpeed?: string;
};

const WindWidget = ({ windSpeed }: WindWidgetProps) => {
  const [widgetType, setWidgetType] = useState("");
  const [mphUnit, setMphUnit] = useState(false);
  const { data, loading } = useUpdateWidget(widgetType, setWidgetType);//custom hook which make the call to the server side to get specific updated data

  function changeWindMphToKh() {
    /// I do this calculation since the units from the api come in mph units

    const windString = widgetType ? data : windSpeed;
    const windNumber = Number(windString);
    const windValueKH = String((windNumber * 1.6).toFixed(1));
    return windValueKH;
  }

  return (
    <WidgetWrapper>
      <WidgetData
        widgetName="wind speed"
        imgSrc={imgWid}
        unit={mphUnit === false ? "km/h" : "mph"}
        variableValue={mphUnit === false ? changeWindMphToKh() : windSpeed}
        loading={loading}
        color="blue"
      />
      <div className="flex h-8 items-center justify-start mt-2">
        <WidgetSwitchUnits
          currentUnit={mphUnit}
          setCurrentUnit={setMphUnit}
          unitValueOne="km/h"
          unitValueTwo="mph"
        />
        <CustomWidgetButton
          text="update wind"
          widgetType="wind_speed"
          setWidgetType={setWidgetType}
          loading={loading}
          unitSwitchFeature={true}
        />
      </div>
    </WidgetWrapper>
  );
};

export default WindWidget;
