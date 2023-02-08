import { PartialType } from '@nestjs/mapped-types';
import { CreateTransactionsuccessDto } from './create-transactionsuccess.dto';

export class UpdateTransactionsuccessDto extends PartialType(CreateTransactionsuccessDto) {}
