/* eslint-disable prettier/prettier */
export class Cities {
  id: number;
  name: string;
}

export class Countries {
  id: number;
  indicative: string;
  nameCountry: string;
  nameCity: Cities[];
}

export class CreateCityDto {
  continent: string;
  country: Countries[];
}
