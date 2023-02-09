import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OjkTransactionSuccess } from './entities/ojktransactionsuccess.entity';

@Injectable()
export class OjktransactionsuccessService {
  constructor(
    @InjectRepository(OjkTransactionSuccess) private ojkTransactionSuccessRepository : Repository<OjkTransactionSuccess>
  ) {}

  findAll() {
    return this.ojkTransactionSuccessRepository.find();
  }

  async findOne(serial_id: number) {
    const ojkTransactionSuccess = await this.ojkTransactionSuccessRepository.findOne({where:{serial_id}})
    if (ojkTransactionSuccess) {
      return ojkTransactionSuccess;
    }
    throw new HttpException("user not found", HttpStatus.NOT_FOUND);
  }
}
