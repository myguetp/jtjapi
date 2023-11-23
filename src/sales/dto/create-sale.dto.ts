import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSaleDto {
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
  filename: string[];
}
