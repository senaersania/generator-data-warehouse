import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OjkTransactionSuccess } from './entities/ojk-transaction-success.entity';

@Injectable()
export class OjkTransactionSuccessService {
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
