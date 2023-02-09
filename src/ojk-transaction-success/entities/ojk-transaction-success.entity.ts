import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ schema: "ads" })
export class OjkTransactionSuccess {
    @PrimaryGeneratedColumn()
    serial_id: number;

    @Column({
        nullable: true
    })
    borrower_userid: number;

    @Column({
        nullable: true
    })
    lend_userid: number;

    @Column({
        type: "decimal", 
        precision: 82, 
        scale: 18, 
        default: 0,
        nullable: true
    })
    amount: number;

    @Column({
        type: "decimal", 
        precision: 82, 
        scale: 18, 
        default: 0,
        nullable: true
    })
    fee_amount: number;

    @Column({
        nullable: true
    })
    loan_period: number;

    @Column({
        type: "text",
        nullable: true
    })
    master_loan_period: string;

    @Column({
        type: "text",
        nullable: true
    })
    master_payment_type: string;

    @Column({
        type: 'date',
        nullable: true
    })
    due_date: string;

    @Column({
        type: 'date',
        nullable: true
    })
    loan_success_date: string;

    @Column({
        type: "text",
        nullable: true
    })
    agreement_number: string;

    @Column({
        type: "bigint",
        nullable: true
    })
    loan_success_times: string;
}
