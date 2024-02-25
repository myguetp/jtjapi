/* eslint-disable prettier/prettier */
import { IsArray, IsNotEmpty, IsObject } from 'class-validator';
import { CreateCommerceDto } from './create-commerce.dto';

export class CreateFileDto extends CreateCommerceDto  {
  @IsArray()
  @IsNotEmpty({ each: true })
  @IsObject({ each: true })
  files: Express.Multer.File[];
  // @IsString()
  // names: string
  // @IsString()
  // contact: string
  // @IsString()
  // maill: string
  // @IsString()
  // phoneNum: string
  // @IsString()
  // typeService: string
  
}
