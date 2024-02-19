/* eslint-disable prettier/prettier */
// import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, ValidateNested } from 'class-validator';

export interface CustomFile {
  name: string;
  type: string;
}

export class CreateSaleDto {
   
  @IsNotEmpty()
  ofert: string;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  phone: string;

  @IsNotEmpty()
  parking: string;
  
  @IsNotEmpty()
  neighborhood: string;
  
  @IsNotEmpty()
  country: string;

  @IsNotEmpty()
  city: string;
  
  @IsNotEmpty()
  property: string;
  
  @IsNotEmpty()
  stratum: string;
  
 
  @IsNotEmpty()
  price: number

  @IsNotEmpty()
  room: string;
  
  @IsNotEmpty()
  restroom: string;
  
  @IsNotEmpty()
  age: string;
  
  administration: string;
  
  @IsNotEmpty()
  area: number;
  
  @IsNotEmpty()
  description: string;
  
  @IsArray()
  @ValidateNested({ each: true })
  file: CustomFile[];
 
}