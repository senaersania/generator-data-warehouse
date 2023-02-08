import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TransactionsuccessService } from './transactionsuccess.service';
import { CreateTransactionsuccessDto } from './dto/create-transactionsuccess.dto';
import { UpdateTransactionsuccessDto } from './dto/update-transactionsuccess.dto';

@Controller('transactionsuccess')
export class TransactionsuccessController {
  constructor(private readonly transactionsuccessService: TransactionsuccessService) {}

  @Post()
  create(@Body() createTransactionsuccessDto: CreateTransactionsuccessDto) {
    return this.transactionsuccessService.create(createTransactionsuccessDto);
  }

  @Get()
  findAll() {
    return this.transactionsuccessService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transactionsuccessService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTransactionsuccessDto: UpdateTransactionsuccessDto) {
    return this.transactionsuccessService.update(+id, updateTransactionsuccessDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transactionsuccessService.remove(+id);
  }
}
