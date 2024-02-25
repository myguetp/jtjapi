/* eslint-disable prettier/prettier */
import { Controller, Post, UseInterceptors, HttpException, HttpStatus, UploadedFiles, Body, Get, Query } from '@nestjs/common';
import { FileService } from './file.service';
import { FilesInterceptor } from '@nestjs/platform-express';
import { CreateFileDto } from './dto/create-file.dto';
import { CreateCommerceDto } from './dto/create-commerce.dto';

@Controller('files')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Post('uploads')
  @UseInterceptors(FilesInterceptor('files'))
  async uploadFiles(@UploadedFiles() files: Express.Multer.File[], @Body() body: CreateCommerceDto) {
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
  
      const response = await this.fileService.uploadFiles(createFileDto);
  
      const formattedResponse = [{
        files: response.files.map(file => ({
          originalname: file.originalname,
          filename: file.filename,
          mimetype: file.mimetype,
          size: file.size,
          _id: file._id,
          __v: file.__v,
        })),
        names: response.names,
        contact: response.contact,
        maill: response.maill,
        phoneNum: response.phoneNum,
        typeService: response.typeService,
      }];
  
      return formattedResponse;
  
    } catch (error) {
      console.error(error);
      throw new HttpException('Error al subir los archivos.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('byAllData')
  findAllByAllMethods(
  @Query('names') names?: string,
  @Query('contact') contact?: string,
  @Query('typeService') typeService?: string,

) {
  return this.fileService.findAllByAllMethods(names, contact, typeService);
}

}
