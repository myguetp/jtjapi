/* eslint-disable prettier/prettier */
import {
  Controller,
  Post,
  UseInterceptors,
  HttpException,
  HttpStatus,
  UploadedFiles,
  Body,
  Get,
  Query,
} from '@nestjs/common';
import { FileService } from './file.service';
import { FilesInterceptor } from '@nestjs/platform-express';
import { CreateFileDto } from './dto/create-file.dto';
import { CreateCommerceDto } from './dto/create-commerce.dto';
import { diskStorage } from 'multer';

@Controller('filesd')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Post('uploads')
  @UseInterceptors(
    FilesInterceptor('files', 10, {
      storage: diskStorage({
        destination: (req, file, cb) => {
          cb(null, './uploads');
        },
        filename: (req, file, cb) => {
          const originalnameWithoutExtension = file.originalname
            .split('.')
            .slice(0, -1)
            .join('.');
          const filename = `${originalnameWithoutExtension}.${file.originalname
            .split('.')
            .pop()}`;
          console.log({ filename });
          cb(null, filename);
        },
      }),
      fileFilter: (req, file, cb) => {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
          return cb(
            new HttpException(
              'Solo se permiten archivos JPG o PNG',
              HttpStatus.BAD_REQUEST,
            ),
            false,
          );
        }
        cb(null, true);
      },
    }),
  )
  async uploadFiles(
    @UploadedFiles() files: Express.Multer.File[],
    @Body() body: CreateCommerceDto,
  ) {
    console.log('Received request:', { files, body });
    try {
      if (!files || files.length === 0) {
        console.log('files', files);
        throw new HttpException(
          'No se encontró ningún archivo.',
          HttpStatus.BAD_REQUEST,
        );
      }

      const createFileDto: CreateFileDto = {
        files: files,
        names: body.names,
        contact: body.contact,
        maill: body.maill,
        phoneNum: body.phoneNum,
        typeService: body.typeService,
        descripton: body.descripton,
      };

      const response = await this.fileService.uploadFiles(createFileDto);

      const formattedResponse = [
        {
          files: response.files.map((file) => ({
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
          descripton: response.descripton,
        },
      ];

      return formattedResponse;
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'Error al subir los archivos: ' + error.message,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
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
