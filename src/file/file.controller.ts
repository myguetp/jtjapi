/* eslint-disable prettier/prettier */
import { Controller, Post, UseInterceptors, HttpException, HttpStatus, UploadedFiles, Body } from '@nestjs/common';
import { FileService } from './file.service';
import { FilesInterceptor } from '@nestjs/platform-express';
import { CreateFileDto } from './dto/create-file.dto';

@Controller('files')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Post('uploads')
@UseInterceptors(FilesInterceptor('files'))
async uploadFiles(@UploadedFiles() files: Express.Multer.File[], @Body() body: { names: string, contact: string, maill: string, phoneNum: string, typeService: string }) {
  try {
    if (!files || files.length === 0) {
      throw new HttpException('No se encontró ningún archivo.', HttpStatus.BAD_REQUEST);
    }

    const createFileDto: CreateFileDto = {
      files: files,
      names: body.names,
      contact: body.contact,
      maill: body.maill,
      phoneNum: body.phoneNum,
      typeService: body.typeService,
    };

    return this.fileService.uploadFiles(createFileDto);

  } catch (error) {
    console.error(error);
    throw new HttpException('Error al subir los archivos.', HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
}
