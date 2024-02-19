/* eslint-disable prettier/prettier */
import { Controller, Post, Body, Param, Get, UploadedFile } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { ApiTags } from '@nestjs/swagger';
import { LoginAuthDto } from './dto/login-auth.dto';
import { CreateSaleDto, CustomFile } from 'src/sales/dto/create-sale.dto';
import { SalesService } from 'src/sales/sales.service';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService, private readonly salesService: SalesService) {}

  @Get('allUser')
  findAll() {
    return this.authService.findAll();
  }

  @Get('allUser/:id')
  findOne(@Param('id') _id: string) {
    return this.authService.findOne(_id);
  }

  @Post('register')
  registerUser(@Body() userObject: RegisterAuthDto) {
    
    return this.authService.register(userObject);
  }

  @Post(':_id/sales') 
  addSaleToUser(@Param('_id') userId: string, @Body() createSaleDto: CreateSaleDto) {
    return this.authService.addSaleToUser(userId, createSaleDto);
  }

  @Post('login')
  loginUser(@Body() userObjectLogin: LoginAuthDto){
    return this.authService.login(userObjectLogin)
  }

}
