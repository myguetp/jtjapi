/* eslint-disable prettier/prettier */
import { Controller, Post, Body, Param } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { ApiTags } from '@nestjs/swagger';
import { LoginAuthDto } from './dto/login-auth.dto';
import { CreateSaleDto } from 'src/sales/dto/create-sale.dto';
import { CreateLeaseDto } from 'src/leases/dto/create-lease.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  registerUser(@Body() userObject: RegisterAuthDto) {
    return this.authService.register(userObject);
  }

  @Post(':id/sales') // Endpoint para agregar una venta a un usuario
  addSaleToUser(@Param('id') userId: string, @Body() createSaleDto: CreateSaleDto) {
    return this.authService.addSaleToUser(+userId, createSaleDto);
  }

  @Post(':id/leases') // Endpoint para agregar un contrato de arrendamiento a un usuario
  addLeaseToUser(@Param('id') userId: string, @Body() createLeaseDto: CreateLeaseDto) {
    return this.authService.addLeaseToUser(+userId, createLeaseDto);
  }

  @Post('login')
  loginUser(@Body() userObjectLogin: LoginAuthDto){
    return this.authService.login(userObjectLogin)
  }

}
