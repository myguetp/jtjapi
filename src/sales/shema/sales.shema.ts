/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SalesDocument = Sales & Document;

export interface CustomFile {
  name: string;
  type: string;
}

const FileSchema = SchemaFactory.createForClass(File);

@Schema()
export class Sales {


  ofert: string;


  email: string;


  phone: string;


  parking: string;


  flower: string


  neighborhood: string;


  country: string;


  city: string;


  property: string;


  stratum: string;


  price: number;


  room: string;


  restroom: string;


  age: string;


  administration: string;


  area: number;


  description: string;

  @Prop({ type: [FileSchema] }) 
  file: CustomFile[];

}

export const SalesSchema = SchemaFactory.createForClass(Sales);