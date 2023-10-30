import { Controller, Get, Post, Body } from '@nestjs/common';
import { StratumService } from './stratum.service';
import { CreateStratumDto } from './dto/create-stratum.dto';

@Controller('stratum')
export class StratumController {
  constructor(private readonly stratumService: StratumService) {}

  @Post()
  create(@Body() createStratumDto: CreateStratumDto) {
    return this.stratumService.create(createStratumDto);
  }

  @Get()
  findAll() {
    return this.stratumService.findAll();
  }
}
