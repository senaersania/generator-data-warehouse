import { PartialType } from '@nestjs/mapped-types';
import { CreateOjkTransactionSuccessDto } from './create-ojk-transaction-success.dto';

export class UpdateOjkTransactionSuccessDto extends PartialType(CreateOjkTransactionSuccessDto) {}
