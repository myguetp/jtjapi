/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, UseInterceptors, Param, Put, Delete } from '@nestjs/common';
import { SalesService } from './sales.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { File } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';

const storage = diskStorage({
  destination: './uploads',
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const extension = extname(file.originalname);
    cb(null, `${file.fieldname}-${uniqueSuffix}${extension}`);
  },
});

@Controller('sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Post('uploadcrate')
  @UseInterceptors(
    FilesInterceptor('picture', 10, {
      storage: storage,
    }),
  )
  async create(@Body() createSaleDto: CreateSaleDto) {
    createSaleDto.picture = this.mapFilesInfo(createSaleDto.picture);
    
    console.log('Received DTO:', createSaleDto);
    return this.salesService.create(createSaleDto);
  }

  private mapFilesInfo(pictures: File[]): File[] {
    return pictures.map((file) => ({
      fieldname: file.fieldname,
      originalname: file.originalname,
      encoding: file.encoding,
      mimetype: file.mimetype
    }));
  }

  @Get()
  findAll() {
    return this.salesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') _id: string) {
    return this.salesService.findOne(_id);
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