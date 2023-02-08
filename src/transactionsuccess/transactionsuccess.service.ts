import { Injectable } from '@nestjs/common';
import { CreateTransactionsuccessDto } from './dto/create-transactionsuccess.dto';
import { UpdateTransactionsuccessDto } from './dto/update-transactionsuccess.dto';

@Injectable()
export class TransactionsuccessService {
  create(createTransactionsuccessDto: CreateTransactionsuccessDto) {
    return 'This action adds a new transactionsuccess';
  }

  findAll() {
    return `This action returns all transactionsuccess`;
  }

  findOne(id: number) {
    return `This action returns a #${id} transactionsuccess`;
  }

  update(id: number, updateTransactionsuccessDto: UpdateTransactionsuccessDto) {
    return `This action updates a #${id} transactionsuccess`;
  }

  remove(id: number) {
    return `This action removes a #${id} transactionsuccess`;
  }
}
