/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { SalesService } from './sales.service';
import { SalesController } from './sales.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SaleSchema, Sales } from './shema/sales.shema';

@Module({
  imports: [MongooseModule.forFeature([
    {
      name: Sales.name,
      schema: SaleSchema
    }
  ])],
  controllers: [SalesController],
  providers: [SalesService],
})
export class SalesModule {}
