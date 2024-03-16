import { IsNotEmpty } from 'class-validator';

/* eslint-disable prettier/prettier */
export class CreateInfoClientDto {
  @IsNotEmpty()
  prod: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  emailClient: string;

  @IsNotEmpty()
  cellphone: string;
}
