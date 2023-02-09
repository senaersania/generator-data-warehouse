import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OjkLendApplicationService } from './ojk-lend-application.service';
import { CreateOjkLendApplicationDto } from './dto/create-ojk-lend-application.dto';
import { UpdateOjkLendApplicationDto } from './dto/update-ojk-lend-application.dto';

@Controller('ojk-lend-application')
export class OjkLendApplicationController {
  constructor(private readonly ojkLendApplicationService: OjkLendApplicationService) {}

  @Get()
  findAll() {
    return this.ojkLendApplicationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ojkLendApplicationService.findOne(+id);
  }
}
