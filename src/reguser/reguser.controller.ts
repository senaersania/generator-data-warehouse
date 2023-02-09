import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReguserService } from './reguser.service';
import { CreateReguserDto } from './dto/create-reguser.dto';
import { UpdateReguserDto } from './dto/update-reguser.dto';

@Controller('reguser')
export class ReguserController {
  constructor(private readonly reguserService: ReguserService) {}

  @Get()
  findAll() {
    return this.reguserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') user_id: string) {
    return this.reguserService.findOne(user_id);
  }
}
