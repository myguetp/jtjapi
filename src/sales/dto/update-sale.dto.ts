/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/swagger';
// import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, ValidateNested } from 'class-validator';
import { CreateSaleDto } from './create-sale.dto';

interface CustomFile {
  name: string;
  type: string;
}

export class UpdateSaleDto extends PartialType(CreateSaleDto) {
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
  price: number;

  @IsNotEmpty()
  room: string;

  @IsNotEmpty()
  restroom: string;

  @IsNotEmpty()
  age: string;

  @IsNotEmpty()
  administration: string;

  @IsNotEmpty()
  area: number;

  @IsNotEmpty()
  description: string;

  @IsArray()
  @ValidateNested({ each: true })
  file: CustomFile[];
}
