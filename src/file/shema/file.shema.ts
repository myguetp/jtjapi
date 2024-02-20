/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNumber, IsString } from 'class-validator';
import { Document } from 'mongoose';

export type FileDocument = File & Document;

@Schema()
// export class File {
//   @Prop()
//   originalname: string;

//   @Prop()
//   filename: string;

//   @Prop()
//   mimetype: string;

//   @Prop()
//   size: number;

//   @Prop()
//   buffer: Buffer;
// }
export class File {
  @Prop({ required: true })
  @IsString()
  originalname: string;

  @Prop({ required: true })
  @IsString()
  filename: string;

  @Prop({ required: true })
  @IsString()
  mimetype: string;

  @Prop({ required: true })
  @IsNumber()
  size: number;
}

export const FileSchema = SchemaFactory.createForClass(File);