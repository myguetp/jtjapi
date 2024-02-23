/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { File, FileDocument } from './shema/file.shema';
import { CreateFileDto } from './dto/create-file.dto';

@Injectable()
export class FileService {
  constructor(@InjectModel(File.name) private fileModel: Model<FileDocument>) {}

  async uploadFiles(
    createFileDto: CreateFileDto,
  ): Promise<{
    files: FileDocument[];
    names: string;
    contact: string;
    maill: string;
    phoneNum: string;
    typeService: string;
  }> {
    try {
      const savedFiles: Array<FileDocument> = [];

      for (const file of createFileDto.files) {
        const fileInstance = new this.fileModel({
          originalname: file.originalname,
          filename: file.originalname,
          mimetype: file.mimetype,
          size: file.size,
          buffer: file.buffer,
          names: createFileDto.names, 
          contact: createFileDto.contact,
          maill: createFileDto.maill,
          phoneNum: createFileDto.phoneNum,
          typeService: createFileDto.typeService,
        });

        const savedFile = await fileInstance.save();
        savedFiles.push(savedFile);
      }

      return {
        files: savedFiles,
        names: createFileDto.names,
        contact: createFileDto.contact,
        maill: createFileDto.maill,
        phoneNum: createFileDto.phoneNum,
        typeService: createFileDto.typeService,
      };
    } catch (error) {
      console.error(error);
      throw new Error(
        'Error al guardar los archivos en la base de datos. Detalles: ' +
          error.message,
      );
    }
  }
}
