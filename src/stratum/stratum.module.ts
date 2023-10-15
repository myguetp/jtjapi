import { Module } from '@nestjs/common';
import { StratumService } from './stratum.service';
import { StratumController } from './stratum.controller';

@Module({
  controllers: [StratumController],
  providers: [StratumService],
})
export class StratumModule {}
