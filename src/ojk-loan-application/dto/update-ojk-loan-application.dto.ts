import { PartialType } from '@nestjs/mapped-types';
import { CreateOjkLoanApplicationDto } from './create-ojk-loan-application.dto';

export class UpdateOjkLoanApplicationDto extends PartialType(CreateOjkLoanApplicationDto) {}
