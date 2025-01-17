import { StaticImageData } from "next/image";

export type DropDownMenuCountriesProps = {
  placeholder: string;
  countries: countries[];
};

export type widgetInfoProps = baseWidgetProperty & {
  [K in lastPropertyName]?: string;
};

export interface countries {
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

export type searchParamsProps = {
  searchParams: Promise<params>
}

interface params {
  lat: string;
  lon: string;
}

export type updateWidgetDataProps = {
  current : {
    temp: string;
    pressure: string;
    humidity: string;
    wind_speed: string;
  }
}
