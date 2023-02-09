import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRegBorrowerDto } from './dto/create-reg-borrower.dto';
import { UpdateRegBorrowerDto } from './dto/update-reg-borrower.dto';
import { RegBorrower } from './entities/reg-borrower.entity';

@Injectable()
export class RegBorrowerService {
  constructor(
    @InjectRepository(RegBorrower) private regBorrowerRepository: Repository<RegBorrower>
  ) {}

  findAll() {
    return this.regBorrowerRepository.find();
  }

  async findOne(serial_id: number) {
    const regBorrower = await this.regBorrowerRepository.findOne({where:{serial_id}})
    if (regBorrower) {
      return regBorrower;
    }
    throw new HttpException("data not found", HttpStatus.NOT_FOUND);
  }
}
