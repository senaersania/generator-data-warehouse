import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PdlUserAuthorizeService } from './pdl-user-authorize.service';
import { CreatePdlUserAuthorizeDto } from './dto/create-pdl-user-authorize.dto';
import { UpdatePdlUserAuthorizeDto } from './dto/update-pdl-user-authorize.dto';

@Controller('pdl-user-authorize')
export class PdlUserAuthorizeController {
  constructor(private readonly pdlUserAuthorizeService: PdlUserAuthorizeService) {}

  @Get()
  findAll() {
    return this.pdlUserAuthorizeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pdlUserAuthorizeService.findOne(+id);
  }
}
