/* eslint-disable prettier/prettier */
import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { User, UserDocument } from 'src/users/shema/users.shema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { hash, compare } from 'bcrypt'
import { LoginAuthDto } from './dto/login-auth.dto';
import { JwtService } from '@nestjs/jwt';
import { CreateSaleDto } from 'src/sales/dto/create-sale.dto';
import { SalesService } from 'src/sales/sales.service';
import { CreateFileDto } from 'src/file/dto/create-file.dto';
import { FileService } from 'src/file/file.service';


@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwtSetvice: JwtService,
    private salesService: SalesService,
    private fileService: FileService
  ) {}


  async findAll() {
    const list = await this.userModel.find({});
    return list;
  }

  async findOne(_id: string) {
    const findone = await this.userModel.findById(_id);
    return findone;
  }

  async register(userObject: RegisterAuthDto) {
    const { password } = userObject;
    const plainToHash = await hash(password, 10);
    const userWithHashedPassword = { ...userObject, password: plainToHash };
  
    const newUser = await this.userModel.create(userWithHashedPassword);
  
 
    return newUser;
  }
  
  async login(userObjectLogin: LoginAuthDto) {
    const { email, password } = userObjectLogin
    const findUser = await this.userModel.findOne({email})
    if(!findUser) new HttpException('usuario no encontrado', 404)
    
    const checkPassword = await compare(password, findUser.password);

    if(!checkPassword) new HttpException('PASSWORD_INCORRECT', 403)

    const payload = {id: findUser._id, name: findUser.name}
    const token = this.jwtSetvice.sign(payload)

    const data = {
      user: findUser,
      token,
    };

    return data;

  }

  async addSaleToUser(userId: string, createSaleDto: CreateSaleDto) {
    const user = await this.userModel.findById(userId).exec();
  
    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }
  
    await this.salesService.create(createSaleDto);
  
    user.sales.push(createSaleDto);
    await user.save();
  
  
    return user;
  }


  async addCommerceToUser(userId: string, createFileDto: CreateFileDto) {
    const user = await this.userModel.findById(userId).exec();

    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }

    await this.fileService.uploadFiles(createFileDto);

    user.commerce.push(createFileDto);
    await user.save();

    return user;

  }
}
