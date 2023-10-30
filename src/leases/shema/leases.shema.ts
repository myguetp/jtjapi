/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LeasesDocument = Leases & Document;

@Schema()
export class Leases {
  @Prop()
  name: string;

  @Prop()
  ofert: string;


  @Prop()
  phone: string;

  @Prop({unique:true})
  email: string;

  @Prop()
  city: string;

  @Prop()
  neigborhood: string;

  @Prop()
  property: string;

  @Prop()
  stratum: string;

  @Prop()
  breed: string;

  @Prop()
  price: string;

  @Prop()
  age: string;

  @Prop()
  administration: string;

  @Prop()
  area: string;

  @Prop()
  description: string;

  @Prop([String])
  picture: string[];
}

export const LeasesSchema = SchemaFactory.createForClass(Leases);