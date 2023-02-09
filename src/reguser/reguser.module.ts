import { Module } from '@nestjs/common';
import { ReguserService } from './reguser.service';
import { ReguserController } from './reguser.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegUser } from './entities/reguser.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RegUser])],
  controllers: [ReguserController],
  providers: [ReguserService]
})
export class ReguserModule {}
