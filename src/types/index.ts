export type DropDownMenuCountriesProps = {
  placeholder: string;
  countries: countries[];
};

interface countries {
  name: {
    common: string;
  };
  latlng: number[];
}
