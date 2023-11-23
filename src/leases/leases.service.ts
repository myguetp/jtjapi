/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateLeaseDto } from './dto/create-lease.dto';
import { UpdateLeaseDto } from './dto/update-lease.dto';
import { Leases, LeasesDocument } from './shema/leases.shema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class LeasesService {
  constructor(
    @InjectModel(Leases.name) private leasesModule: Model<LeasesDocument>,
  ) {}

  async create(createLeaseDto: CreateLeaseDto) {
    const { picture, ...rest } = createLeaseDto;
    const picturesBuffer = picture.map((base64String: string) =>
      Buffer.from(base64String, 'base64'),
    );

    const saleCrate = await this.leasesModule.create({
      ...rest,
      picture: picturesBuffer,
    });

    return saleCrate;
  }

  async findAll() {
    const list = await this.leasesModule.find({});
    return list;
  }

  findOne(id: number) {
    return `This action returns a #${id} lease`;
  }

  update(id: number, updateLeaseDto: UpdateLeaseDto) {
    return `This action updates a #${id} lease`;
  }

  remove(id: number) {
    return `This action removes a #${id} lease`;
  }
}
