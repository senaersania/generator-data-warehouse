import { Module } from '@nestjs/common';
import { ReguserService } from './reguser.service';
import { ReguserController } from './reguser.controller';

@Module({
  controllers: [ReguserController],
  providers: [ReguserService]
})
export class ReguserModule {}
