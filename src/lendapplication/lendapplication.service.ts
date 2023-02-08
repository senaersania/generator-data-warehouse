import { Injectable } from '@nestjs/common';
import { CreateLendapplicationDto } from './dto/create-lendapplication.dto';
import { UpdateLendapplicationDto } from './dto/update-lendapplication.dto';

@Injectable()
export class LendapplicationService {
  create(createLendapplicationDto: CreateLendapplicationDto) {
    return 'This action adds a new lendapplication';
  }

  findAll() {
    return `This action returns all lendapplication`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lendapplication`;
  }

  update(id: number, updateLendapplicationDto: UpdateLendapplicationDto) {
    return `This action updates a #${id} lendapplication`;
  }

  remove(id: number) {
    return `This action removes a #${id} lendapplication`;
  }
}
