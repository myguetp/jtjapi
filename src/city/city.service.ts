/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { City } from './shema/city.shema';
import { CreateCityDto } from './dto/create-city.dto';

@Injectable()
export class CityService {
  constructor(
    @InjectModel(City.name)
    private cityModel: Model<City>,
  ) {}

  async create(createCityDto: CreateCityDto) {
    const ofertCrate = await this.cityModel.create(createCityDto);
    return ofertCrate;
  }

  async findAll() {
    const list = await this.cityModel.find({});
    return list;
  }
}
