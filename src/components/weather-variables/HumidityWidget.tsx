"use client";

import { useState } from "react";
import WidgetWrapper from "../WidgetWrapper";
import { CustomWidgetButton } from "../CustomWidgetButton";
import Loader from "../Loader";
import { useUpdateWidget } from "@/hooks/useUpdateWidget";
import imgHumidity from "../../../public/assets/humidity.png";
import WidgetData from "../WidgetData";

type HumidityWidgetProps = {
  humidity?: string;
};

const HumidityWidget = ({ humidity }: HumidityWidgetProps) => {
  const [widgetType, setWidgetType] = useState("");
  const { data, loading } = useUpdateWidget(widgetType, setWidgetType);
  return (
    <WidgetWrapper>
      <WidgetData
        widgetName="humidity"
        imgSrc={imgHumidity}
        unit="%"
        variableValue={!widgetType ? humidity : data}
        loading={loading}
      />
      <div className="max-h-16 p-0 flex justify-center items-center mt-[1rem]">
        {loading ? (
          <Loader />
        ) : (
          <CustomWidgetButton
            text="update humidity"
            widgetType="humidity"
            setWidgetType={setWidgetType}
          />
        )}
      </div>
    </WidgetWrapper>
  );
};

export default HumidityWidget;
