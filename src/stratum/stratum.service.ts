import { Injectable } from '@nestjs/common';
import { CreateStratumDto } from './dto/create-stratum.dto';
import { UpdateStratumDto } from './dto/update-stratum.dto';

@Injectable()
export class StratumService {
  create(createStratumDto: CreateStratumDto) {
    return 'This action adds a new stratum';
  }

  findAll() {
    return `This action returns all stratum`;
  }

  findOne(id: number) {
    return `This action returns a #${id} stratum`;
  }

  update(id: number, updateStratumDto: UpdateStratumDto) {
    return `This action updates a #${id} stratum`;
  }

  remove(id: number) {
    return `This action removes a #${id} stratum`;
  }
}
