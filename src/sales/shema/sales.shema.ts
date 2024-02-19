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

  @Prop()
  ofert: string;

  @Prop()
  email: string;

  @Prop()
  phone: string;

  @Prop()
  parking: string;

  @Prop()
  neighborhood: string;

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

  @Prop({ type: [FileSchema] }) 
  file: CustomFile[];

}

export const SalesSchema = SchemaFactory.createForClass(Sales);