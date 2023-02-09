import { Module } from '@nestjs/common';
import { OjkTransactionSuccessService } from './ojk-transaction-success.service';
import { OjkTransactionSuccessController } from './ojk-transaction-success.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OjkTransactionSuccess } from './entities/ojk-transaction-success.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OjkTransactionSuccess])],
  controllers: [OjkTransactionSuccessController],
  providers: [OjkTransactionSuccessService]
})
export class OjkTransactionSuccessModule {}
