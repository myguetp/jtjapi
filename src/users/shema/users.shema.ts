/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  name: string;
  @Prop()
  lastName: string;
  @Prop()
  city: string;
  @Prop()
  phone: string;
  @Prop({ unique: true })
  email: string;
  @Prop()
  password: string;

 @Prop({ type: [{ type: Object }] })
  sales: object[];
}

export const UserSchema = SchemaFactory.createForClass(User);