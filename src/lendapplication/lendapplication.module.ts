import { Module } from '@nestjs/common';
import { LendapplicationService } from './lendapplication.service';
import { LendapplicationController } from './lendapplication.controller';

@Module({
  controllers: [LendapplicationController],
  providers: [LendapplicationService]
})
export class LendapplicationModule {}
