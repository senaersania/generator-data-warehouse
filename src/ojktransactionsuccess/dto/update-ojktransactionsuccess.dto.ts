import { PartialType } from '@nestjs/mapped-types';
import { CreateOjktransactionsuccessDto } from './create-ojktransactionsuccess.dto';

export class UpdateOjktransactionsuccessDto extends PartialType(CreateOjktransactionsuccessDto) {
    serial_id: number;
    borrower_userid: number;
    lend_userid: number;
    amount: number;
    fee_amount: number;
    loant_period: number;
    master_loan_period: number;
    due_date: Date;
    loan_success_date: Date;
    agreement_number: number;
    loan_success_times: Date;
}
