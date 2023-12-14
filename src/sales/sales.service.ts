/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Sales, SalesDocument } from './shema/sales.shema';
import { Model } from 'mongoose';

@Injectable()
export class SalesService {
  constructor(
    @InjectModel(Sales.name) private salesModule: Model<SalesDocument>,
  ) {}

  async create(createSaleDto: CreateSaleDto) {
    try {
      const sale = new this.salesModule(createSaleDto);

      const createdSale = await sale.save();

      return createdSale;
    } catch (error) {
      console.error('Error al crear la venta:', error.message);
      throw error;
    }
  }

  async findAll() {
    const list = await this.salesModule.find({});
    return list;
  }

  async findOne(_id: string) {
    const findone = await this.salesModule.findOne({ where: { _id } });
    return findone;
  }

  async update(_id: string, updateSaleDto: UpdateSaleDto) {
    const update = await this.salesModule.findByIdAndUpdate(_id, updateSaleDto);
    return update;
  }

  async delete(_id: string) {
    const remove = await this.salesModule.findByIdAndDelete(_id);
    return remove;
  }
}
