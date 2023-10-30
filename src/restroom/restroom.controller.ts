import { Controller, Get, Post, Body } from '@nestjs/common';
import { RestroomService } from './restroom.service';
import { CreateRestroomDto } from './dto/create-restroom.dto';

@Controller('restroom')
export class RestroomController {
  constructor(private readonly restroomService: RestroomService) {}

  @Post()
  create(@Body() createRestroomDto: CreateRestroomDto) {
    return this.restroomService.create(createRestroomDto);
  }

  @Get()
  findAll() {
    return this.restroomService.findAll();
  }
}
