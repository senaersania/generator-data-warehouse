import { Module } from '@nestjs/common';
import { PdlUserAuthorizeService } from './pdl-user-authorize.service';
import { PdlUserAuthorizeController } from './pdl-user-authorize.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PdlUserAuthorize } from './entities/pdl-user-authorize.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PdlUserAuthorize])],
  controllers: [PdlUserAuthorizeController],
  providers: [PdlUserAuthorizeService]
})
export class PdlUserAuthorizeModule {}
