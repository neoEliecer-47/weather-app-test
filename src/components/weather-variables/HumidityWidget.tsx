"use client";

import { useState } from "react";
import WidgetWrapper from "../WidgetWrapper";
import { CustomWidgetButton } from "../CustomWidgetButton";
import { useUpdateWidget } from "@/hooks/useUpdateWidget";
import imgHumidity from "../../../public/assets/humidity.png";
import WidgetData from "../WidgetData";

type HumidityWidgetProps = {
  humidity?: string;
};

const HumidityWidget = ({ humidity }: HumidityWidgetProps) => {
  const [widgetType, setWidgetType] = useState("");
  const { data, loading } = useUpdateWidget(widgetType, setWidgetType);//hook which make the call to the server side to get specific updated data
  return (
    <WidgetWrapper>
      <WidgetData
        widgetName="humidity"
        imgSrc={imgHumidity}
        unit="%"
        variableValue={!widgetType ? humidity : data}
        loading={loading}
        color="green"
      />

      <CustomWidgetButton
        text="update humidity"
        widgetType="humidity"
        setWidgetType={setWidgetType}
        loading={loading}
      />
    </WidgetWrapper>
  );
};

export default HumidityWidget;
