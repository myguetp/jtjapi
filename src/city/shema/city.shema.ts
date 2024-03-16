/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CityDocument = City & Document;

@Schema()
export class Cities {
  @Prop()
  id: string;
  @Prop()
  name: string;
}

@Schema()
export class Countries {
  @Prop()
  id: number;
  @Prop()
  indicative: string;
  @Prop()
  nameCountry: string;
  @Prop()
  nameCity: Cities[];
}

@Schema()
export class City {
  @Prop()
  continent: string;
  @Prop()
  country: Countries[];
}

export const CitySchema = SchemaFactory.createForClass(City);
