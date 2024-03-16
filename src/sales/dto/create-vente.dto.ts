/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateVenteDto {
  @IsNotEmpty()
  @IsString()
  ofert: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsString()
  parking: string;

  @IsNotEmpty()
  @IsString()
  neighborhood: string;

  @IsNotEmpty()
  @IsString()
  country: string;

  @IsNotEmpty()
  @IsString()
  city: string;

  @IsNotEmpty()
  @IsString()
  property: string;

  @IsString()
  stratum: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsString()
  room: string;

  @IsString()
  restroom: string;

  @IsNotEmpty()
  age: string;

  @IsString()
  administration: string;

  @IsNotEmpty()
  @IsNumber()
  area: number;

  @IsString()
  description: string;
}
