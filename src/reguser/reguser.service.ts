import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegUser } from './entities/reguser.entity';

@Injectable()
export class ReguserService {
  constructor(
    @InjectRepository(RegUser) private regUserRepository: Repository<RegUser>
  ) {}

  findAll() {
    return this.regUserRepository.find();
  }

  async findOne(user_id: string) {
    const regUser = await this.regUserRepository.findOne({where:{user_id}});
    if (regUser) {
      return regUser;
    }
    throw new HttpException("user not found", HttpStatus.NOT_FOUND);
  }
}
