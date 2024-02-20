import { IsArray, IsNotEmpty, IsObject } from 'class-validator';

export class CreateFileDto {
  @IsArray()
  @IsNotEmpty({ each: true })
  @IsObject({ each: true })
  files: Express.Multer.File[];
}
