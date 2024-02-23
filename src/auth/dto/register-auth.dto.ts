/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/swagger';
import { LoginAuthDto } from './login-auth.dto';
import { IsNotEmpty, ValidateNested } from 'class-validator';
import { CreateSaleDto } from 'src/sales/dto/create-sale.dto';
import { Type } from 'class-transformer';

export class RegisterAuthDto extends PartialType(LoginAuthDto) {
  @IsNotEmpty()
  name: string;
  
  @IsNotEmpty()
  lastName: string;
  
  @IsNotEmpty()
  city: string;
  
  @IsNotEmpty()
  phone: string;

  @ValidateNested({ each: true })
  @Type(() => CreateSaleDto)
  sales: CreateSaleDto[];
  
 
}