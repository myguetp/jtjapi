/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RoomDocument = Room & Document;

@Schema()
export class Room {
  @Prop()
  id: string;

  @Prop()
  name: string;
}

export const RoomSchema = SchemaFactory.createForClass(Room);
