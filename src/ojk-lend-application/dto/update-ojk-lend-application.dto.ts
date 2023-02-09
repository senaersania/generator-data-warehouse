import { PartialType } from '@nestjs/mapped-types';
import { CreateOjkLendApplicationDto } from './create-ojk-lend-application.dto';

export class UpdateOjkLendApplicationDto extends PartialType(CreateOjkLendApplicationDto) {}
