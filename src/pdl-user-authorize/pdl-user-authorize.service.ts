import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePdlUserAuthorizeDto } from './dto/create-pdl-user-authorize.dto';
import { UpdatePdlUserAuthorizeDto } from './dto/update-pdl-user-authorize.dto';
import { PdlUserAuthorize } from './entities/pdl-user-authorize.entity';

@Injectable()
export class PdlUserAuthorizeService {
  constructor(
    @InjectRepository(PdlUserAuthorize) private pdlUserAuthorizeRepository: Repository<PdlUserAuthorize>
  ) {}

  findAll() {
    return this.pdlUserAuthorizeRepository.find();
  }

  async findOne(user_id: number) {
    const pdlUserAuthorize = await this.pdlUserAuthorizeRepository.findOne({where:{user_id}})
    if (pdlUserAuthorize) {
      return pdlUserAuthorize;
    }
    throw new HttpException("data not found", HttpStatus.NOT_FOUND);
  }
}
