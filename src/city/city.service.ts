import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { City } from './shema/city.shema';

@Injectable()
export class CityService {
  constructor(
    @InjectModel(City.name)
    private cityModel: Model<City>,
  ) {}

  async findAll(): Promise<City[]> {
    try {
      // Intenta obtener las ciudades desde MongoDB
      const mongoCities = await this.cityModel.find().exec();

      if (mongoCities.length > 0) {
        return mongoCities;
      }

      // Si no hay ciudades en MongoDB, obtener desde la API y almacenar en MongoDB
      const apiUrl = 'https://api-colombia.com/v1/location/cities';
      const response = await axios.get(apiUrl);
      const cities = response.data.data;

      // Almacena las ciudades en MongoDB para futuras consultas
      await this.cityModel.create(cities);

      return cities;
    } catch (error) {
      console.error('Error al obtener las ciudades:', error.message);
      throw error;
    }
  }
}
