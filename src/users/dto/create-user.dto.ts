/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { CreateSaleDto } from 'src/sales/dto/create-sale.dto';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsNotEmpty()
  lastName: string;
  @IsString()
  @IsNotEmpty()
  city: string;
  @IsString()
  @IsNotEmpty()
  phone: string;
  @IsString()
  @IsNotEmpty()
  email: string;
  @IsEmail()
  @IsNotEmpty()
  password: string;

  @ValidateNested({ each: true })
  sales: CreateSaleDto[];
}
