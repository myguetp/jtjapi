import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { SalesService } from './sales.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('sales')
@Controller('sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Post()
  create(@Body() createSaleDto: CreateSaleDto) {
    return this.salesService.create(createSaleDto);
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
