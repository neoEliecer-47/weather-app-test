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
  const { data, loading } = useUpdateWidget(widgetType, setWidgetType);

  function changeWindMphToKh() {
    /// I do this calculation since the units from the api come in mph units
    const windString = widgetType ? data : windSpeed;
    const windNumber = Number(windString);
    const windValueKH = String((windNumber * 1.6).toFixed(2));
    return windValueKH;
  }

  return (
    <WidgetWrapper>
      <WidgetData
        widgetName="wind speed"
        imgSrc={imgWid}
        unit="km/h"
        variableValue={changeWindMphToKh()}
        loading={loading}
        color="blue"
      />

      <CustomWidgetButton
        text="update wind"
        widgetType="wind_speed"
        setWidgetType={setWidgetType}
        loading={loading}
      />
    </WidgetWrapper>
  );
};

export default WindWidget;
