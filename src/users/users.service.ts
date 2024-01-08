import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateSaleDto } from '../sales/dto/create-sale.dto';
import { User, UserDocument } from './shema/users.shema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModule: Model<UserDocument>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const createdUser = new this.userModule(createUserDto);
    return createdUser.save();
  }

  async findAll() {
    return this.userModule.find().exec();
  }

  async findOne(id: number) {
    return this.userModule.findById(id).exec();
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return '';
  }

  async remove(id: number) {
    return this.userModule.findByIdAndRemove(id).exec();
  }

  async addSaleToUser(userId: number, createSaleDto: CreateSaleDto) {
    const user = await this.userModule.findById(userId).exec();

    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }

    user.sales.push(createSaleDto);
    await user.save();

    return user;
  }
}
