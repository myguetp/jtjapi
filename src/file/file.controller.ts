/* eslint-disable prettier/prettier */
import { Controller, Post, UseInterceptors, HttpException, HttpStatus, UploadedFiles } from '@nestjs/common';
import { FileService } from './file.service';
import { FilesInterceptor } from '@nestjs/platform-express';
import { CreateFileDto } from './dto/create-file.dto';

@Controller('files')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Post('uploads')
  @UseInterceptors(FilesInterceptor('files'))
  async uploadFiles(@UploadedFiles() files: Express.Multer.File[]) {
    try {
      if (!files || files.length === 0) {
        throw new HttpException('No se encontró ningún archivo.', HttpStatus.BAD_REQUEST);
      }

      const createFileDtos: CreateFileDto[] = files.map(file => ({
        files: [file], // crea un array con el archivo y asigna a la propiedad files de CreateFileDto
      }));

      const savedFiles = await this.fileService.uploadFiles(createFileDtos);
      return { message: 'Éxito al enviar los archivos.', data: savedFiles };
    } catch (error) {
      console.error(error);
      throw new HttpException('Error al subir los archivos.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
