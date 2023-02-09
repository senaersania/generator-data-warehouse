import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OjkTransactionSuccessService } from './ojk-transaction-success.service';
import { CreateOjkTransactionSuccessDto } from './dto/create-ojk-transaction-success.dto';
import { UpdateOjkTransactionSuccessDto } from './dto/update-ojk-transaction-success.dto';

@Controller('ojk-transaction-success')
export class OjkTransactionSuccessController {
  constructor(private readonly ojkTransactionSuccessService: OjkTransactionSuccessService) {}

  @Get()
  findAll() {
    return this.ojkTransactionSuccessService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ojkTransactionSuccessService.findOne(+id);
  }
}
