import { PartialType } from '@nestjs/mapped-types';
import { CreateLendapplicationDto } from './create-lendapplication.dto';

export class UpdateLendapplicationDto extends PartialType(CreateLendapplicationDto) {}
