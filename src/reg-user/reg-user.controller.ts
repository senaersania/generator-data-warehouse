import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RegUserService } from './reg-user.service';
import { CreateRegUserDto } from './dto/create-reg-user.dto';
import { UpdateRegUserDto } from './dto/update-reg-user.dto';

@Controller('reg-user')
export class RegUserController {
  constructor(private readonly regUserService: RegUserService) {}

  @Get()
  findAll() {
    return this.regUserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.regUserService.findOne(id);
  }
}
