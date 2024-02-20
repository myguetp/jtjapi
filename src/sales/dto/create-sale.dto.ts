/* eslint-disable prettier/prettier */
// import { Type } from 'class-transformer';
import { IsArray, IsEmail, IsNotEmpty, IsNumber, IsString, ValidateNested } from 'class-validator';

export interface CustomFile {
  name: string;
  type: string;
}

export class CreateSaleDto {
   
  // all
  @IsNotEmpty()
  @IsString()
  ofert: string;
  // all
  @IsNotEmpty()
  @IsEmail()
  email: string;
  // all
  @IsNotEmpty()
  @IsString()
  phone: string;

  //Apartamento
  //Casa
  //oficina
  @IsString()
  parking: string;

  //Efificio.
  @IsString()
  flower: string
  
  //All
  @IsNotEmpty()
  @IsString()
  neighborhood: string;
  
  //All
  @IsNotEmpty()
  @IsString()
  country: string;
  
  //All
  @IsNotEmpty()
  @IsString()
  city: string;

  // All
  @IsNotEmpty()
  @IsString()
  property: string;
  
  //All
  @IsString()
  stratum: string;
  
   //All
  @IsNotEmpty()
  @IsNumber()
  price: number
  //Apartamento
  //Casa
  //Finca
  @IsString()
  room: string;
  //Apartamento
  //Casa
  //Finca
  @IsString()
  restroom: string;
  //Apartamento
  //Casa
  //Finca
  @IsNotEmpty()
  age: string;
  //Apartamento
  //Casa
  //Finca
  //Oficina
  @IsString()
  administration: string;
  
  //All
  @IsNotEmpty()
  @IsNumber()
  area: number;
  //All
  @IsString()
  description: string;
  //All
  @IsArray()
  @ValidateNested({ each: true })
  file: CustomFile[];
 
}