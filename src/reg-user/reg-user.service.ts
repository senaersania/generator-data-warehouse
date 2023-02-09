import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRegUserDto } from './dto/create-reg-user.dto';
import { UpdateRegUserDto } from './dto/update-reg-user.dto';
import { RegUser } from './entities/reg-user.entity';

@Injectable()
export class RegUserService {
  constructor(
    @InjectRepository(RegUser) private regUserRepository: Repository<RegUser>
  ) {}

  findAll() {
    return this.regUserRepository.find();
  }

  async findOne(user_id: string) {
    const regUser = await this.regUserRepository.findOne({where:{user_id}})
    if (regUser) {
      return regUser;
    }
    throw new HttpException("data not found", HttpStatus.NOT_FOUND);
  }
}
