import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ schema: "ads" })
export class OjkLoanApplication {
    @PrimaryGeneratedColumn()
    serial_id: number;

    @Column({
        nullable: true
    })
    user_id: number;

    @Column({
        nullable: true
    })
	application_status: number;

    @Column({
        nullable: true
    })
	loan_period: number;

    @Column({
        nullable: true
    })
	master_loan_period: number;

    @Column({
        nullable: true
    })
	maximum_loan_facility: number;

    @Column({
        nullable: true
    })
	approved_loan_amount: number;

    @Column({
        nullable: true
    })
	fee_amount: number;

    @Column({
        nullable: true
    })
	loan_approved_date: number;

    @Column({
        nullable: true
    })
	funding_date_from_lender_to_borrower: number;

    @Column({
        nullable: true
    })
	loan_success_times: number;
}
