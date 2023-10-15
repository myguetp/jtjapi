import { Module } from '@nestjs/common';
import { AntiquityService } from './antiquity.service';
import { AntiquityController } from './antiquity.controller';

@Module({
  controllers: [AntiquityController],
  providers: [AntiquityService],
})
export class AntiquityModule {}
