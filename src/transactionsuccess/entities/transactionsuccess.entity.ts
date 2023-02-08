import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TransactionSuccess {
    @PrimaryGeneratedColumn()
    serial_id: number;

    @Column()
    borrower_userid: number;

    @Column()
    lend_userid: number;

    @Column()
    amount: number;

    @Column()
    fee_amount: number;

    @Column()
    loant_period: number;

    @Column()
    master_loan_period: number;

    @Column()
    due_date: Date;

    @Column()
    loan_success_date: Date;

    @Column()
    agreement_number: number;

    @Column()
    loan_success_times: Date;
}
