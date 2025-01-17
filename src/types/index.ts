import { StaticImageData } from "next/image";

export type DropDownMenuCountriesProps = {
  placeholder: string;
  countries: countries[];
};

export type widgetInfoProps = baseWidgetProperty & {
  [K in lastPropertyName]?: number;
};

interface countries {
  name: {
    common: string;
  };
  latlng: number[];
}

interface baseWidgetProperty {
  title: string;
  imgSrc: StaticImageData;
}

type lastPropertyName = "temperature" | "wind" | "humidity" | "pressure";
