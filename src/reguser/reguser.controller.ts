import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReguserService } from './reguser.service';
import { CreateReguserDto } from './dto/create-reguser.dto';
import { UpdateReguserDto } from './dto/update-reguser.dto';

@Controller('reguser')
export class ReguserController {
  constructor(private readonly reguserService: ReguserService) {}

  @Post()
  create(@Body() createReguserDto: CreateReguserDto) {
    return this.reguserService.create(createReguserDto);
  }

  @Get()
  findAll() {
    return this.reguserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reguserService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReguserDto: UpdateReguserDto) {
    return this.reguserService.update(+id, updateReguserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reguserService.remove(+id);
  }
}
