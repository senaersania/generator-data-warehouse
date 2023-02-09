import { Module } from '@nestjs/common';
import { OjkLendApplicationService } from './ojk-lend-application.service';
import { OjkLendApplicationController } from './ojk-lend-application.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OjkLendApplication } from './entities/ojk-lend-application.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OjkLendApplication])],
  controllers: [OjkLendApplicationController],
  providers: [OjkLendApplicationService]
})
export class OjkLendApplicationModule {}
