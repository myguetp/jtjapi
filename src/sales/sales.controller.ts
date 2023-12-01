/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseInterceptors,
  UploadedFiles,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { SalesService } from './sales.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { binary } from 'joi';
const fs = require('fs');


@Controller('sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  private readonly logger = new Logger('SalesController');

@Post('upload')
create(@Body() createSaleDto: CreateSaleDto) {

  
  try {

    const binaryFiles = createSaleDto.filename.map(e => fs.readFileSync(e.path));

    binaryFiles.forEach((e, i) => {
      fs.writeFileSync(`./upload/${createSaleDto.filename[i].name}`, e, 'binary', (err) => {
        if (err) throw err;
      });

    });
  
    console.log(binaryFiles);


    //Get Bynary files images



    // createSaleDto.filename = files.map(e => e.filename);
    // console.log(createSaleDto);
    // const createdSale = this.salesService.create(createSaleDto, files);
    // return createdSale;
  } catch (error) {
    this.logger.error(`Error creating sale: ${error.message}`);
    throw new InternalServerErrorException('Error creating sale');
  }
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
