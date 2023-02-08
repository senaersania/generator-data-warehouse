import { Module } from '@nestjs/common';
import { TransactionsuccessService } from './transactionsuccess.service';
import { TransactionsuccessController } from './transactionsuccess.controller';

@Module({
  controllers: [TransactionsuccessController],
  providers: [TransactionsuccessService]
})
export class TransactionsuccessModule {}
