import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOjkLoanApplicationDto } from './dto/create-ojk-loan-application.dto';
import { UpdateOjkLoanApplicationDto } from './dto/update-ojk-loan-application.dto';
import { OjkLoanApplication } from './entities/ojk-loan-application.entity';

@Injectable()
export class OjkLoanApplicationService {
  constructor(
    @InjectRepository(OjkLoanApplication) private ojkLoanApplicationRepository: Repository<OjkLoanApplication>
  ) {}

  findAll() {
    return this.ojkLoanApplicationRepository.find();
  }

  async findOne(user_id: number) {
    const ojkLoanApplication = await this.ojkLoanApplicationRepository.findOne({where:{user_id}});
    if (ojkLoanApplication) {
      return ojkLoanApplication;
    }
    throw new HttpException("data not found", HttpStatus.NOT_FOUND);
  }
}
