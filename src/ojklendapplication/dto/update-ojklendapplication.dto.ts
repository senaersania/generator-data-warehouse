import { PartialType } from '@nestjs/mapped-types';
import { CreateOjklendapplicationDto } from './create-ojklendapplication.dto';

export class UpdateOjklendapplicationDto extends PartialType(CreateOjklendapplicationDto) {
    serial_id: number;
    borrower_userid: number;
    lend_userid: number;
    amount_loan: number;
    interest_amount: number;
    virtual_account: string;
    lend_date: string;
}
