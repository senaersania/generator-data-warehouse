import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ schema: "ads" })
export class RegBorrower {
    @PrimaryGeneratedColumn()
    user_id: string;

    @Column({
        nullable: true
    })
	serial_id: number;

    @Column({
        nullable: true
    })
	borrower: number;

    @Column({
        nullable: true
    })
	name: string;

    @Column({
        nullable: true
    })
	id_card: number;

    @Column({
        nullable: true
    })
	tax_id: number;

    @Column({
        nullable: true
    })
	birthday: string;

    @Column({
        nullable: true
    })
	sex: string;

    @Column({
        nullable: true
    })
	adress: string;

    @Column({
        nullable: true
    })
	area: string;

    @Column({
        nullable: true
    })
	province: string;

    @Column({
        nullable: true
    })
	city: string;

    @Column({
        nullable: true
    })
	post_code: number;

    @Column({
        nullable: true
    })
	religion: string;

    @Column({
        nullable: true
    })
	marriage_type: string;

    @Column({
        nullable: true
    })
	job: string;

    @Column({
        nullable: true
    })
	education: string;

    @Column({
        nullable: true
    })
	salary: number;
}
