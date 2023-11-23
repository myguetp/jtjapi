/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateLeaseDto {
  @IsString()
  @IsNotEmpty()
  idUser: string;
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
  @ApiProperty({ type: [String] })
  picture: string[];
}
