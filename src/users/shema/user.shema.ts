/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ primary: true, generated: true })
  id: string;

  @Prop()
  name: string;

  @Prop({ unique: true, nullable: false })
  email: string;

  @Prop({ nullable: false })
  password: string;

  @Prop({ default: 'user' })
  rol: string;

}

export const UserSchema = SchemaFactory.createForClass(User);