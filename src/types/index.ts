import { StaticImageData } from "next/image";
import React from "react";

export type DropDownMenuCountriesProps = {
  placeholder: string;
  countries?: countries[];
};

export type widgetInfoProps = baseWidgetProperty & {
  [K in lastPropertyName]?: string;
};

export interface countries {
  name: {
    common: string;
  };
  latlng: [number, number];
}

interface baseWidgetProperty {
  title: string;
  imgSrc: StaticImageData;
}

type lastPropertyName = "temperature" | "wind" | "humidity" | "pressure";

export type searchParamsProps = {
  searchParams: Promise<params>;
};

interface params {
  lat: string;
  lon: string;
  country: string;
}

export type updateWidgetDataProps = {
  current: {
    temp: string;
    pressure: string;
    humidity: string;
    wind_speed: string;
  };
};

export type widgetWrapperProps = baseWidgetProperty & {
  temperature: string;
  humidity: string;
  pressure: string;
  wind: string;
};

export type CustomWidgetButtonProps = {
  text: string;
  widgetType: string;
  setWidgetType: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  unitSwitchFeature?: boolean;
};

export type widgetData = {
  widgetName: string;
  imgSrc: StaticImageData;
  unit: string;
  variableValue?: string;
  loading: boolean;
  color: string;
};

export type widgetSwitchUnitsProps = {
  currentUnit: boolean;
  setCurrentUnit: React.Dispatch<React.SetStateAction<boolean>>;
  unitValueOne: string;
  unitValueTwo: string;
};
