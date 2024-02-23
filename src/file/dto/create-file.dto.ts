/* eslint-disable prettier/prettier */
import { IsArray, IsNotEmpty, IsObject, IsString } from 'class-validator';

export class CreateFileDto {
  @IsArray()
  @IsNotEmpty({ each: true })
  @IsObject({ each: true })
  files: Express.Multer.File[];
  @IsString()
  names: string
  @IsString()
  contact: string
  @IsString()
  maill: string
  @IsString()
  phoneNum: string
  @IsString()
  typeService: string
  
}
