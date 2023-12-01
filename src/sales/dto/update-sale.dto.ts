import { PartialType } from '@nestjs/swagger';
import { CreateSaleDto } from './create-sale.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateSaleDto extends PartialType(CreateSaleDto) {
  @IsString()
  @IsNotEmpty()
  register: string;
  @IsNotEmpty()
  ofert: string;
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
  room: string;
  @IsNotEmpty()
  restroom: string;
  @IsNotEmpty()
  age: string;
  @IsNotEmpty()
  administration: string;
  @IsNotEmpty()
  area: string;
  @IsNotEmpty()
  description: string;
  @IsNotEmpty()
  filename: {
    path: string;
    name: string;
  }[]
}
