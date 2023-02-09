import { Module } from '@nestjs/common';
import { RegUserService } from './reg-user.service';
import { RegUserController } from './reg-user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegUser } from './entities/reg-user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RegUser])],
  controllers: [RegUserController],
  providers: [RegUserService]
})
export class RegUserModule {}
