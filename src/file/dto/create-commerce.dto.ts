/* eslint-disable prettier/prettier */
import { IsString } from 'class-validator';

export class CreateCommerceDto {
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
  @IsString()
  descripton: string
  
}
