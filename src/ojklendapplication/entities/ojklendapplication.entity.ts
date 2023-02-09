import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity({ schema: "ads" })
export class OjkLendApplication {
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
        name:"Amount of loan offered by lender",
        nullable: true
    })
    amount_loan: number;

    @Column({
        type: "decimal", 
        precision: 82, 
        scale: 18, 
        default: 0,
        nullable: true
    })
    interest_amount: number;

    @Column({
        length: 30,
        nullable: true
    })
    virtual_account: string;

    @Column({
        type: "date",
        nullable: true
    })
    lend_date: string;
}
