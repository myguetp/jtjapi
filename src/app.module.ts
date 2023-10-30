import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SalesModule } from './sales/sales.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { LeasesModule } from './leases/leases.module';
import { RentModule } from './rent/rent.module';
import { OfertModule } from './ofert/ofert.module';
import { StratumModule } from './stratum/stratum.module';
import { PropertyTypeModule } from './property-type/property-type.module';
import { AntiquityModule } from './antiquity/antiquity.module';
import { RoomModule } from './room/room.module';
import { RestroomModule } from './restroom/restroom.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    SalesModule,
    AuthModule,
    UsersModule,
    LeasesModule,
    RentModule,
    OfertModule,
    StratumModule,
    PropertyTypeModule,
    AntiquityModule,
    RoomModule,
    RestroomModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
