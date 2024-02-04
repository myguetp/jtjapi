/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SalesDocument = Sales & Document;

@Schema()
export class File {
  @Prop()
  fieldname: string;
  @Prop()
  originalname: string;
  @Prop()
  encoding: string;
  @Prop()
  mimetype: string;
}

@Schema()
export class Sales {

  @Prop()
  ofert: string;

  @Prop()
  parking: string;

  @Prop()
  neigborhood: string;

  @Prop()
  country: string;

  @Prop()
  city: string;

  @Prop()
  property: string;

  @Prop()
  stratum: string;

  @Prop()
  price: number;

  @Prop()
  room: string;

  @Prop()
  restroom: string;

  @Prop()
  age: string;

  @Prop()
  administration: string;

  @Prop()
  area: number;

  @Prop()
  description: string;

  @Prop()
  createdAt: number;

  @Prop()
  finnallyAt: number;

  @Prop()
  picture: File[];
}

export const SalesSchema = SchemaFactory.createForClass(Sales);