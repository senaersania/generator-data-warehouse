import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RegBorrowerService } from './reg-borrower.service';
import { CreateRegBorrowerDto } from './dto/create-reg-borrower.dto';
import { UpdateRegBorrowerDto } from './dto/update-reg-borrower.dto';

@Controller('reg-borrower')
export class RegBorrowerController {
  constructor(private readonly regBorrowerService: RegBorrowerService) {}

  @Get()
  findAll() {
    return this.regBorrowerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.regBorrowerService.findOne(+id);
  }
}
