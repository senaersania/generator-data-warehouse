import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOjkLendApplicationDto } from './dto/create-ojk-lend-application.dto';
import { UpdateOjkLendApplicationDto } from './dto/update-ojk-lend-application.dto';
import { OjkLendApplication } from './entities/ojk-lend-application.entity';

@Injectable()
export class OjkLendApplicationService {
  constructor(
    @InjectRepository(OjkLendApplication) private ojkLendApplicationRepository: Repository<OjkLendApplication>
  ) {}
  findAll() {
    return this.ojkLendApplicationRepository.find();
  }

  async findOne(serial_id: number) {
    const ojkLendApplication = await this.ojkLendApplicationRepository.findOne({where:{serial_id}});
    if (ojkLendApplication) {
      return ojkLendApplication;
    }
    throw new HttpException("data not found", HttpStatus.NOT_FOUND);
  }
}
