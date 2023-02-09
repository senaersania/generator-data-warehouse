import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OjkLoanApplicationService } from './ojk-loan-application.service';
import { CreateOjkLoanApplicationDto } from './dto/create-ojk-loan-application.dto';
import { UpdateOjkLoanApplicationDto } from './dto/update-ojk-loan-application.dto';

@Controller('ojk-loan-application')
export class OjkLoanApplicationController {
  constructor(private readonly ojkLoanApplicationService: OjkLoanApplicationService) {}

  @Get()
  findAll() {
    return this.ojkLoanApplicationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ojkLoanApplicationService.findOne(+id);
  }
}
