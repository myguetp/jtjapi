/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Put, Delete, Param, Query, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { SalesService } from './sales.service';
import { CreateSaleDto } from './dto/create-sale.dto';

import { UpdateSaleDto } from './dto/update-sale.dto';
import { FilesInterceptor } from '@nestjs/platform-express/multer/interceptors/files.interceptor';
import { diskStorage } from 'multer';


@Controller('sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Post('uploadcrate')
  @UseInterceptors(
    FilesInterceptor('file', 10, {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, callback) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
          callback(null, file.fieldname + '-' + uniqueSuffix);
        },
      }),
    })
  )
  async create(@UploadedFiles() files: Express.Multer.File[], @Body() createSaleDto: CreateSaleDto) {
    try {
      if (files && files.length > 0) {
        createSaleDto.file = files.map(file => ({ name: file.originalname, type: file.mimetype }));
      }
  
      const result = await this.salesService.create(createSaleDto);
      
      return result;
    } catch (error) {
      console.error('Error uploading files:', error);
      throw error;
    }
  }

  @Get('byAllData')
  findAllByAllMethods(
  @Query('stratum') stratum?: string,
  @Query('room') room?: string,
  @Query('restroom') restroom?: string,
  @Query('age') age?: string,
  @Query('parking') parking?: string,
  @Query('property') property?: string,
  @Query('minPrice') minPrice?: number,
  @Query('maxPrice') maxPrice?: number,
  @Query('minArea') minArea?: number,
  @Query('maxArea') maxArea?: number

) {
  return this.salesService.findAllByAllMethods(stratum, room, restroom, age, parking, property, minPrice, maxPrice, minArea, maxArea);
}

  
  @Get(':id')
  findOne(@Param('id') _id: string) {
    return this.salesService.findOne(_id);
  }

  @Get('byProperty/:property')
  findAllByProperty(@Param('property') property: string) {
    return this.salesService.findAllByProperty(property);
  }

  @Get('byProperty/:ofert')
  findAllByOfert(@Param('ofert') ofert: string) {
    return this.salesService.findAllByOfert(ofert);
  }

  @Put(':id')
  update(@Param('id') _id: string, @Body() updateSaleDto: UpdateSaleDto) {
    return this.salesService.update(_id, updateSaleDto);
  }

  @Delete(':id')
  delete(@Param('id') _id: string) {
    return this.salesService.delete(_id);
  }
}