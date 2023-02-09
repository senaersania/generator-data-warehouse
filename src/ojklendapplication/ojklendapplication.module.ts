import { Module } from '@nestjs/common';
import { OjklendapplicationService } from './ojklendapplication.service';
import { OjklendapplicationController } from './ojklendapplication.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OjkLendApplication } from './entities/ojklendapplication.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OjkLendApplication])],
  controllers: [OjklendapplicationController],
  providers: [OjklendapplicationService]
})
export class OjklendapplicationModule {}
