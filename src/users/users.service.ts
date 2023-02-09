import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>
  ) {}

  async create(createUserDto: CreateUserDto) {
    const newUser = await this.userRepository.create(createUserDto);
    await this.userRepository.save(newUser);
    return newUser;
  }

  findAll() {
    return this.userRepository.find();
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOne({where:{id}});
    if (user) {
      return user;
    }
    throw new HttpException("user not found", HttpStatus.NOT_FOUND);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.userRepository.update(id, updateUserDto);
    const updateUser = await this.userRepository.findOne({where:{id}});
    if (updateUser) {
      return updateUser;
    }
    throw new HttpException("bad request", HttpStatus.BAD_REQUEST);
  }

  async remove(id: number) {
    const deleteUser = await this.userRepository.delete(id);
    if (!deleteUser.affected) {
      throw new HttpException("bad request", HttpStatus.BAD_REQUEST);
    }
  }
}
