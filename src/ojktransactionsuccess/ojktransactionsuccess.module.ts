import { Module } from '@nestjs/common';
import { OjktransactionsuccessService } from './ojktransactionsuccess.service';
import { OjktransactionsuccessController } from './ojktransactionsuccess.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OjkTransactionSuccess } from './entities/ojktransactionsuccess.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OjkTransactionSuccess])],
  controllers: [OjktransactionsuccessController],
  providers: [OjktransactionsuccessService]
})
export class OjktransactionsuccessModule {}
