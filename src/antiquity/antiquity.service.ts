import { Injectable } from '@nestjs/common';
import { CreateAntiquityDto } from './dto/create-antiquity.dto';
import { UpdateAntiquityDto } from './dto/update-antiquity.dto';

@Injectable()
export class AntiquityService {
  create(createAntiquityDto: CreateAntiquityDto) {
    return 'This action adds a new antiquity';
  }

  findAll() {
    return `This action returns all antiquity`;
  }

  findOne(id: number) {
    return `This action returns a #${id} antiquity`;
  }

  update(id: number, updateAntiquityDto: UpdateAntiquityDto) {
    return `This action updates a #${id} antiquity`;
  }

  remove(id: number) {
    return `This action removes a #${id} antiquity`;
  }
}
