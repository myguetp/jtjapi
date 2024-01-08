/* eslint-disable prettier/prettier */
import { config } from 'dotenv';
config();

import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { MulterModule } from '@nestjs/platform-express'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { LeasesModule } from './leases/leases.module'
import { RentModule } from './rent/rent.module'
import { OfertModule } from './ofert/ofert.module'
import { StratumModule } from './stratum/stratum.module'
import { PropertyTypeModule } from './property-type/property-type.module'
import { AntiquityModule } from './antiquity/antiquity.module'
import { RoomModule } from './room/room.module'
import { RestroomModule } from './restroom/restroom.module'
import { AdvertisementsModule } from './advertisements/advertisements.module'
import { ServiceTypeModule } from './service-type/service-type.module'
import { SpecialityModule } from './speciality/speciality.module'
import { AuthModule } from './auth/auth.module'
import { UsersModule } from './users/users.module'
import { SalesModule } from './sales/sales.module'
import { MailerModule } from './mailer/mailer.module';
import { InfoClientModule } from './info-client/info-client.module';
import { ParkingModule } from './parking/parking.module';
import * as path from 'path'

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI),
    MulterModule.register({
      dest: path.join(__dirname, '..', 'uploads'),
    }),
    LeasesModule,
    RentModule,
    OfertModule,
    StratumModule,
    PropertyTypeModule,
    AntiquityModule,
    RoomModule,
    RestroomModule,
    AdvertisementsModule,
    ServiceTypeModule,
    SpecialityModule,
    AuthModule,
    UsersModule,
    SalesModule,
    MailerModule,
    InfoClientModule,
    ParkingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}