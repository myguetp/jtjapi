/* eslint-disable prettier/prettier */
import { HttpException, Injectable } from '@nestjs/common';
import { User, UserDocument } from 'src/users/shema/users.shema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { hash, compare } from 'bcrypt'
import { LoginAuthDto } from './dto/login-auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwtSetvice: JwtService
  ) {}

  async register(userObject: RegisterAuthDto) {
    const  { password } =  userObject;
    const plainToHash = await hash(password, 10);
    userObject = {...userObject, password: plainToHash};
    return this.userModel.create(userObject)
  }
  async login(userObjectLogin: LoginAuthDto) {
    const { email, password } = userObjectLogin
    const findUser = await this.userModel.findOne({email})
    console.log({ findUser })
    if(!findUser) new HttpException('usuario no encontrado', 404)
    
    const checkPassword = await compare(password, findUser.password);

    if(!checkPassword) new HttpException('PASSWORD_INCORRECT', 403)

    const payload = {id: findUser._id, name: findUser.name}
    const token = this.jwtSetvice.sign(payload)
    console.log({ token })

    const data = {
      user: findUser,
      token,
    };

    return data;

  }
}
