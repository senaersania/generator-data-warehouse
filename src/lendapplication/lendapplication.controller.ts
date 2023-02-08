import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LendapplicationService } from './lendapplication.service';
import { CreateLendapplicationDto } from './dto/create-lendapplication.dto';
import { UpdateLendapplicationDto } from './dto/update-lendapplication.dto';

@Controller('lendapplication')
export class LendapplicationController {
  constructor(private readonly lendapplicationService: LendapplicationService) {}

  @Post()
  create(@Body() createLendapplicationDto: CreateLendapplicationDto) {
    return this.lendapplicationService.create(createLendapplicationDto);
  }

  @Get()
  findAll() {
    return this.lendapplicationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lendapplicationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLendapplicationDto: UpdateLendapplicationDto) {
    return this.lendapplicationService.update(+id, updateLendapplicationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lendapplicationService.remove(+id);
  }
}
