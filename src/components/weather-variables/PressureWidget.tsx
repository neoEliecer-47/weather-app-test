"use client";

import { useState } from "react";
import { CustomWidgetButton } from "../CustomWidgetButton";
import Loader from "../Loader";
import WidgetData from "../WidgetData";
import WidgetWrapper from "../WidgetWrapper";
import { useUpdateWidget } from "@/hooks/useUpdateWidget";
import imgPressure from "../../../public/assets/pressure.png";

type PressureWidgetProps = {
  pressure?: string;
};

const PressureWidget = ({ pressure }: PressureWidgetProps) => {
  const [widgetType, setWidgetType] = useState("");
  const { data, loading } = useUpdateWidget(widgetType, setWidgetType);
  return (
    <WidgetWrapper>
      <WidgetData
        widgetName="pressure"
        imgSrc={imgPressure}
        unit="mb"
        variableValue={!widgetType ? pressure : data}
        loading={loading}
        color="gray"
      />

      <CustomWidgetButton
        text="update pressure"
        widgetType="pressure"
        setWidgetType={setWidgetType}
        loading={loading}
      />
    </WidgetWrapper>
  );
};

export default PressureWidget;
