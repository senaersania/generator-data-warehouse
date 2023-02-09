import { Module } from '@nestjs/common';
import { RegBorrowerService } from './reg-borrower.service';
import { RegBorrowerController } from './reg-borrower.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegBorrower } from './entities/reg-borrower.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RegBorrower])],
  controllers: [RegBorrowerController],
  providers: [RegBorrowerService]
})
export class RegBorrowerModule {}
