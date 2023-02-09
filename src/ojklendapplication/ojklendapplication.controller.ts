import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OjklendapplicationService } from './ojklendapplication.service';
import { CreateOjklendapplicationDto } from './dto/create-ojklendapplication.dto';
import { UpdateOjklendapplicationDto } from './dto/update-ojklendapplication.dto';

@Controller('ojklendapplication')
export class OjklendapplicationController {
  constructor(private readonly ojklendapplicationService: OjklendapplicationService) {}

  @Get()
  findAll() {
    return this.ojklendapplicationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ojklendapplicationService.findOne(+id);
  }
}
