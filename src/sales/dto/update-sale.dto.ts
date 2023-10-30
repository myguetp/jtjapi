import { PartialType } from '@nestjs/mapped-types';
import { CreateSaleDto } from './create-sale.dto';
import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateSaleDto extends PartialType(CreateSaleDto) {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  ofert: string;
  @IsNotEmpty()
  phone: string;
  @IsNotEmpty()
  email: string;
  @IsNotEmpty()
  city: string;
  @IsNotEmpty()
  neigborhood: string;
  @IsNotEmpty()
  property: string;
  @IsNotEmpty()
  stratum: string;
  @IsNotEmpty()
  breed: string;
  @IsNotEmpty()
  price: string;
  @IsNotEmpty()
  age: string;
  @IsNotEmpty()
  administration: string;
  @IsNotEmpty()
  area: string;
  @IsNotEmpty()
  description: string;
  @ApiProperty({ type: [String] })
  picture: string[];
}
