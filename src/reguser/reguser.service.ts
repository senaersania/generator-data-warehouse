import { Injectable } from '@nestjs/common';
import { CreateReguserDto } from './dto/create-reguser.dto';
import { UpdateReguserDto } from './dto/update-reguser.dto';

@Injectable()
export class ReguserService {
  create(createReguserDto: CreateReguserDto) {
    return 'This action adds a new reguser';
  }

  findAll() {
    return `This action returns all reguser`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reguser`;
  }

  update(id: number, updateReguserDto: UpdateReguserDto) {
    return `This action updates a #${id} reguser`;
  }

  remove(id: number) {
    return `This action removes a #${id} reguser`;
  }
}
