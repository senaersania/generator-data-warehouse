import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ schema: "ads" })
export class OjkTransactionSuccess {
    @PrimaryGeneratedColumn()
    serial_id: number;

    @Column()
    borrower_userid: number;

    @Column()
    lend_userid: number;

    @Column({
        type: "decimal", 
        precision: 82, 
        scale: 18, 
        default: 0})
    amount: number;

    @Column({
        type: "decimal", 
        precision: 82, 
        scale: 18, 
        default: 0})
    fee_amount: number;

    @Column()
    loan_period: number;

    @Column("text")
    master_loan_period: string;

    @Column("text")
    master_payment_type: string;

    @Column({
        type: 'date'
    })
    due_date: string;

    @Column({
        type: 'date'
    })
    loan_success_date: string;

    @Column("text")
    agreement_number: string;

    @Column({
        type: "bigint"
    })
    loan_success_times: string;
}
