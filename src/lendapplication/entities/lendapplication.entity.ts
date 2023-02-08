import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class LendApplication {
    @PrimaryGeneratedColumn()
    serial_id: number;

    @Column()
    borrower_userid: number;

    @Column()
    lend_userid: number;

    @Column()
    interest_amount: number;

    @Column()
    virtual_account: number;

    @Column()
    lend_date: Date;
}
