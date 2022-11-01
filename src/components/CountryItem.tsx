import { ICountry } from "../types/type";
import { Color } from "../types/colors";
import { Badge } from "./Badge";

interface ICountryItem {
  country: ICountry;
}
export const CountryItem = ({ country }: ICountryItem) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <img
        className="col-1 p-1"
        src={country.flag}
        alt="flag"
        width="70"
        height="50"
      />
      <p className="col-2 ">{country.name}</p>
      <p className="col-2">{country.capital}</p>
      <p className="col-2">{country.region}</p>
      <Badge label="area" count={country.area} color={Color.Primary} />
      <Badge
        label="population"
        count={country.population}
        color={Color.Secondary}
      />
    </li>
  );
};
