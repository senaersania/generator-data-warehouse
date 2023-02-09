import { Module } from '@nestjs/common';
import { OjkLoanApplicationService } from './ojk-loan-application.service';
import { OjkLoanApplicationController } from './ojk-loan-application.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OjkLoanApplication } from './entities/ojk-loan-application.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OjkLoanApplication])],
  controllers: [OjkLoanApplicationController],
  providers: [OjkLoanApplicationService]
})
export class OjkLoanApplicationModule {}
