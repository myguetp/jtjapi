import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StratumService } from './stratum.service';
import { CreateStratumDto } from './dto/create-stratum.dto';
import { UpdateStratumDto } from './dto/update-stratum.dto';

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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stratumService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStratumDto: UpdateStratumDto) {
    return this.stratumService.update(+id, updateStratumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stratumService.remove(+id);
  }
}
