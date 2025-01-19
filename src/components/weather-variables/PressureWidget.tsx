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
      <div className="p-0 m-0 flex justify-center items-center mt-[0.7rem] md:mt-[1.5rem]">
        {loading ? (
          <Loader />
        ) : (
          <CustomWidgetButton
            text="update pressure"
            widgetType="pressure"
            setWidgetType={setWidgetType}
          />
        )}
      </div>
    </WidgetWrapper>
  );
};

export default PressureWidget;
