/* eslint-disable prettier/prettier */
import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsString, Max, Min, ValidateNested } from 'class-validator';

export class File {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
}

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
  @Min(0)
  @Max(9999999)
  price: number

  @IsNotEmpty()
  room: string;
  
  @IsNotEmpty()
  restroom: string;
  
  @IsNotEmpty()
  age: string;
  
  @IsNotEmpty()
  administration: string;
  
  @IsNotEmpty()
  @Min(0)
  @Max(9999999)
  area: number;
  
  @IsNotEmpty()
  description: string;
  
  @IsNotEmpty()
  createdAt: number = Date.now();
  
  @IsNotEmpty()
  finnallyAt: number = Date.now() + 60 * 24 * 60 * 60 * 1000;
  
  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => File)
  picture: File[];

  constructor(data?: Partial<CreateSaleDto>) {
    Object.assign(this, data);
    this.createdAt = Date.now();
    this.finnallyAt = this.createdAt + 60 * 24 * 60 * 60 * 1000;
  }
}