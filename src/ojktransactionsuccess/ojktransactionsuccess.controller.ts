import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OjktransactionsuccessService } from './ojktransactionsuccess.service';

@Controller('ojktransactionsuccess')
export class OjktransactionsuccessController {
  constructor(private readonly ojktransactionsuccessService: OjktransactionsuccessService) {}
  @Get()
  findAll() {
    return this.ojktransactionsuccessService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') serial_id: string) {
    return this.ojktransactionsuccessService.findOne(+serial_id);
  }
}
