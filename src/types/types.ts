export interface ICountry {
  population: number;
  area: number;
  region: string;
  capital: string;
  name: string;
  flag: string;
}

export interface ICountryAPI {
  area: number;
  region: string;
  capital: string[];
  name: ICountryName;
  flags: ICountryFlag;
  population: number;
}

interface ILanguage {
  common: string;
  official: string;
}
interface ICountryNativaName {
  [language: string]: ILanguage | undefined;
}

interface ICountryName {
  nativeName: ICountryNativaName;
  common: string;
  official: string;
}

interface ICountryFlag {
  png: string;
  svg: string;
}
