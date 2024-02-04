import { Controller, Get } from '@nestjs/common';
import { CityService } from './city.service';

@Controller('city')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Get()
  async findAll(): Promise<any[]> {
    try {
      const cities = await this.cityService.findAll();

      return cities;
    } catch (error) {
      console.error('Error al obtener las ciudades:', error.message);
      throw error;
    }
  }
}
