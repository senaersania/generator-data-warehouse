import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOjklendapplicationDto } from './dto/create-ojklendapplication.dto';
import { UpdateOjklendapplicationDto } from './dto/update-ojklendapplication.dto';
import { OjkLendApplication } from './entities/ojklendapplication.entity';

@Injectable()
export class OjklendapplicationService {
  constructor(
    @InjectRepository(OjkLendApplication) private ojkLendApplicationRepository: Repository<OjkLendApplication>
  ) {}

  findAll() {
    return this.ojkLendApplicationRepository.find();
  }

  async findOne(serial_id: number) {
    const ojkLendApplication = await this.ojkLendApplicationRepository.findOne({where:{serial_id}})
    if (ojkLendApplication) {
      return ojkLendApplication
    }
    throw new HttpException("applicant not found ", HttpStatus.NOT_FOUND);
  }
}
