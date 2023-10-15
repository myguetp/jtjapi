import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AntiquityService } from './antiquity.service';
import { CreateAntiquityDto } from './dto/create-antiquity.dto';
import { UpdateAntiquityDto } from './dto/update-antiquity.dto';

@Controller('antiquity')
export class AntiquityController {
  constructor(private readonly antiquityService: AntiquityService) {}

  @Post()
  create(@Body() createAntiquityDto: CreateAntiquityDto) {
    return this.antiquityService.create(createAntiquityDto);
  }

  @Get()
  findAll() {
    return this.antiquityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.antiquityService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAntiquityDto: UpdateAntiquityDto) {
    return this.antiquityService.update(+id, updateAntiquityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.antiquityService.remove(+id);
  }
}
