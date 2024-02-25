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
    files: {
      originalname: string;
      filename: string;
      mimetype: string;
      size: number;
      _id: string;
      __v: number;
    }[];
    names: string;
    contact: string;
    maill: string;
    phoneNum: string;
    typeService: string;
  }> {
    try {
      const filesData = createFileDto.files.map((file) => ({
        originalname: file.originalname,
        filename: file.originalname,
        mimetype: file.mimetype,
        size: file.size,
        buffer: file.buffer,
      }));
  
      const fileInstance = new this.fileModel({
        files: filesData,
        names: createFileDto.names,
        contact: createFileDto.contact,
        maill: createFileDto.maill,
        phoneNum: createFileDto.phoneNum,
        typeService: createFileDto.typeService,
      });
  
      const savedFile = await fileInstance.save();
  
      return {
        files: savedFile.files.map((file) => ({
          originalname: file.originalname,
          filename: file.filename,
          mimetype: file.mimetype,
          size: file.size,
          _id: file._id,
          __v: file.__v,
        })),
        names: savedFile.names,
        contact: savedFile.contact,
        maill: savedFile.maill,
        phoneNum: savedFile.phoneNum,
        typeService: savedFile.typeService,
      };
    } catch (error) {
      console.error(error);
      throw new Error(
        'Error al guardar los archivos en la base de datos. Detalles: ' +
          error.message,
      );
    }
  }

  async findAllByAllMethods(
    names?: string,
    contact?: string,
    typeService?: string,
  ) {
    const query: any = {};
  
    if (names !== undefined) {
      query.stratum = names;
    }
  
    if (contact !== undefined) {
      query.room = contact;
    }
  
    if (typeService !== undefined) {
      query.restroom = typeService;
    }
  
   

    const list = await this.fileModel.find(query).exec();
    return list;
  }
}
